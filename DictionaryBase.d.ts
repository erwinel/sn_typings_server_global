/// <reference path="GlideBase.d.ts" />

/**
 *
 * @type {("not requested" | "cancelled" | "requested" | "duplicate" | "not_required" | "approved" | "rejected")}
 */
declare type TaskAppproval = "not requested" | "cancelled" | "requested" | "duplicate" | "not_required" | "approved" | "rejected";

/**
 * email=Email; endpoint_security=Endpoint Security; ids_ips=IDS/IPS; network_monitoring=Network Monitoring; phone=Phone; self-service=Self-service; siem=SIEM; virtual_agent=Virtual Agent; vulnerability_response=Vulnerability Response; walk-in=Walk-in
 * @type {("email" | "endpoint_security" | "ids_ips" | "network_monitoring" | "phone" | "self-service" | "siem" | "virtual_agent" | "vulnerability_response" | "walk-in")}
 */
declare type TaskContactType = "email" | "endpoint_security" | "ids_ips" | "network_monitoring" | "phone" | "self-service" | "siem" | "virtual_agent" | "vulnerability_response" | "walk-in";

/**
 *
 */
declare type TaskEscalationValue = 0 | 1 | 2 | 3;
declare type TaskEscalationString = "0" | "1" | "2" | "3";
declare type TaskEscalation = TaskEscalationValue | TaskEscalationString;

/**
 *
 * @description 1="1 - High"; 2="2 - Medium"; 3="3 - Low"
 */
declare type Task3ScaleValue = 1 | 2 | 3;
declare type Task3ScaleString = "1" | "2" | "3";
declare type Task3Scale = Task3ScaleValue | Task3ScaleString;

/**
 *
 */
declare type TaskPriorityValue = 1 | 2 | 3 | 4 | 5;
declare type TaskPriorityString = "1" | "2" | "3" | "4" | "5";
declare type TaskPriority = TaskPriorityValue | TaskPriorityString;

/**
 *
 * @description -5="Pending"; 1="Open"; 2="Work in Progress"; 3="Closed Complete"; 4="Closed Incomplete"; 7="Closed Skipped"
 */
declare type TaskStateValue = -5 | 1 | 2 | 3 | 4 | 7;
declare type TaskStateString = "-5" | "1" | "2" | "3" | "4" | "7";
declare type TaskState = TaskStateValue | TaskStateString;

/**
 *
 * @type {("Solved (Work Around)" | "Solved (Permanently)" | "Solved Remotely (Work Around)" | "Solved Remotely (Permanently)" | "Not Solved (Not Reproducible)" | "Not Solved (Too Costly)" | "Closed/Resolved by Caller")}
 */
declare type IncidentCloseCode = "Solved (Work Around)" | "Solved (Permanently)" | "Solved Remotely (Work Around)" | "Solved Remotely (Permanently)" | "Not Solved (Not Reproducible)" | "Not Solved (Too Costly)" | "Closed/Resolved by Caller";

/**
 *
 * @description 1="Awaiting Caller"; 5="Awaiting Change"; 3="Awaiting Problem"; 4="Awaiting Vendor"
 */
declare type IncidentHoldReasonValue = 1 | 5 | 3 | 4;
declare type IncidentHoldReasonString = "1" | "5" | "3" | "4";
declare type IncidentHoldReason = IncidentHoldReasonValue | IncidentHoldReasonString;

/**
 *
 * @description 1="New"; 2="In Progress"; 3="On Hold"; 6="Resolved"; 7="Closed"; 8="Canceled"
 */
declare type IncidentStateValue = 1 | 2 | 3 | 6 | 7 | 8;
declare type IncidentStateString = "1" | "2" | "3" | "6" | "7" | "8";
declare type IncidentState = IncidentStateValue | IncidentStateString;

/**
 *
 */
declare type IncidentNotifyValue = 1 | 2 | 3;
declare type IncidentNotifyString = "1" | "2" | "3";
declare type IncidentNotify = IncidentNotifyValue | IncidentNotifyString;

/**
 *
 * @description 1="Success"; 2="Fail"
 */
declare type ChangeReviewStatusValue = 1 | 2;
declare type ChangeReviewStatusString = "1" | "2";
declare type ChangeReviewStatus = ChangeReviewStatusValue | ChangeReviewStatusString;

/**
 *
 * @description 2="High"; 3="Moderate"; 4="Low"
 */
declare type ChangeRiskValue = 2 | 3 | 4;
declare type ChangeRiskString = "2" | "3" | "4";
declare type ChangeRisk = ChangeRiskValue | ChangeRiskString;

/**
 *
 * @description 1="Massive"; 2="Large"; 3="Medium"; 4="Small"; 5="Tiny"
 */
declare type ChangeScopeValue = 1 | 2 | 3 | 4 | 5;
declare type ChangeScopeString = "1" | "2" | "3" | "4" | "5";
declare type ChangeScope = ChangeScopeValue | ChangeScopeString;

/**
 *
 */
declare type ChangeType = "standard" | "normal" | "emergency";

/**
 *
 * @type {("successful" | "successful_issues" | "unsuccessful")}
 * @description "successful"="Successful"; "successful_issues"="Successful with issues"; "unsuccessful"="Unsuccessful"
 */
declare type ChangeCloseCode = "successful" | "successful_issues" | "unsuccessful";

/**
 *
 * @description 1="Open"; 3="Pending Change"; 2="Known Error"; 4="Closed/Resolved"
 */
declare type ProblemStateValue = 1 | 3 | 2 | 4;
declare type ProblemStateString = "1" | "3" | "2" | "4";
declare type ProblemState = ProblemStateValue | ProblemStateString;

/**
 *
 * @type {("starting" | "running" | "complete" | "cancelled" | "unknown")}
 */
declare type GlideProgressWorkerState = "starting" | "running" | "complete" | "cancelled" | "unknown";

/**
 *
 * @type {("success" | "cancelled" | "error")}
 */
declare type GlideProgressWorkerCompletionCode = "success" | "cancelled" | "error";

