"use strict";
/// <reference path="../types/index.d.ts" />
// #endregion
// #endregion
// #endregion
const TABLE_NAME_sys_dictionary = "sys_dictionary";
const TABLE_NAME_sys_glide_object = "sys_glide_object";
const TABLE_NAME_sys_db_object = "sys_db_object";
// #region Utility functions
function isTrue(value) {
    if (typeof value === "object") {
        if (value === null || !(value instanceof GlideElement) || value.nil())
            return false;
        value = "" + value;
    }
    else if (typeof value !== "string")
        return false;
    switch (value.trim().toLowerCase()) {
        case "1":
        case "true":
            return true;
        default:
            return false;
    }
}
function asNumber(value) {
    if (typeof value === "object") {
        if (value === null || !(value instanceof GlideElement) || value.nil())
            return;
        value = "" + value;
    }
    else if (typeof value !== "string")
        return;
    var result = parseInt(value.trim());
    if (!isNaN(result))
        return result;
}
function isGlideRecord(value) {
    return typeof value === "object" && value !== null && value instanceof GlideRecord && value.isValidRecord();
}
function isValidGlideRecord(value) {
    return typeof value === "object" && value !== null && value instanceof GlideRecord && value.isValidRecord();
}
function isGlideElement(value) {
    return typeof value === "object" && value !== null && value instanceof GlideElement;
}
function isNotNilGlideElement(value) {
    return typeof value === "object" && value !== null && value instanceof GlideElement;
}
function isValidGlideRecordOrElement(value) {
    return typeof value === "object" && value !== null && (value instanceof GlideRecord) ? value.isValidRecord() : value instanceof GlideElementReference && !value.nil();
}
function isSysGlideObject(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.getTableName() == TABLE_NAME_sys_glide_object :
        value instanceof GlideElementReference && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_glide_object);
}
function isValidSysGlideObject(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_glide_object :
        value instanceof GlideElementReference && !value.nil() && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_glide_object);
}
function isSysDictionary(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.getTableName() == TABLE_NAME_sys_dictionary :
        value instanceof GlideElementReference && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_dictionary);
}
function isValidSysDictionary(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_dictionary :
        value instanceof GlideElementReference && !value.nil() && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_dictionary);
}
function isSysDbObject(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ?
        value.getTableName() == TABLE_NAME_sys_db_object :
        value instanceof GlideElementReference && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_db_object);
}
function isValidSysDbObject(value) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ?
        value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_db_object :
        value instanceof GlideElementReference && !value.nil() && value.getReferenceTable && value.getReferenceTable() == TABLE_NAME_sys_db_object);
}
function smartQuote(value) {
    switch (typeof value) {
        case "number":
            return isNaN(value) ? "null" : "" + value;
        case "boolean":
            return value ? "True" : "False";
        case "string":
            return (value.trim().length == value.length || /^\w+$/.test(value)) ? value : JSON.stringify(value);
        default:
            return "(" + ((value === null) ? "null" : typeof value) + ")";
    }
}
function scopeToString(scope) {
    if (scope.name == scope.value)
        return (typeof scope.shortDescription === "string" && scope.shortDescription != scope.name) ? smartQuote(scope.name) + ": " + scope.shortDescription.trim() : smartQuote(scope.name);
    return smartQuote(scope.name) + " (" + smartQuote(scope.value) + ((typeof scope.shortDescription === "string" && scope.shortDescription != scope.name && scope.shortDescription != scope.value) ?
        "): " + scope.shortDescription.trim() : ")");
}
function typeToString(type) {
    if (type.name == type.label) {
        if (type.name == type.scalarType || type.scalarType === 'string')
            return smartQuote(type.name);
        return smartQuote(type.name) + '; scalar type: ' + type.scalarType;
    }
    if (type.name == type.scalarType || type.scalarType === 'string')
        return smartQuote(type.label) + ' (' + type.name + ')';
    return smartQuote(type.label) + ' (' + type.name + '); scalar type: ' + type.scalarType;
}
const newLineRe = /\r\n|\n/g;
function splitLines(value) {
    if (typeof value !== 'string' || value.length == 0 && (value = value.trim()).length == 0)
        return [];
    return value.split(newLineRe).map(function (s) {
        var l = s.trim().length;
        if (l == 0)
            return "";
        return (l == s.length) ? s : ('.' + s).trim().substring(1);
    });
}
//#endregion
/**
 * The {@link RecordElement} constructor object.
 */
