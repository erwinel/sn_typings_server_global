/// <reference path="../../types/index.d.ts" />
declare type CodeGenerationContext = Readonly<{
    fieldInterfaceLines: string[];
    elementLines: string[];
    recordLines: string[];
    isScoped: boolean;
}>;
declare type sys_db_object = $$GlideRecord.sys_db_object | $$GlideElement.sys_db_object;
declare type sys_glide_object = $$GlideRecord.sys_glide_object | $$GlideElement.sys_glide_object;
declare type sys_dictionary = $$GlideRecord.sys_dictionary | $$GlideElement.sys_dictionary;
declare type sys_scope = $$GlideRecord.sys_scope | $$GlideElement.sys_scope;
declare type ScopeInfo = Readonly<{
    name: string;
    value: string;
    shortDescription?: string;
}>;
declare type TypeInfo = Readonly<{
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
/**
 * Defines the public instance members of a {@link RecordElement} type.
 */
interface RecordElement extends Readonly<{
    elementName: string;
    elementType: string;
    table: InterfaceInfo;
    getType(): TypeInfo;
    equals(other?: RecordElement): boolean;
}> {
}
/**
 * Defines the prototype for a {@link RecordElement} constructor.
 */
interface IRecordElementPrototype extends RecordElement {
}
/**
 * Defines the {@link RecordElement} constructor.
 */
interface RecordElementConstructor extends $$class.Constructor3<string, string, InterfaceInfo, RecordElement, IRecordElementPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} elementName - The name of the element.
     * @param {string} elementType - The element type.
     * @param {InterfaceInfo} table - The table containing the element.
     */
    new (elementName: string, elementType: string, table: InterfaceInfo): RecordElement;
    getTypeInfo(value?: sys_glide_object | string | null): TypeInfo;
}
/**
 * Defines the"this" object for {@link RecordElement} instance methods.
 */
declare type RecordElementThisObj = IRecordElementPrototype & $$class.IPrototype3<string, string, InterfaceInfo>;
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
    generateCode(lines: string[], scope: string, isScoped: boolean): any;
} & IRecordElement> {
}
/**
 * Defines all public instance members of the {@link DeclaredElement} type.
 */
declare type DeclaredElement = DeclaredElementPublic & RecordElement;
/**
 * Defines the prototype members added for the {@link DeclaredElement} constructor.
 */
interface IDeclaredElementPrototype extends DeclaredElementPublic {
}
/**
 * Defines the {@link DeclaredElement} constructor.
 */
interface DeclaredElementConstructor extends $$class.Constructor5Opt2<string, InterfaceInfo, sys_dictionary | string, string, string, DeclaredElement> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} elementName -
     * @param {InterfaceInfo} declaredOn -
     * @param {sys_dictionary} glideObject -
     */
    new (elementName: string, declaredOn: InterfaceInfo, glideObject: sys_dictionary): DeclaredElement;
    new (elementName: string, declaredOn: InterfaceInfo, type: string, label?: string, scope?: string): DeclaredElement;
}
/**
 * Defines the"this" object for {@link DeclaredElement} instance methods.
 */
declare type DeclaredElementThisObj = IDeclaredElementPrototype & DeclaredElement & $$class.IPrototype5Opt2<string, InterfaceInfo, sys_dictionary | string, string, string>;
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
}
/**
 * Defines all public instance members of the {@link InheritedElement} type.
 */
declare type InheritedElement = InheritedElementPublic & RecordElement;
/**
 * Defines the prototype members added for the {@link InheritedElement} constructor.
 */
interface IInheritedElementPrototype extends InheritedElementPublic {
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
    new (inheritedFrom: DeclaredElement, usedOn: InterfaceInfo, glideObject?: sys_dictionary): InheritedElement;
}
/**
 * Defines the"this" object for {@link InheritedElement} instance methods.
 */
declare type InheritedElementThisObj = IInheritedElementPrototype & InheritedElement & $$class.IPrototype3Opt1<DeclaredElement, InterfaceInfo, sys_dictionary>;
declare type Element = InheritedElement | DeclaredElement;
/**
 * Defines the public instance members of a {@link InterfaceInfo} type.
 */
interface InterfaceInfo extends Readonly<{
    interfaceName: string;
    superClass?: InterfaceInfo;
    getElement(name: string): Element | undefined;
    forEachElement<T>(callback: {
        (this: T, element: Element): void;
    }, includeInherited: true, thisObj: T): void;
    forEachElement<T>(callback: {
        (this: T, element: DeclaredElement): void;
    }, includeInherited: false, thisObj: T): void;
}> {
}
/**
 * Defines the prototype for a {@link InterfaceInfo} constructor.
 */