/**
 *
 * @type {("requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped")}
 * @description "requested"="Pending Approval"; "in_process"="Approved"; "closed_complete"="Closed Complete"; "closed_incomplete"="Closed Incomplete"; "closed_cancelled"="Closed Cancelled"; "closed_rejected"="Closed Rejected"; "closed_skipped"="Closed Skipped"
 */
declare type IRequestState = "requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped";

/**
 * Fields common to all tables.
 * @interface IGlideTableProperties
 */
declare interface IGlideTableProperties extends $$element.IDbObject {
    /**
     * Created by
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_created_by: $$rhino.Nilable<$$property.Element>;

    /**
     * Created
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_created_on: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Sys ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     * @description Internal type is "GUID"
     */
    sys_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Updates
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_mod_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Updated by
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_updated_by: $$rhino.Nilable<$$property.Element>;

    /**
     * Updated
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof IGlideTablePropertiesFields
     */
    sys_updated_on: $$rhino.Nilable<$$property.GlideObject>;
}

/**
 * Fields common to all extendable tables.
 * @interface IExtendedGlideTableProperties
 * @extends {}
 */
declare interface IExtendedGlideTableProperties extends IGlideTableProperties {
    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof IExtendedGlideTablePropertiesFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;
}

/**
 * GlideElement values from the Application File table.
 * @interface sys_metadataFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_metadataFields extends IExtendedGlideTableProperties {
    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Package
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>}
     * @memberof sys_metadataFields
     * @description Refers to sys_package (Package)
     */
    sys_package: $$rhino.Nilable<$$property.generic.Reference<sys_packageFields, sys_packageGlideRecord>>;

    /**
     * Protection policy
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_policy: $$rhino.Nilable<$$property.Element>;

    /**
     * Application
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>}
     * @memberof sys_metadataFields
     * @description Refers to sys_scope (Application)
     */
    sys_scope: $$rhino.Nilable<$$property.generic.Reference<sys_scopeFields, sys_scopeGlideRecord>>;

    /**
     * Update name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_metadataFields
     */
    sys_update_name: $$rhino.Nilable<$$property.Element>;
}
declare type sys_metadataGlideRecord = GlideRecord & sys_metadataFields;

/**
 * GlideElement values from the Table table.
 * @interface sys_db_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_db_objectFields extends sys_metadataFields {
    /**
     * Accessible from
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    access: $$rhino.Nilable<$$property.Element>;

    /**
     * Allow UI actions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    actions_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow new fields
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    alter_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Caller Access
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    caller_access: $$rhino.Nilable<$$property.Element>;

    /**
     * Allow client scripts
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    client_scripts_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow configuration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    configuration_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Can create
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    create_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Create access controls
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    create_access_controls: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Can delete
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    delete_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Extension model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    extension_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Extensible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    is_extendable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     * @memberof sys_db_objectFields
     */
    label: $$rhino.Nilable<$$property.Documentation>;

    /**
     * Live feed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    live_feed_enabled: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Auto number
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_number (Number)
     */
    number_ref: $$rhino.Nilable<$$property.generic.Reference<sys_numberFields, sys_numberGlideRecord>>;

    /**
     * Provider class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    provider_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Can read
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    read_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Extends table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_db_object (Table)
     */
    super_class: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Sys class code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    sys_class_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_db_objectFields
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Can update
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    update_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * User role
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>}
     * @memberof sys_db_objectFields
     * @description Refers to sys_user_role (Role)
     */
    user_role: $$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>;

    /**
     * Allow access to this table via web services
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_db_objectFields
     */
    ws_access: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_db_objectGlideRecord = sys_metadataGlideRecord & sys_db_objectFields;

/**
 * GlideElement values from the Dictionary Entry table.
 * @interface sys_dictionaryFields
 * @extends {sys_metadataFields}
 */
declare interface sys_dictionaryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Array
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    array: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Array denormalized
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    array_denormalized: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Audit
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    audit: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Calculation
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_dictionaryFields
     */
    calculation: $$rhino.Nilable<$$property.Script>;

    /**
     * Choice
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    choice: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Choice field
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    choice_field: $$rhino.Nilable<$$property.Element>;

    /**
     * Choice table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    choice_table: $$rhino.Nilable<$$property.Element>;

    /**
     * Column label
     * @type {$$rhino.Nilable<$$property.Documentation>}
     * @memberof sys_dictionaryFields
     */
    column_label: $$rhino.Nilable<$$property.Documentation>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Create roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    create_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Defaultsort
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    defaultsort: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Default value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    default_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Delete roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    delete_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Dependent
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dependent: $$rhino.Nilable<$$property.Element>;

    /**
     * Dependent on field
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dependent_on_field: $$rhino.Nilable<$$property.Element>;

    /**
     * Display
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    display: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dynamic creation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    dynamic_creation: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dynamic creation script
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    dynamic_creation_script: $$rhino.Nilable<$$property.Element>;

    /**
     * Dynamic default value
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_filter_option_dynamic (Dynamic Filter Options)
     */
    dynamic_default_value: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Dynamic ref qual
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_filter_option_dynamic (Dynamic Filter Options)
     */
    dynamic_ref_qual: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Column name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Element reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    element_reference: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Foreign database
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    foreign_database: $$rhino.Nilable<$$property.Element>;

    /**
     * Function definition
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    function_definition: $$rhino.Nilable<$$property.Element>;

    /**
     * Function field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    function_field: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_glide_object (Field class)
     */
    internal_type: $$rhino.Nilable<$$property.generic.Reference<sys_glide_objectFields, sys_glide_objectGlideRecord>>;

    /**
     * Mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    mandatory: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Max length
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    max_length: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Next element
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    next_element: $$rhino.Nilable<$$property.Element>;

    /**
     * Primary
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    primary: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Read roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    read_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_dictionaryFields
     * @description Refers to sys_db_object (Table)
     */
    reference: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Reference cascade rule
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_cascade_rule: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference floats
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    reference_floats: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Reference key
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_key: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference qual
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_qual: $$rhino.Nilable<$$property.Element>;

    /**
     * Reference qual condition
     * @type {$$rhino.Nilable<$$property.Conditions>}
     * @memberof sys_dictionaryFields
     */
    reference_qual_condition: $$rhino.Nilable<$$property.Conditions>;

    /**
     * Reference type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    reference_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Sizeclass
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_dictionaryFields
     */
    sizeclass: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Spell check
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    spell_check: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Staged
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    staged: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Table reference
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    table_reference: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Text index
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    text_index: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Unique
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    unique: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use dependent field
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    use_dependent_field: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use dynamic default
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    use_dynamic_default: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Use reference qualifier
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    use_reference_qualifier: $$rhino.Nilable<$$property.Element>;

    /**
     * Calculated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    virtual: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Widget
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    widget: $$rhino.Nilable<$$property.Element>;

    /**
     * Write roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionaryFields
     */
    write_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * XML view
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionaryFields
     */
    xml_view: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_dictionaryGlideRecord = sys_metadataGlideRecord & sys_dictionaryFields;