const RecordElement = (function () {
    const typePlaceholders = {};
    const types = {};
    const RecordElement = Class.create();
    RecordElement.prototype = {
        initialize: function (elementName, type, table) {
            this._columns = {};
            this.elementName = elementName;
            this.type = type;
            this.table = table;
        },
        getType: function () { return RecordElement.getTypeInfo(this.type); },
        type: "RecordElement"
    };
    RecordElement.getTypeInfo = function (value) {
        var result;
        switch (typeof value) {
            case "string":
                if (value.trim().length > 0) {
                    if (typeof (result = types[value]) === "undefined" && typeof (result = typePlaceholders[value]) === "undefined") {
                        result = {
                            name: value,
                            label: value,
                            isVisible: false,
                            scalarType: "string",
                            useOriginalValue: false
                        };
                        typePlaceholders[value] = result;
                    }
                    return result;
                }
                break;
            case "object":
                if (isValidGlideRecordOrElement(value)) {
                    var name = value.name.nil() ? (value.sys_name.nil() ? "" + value : "" + value.sys_name) : "" + value.name;
                    if (typeof (result = types[name]) === "undefined") {
                        if (typeof (result = typePlaceholders[name]) === "undefined")
                            result = {
                                name: name,
                                label: value.label.nil() ? name : "" + value.label,
                                isVisible: isTrue(value.visible),
                                scalarType: value.scalar_type.nil() ? "string" : "" + value.scalar_type,
                                useOriginalValue: isTrue(value.use_original_value)
                            };
                        else {
                            if (!value.label.nil())
                                result.label = "" + value.label;
                            if (isTrue(value.visible))
                                result.isVisible = true;
                            if (isTrue(value.use_original_value))
                                result.useOriginalValue = true;
                            if (!value.scalar_type.nil())
                                result.scalarType = "" + value.scalar_type;
                        }
                        var scalarLength = asNumber(value.scalar_length);
                        if (typeof scalarLength === "number")
                            result.scalarLength = scalarLength;
                        types[name] = result;
                    }
                    return result;
                }
                gs.warn("Not getting type for " + value);
                break;
        }
        if (typeof (result = types[""]) === "undefined" && typeof (result = typePlaceholders[""]) === "undefined") {
            result = {
                name: "",
                label: "",
                isVisible: false,
                scalarType: "string",
                useOriginalValue: false
            };
            typePlaceholders[""] = result;
        }
        return result;
    };
    return RecordElement;
})();
/**
 * The {@link DeclaredElement} constructor object.
 */
