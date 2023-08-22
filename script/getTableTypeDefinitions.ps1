Param(
    [string[]]$TableNames = @('task', 'sc_cat_item'),
    [Uri]$BaseUri = 'https://dev145540.service-now.com'
)
if ($null -eq $Script:SnCredentials) { $Script:SnCredentials = Get-Credential -Message 'SN Login' }
$Script:SysDictionaryPath = $PSScriptRoot | Join-Path -ChildPath 'sys_dictionary';
if (-not ($Script:SysDictionaryPath | Test-Path)) { New-Item -Path $Script:SysDictionaryPath -ItemType Directory -Name 'sys_dictionary' };
class SysScope {
    [string]$sys_id;
    [string]$value;
    [string]$name;
    [string]$short_description;

    static [SysScope] Load([string]$Value, [Hashtable]$Data) {
        $SysScope = [SysScope]@{
            sys_id = [GlideType]::NullIfEmpty($Data['sys_id']);
            value = [GlideType]::NullIfEmpty($Value);
            name = [GlideType]::DefaultIfEmpty($Data['name'], $Value);
            short_description = [GlideType]::NullIfEmpty($Data['short_description']);
        };
        if ($null -ne $SysScope.value -and $null -ne $SysScope.name -and -not [string]::IsNullOrWhiteSpace($SysScope.sys_id)) { return $SysScope }
        return $null;
    }

    static [SysScope] Import([TypeDb]$TypeDb, [PSObject]$JsonObj) {
        $n = [GlideType]::DefaultIfEmpty($JsonObj.name, $JsonObj.scope);
        $SysScope = [SysScope]@{
            sys_id = [GlideType]::NullIfEmpty($JsonObj.sys_id);
            value = $JsonObj.scope;
            name = $n;
            short_description = [GlideType]::NullIfEmpty($JsonObj.short_description);
        };
        if ($null -eq $SysScope.sys_id -or $null -eq $SysScope.value) { return $null }
        if ($TypeDb.Scopes.ContainsKey($SysScope.value)) {
            Write-Warning -Message "Duplicate scope: $(($SysScope.value | ConvertTo-Json))";
            $TypeDb.Scopes[$SysScope.value] = $SysScope;
            if (!$TypeDb.ScopeSysIdMap.ContainsKey($SysScope.sys_id)) {
                $TypeDb.ScopeSysIdMap.Add($SysScope.sys_id, $SysScope.value);
            }
        } else {
            $TypeDb.Scopes.Add($SysScope.value, $SysScope);
            $TypeDb.ScopeSysIdMap.Add($SysScope.sys_id, $SysScope.value);
        }
        return $SysScope;
    }

    [PSObject]ForJsonExport() {
        $Result = [PSCustomObject]@{ sys_id = $this.sys_id; }
        if ($this.name -cne $this.value) { $Result | Add-Member -MemberType NoteProperty -Name 'name' -Value $this.name }
        if (-not [string]::IsNullOrWhiteSpace($this.short_description)) { $Result | Add-Member -MemberType NoteProperty -Name 'short_description' -Value $this.short_description }
        return $result;
    }

    [string] ToString() {
        if ($this.name -ceq $this.value) { return $this.name }
        return "$(($this.name | ConvertTo-Json)) ($($this.value))";
    }
}

class TableInfo {
    [string]$sys_id;
    [string]$name;
    [string]$label;
    [bool]$is_extendable;
    [string]$scope;
    [string]$super_class;
    [string]$number_prefix;

    static [TableInfo] Load([string]$Name, [Hashtable]$Data) {
        $TableInfo = [TableInfo]@{
            sys_id = [GlideType]::NullIfEmpty($Data['sys_id']);
            name = [GlideType]::NullIfEmpty($Name);
            label = [GlideType]::DefaultIfEmpty($Data['label'], $Name);
            is_extendable = [GlideType]::IsTrue($Data['is_extendable']);
            scope = [GlideType]::NullIfEmpty($Data['scope']);
            super_class = [GlideType]::NullIfEmpty($Data['super_class']);
            number_prefix = [GlideType]::NullIfEmpty($Data['number_prefix']);
        };
        if ($null -ne $TableInfo.name -and -not [string]::IsNullOrWhiteSpace($TableInfo.sys_id)) { return $TableInfo }
        return $null;
    }