/**
 * GlideElement values from the Field class table.
 * @interface sys_glide_objectFields
 * @extends {sys_metadataFields}
 */
declare interface sys_glide_objectFields extends sys_metadataFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Class name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    class_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.TranslatedField>}
     * @memberof sys_glide_objectFields
     */
    label: $$rhino.Nilable<$$property.TranslatedField>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Length
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    scalar_length: $$rhino.Nilable<$$property.Element>;

    /**
     * Extends
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_glide_objectFields
     */
    scalar_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Use original value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_glide_objectFields
     */
    use_original_value: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_glide_objectFields
     */
    visible: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_glide_objectGlideRecord = sys_metadataGlideRecord & sys_glide_objectFields;

/**
 * GlideElement values from the Number table.
 * @interface sys_numberFields
 * @extends {sys_metadataFields}
 */
declare interface sys_numberFields extends sys_metadataFields {
    /**
     * Table
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>}
     * @memberof sys_numberFields
     * @description Refers to sys_db_object (Table)
     */
    category: $$rhino.Nilable<$$property.generic.Reference<sys_db_objectFields, sys_db_objectGlideRecord>>;

    /**
     * Number of digits
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_numberFields
     */
    maximum_digits: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_numberFields
     */
    number: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_numberFields
     */
    prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_numberGlideRecord = sys_metadataGlideRecord & sys_numberFields;

/**
 * GlideElement values from the Number table.
 * @interface sys_choiceFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_choiceFields extends IGlideTableProperties {
    /**
     * Dependent value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    dependent_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Element
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Hint
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    hint: $$rhino.Nilable<$$property.Element>;

    /**
     * Inactive
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_choiceFields
     */
    inactive: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Label
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    label: $$rhino.Nilable<$$property.Element>;

    /**
     * Language
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    language: $$rhino.Nilable<$$property.Element>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Sequence
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_choiceFields
     */
    sequence: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_choiceFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_choiceFields
     */
    sys_domain_path: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_choiceFields
     */
    value: $$rhino.Nilable<$$property.Element>;
}
declare type sys_choiceGlideRecord = GlideRecord & sys_choiceFields;

/**
 * GlideElement values from the Dictionary Entry Override table.
 * @interface sys_dictionary_overrideFields
 * @extends {sys_metadataFields}
 */
declare interface sys_dictionary_overrideFields extends sys_metadataFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Override attributes
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    attributes_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Base table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    base_table: $$rhino.Nilable<$$property.Element>;

    /**
     * Calculation
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sys_dictionary_overrideFields
     */
    calculation: $$rhino.Nilable<$$property.Script>;

    /**
     * Override calculation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    calculation_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Default value
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    default_value: $$rhino.Nilable<$$property.Element>;

    /**
     * Override default value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    default_value_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Dependent
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    dependent: $$rhino.Nilable<$$property.Element>;

    /**
     * Override dependent
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    dependent_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override display value
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    display_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Column name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    element: $$rhino.Nilable<$$property.Element>;

    /**
     * Mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    mandatory: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override mandatory
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    mandatory_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Table
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Override read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    read_only_override: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Reference qual
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_dictionary_overrideFields
     */
    reference_qual: $$rhino.Nilable<$$property.Element>;

    /**
     * Override reference qualifier
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_dictionary_overrideFields
     */
    reference_qual_override: $$rhino.Nilable<$$property.Boolean>;
}
declare type sys_dictionary_overrideGlideRecord = sys_metadataGlideRecord & sys_dictionary_overrideFields;

/**
 * GlideElement values from the Package table.
 * @interface sys_packageFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface sys_packageFields extends IExtendedGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription requirement
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    enforce_license: $$rhino.Nilable<$$property.Element>;

    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    license_category: $$rhino.Nilable<$$property.Element>;

    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    license_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_packageFields
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_packageFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type sys_packageGlideRecord = GlideRecord & sys_packageFields;

/**
 * GlideElement values from the Application table.
 * @interface sys_scopeFields
 * @extends {sys_packageFields}
 */
declare interface sys_scopeFields extends sys_packageFields {
    /**
     * JavaScript Mode
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    js_level: $$rhino.Nilable<$$property.Element>;

    /**
     * Logo
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sys_scopeFields
     */
    logo: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Private
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    private: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Restrict Table Choices
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    restrict_table_access: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Runtime Access Tracking
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    runtime_access_tracking: $$rhino.Nilable<$$property.Element>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    scope: $$rhino.Nilable<$$property.Element>;

    /**
     * Application administration
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_scopeFields
     */
    scoped_administration: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Template
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    template: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    vendor: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_scopeFields
     */
    vendor_prefix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_scopeGlideRecord = sys_packageGlideRecord & sys_scopeFields;

/**
 * GlideElement values from the Role table.
 * @interface sys_user_roleFields
 * @extends {sys_metadataFields}
 */
declare interface sys_user_roleFields extends sys_metadataFields {
    /**
     * Assignable by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>}
     * @memberof sys_user_roleFields
     * @description Refers to sys_user_role (Role)
     */
    assignable_by: $$rhino.Nilable<$$property.generic.Reference<sys_user_roleFields, sys_user_roleGlideRecord>>;