interface IInterfaceInfoPrototype extends InterfaceInfo {
    _elements: {
        [name: string]: Element;
    };
}
/**
 * Defines the {@link InterfaceInfo} constructor.
 */
interface InterfaceInfoConstructor extends $$class.Constructor1<string, InterfaceInfo, IInterfaceInfoPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {string} interfaceName -
     */
    new (interfaceName: string): InterfaceInfo;
    readonly baseInterface: InterfaceInfo;
    readonly sys_id: DeclaredElement;
    readonly sys_mod_count: DeclaredElement;
    readonly sys_updated_by: DeclaredElement;
    readonly sys_updated_on: DeclaredElement;
    readonly sys_created_by: DeclaredElement;
    readonly sys_created_on: DeclaredElement;
}
/**
 * Defines the"this" object for {@link InterfaceInfo} instance methods.
 */
declare type InterfaceInfoThisObj = IInterfaceInfoPrototype & $$class.IPrototype1<string>;
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
}
/**
 * Defines all public instance members of the {@link TableInfo} type.
 */
declare type TableInfo = TableInfoPublic & InterfaceInfo;
/**
 * Defines the prototype members added for the {@link TableInfo} constructor.
 */
interface ITableInfoPrototype extends TableInfoPublic {
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
    new (tableName: string, glideRecord: $$GlideRecord.sys_db_object): TableInfo;
    getScopeInfo(value?: sys_scope | string | null): ScopeInfo | undefined;
    getTableInfo(glideObject: sys_db_object): TableInfo | undefined;
}
/**
 * Defines the"this" object for {@link TableInfo} instance methods.
 */
declare type TableInfoThisObj = ITableInfoPrototype & TableInfo & $$class.IPrototype2<string, $$GlideRecord.sys_db_object>;
declare const TABLE_NAME_sys_dictionary = "sys_dictionary";
declare const TABLE_NAME_sys_glide_object = "sys_glide_object";
declare const TABLE_NAME_sys_db_object = "sys_db_object";
declare function isTrue(value?: GlideElement | string | null): boolean;
declare function asNumber(value?: GlideElement | string | null): number | undefined;
declare function isGlideRecord(value?: any | null): value is GlideRecord;
declare function isValidGlideRecord(value?: any | null): value is ({
    isValidRecord(): true;
    isValid(): true;
} & GlideRecord);
declare function isGlideElement(value?: any | null): value is GlideElement;
declare function isNotNilGlideElement(value?: any | null): value is ({
    nil(): false;
} & GlideElement);
declare function isValidGlideRecordOrElement(value?: any | null): value is (({
    isValidRecord(): true;
    isValid(): true;
} & GlideRecord) | ({
    nil(): false;
} & GlideElement));
declare function isSysGlideObject(value?: any | null): value is (sys_glide_object);
declare function isValidSysGlideObject(value?: any | null): value is (({
    isValidRecord(): true;
    isValid(): true;
} & $$GlideRecord.sys_glide_object) | ({
    nil(): false;
} & $$GlideElement.sys_glide_object));
declare function isSysDictionary(value?: any | null): value is (sys_dictionary);
declare function isValidSysDictionary(value?: any | null): value is (({
    isValidRecord(): true;
    isValid(): true;
} & $$GlideRecord.sys_dictionary) | ({
    nil(): false;
} & $$GlideElement.sys_dictionary));
declare function isSysDbObject(value?: any | null): value is (sys_db_object);
declare function isValidSysDbObject(value?: any | null): value is (({
    isValidRecord(): true;
    isValid(): true;
} & $$GlideRecord.sys_db_object) | ({
    nil(): false;
} & $$GlideElement.sys_db_object));
declare const worCharsRe: RegExp;
declare function smartQuote(value?: string | number | boolean | null): string;
declare function scopeToString(scope: ScopeInfo): string;
declare function typeToString(type: TypeInfo): string;
declare const newLineRe: RegExp;
declare function splitLines(value?: string): string[];
/**
 * The {@link RecordElement} constructor object.
 */
declare const RecordElement: RecordElementConstructor;
/**
 * The {@link DeclaredElement} constructor object.
 */
declare const DeclaredElement: DeclaredElementConstructor;
/**
 * The {@link InheritedElement} constructor object.
 */
declare const InheritedElement: InheritedElementConstructor;
/**
 * The {@link InterfaceInfo} constructor object.
 */
declare const InterfaceInfo: InterfaceInfoConstructor;
interface IGenerateCodeThisObj {
    isFirst: boolean;
    scope: string;
    lines: string[];
}
/**
 * The {@link TableInfo} constructor object.
 */
declare const TableInfo: TableInfoConstructor;
declare var tableNames: string[];
declare var context: CodeGenerationContext;
