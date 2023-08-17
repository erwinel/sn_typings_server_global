/// <reference path="../types/index.d.ts" />

// #region Type Definitions

type CodeGenerationContext = Readonly<{
    fieldInterfaceLines: string[];
    elementLines: string[];
    recordLines: string[];
    isScoped: boolean;
}>;

type sys_db_object = $$GlideRecord.sys_db_object | $$GlideElement.sys_db_object;
type sys_glide_object = $$GlideRecord.sys_glide_object | $$GlideElement.sys_glide_object;
type sys_dictionary = $$GlideRecord.sys_dictionary | $$GlideElement.sys_dictionary;
type sys_scope = $$GlideRecord.sys_scope | $$GlideElement.sys_scope;

type ScopeInfo = Readonly<{
    name: string;
    value: string;
    shortDescription?: string;
}>;

// #region Definitions for element-based classes

type TypeInfo = Readonly<{
    name: string;
    label: string;
    scalarType: string;
    scalarLength?: number;
    useOriginalValue: boolean;
    isVisible: boolean;
}>;

interface IRecordElement {
    getLabel(): string;
    getMaxLength(): number | undefined;
    isPrimary(): boolean;
    getScope(): ScopeInfo | undefined;
    getDefaultValue(): string | undefined;
    getRefTable(): TableInfo | undefined;
    isArray(): boolean;
    getComments(): string | undefined;
    isMandatory(): boolean;
    isDisplay(): boolean;
    isReadOnly(): boolean;
    isInherited(): boolean;
    getDeclTable(): InterfaceInfo;
}

// #region Definitions for the RecordElement class

/**
 * Defines the public instance members of a {@link RecordElement} type.
 */
interface RecordElement extends Readonly<{
    elementName: string;
    type: string;
    table: InterfaceInfo;
    getType(): TypeInfo;
}> {
    // Declare public read/write instance members here.
}

/**
 * Defines the prototype for a {@link RecordElement} constructor.
 */
interface IRecordElementPrototype extends RecordElement {
    _columns: { [elementName: string]: Element; };
}

/**
 * Defines the {@link RecordElement} constructor.
 */
interface RecordElementConstructor extends $$class.Constructor3<string, string, InterfaceInfo, RecordElement, IRecordElementPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} elementName - The name of the element.
     * @param {string} type - The element type.
     * @param {InterfaceInfo} table - The table containing the element.
     */
    new(elementName: string, type: string, table: InterfaceInfo): RecordElement;

    getTypeInfo(value?: sys_glide_object | string | null): TypeInfo;
}

/**
 * Defines the"this" object for {@link RecordElement} instance methods.
 */
type RecordElementThisObj = IRecordElementPrototype & $$class.IPrototype3<string, string, InterfaceInfo>;

// #endregion

// #region Definitions for the DeclaredElement class

/**
 * Defines the public instance members added by the {@link DeclaredElement} type.
 */
interface DeclaredElementPublic extends Readonly<{
    label: string;
    maxLength?: number;
    primary: boolean;
    scope?: string;
    defaultValue?: string;
    refTable?: TableInfo;
    array: boolean;
    comments?: string;
    mandatory: boolean;
    display: boolean;
    readOnly: boolean;
    generateCode(lines: string[], scope: string, isScoped: boolean);
} & IRecordElement> {
    // Declare public read/write instance members here.
}

/**
 * Defines all public instance members of the {@link DeclaredElement} type.
 */
type DeclaredElement = DeclaredElementPublic & RecordElement;

/**
 * Defines the prototype members added for the {@link DeclaredElement} constructor.
 */
interface IDeclaredElementPrototype extends DeclaredElementPublic {
    // Declare private members here.
}

/**
 * Defines the {@link DeclaredElement} constructor.
 */
interface DeclaredElementConstructor extends $$class.Constructor3<string, InterfaceInfo, sys_dictionary, DeclaredElement> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} elementName - 
     * @param {InterfaceInfo} declaredOn - 
     * @param {sys_dictionary} glideObject - 
     */
    new(elementName: string, declaredOn: InterfaceInfo, glideObject: sys_dictionary): DeclaredElement;
}

/**
 * Defines the"this" object for {@link DeclaredElement} instance methods.
 */
type DeclaredElementThisObj = IDeclaredElementPrototype & DeclaredElement & $$class.IPrototype3<string, InterfaceInfo, sys_dictionary>;

// #endregion

// #region Definitions for the InheritedElement class

/**
 * Defines the public instance members added by the {@link InheritedElement} type.
 */
interface InheritedElementPublic extends Readonly<{
    base: DeclaredElement;
    labelOverride?: string;
    maxLengthOverride?: number;
    primaryOverride?: boolean;
    scopeOverride?: string;
    defaultValueOverride?: string;
    refTableOverride?: TableInfo;
    arrayOverride?: boolean;
    commentsOverride?: string;
    mandatoryOverride?: boolean;
    displayOverride?: boolean;
    readOnlyOverride?: boolean;
} & IRecordElement> {
    // Declare public read/write instance members here.
}