    static [TableInfo] Import([TypeDb]$TypeDb, [PSObject]$JsonObj, [string]$TableName) {
        $n = [GlideType]::DefaultIfEmpty($JsonObj.name, $TableName);
        $TableInfo = [TableInfo]@{
            sys_id = [GlideType]::NullIfEmpty($JsonObj.sys_id);
            name = $n;
            label = [GlideType]::DefaultIfEmpty($JsonObj.label, $n);
            is_extendable = [GlideType]::IsTrue($JsonObj.is_extendable);
            scope = [GlideType]::NullIfEmpty($JsonObj.scope);
            number_prefix = [GlideType]::NullIfEmpty($JsonObj.number_prefix);
        };
        if ($null -eq $TableInfo.name -or [string]::IsNullOrWhiteSpace($TableInfo.sys_id)) { return $null }
        if ($TypeDb.TableDefinitions.ContainsKey($TableInfo.name)) {
            Write-Warning -Message "Duplicate table: $(($TableInfo.name | ConvertTo-Json))";
            $TypeDb.TableDefinitions[$TableInfo.name] = $TableInfo;
            if (!$TypeDb.TableSysIdMap.ContainsKey($TableInfo.sys_id)) {
                $TypeDb.TableSysIdMap.Add($TableInfo.sys_id, $TableInfo.name);
            }
        } else {
            $TypeDb.TableDefinitions.Add($TableInfo.name, $TableInfo);
            $TypeDb.TableSysIdMap.Add($TableInfo.sys_id, $TableInfo.name);
        }
        if ($null -ne $JsonObj.super_class -and $null -ne $JsonObj.super_class.value) {
            $sc = $TypeDb.FetchTableInfo($JsonObj.super_class.value, [GlideType]::AsAbsoluteUri($JsonObj.super_class.link));
            if ($null -ne $sc) { $TableInfo.super_class = $sc.name }
        }
        return $TableInfo;
    }

    [PSObject]ForJsonExport() {
        $Result = [PSCustomObject]@{ sys_id = $this.sys_id; }
        if ($this.name -cne $this.label) { $Result | Add-Member -MemberType NoteProperty -Name 'label' -Value $this.label }
        if ($this.is_extendable) { $Result | Add-Member -MemberType NoteProperty -Name 'is_extendable' -Value $true }
        if (-not [string]::IsNullOrWhiteSpace($this.scope)) { $Result | Add-Member -MemberType NoteProperty -Name 'scope' -Value $this.scope }
        if (-not [string]::IsNullOrWhiteSpace($this.super_class)) { $Result | Add-Member -MemberType NoteProperty -Name 'super_class' -Value $this.super_class }
        if (-not [string]::IsNullOrWhiteSpace($this.number_prefix)) { $Result | Add-Member -MemberType NoteProperty -Name 'number_prefix' -Value $this.number_prefix }
        return $result;
    }

    [string] ToString() {
        if ($this.name -ceq $this.label) { return $this.name }
        return "$(($this.label | ConvertTo-Json)) ($($this.name))";
    }
}

class GlideType {
    [string]$sys_id;
    [string]$name;
    [string]$label;
    [string]$scalar_type;
    [Nullable[int]]$scalar_length;
    [string]$class_name;
    [string]$scope;
    [boolean]$use_original_value;
    [boolean]$visible;

    static [Uri] AsAbsoluteUri([string]$Value) {
        if ([string]::IsNullOrWhiteSpace($Value)) { return $null; }
        [Uri]$Uri = $null;
        if ([Uri]::TryCreate($Value, [System.UriKind]::Absolute, [ref]$Uri)) { return $Uri }
        return $null;
    }

    static [Nullable[int]] AsInt([object]$Value) {
        if ($null -eq $Value -or $Value -is [int]) { return $Value }
        $i = 0;
        if ($Value -is [string]) {
            if ([int]::TryParse($Value, [ref]$i)) { return $i }
        } else {
            if ([int]::TryParse('' + $Value, [ref]$i)) { return $i }
        }
        return $null;
    }