    /**
     * Can delegate
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    can_delegate: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Elevated privilege
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    elevated_privilege: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     * @memberof sys_user_roleFields
     * @description Refers to sys_encryption_context (Encryption Context)
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;

    /**
     * Grantable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    grantable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Includes roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    includes_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires Subscription
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    requires_subscription: $$rhino.Nilable<$$property.Element>;

    /**
     * Application Administrator
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_roleFields
     */
    scoped_admin: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Suffix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_roleFields
     */
    suffix: $$rhino.Nilable<$$property.Element>;
}
declare type sys_user_roleGlideRecord = sys_metadataGlideRecord & sys_user_roleFields;

/**
 * GlideElement values from the Encryption Context table.
 * @interface sys_encryption_contextFields
 * @extends {sys_metadataFields}
 */
declare interface sys_encryption_contextFields extends sys_metadataFields {
    /**
     * Encryption key
     * @type {$$rhino.Nilable<$$property.Password2>}
     * @memberof sys_encryption_contextFields
     */
    encryption_key: $$rhino.Nilable<$$property.Password2>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_encryption_contextFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_encryption_contextFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type sys_encryption_contextGlideRecord = sys_metadataGlideRecord & sys_encryption_contextFields;

/**
 * GlideElement values from the Calendar table.
 * @interface sys_calendarFields
 * @extends {sys_metadataFields}
 */
declare interface sys_calendarFields extends sys_metadataFields {
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_calendarFields
     */
    name: $$rhino.Nilable<$$property.Element>;
}
declare type sys_calendarGlideRecord = sys_metadataGlideRecord & sys_calendarFields;

/**
 * GlideElement values from the Agreement table.
 * @interface slaFields
 * @extends {IGlideTableProperties}
 */
declare interface slaFields extends IGlideTableProperties {
    /**
     * Accountable user
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    accountable_user: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof slaFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Avail pct
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    avail_pct: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Begins
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    begins: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Business lead
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    business_lead: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Business unit
     * @type {$$rhino.Nilable<$$property.generic.Element<("Operations" | "Sales")>>}
     * @memberof slaFields
     */
    business_unit: $$rhino.Nilable<$$property.generic.Element<("Operations" | "Sales")>>;

    /**
     * Calendar
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_calendarFields, sys_calendarGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_calendar (Calendar)
     */
    calendar: $$rhino.Nilable<$$property.generic.Reference<sys_calendarFields, sys_calendarGlideRecord>>;

    /**
     * Change procedures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    change_procedures: $$rhino.Nilable<$$property.Element>;

    /**
     * Consultant user
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    consultant_user: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof slaFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof slaFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Disaster recovery
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    disaster_recovery: $$rhino.Nilable<$$property.Element>;

    /**
     * Ends
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    ends: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Functional area
     * @type {$$rhino.Nilable<$$property.generic.Element<("Data Management" | "Network" | "Security")>>}
     * @memberof slaFields
     */
    functional_area: $$rhino.Nilable<$$property.generic.Element<("Data Management" | "Network" | "Security")>>;

    /**
     * Incident procedures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    incident_procedures: $$rhino.Nilable<$$property.Element>;

    /**
     * Informed user
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    informed_user: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Maintenance
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_calendarFields, sys_calendarGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_calendar (Calendar)
     */
    maintenance: $$rhino.Nilable<$$property.generic.Reference<sys_calendarFields, sys_calendarGlideRecord>>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Next review
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof slaFields
     * @description Internal type is "glide_date"
     */
    next_review: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    number: $$rhino.Nilable<$$property.Element>;

    /**
     * Reponsibilities
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    reponsibilities: $$rhino.Nilable<$$property.Element>;

    /**
     * Response time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    response_time: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Responsible user
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    responsible_user: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Security notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    security_notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Service goals
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    service_goals: $$rhino.Nilable<$$property.Element>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Signatures
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof slaFields
     * @description Internal type is "html"
     */
    signatures: $$rhino.Nilable<$$property.Element>;

    /**
     * Technical lead
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user (User)
     */
    technical_lead: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Transaction load
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof slaFields
     * @description Internal type is "decimal"
     */
    transaction_load: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Users
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof slaFields
     * @description Refers to sys_user_group (Group)
     */
    users: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;
}
declare type slaGlideRecord = GlideRecord & slaFields;

/**
 * GlideElement values from the Task table.
 * @interface taskFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface taskFields extends IExtendedGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Activity due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "due_date"
     */
    activity_due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Additional assignee list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    additional_assignee_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Approval
     * @type {$$rhino.Nilable<$$property.generic.Element<TaskAppproval>>}
     * @memberof taskFields
     */
    approval: $$rhino.Nilable<$$property.generic.Element<TaskAppproval>>;

    /**
     * Approval history
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal"
     */
    approval_history: $$rhino.Nilable<IGlideElement>;

    /**
     * Approval set
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    approval_set: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Assignment group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof taskFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Business duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "glide_duration"
     */
    business_duration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Business service
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>>}
     * @memberof taskFields
     * @description Refers to cmdb_ci_service (Business Service)
     */
    business_service: $$rhino.Nilable<$$property.generic.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>>;