const DeclaredElement = (function () {
    const DeclaredElement = Class.create();
    DeclaredElement.prototype = Object.extendsObject(RecordElement, {
        initialize: function (elementName, declaredOn, glideObject) {
            RecordElement.prototype.initialize.call(this, elementName, RecordElement.getTypeInfo(glideObject.internal_type).name, declaredOn);
            this.label = glideObject.column_label.nil() ? elementName : "" + glideObject.column_label;
            var maxLength = asNumber(glideObject.max_length);
            if (typeof maxLength === "number")
                this.maxLength = maxLength;
            if (isTrue(glideObject.primary))
                this.primary = true;
            var scope = TableInfo.getScopeInfo(glideObject.sys_scope);
            if (typeof scope !== "undefined")
                this.scope = scope.value;
            if (isTrue(glideObject.array))
                this.array = true;
            if (isTrue(glideObject.mandatory))
                this.mandatory = true;
            if (isTrue(glideObject.display))
                this.display = true;
            if (isTrue(glideObject.read_only))
                this.readOnly = true;
            if (!glideObject.comments.nil())
                this.comments = "" + glideObject.comments;
            var refTable = TableInfo.getTableInfo(glideObject.reference);
            if (typeof refTable !== "undefined")
                this.refTable = refTable;
        },
        getLabel: function () { return this.label; },
        getMaxLength: function () { return this.maxLength; },
        isPrimary: function () { return this.primary; },
        getScope: function () { return TableInfo.getScopeInfo(this.scope); },
        getDefaultValue: function () { return this.defaultValue; },
        getRefTable: function () { return this.refTable; },
        isArray: function () { return this.array; },
        getComments: function () { return this.comments; },
        isMandatory: function () { return this.mandatory; },
        isDisplay: function () { return this.display; },
        isReadOnly: function () { return this.readOnly; },
        isInherited: function () { return false; },
        getDeclTable: function () { return this.table; },
        generateCode: function (lines, scope, isScoped) {
            lines.push("        /**");
            var typeInfo = this.getType();
            var scalarLength;
            var typeName;
            var jsType;
            if (isScoped)
                switch (typeInfo.name) {
                    case "journal":
                        jsType = 'JournalGlideElement';
                        break;
                    case "glide_date_time":
                        jsType = 'GlideDateTimeElement';
                        break;
                    case "glide_list":
                    case "glide_action_list":
                    case "user_input":
                    case "journal_input":
                    case "journal_list":
                        typeName = typeToString(typeInfo);
                        jsType = 'JournalGlideElement';
                        break;
                    case "glide_date":
                    case "glide_time":
                    case "timer":
                    case "glide_duration":
                    case "glide_utc_time":
                    case "due_date":
                    case "glide_precise_time":
                    case "calendar_date_time":
                        typeName = typeToString(typeInfo);
                        jsType = 'GlideDateTimeElement';
                        break;
                    case "reference":
                        jsType = 'GlideElementReference';
                        break;
                    case "currency2":
                    case "domain_id":
                    case "document_id":
                    case "source_id":
                        typeName = typeToString(typeInfo);
                        jsType = 'GlideElementReference';
                        break;
                    case "string":
                        jsType = 'GlideElement';
                        break;
                    default:
                        typeName = typeToString(typeInfo);
                        jsType = 'GlideElement';
                        break;
                }
            else
                switch (typeInfo.name) {
                    case "boolean":
                        jsType = 'GlideElementBoolean';
                        break;
                    case "integer":
                        jsType = 'GlideElementNumeric';
                        break;
                    case "sys_class_name":
                        jsType = 'GlideElementSysClassName';
                        break;
                    case "document_id":
                        jsType = 'GlideElementDocumentId';
                        break;
                    case "domain_id":
                        jsType = 'GlideElementDomainId';
                        break;
                    case "related_tags":
                        jsType = 'GlideElementRelatedTags';
                        break;
                    case "translated_field":
                        jsType = 'GlideElementTranslatedField';
                        break;
                    case "documentation_field":
                        jsType = 'GlideElementDocumentation';
                        break;
                    case "script":
                        jsType = 'GlideElementScript';
                        break;
                    case "conditions":
                        jsType = 'GlideElementConditions';
                        break;
                    case "variables":
                        jsType = 'GlideElementVariables';
                        break;
                    case "password":
                        jsType = 'GlideElementPassword';
                        break;
                    case "user_image":
                        jsType = 'GlideElementUserImage';
                        break;
                    case "translated_text":
                        jsType = 'GlideElementTranslatedText';
                        break;
                    case "counter":
                        jsType = 'GlideElementCounter';
                        break;
                    case "currency":
                        jsType = 'GlideElementCurrency';
                        break;
                    case "price":
                        jsType = 'GlideElementPrice';
                        break;
                    case "short_field_name":
                        jsType = 'GlideElementShortFieldName';
                        break;
                    case "audio":
                        jsType = 'GlideElementAudio';
                        break;
                    case "replication_payload":
                        jsType = 'GlideElementReplicationPayload';
                        break;
                    case "breakdown_element":
                        jsType = 'GlideElementBreakdownElement';
                        break;
                    case "compressed":
                        jsType = 'GlideElementCompressed';
                        break;
                    case "translated_html":
                        jsType = 'GlideElementTranslatedHTML';
                        break;
                    case "url":
                        jsType = 'GlideElementURL';
                        break;
                    case "template_value":
                        jsType = 'GlideElementWorkflowConditions';
                        break;
                    case "short_table_name":
                        jsType = 'GlideElementShortTableName';
                        break;
                    case "data_object":
                        jsType = 'GlideElementDataObject';
                        break;
                    case "string_full_utf8":
                        jsType = 'GlideElementFullUTF8';
                        break;
                    case "icon":
                        jsType = 'GlideElementIcon';
                        break;
                    case "glide_var":
                        jsType = 'GlideElementGlideVar';
                        break;
                    case "internal_type":
                        jsType = 'GlideElementInternalType';
                        break;
                    case "simple_name_values":
                        jsType = 'GlideElementSimpleNameValue';
                        break;
                    case "name_values":
                        jsType = 'GlideElementNameValue';
                        break;
                    case "source_name":
                        jsType = 'GlideElementSourceName';
                        break;
                    case "source_table":
                        jsType = 'GlideElementSourceTable';
                        break;
                    case "password2":
                        jsType = 'GlideElementPassword2';
                        break;
                    case "reference":
                        jsType = 'GlideElementReference';
                        break;
                    case "wiki_text":
                        jsType = 'GlideElementWikiText';
                        break;
                    case "wiki_text":
                        jsType = 'GlideElementWikiText';
                        break;
                    case "workflow":
                        jsType = 'GlideElementWorkflow';
                        break;
                    case "glide_date_time":
                    case "glide_date":
                    case "glide_time":
                    case "timer":
                    case "glide_duration":
                    case "glide_utc_time":
                    case "due_date":
                    case "glide_precise_time":
                    case "calendar_date_time":
                    case "user_input":
                    case "journal_input":
                    case "journal_list":
                        typeName = typeToString(typeInfo);
                        jsType = 'GlideElementGlideObject';
                        break;
                    case "reference":
                        jsType = 'GlideElementReference';
                        break;
                    case "string":
                        jsType = 'GlideElement';
                        break;
                    default:
                        typeName = typeToString(typeInfo);
                        gs.warn("Unknown " + typeName + ' on ' + this.table.interfaceName + '.' + this.elementName);
                        jsType = 'GlideElement';
                        break;
                }
            var comments = splitLines(this.comments);
            if (comments.length > 0) {
                lines.push("         * " + smartQuote(this.label) + " element - " + comments[0]);
                if (comments.length > 1) {
                    if (this.array || this.display || this.readOnly || this.mandatory || this.primary || typeof typeName === 'string' || typeof this.defaultValue === 'string')
                        lines.push("         *");
                    for (var i = 1; i < comments.length; i++)
                        lines.push("         * " + comments[i]);
                }
            }
            else
                lines.push("         * " + smartQuote(this.label) + " element.");
            if (typeof this.maxLength === 'number') {
                if (typeof typeName === 'string')
                    lines.push('         * Type: ' + typeName);
                if (this.mandatory) {
                    if (this.display) {
                        if (this.primary)
                            lines.push('         * Mandatory: true; Primary: true; Display: true; Maximum length: ' + this.maxLength);
                        else
                            lines.push('         * Mandatory: true; Display: true; Maximum length: ' + this.maxLength);
                    }
                    else if (this.primary)
                        lines.push('         * Mandatory: true; Primary: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Mandatory: true; Maximum length: ' + this.maxLength);
                }
                else if (this.display) {
                    if (this.primary) {
                        if (this.readOnly)
                            lines.push('         * Primary: true; Read-only: true; Display: true; Maximum length: ' + this.maxLength);
                        else
                            lines.push('         * Primary: true; Display: true; Maximum length: ' + this.maxLength);
                    }
                    if (this.readOnly)
                        lines.push('         * Read-only: true; Display: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Display: true; Maximum length: ' + this.maxLength);
                }
                else if (this.primary) {
                    if (this.readOnly)
                        lines.push('         * Primary: true; Read-only: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Primary: true; Maximum length: ' + this.maxLength);
                }
                if (this.readOnly)
                    lines.push('         * Read-only: true; Maximum length: ' + this.maxLength);
                else
                    lines.push('         * Maximum length: ' + this.maxLength);
            }
            else {
                if (typeof typeName === 'string') {
                    if (typeof typeInfo.scalarLength === 'number')
                        lines.push('         * Type: ' + typeName + '; Scalar length: ' + scalarLength);
                    else
                        lines.push('         * Type: ' + typeName);
                }
                if (this.mandatory) {
                    if (this.display) {
                        if (this.primary)
                            lines.push('         * Mandatory: true; Primary: true; Display: true');
                        else
                            lines.push('         * Mandatory: true; Display: true');
                    }
                    else if (this.primary)
                        lines.push('         * Mandatory: true; Primary: true');
                    else
                        lines.push('         * Mandatory: true');
                }
                else if (this.display) {
                    if (this.primary) {
                        if (this.readOnly)
                            lines.push('         * Primary: true; Read-only: true; Display: true');
                        else
                            lines.push('         * Primary: true; Display: true');
                    }
                    if (this.readOnly)
                        lines.push('         * Read-only: true; Display: true');
                    else
                        lines.push('         * Display: true');
                }
                else if (this.primary) {
                    if (this.readOnly)
                        lines.push('         * Primary: true; Read-only: true');
                    else
                        lines.push('         * Primary: true');
                }
                if (this.readOnly)
                    lines.push('         * Read-only: true');
            }
            if (typeof this.refTable !== 'undefined') {
                lines.push("         * @see {@link $$GlideRecord." + this.refTable.interfaceName + "}");
                lines.push("         */");
                lines.push('        ' + this.elementName + ': $$GlideElement.' + this.refTable.interfaceName + ';');
            }
            else {
                lines.push("         */");
                lines.push('        ' + this.elementName + ': ' + jsType + ';');
            }
        },
        type: "DeclaredElement"
    });
    return DeclaredElement;
})();
/**
 * The {@link InheritedElement} constructor object.
 */