    static [bool] IsTrue([object]$Value) {
        if ($null -eq $Value) { return $false }
        if ($Value -is [bool]) { return $Value }
        try {
            if ($Value -is [string]) { return [System.Xml.XmlConvert]::ToBoolean($Value) }
            return [System.Xml.XmlConvert]::ToBoolean($Value.ToString());
        } catch { return $false }
    }

    static [string] NullIfEmpty([string]$Value) {
        if ([string]::IsNullOrWhiteSpace($Value)) { return $null }
        return $Value;
    }

    static [string] DefaultIfEmpty([string]$Value, [string]$DefaultValue) {
        if ([string]::IsNullOrWhiteSpace($Value)) { return $DefaultValue }
        return $Value;
    }

    static [GlideType] Import([TypeDb]$TypeDb, [PSObject]$JsonObj) {
        $GlideType = [GlideType]@{
            sys_id = [GlideType]::NullIfEmpty($JsonObj.sys_id);
            name = $JsonObj.name;
            label = [GlideType]::DefaultIfEmpty($JsonObj.label, $JsonObj.name);
            scalar_type = [GlideType]::DefaultIfEmpty($JsonObj.scalar_type, 'string');
            scalar_length = [GlideType]::AsInt($JsonObj.scalar_length);
            class_name = [GlideType]::NullIfEmpty($JsonObj.class_name);
            use_original_value = [GlideType]::IsTrue($JsonObj.use_original_value);
            visible = [GlideType]::IsTrue($JsonObj.visible);
        };
        if ($null -eq $GlideType.sys_id -or $null -eq $GlideType.name) { return $null }
        if ($TypeDb.Types.ContainsKey($GlideType.name)) {
            Write-Warning -Message "Duplicate type: $(($GlideType.name | ConvertTo-Json))";
            $TypeDb.Types[$GlideType.name] = $GlideType;
            if (!$TypeDb.TypeSysIdMap.ContainsKey($GlideType.sys_id)) {
                $TypeDb.TypeSysIdMap.Add($GlideType.sys_id, $GlideType.name);
            }
        } else {
            $TypeDb.Types.Add($GlideType.name, $GlideType);
            $TypeDb.TypeSysIdMap.Add($GlideType.sys_id, $GlideType.name);
        }
        if ($null -ne $JsonObj.sys_scope -and -not [string]::IsNullOrWhiteSpace($JsonObj.sys_scope.value)) {
            [SysScope]$s = $null;
            [Uri]$RemoteUrl = $null;
            if ((-not [string]::IsNullOrWhiteSpace($JsonObj.sys_scope.link)) -and [Uri]::TryCreate($JsonObj.sys_scope.link, [System.UriKind]::Absolute, [ref]$RemoteUrl)) {
                $s = $TypeDb.FetchScope($JsonObj.sys_scope.value, $RemoteUrl);
            } else {
                $s = $TypeDb.FetchScope($JsonObj.sys_scope.value, $null);
            }
            if ($null -ne $s) { $GlideType.scope = $s.value }
        }
        return $GlideType;
    }

    static [GlideType] Load([string]$Name, [Hashtable]$Data) {
        $GlideType = [GlideType]@{
            sys_id = [GlideType]::NullIfEmpty($Data['sys_id']);
            name = [GlideType]::NullIfEmpty($Name);
            label = [GlideType]::DefaultIfEmpty($Data['label'], $Name);
            scalar_type = [GlideType]::DefaultIfEmpty($Data['scalar_type'], 'string');
            scalar_length = [GlideType]::AsInt($Data['scalar_length']);
            class_name = [GlideType]::NullIfEmpty($Data['class_name']);
            scope = [GlideType]::NullIfEmpty($Data['scope']);
            use_original_value = [GlideType]::IsTrue($Data['use_original_value']);
            visible = [GlideType]::IsTrue($Data['visible']);
        };
        if ($null -ne $GlideType.name -and $null -ne $GlideType.scalar_type -and -not [string]::IsNullOrWhiteSpace($GlideType.sys_id)) { return $GlideType }
        return $null;
    }