    /**
     * Duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "glide_duration"
     */
    calendar_duration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Closed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    closed_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Closed by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    closed_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Close notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    close_notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Configuration item
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>}
     * @memberof taskFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    cmdb_ci: $$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>;

    /**
     * Additional comments
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_input"
     */
    comments: $$rhino.Nilable<IGlideElement>;

    /**
     * Comments and Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_list"
     */
    comments_and_work_notes: $$rhino.Nilable<IGlideElement>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof taskFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Contact type
     * @type {$$rhino.Nilable<$$property.generic.Element<TaskContactType>>}
     * @memberof taskFields
     */
    contact_type: $$rhino.Nilable<$$property.generic.Element<TaskContactType>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Correlation display
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    correlation_display: $$rhino.Nilable<$$property.Element>;

    /**
     * Correlation ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    correlation_id: $$rhino.Nilable<$$property.Element>;

    /**
     * delivery_plan
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to sc_cat_item_delivery_plan (Execution Plan)
     */
    delivery_plan: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Delivery task
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to sc_cat_item_delivery_task (Execution Plan Task)
     */
    delivery_task: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Due date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    due_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Escalation
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    escalation: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Expected start
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    expected_start: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Follow up
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    follow_up: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Group list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    group_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Impact
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    impact: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Knowledge
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    knowledge: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof taskFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Made SLA
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof taskFields
     */
    made_sla: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    number: $$rhino.Nilable<$$property.Element>;

    /**
     * Opened
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    opened_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Opened by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof taskFields
     * @description Refers to sys_user (User)
     */
    opened_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<taskFields, taskGlideRecord>>}
     * @memberof taskFields
     * @description Refers to task (Task)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<taskFields, taskGlideRecord>>;

    /**
     * Priority
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    priority: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Reassignment count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    reassignment_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Rejection goto
     * @type {$$rhino.Nilable<$$property.generic.Reference<taskFields, taskGlideRecord>>}
     * @memberof taskFields
     * @description Refers to task (Task)
     */
    rejection_goto: $$rhino.Nilable<$$property.generic.Reference<taskFields, taskGlideRecord>>;

    /**
     * Service offering
     * @type {$$rhino.Nilable<$$property.generic.Reference<service_offeringFields, service_offeringGlideRecord>>}
     * @memberof taskFields
     * @description Refers to service_offering (Service Offering)
     */
    service_offering: $$rhino.Nilable<$$property.generic.Reference<service_offeringFields, service_offeringGlideRecord>>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Skills
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    skills: $$rhino.Nilable<IGlideElement>;

    /**
     * SLA due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "due_date"
     */
    sla_due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof taskFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Time worked
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     * @description Internal type is "timer"
     */
    time_worked: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Upon approval
     * @type {$$rhino.Nilable<$$property.generic.Element<("proceed" | "do_nothing")>>}
     * @memberof taskFields
     * @description "proceed"="Proceed to Next Task"; "do_nothing"="Wait for a User to Close this task"
     */
    upon_approval: $$rhino.Nilable<$$property.generic.Element<("proceed" | "do_nothing")>>;

    /**
     * Upon reject
     * @type {$$rhino.Nilable<$$property.generic.Element<("cancel" | "goto")>>}
     * @memberof taskFields
     * @description "cancel"="Cancel all future Tasks"; "goto"="Go to a previous Task"
     */
    upon_reject: $$rhino.Nilable<$$property.generic.Element<("cancel" | "goto")>>;

    /**
     * Urgency
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof taskFields
     */
    urgency: $$rhino.Nilable<$$property.Numeric>;

    /**
     * User input
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "user_input"
     */
    user_input: $$rhino.Nilable<IGlideElement>;

    /**
     * Variables
     * @type {$$rhino.Nilable<$$property.Variables>}
     * @memberof taskFields
     */
    variables: $$rhino.Nilable<$$property.Variables>;

    /**
     * Watch list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    watch_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Workflow activity
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof taskFields
     * @description Refers to wf_activity (Workflow Activity)
     */
    wf_activity: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Actual end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    work_end: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "journal_input"
     */
    work_notes: $$rhino.Nilable<IGlideElement | $$rhino.String>;

    /**
     * Work notes list
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof taskFields
     * @description Internal type is "glide_list"
     */
    work_notes_list: $$rhino.Nilable<IGlideElement>;

    /**
     * Actual start
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    work_start: $$rhino.Nilable<$$property.GlideObject>;
}
declare type taskGlideRecord = GlideRecord & taskFields;

/**
 * GlideElement values from the Incident table.
 * @interface incidentFields
 * @extends {taskFields}
 */
declare interface incidentFields extends taskFields {
    /**
     * Business resolve time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    business_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Resolve time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Caller
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    caller_id: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Caused by Change
     * @type {$$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to change_request (Change Request)
     */
    caused_by: $$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>;

    /**
     * Child Incidents
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    child_incidents: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    close_code: $$rhino.Nilable<$$property.Element>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    hold_reason: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Incident state
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    incident_state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Notify
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    notify: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent Incident
     * @type {$$rhino.Nilable<$$property.generic.Reference<incidentFields, incidentGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to incident (Incident)
     */
    parent_incident: $$rhino.Nilable<$$property.generic.Reference<incidentFields, incidentGlideRecord>>;

    /**
     * Problem
     * @type {$$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to problem (Problem)
     */
    problem_id: $$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>;

    /**
     * Last reopened by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    reopened_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Last reopened at
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof incidentFields
     */
    reopened_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Reopen count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    reopen_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Resolved
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof incidentFields
     */
    resolved_at: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Resolved by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to sys_user (User)
     */
    resolved_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Change Request
     * @type {$$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to change_request (Change Request)
     */
    rfc: $$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>;

    /**
     * Severity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof incidentFields
     */
    severity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof incidentFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;

    /**
     * Is Mission Related
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof incidentFields
     */
    u_is_mission_related: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Network
     * @type {$$rhino.Nilable<$$property.generic.Reference<x_44813_phys_net_networkFields, x_44813_phys_net_networkGlideRecord>>}
     * @memberof incidentFields
     * @description Refers to x_44813_phys_net_network (Physical Network)
     */
    u_network: $$rhino.Nilable<$$property.generic.Reference<x_44813_phys_net_networkFields, x_44813_phys_net_networkGlideRecord>>;

    /**
     * VIP Priority
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof incidentFields
     */
    u_vip_priority: $$rhino.Nilable<$$property.Boolean>;
}
declare type incidentGlideRecord = taskGlideRecord & incidentFields;

/**
 * GlideElement values from the Change Request table.
 * @interface change_requestFields
 * @extends {taskFields}
 */
declare interface change_requestFields extends taskFields {
    /**
     * Backout plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    backout_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    cab_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * CAB delegate
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    cab_delegate: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * CAB recommendation
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    cab_recommendation: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB required
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    cab_required: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Change plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    change_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     * @description Internal type is "table_name"
     */
    ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>}
     * @memberof change_requestFields
     */
    close_code: $$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>;

    /**
     * Conflict last run
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    conflict_last_run: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Conflict status
     * @type {$$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>}
     * @memberof change_requestFields
     */
    conflict_status: $$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Implementation plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    implementation_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * On Hold Change Tasks
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "glide_list"
     */
    on_hold_task: $$rhino.Nilable<IGlideElement>;

    /**
     * Outside maintenance schedule
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    outside_maintenance_schedule: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Phase
     * @type {$$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>}
     * @memberof change_requestFields
     */
    phase: $$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>;