/**
 * Defines all public instance members of the {@link InheritedElement} type.
 */
type InheritedElement = InheritedElementPublic & RecordElement;

/**
 * Defines the prototype members added for the {@link InheritedElement} constructor.
 */
interface IInheritedElementPrototype extends InheritedElementPublic {
    // Declare private members here.
}

/**
 * Defines the {@link InheritedElement} constructor.
 */
interface InheritedElementConstructor extends $$class.Constructor3Opt1<DeclaredElement, InterfaceInfo, sys_dictionary, InheritedElement> {
    /**
     * Creates a new instance of the implementing class.
     * @param {DeclaredElement} inheritedFrom - The inherited element.
     * @param {InterfaceInfo} usedOn - The table that inherits the element.
     * @param {sys_dictionary} [glideObject] - The optional GlideRecord or GlideElement representing the table element.
     */
    new(inheritedFrom: DeclaredElement, usedOn: InterfaceInfo, glideObject?: sys_dictionary): InheritedElement;
}

/**
 * Defines the"this" object for {@link InheritedElement} instance methods.
 */
type InheritedElementThisObj = IInheritedElementPrototype & InheritedElement & $$class.IPrototype3Opt1<DeclaredElement, InterfaceInfo, sys_dictionary>;

// #endregion

type Element = InheritedElement | DeclaredElement;

// #endregion

// #region Definitions for interface-based classes

// #region Definitions for the InterfaceInfo class

/**
 * Defines the public instance members of a {@link InterfaceInfo} type.
 */
interface InterfaceInfo extends Readonly<{
    interfaceName: string;
    superClass?: InterfaceInfo;
    getElement(name: string): Element | undefined;
    forEachElement<T>(callback: { (this: T, element: Element): void; }, includeInherited: true, thisObj: T): void;
    forEachElement<T>(callback: { (this: T, element: DeclaredElement): void; }, includeInherited: false, thisObj: T): void;
}> {
    // Declare public read/write instance members here.
}

/**
 * Defines the prototype for a {@link InterfaceInfo} constructor.
 */
interface IInterfaceInfoPrototype extends InterfaceInfo {
    _elements: { [name: string]: Element; }
}

/**
 * Defines the {@link InterfaceInfo} constructor.
 */
interface InterfaceInfoConstructor extends $$class.Constructor1<string, InterfaceInfo, IInterfaceInfoPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} interfaceName - 
     */
    new(interfaceName: string): InterfaceInfo;
}

/**
 * Defines the"this" object for {@link InterfaceInfo} instance methods.
 */
type InterfaceInfoThisObj = IInterfaceInfoPrototype & $$class.IPrototype1<string>;

// #endregion

// #region Definitions for the TableInfo class

/**
 * Defines the public instance members added by the {@link TableInfo} type.
 */
interface TableInfoPublic extends Readonly<{
    label: string;
    scope?: string;
    autoNumberPrefix?: string;
    generateCode(context: CodeGenerationContext): void;
    getScope(): ScopeInfo | undefined;
}> {
    // Declare public read/write instance members here.
}

/**
 * Defines all public instance members of the {@link TableInfo} type.
 */
type TableInfo = TableInfoPublic & InterfaceInfo;

/**
 * Defines the prototype members added for the {@link TableInfo} constructor.
 */
interface ITableInfoPrototype extends TableInfoPublic {
    // Declare private members here.
}

/**
 * Defines the {@link TableInfo} constructor.
 */
interface TableInfoConstructor extends $$class.Constructor2<string, $$GlideRecord.sys_db_object, TableInfo> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} tableName - The name of the table.
     * @param {$$GlideRecord.sys_db_object} glideRecord - The GlideRecord for the table.
     */
    new(tableName: string, glideRecord: $$GlideRecord.sys_db_object): TableInfo;

    getScopeInfo(value?: sys_scope | string | null): ScopeInfo | undefined;

    getTableInfo(glideObject: sys_db_object): TableInfo | undefined;
}

/**
 * Defines the"this" object for {@link TableInfo} instance methods.
 */
type TableInfoThisObj = ITableInfoPrototype & TableInfo & $$class.IPrototype2<string, $$GlideRecord.sys_db_object>;

// #endregion

// #endregion

// #endregion

const TABLE_NAME_sys_dictionary = "sys_dictionary";
const TABLE_NAME_sys_glide_object = "sys_glide_object";
const TABLE_NAME_sys_db_object = "sys_db_object";

// #region Utility functions