    [PSObject]ForJsonExport() {
        $Result = [PSCustomObject]@{ sys_id = $this.sys_id; }
        if ($this.label -cne $this.name) { $Result | Add-Member -MemberType NoteProperty -Name 'label' -Value $this.label }
        if ($this.scalar_type -ne 'string') { $Result | Add-Member -MemberType NoteProperty -Name 'scalar_type' -Value $this.scalar_type }
        if ($null -ne $this.scalar_length) { $Result | Add-Member -MemberType NoteProperty -Name 'scalar_length' -Value $this.scalar_length }
        if (-not [string]::IsNullOrWhiteSpace($this.class_name)) { $Result | Add-Member -MemberType NoteProperty -Name 'class_name' -Value $this.class_name }
        if (-not [string]::IsNullOrWhiteSpace($this.scope)) { $Result | Add-Member -MemberType NoteProperty -Name 'scope' -Value $this.scope }
        if ($this.use_original_value) { $Result | Add-Member -MemberType NoteProperty -Name 'use_original_value' -Value $true }
        if ($this.visible) { $Result | Add-Member -MemberType NoteProperty -Name 'visible' -Value $true }
        return $result;
    }

    [string] ToString() {
        if ($this.name -ceq $this.label) { return $this.name }
        return "$(($this.label | ConvertTo-Json)) ($($this.name))";
    }
}

class FieldInfo {
    [string]$sys_id;
    [string]$name;
    [string]$label;
    [string]$type;
    [string]$reference;
    [string]$scope;
    [bool]$active;
    [bool]$array;
    [string]$comments;
    [string]$default_value;
    [bool]$display;
    [bool]$mandatory;
    [Nullable[int]]$max_length;
    [bool]$primary;
    [bool]$read_only;
    [bool]$unique;

    static [FieldInfo] Load([string]$Name, [Hashtable]$Data) {
        $n = [GlideType]::NullIfEmpty($Data['name']);;
        $FieldInfo = [FieldInfo]@{
            sys_id = [GlideType]::NullIfEmpty($Data['sys_id']);
            name = $n;
            label = [GlideType]::DefaultIfEmpty($Data['column_label'], $n);
            active = [GlideType]::IsTrue($Data['active']);
            array = [GlideType]::IsTrue($Data['array']);
            comments = [GlideType]::NullIfEmpty($Data['comments']);
            default_value = [GlideType]::NullIfEmpty($Data['default_value']);
            display = [GlideType]::IsTrue($Data['display']);
            mandatory = [GlideType]::IsTrue($Data['mandatory']);
            max_length = [GlideType]::AsInt($Data['max_length']);
            primary = [GlideType]::IsTrue($Data['primary']);
            read_only = [GlideType]::IsTrue($Data['read_only']);
            unique = [GlideType]::IsTrue($Data['unique']);
        }
        if ($null -ne $FieldInfo.name -and -not [string]::IsNullOrWhiteSpace($FieldInfo.sys_id)) { return $FieldInfo }
        return $null;
    }
    
    static [void] Import([TypeDb]$TypeDb, [TableInfo]$TableInfo, [TableFields]$TableFields, $JsonObj) {
        if ($null -eq $JsonObj -or [string]::IsNullOrWhiteSpace($JsonObj.sys_id) -or [string]::IsNullOrWhiteSpace($JsonObj.element)) { return }
        $FieldInfo = [FieldInfo]@{
            sys_id = $JsonObj.sys_id;
            name = $JsonObj.element;
            label = [GlideType]::DefaultIfEmpty($JsonObj.column_label, $JsonObj.name);
            active = [GlideType]::IsTrue($JsonObj.active);
            array = [GlideType]::IsTrue($JsonObj.array);
            comments = [GlideType]::NullIfEmpty($JsonObj.comments);
            default_value = [GlideType]::NullIfEmpty($JsonObj.default_value);
            display = [GlideType]::IsTrue($JsonObj.display);
            mandatory = [GlideType]::IsTrue($JsonObj.mandatory);
            max_length = [GlideType]::AsInt($JsonObj.max_length);
            primary = [GlideType]::IsTrue($JsonObj.primary);
            read_only = [GlideType]::IsTrue($JsonObj.read_only);
            unique = [GlideType]::IsTrue($JsonObj.unique);
        };
        $TableFields.FieldIdMap.Add($FieldInfo.sys_id, $FieldInfo.name);
        $TableFields.Fields.Add($FieldInfo.name, $FieldInfo);
        if ($null -ne $JsonObj.internal_type -and $null -ne $JsonObj.internal_type.value) {
            $TypeInfo = $TypeDb.FetchType($JsonObj.internal_type.value, [GlideType]::AsAbsoluteUri($JsonObj.internal_type.link));
            if ($null -eq $TypeInfo) { $FieldInfo.type = $JsonObj.internal_type.value } else { $FieldInfo.type = $TypeInfo.name }
        } else {
            $FieldInfo.type = 'string';
        }
        if ($null -ne $JsonObj.reference -and $null -ne $JsonObj.reference.value) {
            $TableInfo = $TypeDb.FetchTableInfo($JsonObj.reference.value, [GlideType]::AsAbsoluteUri($JsonObj.reference.link));
            if ($null -ne $TableInfo) { $FieldInfo.reference = $TableInfo.name }
        }
        if ($null -ne $JsonObj.sys_scope -and $null -ne $JsonObj.sys_scope.value) {
            $ScopeInfo = $TypeDb.FetchScope($JsonObj.sys_scope.value, [GlideType]::AsAbsoluteUri($JsonObj.sys_scope.link));
            if ($null -ne $ScopeInfo) { $FieldInfo.scope = $ScopeInfo.value }
        }
    }