    /**
     * Phase state
     * @type {$$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>}
     * @memberof change_requestFields
     */
    phase_state: $$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>;

    /**
     * Production system
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    production_system: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Proposed change
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "template_value"
     */
    proposed_change: $$rhino.Nilable<IGlideElement>;

    /**
     * Reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Requested by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    requested_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Requested by date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    requested_by_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    review_comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Review date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    review_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review status
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    review_status: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk and impact analysis
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    risk_impact_analysis: $$rhino.Nilable<$$property.Element>;

    /**
     * Risk value
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk_value: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    scope: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Standard Change Template version
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof change_requestFields
     * @description Refers to std_change_producer_version (Standard Change Template Version)
     */
    std_change_producer_version: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Test plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    test_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type change_requestGlideRecord = taskGlideRecord & change_requestFields;

/**
 * GlideElement values from the Change Task table.
 * @interface change_taskFields
 * @extends {taskFields}
 */
declare interface change_taskFields extends taskFields {
    /**
     * Change request
     * @type {$$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>}
     * @memberof change_taskFields
     * @description Refers to change_request (Change Request)
     */
    change_request: $$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>}
     * @memberof change_taskFields
     */
    change_task_type: $$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    close_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Created from
     * @type {$$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>}
     * @memberof change_taskFields
     * @description "workflow"=""; "manual"=""
     */
    created_from: $$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_taskFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_start_date: $$rhino.Nilable<$$property.GlideObject>;
}
declare type change_taskGlideRecord = taskGlideRecord & change_taskFields;
/**
 * GlideElement values from the Problem table.
 * @interface problemFields
 * @extends {taskFields}
 */
declare interface problemFields extends taskFields {
    /**
     * Known error
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof problemFields
     */
    known_error: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Major problem
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof problemFields
     */
    major_problem: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Problem state
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof problemFields
     */
    problem_state: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Related Incidents
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof problemFields
     */
    related_incidents: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Review outcome
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof problemFields
     */
    review_outcome: $$rhino.Nilable<$$property.Element>;

    /**
     * Change request
     * @type {$$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>}
     * @memberof problemFields
     * @description Refers to change_request (Change Request)
     */
    rfc: $$rhino.Nilable<$$property.generic.Reference<change_requestFields, change_requestGlideRecord>>;

    /**
     * Workaround
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof problemFields
     * @description Internal type is "journal_input"
     */
    work_around: $$rhino.Nilable<IGlideElement>;
}
declare type problemGlideRecord = taskGlideRecord & problemFields;

/**
 * GlideElement values from the Problem Task table.
 * @interface problem_taskFields
 * @extends {taskFields}
 */
declare interface problem_taskFields extends taskFields {
    /**
     * Problem
     * @type {$$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>}
     * @memberof problem_taskFields
     * @description Refers to problem (Problem)
     */
    problem: $$rhino.Nilable<$$property.generic.Reference<problemFields, problemGlideRecord>>;
}
declare type problem_taskGlideRecord = taskGlideRecord & problem_taskFields;

/**
 * GlideElement values from the User table.
 * @interface sys_userFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_userFields extends IGlideTableProperties {
    /**
     * Accumulated roles
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    accumulated_roles: $$rhino.Nilable<$$property.Element>;

    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Work agent status
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "choice"
     */
    agent_status: $$rhino.Nilable<IGlideElement>;

    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "decimal"
     */
    average_daily_fte: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Building
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_buildingFields, cmn_buildingGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_building (Building)
     */
    building: $$rhino.Nilable<$$property.generic.Reference<cmn_buildingFields, cmn_buildingGlideRecord>>;

    /**
     * Business impact
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    business_criticality: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Calendar integration
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    calendar_integration: $$rhino.Nilable<$$property.Numeric>;

    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Country code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Date format
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    date_format: $$rhino.Nilable<$$property.Element>;

    /**
     * Default perspective
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to sys_perspective (Menu List)
     */
    default_perspective: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * EDU Status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    edu_status: $$rhino.Nilable<$$property.Element>;

    /**
     * Email
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "email"
     */
    email: $$rhino.Nilable<$$property.Element>;

    /**
     * Employee number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    employee_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Enable Multifactor Authentication
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    enable_multifactor_authn: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Failed login attempts
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    failed_attempts: $$rhino.Nilable<$$property.Numeric>;

    /**
     * First name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    first_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Gender
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    gender: $$rhino.Nilable<$$property.Element>;

    /**
     * Geolocation tracked
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    geolocation_tracked: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Home phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    home_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Internal Integration User
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    internal_integration_user: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Prefix
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    introduction: $$rhino.Nilable<$$property.Element>;

    /**
     * Last login
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     * @description Internal type is "glide_date"
     */
    last_login: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Last login device
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_login_device: $$rhino.Nilable<$$property.Element>;

    /**
     * Last login time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     */
    last_login_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Last name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Last password
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    last_password: $$rhino.Nilable<$$property.Element>;

    /**
     * Last position update
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_userFields
     */
    last_position_update: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * LDAP server
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to ldap_server_config (LDAP server)
     */
    ldap_server: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Locked out
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    locked_out: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Manager
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Middle name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    middle_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Mobile phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    mobile_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notification
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_userFields
     */
    notification: $$rhino.Nilable<$$property.Numeric>;

    /**
     * On schedule
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "choice"
     */
    on_schedule: $$rhino.Nilable<IGlideElement>;

    /**
     * Password needs reset
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    password_needs_reset: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Black phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "ph_number"
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Photo
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sys_userFields
     */
    photo: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Language
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    preferred_language: $$rhino.Nilable<$$property.Element>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Schedule
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: $$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>;

    /**
     * Source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_userFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof sys_userFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof sys_userFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Time format
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    time_format: $$rhino.Nilable<$$property.Element>;

    /**
     * Time sheet policy
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_userFields
     * @description Refers to time_sheet_policy (Time Sheet Policy)
     */
    time_sheet_policy: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    title: $$rhino.Nilable<$$property.Element>;

    /**
     * User ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    user_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Password
     * @type {$$rhino.Nilable<$$property.Password>}
     * @memberof sys_userFields
     */
    user_password: $$rhino.Nilable<$$property.Password>;

    /**
     * Grey Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_grey_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Rank
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_rank: $$rhino.Nilable<$$property.Element>;

    /**
     * Red Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    u_red_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * VIP
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    vip: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Web service access only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_userFields
     */
    web_service_access_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Zip / Postal code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_userFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type sys_userGlideRecord = GlideRecord & sys_userFields;