function isTrue(value?: GlideElement | string | null): boolean {
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

function asNumber(value?: GlideElement | string | null): number | undefined {
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


function isGlideRecord(value?: any | null): value is GlideRecord {
    return typeof value === "object" && value !== null && value instanceof GlideRecord && value.isValidRecord();
}

function isValidGlideRecord(value?: any | null): value is ({ isValidRecord(): true; isValid(): true; } & GlideRecord) {
    return typeof value === "object" && value !== null && value instanceof GlideRecord && value.isValidRecord();
}

function isGlideElement(value?: any | null): value is GlideElement {
    return typeof value === "object" && value !== null && value instanceof GlideElement;
}

function isNotNilGlideElement(value?: any | null): value is ({ nil(): false; } & GlideElement) {
    return typeof value === "object" && value !== null && value instanceof GlideElement;
}

function isValidGlideRecordOrElement(value?: any | null): value is (({ isValidRecord(): true; isValid(): true; } & GlideRecord) | ({ nil(): false; } & GlideElement)) {
    return typeof value === "object" && value !== null && (value instanceof GlideRecord) ? value.isValidRecord() : value instanceof GlideElementReference && !value.nil();
}

function isSysGlideObject(value?: any | null): value is (sys_glide_object) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.getTableName() == TABLE_NAME_sys_glide_object :
        value instanceof GlideElementReference && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_glide_object);
}

function isValidSysGlideObject(value?: any | null): value is (({ isValidRecord(): true; isValid(): true; } & $$GlideRecord.sys_glide_object) | ({ nil(): false; } & $$GlideElement.sys_glide_object)) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_glide_object :
        value instanceof GlideElementReference && !value.nil() && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_glide_object);
}

function isSysDictionary(value?: any | null): value is (sys_dictionary) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.getTableName() == TABLE_NAME_sys_dictionary :
        value instanceof GlideElementReference && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_dictionary);
}

function isValidSysDictionary(value?: any | null): value is (({ isValidRecord(): true; isValid(): true; } & $$GlideRecord.sys_dictionary) | ({ nil(): false; } & $$GlideElement.sys_dictionary)) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ? value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_dictionary :
        value instanceof GlideElementReference && !value.nil() && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_dictionary);
}

function isSysDbObject(value?: any | null): value is (sys_db_object) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ?
        value.getTableName() == TABLE_NAME_sys_db_object :
        value instanceof GlideElementReference && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_db_object
    );
}

function isValidSysDbObject(value?: any | null): value is (({ isValidRecord(): true; isValid(): true; } & $$GlideRecord.sys_db_object) | ({ nil(): false; } & $$GlideElement.sys_db_object)) {
    return typeof value === "object" && value !== null && ((value instanceof GlideRecord) ?
        value.isValidRecord() && value.getTableName() == TABLE_NAME_sys_db_object :
        value instanceof GlideElementReference && !value.nil() && (<GlideElementReference>value).getReferenceTable && (<GlideElementReference>value).getReferenceTable() == TABLE_NAME_sys_db_object
    );
}