    [PSObject]ForJsonExport() {
        $Result = [PSCustomObject]@{ sys_id = $this.sys_id; }
        if ($this.label -cne $this.name) { $Result | Add-Member -MemberType NoteProperty -Name 'label' -Value $this.label }
        if ($this.type -ne 'string') { $Result | Add-Member -MemberType NoteProperty -Name 'type' -Value $this.scalar_type }
        if (-not [string]::IsNullOrWhiteSpace($this.reference)) { $Result | Add-Member -MemberType NoteProperty -Name 'reference' -Value $this.reference }
        if (-not [string]::IsNullOrWhiteSpace($this.scope)) { $Result | Add-Member -MemberType NoteProperty -Name 'scope' -Value $this.scope }
        if ($this.active) { $Result | Add-Member -MemberType NoteProperty -Name 'active' -Value $true }
        if ($this.array) { $Result | Add-Member -MemberType NoteProperty -Name 'array' -Value $true }
        if (-not [string]::IsNullOrWhiteSpace($this.comments)) { $Result | Add-Member -MemberType NoteProperty -Name 'comments' -Value $this.comments }
        if (-not [string]::IsNullOrWhiteSpace($this.default_value)) { $Result | Add-Member -MemberType NoteProperty -Name 'default_value' -Value $this.default_value }
        if ($this.display) { $Result | Add-Member -MemberType NoteProperty -Name 'display' -Value $true }
        if ($this.mandatory) { $Result | Add-Member -MemberType NoteProperty -Name 'mandatory' -Value $true }
        if ($null -ne $this.max_length) { $Result | Add-Member -MemberType NoteProperty -Name 'max_length' -Value $this.max_length }
        if ($this.primary) { $Result | Add-Member -MemberType NoteProperty -Name 'primary' -Value $true }
        if ($this.read_only) { $Result | Add-Member -MemberType NoteProperty -Name 'read_only' -Value $true }
        if ($this.unique) { $Result | Add-Member -MemberType NoteProperty -Name 'unique' -Value $true }
        return $result;
    }
}

class TableFields {
    [System.Collections.Generic.Dictionary[string,string]]$FieldIdMap = [System.Collections.Generic.Dictionary[string,string]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,FieldInfo]]$Fields = [System.Collections.Generic.Dictionary[string,FieldInfo]]::new([System.StringComparer]::InvariantCultureIgnoreCase);

    static [TableFields] Import([TypeDb]$TypeDb, [TableInfo]$TableInfo, [PSObject[]]$JsonObjArr) {
        $TableFields = [TableFields]::new();
        foreach ($JsonObj in $JsonObjArr) {
            [FieldInfo]::Import($TypeDb, $TableInfo, $TableFields, $JsonObj);
        }
        $TypeDb.TableFields[$TableInfo.name] = $TableFields;
        return $TableFields;
    }

    [PSObject]ForJsonExport() {
        $Result = [PSObject]::new();
        $this.Fields.Keys | ForEach-Object {
            $Result | Add-Member -MemberType NoteProperty -Name $_ -Value $this.FieldIdMap[$_].ForJsonExport();
        }
        return $result;
    }
}