/**
 * GlideElement values from the Group table.
 * @interface sys_user_groupFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_user_groupFields extends IGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Average Daily FTE Hours/Hours Per Person Day
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_user_groupFields
     * @description Internal type is "decimal"
     */
    average_daily_fte: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sys_user_groupFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Default assignee
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user (User)
     */
    default_assignee: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Group email
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     * @description Internal type is "email"
     */
    email: $$rhino.Nilable<$$property.Element>;

    /**
     * Exclude manager
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    exclude_manager: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Hourly rate
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sys_user_groupFields
     */
    hourly_rate: $$rhino.Nilable<$$property.Currency>;

    /**
     * Include members
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_user_groupFields
     */
    include_members: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Manager
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof sys_user_groupFields
     * @description Refers to sys_user_group (Group)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Points
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_user_groupFields
     */
    points: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_user_groupFields
     */
    source: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "glide_list"
     */
    type: $$rhino.Nilable<IGlideElement>;

    /**
     * Vendors
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_user_groupFields
     * @description Internal type is "glide_list"
     */
    vendors: $$rhino.Nilable<IGlideElement>;
}
declare type sys_user_groupGlideRecord = GlideRecord & sys_user_groupFields;

/**
 * GlideElement values from the Schedule table.
 * @interface cmn_scheduleFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_scheduleFields extends IGlideTableProperties {
    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Document
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    document: $$rhino.Nilable<$$property.Element>;

    /**
     * Document key
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    document_key: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>}
     * @memberof cmn_scheduleFields
     * @description Refers to cmn_schedule (Schedule)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>;

    /**
     * Read only
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmn_scheduleFields
     */
    read_only: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_scheduleFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_scheduleGlideRecord = GlideRecord & cmn_scheduleFields;

/**
 * GlideElement values from the Location table.
 * @interface cmn_locationFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_locationFields extends IGlideTableProperties {
    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmn_locationFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Contact
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmn_locationFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Country
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Fax phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    fax_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Full name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    full_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_locationFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Lat long error
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    lat_long_error: $$rhino.Nilable<$$property.Element>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_locationFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof cmn_locationFields
     * @description Refers to cmn_location (Location)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Phone territory
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmn_locationFields
     * @description Refers to sys_phone_territory (Sys Phone Territory)
     */
    phone_territory: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock room
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmn_locationFields
     */
    stock_room: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof cmn_locationFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Time zone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    time_zone: $$rhino.Nilable<$$property.Element>;

    /**
     * Zip / Postal Code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_locationFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_locationGlideRecord = GlideRecord & cmn_locationFields;

/**
 * GlideElement values from the Department table.
 * @interface cmn_departmentFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_departmentFields extends IGlideTableProperties {
    /**
     * Business unit
     * @type {$$rhino.Nilable<$$property.generic.Reference<business_unitFields, business_unitGlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to business_unit (Business Unit)
     */
    business_unit: $$rhino.Nilable<$$property.generic.Reference<business_unitFields, business_unitGlideRecord>>;

    /**
     * Code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    code: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Department head
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to sys_user (User)
     */
    dept_head: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Head count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_departmentFields
     */
    head_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    id: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_departmentFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to cmn_department (Department)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * Primary contact
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmn_departmentFields
     * @description Refers to sys_user (User)
     */
    primary_contact: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;
}
declare type cmn_departmentGlideRecord = GlideRecord & cmn_departmentFields;

/**
 * GlideElement values from the Company table.
 * @interface core_companyFields
 * @extends {IGlideTableProperties}
 */
declare interface core_companyFields extends IGlideTableProperties {
    /**
     * Apple icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    apple_icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Banner image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    banner_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * UI16 Banner Image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof core_companyFields
     */
    banner_image_light: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Banner text
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    banner_text: $$rhino.Nilable<$$property.Element>;

    /**
     * City
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    city: $$rhino.Nilable<$$property.Element>;

    /**
     * Contact
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof core_companyFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Country
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    country: $$rhino.Nilable<$$property.Element>;

    /**
     * Customer
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    customer: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Discount
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "decimal"
     */
    discount: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Fax phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     * @description Internal type is "ph_number"
     */
    fax_phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Fiscal year
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof core_companyFields
     * @description Internal type is "glide_date"
     */
    fiscal_year: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Latitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "float"
     */
    latitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Lat long error
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    lat_long_error: $$rhino.Nilable<$$property.Element>;

    /**
     * Longitude
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     * @description Internal type is "float"
     */
    longitude: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    manufacturer: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Market cap
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    market_cap: $$rhino.Nilable<$$property.Currency>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    notes: $$rhino.Nilable<$$property.Element>;

    /**
     * Number of employees
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof core_companyFields
     */
    num_employees: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof core_companyFields
     * @description Refers to core_company (Company)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Phone
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     * @description Internal type is "ph_number"
     */
    phone: $$rhino.Nilable<$$property.Element>;

    /**
     * Primary
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    primary: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Profits
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    profits: $$rhino.Nilable<$$property.Currency>;

    /**
     * Publicly traded
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    publicly_traded: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Rank tier
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    rank_tier: $$rhino.Nilable<$$property.Element>;

    /**
     * Revenue per year
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof core_companyFields
     */
    revenue_per_year: $$rhino.Nilable<$$property.Currency>;

    /**
     * State / Province
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock price
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    stock_price: $$rhino.Nilable<$$property.Element>;

    /**
     * Stock symbol
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    stock_symbol: $$rhino.Nilable<$$property.Element>;

    /**
     * Street
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "multi_two_lines"
     */
    street: $$rhino.Nilable<IGlideElement>;

    /**
     * Theme
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof core_companyFields
     * @description Refers to sys_ui_theme (Theme)
     */
    theme: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof core_companyFields
     */
    vendor: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor manager
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "glide_list"
     */
    vendor_manager: $$rhino.Nilable<IGlideElement>;