function smartQuote(value?: string | number | boolean | null) {
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

function scopeToString(scope: ScopeInfo): string {
    if (scope.name == scope.value)
        return (typeof scope.shortDescription === "string" && scope.shortDescription != scope.name) ? smartQuote(scope.name) + ": " + scope.shortDescription.trim() : smartQuote(scope.name);
    return smartQuote(scope.name) + " (" + smartQuote(scope.value) + ((typeof scope.shortDescription === "string" && scope.shortDescription != scope.name && scope.shortDescription != scope.value) ?
        "): " + scope.shortDescription.trim() : ")");
}

function typeToString(type: TypeInfo): string {
    if (type.name == type.label) {
        if (type.name == type.scalarType || type.scalarType === 'string')
            return smartQuote(type.name);
        return smartQuote(type.name) + '; scalar type: ' +  type.scalarType;
    }
    if (type.name == type.scalarType || type.scalarType === 'string')
        return smartQuote(type.label) + ' (' + type.name + ')';
    return smartQuote(type.label) + ' (' + type.name + '); scalar type: ' +  type.scalarType;
}

const newLineRe = /\r\n|\n/g;

function splitLines(value?: string): string[] {
    if (typeof value !== 'string' || value.length == 0 && (value = value.trim()).length == 0)
        return [];
    return value.split(newLineRe).map(function(s: string): string {
        var l = s.trim().length;
        if (l == 0) return "";
        return (l == s.length) ? s : ('.' + s).trim().substring(1);
    });
}

//#endregion

/**
 * The {@link RecordElement} constructor object.
 */
const RecordElement: RecordElementConstructor = (function(): RecordElementConstructor {
    const typePlaceholders: { [scope: string]: TypeInfo; } = {};
    const types: { [scope: string]: TypeInfo; } = {};

    const RecordElement: RecordElementConstructor = Class.create<string, string, InterfaceInfo, RecordElement, RecordElementConstructor, IRecordElementPrototype>();

    RecordElement.prototype = <RecordElementThisObj>{
        initialize: function(this: RecordElementThisObj, elementName: string, type: string, table: InterfaceInfo): void {
            this._columns = {};
            (<{ elementName: string; }>this).elementName = elementName;
            (<{ type: string; }>this).type = type;
            (<{ table: InterfaceInfo; }>this).table = table;
        },

        getType: function(): TypeInfo { return RecordElement.getTypeInfo(this.type); },

        type: "RecordElement"
    };

    RecordElement.getTypeInfo = function(value?: sys_glide_object | string | null): TypeInfo {
        var result: TypeInfo | undefined;
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
                                (<{ label: string; }>result).label = "" + value.label;
                            if (isTrue(value.visible))
                                (<{ isVisible: boolean; }>result).isVisible = true;
                            if (isTrue(value.use_original_value))
                                (<{ useOriginalValue: boolean; }>result).useOriginalValue = true;
                            if (!value.scalar_type.nil())
                                (<{ scalarType: string; }>result).scalarType = "" + value.scalar_type;
                        }
                        var scalarLength = asNumber(value.scalar_length);
                        if (typeof scalarLength === "number")
                            (<{ scalarLength?: number; }>result).scalarLength = scalarLength;
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
const DeclaredElement: DeclaredElementConstructor = (function(): DeclaredElementConstructor {
    const DeclaredElement: DeclaredElementConstructor = Class.create<string, InterfaceInfo, sys_dictionary, DeclaredElement, DeclaredElementConstructor>();

    DeclaredElement.prototype = Object.extendsObject<string, InterfaceInfo, sys_dictionary, RecordElement, IDeclaredElementPrototype, $$class.IPrototype3<string, InterfaceInfo, sys_dictionary>, DeclaredElement>(RecordElement, <DeclaredElementThisObj>{
        initialize: function(this: DeclaredElementThisObj, elementName: string, declaredOn: InterfaceInfo, glideObject: sys_dictionary): void {
            RecordElement.prototype.initialize.call(this, elementName, RecordElement.getTypeInfo(glideObject.internal_type).name, declaredOn);
            (<{ label: string; }>this).label = glideObject.column_label.nil() ? elementName : "" + glideObject.column_label;
            var maxLength = asNumber(glideObject.max_length);
            if (typeof maxLength === "number") (<{ maxLength: number; }>this).maxLength = maxLength;
            if (isTrue(glideObject.primary)) (<{ primary: boolean; }>this).primary = true;
            var scope = TableInfo.getScopeInfo(glideObject.sys_scope);
            if (typeof scope !== "undefined")
                (<{ scope?: string; }>this).scope = scope.value;
            if (isTrue(glideObject.array)) (<{ array: boolean; }>this).array = true;
            if (isTrue(glideObject.mandatory)) (<{ mandatory: boolean; }>this).mandatory = true;
            if (isTrue(glideObject.display)) (<{ display: boolean; }>this).display = true;
            if (isTrue(glideObject.read_only)) (<{ readOnly: boolean; }>this).readOnly = true;
            if (!glideObject.comments.nil())
                (<{ comments?: string; }>this).comments = "" + glideObject.comments;
            var refTable = TableInfo.getTableInfo(glideObject.reference);
            if (typeof refTable !== "undefined")
                (<{ refTable?: TableInfo; }>this).refTable = refTable;
        },

        getLabel: function(this: DeclaredElementThisObj): string { return this.label; },

        getMaxLength: function(this: DeclaredElementThisObj): number | undefined { return this.maxLength; },
        
        isPrimary: function(this: DeclaredElementThisObj): boolean { return this.primary; },
        
        getScope: function(this: DeclaredElementThisObj): ScopeInfo | undefined { return TableInfo.getScopeInfo(this.scope); },
        
        getDefaultValue: function(this: DeclaredElementThisObj): string | undefined { return this.defaultValue; },
        
        getRefTable: function(this: DeclaredElementThisObj): TableInfo | undefined { return this.refTable; },
        
        isArray: function(this: DeclaredElementThisObj): boolean { return this.array; },
        
        getComments: function(this: DeclaredElementThisObj): string | undefined { return this.comments; },
        
        isMandatory: function(this: DeclaredElementThisObj): boolean { return this.mandatory; },
        
        isDisplay: function(this: DeclaredElementThisObj): boolean { return this.display; },
        
        isReadOnly: function(this: DeclaredElementThisObj): boolean { return this.readOnly; },
        
        isInherited: function(): boolean { return false; },
        
        getDeclTable: function(this: DeclaredElementThisObj): InterfaceInfo { return this.table; },

        generateCode: function(this: DeclaredElementThisObj, lines: string[], scope: string, isScoped: boolean): void {
            lines.push("        /**");
            var typeInfo: TypeInfo = this.getType();
            var scalarLength: number | undefined;
            var typeName: string | undefined;
            var jsType: string;
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
                    case "decimal":
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
                    case "script_plain":
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
                    case "html":
                    case "glide_list":
                    case "journal":
                        typeName = typeToString(typeInfo);
                        jsType = 'GlideElementGlideObject';
                        break;
                    case "reference":
                        jsType = 'GlideElementReference';
                        break;
                    case "caller_phone_number":
                        jsType = 'GlideElementPhoneNumber';
                        break;
                    case "string":
                    case "choice":
                    case "field_name":
                    case "color":
                    case "user_roles":
                    case "image":
                        case "table_name":
                        jsType = 'GlideElement';
                        break;
                    default:
                        typeName = typeToString(typeInfo);
                        gs.warn("Unknown " + typeName + ' on ' + this.table.interfaceName + '.' + this.elementName);
                        /*
2023-08-17 15:02:35 (336) Unknown JSON (json) on sp_widget.demo_data
2023-08-17 15:02:35 (336) Unknown undefined on planned_task.dependency
2023-08-17 15:02:35 (337) Unknown Char (char); scalar type: GUID on sys_trigger.document_key
2023-08-17 15:02:35 (338) Unknown Email (email) on sys_user.email
2023-08-17 15:02:35 (339) Unknown UI Action List (glide_action_list) on wf_context.ert_long_running_actions
2023-08-17 15:02:35 (339) Unknown UI Action List (glide_action_list) on wf_context.ert_outlier_workflow_actions
2023-08-17 15:02:35 (339) Unknown Other Date (date) on sys_report_import_table.expire_on_date
2023-08-17 15:02:35 (340) Unknown External Names (external_names) on sys_impex_map.external_names
2023-08-17 15:02:35 (341) Unknown Expression (expression) on sys_dictionary.formula
2023-08-17 15:02:35 (341) Unknown Glyph Icon (Bootstrap) (glyphicon) on sp_instance.glyph
2023-08-17 15:02:35 (342) Unknown Phone Number (ph_number) on sys_user.home_phone
2023-08-17 15:02:35 (345) Unknown Field List (field_list) on cmn_timeline_page.labels
2023-08-17 15:02:35 (345) Unknown Basic Date/Time (datetime) on license_details.last_allocation_cal_on
2023-08-17 15:02:35 (345) Unknown Basic Date/Time (datetime) on license_details.last_tables_used_cal_on
2023-08-17 15:02:35 (345) Unknown Floating Point Number (float) on alm_stockroom.latitude
2023-08-17 15:02:35 (346) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.left_ftr_text
2023-08-17 15:02:35 (346) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.left_hdr_text
2023-08-17 15:02:35 (347) Unknown Floating Point Number (float) on alm_stockroom.longitude
2023-08-17 15:02:35 (347) Unknown Slush Bucket (slushbucket) on kb_knowledge_base.mandatory_fields
2023-08-17 15:02:35 (348) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.mid_ftr_text
2023-08-17 15:02:35 (348) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.mid_hdr_text
2023-08-17 15:02:35 (348) Unknown Phone Number (ph_number) on sys_user.mobile_phone
2023-08-17 15:02:35 (350) Unknown JSON (json) on sp_widget.option_schema
2023-08-17 15:02:35 (350) Unknown Field List (field_list) on sys_report.orderby_list
2023-08-17 15:02:35 (350) Unknown JSON (json) on sys_flow_context.origins
2023-08-17 15:02:35 (351) Unknown Percent Complete (percent_complete); scalar type: decimal on sn_gf_core_goal.percent_complete
2023-08-17 15:02:35 (351) Unknown Percent Complete (percent_complete); scalar type: decimal on rm_epic.percent_complete_by_count
2023-08-17 15:02:35 (351) Unknown Percent Complete (percent_complete); scalar type: decimal on rm_epic.percent_complete_by_estimate
2023-08-17 15:02:35 (351) Unknown Phone Number (ph_number) on sys_user.phone
2023-08-17 15:02:35 (352) Unknown JSON (json) on sys_flow_context.planuct_model_class
2023-08-17 15:02:35 (352) Unknown Order Index (order_index); scalar type: integer on rm_story.product_rel_index
2023-08-17 15:02:35 (353) Unknown Sys ID (GUID) (GUID) on ais_search_profile.publish_id
2023-08-17 15:02:35 (353) Unknown JSON (json) on sp_portal.quick_start_config
2023-08-17 15:02:35 (354) Unknown Order Index (order_index); scalar type: integer on rm_story.release_index
2023-08-17 15:02:35 (355) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.right_ftr_text
2023-08-17 15:02:35 (356) Unknown Two Line Text Area (multi_two_lines) on sys_report_page_hdrftr.right_hdr_text
2023-08-17 15:02:35 (356) Unknown IP Address (Validated IPV4, IPV6) (ip_addr) on ecc_agent.router
2023-08-17 15:02:35 (356) Unknown Day of Week (day_of_week); scalar type: integer on sys_trigger.run_dayofweek
2023-08-17 15:02:35 (356) Unknown Month of Year (month_of_year); scalar type: integer on sys_trigger.run_month
2023-08-17 15:02:35 (356) Unknown Week of Month (week_of_month); scalar type: integer on sys_trigger.run_weekinmonth
2023-08-17 15:02:35 (360) Unknown Order Index (order_index); scalar type: integer on rm_story.sprint_index
2023-08-17 15:02:35 (361) Unknown Two Line Text Area (multi_two_lines) on sys_user.street
2023-08-17 15:02:35 (361) Unknown undefined on sys_db_object.sys_class_code
2023-08-17 15:02:35 (361) Unknown Domain Path (domain_path) on task.sys_domain_path
2023-08-17 15:02:35 (361) Unknown Sys ID (GUID) (GUID) on task.sys_id
2023-08-17 15:02:35 (362) Unknown Composite Field (composite_field) on planned_task.task
2023-08-17 15:02:35 (362) Unknown Field List (field_list) on cmn_timeline_page.tooltip_label
2023-08-17 15:02:35 (363) Unknown Radio Button Choice (radio) on sys_report_map_source.type_mapping
2023-08-17 15:02:35 (365) Unknown Script (server side) (script_server) on sp_instance.widget_parameters
2023-08-17 15:02:35 (365) Unknown UI Action List (glide_action_list) on wf_context.without_current_wf_actions
2023-08-17 15:02:35 (366) Unknown XML (xml) on sys_ui_macro.xml
                        */
                        jsType = 'GlideElement';
                        break;
                }
            var comments = splitLines(this.comments);
            if (comments.length > 0) {
                lines.push("         * " + smartQuote(this.label) + " element - " + comments[0]);
                if (comments.length > 1) {
                    if (this.array || this.display || this.readOnly || this.mandatory || this.primary || typeof typeName === 'string' ||  typeof this.defaultValue === 'string')
                        lines.push("         *");
                    for (var i = 1; i < comments.length; i++)
                        lines.push("         * " + comments[i]);
                }
            } else
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
                    } else if (this.primary)
                        lines.push('         * Mandatory: true; Primary: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Mandatory: true; Maximum length: ' + this.maxLength);
                } else if (this.display) {
                    if (this.primary) {
                        if (this.readOnly)
                            lines.push('         * Primary: true; Read-only: true; Display: true; Maximum length: ' + this.maxLength);
                        else
                            lines.push('         * Primary: true; Display: true; Maximum length: ' + this.maxLength);
                    } if (this.readOnly)
                        lines.push('         * Read-only: true; Display: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Display: true; Maximum length: ' + this.maxLength);
                } else if (this.primary) {
                    if (this.readOnly)
                        lines.push('         * Primary: true; Read-only: true; Maximum length: ' + this.maxLength);
                    else
                        lines.push('         * Primary: true; Maximum length: ' + this.maxLength);
                } if (this.readOnly)
                    lines.push('         * Read-only: true; Maximum length: ' + this.maxLength);
                else
                    lines.push('         * Maximum length: ' + this.maxLength);
            } else {
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
                    } else if (this.primary)
                        lines.push('         * Mandatory: true; Primary: true');
                    else
                        lines.push('         * Mandatory: true');
                } else if (this.display) {
                    if (this.primary) {
                        if (this.readOnly)
                            lines.push('         * Primary: true; Read-only: true; Display: true');
                        else
                            lines.push('         * Primary: true; Display: true');
                    } if (this.readOnly)
                        lines.push('         * Read-only: true; Display: true');
                    else
                        lines.push('         * Display: true');
                } else if (this.primary) {
                    if (this.readOnly)
                        lines.push('         * Primary: true; Read-only: true');
                    else
                        lines.push('         * Primary: true');
                } if (this.readOnly)
                    lines.push('         * Read-only: true');
            }
            if (typeof this.refTable !== 'undefined') {
                lines.push("         * @see {@link $$GlideRecord." + this.refTable.interfaceName + "}");
                lines.push("         */");
                lines.push('        ' + this.elementName + ': $$GlideElement.' + this.refTable.interfaceName + ';');
            } else {
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
const InheritedElement: InheritedElementConstructor = (function(): InheritedElementConstructor {
    const InheritedElement: InheritedElementConstructor = Class.create<DeclaredElement, InterfaceInfo, sys_dictionary, InheritedElement, InheritedElementConstructor>();

    InheritedElement.prototype = Object.extendsObject<DeclaredElement, InterfaceInfo, sys_dictionary, RecordElement, IInheritedElementPrototype, $$class.IPrototype3Opt1<DeclaredElement, InterfaceInfo, sys_dictionary>, InheritedElement>(RecordElement, <InheritedElementThisObj>{
        initialize: function(this: InheritedElementThisObj, inheritedFrom: DeclaredElement, usedOn: InterfaceInfo, glideObject?: sys_dictionary): void {
            (<{ base: DeclaredElement; }>this).base = inheritedFrom;
            if (isValidGlideRecordOrElement(glideObject)) {
                RecordElement.prototype.initialize.call(this, inheritedFrom.elementName, RecordElement.getTypeInfo(glideObject?.internal_type).name, usedOn);
                var s = glideObject.column_label.nil() ? inheritedFrom.elementName : "" + glideObject.column_label;
                if (s != inheritedFrom.label)
                    (<{ labelOverride?: string; }>this).labelOverride = s;
                var maxLength = asNumber(glideObject.max_length);
                if (typeof maxLength === "number" && (typeof inheritedFrom.maxLength !== "number" || maxLength != inheritedFrom.maxLength)) (<{ maxLengthOverride: number; }>this).maxLengthOverride = maxLength;
                var b = isTrue(glideObject.primary);
                if (b != inheritedFrom.primary) (<{ primaryOverride: boolean; }>this).primaryOverride = b;
                var scope = TableInfo.getScopeInfo(glideObject.sys_scope);
                if (typeof scope !== "undefined" && (typeof inheritedFrom.scope !== "string" || inheritedFrom.scope != scope.value))
                    (<{ scopeOverride?: string; }>this).scopeOverride = scope.value;
                if ((b = isTrue(glideObject.array)) != inheritedFrom.array)
                    (<{ arrayOverride: boolean; }>this).arrayOverride = b;
                if ((b = isTrue(glideObject.mandatory)) != inheritedFrom.mandatory)
                    (<{ mandatoryOverride: boolean; }>this).mandatoryOverride = b;
                if ((b = isTrue(glideObject.display)) != inheritedFrom.display)
                    (<{ displayOverride: boolean; }>this).displayOverride = b;
                if ((b = isTrue(glideObject.read_only)) != inheritedFrom.readOnly)
                    (<{ readOnlyOverride: boolean; }>this).readOnlyOverride = b;
                if (!glideObject.comments.nil() && (typeof inheritedFrom.comments !== "string" || (s = "" + glideObject.comments) != inheritedFrom.comments))
                    (<{ commentsOverride?: string; }>this).commentsOverride = s;
                var refTable = TableInfo.getTableInfo(glideObject.reference);
                if (typeof refTable !== "undefined" && (typeof inheritedFrom.refTable !== "object" || refTable.interfaceName != inheritedFrom.refTable.interfaceName))
                    (<{ refTable?: TableInfo; }>this).refTable = refTable;
            } else
                RecordElement.prototype.initialize.call(this, inheritedFrom.elementName, inheritedFrom.type, usedOn);
        },

        getLabel: function(): string { return (typeof this.labelOverride !== "string") ? this.base.label : this.labelOverride; },

        getMaxLength: function(): number | undefined { return (typeof this.maxLengthOverride !== "string") ? this.base.maxLength : this.maxLengthOverride; },
        
        isPrimary: function(): boolean { return (typeof this.primaryOverride !== "string") ? this.base.primary : this.primaryOverride; },
        
        getScope: function(): ScopeInfo | undefined { return (typeof this.scopeOverride !== "string") ? this.base.getScope() : TableInfo.getScopeInfo(this.scopeOverride); },
        
        getDefaultValue: function(): string | undefined { return (typeof this.defaultValueOverride !== "string") ? this.base.defaultValue : this.defaultValueOverride; },
        
        getRefTable: function(): TableInfo | undefined { return (typeof this.refTableOverride !== "string") ? this.base.refTable : this.refTableOverride; },
        
        isArray: function(): boolean { return (typeof this.arrayOverride !== "string") ? this.base.array : this.arrayOverride; },
        
        getComments: function(): string | undefined { return (typeof this.commentsOverride !== "string") ? this.base.comments : this.commentsOverride; },
        
        isMandatory: function(): boolean { return (typeof this.mandatoryOverride !== "string") ? this.base.mandatory : this.mandatoryOverride; },
        
        isDisplay: function(): boolean { return (typeof this.displayOverride !== "string") ? this.base.display : this.displayOverride; },
        
        isReadOnly: function(): boolean { return (typeof this.readOnlyOverride !== "string") ? this.base.readOnly : this.readOnlyOverride; },
        
        isInherited: function(): boolean { return true; },
        
        getDeclTable: function(): InterfaceInfo { return this.base.table; },

        type: "InheritedElement"
    });

    return InheritedElement;
})();

/**
 * The {@link InterfaceInfo} constructor object.
 */
const InterfaceInfo: InterfaceInfoConstructor = (function(): InterfaceInfoConstructor {
    const InterfaceInfo: InterfaceInfoConstructor = Class.create<string, InterfaceInfo, InterfaceInfoConstructor, IInterfaceInfoPrototype>();

    InterfaceInfo.prototype = <InterfaceInfoThisObj>{
        _elements: {},

        initialize: function(this: InterfaceInfoThisObj, interfaceName: string): void {
            (<{ interfaceName: string; }>this).interfaceName = interfaceName;
        },

        getElement: function(name: string): Element | undefined { return this._elements[name]; },

        forEachElement: function<T>(callback: { (this: T, element: Element): void; }, includeInherited: boolean, thisObj: T): void {
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

interface IGenerateCodeThisObj { isFirst: boolean, scope: string; lines: string[]; }

/**
 * The {@link TableInfo} constructor object.
 */
const TableInfo: TableInfoConstructor = (function(): TableInfoConstructor {
    const scopePlaceholders: { [scope: string]: ScopeInfo; } = {};
    const scopes: { [scope: string]: ScopeInfo; } = {};
    const allTables: { [tableName: string]: TableInfo; } = {};

    const TableInfo: TableInfoConstructor = Class.create<string, $$GlideRecord.sys_db_object, TableInfo, TableInfoConstructor>();

    TableInfo.prototype = Object.extendsObject<string, $$GlideRecord.sys_db_object, InterfaceInfo, ITableInfoPrototype, $$class.IPrototype2<string, $$GlideRecord.sys_db_object>, TableInfo>(InterfaceInfo, <TableInfoThisObj>{
        initialize: function(this: TableInfoThisObj & InterfaceInfoThisObj, tableName: string, glideRecord: $$GlideRecord.sys_db_object): void {
            InterfaceInfo.prototype.initialize.call(this, tableName);
            (<{ label: string; }>this).label = glideRecord.label.nil() ? tableName : "" + glideRecord.label;
            var scope = TableInfo.getScopeInfo(glideRecord.sys_scope);
            if (typeof scope !== "undefined")
                (<{ scope?: string; }>this).scope = scope.value;
            if (!glideRecord.number_ref.nil())
                (<{ autoNumberPrefix?: string}>this).autoNumberPrefix = "" + glideRecord.number_ref.prefix;
            allTables[tableName] = this;
            var gr = <$$GlideRecord.sys_dictionary>new GlideRecord(TABLE_NAME_sys_dictionary);
            gr.addQuery("name", tableName);
            gr.addActiveQuery();
            gr.addNotNullQuery("element");
            gr.query();
            var table = TableInfo.getTableInfo(glideRecord.super_class);
            if (typeof table !== "undefined") {
                (<{ superClass?: TableInfo; }>this).superClass = table;
                while (gr.next()) {
                    var elementName = "" + gr.element;
                    var base = table.getElement(elementName);
                    if (typeof base === "undefined")
                        this._elements[elementName] = new DeclaredElement(elementName, this, gr);
                    else
                        this._elements[elementName] = new InheritedElement((base instanceof InheritedElement) ? base.base : <DeclaredElement>base, this, gr);
                }
            } else {
                while (gr.next()) {
                    var elementName = "" + gr.element;
                    this._elements[elementName] = new DeclaredElement(elementName, this, gr);
                }
            }
        },

        getScope: function(): ScopeInfo | undefined { return TableInfo.getScopeInfo(this.scope); },
        
        generateCode: function(this: TableInfoThisObj, context: CodeGenerationContext): void {
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
            var thisObj: IGenerateCodeThisObj = { isFirst: true, scope: (typeof scope !== "undefined") ? scope.value : "gobal", lines: context.fieldInterfaceLines };
            if (context.isScoped)
                this.forEachElement<IGenerateCodeThisObj>(function(this: IGenerateCodeThisObj, element: DeclaredElement): void {
                    if (this.isFirst)
                        this.isFirst = false;
                    else
                        this.lines.push("");
                    element.generateCode(this.lines, this.scope, true);
                }, false, thisObj);
            else
                this.forEachElement<IGenerateCodeThisObj>(function(this: IGenerateCodeThisObj, element: DeclaredElement): void {
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

    TableInfo.getScopeInfo = function(value?: sys_scope | string | null): ScopeInfo | undefined {
        var result: ScopeInfo | undefined;
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
                            (<{ name: string; }>result).name = value.name.nil() ? scope : "" + value.name;
                        if (!value.short_description.nil())
                            (<{ shortDescription?: string; }>result).shortDescription = "" + value.short_description;
                        scopes[scope] = result;
                    }
                    return result;
                }
                break;
        }
    };

    TableInfo.getTableInfo = function(glideObject: sys_db_object): TableInfo | undefined {
        if (isValidSysDbObject(glideObject)) {
            var tableName  = glideObject.name.nil() ? (glideObject.sys_name.nil() ? "" + glideObject : "" + glideObject.sys_name) : "" + glideObject.name;
            var result: TableInfo | undefined = allTables[tableName];
            return (typeof result !== "undefined") ? result : new TableInfo(tableName, (glideObject instanceof GlideRecord) ? glideObject : (<$$GlideElement.sys_db_object>glideObject).getRefRecord());
        }
    };

    return TableInfo;
})();

var tableNames: string[] = ["task"];
var context: CodeGenerationContext = {
    fieldInterfaceLines: [],
    elementLines: [],
    recordLines: [],
    isScoped: false
};
tableNames.forEach(function(this: CodeGenerationContext, n: string): void {
    var gr = <$$GlideRecord.sys_db_object>new GlideRecord("sys_db_object");
    gr.addQuery("name", n);
    gr.query();
    gr.next();
    var tableInfo = TableInfo.getTableInfo(gr);
    if (typeof tableInfo === "undefined")
        gs.error("Table " + smartQuote(n) + " not found.");
    else
        tableInfo.generateCode(this);
}, context);
context.fieldInterfaceLines