const InheritedElement = (function () {
    const InheritedElement = Class.create();
    InheritedElement.prototype = Object.extendsObject(RecordElement, {
        initialize: function (inheritedFrom, usedOn, glideObject) {
            this.base = inheritedFrom;
            if (isValidGlideRecordOrElement(glideObject)) {
                RecordElement.prototype.initialize.call(this, inheritedFrom.elementName, RecordElement.getTypeInfo(glideObject === null || glideObject === void 0 ? void 0 : glideObject.internal_type).name, usedOn);
                var s = glideObject.column_label.nil() ? inheritedFrom.elementName : "" + glideObject.column_label;
                if (s != inheritedFrom.label)
                    this.labelOverride = s;
                var maxLength = asNumber(glideObject.max_length);
                if (typeof maxLength === "number" && (typeof inheritedFrom.maxLength !== "number" || maxLength != inheritedFrom.maxLength))
                    this.maxLengthOverride = maxLength;
                var b = isTrue(glideObject.primary);
                if (b != inheritedFrom.primary)
                    this.primaryOverride = b;
                var scope = TableInfo.getScopeInfo(glideObject.sys_scope);
                if (typeof scope !== "undefined" && (typeof inheritedFrom.scope !== "string" || inheritedFrom.scope != scope.value))
                    this.scopeOverride = scope.value;
                if ((b = isTrue(glideObject.array)) != inheritedFrom.array)
                    this.arrayOverride = b;
                if ((b = isTrue(glideObject.mandatory)) != inheritedFrom.mandatory)
                    this.mandatoryOverride = b;
                if ((b = isTrue(glideObject.display)) != inheritedFrom.display)
                    this.displayOverride = b;
                if ((b = isTrue(glideObject.read_only)) != inheritedFrom.readOnly)
                    this.readOnlyOverride = b;
                if (!glideObject.comments.nil() && (typeof inheritedFrom.comments !== "string" || (s = "" + glideObject.comments) != inheritedFrom.comments))
                    this.commentsOverride = s;
                var refTable = TableInfo.getTableInfo(glideObject.reference);
                if (typeof refTable !== "undefined" && (typeof inheritedFrom.refTable !== "object" || refTable.interfaceName != inheritedFrom.refTable.interfaceName))
                    this.refTable = refTable;
            }
            else
                RecordElement.prototype.initialize.call(this, inheritedFrom.elementName, inheritedFrom.type, usedOn);
        },
        getLabel: function () { return (typeof this.labelOverride !== "string") ? this.base.label : this.labelOverride; },
        getMaxLength: function () { return (typeof this.maxLengthOverride !== "string") ? this.base.maxLength : this.maxLengthOverride; },
        isPrimary: function () { return (typeof this.primaryOverride !== "string") ? this.base.primary : this.primaryOverride; },
        getScope: function () { return (typeof this.scopeOverride !== "string") ? this.base.getScope() : TableInfo.getScopeInfo(this.scopeOverride); },
        getDefaultValue: function () { return (typeof this.defaultValueOverride !== "string") ? this.base.defaultValue : this.defaultValueOverride; },
        getRefTable: function () { return (typeof this.refTableOverride !== "string") ? this.base.refTable : this.refTableOverride; },
        isArray: function () { return (typeof this.arrayOverride !== "string") ? this.base.array : this.arrayOverride; },
        getComments: function () { return (typeof this.commentsOverride !== "string") ? this.base.comments : this.commentsOverride; },
        isMandatory: function () { return (typeof this.mandatoryOverride !== "string") ? this.base.mandatory : this.mandatoryOverride; },
        isDisplay: function () { return (typeof this.displayOverride !== "string") ? this.base.display : this.displayOverride; },
        isReadOnly: function () { return (typeof this.readOnlyOverride !== "string") ? this.base.readOnly : this.readOnlyOverride; },
        isInherited: function () { return true; },
        getDeclTable: function () { return this.base.table; },
        type: "InheritedElement"
    });
    return InheritedElement;
})();
/**
 * The {@link InterfaceInfo} constructor object.
 */