    /**
     * Vendor type
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof core_companyFields
     * @description Internal type is "glide_list"
     */
    vendor_type: $$rhino.Nilable<IGlideElement>;

    /**
     * Website
     * @type {$$rhino.Nilable<$$property.URL>}
     * @memberof core_companyFields
     */
    website: $$rhino.Nilable<$$property.URL>;

    /**
     * Zip / Postal code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof core_companyFields
     */
    zip: $$rhino.Nilable<$$property.Element>;
}
declare type core_companyGlideRecord = GlideRecord & core_companyFields;

/**
 * GlideElement values from the Building table.
 * @interface cmn_buildingFields
 * @extends {IGlideTableProperties}
 */
declare interface cmn_buildingFields extends IGlideTableProperties {
    /**
     * Contact
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmn_buildingFields
     * @description Refers to sys_user (User)
     */
    contact: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Floors
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmn_buildingFields
     */
    floors: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof cmn_buildingFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_buildingFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Notes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmn_buildingFields
     */
    notes: $$rhino.Nilable<$$property.Element>;
}
declare type cmn_buildingGlideRecord = GlideRecord & cmn_buildingFields;

/**
 * GlideElement values from the Business Unit table.
 * @interface business_unitFields
 * @extends {IGlideTableProperties}
 */
declare interface business_unitFields extends IGlideTableProperties {
    /**
     * Business Unit Head
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof business_unitFields
     * @description Refers to sys_user (User)
     */
    bu_head: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof business_unitFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     * @description Internal type is "wide_text"
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Hierarchy level
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof business_unitFields
     */
    hierarchy_level: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<business_unitFields, business_unitGlideRecord>>}
     * @memberof business_unitFields
     * @description Refers to business_unit (Business Unit)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<business_unitFields, business_unitGlideRecord>>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof business_unitFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof business_unitFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;
}
declare type business_unitGlideRecord = GlideRecord & business_unitFields;

/**
 * GlideElement values from the GlideRecord that contains values from a record in the Progress Worker table.
 * @interface sys_progress_workerFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_progress_workerFields extends IGlideTableProperties {
    /**
     * Error message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    error_message: $$rhino.Nilable<$$property.Element>;

    /**
     * Message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    message: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Output summary
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    output_summary: $$rhino.Nilable<$$property.Element>;

    /**
     * Queued Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    queued_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Run in background
     * @type {$$rhino.Nilable<$$property.generic.Element<("true" | "false")>>}
     * @memberof sys_progress_workerFields
     */
    run_in_background: $$rhino.Nilable<$$property.generic.Element<("true" | "false")>>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Completion code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Total Execute Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_execute_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Total Run Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_run_time: $$rhino.Nilable<$$property.GlideObject>;
}
declare type sys_progress_workerGlideRecord = GlideRecord & sys_progress_workerFields;

/**
 * GlideElement values from the Attachment table.
 * @interface sys_attachmentFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_attachmentFields extends IGlideTableProperties {
    /**
     * Average image color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_attachmentFields
     * @description Internal type is "color"
     */
    average_image_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Chunk size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    chunk_size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Compressed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_attachmentFields
     */
    compressed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Content type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    content_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     * @memberof sys_attachmentFields
     * @description Refers to sys_encryption_context (Encryption Context)
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;

    /**
     * File name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    file_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Image height
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_height: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Image width
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_width: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size compressed
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_compressed: $$rhino.Nilable<$$property.Numeric>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>}
     * @memberof sys_attachmentFields
     */
    state: $$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>;

    /**
     * Table name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    table_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Table sys ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     * @description Internal type is "char"
     */
    table_sys_id: $$rhino.Nilable<$$property.Element>;
}
declare type sys_attachmentGlideRecord = GlideRecord & sys_attachmentFields;

/**
 * GlideElement values from the GlideRecord that contains values from a record in the System Plugin table.
 * @interface v_pluginFields
 * @extends {IGlideTableProperties}
 */
declare interface v_pluginFields extends IGlideTableProperties {
    /**
     * Status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    active: $$rhino.Nilable<$$property.Element>;

    /**
     * Available version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    available_version: $$rhino.Nilable<$$property.Element>;

    /**
     * Definition
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    definition: $$rhino.Nilable<$$property.Element>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Entitled
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    entitled: $$rhino.Nilable<$$property.Element>;

    /**
     * Has demo data
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    has_demo_data: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Help
     * @type {$$rhino.Nilable<$$property.URL>}
     * @memberof v_pluginFields
     */
    help: $$rhino.Nilable<$$property.URL>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    id: $$rhino.Nilable<$$property.Element>;

    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_category: $$rhino.Nilable<$$property.Element>;

    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    path: $$rhino.Nilable<$$property.Element>;

    /**
     * Provider
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    provider: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof v_pluginFields
     * @description Internal type is "glide_list"
     */
    requires: $$rhino.Nilable<IGlideElement>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    scope: $$rhino.Nilable<$$property.Element>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Supports Rollback
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    supports_rollback: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    type: $$rhino.Nilable<$$property.Element>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type v_pluginGlideRecord = GlideRecord & v_pluginFields;
declare interface change_request_imacFields extends change_requestFields {
    /**
     * Move department
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * Move from
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_from: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Move from dc
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_from_dc: $$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>;

    /**
     * Move to
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_to: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Move to dc
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_to_dc: $$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>;

    /**
     * Move user
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof change_request_imacFields
     */
    move_user: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Network component
     * @type {$$property.Boolean}
     * @memberof change_request_imacFields
     */
    network_component: $$property.Boolean;
}
declare type change_request_imacGlideRecord = change_requestGlideRecord & change_request_imacFields;

declare interface incident_taskFields extends taskFields {
    /**
     * Incident
     * @type {$$rhino.Nilable<$$property.generic.Reference<incidentFields, incidentGlideRecord>>}
     * @memberof incident_taskFields
     */
    incident: $$rhino.Nilable<$$property.generic.Reference<incidentFields, incidentGlideRecord>>;
}
declare type incident_taskGlideRecord = taskGlideRecord & incident_taskFields;

declare interface kb_knowledgeFields extends IExtendedGlideTableProperties {

}