class TypeDb {
    [Uri]$BaseUri;
    [string]$DbPath;
    [string]$CurrentActivity;
    [System.Collections.Generic.Dictionary[string,string]]$TypeSysIdMap = [System.Collections.Generic.Dictionary[string,string]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,string]]$TableSysIdMap = [System.Collections.Generic.Dictionary[string,string]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,string]]$ScopeSysIdMap = [System.Collections.Generic.Dictionary[string,string]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,SysScope]]$Scopes = [System.Collections.Generic.Dictionary[string,SysScope]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,GlideType]]$Types = [System.Collections.Generic.Dictionary[string,GlideType]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,TableInfo]]$TableDefinitions = [System.Collections.Generic.Dictionary[string,TableInfo]]::new([System.StringComparer]::InvariantCultureIgnoreCase);
    [System.Collections.Generic.Dictionary[string,TableFields]]$TableFields = [System.Collections.Generic.Dictionary[string,TableFields]]::new([System.StringComparer]::InvariantCultureIgnoreCase);

    TypeDb([Uri]$BaseUri, [string]$DbPath) {
        if ($null -eq $BaseUri -or -not $BaseUri.IsAbsoluteUri) { throw 'Invalid base URI'; }
        if ([string]::IsNullOrWhiteSpace($DbPath) -or ($DbPath | Test-Path -PathType Container) -or -not (($DbPath | Split-Path -Parent) | Test-Path -PathType Container)) { throw 'Invalid DB Path' }
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) { $this.CurrentActivity = 'Loading Types DB' }
        $this.BaseUri = $BaseUri;
        $this.DbPath = $DbPath;
        try {
            if ($DbPath | Test-Path) {
                $Hashtable = (Get-Content -LiteralPath $DbPath -Encoding utf8 -Force -ErrorAction Stop) | ConvertFrom-Json -AsHashtable;
                [Hashtable]$h = $Hashtable['types'];
                if ($null -ne $h) {
                    $enumerator = $h.GetEnumerator();
                    while ($enumerator.MoveNext()) {
                        $GlideType = [GlideType]::Load($enumerator.Key, $enumerator.Value);
                        if ($null -ne $GlideType) {
                            $this.TypeSysIdMap[$GlideType.sys_id] = $GlideType.name;
                            $this.Types[$GlideType.name] = $GlideType;
                        }
                    }
                }
                [Hashtable]$h = $Hashtable['scopes'];
                if ($null -ne $h) {
                    $enumerator = $h.GetEnumerator();
                    while ($enumerator.MoveNext()) {
                        $SysScope = [SysScope]::Load($enumerator.Key, $enumerator.Value);
                        if ($null -ne $SysScope) {
                            $this.ScopeSysIdMap[$SysScope.sys_id] = $SysScope.value;
                            $this.Scopes[$SysScope.value] = $SysScope;
                        }
                    }
                }
                [Hashtable]$h = $Hashtable['tables'];
                if ($null -ne $h) {
                    $enumerator = $h.GetEnumerator();
                    while ($enumerator.MoveNext()) {
                        $TableInfo = [TableInfo]::Load($enumerator.Key, $enumerator.Value);
                        if ($null -ne $TableInfo) {
                            $this.TypeSysIdMap[$TableInfo.sys_id] = $TableInfo.name;
                            $this.TableDefinitions[$TableInfo.name] = $TableInfo;
                        }
                    }
                }
            } else {
                $UriBuilder = [System.UriBuilder]::new($BaseUri);
                $UriBuilder.Path = '/api/now/table/sys_glide_object';
                $Uri = $UriBuilder.Uri.AbsoluteUri;
                Write-Progress -Activity $this.CurrentActivity -Status 'Initializing type_db.json' -CurrentOperation $Uri;
                $Response = Invoke-WebRequest -Uri $Uri -Method Get -Credential $Script:SnCredentials -Headers @{
                    Accept = "application/json";
                } -ErrorAction Stop;
                if ([string]::IsNullOrWhiteSpace($Response.Content)) { Write-Error -Message "Failed to get sys_glide_object content" -ErrorAction Stop }
                $Content = $Response.Content | ConvertFrom-Json -ErrorAction Stop;
                if ($null -eq $Content -or $null -eq $Content.result -or $Content.result.Count -isnot [int]) { Write-Error -Message "Failed to get sys_glide_object content" -ErrorAction Stop }
                $Content.result | ForEach-Object { [GlideType]::Import($this, $_) }
                $this.SaveChanges();
            }
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }

    [void] SaveChanges() {
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) {
            $this.CurrentActivity = 'Saving DB Changes';
            Write-Progress -Activity $this.CurrentActivity -Status 'Writing to file' -CurrentOperation $this.DbPath;
        } else {
            Write-Progress -Activity $this.CurrentActivity -Status 'Saving DB Changes' -CurrentOperation $this.DbPath;
        }
        try {
            $t = @{};
            $this.Types.Keys | ForEach-Object { $t[$_] = $this.Types[$_].ForJsonExport() }
            $JsonObj = [PSCustomObject]@{ types = [PSCustomObject]$t };
            if ($this.Scopes.Count -gt 0) {
                $s = @{};
                $this.Scopes.Keys | ForEach-Object { $s[$_] = $this.Scopes[$_].ForJsonExport() }
                $JsonObj | Add-Member -MemberType NoteProperty -Name 'scopes' -Value ([PSCustomObject]$s);
            }
            if ($this.TableDefinitions.Count -gt 0) {
                $o = @{};
                $this.TableDefinitions.Keys | ForEach-Object { $o[$_] = $this.TableDefinitions[$_].ForJsonExport() }
                $JsonObj | Add-Member -MemberType NoteProperty -Name 'tables' -Value ([PSCustomObject]$o);
            }
            Set-Content -Value (ConvertTo-Json -InputObject $JsonObj) -LiteralPath $this.DbPath -Encoding utf8 -Force -ErrorAction Stop;
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }

    [GlideType] FetchType([string]$id, [Uri]$Url) {
        [GlideType]$Result = $null;
        if ($this.Types.TryGetValue($id, [ref]$Result) -or ($this.TypeSysIdMap.TryGetValue($id, [ref]$id) -and $this.Types.TryGetValue($id, [ref]$Result))) { return $Result }
        if ($null -eq $Url) { return $null }
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) { $this.CurrentActivity = 'Getting Type Info'; }
        try {
            Write-Progress -Activity $this.CurrentActivity -Status 'Getting type info from remote' -CurrentOperation $Url.AbsoluteUri;
            $Response = Invoke-WebRequest -Uri $Url -Method Get -Credential $Script:SnCredentials -Headers @{
                Accept = "application/json";
            } -ErrorAction Stop;
            if ([string]::IsNullOrWhiteSpace($Response.Content)) { return $null }
            $JsonObj = $Response.Content | ConvertFrom-Json -ErrorAction Stop;
            if ($null -eq $JsonObj -or $null -eq $JsonObj.result) { return $null }
            return [GlideType]::Import($this, $JsonObj.result);
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }

    [SysScope] FetchScope([string]$Value, [Uri]$Url) {
        [SysScope]$Result = $null;
        if ($this.Scopes.TryGetValue($Value, [ref]$Result) -or ($this.ScopeSysIdMap.TryGetValue($Value, [ref]$Value) -and $this.Scopes.TryGetValue($Value, [ref]$Result))) { return $Result }
        if ($null -eq $Url) { return $null }
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) { $this.CurrentActivity = 'Getting Scope Info'; }
        try {
            Write-Progress -Activity $this.CurrentActivity -Status 'Getting scope info from remote' -CurrentOperation $Url.AbsoluteUri;
            $Response = Invoke-WebRequest -Uri $Url -Method Get -Credential $Script:SnCredentials -Headers @{
                Accept = "application/json";
            } -ErrorAction Stop;
            if ([string]::IsNullOrWhiteSpace($Response.Content)) { return $null }
            $JsonObj = $Response.Content | ConvertFrom-Json -ErrorAction Stop;
            if ($null -eq $JsonObj -or $null -eq $JsonObj.result) { return $null }
            return [SysScope]::Import($this, $JsonObj.result);
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }

    [TableInfo] FetchTableInfo([string]$SysId, [Uri]$Url) {
        $sc = '';
        if ($this.TableSysIdMap.TryGetValue($SysId, [ref]$sc)) { return $this.TableDefinitions[$sc] }
        if ($null -eq $Url) { return $null }
        Write-Progress -Activity $this.CurrentActivity -Status 'Getting super class from remote' -CurrentOperation $Url.AbsoluteUri;
        $Response = Invoke-WebRequest -Uri $Url -Method Get -Credential $Script:SnCredentials -Headers @{
            Accept = "application/json";
        } -ErrorAction Stop;
        if ([string]::IsNullOrWhiteSpace($Response.Content)) { return $null }
        try { $JsonObj = $Response.Content | ConvertFrom-Json -ErrorAction Stop }
        catch { $JsonObj = $null }
        if ($null -eq $JsonObj -or $null -eq $JsonObj.result) { return $null }
        return [TableInfo]::Import($this, $JsonObj.result, $null);
    }
    
    [TableInfo] GetTableInfo([string]$TableName) {
        [TableInfo]$TableInfo = $null;
        if ($this.TableDefinitions.TryGetValue($TableName, [ref]$TableInfo)) { return $TableInfo }
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) { $this.CurrentActivity = 'Getting Table Info'; }
        try {
            $UriBuilder = [System.UriBuilder]::new($this.BaseUri);
            $UriBuilder.Path = '/api/now/table/sys_db_object';
            $Query = "name=$TableName";
            $UriBuilder.Query = "?sysparm_query=$([Uri]::EscapeDataString($Query))";
            $Uri = $UriBuilder.Uri.AbsoluteUri;
            Write-Progress -Activity $this.CurrentActivity -Status 'Getting remote data' -CurrentOperation $Uri;
            $Response = Invoke-WebRequest -Uri $Uri -Method Get -Credential $Script:SnCredentials -Headers @{
                Accept = "application/json";
            } -ErrorAction Stop;
            if ([string]::IsNullOrWhiteSpace($Response.Content)) { return $null }
            $JsonObj = $Response.Content | ConvertFrom-Json -ErrorAction Stop;
            if ($null -eq $JsonObj -or $null -eq $JsonObj.result -or $JsonObj.result.Count -isnot [int] -or $JsonObj.result.Count -eq 0) { return $null }
            return [TableInfo]::Import($this, $JsonObj.result[0], $TableName);
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }

    [TableFields] GetTableFields([string]$TableName) {
        [TableInfo]$TableInfo = $this.GetTableInfo($TableName);
        if ($null -eq $TableInfo) { return $null }
        [TableFields]$Result = $null;
        if ($this.TableFields.TryGetValue($TableInfo.name, [ref]$Result)) { return $Result }
        $IsActivityInitiator = [string]::IsNullOrWhiteSpace($this.CurrentActivity); 
        if ($IsActivityInitiator) { $this.CurrentActivity = 'Getting Table Fields'; }
        try {
            $UriBuilder = [System.UriBuilder]::new($this.BaseUri);
            $UriBuilder.Path = '/api/now/table/sys_dictionary';
            $Query = "name=$TableName";
            $UriBuilder.Query = "?sysparm_query=$([Uri]::EscapeDataString($Query))";
            $Uri = $UriBuilder.Uri.AbsoluteUri;
            Write-Progress -Activity $this.CurrentActivity -Status 'Getting remote data' -CurrentOperation $Uri;
            $Response = Invoke-WebRequest -Uri $Uri -Method Get -Credential $Script:SnCredentials -Headers @{
                Accept = "application/json";
            } -ErrorAction Stop;
            if ([string]::IsNullOrWhiteSpace($Response.Content)) { return $null }
            $JsonObj = $Response.Content | ConvertFrom-Json -ErrorAction Stop;
            if ($null -eq $JsonObj -or $null -eq $JsonObj.result -or $JsonObj.result.Count -isnot [int]) { return $null }
            return [TableFields]::Import($this, $TableInfo, $JsonObj.result);
        } finally {
            if ($IsActivityInitiator) {
                Write-Progress -Activity $this.CurrentActivity -Status 'Finished' -Completed;
                $this.CurrentActivity = $null;
            }
        }
    }
}

#if ($null -eq $Script:TypeDb) {
    $Script:TypeDb = [TypeDb]::new($BaseUri, ($PSScriptRoot | Join-Path -ChildPath 'type_db.json'));
#}
$Script:TypeDb.GetTableFields('incident');