const InterfaceInfo = (function () {
    const InterfaceInfo = Class.create();
    InterfaceInfo.prototype = {
        _elements: {},
        initialize: function (interfaceName) {
            this.interfaceName = interfaceName;
        },
        getElement: function (name) { return this._elements[name]; },
        forEachElement: function (callback, includeInherited, thisObj) {
            var names = Object.getOwnPropertyNames(this._elements).sort();
            if (includeInherited)
                for (var i = 0; i < names.length; i++)
                    callback.call(thisObj, this._elements[names[i]]);
            else
                for (var i = 0; i < names.length; i++) {
                    var e = this._elements[names[i]];
                    if (e instanceof DeclaredElement)
                        callback.call(thisObj, e);
                }
        },
        type: "InterfaceInfo"
    };
    return InterfaceInfo;
})();
/**
 * The {@link TableInfo} constructor object.
 */
const TableInfo = (function () {
    const scopePlaceholders = {};
    const scopes = {};
    const allTables = {};
    const TableInfo = Class.create();
    TableInfo.prototype = Object.extendsObject(InterfaceInfo, {
        initialize: function (tableName, glideRecord) {
            InterfaceInfo.prototype.initialize.call(this, tableName);
            this.label = glideRecord.label.nil() ? tableName : "" + glideRecord.label;
            var scope = TableInfo.getScopeInfo(glideRecord.sys_scope);
            if (typeof scope !== "undefined")
                this.scope = scope.value;
            if (!glideRecord.number_ref.nil())
                this.autoNumberPrefix = "" + glideRecord.number_ref.prefix;
            allTables[tableName] = this;
            var gr = new GlideRecord(TABLE_NAME_sys_dictionary);
            gr.addQuery("name", tableName);
            gr.addActiveQuery();
            gr.addNotNullQuery("element");
            gr.query();
            var table = TableInfo.getTableInfo(glideRecord.super_class);
            if (typeof table !== "undefined") {
                this.superClass = table;
                while (gr.next()) {
                    var elementName = "" + gr.element;
                    var base = table.getElement(elementName);
                    if (typeof base === "undefined")
                        this._elements[elementName] = new DeclaredElement(elementName, this, gr);
                    else
                        this._elements[elementName] = new InheritedElement((base instanceof InheritedElement) ? base.base : base, this, gr);
                }
            }
            else {
                while (gr.next()) {
                    var elementName = "" + gr.element;
                    this._elements[elementName] = new DeclaredElement(elementName, this, gr);
                }
            }
        },
        getScope: function () { return TableInfo.getScopeInfo(this.scope); },
        generateCode: function (context) {
            if (context.fieldInterfaceLines.length > 0)
                context.fieldInterfaceLines.push("");
            context.fieldInterfaceLines.push("    /**");
            context.fieldInterfaceLines.push("     * " + smartQuote(this.label) + " glide record fields.");
            context.fieldInterfaceLines.push("     * @see {@link $$GlideElement." + this.interfaceName + "}");
            context.fieldInterfaceLines.push("     * @see {@link $$GlideRecord." + this.interfaceName + "}");
            context.fieldInterfaceLines.push("     */");
            if (typeof this.superClass !== "undefined")
                context.fieldInterfaceLines.push("    export interface " + this.interfaceName + " extends " + this.superClass.interfaceName + " {");
            else
                context.fieldInterfaceLines.push("    export interface " + this.interfaceName + " {");
            var scope = this.getScope();
            var thisObj = { isFirst: true, scope: (typeof scope !== "undefined") ? scope.value : "gobal", lines: context.fieldInterfaceLines };
            if (context.isScoped)
                this.forEachElement(function (element) {
                    if (this.isFirst)
                        this.isFirst = false;
                    else
                        this.lines.push("");
                    element.generateCode(this.lines, this.scope, true);
                }, false, thisObj);
            else
                this.forEachElement(function (element) {
                    if (this.isFirst)
                        this.isFirst = false;
                    else
                        this.lines.push("");
                    element.generateCode(this.lines, this.scope, false);
                }, false, thisObj);
            context.fieldInterfaceLines.push("    }");
            if (context.elementLines.length > 0)
                context.elementLines.push("");
            if (context.recordLines.length > 0)
                context.recordLines.push("");
            context.elementLines.push("    /**");
            context.recordLines.push("    /**");
            context.elementLines.push("     * Element that refers to a " + smartQuote(this.label) + " glide record.");
            context.recordLines.push("     * " + smartQuote(this.label) + " glide record.");
            if (typeof this.autoNumberPrefix === "string") {
                context.elementLines.push("     * Auto-number Prefix: " + smartQuote(this.autoNumberPrefix));
                context.recordLines.push("     * Auto-number Prefix: " + smartQuote(this.autoNumberPrefix));
            }
            if (typeof scope !== "undefined" && scope.value !== "global") {
                context.elementLines.push("     * Scope: " + scopeToString(scope));
                context.recordLines.push("     * Scope: " + scopeToString(scope));
            }
            context.elementLines.push("     */");
            context.recordLines.push("     */");
            context.elementLines.push("    export type task = Reference<$$tableFields." + this.interfaceName + ", $$GlideRecord." + this.interfaceName + ">;");
            if (typeof this.superClass !== "undefined" && this.superClass instanceof TableInfo)
                context.recordLines.push("    export type " + this.interfaceName + " = $$tableFields." + this.interfaceName + " & " + this.superClass.interfaceName + ";");
            else
                context.recordLines.push("    export type " + this.interfaceName + " = $$tableFields." + this.interfaceName + " & GlideRecord;");
        },
        type: "TableInfo"
    });
    TableInfo.getScopeInfo = function (value) {
        var result;
        switch (typeof value) {
            case "string":
                if (value.trim().length > 0) {
                    if (typeof (result = scopes[value]) === "undefined" && typeof (result = scopePlaceholders[value]) === "undefined") {
                        result = {
                            name: value,
                            value: value
                        };
                        scopePlaceholders[value] = result;
                    }
                    return result;
                }
                break;
            case "object":
                if (isValidGlideRecordOrElement(value)) {
                    var scope = value.scope.nil() ? (value.name.nil() ? "" + value : "" + value.name) : "" + value.scope;
                    if (typeof (result = scopes[scope]) === "undefined") {
                        if (typeof (result = scopePlaceholders[scope]) === "undefined")
                            result = {
                                name: value.name.nil() ? scope : "" + value.name,
                                value: scope
                            };
                        else
                            result.name = value.name.nil() ? scope : "" + value.name;
                        if (!value.short_description.nil())
                            result.shortDescription = "" + value.short_description;
                        scopes[scope] = result;
                    }
                    return result;
                }
                break;
        }
    };
    TableInfo.getTableInfo = function (glideObject) {
        if (isValidSysDbObject(glideObject)) {
            var tableName = glideObject.name.nil() ? (glideObject.sys_name.nil() ? "" + glideObject : "" + glideObject.sys_name) : "" + glideObject.name;
            var result = allTables[tableName];
            return (typeof result !== "undefined") ? result : new TableInfo(tableName, (glideObject instanceof GlideRecord) ? glideObject : glideObject.getRefRecord());
        }
    };
    return TableInfo;
})();
var tableNames = ["task"];
var context = {
    fieldInterfaceLines: [],
    elementLines: [],
    recordLines: [],
    isScoped: false
};
tableNames.forEach(function (n) {
    var gr = new GlideRecord("sys_db_object");
    gr.addQuery("name", n);
    gr.query();
    gr.next();
    var tableInfo = TableInfo.getTableInfo(gr);
    if (typeof tableInfo === "undefined")
        gs.error("Table " + smartQuote(n) + " not found.");
    else
        tableInfo.generateCode(this);
}, context);
context.fieldInterfaceLines;
