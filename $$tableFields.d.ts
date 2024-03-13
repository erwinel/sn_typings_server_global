/// <reference path="./GlideTypes.d.ts" />
/// <reference path="./$$GlideRecord.d.ts" />
/// <reference path="./$$GlideElement.d.ts" />

declare namespace $$tableFields {
    export interface IBaseRecord {
        /**
         * "Sys ID" column element.
         * Type: "Sys ID (GUID)"
         * Primary: true; Max Length: 32.
         */
        sys_id: GlideElement;
        
        /**
         * "Created by" column element.
         * Maximum length: 40
         */
        sys_created_by: GlideElement;
        
        /**
         * "Created" column element.
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        sys_created_on: GlideElementGlideObject;
        
        /**
         * "Updates" column element.
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        sys_mod_count: GlideElement;
        
        /**
         * "Updated by" column element.
         * Maximum length: 40
         */
        sys_updated_by: GlideElement;
        
        /**
         * "Updated" column element.
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        sys_updated_on: GlideElementGlideObject;
    }

    /**
     * "Business Unit" glide record fields.
     * @see {@link $$GlideElement.business_unit}
     * @see {@link $$GlideRecord.business_unit}
     */
    export interface business_unit extends IBaseRecord {
        /**
         * "Business Unit Head" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        bu_head: $$GlideElement.sys_user;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Hierarchy level" element.
         */
        hierarchy_level: GlideElementNumeric;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.business_unit}
         */
        parent: $$GlideElement.business_unit;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * Task glide record fields.
     * @see {@link $$GlideElement.task}
     * @see {@link $$GlideRecord.task}
     */
    export interface task extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Activity due" element.
         * Type: "Due Date" (due_date); scalar type: datetime
         */
        activity_due: GlideElementGlideObject;
 
        /**
         * "Additional assignee list" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        additional_assignee_list: $$GlideElement.sys_user;
 
        /**
         * "Agile story" element.
         * @see {@link $$GlideRecord.rm_story}
         */
        agile_story: $$GlideElement.rm_story;
 
        /**
         * Approval element.
         */
        approval: GlideElement;
 
        /**
         * "Approval history" element.
         * Type: Journal (journal)
         */
        approval_history: GlideElementGlideObject;
 
        /**
         * "Approval set" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        approval_set: GlideElementGlideObject;
 
        /**
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * "Assignment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Business duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        business_duration: GlideElementGlideObject;
 
        /**
         * Service element.
         * @see {@link $$GlideRecord.cmdb_ci_service}
         */
        business_service: $$GlideElement.cmdb_ci_service;
 
        /**
         * Duration element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        calendar_duration: GlideElementGlideObject;
 
        /**
         * "Close notes" element.
         */
        close_notes: GlideElement;
 
        /**
         * Closed element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        closed_at: GlideElementGlideObject;
 
        /**
         * "Closed by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        closed_by: $$GlideElement.sys_user;
 
        /**
         * "Configuration item" element.
         * @see {@link $$GlideRecord.cmdb_ci}
         */
        cmdb_ci: $$GlideElement.cmdb_ci;
 
        /**
         * "Additional comments" element.
         * Type: "Journal Input" (journal_input)
         */
        comments: GlideElementGlideObject;
 
        /**
         * "Comments and Work notes" element.
         * Type: "Journal List" (journal_list)
         */
        comments_and_work_notes: GlideElementGlideObject;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * "Contact type" element.
         */
        contact_type: GlideElement;
 
        /**
         * Contract element.
         * @see {@link $$GlideRecord.ast_contract}
         */
        contract: $$GlideElement.ast_contract;
 
        /**
         * "Correlation display" element.
         */
        correlation_display: GlideElement;
 
        /**
         * "Correlation ID" element.
         */
        correlation_id: GlideElement;
 
        /**
         * "Delivery plan" element.
         * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;
 
        /**
         * "Delivery task" element.
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        delivery_task: $$GlideElement.sc_cat_item_delivery_task;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Due date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due_date: GlideElementGlideObject;
 
        /**
         * Escalation element.
         */
        escalation: GlideElementNumeric;
 
        /**
         * "Expected start" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        expected_start: GlideElementGlideObject;
 
        /**
         * "Follow up" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        follow_up: GlideElementGlideObject;
 
        /**
         * "Group list" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group_list: $$GlideElement.sys_user_group;
 
        /**
         * Impact element.
         */
        impact: GlideElementNumeric;
 
        /**
         * Knowledge element.
         */
        knowledge: GlideElementBoolean;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Made SLA" element.
         */
        made_sla: GlideElementBoolean;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * Opened element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        opened_at: GlideElementGlideObject;
 
        /**
         * "Opened by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        opened_by: $$GlideElement.sys_user;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.task}
         */
        parent: $$GlideElement.task;
 
        /**
         * Priority element.
         */
        priority: GlideElementNumeric;
 
        /**
         * "Reassignment count" element.
         */
        reassignment_count: GlideElementNumeric;
 
        /**
         * "Transfer reason" element.
         */
        route_reason: GlideElementNumeric;
 
        /**
         * "Service offering" element.
         * @see {@link $$GlideRecord.service_offering}
         */
        service_offering: $$GlideElement.service_offering;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * "SLA due" element.
         * Type: "Due Date" (due_date); scalar type: datetime
         */
        sla_due: GlideElementGlideObject;
 
        /**
         * State element.
         */
        state: GlideElementNumeric;
 
        /**
         * "Task type" element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Effective number" element.
         */
        task_effective_number: GlideElement;
 
        /**
         * "Time worked" element.
         * Type: Timer (timer); scalar type: datetime
         */
        time_worked: GlideElementGlideObject;
 
        /**
         * "Universal Request" element.
         * @see {@link $$GlideRecord.task}
         */
        universal_request: $$GlideElement.task;
 
        /**
         * "Upon approval" element.
         */
        upon_approval: GlideElement;
 
        /**
         * "Upon reject" element.
         */
        upon_reject: GlideElement;
 
        /**
         * Urgency element.
         */
        urgency: GlideElementNumeric;
 
        /**
         * "User input" element.
         * Type: "User Input" (user_input)
         */
        user_input: GlideElementGlideObject;
 
        /**
         * "Watch list" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        watch_list: $$GlideElement.sys_user;
 
        /**
         * "Actual end" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        work_end: GlideElementGlideObject;
 
        /**
         * "Work notes" element.
         * Type: "Journal Input" (journal_input)
         */
        work_notes: GlideElementGlideObject;
 
        /**
         * "Work notes list" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        work_notes_list: $$GlideElement.sys_user;
 
        /**
         * "Actual start" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        work_start: GlideElementGlideObject;
    }
 
    /**
     * "Application File" glide record fields.
     * @see {@link $$GlideElement.sys_metadata}
     * @see {@link $$GlideRecord.sys_metadata}
     */
    export interface sys_metadata extends IBaseRecord {
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * "Display name" element.
         */
        sys_name: GlideElement;
 
        /**
         * Package element.
         * @see {@link $$GlideRecord.sys_package}
         */
        sys_package: $$GlideElement.sys_package;
 
        /**
         * "Protection policy" element.
         */
        sys_policy: GlideElement;
 
        /**
         * Application element.
         * @see {@link $$GlideRecord.sys_scope}
         */
        sys_scope: $$GlideElement.sys_scope;
 
        /**
         * "Update name" element.
         */
        sys_update_name: GlideElement;
    }
 
    /**
     * Package glide record fields.
     * @see {@link $$GlideElement.sys_package}
     * @see {@link $$GlideRecord.sys_package}
     */
    export interface sys_package extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Subscription requirement" element.
         */
        enforce_license: GlideElement;
 
        /**
         * Licensable element.
         */
        licensable: GlideElementBoolean;
 
        /**
         * "Subscription Category" element.
         */
        license_category: GlideElement;
 
        /**
         * "Subscription Model" element.
         */
        license_model: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * ID element.
         */
        source: GlideElement;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Trackable element.
         */
        trackable: GlideElementBoolean;
 
        /**
         * Version element.
         */
        version: GlideElement;
    }
 
    /**
     * Application glide record fields.
     * @see {@link $$GlideElement.sys_scope}
     * @see {@link $$GlideRecord.sys_scope}
     */
    export interface sys_scope extends sys_package {
        /**
         * "Can Edit Application in Studio" element.
         */
        can_edit_in_studio: GlideElementBoolean;
 
        /**
         * "Guided Setup" element.
         * @see {@link $$GlideRecord.gsw_content}
         */
        guided_setup_guid: $$GlideElement.gsw_content;
 
        /**
         * "JavaScript Mode" element.
         */
        js_level: GlideElement;
 
        /**
         * Subscription element.
         * @see {@link $$GlideRecord.license_details}
         */
        license: $$GlideElement.license_details;
 
        /**
         * Logo element.
         */
        logo: GlideElementUserImage;
 
        /**
         * Private element.
         */
        private: GlideElementBoolean;
 
        /**
         * "Restrict Table Choices" element.
         */
        restrict_table_access: GlideElementBoolean;
 
        /**
         * "Restrict Runtime Access" element.
         */
        runtime_access_tracking: GlideElement;
 
        /**
         * Scope element.
         */
        scope: GlideElement;
 
        /**
         * "Application administration" element.
         */
        scoped_administration: GlideElementBoolean;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * Template element.
         */
        template: GlideElement;
 
        /**
         * Vendor element.
         */
        vendor: GlideElement;
 
        /**
         * "Vendor prefix" element.
         */
        vendor_prefix: GlideElement;
    }
 
    /**
     * "Guided Setup Content" glide record fields.
     * @see {@link $$GlideElement.gsw_content}
     * @see {@link $$GlideRecord.gsw_content}
     */
    export interface gsw_content extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Dependent on Contents" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.gsw_content}
         */
        dependent_on_contents: $$GlideElement.gsw_content;
 
        /**
         * "Dependent on Plugins" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.v_plugin}
         */
        dependent_on_plugins: $$GlideElement.v_plugin;
 
        /**
         * "Dependent on Plugins IDs" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.v_plugin}
         */
        dependent_on_plugins_ids: $$GlideElement.v_plugin;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedHTML;
 
        /**
         * "Implicit dependent on Contents" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.gsw_content}
         */
        implicit_dependent_on: $$GlideElement.gsw_content;
 
        /**
         * "Implicit plugin dependencies" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.gsw_content}
         */
        implicit_plugin_dependencies: $$GlideElement.gsw_content;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Parent Content" element.
         * @see {@link $$GlideRecord.gsw_content}
         */
        parent: $$GlideElement.gsw_content;
 
        /**
         * Parents element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.gsw_content}
         */
        parents: $$GlideElement.gsw_content;
 
        /**
         * "Root Parent Content" element.
         * @see {@link $$GlideRecord.gsw_content}
         */
        root_parent: $$GlideElement.gsw_content;
 
        /**
         * Skippable element.
         */
        skippable: GlideElementBoolean;
 
        /**
         * "Supports child content" element.
         */
        supports_child_content: GlideElementBoolean;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedText;
 
        /**
         * Weight element.
         */
        weight: GlideElementNumeric;
    }
 
    /**
     * Subscription glide record fields.
     * @see {@link $$GlideElement.license_details}
     * @see {@link $$GlideRecord.license_details}
     */
    export interface license_details extends IBaseRecord {
        /**
         * Allocated element.
         */
        allocated: GlideElement;
 
        /**
         * "Allocated Status" element.
         */
        allocated_status: GlideElement;
 
        /**
         * "Auto-sync user sets" element.
         */
        auto_sync: GlideElementBoolean;
 
        /**
         * Category element.
         */
        category: GlideElementNumeric;
 
        /**
         * Purchased element.
         */
        count: GlideElement;
 
        /**
         * "Display only" element.
         */
        display_only: GlideElementBoolean;
 
        /**
         * "End date" element.
         * Type: Date (glide_date); scalar type: date
         */
        end_date: GlideElementGlideObject;
 
        /**
         * Status element.
         */
        expired: GlideElementBoolean;
 
        /**
         * "Limit to purchased" element.
         */
        is_capped: GlideElementBoolean;
 
        /**
         * "Last allocated count on" element.
         */
        last_allocation_cal_on: GlideElement;
 
        /**
         * "Last table used count on" element.
         */
        last_tables_used_cal_on: GlideElement;
 
        /**
         * "Subscription identifier" element.
         */
        license_id: GlideElement;
 
        /**
         * Type element.
         */
        license_type: GlideElementNumeric;
 
        /**
         * "License Weight" element.
         */
        license_weight: GlideElementNumeric;
 
        /**
         * "Measured role types" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.license_role_type}
         */
        measured_role_types: $$GlideElement.license_role_type;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Product Code(s)" element.
         */
        product_code: GlideElement;
 
        /**
         * "Cost type" element.
         */
        product_cost: GlideElementNumeric;
 
        /**
         * "Capacity Definition" element.
         * @see {@link $$GlideRecord.ua_defn_base}
         */
        quota_defn: $$GlideElement.ua_defn_base;
 
        /**
         * "Capacity Definition ID" element.
         */
        quota_defn_id: GlideElement;
 
        /**
         * "Capacity ID" element.
         */
        quota_id: GlideElement;
 
        /**
         * "Start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        start_date: GlideElementGlideObject;
 
        /**
         * "Tables included" element.
         */
        table_count: GlideElement;
 
        /**
         * "Tables used" element.
         */
        tables_used: GlideElement;
    }
 
    /**
     * "UsageAnalytics Definitions Base" glide record fields.
     * @see {@link $$GlideElement.ua_defn_base}
     * @see {@link $$GlideRecord.ua_defn_base}
     */
    export interface ua_defn_base extends IBaseRecord {
        /**
         * "Definition ID" element.
         */
        definition_id: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
    }
 
    /**
     * Asset glide record fields.
     * @see {@link $$GlideElement.alm_asset}
     * @see {@link $$GlideRecord.alm_asset}
     */
    export interface alm_asset extends IBaseRecord {
        /**
         * "Acquisition method" element.
         */
        acquisition_method: GlideElement;
 
        /**
         * "Active transfer order" element.
         */
        active_to: GlideElementBoolean;
 
        /**
         * "Asset function" element.
         */
        asset_function: GlideElement;
 
        /**
         * "Asset tag" element.
         */
        asset_tag: GlideElement;
 
        /**
         * Assigned element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        assigned: GlideElementGlideObject;
 
        /**
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * Beneficiary element.
         * @see {@link $$GlideRecord.core_company}
         */
        beneficiary: $$GlideElement.core_company;
 
        /**
         * "Checked in" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_in: GlideElementGlideObject;
 
        /**
         * "Checked out" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_out: GlideElementGlideObject;
 
        /**
         * "Configuration Item" element.
         * @see {@link $$GlideRecord.cmdb_ci}
         */
        ci: $$GlideElement.cmdb_ci;
 
        /**
         * Comments element.
         */
        comments: GlideElement;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Cost element.
         */
        cost: GlideElementCurrency;
 
        /**
         * "Cost center" element.
         * @see {@link $$GlideRecord.cmn_cost_center}
         */
        cost_center: $$GlideElement.cmn_cost_center;
 
        /**
         * "Order received" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        delivery_date: GlideElementGlideObject;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * "Depreciated amount" element.
         */
        depreciated_amount: GlideElementCurrency;
 
        /**
         * Depreciation element.
         * @see {@link $$GlideRecord.cmdb_depreciation}
         */
        depreciation: $$GlideElement.cmdb_depreciation;
 
        /**
         * "Depreciation effective date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        depreciation_date: GlideElementGlideObject;
 
        /**
         * "Display name" element.
         */
        display_name: GlideElement;
 
        /**
         * "Disposal reason" element.
         */
        disposal_reason: GlideElement;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * "Due in" element.
         */
        due_in: GlideElement;
 
        /**
         * "Expenditure type" element.
         */
        expenditure_type: GlideElement;
 
        /**
         * "GL account" element.
         */
        gl_account: GlideElement;
 
        /**
         * Installed element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        install_date: GlideElementGlideObject;
 
        /**
         * State element.
         */
        install_status: GlideElementNumeric;
 
        /**
         * "Invoice number" element.
         */
        invoice_number: GlideElement;
 
        /**
         * Justification element.
         */
        justification: GlideElement;
 
        /**
         * "Lease contract" element.
         */
        lease_id: GlideElement;
 
        /**
         * "Life Cycle Stage" element.
         * @see {@link $$GlideRecord.life_cycle_stage}
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
 
        /**
         * "Life Cycle Stage Status" element.
         * @see {@link $$GlideRecord.life_cycle_stage_status}
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Managed by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        managed_by: $$GlideElement.sys_user;
 
        /**
         * Model element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model: $$GlideElement.cmdb_model;
 
        /**
         * "Model category" element.
         * @see {@link $$GlideRecord.cmdb_model_category}
         */
        model_category: $$GlideElement.cmdb_model_category;
 
        /**
         * "Model component" element.
         * @see {@link $$GlideRecord.cmdb_m2m_model_component}
         */
        model_component: $$GlideElement.cmdb_m2m_model_component;
 
        /**
         * "Old status" element.
         */
        old_status: GlideElement;
 
        /**
         * "Old substatus" element.
         */
        old_substatus: GlideElement;
 
        /**
         * Ordered element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        order_date: GlideElementGlideObject;
 
        /**
         * "Owned by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owned_by: $$GlideElement.sys_user;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.alm_asset}
         */
        parent: $$GlideElement.alm_asset;
 
        /**
         * "PO number" element.
         */
        po_number: GlideElement;
 
        /**
         * "Pre-allocated" element.
         */
        pre_allocated: GlideElementBoolean;
 
        /**
         * Purchased element.
         * Type: Date (glide_date); scalar type: date
         */
        purchase_date: GlideElementGlideObject;
 
        /**
         * Quantity element.
         */
        quantity: GlideElementNumeric;
 
        /**
         * "Request line" element.
         * @see {@link $$GlideRecord.sc_req_item}
         */
        request_line: $$GlideElement.sc_req_item;
 
        /**
         * "Resale price" element.
         */
        resale_price: GlideElementPrice;
 
        /**
         * "Reserved for" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        reserved_for: $$GlideElement.sys_user;
 
        /**
         * "Residual value" element.
         */
        residual: GlideElementCurrency;
 
        /**
         * "Residual date" element.
         * Type: Date (glide_date); scalar type: date
         */
        residual_date: GlideElementGlideObject;
 
        /**
         * "Resold value" element.
         */
        resold_value: GlideElementCurrency;
 
        /**
         * "Retired date" element.
         * Type: Date (glide_date); scalar type: date
         */
        retired: GlideElementGlideObject;
 
        /**
         * "Scheduled retirement" element.
         * Type: Date (glide_date); scalar type: date
         */
        retirement_date: GlideElementGlideObject;
 
        /**
         * "Salvage value" element.
         */
        salvage_value: GlideElementCurrency;
 
        /**
         * "Serial number" element.
         */
        serial_number: GlideElement;
 
        /**
         * "Skip sync" element.
         */
        skip_sync: GlideElementBoolean;
 
        /**
         * Stockroom element.
         * @see {@link $$GlideRecord.alm_stockroom}
         */
        stockroom: $$GlideElement.alm_stockroom;
 
        /**
         * Substate element.
         */
        substatus: GlideElement;
 
        /**
         * "Support group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        support_group: $$GlideElement.sys_user_group;
 
        /**
         * "Supported by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        supported_by: $$GlideElement.sys_user;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Vendor element.
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
 
        /**
         * "Warranty expiration" element.
         * Type: Date (glide_date); scalar type: date
         */
        warranty_expiration: GlideElementGlideObject;
 
        /**
         * "Work notes" element.
         * Type: "Journal Input" (journal_input)
         */
        work_notes: GlideElementGlideObject;
    }
 
    /**
     * "Cost Center" glide record fields.
     * @see {@link $$GlideElement.cmn_cost_center}
     * @see {@link $$GlideRecord.cmn_cost_center}
     */
    export interface cmn_cost_center extends IBaseRecord {
        /**
         * "Account number" element.
         */
        account_number: GlideElement;
 
        /**
         * Code element.
         */
        code: GlideElement;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * Manager element.
         * @see {@link $$GlideRecord.sys_user}
         */
        manager: $$GlideElement.sys_user;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.cmn_cost_center}
         */
        parent: $$GlideElement.cmn_cost_center;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Valid from" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        valid_from: GlideElementGlideObject;
 
        /**
         * "Valid to" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        valid_to: GlideElementGlideObject;
    }

    /**
     * Depreciation glide record fields.
     * @see {@link $$GlideElement.cmdb_depreciation}
     * @see {@link $$GlideRecord.cmdb_depreciation}
     */
    export interface cmdb_depreciation extends IBaseRecord {
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Depreciation Time" element.
         */
        depreciation_time: GlideElementNumeric;
 
        /**
         * "Depreciation Unit" element.
         */
        depreciation_unit: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
    }
 
    /**
     * "Life Cycle Stage" glide record fields.
     * @see {@link $$GlideElement.life_cycle_stage}
     * @see {@link $$GlideRecord.life_cycle_stage}
     */
    export interface life_cycle_stage extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
    }
 
    /**
     * "Life Cycle Stage Status" glide record fields.
     * @see {@link $$GlideElement.life_cycle_stage_status}
     * @see {@link $$GlideRecord.life_cycle_stage_status}
     */
    export interface life_cycle_stage_status extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
    }
 
    /**
     * "Product Model" glide record fields.
     * @see {@link $$GlideElement.cmdb_model}
     * @see {@link $$GlideRecord.cmdb_model}
     */
    export interface cmdb_model extends IBaseRecord {
        /**
         * "Acquisition method" element.
         */
        acquisition_method: GlideElement;
 
        /**
         * "Asset tracking strategy" element.
         */
        asset_tracking_strategy: GlideElement;
 
        /**
         * "Asset tracking unit" element.
         * @see {@link $$GlideRecord.cmdb_model_unit}
         */
        asset_tracking_unit: $$GlideElement.cmdb_model_unit;
 
        /**
         * Barcode element.
         */
        barcode: GlideElement;
 
        /**
         * Bundle element.
         */
        bundle: GlideElementBoolean;
 
        /**
         * Certified element.
         */
        certified: GlideElementBoolean;
 
        /**
         * "CMDB CI class" element.
         */
        cmdb_ci_class: GlideElement;
 
        /**
         * "Model categories" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.cmdb_model_category}
         */
        cmdb_model_category: $$GlideElement.cmdb_model_category;
 
        /**
         * Comments element.
         */
        comments: GlideElement;
 
        /**
         * Cost element.
         */
        cost: GlideElementPrice;
 
        /**
         * Current element.
         */
        current: GlideElementNumeric;
 
        /**
         * "Current Unit" element.
         */
        current_unit: GlideElement;
 
        /**
         * Depreciation element.
         * @see {@link $$GlideRecord.cmdb_depreciation}
         */
        depreciation: $$GlideElement.cmdb_depreciation;
 
        /**
         * Depth element.
         */
        depth: GlideElementNumeric;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedHTML;
 
        /**
         * "Dimensions Unit" element.
         */
        dimensions_unit: GlideElement;
 
        /**
         * "Display name" element.
         */
        display_name: GlideElement;
 
        /**
         * "Energy Star" element.
         */
        energy_star: GlideElementBoolean;
 
        /**
         * "Energy use" element.
         */
        energy_use: GlideElement;
 
        /**
         * "Expected lifetime CO2e" element.
         */
        expected_lifetime_co2e: GlideElement;
 
        /**
         * "Expenditure type" element.
         */
        expenditure_type: GlideElement;
 
        /**
         * "Flow Rate (cfm)" element.
         */
        flow_rate: GlideElementNumeric;
 
        /**
         * "Full name" element.
         */
        full_name: GlideElement;
 
        /**
         * Height element.
         */
        height: GlideElementNumeric;
 
        /**
         * Length element.
         */
        length: GlideElementNumeric;
 
        /**
         * "Life Cycle Stage" element.
         * @see {@link $$GlideRecord.life_cycle_stage}
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
 
        /**
         * "Life Cycle Stage Status" element.
         * @see {@link $$GlideRecord.life_cycle_stage_status}
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
 
        /**
         * "Main component" element.
         * @see {@link $$GlideRecord.cmdb_m2m_model_component}
         */
        main_component: $$GlideElement.cmdb_m2m_model_component;
 
        /**
         * Manufacturer element.
         * @see {@link $$GlideRecord.core_company}
         */
        manufacturer: $$GlideElement.core_company;
 
        /**
         * "Model number" element.
         */
        model_number: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Owner element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owner: $$GlideElement.sys_user;
 
        /**
         * Picture element.
         */
        picture: GlideElementUserImage;
 
        /**
         * "Power (watts)" element.
         */
        power_consumption: GlideElementNumeric;
 
        /**
         * "Power unit" element.
         */
        power_unit: GlideElement;
 
        /**
         * "Product Catalog Item" element.
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        product_catalog_item: $$GlideElement.sc_cat_item;
 
        /**
         * "Height (U)" element.
         */
        rack_units: GlideElementNumeric;
 
        /**
         * "Rated Power" element.
         */
        rated_power: GlideElementNumeric;
 
        /**
         * "Salvage value" element.
         */
        salvage_value: GlideElementCurrency;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * SLA element.
         */
        sla: GlideElement;
 
        /**
         * "Sound Power (bels)" element.
         */
        sound_power: GlideElementNumeric;
 
        /**
         * Status element.
         */
        status: GlideElement;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "Unit of Measure System" element.
         */
        unit_of_measure_system: GlideElement;
 
        /**
         * Voltage element.
         */
        voltage: GlideElementNumeric;
 
        /**
         * "Voltage unit" element.
         */
        voltage_unit: GlideElement;
 
        /**
         * Volume element.
         */
        volume: GlideElementNumeric;
 
        /**
         * "Volume unit" element.
         */
        volume_unit: GlideElement;
 
        /**
         * "Weight (lbs)" element.
         */
        weight: GlideElementNumeric;
 
        /**
         * Weight element.
         */
        weight_decimal: GlideElementNumeric;
 
        /**
         * "Weight unit" element.
         */
        weight_unit: GlideElement;
 
        /**
         * Width element.
         */
        width: GlideElementNumeric;
    }
 
    /**
     * "Model Category" glide record fields.
     * @see {@link $$GlideElement.cmdb_model_category}
     * @see {@link $$GlideRecord.cmdb_model_category}
     */
    export interface cmdb_model_category extends IBaseRecord {
        /**
         * "Allow as main" element.
         */
        allow_as_master: GlideElementBoolean;
 
        /**
         * "Allow in bundle" element.
         */
        allow_in_bundle: GlideElementBoolean;
 
        /**
         * "Allow pre-allocation" element.
         */
        allow_pre_allocation: GlideElementBoolean;
 
        /**
         * "Asset class" element.
         */
        asset_class: GlideElement;
 
        /**
         * Bundle element.
         */
        bundle: GlideElementBoolean;
 
        /**
         * "CI class" element.
         */
        cmdb_ci_class: GlideElement;
 
        /**
         * "UNSPSC code" element.
         */
        code: GlideElement;
 
        /**
         * "Enforce CI verification" element.
         */
        enforce_verification: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Parent category" element.
         * @see {@link $$GlideRecord.cmdb_model_category}
         */
        parent_cateogry: $$GlideElement.cmdb_model_category;
 
        /**
         * "Picture or icon" element.
         */
        picture: GlideElementUserImage;
 
        /**
         * "Product model class" element.
         */
        product_model_class: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * "Base Configuration Item" glide record fields.
     * @see {@link $$GlideElement.cmdb}
     * @see {@link $$GlideRecord.cmdb}
     */
    export interface cmdb extends IBaseRecord {
        /**
         * Asset element.
         * @see {@link $$GlideRecord.alm_asset}
         */
        asset: $$GlideElement.alm_asset;
 
        /**
         * "Asset tag" element.
         */
        asset_tag: GlideElement;
 
        /**
         * Assigned element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        assigned: GlideElementGlideObject;
 
        /**
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * "Change Group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Checked in" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_in: GlideElementGlideObject;
 
        /**
         * "Checked out" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_out: GlideElementGlideObject;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Cost element.
         */
        cost: GlideElementNumeric;
 
        /**
         * "Cost currency" element.
         */
        cost_cc: GlideElement;
 
        /**
         * "Cost center" element.
         * @see {@link $$GlideRecord.cmn_cost_center}
         */
        cost_center: $$GlideElement.cmn_cost_center;
 
        /**
         * "Order received" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        delivery_date: GlideElementGlideObject;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * "Due in" element.
         */
        due_in: GlideElement;
 
        /**
         * "GL account" element.
         */
        gl_account: GlideElement;
 
        /**
         * Installed element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        install_date: GlideElementGlideObject;
 
        /**
         * "Install Status" element.
         */
        install_status: GlideElementNumeric;
 
        /**
         * "Invoice number" element.
         */
        invoice_number: GlideElement;
 
        /**
         * Justification element.
         */
        justification: GlideElement;
 
        /**
         * "Lease contract" element.
         */
        lease_id: GlideElement;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Managed by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        managed_by: $$GlideElement.sys_user;
 
        /**
         * Manufacturer element.
         * @see {@link $$GlideRecord.core_company}
         */
        manufacturer: $$GlideElement.core_company;
 
        /**
         * "Model ID" element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model_id: $$GlideElement.cmdb_model;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Ordered element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        order_date: GlideElementGlideObject;
 
        /**
         * "Owned by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owned_by: $$GlideElement.sys_user;
 
        /**
         * "PO number" element.
         */
        po_number: GlideElement;
 
        /**
         * Purchased element.
         * Type: Date (glide_date); scalar type: date
         */
        purchase_date: GlideElementGlideObject;
 
        /**
         * "Serial number" element.
         */
        serial_number: GlideElement;
 
        /**
         * "Skip sync" element.
         */
        skip_sync: GlideElementBoolean;
 
        /**
         * "Support group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        support_group: $$GlideElement.sys_user_group;
 
        /**
         * "Supported by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        supported_by: $$GlideElement.sys_user;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * "Sys class path" element.
         * Type: "System Class path" (sys_class_path)
         */
        sys_class_path: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Requires verification" element.
         */
        unverified: GlideElementBoolean;
 
        /**
         * Vendor element.
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
 
        /**
         * "Warranty expiration" element.
         * Type: Date (glide_date); scalar type: date
         */
        warranty_expiration: GlideElementGlideObject;
    }
 
    /**
     * "Configuration Item" glide record fields.
     * @see {@link $$GlideElement.cmdb_ci}
     * @see {@link $$GlideRecord.cmdb_ci}
     */
    export interface cmdb_ci extends cmdb {
        /**
         * Asset element.
         * @see {@link $$GlideRecord.alm_asset}
         */
        asset: $$GlideElement.alm_asset;
 
        /**
         * "Asset tag" element.
         */
        asset_tag: GlideElement;
 
        /**
         * Assigned element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        assigned: GlideElementGlideObject;
 
        /**
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * "Change Group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Attestation Score" element.
         */
        attestation_score: GlideElementNumeric;
 
        /**
         * "Attestation Status" element.
         */
        attestation_status: GlideElement;
 
        /**
         * Attested element.
         */
        attested: GlideElementBoolean;
 
        /**
         * "Attested By" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        attested_by: $$GlideElement.sys_user;
 
        /**
         * "Attested Date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        attested_date: GlideElementGlideObject;
 
        /**
         * Attributes element.
         */
        attributes: GlideElement;
 
        /**
         * "Business Unit" element.
         * @see {@link $$GlideRecord.business_unit}
         */
        business_unit: $$GlideElement.business_unit;
 
        /**
         * "Can Print" element.
         */
        can_print: GlideElementBoolean;
 
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Approval group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        change_control: $$GlideElement.sys_user_group;
 
        /**
         * "Checked in" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_in: GlideElementGlideObject;
 
        /**
         * "Checked out" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_out: GlideElementGlideObject;
 
        /**
         * "OT asset details" element.
         * @see {@link $$GlideRecord.cmdb_ot_entity}
         */
        cmdb_ot_entity: $$GlideElement.cmdb_ot_entity;
 
        /**
         * Comments element.
         */
        comments: GlideElement;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * "Correlation ID" element.
         */
        correlation_id: GlideElement;
 
        /**
         * Cost element.
         */
        cost: GlideElementNumeric;
 
        /**
         * "Cost currency" element.
         */
        cost_cc: GlideElement;
 
        /**
         * "Cost center" element.
         * @see {@link $$GlideRecord.cmn_cost_center}
         */
        cost_center: $$GlideElement.cmn_cost_center;
 
        /**
         * "Order received" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        delivery_date: GlideElementGlideObject;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * "Discovery source" element.
         */
        discovery_source: GlideElement;
 
        /**
         * "DNS Domain" element.
         */
        dns_domain: GlideElement;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * "Due in" element.
         */
        due_in: GlideElement;
 
        /**
         * "Duplicate Of" element.
         * @see {@link $$GlideRecord.cmdb_ci}
         */
        duplicate_of: $$GlideElement.cmdb_ci;
 
        /**
         * Environment element.
         */
        environment: GlideElement;
 
        /**
         * "Fault count" element.
         */
        fault_count: GlideElementNumeric;
 
        /**
         * "First discovered" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        first_discovered: GlideElementGlideObject;
 
        /**
         * "Fully qualified domain name" element.
         */
        fqdn: GlideElement;
 
        /**
         * "GL account" element.
         */
        gl_account: GlideElement;
 
        /**
         * Installed element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        install_date: GlideElementGlideObject;
 
        /**
         * "Install Status" element.
         */
        install_status: GlideElementNumeric;
 
        /**
         * "Invoice number" element.
         */
        invoice_number: GlideElement;
 
        /**
         * "IP Address" element.
         */
        ip_address: GlideElementIPAddress;
 
        /**
         * Justification element.
         */
        justification: GlideElement;
 
        /**
         * "Most recent discovery" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        last_discovered: GlideElementGlideObject;
 
        /**
         * "Lease contract" element.
         */
        lease_id: GlideElement;
 
        /**
         * "Life Cycle Stage" element.
         * @see {@link $$GlideRecord.life_cycle_stage}
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
 
        /**
         * "Life Cycle Stage Status" element.
         * @see {@link $$GlideRecord.life_cycle_stage_status}
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "MAC Address" element.
         */
        mac_address: GlideElement;
 
        /**
         * "Maintenance schedule" element.
         * @see {@link $$GlideRecord.cmn_schedule}
         */
        maintenance_schedule: $$GlideElement.cmn_schedule;
 
        /**
         * "Managed by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        managed_by: $$GlideElement.sys_user;
 
        /**
         * "Managed By Group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        managed_by_group: $$GlideElement.sys_user_group;
 
        /**
         * Manufacturer element.
         * @see {@link $$GlideRecord.core_company}
         */
        manufacturer: $$GlideElement.core_company;
 
        /**
         * "Model ID" element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model_id: $$GlideElement.cmdb_model;
 
        /**
         * "Model number" element.
         */
        model_number: GlideElement;
 
        /**
         * Monitor element.
         */
        monitor: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Operational status" element.
         */
        operational_status: GlideElementNumeric;
 
        /**
         * Ordered element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        order_date: GlideElementGlideObject;
 
        /**
         * "Owned by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owned_by: $$GlideElement.sys_user;
 
        /**
         * "PO number" element.
         */
        po_number: GlideElement;
 
        /**
         * Purchased element.
         * Type: Date (glide_date); scalar type: date
         */
        purchase_date: GlideElementGlideObject;
 
        /**
         * Schedule element.
         * @see {@link $$GlideRecord.cmn_schedule}
         */
        schedule: $$GlideElement.cmn_schedule;
 
        /**
         * "Serial number" element.
         */
        serial_number: GlideElement;
 
        /**
         * Description element.
         */
        short_description: GlideElement;
 
        /**
         * "Skip sync" element.
         */
        skip_sync: GlideElementBoolean;
 
        /**
         * "Start date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        start_date: GlideElementGlideObject;
 
        /**
         * Subcategory element.
         */
        subcategory: GlideElement;
 
        /**
         * "Support group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        support_group: $$GlideElement.sys_user_group;
 
        /**
         * "Supported by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        supported_by: $$GlideElement.sys_user;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * "Sys class path" element.
         * Type: "System Class path" (sys_class_path)
         */
        sys_class_path: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Requires verification" element.
         */
        unverified: GlideElementBoolean;
 
        /**
         * Vendor element.
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
 
        /**
         * "Warranty expiration" element.
         * Type: Date (glide_date); scalar type: date
         */
        warranty_expiration: GlideElementGlideObject;
    }
 
    /**
     * "Model Component" glide record fields.
     * @see {@link $$GlideElement.cmdb_m2m_model_component}
     * @see {@link $$GlideRecord.cmdb_m2m_model_component}
     */
    export interface cmdb_m2m_model_component extends IBaseRecord {
        /**
         * Component element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        child: $$GlideElement.cmdb_model;
 
        /**
         * "Component parameter" element.
         */
        component_parameter: GlideElement;
 
        /**
         * "Is main component" element.
         */
        master: GlideElementBoolean;
 
        /**
         * "Model category of component" element.
         * @see {@link $$GlideRecord.cmdb_model_category}
         */
        model_category: $$GlideElement.cmdb_model_category;
 
        /**
         * Bundle element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        parent: $$GlideElement.cmdb_model;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * Service glide record fields.
     * @see {@link $$GlideElement.cmdb_ci_service}
     * @see {@link $$GlideRecord.cmdb_ci_service}
     */
    export interface cmdb_ci_service extends cmdb_ci {
        /**
         * Aliases element.
         */
        aliases: GlideElement;
 
        /**
         * "Business Criticality" element.
         */
        busines_criticality: GlideElement;
 
        /**
         * "Business contact" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        business_contact: $$GlideElement.sys_user;
 
        /**
         * "Business need" element.
         */
        business_need: GlideElement;
 
        /**
         * "Business relation manager" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        business_relation_manager: $$GlideElement.sys_user;
 
        /**
         * Checkout element.
         */
        checkout: GlideElement;
 
        /**
         * "Compatibility dependencies" element.
         */
        compatibility_dependencies: GlideElement;
 
        /**
         * "Consumer type" element.
         */
        consumer_type: GlideElement;
 
        /**
         * "Delivery manager" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        delivery_manager: $$GlideElement.sys_user;
 
        /**
         * "End date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        end_date: GlideElementGlideObject;
 
        /**
         * "Last review date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        last_review_date: GlideElementGlideObject;
 
        /**
         * "Monitoring requirements" element.
         */
        monitoring_requirements: GlideElement;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.cmdb_ci_service}
         */
        parent: $$GlideElement.cmdb_ci_service;
 
        /**
         * Phase element.
         */
        portfolio_status: GlideElement;
 
        /**
         * Prerequisites element.
         */
        prerequisites: GlideElementTranslatedHTML;
 
        /**
         * "Price model" element.
         */
        price_model: GlideElement;
 
        /**
         * "Price unit" element.
         */
        price_unit: GlideElement;
 
        /**
         * "Published Item" element.
         * @see {@link $$GlideRecord.cmdb_ci_service}
         */
        published_ref: $$GlideElement.cmdb_ci_service;
 
        /**
         * "Service classification" element.
         */
        service_classification: GlideElement;
 
        /**
         * "Service level requirement" element.
         */
        service_level_requirement: GlideElementTranslatedHTML;
 
        /**
         * Delegate element.
         * @see {@link $$GlideRecord.sys_user}
         */
        service_owner_delegate: $$GlideElement.sys_user;
 
        /**
         * Status element.
         */
        service_status: GlideElement;
 
        /**
         * SLA element.
         * @see {@link $$GlideRecord.sla}
         */
        sla: $$GlideElement.sla;
 
        /**
         * "Service portfolio" element.
         * @see {@link $$GlideRecord.spm_service_portfolio}
         */
        spm_service_portfolio: $$GlideElement.spm_service_portfolio;
 
        /**
         * "Taxonomy node" element.
         * @see {@link $$GlideRecord.spm_taxonomy_node}
         */
        spm_taxonomy_node: $$GlideElement.spm_taxonomy_node;
 
        /**
         * Stakeholders element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        stakeholders: $$GlideElement.sys_user;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * "Total vulnerable items" element.
         */
        total_vulnerable_items: GlideElementNumeric;
 
        /**
         * "Unit description" element.
         * Type: HTML (html); Scalar length: undefined
         */
        unit_description: GlideElementGlideObject;
 
        /**
         * "Used for" element.
         */
        used_for: GlideElement;
 
        /**
         * "Users supported" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        user_group: $$GlideElement.sys_user_group;
 
        /**
         * Version element.
         */
        version: GlideElement;
 
        /**
         * "Vulnerability risk score" element.
         */
        vulnerability_risk_score: GlideElementNumeric;
    }

    /**
     * "Subscription Role Type" glide record fields.
     * @see {@link $$GlideElement.license_role_type}
     * @see {@link $$GlideRecord.license_role_type}
     */
    export interface license_role_type extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * ID element.
         */
        id: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
    }
 
    /**
     * "OT Asset" glide record fields.
     * @see {@link $$GlideElement.cmdb_ot_entity}
     * @see {@link $$GlideRecord.cmdb_ot_entity}
     */
    export interface cmdb_ot_entity extends IBaseRecord {
        /**
         * "Asset criticality" element.
         */
        business_criticality: GlideElement;
 
        /**
         * "OT asset" element.
         * @see {@link $$GlideRecord.cmdb_ci}
         */
        ot_asset: $$GlideElement.cmdb_ci;
 
        /**
         * "OT asset type" element.
         * @see {@link $$GlideRecord.cmdb_ot_entity_type}
         */
        ot_asset_type: $$GlideElement.cmdb_ot_entity_type;
 
        /**
         * "OT discovery source ID" element.
         */
        ot_correlation_id: GlideElement;
 
        /**
         * "OT discovery source name" element.
         */
        ot_discovery_source: GlideElement;
 
        /**
         * "Purdue level" element.
         */
        purdue_level: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Zone element.
         */
        zone: GlideElement;
    }
 
    /**
     * Contract glide record fields.
     * @see {@link $$GlideElement.ast_contract}
     * @see {@link $$GlideRecord.ast_contract}
     */
    export interface ast_contract extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Applicable taxes" element.
         */
        applicable_taxes: GlideElement;
 
        /**
         * "Application model" element.
         * @see {@link $$GlideRecord.cmdb_application_product_model}
         */
        application_model: $$GlideElement.cmdb_application_product_model;
 
        /**
         * "Approval History" element.
         * Type: Journal (journal)
         */
        approval_history: GlideElementGlideObject;
 
        /**
         * Approver element.
         * @see {@link $$GlideRecord.sys_user}
         */
        approver: $$GlideElement.sys_user;
 
        /**
         * "Business owner" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        business_owner: $$GlideElement.sys_user;
 
        /**
         * Commitment element.
         */
        commitment: GlideElementCurrency;
 
        /**
         * "Contract administrator" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        contract_administrator: $$GlideElement.sys_user;
 
        /**
         * "Contract model" element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        contract_model: $$GlideElement.cmdb_model;
 
        /**
         * "Cost adjustment amount" element.
         */
        cost_adjustment: GlideElementNumeric;
 
        /**
         * "Cost adjustment percentage" element.
         */
        cost_adjustment_percentage: GlideElementNumeric;
 
        /**
         * "Cost adjustment reason" element.
         */
        cost_adjustment_reason: GlideElement;
 
        /**
         * "Cost adjustment type" element.
         */
        cost_adjustment_type: GlideElement;
 
        /**
         * "Cost center" element.
         * @see {@link $$GlideRecord.cmn_cost_center}
         */
        cost_center: $$GlideElement.cmn_cost_center;
 
        /**
         * "Cost per unit" element.
         */
        cost_per_unit: GlideElementCurrency;
 
        /**
         * Covers element.
         */
        covers: GlideElement;
 
        /**
         * Customer element.
         * @see {@link $$GlideRecord.core_company}
         */
        customer: $$GlideElement.core_company;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Discount element.
         */
        discount: GlideElementNumeric;
 
        /**
         * "End date" element.
         * Type: Date (glide_date); scalar type: date
         */
        ends: GlideElementGlideObject;
 
        /**
         * Expiration element.
         * @see {@link $$GlideRecord.clm_condition_checker}
         */
        expiration: $$GlideElement.clm_condition_checker;
 
        /**
         * "Invoice payment terms" element.
         */
        invoice_payment_terms: GlideElement;
 
        /**
         * "License quantity entitled" element.
         */
        license_quantity_entitled: GlideElementNumeric;
 
        /**
         * "Agreement type" element.
         */
        license_type: GlideElement;
 
        /**
         * "Life Cycle Stage" element.
         * @see {@link $$GlideRecord.life_cycle_stage}
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
 
        /**
         * "Life Cycle Stage Status" element.
         * @see {@link $$GlideRecord.life_cycle_stage_status}
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
 
        /**
         * "Lifetime cost" element.
         */
        lifetime_cost: GlideElementCurrency;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Monthly cost" element.
         */
        monthly_cost: GlideElementCurrency;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * "Parent contract" element.
         * @see {@link $$GlideRecord.ast_contract}
         */
        parent_contract: $$GlideElement.ast_contract;
 
        /**
         * "Payment amount" element.
         */
        payment_amount: GlideElementCurrency;
 
        /**
         * "Payment schedule" element.
         */
        payment_schedule: GlideElement;
 
        /**
         * "PO Number" element.
         */
        po_number: GlideElement;
 
        /**
         * Process element.
         */
        process: GlideElement;
 
        /**
         * "Process non-contractual SLAs" element.
         */
        process_non_contractual_slas: GlideElementBoolean;
 
        /**
         * "Has rate card" element.
         */
        ratecard: GlideElementBoolean;
 
        /**
         * "Automatically renew" element.
         */
        renewable: GlideElementBoolean;
 
        /**
         * "Renewal/Extension contact" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        renewal_contact: $$GlideElement.sys_user;
 
        /**
         * "Renewal start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        renewal_date: GlideElementGlideObject;
 
        /**
         * "Renewal end date" element.
         * Type: Date (glide_date); scalar type: date
         */
        renewal_end_date: GlideElementGlideObject;
 
        /**
         * Options element.
         */
        renewal_options: GlideElement;
 
        /**
         * "Sales tax" element.
         */
        sales_tax: GlideElementBoolean;
 
        /**
         * Name element.
         */
        short_description: GlideElement;
 
        /**
         * "Start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        starts: GlideElementGlideObject;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * "Sub total cost" element.
         */
        sub_total_cost: GlideElementCurrency;
 
        /**
         * Substate element.
         */
        substate: GlideElement;
 
        /**
         * "Contract type" element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Tax cost" element.
         */
        tax_cost: GlideElementCurrency;
 
        /**
         * "Tax exempt" element.
         */
        tax_exempt: GlideElementBoolean;
 
        /**
         * "Effective tax rate" element.
         */
        tax_rate: GlideElementNumeric;
 
        /**
         * "Terms and conditions" element.
         */
        terms_and_conditions: GlideElementTranslatedHTML;
 
        /**
         * "Total cost" element.
         */
        total_cost: GlideElementCurrency;
 
        /**
         * Vendor element.
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
 
        /**
         * "Vendor account" element.
         */
        vendor_account: GlideElement;
 
        /**
         * "Contract number" element.
         */
        vendor_contract: GlideElement;
 
        /**
         * "Yearly cost" element.
         */
        yearly_cost: GlideElementCurrency;
    }
 
    /**
     * Offering glide record fields.
     * @see {@link $$GlideElement.service_offering}
     * @see {@link $$GlideRecord.service_offering}
     */
    export interface service_offering extends cmdb_ci_service {
        /**
         * Billing element.
         */
        billing: GlideElement;
 
        /**
         * Contract element.
         * @see {@link $$GlideRecord.ast_contract}
         */
        contract: $$GlideElement.ast_contract;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElement;
 
        /**
         * Price element.
         */
        price: GlideElementPrice;
 
        /**
         * "Technical contact" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        technical_contact: $$GlideElement.sys_user;
    }
 
    /**
     * Request glide record fields.
     * @see {@link $$GlideElement.sc_request}
     * @see {@link $$GlideRecord.sc_request}
     */
    export interface sc_request extends task {
        /**
         * "Resolve Time" element.
         */
        calendar_stc: GlideElementNumeric;
 
        /**
         * "Delivery address" element.
         */
        delivery_address: GlideElement;
 
        /**
         * "Parent interaction" element.
         * @see {@link $$GlideRecord.interaction}
         */
        parent_interaction: $$GlideElement.interaction;
 
        /**
         * Price element.
         */
        price: GlideElementCurrency;
 
        /**
         * "Request state" element.
         */
        request_state: GlideElement;
 
        /**
         * "Requested for date" element.
         * Type: Date (glide_date); scalar type: date
         */
        requested_date: GlideElementGlideObject;
 
        /**
         * "Requested for" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        requested_for: $$GlideElement.sys_user;
 
        /**
         * "Special instructions" element.
         */
        special_instructions: GlideElement;
 
        /**
         * Stage element.
         */
        stage: GlideElementWorkflow;
    }
 
    /**
     * "Requested Item" glide record fields.
     * @see {@link $$GlideElement.sc_req_item}
     * @see {@link $$GlideRecord.sc_req_item}
     */
    export interface sc_req_item extends task {
        /**
         * Backordered element.
         */
        backordered: GlideElementBoolean;
 
        /**
         * Billable element.
         */
        billable: GlideElementBoolean;
 
        /**
         * Item element.
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        cat_item: $$GlideElement.sc_cat_item;
 
        /**
         * "Configuration item" element.
         * @see {@link $$GlideRecord.cmdb_ci}
         */
        configuration_item: $$GlideElement.cmdb_ci;
 
        /**
         * Context element.
         * @see {@link $$GlideRecord.wf_context}
         */
        context: $$GlideElement.wf_context;
 
        /**
         * "Estimated delivery" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        estimated_delivery: GlideElementGlideObject;
 
        /**
         * "Flow Context" element.
         * @see {@link $$GlideRecord.sys_flow_context}
         */
        flow_context: $$GlideElement.sys_flow_context;
 
        /**
         * "Order Guide" element.
         * @see {@link $$GlideRecord.sc_cat_item_guide}
         */
        order_guide: $$GlideElement.sc_cat_item_guide;
 
        /**
         * Price element.
         */
        price: GlideElementCurrency;
 
        /**
         * Quantity element.
         */
        quantity: GlideElementNumeric;
 
        /**
         * "Recurring Price Frequency" element.
         */
        recurring_frequency: GlideElement;
 
        /**
         * "Recurring Price" element.
         */
        recurring_price: GlideElementPrice;
 
        /**
         * Request element.
         * @see {@link $$GlideRecord.sc_request}
         */
        request: $$GlideElement.sc_request;
 
        /**
         * "Requested for" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        requested_for: $$GlideElement.sys_user;
 
        /**
         * Catalog element.
         * @see {@link $$GlideRecord.sc_catalog}
         */
        sc_catalog: $$GlideElement.sc_catalog;
 
        /**
         * Stage element.
         */
        stage: GlideElementWorkflow;
    }
 
    /**
     * "Flow engine context" glide record fields.
     * @see {@link $$GlideElement.sys_flow_context}
     * @see {@link $$GlideRecord.sys_flow_context}
     */
    export interface sys_flow_context extends IBaseRecord {
        /**
         * Application element.
         */
        application: GlideElement;
 
        /**
         * Attributes element.
         */
        attributes: GlideElement;
 
        /**
         * "Calling Source" element.
         */
        calling_source: GlideElement;
 
        /**
         * "Claimed by" element.
         */
        claimed_by: GlideElement;
 
        /**
         * "Design Time Source" element.
         */
        design_source: GlideElement;
 
        /**
         * "Engine Version" element.
         */
        engine_version: GlideElementNumeric;
 
        /**
         * "Execution ID" element.
         */
        execution_id: GlideElement;
 
        /**
         * Flow element.
         */
        flow: GlideElement;
 
        /**
         * "Flow catalog model" element.
         * @see {@link $$GlideRecord.sys_flow_cat_variable_model}
         */
        flow_catalog_model: $$GlideElement.sys_flow_cat_variable_model;
 
        /**
         * "Is test run" element.
         */
        is_test_run: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Origins element.
         */
        origins: GlideElement;
 
        /**
         * Plan element.
         */
        plan: GlideElement;
 
        /**
         * Reporting element.
         */
        reporting: GlideElement;
 
        /**
         * Runtime element.
         */
        run_time: GlideElementNumeric;
 
        /**
         * "Skip Schedule Cleanup" element.
         */
        skip_schedule_cleanup: GlideElementBoolean;
 
        /**
         * Snapshot element.
         */
        snapshot: GlideElement;
 
        /**
         * "Source Record" element.
         */
        source_record: GlideElementDocumentId;
 
        /**
         * "Source Table" element.
         */
        source_table: GlideElement;
 
        /**
         * Stages element.
         * @see {@link $$GlideRecord.stage_state}
         */
        stages: $$GlideElement.stage_state;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Transaction element.
         */
        transaction: GlideElement;
    }

    /**
     * "OT Asset Type" glide record fields.
     * @see {@link $$GlideElement.cmdb_ot_entity_type}
     * @see {@link $$GlideRecord.cmdb_ot_entity_type}
     */
    export interface cmdb_ot_entity_type extends sys_metadata {
        /**
         * Label element.
         */
        label: GlideElementTranslatedText;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "OT table" element.
         */
        ot_table: GlideElement;
 
        /**
         * "Parent type" element.
         * @see {@link $$GlideRecord.cmdb_ot_entity_type}
         */
        parent_type: $$GlideElement.cmdb_ot_entity_type;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * Stockroom glide record fields.
     * @see {@link $$GlideElement.alm_stockroom}
     * @see {@link $$GlideRecord.alm_stockroom}
     */
    export interface alm_stockroom extends IBaseRecord {
        /**
         * "Assignment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * External element.
         */
        external: GlideElementBoolean;
 
        /**
         * Latitude element.
         */
        latitude: GlideElementNumeric;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * Longitude element.
         */
        longitude: GlideElementNumeric;
 
        /**
         * Manager element.
         * @see {@link $$GlideRecord.sys_user}
         */
        manager: $$GlideElement.sys_user;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Type element.
         * @see {@link $$GlideRecord.alm_stockroom_type}
         */
        type: $$GlideElement.alm_stockroom_type;
    }
 
    /**
     * Unit glide record fields.
     * @see {@link $$GlideElement.cmdb_model_unit}
     * @see {@link $$GlideRecord.cmdb_model_unit}
     */
    export interface cmdb_model_unit extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Code element.
         */
        code: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Unit element.
         */
        unit: GlideElement;
    }
    
    
    /**
     * "Vendor Catalog Item" glide record fields.
     * @see {@link $$GlideElement.pc_vendor_cat_item}
     * @see {@link $$GlideRecord.pc_vendor_cat_item}
     */
    export interface pc_vendor_cat_item extends sys_metadata {
        /**
         * "Active" column element.
         * Type: True/False (boolean).
         * Default Value: true
         */
        active: GlideElementBoolean;

        /**
         * "Description" column element.
         * Type: Translated HTML (translated_html).
         * Max Length: 8000
         */
        description: GlideElementTranslatedHTML;

        /**
         * "Features" column element.
         * Max Length: 4000
         */
        features: GlideElement;

        /**
         * "List Price" column element.
         * Type: Currency (currency).
         */
        list_price: GlideElementCurrency;

        /**
         * "Product Model" column element.
         * References: Product Model
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model: $$GlideElement.cmdb_model;

        /**
         * "Name" column element.
         * Max Length: 100; Mandatory: true
         */
        name: GlideElement;

        /**
         * "Out of Stock" column element.
         * Type: True/False (boolean).
         */
        out_of_stock: GlideElementBoolean;

        /**
         * "Picture" column element.
         * Type: Image (user_image).
         */
        picture: GlideElementUserImage;

        /**
         * "Vendor Price" column element.
         * Type: Currency (currency).
         */
        price: GlideElementCurrency;

        /**
         * "Product Catalog Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        product_catalog_item: $$GlideElement.sc_cat_item;

        /**
         * "Product ID" column element.
         * Max Length: 40; Mandatory: true
         */
        product_id: GlideElement;

        /**
         * "Short Description" column element.
         * Max Length: 100
         */
        short_description: GlideElement;

        /**
         * "Specifications" column element.
         * Max Length: 4000
         */
        specs: GlideElement;

        /**
         * "Domain" column element.
         * Type: Domain ID (domain_id).
         * Default Value: global
         */
        sys_domain: GlideElementDomainId;

        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255
         * Default Value: /
         */
        sys_domain_path: GlideElement;

        /**
         * "UPC" column element.
         * Max Length: 40
         */
        upc: GlideElement;

        /**
         * "Vendor" column element.
         * References: Company
         * Mandatory: true
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
    }
    
    /**
     * "Rule" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_guide_items}
     * @see {@link $$GlideRecord.sc_cat_item_guide_items}
     */
    export interface sc_cat_item_guide_items extends sys_metadata {
        /**
         * "If this condition is true" column element.
         * Type: "Variable Conditions" (variable_conditions).
         * Max Length: 4000
         */
        condition: GlideElement;

        /**
         * "Guide" column element.
         * References: Order guide
         * @see {@link $$GlideRecord.sc_cat_item_guide}
         */
        guide: $$GlideElement.sc_cat_item_guide;

        /**
         * "Ignore Mandatory Evaluation" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        ignore_mandatory_eval: GlideElementBoolean;

        /**
         * "Include this item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        item: $$GlideElement.sc_cat_item;

        /**
         * "At this position" column element.
         * Type: Integer (integer).
         */
        order: GlideElementNumeric;

        /**
         * "Quantity" column element.
         * Type: "Choice" (choice).
         * Max Length: 40
         * Default Value: 1
         */
        quantity: GlideElement;

        /**
         * "Requested by" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        requested_by: $$GlideElement.sys_user;

        /**
         * "Requested for" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        requested_for: $$GlideElement.sys_user;

        /**
         * "Show quantity" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        show_quantity: GlideElementBoolean;

        /**
         * "Use cart layout" column element.
         * Type: True/False (boolean).
         * Default Value: true
         */
        use_sc_layout: GlideElementBoolean;
    }

    /**
     * "Plan Sequencing" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_dt_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_dt_mtom}
     */
    export interface sc_cat_item_dt_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Execution Plan Task
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        dt_child: $$GlideElement.sc_cat_item_delivery_task;

        /**
         * "Parent Item" column element.
         * References: Execution Plan Task
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        dt_parent: $$GlideElement.sc_cat_item_delivery_task;
    }

    /**
     * "Not Available for Users" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_user_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_user_no_mtom}
     */
    export interface sc_cat_item_user_no_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        sc_avail_user: $$GlideElement.sys_user;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Not Available for Subscribers" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_subscribe_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_subscribe_no_mtom}
     */
    export interface sc_cat_item_subscribe_no_mtom extends sys_metadata {
        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Dependent Item" column element.
         * References: Offering
         * @see {@link $$GlideRecord.service_offering}
         */
        service_offering: $$GlideElement.service_offering;
    }

    /**
     * "Not Available for Groups" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_group_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_group_no_mtom}
     */
    export interface sc_cat_item_group_no_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Group
         * @see {@link $$GlideRecord.sys_user_group}
         */
        sc_avail_group: $$GlideElement.sys_user_group;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Not Available for Companies" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_company_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_company_no_mtom}
     */
    export interface sc_cat_item_company_no_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Company
         * @see {@link $$GlideRecord.core_company}
         */
        sc_avail_company: $$GlideElement.core_company;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Not Available at Locations" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_location_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_location_no_mtom}
     */
    export interface sc_cat_item_location_no_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Location
         * @see {@link $$GlideRecord.cmn_location}
         */
        sc_avail_location: $$GlideElement.cmn_location;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "External Dependencies" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_dt_ext_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_dt_ext_mtom}
     */
    export interface sc_cat_item_dt_ext_mtom extends sys_metadata {
        /**
         * "Waits on me" column element.
         * References: Execution Plan Task
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        dt_child: $$GlideElement.sc_cat_item_delivery_task;

        /**
         * "Waits for" column element.
         * References: Execution Plan Task
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        dt_parent: $$GlideElement.sc_cat_item_delivery_task;
    }

    /**
     * "Execution Plan Approval Task" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_dt_approval}
     * @see {@link $$GlideRecord.sc_cat_item_dt_approval}
     */
    export interface sc_cat_item_dt_approval extends sc_cat_item_delivery_task {
        /**
         * "Approval script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 4000
         */
        approval_script: GlideElementScript;

        /**
         * "Description" column element.
         * Max Length: 4000
         */
        description: GlideElement;

        /**
         * "Rejection goto" column element.
         * References: Execution Plan Task
         * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
         */
        rejection_goto: $$GlideElement.sc_cat_item_delivery_task;

        /**
         * "Upon approval" column element.
         * Max Length: 40
         * Default Value: proceed
         */
        upon_approval: GlideElement;

        /**
         * "Upon reject" column element.
         * Max Length: 40
         * Default Value: cancel
         */
        upon_reject: GlideElement;
    }

    /**
     * "Child" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_children}
     * @see {@link $$GlideRecord.sc_cat_item_children}
     */
    export interface sc_cat_item_children extends sys_metadata {
        /**
         * "Included by" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        child: $$GlideElement.sc_cat_item;

        /**
         * "Order" column element.
         * Type: Integer (integer).
         * Default Value: 100
         */
        order: GlideElementNumeric;

        /**
         * "Requested Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        parent: $$GlideElement.sc_cat_item;

        /**
         * "Quantity" column element.
         * Type: Integer (integer).
         * Default Value: 1
         */
        quantity: GlideElementNumeric;
    }

    /**
     * "Catalog Item Not Available for" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_user_criteria_no_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_user_criteria_no_mtom}
     */
    export interface sc_cat_item_user_criteria_no_mtom extends sys_metadata {
        /**
         * "Catalog Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Not Available for" column element.
         * References: User Criteria
         * @see {@link $$GlideRecord.user_criteria}
         */
        user_criteria: $$GlideElement.user_criteria;
    }

    /**
     * "Catalog Item Available for" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_user_criteria_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_user_criteria_mtom}
     */
    export interface sc_cat_item_user_criteria_mtom extends sys_metadata {
        /**
         * "Catalog Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Available for" column element.
         * References: User Criteria
         * @see {@link $$GlideRecord.user_criteria}
         */
        user_criteria: $$GlideElement.user_criteria;
    }

    /**
     * "Available for Users" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_user_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_user_mtom}
     */
    export interface sc_cat_item_user_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        sc_avail_user: $$GlideElement.sys_user;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Available for Subscribers" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_subscribe_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_subscribe_mtom}
     */
    export interface sc_cat_item_subscribe_mtom extends sys_metadata {
        /**
         * "Catalog Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Service Offering" column element.
         * References: Offering
         * @see {@link $$GlideRecord.service_offering}
         */
        service_offering: $$GlideElement.service_offering;
    }

    /**
     * "Available for Departments" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_dept_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_dept_mtom}
     */
    export interface sc_cat_item_dept_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Department
         * @see {@link $$GlideRecord.cmn_department}
         */
        sc_avail_dept: $$GlideElement.cmn_department;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item
    }

    /**
     * "Available for Companies" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_company_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_company_mtom}
     */
    export interface sc_cat_item_company_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Company
         * @see {@link $$GlideRecord.core_company}
         */
        sc_avail_company: $$GlideElement.core_company;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Available at Locations" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_location_mtom}
     * @see {@link $$GlideRecord.sc_cat_item_location_mtom}
     */
    export interface sc_cat_item_location_mtom extends sys_metadata {
        /**
         * "Dependent Item" column element.
         * References: Location
         * @see {@link $$GlideRecord.cmn_location}
         */
        sc_avail_location: $$GlideElement.cmn_location;

        /**
         * "Parent Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item}
     * @see {@link $$GlideRecord.sc_cat_item}
     */
    export interface sc_cat_item extends sys_metadata {
        /**
         * "Access Type" element.
         */
        access_type: GlideElement;
 
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Availability element.
         */
        availability: GlideElement;
 
        /**
         * Billable element.
         */
        billable: GlideElementBoolean;
 
        /**
         * Category element.
         * @see {@link $$GlideRecord.sc_category}
         */
        category: $$GlideElement.sc_category;
 
        /**
         * "Checked out" element.
         */
        checked_out: GlideElement;
 
        /**
         * Cost element.
         */
        cost: GlideElementNumeric;
 
        /**
         * Cart element.
         * @see {@link $$GlideRecord.sys_ui_macro}
         */
        custom_cart: $$GlideElement.sys_ui_macro;
 
        /**
         * "Execution Plan" element.
         * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;
 
        /**
         * "Delivery plan script" element.
         */
        delivery_plan_script: GlideElementScript;
 
        /**
         * "Delivery time" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        delivery_time: GlideElementGlideObject;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedHTML;
 
        /**
         * "Display price property" element.
         */
        display_price_property: GlideElement;
 
        /**
         * "Entitlement script" element.
         */
        entitlement_script: GlideElementScript;
 
        /**
         * Flow element.
         * @see {@link $$GlideRecord.sys_hub_flow}
         */
        flow_designer_flow: $$GlideElement.sys_hub_flow;
 
        /**
         * "Fulfillment automation level" element.
         */
        fulfillment_automation_level: GlideElement;
 
        /**
         * "Fulfillment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;
 
        /**
         * "Hide on Service Portal" element.
         */
        hide_sp: GlideElementBoolean;
 
        /**
         * Icon element.
         */
        icon: GlideElementUserImage;
 
        /**
         * "Ignore price" element.
         */
        ignore_price: GlideElementBoolean;
 
        /**
         * Image element.
         */
        image: GlideElement;
 
        /**
         * "List Price" element.
         */
        list_price: GlideElementCurrency;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Mandatory Attachment" element.
         */
        mandatory_attachment: GlideElementBoolean;
 
        /**
         * Meta element.
         */
        meta: GlideElement;
 
        /**
         * "Hide price (mobile listings)" element.
         */
        mobile_hide_price: GlideElementBoolean;
 
        /**
         * "Classic Mobile Picture" element.
         */
        mobile_picture: GlideElementUserImage;
 
        /**
         * "Classic Mobile Picture Type" element.
         */
        mobile_picture_type: GlideElement;
 
        /**
         * Model element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model: $$GlideElement.cmdb_model;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Hide Attachment" element.
         */
        no_attachment_v2: GlideElementBoolean;
 
        /**
         * "No cart" element.
         */
        no_cart: GlideElementBoolean;
 
        /**
         * "Hide 'Add to Cart'" element.
         */
        no_cart_v2: GlideElementBoolean;
 
        /**
         * "Hide Delivery time" element.
         */
        no_delivery_time_v2: GlideElementBoolean;
 
        /**
         * "No order" element.
         */
        no_order: GlideElementBoolean;
 
        /**
         * "No order now" element.
         */
        no_order_now: GlideElementBoolean;
 
        /**
         * "No proceed checkout" element.
         */
        no_proceed_checkout: GlideElementBoolean;
 
        /**
         * "No quantity" element.
         */
        no_quantity: GlideElementBoolean;
 
        /**
         * "Hide Quantity" element.
         */
        no_quantity_v2: GlideElementBoolean;
 
        /**
         * "No search" element.
         */
        no_search: GlideElementBoolean;
 
        /**
         * "Hide 'Add to Wish List'" element.
         */
        no_wishlist_v2: GlideElementBoolean;
 
        /**
         * "Omit price in cart" element.
         */
        omit_price: GlideElementBoolean;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Ordered item link" element.
         * @see {@link $$GlideRecord.sc_ordered_item_link}
         */
        ordered_item_link: $$GlideElement.sc_ordered_item_link;
 
        /**
         * Owner element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owner: $$GlideElement.sys_user;
 
        /**
         * Picture element.
         */
        picture: GlideElementUserImage;
 
        /**
         * "Preview link" element.
         * Type: "Catalog Preview" (catalog_preview)
         */
        preview: GlideElement;
 
        /**
         * Price element.
         */
        price: GlideElementPrice;
 
        /**
         * "Published item" element.
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        published_ref: $$GlideElement.sc_cat_item;
 
        /**
         * "Recurring Price Frequency" element.
         */
        recurring_frequency: GlideElement;
 
        /**
         * "Recurring price" element.
         */
        recurring_price: GlideElementPrice;
 
        /**
         * "Request method" element.
         */
        request_method: GlideElement;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * Catalogs element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sc_catalog}
         */
        sc_catalogs: $$GlideElement.sc_catalog;
 
        /**
         * "Created from item design" element.
         * @see {@link $$GlideRecord.sc_ic_item_staging}
         */
        sc_ic_item_staging: $$GlideElement.sc_ic_item_staging;
 
        /**
         * "Published version" element.
         */
        sc_ic_version: GlideElementNumeric;
 
        /**
         * "Associated template" element.
         * @see {@link $$GlideRecord.sc_template}
         */
        sc_template: $$GlideElement.sc_template;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * "Expand help for all questions" element.
         */
        show_variable_help_on_load: GlideElementBoolean;
 
        /**
         * "Start closed" element.
         */
        start_closed: GlideElementBoolean;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * "Taxonomy topic" element.
         * @see {@link $$GlideRecord.topic}
         */
        taxonomy_topic: $$GlideElement.topic;
 
        /**
         * Template element.
         * @see {@link $$GlideRecord.sys_template}
         */
        template: $$GlideElement.sys_template;
 
        /**
         * "Template Manager roles" element.
         */
        template_manager_roles: GlideElement;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "Use cart layout" element.
         */
        use_sc_layout: GlideElementBoolean;
 
        /**
         * Vendor element.
         * @see {@link $$GlideRecord.core_company}
         */
        vendor: $$GlideElement.core_company;
 
        /**
         * "Visible on Bundles" element.
         */
        visible_bundle: GlideElementBoolean;
 
        /**
         * "Visible on Guides" element.
         */
        visible_guide: GlideElementBoolean;
 
        /**
         * "Visible elsewhere" element.
         */
        visible_standalone: GlideElementBoolean;
 
        /**
         * Workflow element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        workflow: $$GlideElement.wf_workflow;
    }
    
    /**
     * "Product Catalog Item" GlideRecord fields.
     * @see {@link $$GlideRecord.pc_product_cat_item}
     * @see {@link $$GlideElement.pc_product_cat_item}
     */
    export interface pc_product_cat_item extends sc_cat_item {
        /**
         * "Auto Created" column element.
         * Type: True/False (boolean).
         */
        auto_created: GlideElementBoolean;

        /**
         * "Features" column element.
         * Max Length: 4000
         */
        features: GlideElement;

        /**
         * "Product ID" column element.
         * Max Length: 40
         */
        product_id: GlideElement;

        /**
         * "Specifications" column element.
         * Max Length: 4000
         */
        specs: GlideElement;

        /**
         * "UPC" column element.
         * Max Length: 40
         */
        upc: GlideElement;

        /**
         * "Vendor Catalog Item" column element.
         * References: Vendor Catalog Item
         * @see {@link $$GlideRecord.pc_vendor_cat_item}
         */
        vendor_catalog_item: $$GlideElement.pc_vendor_cat_item;
    }
    
    /**
     * "Software Catalog" GlideRecord fields.
     * @see {@link $$GlideRecord.pc_software_cat_item}
     * @see {@link $$GlideElement.pc_software_cat_item}
     */
    export interface pc_software_cat_item extends pc_product_cat_item { }
    
    /**
     * "Hardware Catalog" GlideRecord fields.
     * @see {@link $$GlideRecord.pc_hardware_cat_item}
     * @see {@link $$GlideElement.pc_hardware_cat_item}
     */
    export interface pc_hardware_cat_item extends pc_product_cat_item { }
    
    /**
     * "Record Producer" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_producer}
     * @see {@link $$GlideElement.sc_cat_item_producer}
     */
    export interface sc_cat_item_producer extends sc_cat_item {
        /**
         * "Allow edit" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        allow_edit: GlideElementBoolean;

        /**
         * "Can cancel" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        can_cancel: GlideElementBoolean;

        /**
         * "Post insert script" column element.
         * This script is executed after the record is generated.
         * `current` Is the GlideRecord produced by Record Producer. Use `current.update()` to update the record
         * To access the variables, use `producer.var1` where var1 is the name of the variable
         * To access the Record Producer use `cat_item`
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000
         */
        post_insert_script: GlideElementScript;

        /**
         * "Redirect to" column element.
         * Max Length: 40
         * Default Value: javascript: gs.getProperty('glide.sc.producer.redirect_url', 'generated_record')
         */
        redirect_url: GlideElement;

        /**
         * "Save options" column element.
         * Max Length: 40
         */
        save_options: GlideElement;

        /**
         * "Save script" column element.
         * This script is executed at every step save in Catalog Builder.
         * This script is executed before `Script` is executed.
         * `current` Is the GlideRecord produced by Record Producer.
         * To access the variables, use `producer.var1` where var1 is the name of the variable
         * To access the Record Producer use `cat_item`
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000
         */
        save_script: GlideElementScript;

        /**
         * "Script" column element.
         * This script is executed before the Record is generated
         * `current`- GlideRecord produced by Record Producer
         * Don't use `current.update()` or `current.insert()` as the record is generated by Record Producer
         * Don't use `current.setValue('sys_class_name', 'xxx')` as this will trigger reparent flow and can cause data loss
         * Avoid `current.setAbortAction()` and generate a separate record
         * Use `producer.var1` to access variables
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000
         */
        script: GlideElementScript;

        /**
         * "Table name" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80; Mandatory: true
         */
        table_name: GlideElement;

        /**
         * "View" column element.
         * Max Length: 40
         */
        view: GlideElement;
    }
    
    /**
     * "Service" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_producer_service}
     * @see {@link $$GlideElement.sc_cat_item_producer_service}
     */
    export interface sc_cat_item_producer_service extends sc_cat_item_producer {
        /**
         * "Fulfillment user" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        fulfillment_user: $$GlideElement.sys_user;

        /**
         * "Processing workflow" column element.
         * Max Length: 4000
         */
        processing_workflow: GlideElement;

        /**
         * "Submission message" column element.
         * Type: Translated Text (translated_text).
         * Max Length: 1000
         */
        submission_message: GlideElementTranslatedText;
    }
    
    /**
     * "Composite Record Producer" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_composite_producer}
     * @see {@link $$GlideElement.sc_cat_item_composite_producer}
     */
    export interface sc_cat_item_composite_producer extends sc_cat_item_producer { }
    
    /**
     * "Standard Change Template" GlideRecord fields.
     * @see {@link $$GlideRecord.std_change_record_producer}
     * @see {@link $$GlideElement.std_change_record_producer}
     */
    export interface std_change_record_producer extends sc_cat_item_producer {
        /**
         * "Available in 'Create New'" column element.
         * Type: True/False (boolean).
         * Default Value: true
         */
        available_in_ui: GlideElementBoolean;

        /**
         * "Closed Change count" column element.
         * Type: Integer (integer).
         * Default Value: 0
         */
        closed_change_count: GlideElementNumeric;

        /**
         * "Color" column element.
         * Type: "Color" (color).
         * Max Length: 40
         * Default Value: #cbcbcb
         */
        color: GlideElement;

        /**
         * "Current version" column element.
         * References: Standard Change Template Version
         * @see {@link $$GlideRecord.std_change_producer_version}
         */
        current_version: $$GlideElement.std_change_producer_version;

        /**
         * "Percent successful" column element.
         * Type: Floating Point Number (float).
         * Default Value: 0
         */
        percent_successful: GlideElementNumeric;

        /**
         * "Retired" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        retired: GlideElementBoolean;

        /**
         * "Unsuccessful Change count" column element.
         * Type: Integer (integer).
         * Default Value: 0
         */
        unsuccessful_change_count: GlideElementNumeric;
    }
     
    /**
     * "Content Item" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_content}
     * @see {@link $$GlideRecord.sc_cat_item_content}
     */
    export interface sc_cat_item_content extends sc_cat_item {
        /**
         * "Content type" column element.
         * Max Length: 40
         * Default Value: kb
         */
        content_type: GlideElement;

        /**
         * "KB article" column element.
         * References: Knowledge
         * @see {@link $$GlideRecord.kb_knowledge}
         */
        kb_article: $$GlideElement.kb_knowledge;

        /**
         * "Module" column element.
         * References: Module
         * @see {@link $$GlideRecord.sys_app_module}
         */
        module: $$GlideElement.sys_app_module;

        /**
         * "Target" column element.
         * Max Length: 40
         * Default Value: internal
         */
        target: GlideElement;

        /**
         * "URL" column element.
         * Max Length: 255
         */
        url: GlideElement;
    }

    /**
     * "Service Catalog Entry" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_service}
     * @see {@link $$GlideRecord.sc_cat_item_service}
     */
    export interface sc_cat_item_service extends sc_cat_item {
        /**
         * "Service" column element.
         * References: Service
         * @see {@link $$GlideRecord.cmdb_ci_service}
         */
        cmdb_ci_service: $$GlideElement.cmdb_ci_service;

        /**
         * "Number" column element.
         * Max Length: 40
         * Default Value: javascript:getNextObjNumber();
         */
        number: GlideElement;
    }

    /**
     * "Wizard Launcher" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_wizard}
     * @see {@link $$GlideRecord.sc_cat_item_wizard}
     */
    export interface sc_cat_item_wizard extends sc_cat_item {
        /**
         * "Wizard" column element.
         * References: Wizard
         * @see {@link $$GlideRecord.expert}
         */
        expert: $$GlideElement.expert;
    }

    /**
     * "Order guide" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_guide}
     * @see {@link $$GlideRecord.sc_cat_item_guide}
     */
    export interface sc_cat_item_guide extends sc_cat_item {
        /**
         * "Cascade Variables" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        cascade: GlideElementBoolean;

        /**
         * "Show Include Toggle" column element.
         * Type: True/False (boolean).
         * Default Value: true
         */
        include_items: GlideElementBoolean;

        /**
         * "Order to cart" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        order_to_cart: GlideElementBoolean;

        /**
         * "Script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000
         */
        script: GlideElementScript;

        /**
         * "Two step" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        two_step: GlideElementBoolean;

        /**
         * "Validator" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000
         */
        validator: GlideElementScript;
    }
 
    /**
     * "Execution Plan" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_delivery_plan}
     * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
     */
    export interface sc_cat_item_delivery_plan extends sys_metadata {
        /**
         * "Active" column element.
         * Type: True/False (boolean).
         * Default Value: true
         */
        active: GlideElementBoolean;

        /**
         * "Advanced" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        advanced: GlideElementBoolean;

        /**
         * "On Calendar" column element.
         * References: Calendar
         * @see {@link $$GlideRecord.sys_calendar}
         */
        calendar: $$GlideElement.sys_calendar;

        /**
         * "Conditions" column element.
         * Type: Conditions (conditions).
         */
        condition: GlideElementConditions;

        /**
         * "Name" column element.
         * Max Length: 100
         */
        name: GlideElement;

        /**
         * "Order" column element.
         * Type: Integer (integer).
         * Default Value: 100
         */
        order: GlideElementNumeric;

        /**
         * "Parent table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80
         * Default Value: sc_req_item
         */
        parent_table: GlideElement;

        /**
         * "Script" column element.
         * Max Length: 8000
         */
        script: GlideElement;

        /**
         * "Short description" column element.
         * Max Length: 120
         */
        short_description: GlideElement;

        /**
         * "Task table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80
         * Default Value: sc_task
         */
        task_table: GlideElement;

        /**
         * "Total delivery time" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        total_delivery_time: GlideElementGlideObject;
    }
 
    /**
     * "Execution Plan Task" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_delivery_task}
     * @see {@link $$GlideRecord.sc_cat_item_delivery_task}
     */
    export interface sc_cat_item_delivery_task extends sys_metadata {
        /**
         * "Assigned to" column element.
         * References: User
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;

        /**
         * "Condition" column element.
         * Type: Conditions (conditions).
         */
        condition: GlideElementConditions;

        /**
         * "Condition script" column element.
         * Type: Script (Plain) (script_plain).
         * Max Length: 4000
         */
        condition_script: GlideElementScript;

        /**
         * "Delivery plan" column element.
         * References: Execution Plan
         * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;

        /**
         * "Delivery time" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        delivery_time: GlideElementGlideObject;

        /**
         * "Generation script" column element.
         * Type: Script (Plain) (script_plain).
         * Max Length: 4000
         */
        generation_script: GlideElementScript;

        /**
         * "Fulfillment group" column element.
         * References: Group
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;

        /**
         * "Instructions" column element.
         * Max Length: 4000
         */
        instructions: GlideElement;

        /**
         * "Name" column element.
         * Max Length: 100
         */
        name: GlideElement;

        /**
         * "Order" column element.
         * Type: Decimal (decimal).
         * Default Value: 100
         */
        order: GlideElementNumeric;

        /**
         * "Short description" column element.
         * Max Length: 120
         */
        short_description: GlideElement;

        /**
         * "SLA" column element.
         * References: Service Level Agreement
         * @see {@link $$GlideRecord.sysrule_escalate}
         */
        sla: $$GlideElement.sysrule_escalate;

        /**
         * "Work notes" column element.
         * Max Length: 4000
         */
        work_notes: GlideElement;
    }
 
    /**
     * "Multi Row Question Answer" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_multi_row_question_answer}
     * @see {@link $$GlideElement.sc_multi_row_question_answer}
     */
    export interface sc_multi_row_question_answer extends IBaseRecord {
        /**
         * "Question" column element.
         * References: Variable
         * @see {@link $$GlideRecord.item_option_new}
         */
        item_option_new: $$GlideElement.item_option_new;

        /**
         * "Parent ID" column element.
         * Type: Document ID (document_id).
         */
        parent_id: GlideElementDocumentId;

        /**
         * "Parent table name" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80
         */
        parent_table_name: GlideElement;

        /**
         * "Question Answer" column element.
         * References: Question Answer
         * @see {@link $$GlideRecord.question_answer}
         */
        question_answer: $$GlideElement.question_answer;

        /**
         * "Row index" column element.
         * Type: "Long Integer String" (long).
         * Max Length: 40
         */
        row_index: GlideElement;

        /**
         * "SC Item Option" column element.
         * References: Options
         * @see {@link $$GlideRecord.sc_item_option}
         */
        sc_item_option: $$GlideElement.sc_item_option;

        /**
         * "Value" column element.
         * Max Length: 4000
         */
        value: GlideElement;

        /**
         * "Multi Row Set" column element.
         * References: Variable Set
         * @see {@link $$GlideRecord.item_option_new_set}
         */
        variable_set: $$GlideElement.item_option_new_set;
    }

    /**
     * "Options" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_item_option}
     * @see {@link $$GlideElement.sc_item_option}
     */
    export interface sc_item_option extends IBaseRecord {
        /**
         * "Question" column element.
         * References: Variable
         * @see {@link $$GlideRecord.item_option_new}
         */
        item_option_new: $$GlideElement.item_option_new;

        /**
         * "Parent ID" column element.
         * Type: Document ID (document_id).
         */
        parent_id: GlideElementDocumentId;

        /**
         * "Parent table name" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80
         */
        parent_table_name: GlideElement;

        /**
         * "Question Answer" column element.
         * References: Question Answer
         * @see {@link $$GlideRecord.question_answer}
         */
        question_answer: $$GlideElement.question_answer;

        /**
         * "Row index" column element.
         * Type: "Long Integer String" (long).
         * Max Length: 40
         */
        row_index: GlideElement;

        /**
         * "SC Item Option" column element.
         * References: Options
         * @see {@link $$GlideRecord.sc_item_option}
         */
        sc_item_option: $$GlideElement.sc_item_option;

        /**
         * "Value" column element.
         * Max Length: 4000
         */
        value: GlideElement;

        /**
         * "Multi Row Set" column element.
         * References: Variable Set
         * @see {@link $$GlideRecord.item_option_new_set}
         */
        variable_set: $$GlideElement.item_option_new_set;
    }
    
    /**
     * "Item Option" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_option}
     * @see {@link $$GlideElement.sc_cat_item_option}
     */
    export interface sc_cat_item_option extends sys_metadata {
        /**
         * "Cat item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Choice prices" column element.
         * Max Length: 200
         */
        choice_prices: GlideElement;

        /**
         * "Default value" column element.
         * Max Length: 512
         */
        default_value: GlideElement;

        /**
         * "Description" column element.
         * Type: HTML (html)
         * Max Length: 8000
         */
        description: GlideElementGlideObject;

        /**
         * "Mandatory" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        mandatory: GlideElementBoolean;

        /**
         * "Multiple choices" column element.
         * Max Length: 200
         */
        multiple_choices: GlideElement;

        /**
         * "Name or Question" column element.
         * Max Length: 100
         */
        name: GlideElement;

        /**
         * "Order" column element.
         * Type: Integer (integer).
         */
        order: GlideElementNumeric;

        /**
         * "Type" column element.
         * Max Length: 40
         * Default Value: short_text
         */
        type: GlideElement;
    }
    
    /**
     * "Catalog Variable Set" GlideRecord fields.
     * @see {@link $$GlideRecord.io_set_item}
     * @see {@link $$GlideElement.io_set_item}
     */
    export interface io_set_item extends sys_metadata {
        /**
         * "Order" column element.
         * Type: Integer (integer).
         */
        order: GlideElementNumeric;

        /**
         * "Catalog Item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;

        /**
         * "Variable set" column element.
         * References: Variable Set
         * @see {@link $$GlideRecord.item_option_new_set}
         */
        variable_set: $$GlideElement.item_option_new_set;
    }
    
    /**
     * "Catalog Items Catalog" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_catalog}
     * @see {@link $$GlideElement.sc_cat_item_catalog}
     */
    export interface sc_cat_item_catalog extends sys_metadata {
        /**
         * "Catalog" column element.
         * References: Catalog
         * @see {@link $$GlideRecord.sc_catalog}
         */
        sc_catalog: $$GlideElement.sc_catalog;

        /**
         * "Catalog item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }
    
    /**
     * "Catalog Item Category" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cat_item_category}
     * @see {@link $$GlideElement.sc_cat_item_category}
     */
    export interface sc_cat_item_category extends sys_metadata {
        /**
         * "Catalog category" column element.
         * References: Category
         * @see {@link $$GlideRecord.sc_category}
         */
        sc_category: $$GlideElement.sc_category;

        /**
         * "Catalog item" column element.
         * References: Catalog Item
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Planned Task" glide record fields.
     * @see {@link $$GlideElement.planned_task}
     * @see {@link $$GlideRecord.planned_task}
     */
    export interface planned_task extends task {
        /**
         * "Allow dates outside schedule" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        allow_dates_outside_schedule: GlideElementBoolean;

        /**
         * "Budget cost" column element.
         * Type: Currency (currency).
         */
        budget_cost: GlideElementCurrency;

        /**
         * "Calculation" column element.
         * Max Length: 40
         * Default Value: automatic
         */
        calculation_type: GlideElement;

        /**
         * "Planned capital" column element.
         * Type: Currency (currency).
         */
        capex_cost: GlideElementCurrency;

        /**
         * "Constraint date" column element.
         * Type: Date/Time (glide_date_time); scalar type: datetime
         */
        constraint_date: GlideElementGlideObject;

        /**
         * "Planned cost" column element.
         * Type: Currency (currency).
         */
        cost: GlideElementCurrency;

        /**
         * "Critical path" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        critical_path: GlideElementBoolean;

        /**
         * "Dependency" column element.
         * Type: decoration.
         * Max Length: 40; Read-Only: true
         */
        dependency: GlideElement;

        /**
         * "Planned duration" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         * Default Value: 01 00:00:00
         */
        duration: GlideElementGlideObject;

        /**
         * "Planned effort" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        effort: GlideElementGlideObject;

        /**
         * "end date" column element.
         * Type: Type: Date (glide_date); scalar type: date
         * Default Value: javascript:new GlideDate().getDisplayValue()
         */
        end: GlideElementGlideObject;

        /**
         * "Planned end date" column element.
         * Type: Date/Time (glide_date_time); scalar type: datetime
         * Default Value: javascript:new GlideDateTime().getDisplayValue()
         */
        end_date: GlideElementGlideObject;

        /**
         * "End date derived from" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        end_date_derived_from: $$GlideElement.planned_task;

        /**
         * "Has Issue" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         * Default Value: false
         */
        has_conflict: GlideElementBoolean;

        /**
         * "HTML description" column element.
         * Type: HTML (html)
         * Max Length: 8000
         */
        html_description: GlideElementGlideObject;

        /**
         * "Key milestone" column element.
         * Type: True/False (boolean).
         */
        key_milestone: GlideElementBoolean;

        /**
         * "Level" column element.
         * Type: Integer (integer).
         * Read-Only: true
         */
        level: GlideElementNumeric;

        /**
         * "Milestone" column element.
         * Type: True/False (boolean).
         */
        milestone: GlideElementBoolean;

        /**
         * "Model ID" column element.
         * References: Product Model
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model_id: $$GlideElement.cmdb_model;

        /**
         * "MPP task id" column element.
         * Type: Integer (integer).
         * Read-Only: true
         */
        mpp_task_id: GlideElementNumeric;

        /**
         * "Planned operating" column element.
         * Type: Currency (currency).
         */
        opex_cost: GlideElementCurrency;

        /**
         * "Orig sys ID" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        orig_sys_id: $$GlideElement.planned_task;

        /**
         * "Orig top task ID" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        orig_top_task_id: $$GlideElement.planned_task;

        /**
         * "Override status" column element.
         * Type: True/False (boolean).
         * Default Value: false
         */
        override_status: GlideElementBoolean;

        /**
         * "Percent complete" column element.
         * Type: Percent Complete (percent_complete).
         * Default Value: 0
         */
        percent_complete: GlideElementNumeric;

        /**
         * "Relation applied" column element.
         * References: Planned Task Relationship
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task_rel_planned_task}
         */
        relation_applied: $$GlideElement.planned_task_rel_planned_task;

        /**
         * "Remaining duration" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        remaining_duration: GlideElementGlideObject;

        /**
         * "Remaining effort" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        remaining_effort: GlideElementGlideObject;

        /**
         * "Rollup" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         */
        rollup: GlideElementBoolean;

        /**
         * "Run calculation brs" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         * Default Value: true
         */
        run_calc_brs: GlideElementBoolean;

        /**
         * "Original end date" column element.
         * Type: Date/Time (glide_date_time); scalar type: datetime
         * Read-Only: true
         * Default Value: javascript:new GlideDateTime().getDisplayValue()
         */
        schedule_end_date: GlideElementGlideObject;

        /**
         * "Original start date" column element.
         * Type: Date/Time (glide_date_time); scalar type: datetime
         * Read-Only: true
         * Default Value: javascript:new GlideDateTime().getDisplayValue()
         */
        schedule_start_date: GlideElementGlideObject;

        /**
         * "Shadow" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         * Default Value: false
         */
        shadow: GlideElementBoolean;

        /**
         * "Software Model" column element.
         * References: Software Model
         * @see {@link $$GlideRecord.cmdb_software_product_model}
         */
        software_model: $$GlideElement.cmdb_software_product_model;

        /**
         * "start date" column element.
         * Type: Type: Date (glide_date); scalar type: date
         * Default Value: javascript:new GlideDate().getDisplayValue()
         */
        start: GlideElementGlideObject;

        /**
         * "Planned start date" column element.
         * Type: Date/Time (glide_date_time); scalar type: datetime
         * Default Value: javascript:new GlideDateTime().getDisplayValue()
         */
        start_date: GlideElementGlideObject;

        /**
         * "Start date derived from" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        start_date_derived_from: $$GlideElement.planned_task;

        /**
         * "Status" column element.
         * Max Length: 40
         * Default Value: green
         */
        status: GlideElement;

        /**
         * "Sub tree root" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        sub_tree_root: $$GlideElement.planned_task;

        /**
         * "Task" column element.
         * Type: "Composite Field" (composite_field).
         * Max Length: 300
         */
        task: GlideElement;

        /**
         * "Time constraint" column element.
         * Max Length: 40
         * Default Value: asap
         */
        time_constraint: GlideElement;

        /**
         * "Time Zone" column element.
         * Max Length: 40; Read-Only: true
         */
        time_zone: GlideElement;

        /**
         * "Top task" column element.
         * References: Planned task
         * Read-Only: true
         * Default Value: javascript:if (current.parent) {current.parent.top_task} else {current.sys_id}
         * @see {@link $$GlideRecord.planned_task}
         */
        top_task: $$GlideElement.planned_task;

        /**
         * "Version" column element.
         * Type: Integer (integer).
         * Read-Only: true
         */
        version: GlideElementNumeric;

        /**
         * "WBS" column element.
         * Max Length: 80; Read-Only: true
         */
        wbs: GlideElement;

        /**
         * "WBS Order" column element.
         * Type: Integer (integer).
         */
        wbs_order: GlideElementNumeric;

        /**
         * "Actual cost" column element.
         * Type: Currency (currency).
         */
        work_cost: GlideElementCurrency;

        /**
         * "Actual duration" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        work_duration: GlideElementGlideObject;

        /**
         * "Actual effort" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         */
        work_effort: GlideElementGlideObject;
    }
 
    /**
     * "Task Relationship" glide record fields.
     * @see {@link $$GlideElement.task_rel_task}
     * @see {@link $$GlideRecord.task_rel_task}
     */
    export interface task_rel_task extends IBaseRecord {
        /**
         * "Child" column element.
         * References: Task
         * @see {@link $$GlideRecord.task}
         */
        child: $$GlideElement.task;

        /**
         * "Parent" column element.
         * References: Task
         * @see {@link $$GlideRecord.task}
         */
        parent: $$GlideElement.task;

        /**
         * "Type" column element.
         * References: Task Relationship Type
         * Default Value: T1
         * @see {@link $$GlideRecord.task_rel_type}
         */
        type: $$GlideElement.task_rel_type;
    }
 
    /**
     * "Planned Task Relationship" glide record fields.
     * @see {@link $$GlideElement.planned_task_rel_planned_task}
     * @see {@link $$GlideRecord.planned_task_rel_planned_task}
     */
    export interface planned_task_rel_planned_task extends task_rel_task {
        /**
         * "Child top task" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        child_top_task: $$GlideElement.planned_task;

        /**
         * "External Relation" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         */
        external: GlideElementBoolean;

        /**
         * "Inter Task Dependency Type" column element.
         * Max Length: 40
         * Default Value: soft
         */
        inter_task_dependency_type: GlideElement;

        /**
         * "Lag" column element.
         * Type: Type: Duration (glide_duration); scalar type: date
         * Default Value: 0 00:00:00
         */
        lag: GlideElementGlideObject;

        /**
         * "External Relation Id" column element.
         * References: Planned Task Relationship
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task_rel_planned_task}
         */
        orig_sys_id: $$GlideElement.planned_task_rel_planned_task;

        /**
         * "Parent top task" column element.
         * References: Planned task
         * Read-Only: true
         * @see {@link $$GlideRecord.planned_task}
         */
        parent_top_task: $$GlideElement.planned_task;

        /**
         * "Process Flag" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         */
        process_flag: GlideElementBoolean;

        /**
         * "Run calculation brs" column element.
         * Type: True/False (boolean).
         * Read-Only: true
         * Default Value: true
         */
        run_calc_brs: GlideElementBoolean;

        /**
         * "Sub Type" column element.
         * Max Length: 40
         * Default Value: fs
         */
        sub_type: GlideElement;

        /**
         * "Domain" column element.
         * Type: Domain ID (domain_id).
         * Default Value: global
         */
        sys_domain: GlideElementDomainId;
    }
 
    /**
     * Feature glide record fields.
     * @see {@link $$GlideElement.rm_feature}
     * @see {@link $$GlideRecord.rm_feature}
     */
    export interface rm_feature extends planned_task {
        /**
         * "Parent feature" element.
         * @see {@link $$GlideRecord.rm_feature}
         */
        parent_feature: $$GlideElement.rm_feature;
 
        /**
         * "Primary goal" element.
         * @see {@link $$GlideRecord.sn_gf_goal}
         */
        primary_goal: $$GlideElement.sn_gf_goal;
    }

    /**
     * Goal glide record fields.
     * @see {@link $$GlideElement.sn_gf_goal}
     * @see {@link $$GlideRecord.sn_gf_goal}
     */
    export interface sn_gf_goal extends sn_gf_core_goal {
        /**
         * "Business Unit" element.
         * @see {@link $$GlideRecord.business_unit}
         */
        business_unit: $$GlideElement.business_unit;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * "Strategic  priority" element.
         * @see {@link $$GlideRecord.sn_gf_strategy}
         */
        strategy: $$GlideElement.sn_gf_strategy;
 
        /**
         * Team element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        team: $$GlideElement.sys_user_group;
    }
 
    /**
     * Story glide record fields.
     * @see {@link $$GlideElement.rm_story}
     * @see {@link $$GlideRecord.rm_story}
     */
    export interface rm_story extends rm_feature {
        /**
         * "Acceptance criteria" element.
         * Type: HTML (html); Scalar length: undefined
         */
        acceptance_criteria: GlideElementGlideObject;
 
        /**
         * "Backlog definition" element.
         * @see {@link $$GlideRecord.backlog_definition}
         */
        backlog_definition: $$GlideElement.backlog_definition;
 
        /**
         * "Backlog Type" element.
         */
        backlog_type: GlideElement;
 
        /**
         * Blocked element.
         */
        blocked: GlideElementBoolean;
 
        /**
         * "Blocked reason" element.
         */
        blocked_reason: GlideElement;
 
        /**
         * Classification element.
         */
        classification: GlideElement;
 
        /**
         * Defect element.
         * @see {@link $$GlideRecord.rm_defect}
         */
        defect: $$GlideElement.rm_defect;
 
        /**
         * Enhancement element.
         * @see {@link $$GlideRecord.rm_enhancement}
         */
        enhancement: $$GlideElement.rm_enhancement;
 
        /**
         * Epic element.
         * @see {@link $$GlideRecord.rm_epic}
         */
        epic: $$GlideElement.rm_epic;
 
        /**
         * "Global rank" element.
         */
        global_rank: GlideElementNumeric;
 
        /**
         * "Group rank" element.
         */
        group_rank: GlideElementNumeric;
 
        /**
         * "Original task" element.
         * @see {@link $$GlideRecord.task}
         */
        original_task: $$GlideElement.task;
 
        /**
         * Product element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        product: $$GlideElement.cmdb_model;
 
        /**
         * "Product rank" element.
         */
        product_rank: GlideElementNumeric;
 
        /**
         * "Product Index" element.
         */
        product_rel_index: GlideElementNumeric;
 
        /**
         * Rank element.
         */
        rank: GlideElementNumeric;
 
        /**
         * Release element.
         * @see {@link $$GlideRecord.rm_release_scrum}
         */
        release: $$GlideElement.rm_release_scrum;
 
        /**
         * "Release Index" element.
         */
        release_index: GlideElementNumeric;
 
        /**
         * "Split from" element.
         * @see {@link $$GlideRecord.rm_story}
         */
        split_from: $$GlideElement.rm_story;
 
        /**
         * Sprint element.
         * @see {@link $$GlideRecord.rm_sprint}
         */
        sprint: $$GlideElement.rm_sprint;
 
        /**
         * "Sprint Index" element.
         */
        sprint_index: GlideElementNumeric;
 
        /**
         * Points element.
         */
        story_points: GlideElementNumeric;
 
        /**
         * Theme element.
         * @see {@link $$GlideRecord.scrum_theme}
         */
        theme: $$GlideElement.scrum_theme;
 
        /**
         * Type element.
         */
        type: GlideElement;
    }
 
    /**
     * Schedule glide record fields.
     * @see {@link $$GlideElement.cmn_schedule}
     * @see {@link $$GlideRecord.cmn_schedule}
     */
    export interface cmn_schedule extends business_calendar {
        /**
         * Document element.
         */
        document: GlideElement;
 
        /**
         * "Document key" element.
         */
        document_key: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Read only" element.
         */
        read_only: GlideElementBoolean;
 
        /**
         * Type element.
         */
        type: GlideElement;
    }
 
    /**
     * "Business Calendar" glide record fields.
     * @see {@link $$GlideElement.business_calendar}
     * @see {@link $$GlideRecord.business_calendar}
     */
    export interface business_calendar extends sys_metadata {
        /**
         * Name element.
         */
        calendar_name: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Is legacy schedule" element.
         */
        is_legacy_schedule: GlideElementBoolean;
 
        /**
         * Label element.
         */
        label: GlideElementTranslatedField;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.business_calendar}
         */
        parent: $$GlideElement.business_calendar;
 
        /**
         * "Plural label" element.
         */
        plural_label: GlideElementTranslatedField;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Time zone" element.
         */
        time_zone: GlideElement;
    }
 
    /**
     * "Business Calendar Entry" glide record fields.
     * @see {@link $$GlideElement.business_calendar_span}
     * @see {@link $$GlideRecord.business_calendar_span}
     */
    export interface business_calendar_span extends IBaseRecord {
        /**
         * Calendar element.
         * @see {@link $$GlideRecord.business_calendar}
         */
        calendar: $$GlideElement.business_calendar;
 
        /**
         * Counter element.
         */
        counter: GlideElementNumeric;
 
        /**
         * End element.
         * Type: "Calendar Date/Time" (calendar_date_time); scalar type: datetime
         */
        end: GlideElementGlideObject;
 
        /**
         * Index0 element.
         */
        index0: GlideElementNumeric;
 
        /**
         * Index1 element.
         */
        index1: GlideElementNumeric;
 
        /**
         * Index2 element.
         */
        index2: GlideElementNumeric;
 
        /**
         * Index3 element.
         */
        index3: GlideElementNumeric;
 
        /**
         * Index4 element.
         */
        index4: GlideElementNumeric;
 
        /**
         * Index5 element.
         */
        index5: GlideElementNumeric;
 
        /**
         * Index6 element.
         */
        index6: GlideElementNumeric;
 
        /**
         * Index7 element.
         */
        index7: GlideElementNumeric;
 
        /**
         * Index8 element.
         */
        index8: GlideElementNumeric;
 
        /**
         * Index9 element.
         */
        index9: GlideElementNumeric;
 
        /**
         * Name element.
         * @see {@link $$GlideRecord.business_calendar_span_name}
         */
        span_name: $$GlideElement.business_calendar_span_name;
 
        /**
         * Start element.
         * Type: "Calendar Date/Time" (calendar_date_time); scalar type: datetime
         */
        start: GlideElementGlideObject;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
    }
 
    /**
     * Agreement glide record fields.
     * @see {@link $$GlideElement.sla}
     * @see {@link $$GlideRecord.sla}
     */
    export interface sla extends IBaseRecord {
        /**
         * "Accountable user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        accountable_user: $$GlideElement.sys_user;
 
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Avail pct" element.
         */
        avail_pct: GlideElementNumeric;
 
        /**
         * Begins element.
         * Type: Date (glide_date); scalar type: date
         */
        begins: GlideElementGlideObject;
 
        /**
         * "Business lead" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        business_lead: $$GlideElement.sys_user;
 
        /**
         * "Business unit" element.
         */
        business_unit: GlideElement;
 
        /**
         * Calendar element.
         * @see {@link $$GlideRecord.sys_calendar}
         */
        calendar: $$GlideElement.sys_calendar;
 
        /**
         * "Change procedures" element.
         * Type: HTML (html); Scalar length: undefined
         */
        change_procedures: GlideElementGlideObject;
 
        /**
         * "Consultant user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        consultant_user: $$GlideElement.sys_user;
 
        /**
         * Contract element.
         * @see {@link $$GlideRecord.ast_contract}
         */
        contract: $$GlideElement.ast_contract;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * Description element.
         * Type: HTML (html); Scalar length: undefined
         */
        description: GlideElementGlideObject;
 
        /**
         * "Disaster recovery" element.
         * Type: HTML (html); Scalar length: undefined
         */
        disaster_recovery: GlideElementGlideObject;
 
        /**
         * Ends element.
         * Type: Date (glide_date); scalar type: date
         */
        ends: GlideElementGlideObject;
 
        /**
         * "Functional area" element.
         */
        functional_area: GlideElement;
 
        /**
         * "Incident procedures" element.
         * Type: HTML (html); Scalar length: undefined
         */
        incident_procedures: GlideElementGlideObject;
 
        /**
         * "Informed user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        informed_user: $$GlideElement.sys_user;
 
        /**
         * Maintenance element.
         * @see {@link $$GlideRecord.sys_calendar}
         */
        maintenance: $$GlideElement.sys_calendar;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Next review" element.
         * Type: Date (glide_date); scalar type: date
         */
        next_review: GlideElementGlideObject;
 
        /**
         * Notes element.
         * Type: HTML (html); Scalar length: undefined
         */
        notes: GlideElementGlideObject;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * Reponsibilities element.
         * Type: HTML (html); Scalar length: undefined
         */
        reponsibilities: GlideElementGlideObject;
 
        /**
         * "Response time" element.
         */
        response_time: GlideElementNumeric;
 
        /**
         * "Responsible user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        responsible_user: $$GlideElement.sys_user;
 
        /**
         * "Security notes" element.
         * Type: HTML (html); Scalar length: undefined
         */
        security_notes: GlideElementGlideObject;
 
        /**
         * "Service goals" element.
         * Type: HTML (html); Scalar length: undefined
         */
        service_goals: GlideElementGlideObject;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * Signatures element.
         * Type: HTML (html); Scalar length: undefined
         */
        signatures: GlideElementGlideObject;
 
        /**
         * "Agreement type" element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * "Technical lead" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        technical_lead: $$GlideElement.sys_user;
 
        /**
         * "Transaction load" element.
         */
        transaction_load: GlideElementNumeric;
 
        /**
         * Users element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        users: $$GlideElement.sys_user_group;
    }
 
    /**
     * "Service Portfolio" glide record fields.
     * @see {@link $$GlideElement.spm_service_portfolio}
     * @see {@link $$GlideRecord.spm_service_portfolio}
     */
    export interface spm_service_portfolio extends IBaseRecord {
        /**
         * "Auto-create service offerings" element.
         */
        create_service_offerings: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * "Market scope" element.
         */
        market_scope: GlideElementTranslatedText;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Number of offerings per service" element.
         */
        offerings_per_service: GlideElement;
 
        /**
         * "Service portfolio manager" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        service_portfolio_manager: $$GlideElement.sys_user;
 
        /**
         * "Service portfolio owner" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        service_portfolio_owner: $$GlideElement.sys_user;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * Calendar glide record fields.
     * @see {@link $$GlideElement.sys_calendar}
     * @see {@link $$GlideRecord.sys_calendar}
     */
    export interface sys_calendar extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElement;
    }
 
    /**
     * "Taxonomy Node" glide record fields.
     * @see {@link $$GlideElement.spm_taxonomy_node}
     * @see {@link $$GlideRecord.spm_taxonomy_node}
     */
    export interface spm_taxonomy_node extends IBaseRecord {
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.spm_taxonomy_node}
         */
        parent: $$GlideElement.spm_taxonomy_node;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * "Service portfolio" element.
         * @see {@link $$GlideRecord.spm_service_portfolio}
         */
        spm_service_portfolio: $$GlideElement.spm_service_portfolio;
 
        /**
         * "Owned by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        taxonomy_node_owner: $$GlideElement.sys_user;
 
        /**
         * "Valid from" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        valid_from: GlideElementGlideObject;
 
        /**
         * "Valid to" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        valid_to: GlideElementGlideObject;
    }

    /**
     * "Core Goal" glide record fields.
     * @see {@link $$GlideElement.sn_gf_core_goal}
     * @see {@link $$GlideRecord.sn_gf_core_goal}
     */
    export interface sn_gf_core_goal extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Calendar Period" element.
         * @see {@link $$GlideRecord.business_calendar_span}
         */
        calendar_period: $$GlideElement.business_calendar_span;
 
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * Classification element.
         */
        classification: GlideElement;
 
        /**
         * Comments element.
         * Type: "Journal Input" (journal_input)
         */
        comments: GlideElementGlideObject;
 
        /**
         * Contributors element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        contributors: $$GlideElement.sys_user;
 
        /**
         * Description element.
         * Type: HTML (html); Scalar length: undefined
         */
        description: GlideElementGlideObject;
 
        /**
         * "End date" element.
         * Type: Date (glide_date); scalar type: date
         */
        end_date: GlideElementGlideObject;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Owner element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owner: $$GlideElement.sys_user;
 
        /**
         * "Parent goal" element.
         * @see {@link $$GlideRecord.sn_gf_core_goal}
         */
        parent_goal: $$GlideElement.sn_gf_core_goal;
 
        /**
         * Progress element.
         */
        percent_complete: GlideElementNumeric;
 
        /**
         * Priority element.
         */
        priority: GlideElement;
 
        /**
         * "Reason for inactive" element.
         */
        reason_for_inactive: GlideElement;
 
        /**
         * "Roll up progress" element.
         */
        roll_up_progress: GlideElementBoolean;
 
        /**
         * "Start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        start_date: GlideElementGlideObject;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * Status element.
         */
        status: GlideElement;
 
        /**
         * Class element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Weight scale" element.
         */
        weight: GlideElement;
    }
 
    /**
     * "Strategic Priority" glide record fields.
     * @see {@link $$GlideElement.sn_gf_strategy}
     * @see {@link $$GlideRecord.sn_gf_strategy}
     */
    export interface sn_gf_strategy extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Business Unit" element.
         * @see {@link $$GlideRecord.business_unit}
         */
        business_unit: $$GlideElement.business_unit;
 
        /**
         * "Calendar Period" element.
         * @see {@link $$GlideRecord.business_calendar_span}
         */
        calendar_period: $$GlideElement.business_calendar_span;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Department element.
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * Description element.
         * Type: HTML (html); Scalar length: undefined
         */
        description: GlideElementGlideObject;
 
        /**
         * "End date" element.
         * Type: Date (glide_date); scalar type: date
         */
        end_date: GlideElementGlideObject;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * Owner element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owner: $$GlideElement.sys_user;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.sn_gf_strategy}
         */
        parent: $$GlideElement.sn_gf_strategy;
 
        /**
         * "Start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        start_date: GlideElementGlideObject;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * Type element.
         */
        type: GlideElement;
    }
 
    /**
     * "Application Model" glide record fields.
     * @see {@link $$GlideElement.cmdb_application_product_model}
     * @see {@link $$GlideRecord.cmdb_application_product_model}
     */
    export interface cmdb_application_product_model extends cmdb_model {
    }
 
    /**
     * Condition glide record fields.
     * @see {@link $$GlideElement.clm_condition_checker}
     * @see {@link $$GlideRecord.clm_condition_checker}
     */
    export interface clm_condition_checker extends sys_metadata {
        /**
         * "Compliant state" element.
         */
        compliant: GlideElementBoolean;
 
        /**
         * "Expiration Condition" element.
         */
        condition: GlideElementConditions;
 
        /**
         * "Condition check" element.
         * @see {@link $$GlideRecord.clm_condition_check}
         */
        condition_check: $$GlideElement.clm_condition_check;
 
        /**
         * "Event name" element.
         */
        event_name: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * "Condition Checks" glide record fields.
     * @see {@link $$GlideElement.clm_condition_check}
     * @see {@link $$GlideRecord.clm_condition_check}
     */
    export interface clm_condition_check extends sys_metadata {
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Condition field" element.
         */
        condition_field: GlideElement;
 
        /**
         * "Event name" element.
         */
        event_name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * Rule glide record fields.
     * @see {@link $$GlideElement.sysrule}
     * @see {@link $$GlideRecord.sysrule}
     */
    export interface sysrule extends sys_metadata {
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Execution Order" element.
         */
        order: GlideElementNumeric;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Overrides element.
         * @see {@link $$GlideRecord.sysrule}
         */
        sys_overrides: $$GlideElement.sysrule;
    }
 
    /**
     * "Service Level Agreement" glide record fields.
     * @see {@link $$GlideElement.sysrule_escalate}
     * @see {@link $$GlideRecord.sysrule_escalate}
     */
    export interface sysrule_escalate extends sysrule {
        /**
         * "Advanced condition" element.
         */
        advanced_condition: GlideElementScript;
 
        /**
         * "Assignment script" element.
         */
        assignment_script: GlideElementScript;
 
        /**
         * Calendar element.
         * @see {@link $$GlideRecord.sys_calendar}
         */
        calendar: $$GlideElement.sys_calendar;
 
        /**
         * Conditions element.
         */
        condition: GlideElementConditions;
 
        /**
         * "Pause Conditions" element.
         */
        pause_condition: GlideElementConditions;
 
        /**
         * "Reset Conditions" element.
         */
        reset_condition: GlideElementConditions;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * Threshold element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        threshold: GlideElementGlideObject;
    }
 
    /**
     * "Workflow context" glide record fields.
     * @see {@link $$GlideElement.wf_context}
     * @see {@link $$GlideRecord.wf_context}
     */
    export interface wf_context extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Activity count" element.
         */
        activity_count: GlideElementNumeric;
 
        /**
         * "Activity index" element.
         */
        activity_index: GlideElementNumeric;
 
        /**
         * "Run after bus. rules run" element.
         */
        after_business_rules: GlideElementBoolean;
 
        /**
         * "Auto start" element.
         */
        auto_start: GlideElementBoolean;
 
        /**
         * "Stage rendering" element.
         * @see {@link $$GlideRecord.column_renderer}
         */
        column_renderer: $$GlideElement.column_renderer;
 
        /**
         * "Cumulative to ERT" element.
         */
        cumulated_avg_ert: GlideElementBoolean;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * Ended element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        ended: GlideElementGlideObject;
 
        /**
         * "Available actions" element.
         * Type: "UI Action List" (glide_action_list); Scalar length: undefined
         */
        ert_long_running_actions: GlideElementGlideObject;
 
        /**
         * "Available actions" element.
         * Type: "UI Action List" (glide_action_list); Scalar length: undefined
         */
        ert_outlier_workflow_actions: GlideElementGlideObject;
 
        /**
         * "Related record" element.
         */
        id: GlideElementDocumentId;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.wf_context}
         */
        parent: $$GlideElement.wf_context;
 
        /**
         * "Parent activity" element.
         * @see {@link $$GlideRecord.wf_executing}
         */
        parent_activity: $$GlideElement.wf_executing;
 
        /**
         * "Requires ERT" element.
         */
        requires_ert: GlideElementBoolean;
 
        /**
         * Result element.
         */
        result: GlideElement;
 
        /**
         * "Return value" element.
         */
        return_value: GlideElementNameValue;
 
        /**
         * "Running duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        running_duration: GlideElementGlideObject;
 
        /**
         * Schedule element.
         * @see {@link $$GlideRecord.cmn_schedule}
         */
        schedule: $$GlideElement.cmn_schedule;
 
        /**
         * Scratchpad element.
         */
        scratchpad: GlideElementNameValue;
 
        /**
         * Stage element.
         * @see {@link $$GlideRecord.wf_stage}
         */
        stage: $$GlideElement.wf_stage;
 
        /**
         * "Stage states" element.
         */
        stage_state: GlideElement;
 
        /**
         * Started element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        started: GlideElementGlideObject;
 
        /**
         * "Started by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        started_by: $$GlideElement.sys_user;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElementShortTableName;
 
        /**
         * Timezone element.
         */
        timezone: GlideElement;
 
        /**
         * "Available actions" element.
         * Type: "UI Action List" (glide_action_list); Scalar length: undefined
         */
        without_current_wf_actions: GlideElementGlideObject;
 
        /**
         * Workflow element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        workflow: $$GlideElement.wf_workflow;
 
        /**
         * "Workflow version" element.
         * @see {@link $$GlideRecord.wf_workflow_version}
         */
        workflow_version: $$GlideElement.wf_workflow_version;
    }
 
    /**
     * "Workflow Version" glide record fields.
     * @see {@link $$GlideElement.wf_workflow_version}
     * @see {@link $$GlideRecord.wf_workflow_version}
     */
    export interface wf_workflow_version extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Activity stages" element.
         */
        activity_stages: GlideElementCompressed;
 
        /**
         * "Run after bus. rules run" element.
         */
        after_business_rules: GlideElementBoolean;
 
        /**
         * "Checked out" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        checked_out: GlideElementGlideObject;
 
        /**
         * "Checked out by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        checked_out_by: $$GlideElement.sys_user;
 
        /**
         * "Stage rendering" element.
         * @see {@link $$GlideRecord.column_renderer}
         */
        column_renderer: $$GlideElement.column_renderer;
 
        /**
         * Condition element.
         */
        condition: GlideElementConditions;
 
        /**
         * "If condition matches" element.
         */
        condition_type: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Expected sequences" element.
         */
        expected_sequences: GlideElementCompressed;
 
        /**
         * "Expected time" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        expected_time: GlideElementGlideObject;
 
        /**
         * "Delivery based on" element.
         */
        expected_time_type: GlideElement;
 
        /**
         * "Full sequences" element.
         */
        full_sequences: GlideElementCompressed;
 
        /**
         * Journal element.
         * Type: Journal (journal)
         */
        journal: GlideElementGlideObject;
 
        /**
         * "Max activity count" element.
         */
        max_activity_count: GlideElementNumeric;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Not cacheable" element.
         */
        not_cacheable: GlideElementBoolean;
 
        /**
         * "On-cancel script" element.
         */
        on_cancel: GlideElementScript;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Activity pinning" element.
         */
        pin_type: GlideElement;
 
        /**
         * Published element.
         */
        published: GlideElementBoolean;
 
        /**
         * "Relative duration" element.
         * @see {@link $$GlideRecord.cmn_relative_duration}
         */
        relative_duration: $$GlideElement.cmn_relative_duration;
 
        /**
         * "Requires ERT" element.
         */
        requires_ert: GlideElementBoolean;
 
        /**
         * "Run multiple" element.
         */
        run_multiple: GlideElementBoolean;
 
        /**
         * Schedule element.
         * @see {@link $$GlideRecord.cmn_schedule}
         */
        schedule: $$GlideElement.cmn_schedule;
 
        /**
         * "Stage field" element.
         */
        stage_field: GlideElement;
 
        /**
         * "Stage order" element.
         */
        stage_order: GlideElement;
 
        /**
         * "Starting activity" element.
         * @see {@link $$GlideRecord.wf_activity}
         */
        start: $$GlideElement.wf_activity;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * Timezone element.
         */
        timezone: GlideElement;
 
        /**
         * "Workflow Runtime Validation Status" element.
         */
        validated: GlideElementBoolean;
 
        /**
         * Workflow element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        workflow: $$GlideElement.wf_workflow;
    }

    /**
     * Workflow glide record fields.
     * @see {@link $$GlideElement.wf_workflow}
     * @see {@link $$GlideRecord.wf_workflow}
     */
    export interface wf_workflow extends sys_metadata {
        /**
         * "Accessible from" element.
         */
        access: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Preview element.
         */
        preview: GlideElementUserImage;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Sys overrides" element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        sys_overrides: $$GlideElement.wf_workflow;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * Template element.
         */
        template: GlideElementBoolean;
    }
 
    /**
     * "Workflow Stage" glide record fields.
     * @see {@link $$GlideElement.wf_stage}
     * @see {@link $$GlideRecord.wf_stage}
     */
    export interface wf_stage extends IBaseRecord {
        /**
         * Name element.
         */
        name: GlideElementTranslatedField;
 
        /**
         * Duration element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        ola: GlideElementGlideObject;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Value element.
         */
        value: GlideElement;
 
        /**
         * "Workflow version" element.
         * @see {@link $$GlideRecord.wf_workflow_version}
         */
        workflow_version: $$GlideElement.wf_workflow_version;
    }
 
    /**
     * "Workflow Executing Activity" glide record fields.
     * @see {@link $$GlideElement.wf_executing}
     * @see {@link $$GlideRecord.wf_executing}
     */
    export interface wf_executing extends IBaseRecord {
        /**
         * Activity element.
         * @see {@link $$GlideRecord.wf_activity}
         */
        activity: $$GlideElement.wf_activity;
 
        /**
         * "Activity index" element.
         */
        activity_index: GlideElementNumeric;
 
        /**
         * Context element.
         * @see {@link $$GlideRecord.wf_context}
         */
        context: $$GlideElement.wf_context;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * "Fault description" element.
         */
        fault_description: GlideElement;
 
        /**
         * "Input Data" element.
         */
        input_data: GlideElement;
 
        /**
         * "Is parent" element.
         */
        is_parent: GlideElementBoolean;
 
        /**
         * "Notify Termination" element.
         */
        notify_termination: GlideElementBoolean;
 
        /**
         * Output element.
         */
        output: GlideElement;
 
        /**
         * "Output Data" element.
         */
        output_data: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.wf_executing}
         */
        parent: $$GlideElement.wf_executing;
 
        /**
         * "Previous activity" element.
         * @see {@link $$GlideRecord.wf_history}
         */
        previous_activity: $$GlideElement.wf_history;
 
        /**
         * "Registered events" element.
         */
        registered_events: GlideElement;
 
        /**
         * Result element.
         */
        result: GlideElement;
 
        /**
         * Scratchpad element.
         */
        scratchpad: GlideElementNameValue;
 
        /**
         * Started element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        started: GlideElementGlideObject;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Workflow version" element.
         * @see {@link $$GlideRecord.wf_workflow_version}
         */
        workflow_version: $$GlideElement.wf_workflow_version;
    }
 
    /**
     * Macro glide record fields.
     * @see {@link $$GlideElement.sys_ui_macro}
     * @see {@link $$GlideRecord.sys_ui_macro}
     */
    export interface sys_ui_macro extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Media type" element.
         */
        media_type: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "API Name" element.
         */
        scoped_name: GlideElement;
 
        /**
         * XML element.
         */
        xml: GlideElementScript;
    }
 
    /**
     * "Column Renderer" glide record fields.
     * @see {@link $$GlideElement.column_renderer}
     * @see {@link $$GlideRecord.column_renderer}
     */
    export interface column_renderer extends sys_ui_macro {
        /**
         * Column element.
         */
        column: GlideElement;
 
        /**
         * "Display value" element.
         */
        display_value: GlideElement;
 
        /**
         * Options element.
         */
        options: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * "Workflow Activity" glide record fields.
     * @see {@link $$GlideElement.wf_activity}
     * @see {@link $$GlideRecord.wf_activity}
     */
    export interface wf_activity extends IBaseRecord {
        /**
         * "Activity definition" element.
         * @see {@link $$GlideRecord.wf_element_definition}
         */
        activity_definition: $$GlideElement.wf_element_definition;
 
        /**
         * "Activity definition updated" element.
         */
        activity_definition_updated: GlideElementBoolean;
 
        /**
         * "Databus lookup ID" element.
         */
        databus_lookup_id: GlideElementNumeric;
 
        /**
         * Height element.
         */
        height: GlideElementNumeric;
 
        /**
         * Input element.
         */
        input: GlideElementDataObject;
 
        /**
         * "Is parent" element.
         */
        is_parent: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "New activity definition" element.
         * @see {@link $$GlideRecord.wf_element_definition}
         */
        new_activity_definition: $$GlideElement.wf_element_definition;
 
        /**
         * Notes element.
         */
        notes: GlideElement;
 
        /**
         * "Out of date" element.
         */
        out_of_date: GlideElementBoolean;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.wf_activity}
         */
        parent: $$GlideElement.wf_activity;
 
        /**
         * Pinned element.
         */
        pinned: GlideElementBoolean;
 
        /**
         * "Pinned version" element.
         * @see {@link $$GlideRecord.wf_versionable}
         */
        pinned_version: $$GlideElement.wf_versionable;
 
        /**
         * Stage element.
         * @see {@link $$GlideRecord.wf_stage}
         */
        stage: $$GlideElement.wf_stage;
 
        /**
         * Timeout element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        timeout: GlideElementGlideObject;
 
        /**
         * Variables element.
         * @see {@link $$GlideRecord.wf_activity_variable}
         */
        vars: $$GlideElement.wf_activity_variable;
 
        /**
         * Width element.
         */
        width: GlideElementNumeric;
 
        /**
         * "Workflow version" element.
         * @see {@link $$GlideRecord.wf_workflow_version}
         */
        workflow_version: $$GlideElement.wf_workflow_version;
 
        /**
         * X element.
         */
        x: GlideElementNumeric;
 
        /**
         * Y element.
         */
        y: GlideElementNumeric;
    }
 
    /**
     * "Relative Duration" glide record fields.
     * @see {@link $$GlideElement.cmn_relative_duration}
     * @see {@link $$GlideRecord.cmn_relative_duration}
     */
    export interface cmn_relative_duration extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
    }
 
    /**
     * "Workflow Activity History" glide record fields.
     * @see {@link $$GlideElement.wf_history}
     * @see {@link $$GlideRecord.wf_history}
     */
    export interface wf_history extends IBaseRecord {
        /**
         * Activity element.
         * @see {@link $$GlideRecord.wf_activity}
         */
        activity: $$GlideElement.wf_activity;
 
        /**
         * "Activity index" element.
         */
        activity_index: GlideElementNumeric;
 
        /**
         * Context element.
         * @see {@link $$GlideRecord.wf_context}
         */
        context: $$GlideElement.wf_context;
 
        /**
         * Due element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        due: GlideElementGlideObject;
 
        /**
         * Ended element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        ended: GlideElementGlideObject;
 
        /**
         * "Fault Description" element.
         */
        fault_description: GlideElement;
 
        /**
         * "Input Data" element.
         */
        input_data: GlideElement;
 
        /**
         * "Is parent" element.
         */
        is_parent: GlideElementBoolean;
 
        /**
         * Output element.
         */
        output: GlideElement;
 
        /**
         * "Output Data" element.
         */
        output_data: GlideElement;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.wf_executing}
         */
        parent: $$GlideElement.wf_executing;
 
        /**
         * Result element.
         */
        result: GlideElement;
 
        /**
         * "Rolled back by" element.
         */
        rolled_back_by: GlideElementNumeric;
 
        /**
         * Started element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        started: GlideElementGlideObject;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Workflow version" element.
         * @see {@link $$GlideRecord.wf_workflow_version}
         */
        workflow_version: $$GlideElement.wf_workflow_version;
    }
 
    /**
     * "Workflow Element Definition" glide record fields.
     * @see {@link $$GlideElement.wf_element_definition}
     * @see {@link $$GlideRecord.wf_element_definition}
     */
    export interface wf_element_definition extends sys_metadata {
        /**
         * "Accessible from" element.
         */
        access: GlideElement;
 
        /**
         * Attributes element.
         */
        attributes: GlideElement;
 
        /**
         * Provider element.
         * @see {@link $$GlideRecord.wf_element_provider}
         */
        base_provider: $$GlideElement.wf_element_provider;
 
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Default height" element.
         */
        default_height: GlideElementNumeric;
 
        /**
         * "Default width" element.
         */
        default_width: GlideElementNumeric;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Image element.
         */
        image: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Style element.
         */
        style: GlideElement;
 
        /**
         * "Version Container" element.
         */
        version_container_id: GlideElement;
    }

    /**
     * "Activity Variables" glide record fields.
     * @see {@link $$GlideElement.wf_activity_variable}
     * @see {@link $$GlideRecord.wf_activity_variable}
     */
    export interface wf_activity_variable extends var_dictionary {
        /**
         * Model element.
         * @see {@link $$GlideRecord.wf_activity_definition}
         */
        model: $$GlideElement.wf_activity_definition;
    }
 
    /**
     * "Element Provider" glide record fields.
     * @see {@link $$GlideElement.wf_element_provider}
     * @see {@link $$GlideRecord.wf_element_provider}
     */
    export interface wf_element_provider extends IBaseRecord {
        /**
         * "Default image" element.
         */
        default_image: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Provider element.
         */
        provider: GlideElement;
    }
 
    /**
     * "Flow catalog variable model" glide record fields.
     * @see {@link $$GlideElement.sys_flow_cat_variable_model}
     * @see {@link $$GlideRecord.sys_flow_cat_variable_model}
     */
    export interface sys_flow_cat_variable_model extends IBaseRecord {
        /**
         * ID element.
         */
        id: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Application element.
         * @see {@link $$GlideRecord.sys_scope}
         */
        sys_scope: $$GlideElement.sys_scope;
    }
 
    /**
     * Interaction glide record fields.
     * @see {@link $$GlideElement.interaction}
     * @see {@link $$GlideRecord.interaction}
     */
    export interface interaction extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Application element.
         * @see {@link $$GlideRecord.sys_scope}
         */
        application: $$GlideElement.sys_scope;
 
        /**
         * "Assigned At" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        assigned_at: GlideElementGlideObject;
 
        /**
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * "Assignment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Auto resolution" element.
         */
        auto_resolution: GlideElementBoolean;
 
        /**
         * "Caller Phone Number" element.
         */
        caller_phone_number: GlideElementPhoneNumber;
 
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Channel Metadata Record" element.
         */
        channel_metadata_document: GlideElementDocumentId;
 
        /**
         * "Channel Metadata Table" element.
         */
        channel_metadata_table: GlideElement;
 
        /**
         * "Channel user profile" element.
         * @see {@link $$GlideRecord.sys_cs_channel_user_profile}
         */
        channel_user_profile: $$GlideElement.sys_cs_channel_user_profile;
 
        /**
         * "Client host" element.
         */
        client_host: GlideElement;
 
        /**
         * "Client Session Id" element.
         */
        client_session_id: GlideElement;
 
        /**
         * Closed element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        closed_at: GlideElementGlideObject;
 
        /**
         * "Closed by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        closed_by: $$GlideElement.sys_user;
 
        /**
         * Company element.
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Context element.
         * @see {@link $$GlideRecord.v_interaction_context}
         */
        context: $$GlideElement.v_interaction_context;
 
        /**
         * "Context Record" element.
         */
        context_document: GlideElementDocumentId;
 
        /**
         * "Context Table" element.
         */
        context_table: GlideElement;
 
        /**
         * "Customer Satisfaction Score" element.
         */
        csat_score: GlideElementNumeric;
 
        /**
         * Direction element.
         */
        direction: GlideElement;
 
        /**
         * Duration element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        duration: GlideElementGlideObject;
 
        /**
         * "Help requested" element.
         */
        help_requested: GlideElementBoolean;
 
        /**
         * "Internal Transcript" element.
         */
        internal_transcript: GlideElement;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * Number element.
         */
        number: GlideElement;
 
        /**
         * Opened element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        opened_at: GlideElementGlideObject;
 
        /**
         * "Opened by" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        opened_by: $$GlideElement.sys_user;
 
        /**
         * "Opened for" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        opened_for: $$GlideElement.sys_user;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.interaction}
         */
        parent: $$GlideElement.interaction;
 
        /**
         * "Provider application" element.
         * @see {@link $$GlideRecord.sys_cs_provider_application}
         */
        provider_application: $$GlideElement.sys_cs_provider_application;
 
        /**
         * "Recording URL" element.
         */
        recording_url: GlideElementURL;
 
        /**
         * Sentiment element.
         */
        sentiment: GlideElementNumeric;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * "State Changed On" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        state_changed_on: GlideElementGlideObject;
 
        /**
         * "State Reason" element.
         */
        state_reason: GlideElement;
 
        /**
         * Subcategory element.
         */
        subcategory: GlideElement;
 
        /**
         * Subtype element.
         */
        subtype: GlideElement;
 
        /**
         * "Interaction class name" element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "System Wrap Up" element.
         */
        system_wrap_up: GlideElementBoolean;
 
        /**
         * Transcript element.
         */
        transcript: GlideElement;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "User language" element.
         */
        user_language: GlideElement;
 
        /**
         * Verified element.
         */
        verified: GlideElementBoolean;
 
        /**
         * "Virtual agent" element.
         */
        virtual_agent: GlideElementBoolean;
 
        /**
         * "Voice used" element.
         */
        voice_used: GlideElementBoolean;
 
        /**
         * "Wait time" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        wait_time: GlideElementGlideObject;
 
        /**
         * "Work notes" element.
         * Type: "Journal Input" (journal_input)
         */
        work_notes: GlideElementGlideObject;
 
        /**
         * "Wrap Up Duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        wrap_up_duration: GlideElementGlideObject;
    }
 
    /**
     * "Provider Channel Identity" glide record fields.
     * @see {@link $$GlideElement.sys_cs_provider_application}
     * @see {@link $$GlideRecord.sys_cs_provider_application}
     */
    export interface sys_cs_provider_application extends sys_metadata {
        /**
         * "Default Portal" element.
         * @see {@link $$GlideRecord.sp_portal}
         */
        default_portal: $$GlideElement.sp_portal;
 
        /**
         * "Inbound ID" element.
         */
        inbound_id: GlideElement;
 
        /**
         * "Message auth" element.
         * @see {@link $$GlideRecord.provider_auth}
         */
        message_auth: $$GlideElement.provider_auth;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Provider element.
         * @see {@link $$GlideRecord.sys_cs_provider}
         */
        provider: $$GlideElement.sys_cs_provider;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Trusted media domains" element.
         */
        trusted_media_domains: GlideElement;
    }
 
    /**
     * "Interaction Context" glide record fields.
     * @see {@link $$GlideElement.v_interaction_context}
     * @see {@link $$GlideRecord.v_interaction_context}
     */
    export interface v_interaction_context {
        /**
         * "Sys ID" element.
         */
        sys_id: GlideElement;
 
        /**
         * "Agent zero context id" element.
         */
        u_liveagent_agent_zero_context_id: GlideElement;
 
        /**
         * application element.
         */
        u_liveagent_application: GlideElement;
 
        /**
         * devicetype element.
         */
        u_liveagent_devicetype: GlideElement;
 
        /**
         * esc_pre_chat_ask_a_question element.
         */
        u_liveagent_esc_pre_chat_ask_a_question: GlideElement;
 
        /**
         * interaction_id element.
         */
        u_liveagent_interaction_id: GlideElement;
 
        /**
         * language element.
         */
        u_liveagent_language: GlideElement;
 
        /**
         * page element.
         */
        u_liveagent_page: GlideElement;
 
        /**
         * portal element.
         */
        u_liveagent_portal: GlideElement;
 
        /**
         * post_assessment_instance element.
         */
        u_liveagent_post_assessment_instance: GlideElement;
 
        /**
         * post_chat_survey_name element.
         */
        u_liveagent_post_chat_survey_name: GlideElement;
 
        /**
         * pre_assessment_instance element.
         */
        u_liveagent_pre_assessment_instance: GlideElement;
 
        /**
         * pre_chat_survey_name element.
         */
        u_liveagent_pre_chat_survey_name: GlideElement;
 
        /**
         * queue element.
         */
        u_liveagent_queue: GlideElement;
 
        /**
         * search_text element.
         */
        u_liveagent_search_text: GlideElement;
 
        /**
         * short_description element.
         */
        u_liveagent_short_description: GlideElement;
 
        /**
         * sys_id element.
         */
        u_liveagent_sys_id: GlideElement;
 
        /**
         * table element.
         */
        u_liveagent_table: GlideElement;
    }
 
    /**
     * "Channel User Profile" glide record fields.
     * @see {@link $$GlideElement.sys_cs_channel_user_profile}
     * @see {@link $$GlideRecord.sys_cs_channel_user_profile}
     */
    export interface sys_cs_channel_user_profile extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Channel element.
         * @see {@link $$GlideRecord.sys_cs_channel}
         */
        channel: $$GlideElement.sys_cs_channel;
 
        /**
         * "Channel user ID" element.
         */
        channel_user_id: GlideElement;
 
        /**
         * "Display Name" element.
         */
        display_name: GlideElement;
 
        /**
         * "Expired on" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        expired_on: GlideElementGlideObject;
 
        /**
         * Timezone element.
         */
        timezone: GlideElement;
 
        /**
         * "User document" element.
         */
        user_document: GlideElementDocumentId;
 
        /**
         * "User table" element.
         */
        user_table: GlideElement;
    }
 
    /**
     * "Messaging Channel" glide record fields.
     * @see {@link $$GlideElement.sys_cs_channel}
     * @see {@link $$GlideRecord.sys_cs_channel}
     */
    export interface sys_cs_channel extends sys_metadata {
        /**
         * "Enable Notifications" element.
         */
        enable_notification: GlideElementBoolean;
 
        /**
         * Icon element.
         */
        icon: GlideElementUserImage;
 
        /**
         * "Live Agent Only" element.
         */
        live_agent_only: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Secure element.
         */
        secure: GlideElementBoolean;
 
        /**
         * "Enable Sentiment Analysis" element.
         */
        sentiment_enabled: GlideElementBoolean;
 
        /**
         * "Store app page link" element.
         */
        store_app_page_link: GlideElement;
 
        /**
         * Synchronous element.
         */
        synchronous: GlideElementBoolean;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementReference;
 
        /**
         * "Conversation Idle Timeout" element.
         */
        timeout: GlideElementNumeric;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "Support typing indicator" element.
         */
        typing_indicators_enabled: GlideElementBoolean;
 
        /**
         * "Opted in all topics by default" element.
         */
        whitelisted: GlideElementBoolean;
    }
 
    /**
     * "Provider Channel" glide record fields.
     * @see {@link $$GlideElement.sys_cs_provider}
     * @see {@link $$GlideRecord.sys_cs_provider}
     */
    export interface sys_cs_provider extends sys_metadata {
        /**
         * "Account linking type" element.
         */
        account_link_type: GlideElement;
 
        /**
         * "Automatic link action" element.
         */
        automatic_link_action: GlideElement;
 
        /**
         * "Auto link users' ServiceNow profiles" element.
         */
        automatic_link_enabled: GlideElementBoolean;
 
        /**
         * Channel element.
         * @see {@link $$GlideRecord.sys_cs_channel}
         */
        channel: $$GlideElement.sys_cs_channel;
 
        /**
         * "Contextual action" element.
         */
        contextual_action: GlideElement;
 
        /**
         * "HTML to Image conversion required" element.
         */
        html_with_image_link: GlideElementBoolean;
 
        /**
         * "Link account action" element.
         */
        link_account_action: GlideElement;
 
        /**
         * "Allow account linking" element.
         */
        link_account_enabled: GlideElementBoolean;
 
        /**
         * "Maintain message ordering" element.
         */
        message_order: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Provider attributes action" element.
         */
        provider_attributes_action: GlideElement;
 
        /**
         * "Response processor action" element.
         */
        response_processor_action: GlideElement;
 
        /**
         * "Sender action" element.
         */
        sender_action: GlideElement;
 
        /**
         * "Sender subflow" element.
         */
        sender_subflow: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Trusted media domains" element.
         */
        trusted_media_domains: GlideElement;
 
        /**
         * Version element.
         */
        version: GlideElement;
    }

    /**
     * Variables glide record fields.
     * @see {@link $$GlideElement.var_dictionary}
     * @see {@link $$GlideRecord.var_dictionary}
     */
    export interface var_dictionary extends sys_dictionary {
        /**
         * Help element.
         */
        help: GlideElement;
 
        /**
         * Hint element.
         */
        hint: GlideElement;
 
        /**
         * Label element.
         */
        label: GlideElement;
 
        /**
         * "Model ID" element.
         */
        model_id: GlideElementDocumentId;
 
        /**
         * "Model Table" element.
         */
        model_table: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
    }
 
    /**
     * "Workflow Activity Definition" glide record fields.
     * @see {@link $$GlideElement.wf_activity_definition}
     * @see {@link $$GlideRecord.wf_activity_definition}
     */
    export interface wf_activity_definition extends wf_element_definition {
        /**
         * Action element.
         */
        action: GlideElementBoolean;
 
        /**
         * "JS class name" element.
         */
        js_class_name: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * "Provider Auth" glide record fields.
     * @see {@link $$GlideElement.provider_auth}
     * @see {@link $$GlideRecord.provider_auth}
     */
    export interface provider_auth extends IBaseRecord {
        /**
         * "Group name" element.
         */
        group_name: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Provider element.
         */
        provider_name: GlideElement;
 
        /**
         * "Service Portal" element.
         * @see {@link $$GlideRecord.sp_portal}
         */
        service_portal: $$GlideElement.sp_portal;
 
        /**
         * "Auth type" element.
         */
        sys_class_name: GlideElementSysClassName;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }
 
    /**
     * "Text Index Group" glide record fields.
     * @see {@link $$GlideElement.ts_index_group}
     * @see {@link $$GlideRecord.ts_index_group}
     */
    export interface ts_index_group extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Label element.
         */
        label: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Tables element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.ts_configuration}
         */
        tables: $$GlideElement.ts_configuration;
    }
 
    /**
     * Theme glide record fields.
     * @see {@link $$GlideElement.sp_theme}
     * @see {@link $$GlideRecord.sp_theme}
     */
    export interface sp_theme extends sys_metadata {
        /**
         * "CSS variables" element.
         */
        css_variables: GlideElement;
 
        /**
         * Footer element.
         * @see {@link $$GlideRecord.sp_header_footer}
         */
        footer: $$GlideElement.sp_header_footer;
 
        /**
         * "Fixed footer" element.
         */
        footer_fixed: GlideElementBoolean;
 
        /**
         * Header element.
         * @see {@link $$GlideRecord.sp_header_footer}
         */
        header: $$GlideElement.sp_header_footer;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Fixed header" element.
         */
        navbar_fixed: GlideElementBoolean;
 
        /**
         * "Turn off SCSS compilation" element.
         */
        turn_off_scss_compilation: GlideElementBoolean;
    }
 
    /**
     * Instance glide record fields.
     * @see {@link $$GlideElement.sp_instance}
     * @see {@link $$GlideRecord.sp_instance}
     */
    export interface sp_instance extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Bootstrap class name" element.
         */
        class_name: GlideElement;
 
        /**
         * "Bootstrap color" element.
         */
        color: GlideElement;
 
        /**
         * CSS element.
         */
        css: GlideElement;
 
        /**
         * Glyph element.
         */
        glyph: GlideElement;
 
        /**
         * ID element.
         */
        id: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * "Bootstrap size" element.
         */
        size: GlideElement;
 
        /**
         * Column element.
         * @see {@link $$GlideRecord.sp_column}
         */
        sp_column: $$GlideElement.sp_column;
 
        /**
         * Widget element.
         * @see {@link $$GlideRecord.sp_widget}
         */
        sp_widget: $$GlideElement.sp_widget;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedText;
 
        /**
         * "HREF / URL" element.
         */
        url: GlideElement;
 
        /**
         * "Additional options, JSON format" element.
         */
        widget_parameters: GlideElement;
    }
 
    /**
     * "Instance with Menu" glide record fields.
     * @see {@link $$GlideElement.sp_instance_menu}
     * @see {@link $$GlideRecord.sp_instance_menu}
     */
    export interface sp_instance_menu extends sp_instance {
    }
 
    /**
     * "Chat Queue" glide record fields.
     * @see {@link $$GlideElement.chat_queue}
     * @see {@link $$GlideRecord.chat_queue}
     */
    export interface chat_queue extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Assignment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        assignment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Average wait time" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        average_wait_time: GlideElementGlideObject;
 
        /**
         * "Confirm problem" element.
         */
        confirm_problem: GlideElementTranslatedField;
 
        /**
         * "Escalate to" element.
         * @see {@link $$GlideRecord.chat_queue}
         */
        escalate_to: $$GlideElement.chat_queue;
 
        /**
         * "Initial agent response" element.
         */
        initial_agent_response: GlideElementTranslatedField;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Not available" element.
         */
        not_available: GlideElementTranslatedHTML;
 
        /**
         * Question element.
         */
        question: GlideElementTranslatedField;
 
        /**
         * Schedule element.
         * @see {@link $$GlideRecord.cmn_schedule}
         */
        schedule: $$GlideElement.cmn_schedule;
    }
 
    /**
     * "EVAM Definition" glide record fields.
     * @see {@link $$GlideElement.sys_ux_composite_data}
     * @see {@link $$GlideRecord.sys_ux_composite_data}
     */
    export interface sys_ux_composite_data extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Base Filter Label" element.
         */
        base_filter_label: GlideElementTranslatedField;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Query Parameters" element.
         */
        query_parameters: GlideElement;
 
        /**
         * "Required Roles" element.
         */
        required_roles: GlideElement;
 
        /**
         * "Sort Order" element.
         */
        sort_order: GlideElement;
    }

    /**
     * "Text Index Configuration" glide record fields.
     * @see {@link $$GlideElement.ts_configuration}
     * @see {@link $$GlideRecord.ts_configuration}
     */
    export interface ts_configuration extends sys_metadata {
        /**
         * "Applies to" element.
         */
        applies_to: GlideElement;
 
        /**
         * Format element.
         */
        format: GlideElement;
 
        /**
         * "Index group" element.
         * @see {@link $$GlideRecord.ts_index_group}
         */
        index_group: $$GlideElement.ts_index_group;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * "Search Application Configuration" glide record fields.
     * @see {@link $$GlideElement.sys_search_context_config}
     * @see {@link $$GlideRecord.sys_search_context_config}
     */
    export interface sys_search_context_config extends sys_metadata {
        /**
         * "EVAM Definition" element.
         * @see {@link $$GlideRecord.sys_ux_composite_data}
         */
        evam_definition: $$GlideElement.sys_ux_composite_data;
 
        /**
         * "Genius Results Limit" element.
         */
        genius_results_limit: GlideElementNumeric;
 
        /**
         * "Enable Hit-Highlighting" element.
         */
        hit_highlighting: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Search Engine" element.
         */
        search_engine: GlideElement;
 
        /**
         * "Search Profile" element.
         * @see {@link $$GlideRecord.ais_search_profile}
         */
        search_profile: $$GlideElement.ais_search_profile;
 
        /**
         * "Search Results Limit" element.
         */
        search_results_limit: GlideElementNumeric;
 
        /**
         * "Enable Typo Handling" element.
         */
        spell_check: GlideElementBoolean;
 
        /**
         * "Suggestions Limit" element.
         */
        suggestions_to_show_limit: GlideElementNumeric;
 
        /**
         * "Text Index Group" element.
         * @see {@link $$GlideRecord.ts_index_group}
         */
        ts_index_group: $$GlideElement.ts_index_group;
 
        /**
         * View element.
         * @see {@link $$GlideRecord.sys_ui_view}
         */
        view: $$GlideElement.sys_ui_view;
    }
 
    /**
     * Page glide record fields.
     * @see {@link $$GlideElement.sp_page}
     * @see {@link $$GlideRecord.sp_page}
     */
    export interface sp_page extends sys_metadata {
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Page Specific CSS" element.
         */
        css: GlideElement;
 
        /**
         * Draft element.
         */
        draft: GlideElementBoolean;
 
        /**
         * "Dynamic page title" element.
         */
        dynamic_title_structure: GlideElementTranslatedText;
 
        /**
         * "Human readable url structure" element.
         */
        human_readable_url_structure: GlideElement;
 
        /**
         * ID element.
         */
        id: GlideElement;
 
        /**
         * Internal element.
         */
        internal: GlideElementBoolean;
 
        /**
         * "Omit watcher" element.
         */
        omit_watcher: GlideElementBoolean;
 
        /**
         * Public element.
         */
        public: GlideElementBoolean;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * "SEO script" element.
         * @see {@link $$GlideRecord.sys_script_include}
         */
        seo_script: $$GlideElement.sys_script_include;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedText;
 
        /**
         * "Use SEO script" element.
         */
        use_seo_script: GlideElementBoolean;
    }
 
    /**
     * Catalog glide record fields.
     * @see {@link $$GlideElement.sc_catalog}
     * @see {@link $$GlideRecord.sc_catalog}
     */
    export interface sc_catalog extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * "'Continue Shopping' page" element.
         */
        desktop_continue_shopping: GlideElement;
 
        /**
         * "'Catalog Home' Page" element.
         */
        desktop_home_page: GlideElement;
 
        /**
         * "Desktop image" element.
         */
        desktop_image: GlideElementUserImage;
 
        /**
         * Editors element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        editors: $$GlideElement.sys_user;
 
        /**
         * "Enable Wish List" element.
         */
        enable_wish_list: GlideElementBoolean;
 
        /**
         * Manager element.
         * @see {@link $$GlideRecord.sys_user}
         */
        manager: $$GlideElement.sys_user;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedField;
    }
 
    /**
     * "Knowledge Base" glide record fields.
     * @see {@link $$GlideElement.kb_knowledge_base}
     * @see {@link $$GlideRecord.kb_knowledge_base}
     */
    export interface kb_knowledge_base extends IBaseRecord {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Application element.
         * @see {@link $$GlideRecord.sys_scope}
         */
        application: $$GlideElement.sys_scope;
 
        /**
         * "Approval description" element.
         */
        approval_description: GlideElementTranslatedText;
 
        /**
         * "Article Validity" element.
         */
        article_validity: GlideElementNumeric;
 
        /**
         * "Card color" element.
         */
        card_color: GlideElement;
 
        /**
         * "Data policy" element.
         * @see {@link $$GlideRecord.sys_data_policy2}
         */
        data_policy: $$GlideElement.sys_data_policy2;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * "Disable category editing" element.
         */
        disable_category_editing: GlideElementBoolean;
 
        /**
         * "Disable commenting" element.
         */
        disable_commenting: GlideElementBoolean;
 
        /**
         * "Disable mark as helpful" element.
         */
        disable_mark_as_helpful: GlideElementBoolean;
 
        /**
         * "Disable rating" element.
         */
        disable_rating: GlideElementBoolean;
 
        /**
         * "Disable suggesting" element.
         */
        disable_suggesting: GlideElementBoolean;
 
        /**
         * "Enable social questions and answers" element.
         */
        enable_socialqa: GlideElementBoolean;
 
        /**
         * Icon element.
         */
        icon: GlideElementUserImage;
 
        /**
         * Managers element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        kb_managers: $$GlideElement.sys_user;
 
        /**
         * "Release version" element.
         */
        kb_version: GlideElement;
 
        /**
         * "Mandatory fields" element.
         */
        mandatory_fields: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Owner element.
         * @see {@link $$GlideRecord.sys_user}
         */
        owner: $$GlideElement.sys_user;
 
        /**
         * "Question annotation" element.
         */
        question_annotation: GlideElementTranslatedHTML;
 
        /**
         * "Retire workflow" element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        retire_workflow: $$GlideElement.wf_workflow;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * "Set default knowledge field values" element.
         */
        template: GlideElementWorkflowConditions;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedText;
 
        /**
         * "Publish workflow" element.
         * @see {@link $$GlideRecord.wf_workflow}
         */
        workflow: $$GlideElement.wf_workflow;
    }
 
    /**
     * Widget glide record fields.
     * @see {@link $$GlideElement.sp_widget}
     * @see {@link $$GlideRecord.sp_widget}
     */
    export interface sp_widget extends sys_metadata {
        /**
         * Category element.
         */
        category: GlideElement;
 
        /**
         * "Client controller" element.
         */
        client_script: GlideElementScript;
 
        /**
         * controllerAs element.
         */
        controller_as: GlideElement;
 
        /**
         * CSS element.
         */
        css: GlideElement;
 
        /**
         * "Data table" element.
         */
        data_table: GlideElement;
 
        /**
         * "Demo data" element.
         */
        demo_data: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Docs element.
         * @see {@link $$GlideRecord.sp_documentation}
         */
        docs: $$GlideElement.sp_documentation;
 
        /**
         * Fields element.
         */
        field_list: GlideElement;
 
        /**
         * "Has preview" element.
         */
        has_preview: GlideElementBoolean;
 
        /**
         * ID element.
         */
        id: GlideElement;
 
        /**
         * Internal element.
         */
        internal: GlideElementBoolean;
 
        /**
         * Link element.
         */
        link: GlideElementScript;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedField;
 
        /**
         * "Option schema" element.
         */
        option_schema: GlideElement;
 
        /**
         * Public element.
         */
        public: GlideElementBoolean;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * "Server script" element.
         */
        script: GlideElementScript;
 
        /**
         * Servicenow element.
         */
        servicenow: GlideElementBoolean;
 
        /**
         * "Body HTML template" element.
         */
        template: GlideElement;
    }
 
    /**
     * "Header | Footer" glide record fields.
     * @see {@link $$GlideElement.sp_header_footer}
     * @see {@link $$GlideRecord.sp_header_footer}
     */
    export interface sp_header_footer extends sp_widget {
        /**
         * Static element.
         */
        static: GlideElementBoolean;
    }
 
    /**
     * "Service Portal Documentation" glide record fields.
     * @see {@link $$GlideElement.sp_documentation}
     * @see {@link $$GlideRecord.sp_documentation}
     */
    export interface sp_documentation extends sys_metadata {
        /**
         * Content element.
         */
        content: GlideElement;
 
        /**
         * Title element.
         */
        title: GlideElement;
    }
 
    /**
     * Column glide record fields.
     * @see {@link $$GlideElement.sp_column}
     * @see {@link $$GlideRecord.sp_column}
     */
    export interface sp_column extends sys_metadata {
        /**
         * "CSS class" element.
         */
        class_name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Size - md" element.
         */
        size: GlideElementNumeric;
 
        /**
         * "Size - lg" element.
         */
        size_lg: GlideElementNumeric;
 
        /**
         * "Size - sm" element.
         */
        size_sm: GlideElementNumeric;
 
        /**
         * "Size - xs" element.
         */
        size_xs: GlideElementNumeric;
 
        /**
         * Row element.
         * @see {@link $$GlideRecord.sp_row}
         */
        sp_row: $$GlideElement.sp_row;
    }

    /**
     * Row glide record fields.
     * @see {@link $$GlideElement.sp_row}
     * @see {@link $$GlideRecord.sp_row}
     */
    export interface sp_row extends sys_metadata {
        /**
         * "CSS class" element.
         */
        class_name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Column element.
         * @see {@link $$GlideRecord.sp_column}
         */
        sp_column: $$GlideElement.sp_column;
 
        /**
         * Container element.
         * @see {@link $$GlideRecord.sp_container}
         */
        sp_container: $$GlideElement.sp_container;
    }
 
    /**
     * Container glide record fields.
     * @see {@link $$GlideElement.sp_container}
     * @see {@link $$GlideRecord.sp_container}
     */
    export interface sp_container extends sys_metadata {
        /**
         * "Background color" element.
         */
        background_color: GlideElement;
 
        /**
         * "Background image" element.
         */
        background_image: GlideElementUserImage;
 
        /**
         * "Background style" element.
         */
        background_style: GlideElement;
 
        /**
         * "Bootstrap alternative" element.
         */
        bootstrap_alt: GlideElementBoolean;
 
        /**
         * "Parent class" element.
         */
        class_name: GlideElement;
 
        /**
         * "CSS class" element.
         */
        container_class_name: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Page element.
         * @see {@link $$GlideRecord.sp_page}
         */
        sp_page: $$GlideElement.sp_page;
 
        /**
         * "Move to header" element.
         */
        subheader: GlideElementBoolean;
 
        /**
         * "Screen reader title" element.
         */
        title: GlideElement;
 
        /**
         * Width element.
         */
        width: GlideElement;
    }
 
    /**
     * "AI Search Search Profile" glide record fields.
     * @see {@link $$GlideElement.ais_search_profile}
     * @see {@link $$GlideRecord.ais_search_profile}
     */
    export interface ais_search_profile extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Genius result assembly" element.
         */
        genius_result_assembly: GlideElement;
 
        /**
         * Label element.
         */
        label: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Publish ID" element.
         */
        publish_id: GlideElement;
 
        /**
         * State element.
         */
        state: GlideElement;
    }
 
    /**
     * "Script Include" glide record fields.
     * @see {@link $$GlideElement.sys_script_include}
     * @see {@link $$GlideRecord.sys_script_include}
     */
    export interface sys_script_include extends sys_metadata {
        /**
         * "Accessible from" element.
         */
        access: GlideElement;
 
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "API Name" element.
         */
        api_name: GlideElement;
 
        /**
         * "Caller Access" element.
         */
        caller_access: GlideElement;
 
        /**
         * "Client callable" element.
         */
        client_callable: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
    }
 
    /**
     * "Data Policy" glide record fields.
     * @see {@link $$GlideElement.sys_data_policy2}
     * @see {@link $$GlideRecord.sys_data_policy2}
     */
    export interface sys_data_policy2 extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Apply to import sets" element.
         */
        apply_import_set: GlideElementBoolean;
 
        /**
         * "Apply to SOAP" element.
         */
        apply_soap: GlideElementBoolean;
 
        /**
         * Conditions element.
         */
        conditions: GlideElementConditions;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Use as UI Policy on client" element.
         */
        enforce_ui: GlideElementBoolean;
 
        /**
         * Inherit element.
         */
        inherit: GlideElementBoolean;
 
        /**
         * "Model ID" element.
         */
        model_id: GlideElementDocumentId;
 
        /**
         * Table element.
         */
        model_table: GlideElement;
 
        /**
         * "Reverse if false" element.
         */
        reverse_if_false: GlideElementBoolean;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Overrides element.
         * @see {@link $$GlideRecord.sys_data_policy2}
         */
        sys_overrides: $$GlideElement.sys_data_policy2;
    }
 
    /**
     * "Stage State" glide record fields.
     * @see {@link $$GlideElement.stage_state}
     * @see {@link $$GlideRecord.stage_state}
     */
    export interface stage_state extends IBaseRecord {
        /**
         * "Stage renderer" element.
         * @see {@link $$GlideRecord.column_renderer}
         */
        column_renderer: $$GlideElement.column_renderer;
 
        /**
         * Field element.
         */
        field: GlideElement;
 
        /**
         * ID element.
         */
        id: GlideElementDocumentId;
 
        /**
         * "Stage Status" element.
         */
        stage_status: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
    }
 
    /**
     * "Stockroom Type" glide record fields.
     * @see {@link $$GlideElement.alm_stockroom_type}
     * @see {@link $$GlideRecord.alm_stockroom_type}
     */
    export interface alm_stockroom_type extends IBaseRecord {
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "External stockroom" element.
         */
        external: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Priority element.
         */
        priority: GlideElementNumeric;
 
        /**
         * "Shipment required" element.
         */
        shipment_required: GlideElementBoolean;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Value element.
         */
        value: GlideElement;
    }
 
    /**
     * Category glide record fields.
     * @see {@link $$GlideElement.sc_category}
     * @see {@link $$GlideRecord.sc_category}
     */
    export interface sc_category extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * "Entitlement script" element.
         */
        entitlement_script: GlideElementScript;
 
        /**
         * "Header icon" element.
         */
        header_icon: GlideElementUserImage;
 
        /**
         * "Homepage image" element.
         */
        homepage_image: GlideElementUserImage;
 
        /**
         * "Homepage renderer" element.
         * @see {@link $$GlideRecord.sc_homepage_renderer}
         */
        homepage_renderer: $$GlideElement.sc_homepage_renderer;
 
        /**
         * Icon element.
         */
        icon: GlideElementUserImage;
 
        /**
         * Image element.
         */
        image: GlideElement;
 
        /**
         * Location element.
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Hide description (classic mobile browsing)" element.
         */
        mobile_hide_description: GlideElementBoolean;
 
        /**
         * "Classic Mobile Picture" element.
         */
        mobile_picture: GlideElementUserImage;
 
        /**
         * "Mobile Subcategory Render Type" element.
         */
        mobile_subcategory_render_type: GlideElement;
 
        /**
         * "Module link" element.
         * @see {@link $$GlideRecord.sys_app_module}
         */
        module: $$GlideElement.sys_app_module;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.sc_category}
         */
        parent: $$GlideElement.sc_category;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * Catalog element.
         * @see {@link $$GlideRecord.sc_catalog}
         */
        sc_catalog: $$GlideElement.sc_catalog;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedText;
    }
 
    /**
     * Module glide record fields.
     * @see {@link $$GlideElement.sys_app_module}
     * @see {@link $$GlideRecord.sys_app_module}
     */
    export interface sys_app_module extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Application menu" element.
         * @see {@link $$GlideRecord.sys_app_application}
         */
        application: $$GlideElement.sys_app_application;
 
        /**
         * Assessment element.
         * @see {@link $$GlideRecord.asmt_metric_type}
         */
        assessment: $$GlideElement.asmt_metric_type;
 
        /**
         * "Device type" element.
         */
        device_type: GlideElement;
 
        /**
         * Filter element.
         */
        filter: GlideElementConditions;
 
        /**
         * Hint element.
         */
        hint: GlideElementTranslatedField;
 
        /**
         * Homepage element.
         * @see {@link $$GlideRecord.sys_portal_page}
         */
        homepage: $$GlideElement.sys_portal_page;
 
        /**
         * "Image (UI11)" element.
         */
        image: GlideElement;
 
        /**
         * "Link type" element.
         */
        link_type: GlideElement;
 
        /**
         * "Map page" element.
         * @see {@link $$GlideRecord.cmn_map_page}
         */
        map_page: $$GlideElement.cmn_map_page;
 
        /**
         * "Mobile title" element.
         */
        mobile_title: GlideElementTranslatedField;
 
        /**
         * "Mobile view name" element.
         */
        mobile_view_name: GlideElement;
 
        /**
         * Table element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Override application menu roles" element.
         */
        override_menu_roles: GlideElementBoolean;
 
        /**
         * Arguments element.
         */
        query: GlideElement;
 
        /**
         * Report element.
         * @see {@link $$GlideRecord.sys_report}
         */
        report: $$GlideElement.sys_report;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Overrides element.
         * @see {@link $$GlideRecord.sys_app_module}
         */
        sys_overrides: $$GlideElement.sys_app_module;
 
        /**
         * "Timeline page" element.
         * @see {@link $$GlideRecord.cmn_timeline_page}
         */
        timeline_page: $$GlideElement.cmn_timeline_page;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedField;
 
        /**
         * "Uncancelable by Other Modules" element.
         */
        uncancelable: GlideElementBoolean;
 
        /**
         * "View name" element.
         */
        view_name: GlideElement;
 
        /**
         * "Window name" element.
         */
        window_name: GlideElement;
    }

    /**
     * "Timeline Page" glide record fields.
     * @see {@link $$GlideElement.cmn_timeline_page}
     * @see {@link $$GlideRecord.cmn_timeline_page}
     */
    export interface cmn_timeline_page extends sys_metadata {
        /**
         * "Allow start time dragging" element.
         */
        allow_drag_left: GlideElementBoolean;
 
        /**
         * "Allow end time dragging" element.
         */
        allow_drag_right: GlideElementBoolean;
 
        /**
         * "Allow horizontal moving" element.
         */
        allow_dragging: GlideElementBoolean;
 
        /**
         * "Auto refresh" element.
         */
        auto_refresh: GlideElement;
 
        /**
         * Condition element.
         */
        condition: GlideElementConditions;
 
        /**
         * "CSS span color" element.
         */
        css_span_color: GlideElement;
 
        /**
         * "End date field" element.
         */
        end_date_field: GlideElement;
 
        /**
         * "Span text fields" element.
         */
        labels: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedField;
 
        /**
         * "Perform custom sort" element.
         */
        perform_custom_sort: GlideElementBoolean;
 
        /**
         * "Range calculator" element.
         * @see {@link $$GlideRecord.sys_script_include}
         */
        range_calculator: $$GlideElement.sys_script_include;
 
        /**
         * "Show grid lines" element.
         */
        show_grid_lines: GlideElementBoolean;
 
        /**
         * "Show left pane" element.
         */
        show_left_pane: GlideElementBoolean;
 
        /**
         * "Show span text" element.
         */
        show_span_text: GlideElementBoolean;
 
        /**
         * "Show summary pane" element.
         */
        show_summary_pane: GlideElementBoolean;
 
        /**
         * "Show tooltips" element.
         */
        show_tooltips: GlideElementBoolean;
 
        /**
         * "Sort by" element.
         */
        sort_by: GlideElement;
 
        /**
         * "Sort by order" element.
         */
        sort_by_order: GlideElement;
 
        /**
         * "Start date field" element.
         */
        start_date_field: GlideElement;
 
        /**
         * Suffix element.
         */
        suffix: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * "Tooltip text fields" element.
         */
        tooltip_label: GlideElement;
    }
 
    /**
     * "Catalog Renderer" glide record fields.
     * @see {@link $$GlideElement.sc_renderer}
     * @see {@link $$GlideRecord.sc_renderer}
     */
    export interface sc_renderer extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
    }
 
    /**
     * "Homepage Category Renderer" glide record fields.
     * @see {@link $$GlideElement.sc_homepage_renderer}
     * @see {@link $$GlideRecord.sc_homepage_renderer}
     */
    export interface sc_homepage_renderer extends sc_renderer {
        /**
         * Macro element.
         * @see {@link $$GlideRecord.sys_ui_macro}
         */
        macro: $$GlideElement.sys_ui_macro;
 
        /**
         * "Render title" element.
         */
        render_title: GlideElementBoolean;
    }
 
    /**
     * Report glide record fields.
     * @see {@link $$GlideElement.sys_report}
     * @see {@link $$GlideRecord.sys_report}
     */
    export interface sys_report extends sys_metadata {
        /**
         * "Additional Group By" element.
         */
        additional_groupby: GlideElement;
 
        /**
         * Aggregate element.
         */
        aggregate: GlideElement;
 
        /**
         * "Aggregation Source" element.
         */
        aggregation_source: GlideElement;
 
        /**
         * "Allow data label overlap" element.
         */
        allow_data_label_overlap: GlideElementBoolean;
 
        /**
         * "Apply aliases" element.
         */
        apply_alias: GlideElementBoolean;
 
        /**
         * "Axis max color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        axis_max_color: $$GlideElement.sys_report_color;
 
        /**
         * "Axis min color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        axis_min_color: $$GlideElement.sys_report_color;
 
        /**
         * "Bar unstack" element.
         */
        bar_unstack: GlideElementBoolean;
 
        /**
         * Calendar element.
         */
        calendar: GlideElement;
 
        /**
         * "Chart background color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        chart_background_color: $$GlideElement.sys_report_color;
 
        /**
         * "Chart border color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        chart_border_color: $$GlideElement.sys_report_color;
 
        /**
         * "Chart border radius" element.
         */
        chart_border_radius: GlideElementNumeric;
 
        /**
         * "Chart border width" element.
         */
        chart_border_width: GlideElementNumeric;
 
        /**
         * "Chart height" element.
         */
        chart_height: GlideElementNumeric;
 
        /**
         * "Chart size" element.
         */
        chart_size: GlideElement;
 
        /**
         * "Chart subtitle" element.
         */
        chart_subtitle: GlideElement;
 
        /**
         * "Chart subtitle color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        chart_subtitle_color: $$GlideElement.sys_report_color;
 
        /**
         * "Chart subtitle size" element.
         */
        chart_subtitle_size: GlideElementNumeric;
 
        /**
         * "Chart subtitle style" element.
         */
        chart_subtitle_style: GlideElement;
 
        /**
         * "Chart title" element.
         */
        chart_title: GlideElement;
 
        /**
         * "Chart title color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        chart_title_color: $$GlideElement.sys_report_color;
 
        /**
         * "Chart title size" element.
         */
        chart_title_size: GlideElementNumeric;
 
        /**
         * "Chart title style" element.
         */
        chart_title_style: GlideElement;
 
        /**
         * "Chart title x position" element.
         */
        chart_title_x_position: GlideElementNumeric;
 
        /**
         * "Chart title y position" element.
         */
        chart_title_y_position: GlideElementNumeric;
 
        /**
         * "Chart width" element.
         */
        chart_width: GlideElementNumeric;
 
        /**
         * "Report Color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        color: $$GlideElement.sys_report_color;
 
        /**
         * "Color palette" element.
         * @see {@link $$GlideRecord.pa_chart_color_schemes}
         */
        color_palette: $$GlideElement.pa_chart_color_schemes;
 
        /**
         * "Report Colors" element.
         */
        colors: GlideElement;
 
        /**
         * Column element.
         */
        column: GlideElement;
 
        /**
         * Percentages element.
         */
        compute_percent: GlideElement;
 
        /**
         * Content element.
         * Type: HTML (html); Scalar length: undefined
         */
        content: GlideElementGlideObject;
 
        /**
         * "Created by user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        created_by_user: $$GlideElement.sys_user;
 
        /**
         * "Custom chart size" element.
         */
        custom_chart_size: GlideElementBoolean;
 
        /**
         * "Custom chart title position" element.
         */
        custom_chart_title_position: GlideElementBoolean;
 
        /**
         * "Custom config" element.
         */
        custom_config: GlideElement;
 
        /**
         * "Decimal precision" element.
         */
        decimal_precision: GlideElementNumeric;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Direction element.
         */
        direction: GlideElement;
 
        /**
         * "Display column lines" element.
         */
        display_column_lines: GlideElementBoolean;
 
        /**
         * "Display grid" element.
         */
        display_grid: GlideElementBoolean;
 
        /**
         * "Display row lines" element.
         */
        display_row_lines: GlideElementBoolean;
 
        /**
         * "Donut width percent" element.
         */
        donut_width_percent: GlideElementNumeric;
 
        /**
         * "End time" element.
         */
        end_time: GlideElement;
 
        /**
         * "Export report details" element.
         */
        exp_report_attrs: GlideElementBoolean;
 
        /**
         * "Field Name" element.
         */
        field: GlideElement;
 
        /**
         * "Select fields for list" element.
         */
        field_list: GlideElement;
 
        /**
         * Filter element.
         */
        filter: GlideElementConditions;
 
        /**
         * "Formatting configuration" element.
         */
        formatting_configuration: GlideElement;
 
        /**
         * From element.
         */
        from: GlideElementNumeric;
 
        /**
         * "Funnel neck percent" element.
         */
        funnel_neck_percent: GlideElementNumeric;
 
        /**
         * "Gauge autoscale" element.
         */
        gauge_autoscale: GlideElementBoolean;
 
        /**
         * Group element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;
 
        /**
         * "Import table" element.
         * @see {@link $$GlideRecord.sys_report_import_table}
         */
        import_table: $$GlideElement.sys_report_import_table;
 
        /**
         * Interval element.
         */
        interval: GlideElement;
 
        /**
         * "Is published" element.
         */
        is_published: GlideElementBoolean;
 
        /**
         * "Is real time" element.
         */
        is_real_time: GlideElementBoolean;
 
        /**
         * "Is scheduled" element.
         */
        is_scheduled: GlideElementBoolean;
 
        /**
         * "Legend align columns" element.
         */
        legend_align_columns: GlideElementBoolean;
 
        /**
         * "Legend background color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        legend_background_color: $$GlideElement.sys_report_color;
 
        /**
         * "Legend border color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        legend_border_color: $$GlideElement.sys_report_color;
 
        /**
         * "Legend border radius" element.
         */
        legend_border_radius: GlideElementNumeric;
 
        /**
         * "Legend border width" element.
         */
        legend_border_width: GlideElementNumeric;
 
        /**
         * "Legend horizontal alignment" element.
         */
        legend_horizontal_alignment: GlideElement;
 
        /**
         * "Legend items left align" element.
         */
        legend_items_left_align: GlideElementBoolean;
 
        /**
         * "Legend vertical alignment" element.
         */
        legend_vertical_alignment: GlideElement;
 
        /**
         * "List UI view" element.
         * @see {@link $$GlideRecord.sys_ui_view}
         */
        list_ui_view: $$GlideElement.sys_ui_view;
 
        /**
         * "Location Field Name" element.
         */
        location_field: GlideElement;
 
        /**
         * "Lower limit" element.
         */
        lower_limit: GlideElementNumeric;
 
        /**
         * Map element.
         * @see {@link $$GlideRecord.sys_report_map}
         */
        map: $$GlideElement.sys_report_map;
 
        /**
         * "Map Location" element.
         * @see {@link $$GlideRecord.sys_report_map_source}
         */
        map_source: $$GlideElement.sys_report_map_source;
 
        /**
         * "Select fields for orderBy" element.
         */
        orderby_list: GlideElement;
 
        /**
         * "Other threshold" element.
         */
        other_threshold: GlideElementNumeric;
 
        /**
         * Others element.
         */
        others: GlideElement;
 
        /**
         * "Page hdrftr" element.
         * @see {@link $$GlideRecord.sys_report_page_hdrftr}
         */
        page_hdrftr: $$GlideElement.sys_report_page_hdrftr;
 
        /**
         * "Pivot expanded" element.
         */
        pivot_expanded: GlideElementBoolean;
 
        /**
         * "Report drilldown" element.
         * @see {@link $$GlideRecord.sys_report_drill}
         */
        report_drilldown: $$GlideElement.sys_report_drill;
 
        /**
         * "Report source" element.
         * @see {@link $$GlideRecord.sys_report_source}
         */
        report_source: $$GlideElement.sys_report_source;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * Row element.
         */
        row: GlideElement;
 
        /**
         * "Service Catalog Group By Item Id" element.
         */
        sc_groupby_item_id: GlideElement;
 
        /**
         * "Service Catalog Group By Variable Id" element.
         */
        sc_groupby_variable_id: GlideElement;
 
        /**
         * "Service Catalog Stack By Item Id" element.
         */
        sc_stackby_item_id: GlideElement;
 
        /**
         * "Service Catalog Stack By Variable Id" element.
         */
        sc_stackby_variable_id: GlideElement;
 
        /**
         * "Score color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        score_color: $$GlideElement.sys_report_color;
 
        /**
         * "Series name text" element.
         */
        series_name_text: GlideElement;
 
        /**
         * "Chart color" element.
         */
        set_color: GlideElement;
 
        /**
         * "Show chart border" element.
         */
        show_chart_border: GlideElementBoolean;
 
        /**
         * "Show chart data label" element.
         */
        show_chart_data_label: GlideElementBoolean;
 
        /**
         * "Show chart title" element.
         */
        show_chart_title: GlideElement;
 
        /**
         * "Show chart total" element.
         */
        show_chart_total: GlideElementBoolean;
 
        /**
         * "Show data label position middle" element.
         */
        show_data_label_position_middle: GlideElementBoolean;
 
        /**
         * "Show empty" element.
         */
        show_empty: GlideElementBoolean;
 
        /**
         * "Show geographical label" element.
         */
        show_geographical_label: GlideElementBoolean;
 
        /**
         * "Show legend" element.
         */
        show_legend: GlideElementBoolean;
 
        /**
         * "Show legend border" element.
         */
        show_legend_border: GlideElementBoolean;
 
        /**
         * "Show marker" element.
         */
        show_marker: GlideElementBoolean;
 
        /**
         * "Show zero" element.
         */
        show_zero: GlideElementBoolean;
 
        /**
         * "Source type" element.
         */
        source_type: GlideElement;
 
        /**
         * "Start time" element.
         */
        start_time: GlideElement;
 
        /**
         * "Style config" element.
         */
        style_config: GlideElement;
 
        /**
         * Sumfield element.
         */
        sumfield: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * Title element.
         */
        title: GlideElement;
 
        /**
         * "Title horizontal alignment" element.
         */
        title_horizontal_alignment: GlideElement;
 
        /**
         * "Title vertical alignment" element.
         */
        title_vertical_alignment: GlideElement;
 
        /**
         * To element.
         */
        to: GlideElementNumeric;
 
        /**
         * "Trend Field" element.
         */
        trend_field: GlideElement;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "Upper limit" element.
         */
        upper_limit: GlideElementNumeric;
 
        /**
         * "Use color heatmap" element.
         */
        use_color_heatmap: GlideElementBoolean;
 
        /**
         * "Use null in trend" element.
         */
        use_null_in_trend: GlideElementBoolean;
 
        /**
         * User element.
         */
        user: GlideElement;
 
        /**
         * "X axis allow decimals" element.
         */
        x_axis_allow_decimals: GlideElementBoolean;
 
        /**
         * "X axis display grid" element.
         */
        x_axis_display_grid: GlideElementBoolean;
 
        /**
         * "X axis grid color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        x_axis_grid_color: $$GlideElement.sys_report_color;
 
        /**
         * "X axis grid dotted" element.
         */
        x_axis_grid_dotted: GlideElementBoolean;
 
        /**
         * "X axis grid width" element.
         */
        x_axis_grid_width: GlideElementNumeric;
 
        /**
         * "X axis label bold" element.
         */
        x_axis_label_bold: GlideElementBoolean;
 
        /**
         * "X axis label color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        x_axis_label_color: $$GlideElement.sys_report_color;
 
        /**
         * "X axis label size" element.
         */
        x_axis_label_size: GlideElementNumeric;
 
        /**
         * "Label tilt" element.
         */
        x_axis_label_tilt: GlideElement;
 
        /**
         * "X axis opposite" element.
         */
        x_axis_opposite: GlideElementBoolean;
 
        /**
         * "X axis title" element.
         */
        x_axis_title: GlideElement;
 
        /**
         * "X axis title bold" element.
         */
        x_axis_title_bold: GlideElementBoolean;
 
        /**
         * "X axis title color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        x_axis_title_color: $$GlideElement.sys_report_color;
 
        /**
         * "X axis title size" element.
         */
        x_axis_title_size: GlideElementNumeric;
 
        /**
         * "Y axis allow decimals" element.
         */
        y_axis_allow_decimals: GlideElementBoolean;
 
        /**
         * "Y axis display grid" element.
         */
        y_axis_display_grid: GlideElementBoolean;
 
        /**
         * "Y axis from" element.
         */
        y_axis_from: GlideElementNumeric;
 
        /**
         * "Y axis grid color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        y_axis_grid_color: $$GlideElement.sys_report_color;
 
        /**
         * "Y axis grid dotted" element.
         */
        y_axis_grid_dotted: GlideElementBoolean;
 
        /**
         * "Y axis grid width" element.
         */
        y_axis_grid_width: GlideElementNumeric;
 
        /**
         * "Y axis label bold" element.
         */
        y_axis_label_bold: GlideElementBoolean;
 
        /**
         * "Y axis label color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        y_axis_label_color: $$GlideElement.sys_report_color;
 
        /**
         * "Y axis label size" element.
         */
        y_axis_label_size: GlideElementNumeric;
 
        /**
         * "Y axis label tilt" element.
         */
        y_axis_label_tilt: GlideElement;
 
        /**
         * "Y axis opposite" element.
         */
        y_axis_opposite: GlideElementBoolean;
 
        /**
         * "Y axis title" element.
         */
        y_axis_title: GlideElement;
 
        /**
         * "Y axis title bold" element.
         */
        y_axis_title_bold: GlideElementBoolean;
 
        /**
         * "Y axis title color" element.
         * @see {@link $$GlideRecord.sys_report_color}
         */
        y_axis_title_color: $$GlideElement.sys_report_color;
 
        /**
         * "Y axis title size" element.
         */
        y_axis_title_size: GlideElementNumeric;
 
        /**
         * "Y axis to" element.
         */
        y_axis_to: GlideElementNumeric;
    }
 
    /**
     * "Flow Block" glide record fields.
     * @see {@link $$GlideElement.sys_hub_flow_block}
     * @see {@link $$GlideRecord.sys_hub_flow_block}
     */
    export interface sys_hub_flow_block extends sys_metadata {
        /**
         * "Label Cache" element.
         */
        label_cache: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Sys overrides" element.
         * @see {@link $$GlideRecord.sys_hub_flow_block}
         */
        sys_overrides: $$GlideElement.sys_hub_flow_block;
    }
 
    /**
     * "Flow Base" glide record fields.
     * @see {@link $$GlideElement.sys_hub_flow_base}
     * @see {@link $$GlideRecord.sys_hub_flow_base}
     */
    export interface sys_hub_flow_base extends sys_hub_flow_block {
        /**
         * "Accessible From" element.
         */
        access: GlideElement;
 
        /**
         * ACLs element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_security_acl}
         */
        acls: $$GlideElement.sys_security_acl;
 
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Annotation element.
         */
        annotation: GlideElementTranslatedText;
 
        /**
         * "Callable by Client API" element.
         */
        callable_by_client_api: GlideElementBoolean;
 
        /**
         * Category element.
         * @see {@link $$GlideRecord.sys_hub_category}
         */
        category: $$GlideElement.sys_hub_category;
 
        /**
         * "Copied from" element.
         */
        copied_from: GlideElement;
 
        /**
         * "Copied from name" element.
         */
        copied_from_name: GlideElement;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * "Internal name" element.
         */
        internal_name: GlideElement;
 
        /**
         * "Natural Language Title" element.
         */
        natlang: GlideElement;
 
        /**
         * Outputs element.
         * @see {@link $$GlideRecord.sys_hub_flow_output}
         */
        outputs: $$GlideElement.sys_hub_flow_output;
 
        /**
         * "Remote trigger ID" element.
         */
        remote_trigger_id: GlideElement;
 
        /**
         * "Run As" element.
         */
        run_as: GlideElement;
 
        /**
         * "Run flow with roles" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user_role}
         */
        run_with_roles: $$GlideElement.sys_user_role;
 
        /**
         * "Sc callable" element.
         */
        sc_callable: GlideElementBoolean;
 
        /**
         * Status element.
         */
        status: GlideElement;
 
        /**
         * "Flow Type" element.
         */
        type: GlideElement;
    }
 
    /**
     * Flow glide record fields.
     * @see {@link $$GlideElement.sys_hub_flow}
     * @see {@link $$GlideRecord.sys_hub_flow}
     */
    export interface sys_hub_flow extends sys_hub_flow_base {
        /**
         * "Compiler build" element.
         */
        compiler_build: GlideElement;
 
        /**
         * "Latest snapshot" element.
         */
        latest_snapshot: GlideElement;
 
        /**
         * "Main snapshot" element.
         */
        master_snapshot: GlideElement;
 
        /**
         * "Pre-Compiled" element.
         */
        pre_compiled: GlideElementBoolean;
 
        /**
         * "Show draft actions" element.
         */
        show_draft_actions: GlideElementBoolean;
 
        /**
         * "Show triggered flows" element.
         */
        show_triggered_flows: GlideElementBoolean;
    }
 
    /**
     * "Action Category" glide record fields.
     * @see {@link $$GlideElement.sys_hub_category}
     * @see {@link $$GlideRecord.sys_hub_category}
     */
    export interface sys_hub_category extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
    }
 
    /**
     * "Color Definition" glide record fields.
     * @see {@link $$GlideElement.sys_report_color}
     * @see {@link $$GlideRecord.sys_report_color}
     */
    export interface sys_report_color extends sys_metadata {
        /**
         * Color element.
         */
        color: GlideElement;
 
        /**
         * Display element.
         */
        display: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Themeable color" element.
         * @see {@link $$GlideRecord.sys_ux_theme_property}
         */
        themeable_color: $$GlideElement.sys_ux_theme_property;
    }

    /**
     * "Access Control" glide record fields.
     * @see {@link $$GlideElement.sys_security_acl}
     * @see {@link $$GlideRecord.sys_security_acl}
     */
    export interface sys_security_acl extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Admin overrides" element.
         */
        admin_overrides: GlideElementBoolean;
 
        /**
         * Advanced element.
         */
        advanced: GlideElementBoolean;
 
        /**
         * Condition element.
         */
        condition: GlideElementConditions;
 
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Operation element.
         * @see {@link $$GlideRecord.sys_security_operation}
         */
        operation: $$GlideElement.sys_security_operation;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
 
        /**
         * Type element.
         * @see {@link $$GlideRecord.sys_security_type}
         */
        type: $$GlideElement.sys_security_type;
    }
 
    /**
     * "Flow Outputs" glide record fields.
     * @see {@link $$GlideElement.sys_hub_flow_output}
     * @see {@link $$GlideRecord.sys_hub_flow_output}
     */
    export interface sys_hub_flow_output extends var_dictionary {
        /**
         * Model element.
         * @see {@link $$GlideRecord.sys_hub_flow_base}
         */
        model: $$GlideElement.sys_hub_flow_base;
    }
 
    /**
     * "UX Theme Property" glide record fields.
     * @see {@link $$GlideElement.sys_ux_theme_property}
     * @see {@link $$GlideRecord.sys_ux_theme_property}
     */
    export interface sys_ux_theme_property extends sys_metadata {
        /**
         * "CSS custom property" element.
         */
        custom_property: GlideElement;
 
        /**
         * "Default value" element.
         */
        default_value: GlideElement;
 
        /**
         * "Display name" element.
         */
        display_name: GlideElement;
 
        /**
         * Inherits element.
         * @see {@link $$GlideRecord.sys_ux_theme_property}
         */
        inherits: $$GlideElement.sys_ux_theme_property;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Namespace element.
         */
        namespace: GlideElement;
 
        /**
         * Schema element.
         * @see {@link $$GlideRecord.sys_ux_theme_property_schema}
         */
        schema: $$GlideElement.sys_ux_theme_property_schema;
 
        /**
         * "SCSS variable" element.
         */
        variable: GlideElement;
    }
 
    /**
     * "UX Theme Property Schema" glide record fields.
     * @see {@link $$GlideElement.sys_ux_theme_property_schema}
     * @see {@link $$GlideRecord.sys_ux_theme_property_schema}
     */
    export interface sys_ux_theme_property_schema extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElement;
    }
 
    /**
     * "Ordered Item Link" glide record fields.
     * @see {@link $$GlideElement.sc_ordered_item_link}
     * @see {@link $$GlideRecord.sc_ordered_item_link}
     */
    export interface sc_ordered_item_link extends sys_metadata {
        /**
         * "Link text" element.
         */
        link_text: GlideElement;
 
        /**
         * "Link URL" element.
         */
        link_url: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Target element.
         */
        target: GlideElement;
    }
 
    /**
     * Item glide record fields.
     * @see {@link $$GlideElement.sc_ic_item_staging}
     * @see {@link $$GlideRecord.sc_ic_item_staging}
     */
    export interface sc_ic_item_staging extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Approval definitions changed" element.
         */
        aprvl_defn_changed: GlideElementBoolean;
 
        /**
         * Availability element.
         */
        availability: GlideElement;
 
        /**
         * "One off cost" element.
         */
        cost: GlideElementPrice;
 
        /**
         * "Edit Counter" element.
         */
        counter: GlideElementNumeric;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedHTML;
 
        /**
         * "Desktop image" element.
         */
        desktop_image: GlideElementUserImage;
 
        /**
         * Entitlements element.
         */
        entitlements: GlideElement;
 
        /**
         * "Fulfillment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        fulfillment_group: $$GlideElement.sys_user_group;
 
        /**
         * "Fulfillment user" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        fulfillment_user: $$GlideElement.sys_user;
 
        /**
         * "Item type" element.
         */
        item_type: GlideElement;
 
        /**
         * "Layout changed" element.
         */
        layout_changed: GlideElementBoolean;
 
        /**
         * "Mobile image" element.
         */
        mobile_image: GlideElementUserImage;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Recurring cost" element.
         */
        recurring_cost: GlideElementPrice;
 
        /**
         * "Recurring cost frequency" element.
         */
        recurring_frequency: GlideElement;
 
        /**
         * "Published item" element.
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
 
        /**
         * Catalogs element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sc_catalog}
         */
        sc_catalogs: $$GlideElement.sc_catalog;
 
        /**
         * Categories element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sc_category}
         */
        sc_categories: $$GlideElement.sc_category;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * State element.
         */
        state: GlideElement;
 
        /**
         * "Submission message" element.
         */
        submission_message: GlideElementTranslatedText;
 
        /**
         * "Table name" element.
         */
        table_name: GlideElement;
 
        /**
         * "Task definitions changed" element.
         */
        task_defn_changed: GlideElementBoolean;
 
        /**
         * "Variables definition changed" element.
         */
        var_defn_changed: GlideElementBoolean;
 
        /**
         * "Variables meta changed" element.
         */
        var_meta_changed: GlideElementBoolean;
 
        /**
         * Version element.
         */
        version: GlideElement;
 
        /**
         * Workflow element.
         */
        workflow: GlideElement;
    }
 
    /**
     * "Catalog Template" glide record fields.
     * @see {@link $$GlideElement.sc_template}
     * @see {@link $$GlideRecord.sc_template}
     */
    export interface sc_template extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Available for" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.user_criteria}
         */
        available_for: $$GlideElement.user_criteria;
 
        /**
         * "Catalog item" element.
         * @see {@link $$GlideRecord.sc_cat_item}
         */
        cat_item: $$GlideElement.sc_cat_item;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElementTranslatedText;
 
        /**
         * "Use template scope for creating records" element.
         */
        use_template_scope: GlideElementBoolean;
    }
 
    /**
     * Topic glide record fields.
     * @see {@link $$GlideElement.topic}
     * @see {@link $$GlideRecord.topic}
     */
    export interface topic extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Apply template to child topics" element.
         */
        apply_to_child_topics: GlideElementBoolean;
 
        /**
         * "Banner Image" element.
         */
        banner_image: GlideElementUserImage;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * Icon element.
         */
        icon: GlideElementUserImage;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Parent topic" element.
         * @see {@link $$GlideRecord.topic}
         */
        parent_topic: $$GlideElement.topic;
 
        /**
         * Taxonomy element.
         * @see {@link $$GlideRecord.taxonomy}
         */
        taxonomy: $$GlideElement.taxonomy;
 
        /**
         * Template element.
         * @see {@link $$GlideRecord.sp_page}
         */
        template: $$GlideElement.sp_page;
 
        /**
         * "Topic based navigation" element.
         */
        topic_based_navigation: GlideElementBoolean;
 
        /**
         * "Topic contributor" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.user_criteria}
         */
        topic_contributor: $$GlideElement.user_criteria;
 
        /**
         * "Topic manager" element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.user_criteria}
         */
        topic_manager: $$GlideElement.user_criteria;
 
        /**
         * "Topic path" element.
         */
        topic_path: GlideElementTranslatedText;
    }
 
    /**
     * Taxonomy glide record fields.
     * @see {@link $$GlideElement.taxonomy}
     * @see {@link $$GlideRecord.taxonomy}
     */
    export interface taxonomy extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * Managers element.
         * @see {@link $$GlideRecord.user_criteria}
         */
        managers: $$GlideElement.user_criteria;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
    }

    /**
     * Operation glide record fields.
     * @see {@link $$GlideElement.sys_security_operation}
     * @see {@link $$GlideRecord.sys_security_operation}
     */
    export interface sys_security_operation extends sys_metadata {
        /**
         * Description element.
         */
        description: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
    }
 
    /**
     * Type glide record fields.
     * @see {@link $$GlideElement.sys_security_type}
     * @see {@link $$GlideRecord.sys_security_type}
     */
    export interface sys_security_type extends sys_metadata {
        /**
         * Description element.
         */
        description: GlideElement;
    }
 
    /**
     * "User Criteria" glide record fields.
     * @see {@link $$GlideElement.user_criteria}
     * @see {@link $$GlideRecord.user_criteria}
     */
    export interface user_criteria extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Advanced element.
         */
        advanced: GlideElementBoolean;
 
        /**
         * Companies element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.core_company}
         */
        company: $$GlideElement.core_company;
 
        /**
         * Departments element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.cmn_department}
         */
        department: $$GlideElement.cmn_department;
 
        /**
         * Groups element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;
 
        /**
         * Locations element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.cmn_location}
         */
        location: $$GlideElement.cmn_location;
 
        /**
         * "Match All" element.
         */
        match_all: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Roles element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user_role}
         */
        role: $$GlideElement.sys_user_role;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Users element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        user: $$GlideElement.sys_user;
    }
 
    /**
     * Template glide record fields.
     * @see {@link $$GlideElement.sys_template}
     * @see {@link $$GlideRecord.sys_template}
     */
    export interface sys_template extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Global element.
         */
        global: GlideElementBoolean;
 
        /**
         * Group element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;
 
        /**
         * Groups element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user_group}
         */
        groups: $$GlideElement.sys_user_group;
 
        /**
         * "Link element" element.
         */
        link_element: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * "Next Related Template" element.
         * @see {@link $$GlideRecord.sys_template}
         */
        next: $$GlideElement.sys_template;
 
        /**
         * "Next Related Child Template" element.
         * @see {@link $$GlideRecord.sys_template}
         */
        next_child: $$GlideElement.sys_template;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * "Show on template bar" element.
         */
        show_on_template_bar: GlideElementBoolean;
 
        /**
         * "Stand alone" element.
         */
        stand_alone: GlideElementBoolean;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * Template element.
         */
        template: GlideElementWorkflowConditions;
 
        /**
         * User element.
         * @see {@link $$GlideRecord.sys_user}
         */
        user: $$GlideElement.sys_user;
 
        /**
         * View element.
         */
        view: GlideElement;
    }
 
    /**
     * "Map Page" glide record fields.
     * @see {@link $$GlideElement.cmn_map_page}
     * @see {@link $$GlideRecord.cmn_map_page}
     */
    export interface cmn_map_page extends sys_metadata {
        /**
         * "Center map on" element.
         */
        center_address: GlideElement;
 
        /**
         * "Center latitude" element.
         */
        center_latitude: GlideElement;
 
        /**
         * "Center longitude" element.
         */
        center_longitude: GlideElement;
 
        /**
         * "Controls size" element.
         */
        controls_size: GlideElement;
 
        /**
         * "Coordinates retrieved on" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        coordinates_retrieved_on: GlideElementGlideObject;
 
        /**
         * "Disabled Map Controls" element.
         * Type: List (glide_list); Scalar length: undefined
         */
        disable_map_controls: GlideElementGlideObject;
 
        /**
         * "Disable nav bar" element.
         */
        disable_nav_bar: GlideElementBoolean;
 
        /**
         * Filter element.
         * @see {@link $$GlideRecord.cmn_map_filter}
         */
        filter: $$GlideElement.cmn_map_filter;
 
        /**
         * "Initial zoom" element.
         */
        initial_zoom: GlideElementNumeric;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedField;
 
        /**
         * "Map overview" element.
         */
        overview: GlideElementBoolean;
 
        /**
         * "Refresh on zoom" element.
         */
        refresh_on_zoom: GlideElementBoolean;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
 
        /**
         * "Show device location" element.
         */
        show_device_location: GlideElementBoolean;
 
        /**
         * Suffix element.
         */
        suffix: GlideElement;
 
        /**
         * Type element.
         */
        type: GlideElement;
 
        /**
         * "Type selection" element.
         */
        type_selection: GlideElement;
 
        /**
         * "Use advanced configuration" element.
         */
        use_advanced_configuration: GlideElementBoolean;
    }
 
    /**
     * "Map Item" glide record fields.
     * @see {@link $$GlideElement.cmn_map_item}
     * @see {@link $$GlideRecord.cmn_map_item}
     */
    export interface cmn_map_item extends sys_metadata {
        /**
         * Name element.
         */
        name: GlideElementTranslatedField;
    }
 
    /**
     * "Map Page Filter" glide record fields.
     * @see {@link $$GlideElement.cmn_map_filter}
     * @see {@link $$GlideRecord.cmn_map_filter}
     */
    export interface cmn_map_filter extends cmn_map_item {
    }
 
    /**
     * "Portal Page" glide record fields.
     * @see {@link $$GlideElement.sys_portal_page}
     * @see {@link $$GlideRecord.sys_portal_page}
     */
    export interface sys_portal_page extends sys_metadata {
        /**
         * Layout element.
         * @see {@link $$GlideRecord.sys_ui_macro}
         */
        layout: $$GlideElement.sys_ui_macro;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Read roles" element.
         */
        read_roles: GlideElement;
 
        /**
         * "Write roles" element.
         */
        roles: GlideElement;
 
        /**
         * Selectable element.
         */
        selectable: GlideElementBoolean;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Overrides element.
         * @see {@link $$GlideRecord.sys_portal_page}
         */
        sys_overrides: $$GlideElement.sys_portal_page;
 
        /**
         * Title element.
         */
        title: GlideElementTranslatedField;
 
        /**
         * User element.
         * @see {@link $$GlideRecord.sys_user}
         */
        user: $$GlideElement.sys_user;
 
        /**
         * View element.
         */
        view: GlideElement;
    }
 
    /**
     * "Assessment Metric Type" glide record fields.
     * @see {@link $$GlideElement.asmt_metric_type}
     * @see {@link $$GlideRecord.asmt_metric_type}
     */
    export interface asmt_metric_type extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * "Allow Public" element.
         */
        allow_public: GlideElementBoolean;
 
        /**
         * "Allow retake" element.
         */
        allow_retake: GlideElementBoolean;
 
        /**
         * "Anonymize responses" element.
         */
        anonymize: GlideElementBoolean;
 
        /**
         * "Business rule" element.
         * @see {@link $$GlideRecord.sys_script}
         */
        business_rule: $$GlideElement.sys_script;
 
        /**
         * "Chat Survey" element.
         */
        chat_survey: GlideElementBoolean;
 
        /**
         * Condition element.
         */
        condition: GlideElementConditions;
 
        /**
         * "Default matrix filter" element.
         */
        default_filter: GlideElement;
 
        /**
         * "Deletion business rule" element.
         * @see {@link $$GlideRecord.sys_script}
         */
        delete_business_rule: $$GlideElement.sys_script;
 
        /**
         * Description element.
         */
        description: GlideElementTranslatedText;
 
        /**
         * "Disable UI Action" element.
         * @see {@link $$GlideRecord.sys_ui_action}
         */
        disable_ui_action: $$GlideElement.sys_ui_action;
 
        /**
         * "Display all filters" element.
         */
        display_all_filters: GlideElementBoolean;
 
        /**
         * "Filter field" element.
         */
        display_field: GlideElement;
 
        /**
         * "Assessment duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        duration: GlideElementGlideObject;
 
        /**
         * "Enable UI Action" element.
         * @see {@link $$GlideRecord.sys_ui_action}
         */
        enable_ui_action: $$GlideElement.sys_ui_action;
 
        /**
         * "End note" element.
         */
        end_note: GlideElementTranslatedHTML;
 
        /**
         * "Enforce condition" element.
         */
        enforce_condition: GlideElementBoolean;
 
        /**
         * "Evaluation method" element.
         */
        evaluation_method: GlideElement;
 
        /**
         * "Filter condition" element.
         */
        filter_condition: GlideElementConditions;
 
        /**
         * "Filter table" element.
         */
        filter_table: GlideElement;
 
        /**
         * Introduction element.
         */
        introduction: GlideElementTranslatedHTML;
 
        /**
         * "Scheduled job" element.
         * @see {@link $$GlideRecord.sys_trigger}
         */
        job: $$GlideElement.sys_trigger;
 
        /**
         * "Live feed" element.
         */
        live_feed: GlideElementBoolean;
 
        /**
         * Name element.
         */
        name: GlideElementTranslatedText;
 
        /**
         * "Do not show survey introduction notes" element.
         */
        not_show_intro_note: GlideElementBoolean;
 
        /**
         * "Notify if overdue" element.
         */
        notify_if_overdue: GlideElementBoolean;
 
        /**
         * "Send notifications" element.
         */
        notify_user: GlideElementBoolean;
 
        /**
         * "One Click Survey" element.
         */
        one_click_survey: GlideElementBoolean;
 
        /**
         * "Assessment manager" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        overdue_notify_user: $$GlideElement.sys_user;
 
        /**
         * "Pagination setting for Service Portal view" element.
         */
        portal_pagination: GlideElement;
 
        /**
         * State element.
         */
        publish_state: GlideElement;
 
        /**
         * Roles element.
         */
        roles: GlideElement;
 
        /**
         * "Sample metric" element.
         * @see {@link $$GlideRecord.asmt_metric}
         */
        sample_metric: $$GlideElement.asmt_metric;
 
        /**
         * "Scale factor" element.
         */
        scale_factor: GlideElementNumeric;
 
        /**
         * "Schedule period" element.
         */
        schedule_period: GlideElement;
 
        /**
         * "Schedule type" element.
         */
        schedule_type: GlideElement;
 
        /**
         * "Scoring type" element.
         */
        scoring_type: GlideElement;
 
        /**
         * Signature element.
         * @see {@link $$GlideRecord.asmt_signature}
         */
        signature: $$GlideElement.asmt_signature;
 
        /**
         * "Source table" element.
         */
        source_table: GlideElement;
 
        /**
         * Owners element.
         * Type: List (glide_list); Scalar length: undefined
         * @see {@link $$GlideRecord.sys_user}
         */
        survey_owners: $$GlideElement.sys_user;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * Table element.
         */
        table: GlideElement;
 
        /**
         * "Return URL" element.
         */
        url: GlideElement;
 
        /**
         * "User field" element.
         */
        user_field: GlideElement;
 
        /**
         * "Business rule" element.
         * @see {@link $$GlideRecord.sys_script}
         */
        user_field_business_rule: $$GlideElement.sys_script;
    }
    
    /**
     * "Remote Instance" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_update_set_source}
     * @see {@link $$GlideElement.sys_update_set_source}
     */
    export interface sys_update_set_source extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Instance ID" column element.
         * Read-only: true; Max Length: 40.
         */
        instance_id: GlideElement;
        
        /**
         * "Instance Name" column element.
         * Read-only: true; Max Length: 250.
         */
        instance_name: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Password" column element.
         * Max Length: 255.
         */
        password: GlideElementPassword2;
        
        /**
         * "Short description" column element.
         * Max Length: 200.
         */
        short_description: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "dev".
         */
        type: GlideElement;
        
        /**
         * "URL" column element.
         * Mandatory: true; Max Length: 200.
         */
        url: GlideElementURL;
        
        /**
         * "Username" column element.
         * Max Length: 40.
         */
        username: GlideElement;
    }
    
    /**
     * "Retrieved Update Set" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_remote_update_set}
     * @see {@link $$GlideElement.sys_remote_update_set}
     */
    export interface sys_remote_update_set extends IBaseRecord {
        /**
         * "Application" column element.
         * Max Length: 32.
         */
        application: $$GlideElement.sys_scope;
        
        /**
         * "Application name" column element.
         * Max Length: 100.
         */
        application_name: GlideElement;
        
        /**
         * "Application scope" column element.
         * Max Length: 20.
         */
        application_scope: GlideElement;
        
        /**
         * "Application version" column element.
         * Max Length: 40.
         */
        application_version: GlideElement;
        
        /**
         * "Collisions" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        collisions: GlideElementNumeric;
        
        /**
         * "Commit date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        commit_date: GlideElementGlideObject;
        
        /**
         * "Deleted" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        deleted: GlideElementNumeric;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Inserted" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        inserted: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Origin sys ID" column element.
         * Max Length: 40.
         */
        origin_sys_id: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_remote_update_set;
        
        /**
         * "Release date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        release_date: GlideElementGlideObject;
        
        /**
         * "Remote Batch Base" column element.
         * Max Length: 32.
         */
        remote_base_update_set: $$GlideElement.sys_remote_update_set;
        
        /**
         * "Remote Parent ID" column element.
         * Max Length: 40.
         */
        remote_parent_id: GlideElement;
        
        /**
         * "Remote sys ID" column element.
         * Max Length: 40.
         */
        remote_sys_id: GlideElement;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "loaded".
         */
        state: GlideElement;
        
        /**
         * "Total" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        summary: GlideElementNumeric;
        
        /**
         * "Class" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Update set" column element.
         * Max Length: 32.
         */
        update_set: $$GlideElement.sys_update_set;
        
        /**
         * "Update source" column element.
         * Max Length: 32.
         */
        update_source: $$GlideElement.sys_update_set_source;
        
        /**
         * "Updated" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        updated: GlideElementNumeric;
    }

    /**
     * "Update Set" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_update_set}
     * @see {@link $$GlideElement.sys_update_set}
     */
    export interface sys_update_set extends IBaseRecord {
        /**
         * "Application" column element.
         * Mandatory: true; Max Length: 32.
         */
        application: $$GlideElement.sys_scope;
        
        /**
         * "Batch Base" column element.
         * Read-only: true; Max Length: 32.
         */
        base_update_set: $$GlideElement.sys_update_set;
        
        /**
         * "Completed by" column element.
         * Max Length: 32.
         */
        completed_by: $$GlideElement.sys_user;
        
        /**
         * "Completed on" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        completed_on: GlideElementGlideObject;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Install date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        install_date: GlideElementGlideObject;
        
        /**
         * "Installed from" column element.
         * Max Length: 100.
         */
        installed_from: GlideElement;
        
        /**
         * "Default Set" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_default: GlideElementBoolean;
        
        /**
         * "Merged to" column element.
         * Max Length: 32.
         */
        merged_to: $$GlideElement.sys_update_set;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Origin sys ID" column element.
         * Max Length: 40.
         */
        origin_sys_id: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_update_set;
        
        /**
         * "Release date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        release_date: GlideElementGlideObject;
        
        /**
         * "Remote Sys Id" column element.
         * Max Length: 32.
         */
        remote_sys_id: $$GlideElement.sys_remote_update_set;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "in progress".
         */
        state: GlideElement;
    }
    
    /**
     * "Business Rule" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_script}
     * @see {@link $$GlideElement.sys_script}
     */
    export interface sys_script extends sys_metadata {
        /**
         * "Abort action" column element.
         * Max Length: 40.
         */
        abort_action: GlideElementBoolean;
        
        /**
         * "Accessible from" column element.
         * Max Length: 40.
         * Default Value: "package_private".
         */
        access: GlideElement;
        
        /**
         * "Delete" column element.
         * Max Length: 40.
         */
        action_delete: GlideElementBoolean;
        
        /**
         * "Insert" column element.
         * Max Length: 40.
         */
        action_insert: GlideElementBoolean;
        
        /**
         * "Query" column element.
         * Max Length: 40.
         */
        action_query: GlideElementBoolean;
        
        /**
         * "Update" column element.
         * Max Length: 40.
         */
        action_update: GlideElementBoolean;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Add message" column element.
         * Max Length: 40.
         */
        add_message: GlideElementBoolean;
        
        /**
         * "Advanced" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        advanced: GlideElementBoolean;
        
        /**
         * "Update reference fields" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        change_fields: GlideElementBoolean;
        
        /**
         * "Client callable" column element.
         * Max Length: 40.
         */
        client_callable: GlideElementBoolean;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        collection: GlideElement;
        
        /**
         * "Condition" column element.
         * Type: "Condition String" (condition_string).
         * Max Length: 254.
         */
        condition: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Execute function" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        execute_function: GlideElementBoolean;
        
        /**
         * "Filter Conditions" column element.
         * Max Length: 4000.
         */
        filter_condition: GlideElementConditions;
        
        /**
         * "Web Services" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_rest: GlideElementBoolean;
        
        /**
         * "Message" column element.
         * Max Length: 4000.
         */
        message: GlideElementTranslatedHTML;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Priority" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        priority: GlideElementNumeric;
        
        /**
         * "REST Method" column element.
         * Max Length: 32.
         */
        rest_method: $$GlideElement.sys_rest_message_fn;
        
        /**
         * "REST Method Text" column element.
         * Max Length: 100.
         */
        rest_method_text: GlideElement;
        
        /**
         * "REST Service" column element.
         * Max Length: 32.
         */
        rest_service: $$GlideElement.sys_rest_message;
        
        /**
         * "REST Service Text" column element.
         * Max Length: 40.
         */
        rest_service_text: GlideElement;
        
        /**
         * "Variable Substitution" column element.
         * Max Length: 4000.
         */
        rest_variables: GlideElement;
        
        /**
         * "Role conditions" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        role_conditions: GlideElement;
        
        /**
         * "Script" column element.
         * Max Length: 8000.
         */
        script: GlideElementScript;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_script;
        
        /**
         * "Set field values" column element.
         * Max Length: 65000.
         */
        template: GlideElementWorkflowConditions;
        
        /**
         * "When" column element.
         * Max Length: 40.
         * Default Value: "before".
         */
        when: GlideElement;
    }
    
    /**
     * "Signature" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_signature}
     * @see {@link $$GlideElement.asmt_signature}
     */
    export interface asmt_signature extends sys_metadata {
        /**
         * "Assertion" column element.
         * Mandatory: true; Max Length: 8000.
         */
        assertion: GlideElementTranslatedHTML;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Signature type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "checkbox".
         */
        type: GlideElement;
    }
    
    /**
     * "Assessment Metric" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_metric}
     * @see {@link $$GlideElement.asmt_metric}
     */
    export interface asmt_metric extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Additional information label" column element.
         * Max Length: 255.
         * Default Value: "Additional Information".
         */
        add_info_label: GlideElementTranslatedText;
        
        /**
         * "Allow additional information" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        allow_add_info: GlideElementBoolean;
        
        /**
         * "Allow not applicable" column element.
         * Max Length: 40.
         */
        allow_not_applicable: GlideElementBoolean;
        
        /**
         * "Auto dependent" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        auto_gen: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Mandatory: true; Max Length: 32.
         */
        category: $$GlideElement.asmt_metric_category;
        
        /**
         * "Ask question" column element.
         * Max Length: 40.
         * Default Value: "always".
         */
        cond_question: GlideElement;
        
        /**
         * "Condition" column element.
         * Max Length: 1000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Context" column element.
         * Max Length: 32.
         */
        context: $$GlideElement.sys_cs_virtual_agent_context;
        
        /**
         * "Correct answer" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        correct_answer: GlideElementNumeric;
        
        /**
         * "Correct answer" column element.
         * Max Length: 40.
         * Default Value: "1".
         */
        correct_answer_checkbox: GlideElement;
        
        /**
         * "Correct answer" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        correct_answer_choice: $$GlideElement.asmt_metric_definition;
        
        /**
         * "Correct answer" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        correct_answer_template: $$GlideElement.asmt_template_definition;
        
        /**
         * "Correct answer" column element.
         * Max Length: 40.
         * Default Value: "1".
         */
        correct_answer_yesno: GlideElement;
        
        /**
         * "Custom Metric" column element.
         * Max Length: 32.
         */
        custom_metric: $$GlideElement.asmt_custom_metric;
        
        /**
         * "Data type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "long".
         */
        datatype: GlideElement;
        
        /**
         * "Default answer" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        default_value_field: GlideElement;
        
        /**
         * "Depends on" column element.
         * Max Length: 32.
         */
        depends_on: $$GlideElement.asmt_metric;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Details" column element.
         * Max Length: 8000.
         */
        details: GlideElementTranslatedHTML;
        
        /**
         * "Displayed when" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        displayed_when: $$GlideElement.asmt_metric_definition;
        
        /**
         * "Displayed when" column element.
         * Max Length: 40.
         * Default Value: "1".
         */
        displayed_when_checkbox: GlideElement;
        
        /**
         * "Displayed when" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        displayed_when_template: $$GlideElement.asmt_template_definition;
        
        /**
         * "Displayed when" column element.
         * Max Length: 40.
         * Default Value: "1".
         */
        displayed_when_yesno: GlideElement;
        
        /**
         * "Duration" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Field validation" column element.
         * Max Length: 32.
         */
        field_validation: $$GlideElement.sys_cs_field_script_validator;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         */
        mandatory: GlideElementBoolean;
        
        /**
         * "Max" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 10.
         */
        max: GlideElementNumeric;
        
        /**
         * "Max weight" column element.
         * Type: "Decimal" (decimal).
         * Mandatory: true; Max Length: 15.
         */
        max_weight: GlideElementNumeric;
        
        /**
         * "Maximum normalization input" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        maximum_normalization_input: GlideElementBoolean;
        
        /**
         * "Method" column element.
         * Max Length: 40.
         * Default Value: "assessment".
         */
        method: GlideElement;
        
        /**
         * "Type" column element.
         * Read-only: true; Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Min" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 0.
         */
        min: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Dependent plugin" column element.
         * Type: "Choice" (choice).
         * Max Length: 100.
         */
        plugin: GlideElement;
        
        /**
         * "Question" column element.
         * Mandatory: true; Max Length: 512.
         */
        question: GlideElementTranslatedText;
        
        /**
         * "Randomize answers" column element.
         * Max Length: 40.
         */
        randomize_answers: GlideElementBoolean;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         */
        read_only: GlideElementBoolean;
        
        /**
         * "Reference table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        reference_table: GlideElement;
        
        /**
         * "Scale definition" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "high".
         */
        scale: GlideElement;
        
        /**
         * "Scored" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        scored: GlideElementBoolean;
        
        /**
         * "Script" column element.
         * Max Length: 4000.
         * Default Value: "// The following variables are available: \r // - primary: contains the sys_id of the assessable object to be evaluated \r // - string_result: the script sets the display string value for this metric to 
this variable \r // - actual_result: the script sets the actual value for this metric to this variable \r // - scaled_result: the script sets the scaled value (used in calculations) for this metric to this variable \r // \r // For
 example:\r // var gr = new GlideRecord(\u0027cmdb_ci\u0027);\r // gr.addQuery(\u0027manufacturer\u0027, primary);\r // gr.query();\r // actual_result = gr.getRowCount();\r // string_result = actual_result + \u0027\u0027;\r // if 
(actual_result \u0026gt; 100) scaled_result = 5;\r // else scaled_result = 1;".
         */
        script: GlideElementScript;
        
        /**
         * "Source field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        source_field: GlideElement;
        
        /**
         * "String option" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "short".
         */
        string_option: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Template" column element.
         * Max Length: 32.
         */
        template: $$GlideElement.asmt_template;
        
        /**
         * "Value parameters" column element.
         * Max Length: 4000.
         */
        value_parameters: GlideElementSimpleNameValue;
        
        /**
         * "Weight" column element.
         * Type: "Decimal" (decimal).
         * Mandatory: true; Max Length: 15.
         * Default Value: 10.
         */
        weight: GlideElementNumeric;
    }
    
    /**
     * "Metric Category" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_metric_category}
     * @see {@link $$GlideElement.asmt_metric_category}
     */
    export interface asmt_metric_category extends sys_metadata {
        /**
         * "Create stakeholders" column element.
         * Max Length: 40.
         */
        create_stakeholders: GlideElementBoolean;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Details" column element.
         * Max Length: 8000.
         */
        details: GlideElementTranslatedHTML;
        
        /**
         * "Filter" column element.
         * Max Length: 4000.
         */
        filter: GlideElementConditions;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        order: GlideElementNumeric;
        
        /**
         * "Question bank evaluation method" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         */
        qb_evaluation_method: GlideElement;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 200.
         */
        roles: GlideElement;
        
        /**
         * "Scoring type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "percent".
         */
        scoring_type: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Read-only: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Total metrics" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        total_metrics: GlideElementNumeric;
        
        /**
         * "Weight" column element.
         * Type: "Decimal" (decimal).
         * Mandatory: true; Max Length: 15.
         * Default Value: 10.
         */
        weight: GlideElementNumeric;
    }
    
    /**
     * "Custom Metric" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_custom_metric}
     * @see {@link $$GlideElement.asmt_custom_metric}
     */
    export interface asmt_custom_metric extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Icon" column element.
         * Type: "Glyph Icon (Bootstrap)" (glyphicon).
         * Max Length: 40.
         * Default Value: "user".
         */
        icon: GlideElement;
        
        /**
         * "Macro" column element.
         * Max Length: 32.
         */
        macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Result type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "number".
         */
        result_type: GlideElement;
        
        /**
         * "Value parameters" column element.
         * Max Length: 4000.
         */
        value_parameters: GlideElementSimpleNameValue;
        
        /**
         * "Widget" column element.
         * Max Length: 32.
         */
        widget: $$GlideElement.sp_widget;
    }
    
    /**
     * "Conversation Server Field Script Validator" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_cs_field_script_validator}
     * @see {@link $$GlideElement.sys_cs_field_script_validator}
     */
    export interface sys_cs_field_script_validator extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Error Message" column element.
         * Mandatory: true; Max Length: 200.
         */
        error_message: GlideElementTranslatedText;
        
        /**
         * "Label" column element.
         * Mandatory: true; Unique: true; Display: true; Max Length: 40.
         */
        label: GlideElementTranslatedText;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_cs_field_script_validator;
        
        /**
         * "Validator" column element.
         * Type: "Script (Plain)" (script_plain).
         * Mandatory: true; Max Length: 8000.
         * Default Value: "function validate(value) { \r    return true;\r}".
         */
        validator: GlideElementScript;
    }
    
    /**
     * "Schedule Item" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_trigger}
     * @see {@link $$GlideElement.sys_trigger}
     */
    export interface sys_trigger extends IBaseRecord {
        /**
         * "Application" column element.
         * Max Length: 40.
         */
        application: GlideElement;
        
        /**
         * "Business calendar" column element.
         * Max Length: 32.
         */
        business_calendar: $$GlideElement.business_calendar;
        
        /**
         * "Calendar" column element.
         * Max Length: 32.
         */
        calendar: $$GlideElement.sys_calendar;
        
        /**
         * "Claimed by" column element.
         * Max Length: 100.
         */
        claimed_by: GlideElement;
        
        /**
         * "Document" column element.
         * Max Length: 80.
         */
        document: GlideElement;
        
        /**
         * "Document key" column element.
         * Type: "Char" (char); Scalar type: GUID.
         * Max Length: 32.
         */
        document_key: GlideElement;
        
        /**
         * "Time" column element.
         * Type: "UTC Time" (glide_utc_time).
         * Max Length: 40.
         */
        entered_time: GlideElementGlideObject;
        
        /**
         * "Error count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        error_count: GlideElementNumeric;
        
        /**
         * "Job context" column element.
         * Max Length: 4000.
         */
        job_context: GlideElement;
        
        /**
         * "Job ID" column element.
         * Max Length: 32.
         * Default Value: "81c92ce9c0a8016400e5f0d2f784ea78".
         */
        job_id: $$GlideElement.sys_job;
        
        /**
         * "Last error" column element.
         * Max Length: 255.
         */
        last_error: GlideElement;
        
        /**
         * "Log" column element.
         * Max Length: 40.
         */
        log: GlideElementBoolean;
        
        /**
         * "Maintenance" column element.
         * Max Length: 40.
         */
        maintenance: GlideElementBoolean;
        
        /**
         * "Max drift" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        max_drift: GlideElementGlideObject;
        
        /**
         * "Name" column element.
         * Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Next action" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        next_action: GlideElementGlideObject;
        
        /**
         * "Offset" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        offset: GlideElementGlideObject;
        
        /**
         * "Offset type" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        offset_type: GlideElementNumeric;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_trigger;
        
        /**
         * "Priority" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        priority: GlideElementNumeric;
        
        /**
         * "Processing duration" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        processing_duration: GlideElementNumeric;
        
        /**
         * "Repeat" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        repeat: GlideElementGlideObject;
        
        /**
         * "Replication originator" column element.
         * Max Length: 32.
         */
        replication_originator: GlideElement;
        
        /**
         * "Rollback context ID" column element.
         * Max Length: 32.
         */
        rollback_context_id: $$GlideElement.sys_rollback_context;
        
        /**
         * "Run count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        run_count: GlideElementNumeric;
        
        /**
         * "Run dayofmonth" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        run_dayofmonth: GlideElementNumeric;
        
        /**
         * "Run dayofweek" column element.
         * Type: "Day of Week" (day_of_week); Scalar type: integer.
         * Max Length: 40.
         */
        run_dayofweek: GlideElementGlideObject;
        
        /**
         * "Run month" column element.
         * Type: "Month of Year" (month_of_year); Scalar type: integer.
         * Max Length: 40.
         */
        run_month: GlideElementGlideObject;
        
        /**
         * "Run time" column element.
         * Type: "Time" (glide_time).
         * Max Length: 40.
         */
        run_time: GlideElementGlideObject;
        
        /**
         * "Run weekinmonth" column element.
         * Type: "Week of Month" (week_of_month); Scalar type: integer.
         * Max Length: 40.
         */
        run_weekinmonth: GlideElementGlideObject;
        
        /**
         * "Script" column element.
         * Max Length: 8000.
         */
        script: GlideElement;
        
        /**
         * "State" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        state: GlideElementNumeric;
        
        /**
         * "System ID" column element.
         * Max Length: 255.
         */
        system_id: GlideElement;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        time_zone: GlideElement;
        
        /**
         * "Trigger class" column element.
         * Max Length: 40.
         * Default Value: "DEFAULT".
         */
        trigger_class: GlideElement;
        
        /**
         * "Trigger type" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        trigger_type: GlideElementNumeric;
        
        /**
         * "Upgrade safe" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        upgrade_safe: GlideElementBoolean;
    }
    
    /**
     * "Rollback Context" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_rollback_context}
     * @see {@link $$GlideElement.sys_rollback_context}
     */
    export interface sys_rollback_context extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Error" column element.
         * Max Length: 8000.
         */
        error: GlideElement;
        
        /**
         * "From Version" column element.
         * Max Length: 255.
         */
        from_version: GlideElement;
        
        /**
         * "Last node to change state" column element.
         * Max Length: 40.
         */
        last_node_id: $$GlideElement.sys_cluster_state;
        
        /**
         * "Number" column element.
         * Unique: true; Display: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "State" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "To Version" column element.
         * Max Length: 255.
         */
        to_version: GlideElement;
        
        /**
         * "Type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        type: GlideElement;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Node State" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_cluster_state}
     * @see {@link $$GlideElement.sys_cluster_state}
     */
    export interface sys_cluster_state extends IBaseRecord {
        /**
         * "Allow inbound connections" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        allow_inbound: GlideElementBoolean;
        
        /**
         * "Build Name" column element.
         * Max Length: 40.
         */
        build_name: GlideElement;
        
        /**
         * "Fast AHA Readiness" column element.
         * Read-only: true; Max Length: 40.
         */
        fast_aha_readiness: GlideElement;
        
        /**
         * "Heartbeat timestamp" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        heartbeat_timestamp: GlideElementGlideObject;
        
        /**
         * "Most recent keys" column element.
         * Max Length: 1024000.
         */
        most_recent_keys: GlideElement;
        
        /**
         * "Most recent message" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        most_recent_message: GlideElementGlideObject;
        
        /**
         * "Node ID" column element.
         * Unique: true; Max Length: 40.
         */
        node_id: GlideElement;
        
        /**
         * "Node stats" column element.
         * Max Length: 32.
         */
        node_stats: $$GlideElement.sys_cluster_node_stats;
        
        /**
         * "Node Type" column element.
         * Max Length: 32.
         */
        node_type: $$GlideElement.sys_node_type;
        
        /**
         * "Participation" column element.
         * Max Length: 40.
         * Default Value: "standby".
         */
        participation: GlideElement;
        
        /**
         * "Pause count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        pause_count: GlideElementNumeric;
        
        /**
         * "Ready to failover" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        ready_to_failover: GlideElementBoolean;
        
        /**
         * "Role" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         */
        role: GlideElement;
        
        /**
         * "Schedulers" column element.
         * Max Length: 40.
         * Default Value: "any".
         */
        schedulers: GlideElement;
        
        /**
         * "Status" column element.
         * Max Length: 40.
         * Default Value: "offline".
         */
        status: GlideElement;
        
        /**
         * "System ID" column element.
         * Unique: true; Display: true; Max Length: 255.
         */
        system_id: GlideElement;
        
        /**
         * "Upgrades After" column element.
         * Max Length: 32.
         */
        upgrades_after: $$GlideElement.sys_cluster_state;
    }
    
    /**
     * "Node Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_node_type}
     * @see {@link $$GlideElement.sys_node_type}
     */
    export interface sys_node_type extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 40.
         */
        description: GlideElement;
        
        /**
         * "Job Criteria" column element.
         * Max Length: 200.
         */
        job_criteria: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "For Participation" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         */
        participation: GlideElement;
        
        /**
         * "For Role" column element.
         * Mandatory: true; Max Length: 40.
         */
        role: GlideElement;
        
        /**
         * "Schedulers" column element.
         * Max Length: 16.
         * Default Value: "any".
         */
        schedulers: GlideElement;
        
        /**
         * "Semaphore Set ID" column element.
         * Mandatory: true; Max Length: 40.
         */
        semaphore_set_id: GlideElement;
    }
    
    /**
     * "Node stats" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_cluster_node_stats}
     * @see {@link $$GlideElement.sys_cluster_node_stats}
     */
    export interface sys_cluster_node_stats extends IBaseRecord {
        /**
         * "Iostats" column element.
         * Max Length: 512000.
         */
        iostats: GlideElement;
        
        /**
         * "Node ID" column element.
         * Max Length: 40.
         */
        node_id: GlideElement;
        
        /**
         * "Stats" column element.
         * Max Length: 65000.
         */
        stats: GlideElement;
    }
    
    /**
     * "Sys Job" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_job}
     * @see {@link $$GlideElement.sys_job}
     */
    export interface sys_job extends sys_metadata {
        /**
         * "Application" column element.
         * Max Length: 40.
         */
        application: GlideElement;
        
        /**
         * "Java Class" column element.
         * Max Length: 80.
         */
        handler_class: GlideElement;
        
        /**
         * "Job details" column element.
         * Max Length: 4000.
         */
        job_details: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 80.
         */
        name: GlideElement;
    }
    
    /**
     * "UI Action" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_action}
     * @see {@link $$GlideElement.sys_ui_action}
     */
    export interface sys_ui_action extends sys_metadata {
        /**
         * "Action name" column element.
         * Max Length: 40.
         */
        action_name: GlideElement;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Client" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        client: GlideElementBoolean;
        
        /**
         * "Workspace Client Script" column element.
         * Max Length: 8000.
         */
        client_script_v2: GlideElementScript;
        
        /**
         * "Comments" column element.
         * Max Length: 4000.
         */
        comments: GlideElement;
        
        /**
         * "Condition" column element.
         * Type: "Condition String" (condition_string).
         * Max Length: 254.
         */
        condition: GlideElement;
        
        /**
         * "Form action" column element.
         * Max Length: 40.
         */
        form_action: GlideElementBoolean;
        
        /**
         * "Form button" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        form_button: GlideElementBoolean;
        
        /**
         * "Workspace Form Button" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        form_button_v2: GlideElementBoolean;
        
        /**
         * "Form context menu" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        form_context_menu: GlideElementBoolean;
        
        /**
         * "Form link" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        form_link: GlideElementBoolean;
        
        /**
         * "Workspace Form Menu" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        form_menu_button_v2: GlideElementBoolean;
        
        /**
         * "Form style" column element.
         * Max Length: 40.
         */
        form_style: GlideElement;
        
        /**
         * "Format for Configurable Workspace" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        format_for_configurable_workspace: GlideElementBoolean;
        
        /**
         * "Hint" column element.
         * Max Length: 254.
         */
        hint: GlideElementTranslatedField;
        
        /**
         * "Isolate script" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        isolate_script: GlideElementBoolean;
        
        /**
         * "List action" column element.
         * Max Length: 40.
         */
        list_action: GlideElementBoolean;
        
        /**
         * "List banner button" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_banner_button: GlideElementBoolean;
        
        /**
         * "List bottom button" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_button: GlideElementBoolean;
        
        /**
         * "List choice" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_choice: GlideElementBoolean;
        
        /**
         * "List context menu" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_context_menu: GlideElementBoolean;
        
        /**
         * "List link" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_link: GlideElementBoolean;
        
        /**
         * "Save with form button" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        list_save_with_form_button: GlideElementBoolean;
        
        /**
         * "List style" column element.
         * Max Length: 40.
         */
        list_style: GlideElement;
        
        /**
         * "Messages" column element.
         * Max Length: 4000.
         */
        messages: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Onclick" column element.
         * Max Length: 254.
         */
        onclick: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Script" column element.
         * Max Length: 8000.
         */
        script: GlideElementScript;
        
        /**
         * "Show insert" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        show_insert: GlideElementBoolean;
        
        /**
         * "Show multiple update" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        show_multiple_update: GlideElementBoolean;
        
        /**
         * "Show query" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        show_query: GlideElementBoolean;
        
        /**
         * "Show update" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        show_update: GlideElementBoolean;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_ui_action;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "List v2 Compatible" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        ui11_compatible: GlideElementBoolean;
        
        /**
         * "List v3 Compatible" column element.
         * Max Length: 40.
         */
        ui16_compatible: GlideElementBoolean;
    }

    /**
     * "Other Schedule" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_other_schedule}
     * @see {@link $$GlideElement.cmn_other_schedule}
     */
    export interface cmn_other_schedule extends IBaseRecord {
        /**
         * "Child schedule" column element.
         * Max Length: 32.
         */
        child_schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Schedule" column element.
         * Max Length: 32.
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        time_zone: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "include".
         */
        type: GlideElement;
    }
    
    /**
     * "Assessment Template Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_template_definition}
     * @see {@link $$GlideElement.asmt_template_definition}
     */
    export interface asmt_template_definition extends sys_metadata {
        /**
         * "Display" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        display: GlideElementTranslatedText;
        
        /**
         * "Selected Image" column element.
         * Max Length: 40.
         */
        selected_image: GlideElementUserImage;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Template" column element.
         * Mandatory: true; Max Length: 32.
         */
        template: $$GlideElement.asmt_template;
        
        /**
         * "Unselected Image" column element.
         * Max Length: 40.
         */
        unselected_image: GlideElementUserImage;
        
        /**
         * "Value" column element.
         * Type: "Decimal" (decimal).
         * Mandatory: true; Max Length: 15.
         */
        value: GlideElementNumeric;
    }
    
    /**
     * "REST Message" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_rest_message}
     * @see {@link $$GlideElement.sys_rest_message}
     */
    export interface sys_rest_message extends sys_metadata {
        /**
         * "Accessible from" column element.
         * Max Length: 40.
         * Default Value: "package_private".
         */
        access: GlideElement;
        
        /**
         * "Authentication type" column element.
         * Max Length: 40.
         * Default Value: "no_authentication".
         */
        authentication_type: GlideElement;
        
        /**
         * "Basic authentication password" column element.
         * Max Length: 255.
         */
        basic_auth_password: GlideElementPassword2;
        
        /**
         * "Basic auth profile" column element.
         * Max Length: 32.
         */
        basic_auth_profile: $$GlideElement.sys_auth_profile_basic;
        
        /**
         * "Basic authentication user ID" column element.
         * Max Length: 40.
         */
        basic_auth_user: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "OAuth profile" column element.
         * Max Length: 32.
         */
        oauth2_profile: $$GlideElement.oauth_entity_profile;
        
        /**
         * "Mutual authentication profile" column element.
         * Max Length: 32.
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "Endpoint" column element.
         * Mandatory: true; Max Length: 200.
         */
        rest_endpoint: GlideElement;
        
        /**
         * "Use basic authentication" column element.
         * Max Length: 40.
         */
        use_basic_auth: GlideElementBoolean;
        
        /**
         * "Use mutual authentication" column element.
         * Max Length: 40.
         */
        use_mutual_auth: GlideElementBoolean;
    }
    
    /**
     * "Protocol Profile" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_protocol_profile}
     * @see {@link $$GlideElement.sys_protocol_profile}
     */
    export interface sys_protocol_profile extends IBaseRecord {
        /**
         * "Default port" column element.
         * Max Length: 5.
         * Default Value: "443".
         */
        default_port: GlideElement;
        
        /**
         * "Keystore" column element.
         * Max Length: 32.
         */
        keystore: $$GlideElement.sys_certificate;
        
        /**
         * "Protocol" column element.
         * Mandatory: true; Unique: true; Display: true; Max Length: 40.
         */
        protocol: GlideElement;
    }
    
    /**
     * "X.509 Certificate" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_certificate}
     * @see {@link $$GlideElement.sys_certificate}
     */
    export interface sys_certificate extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Expiration notification" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        expiration_notification: GlideElementBoolean;
        
        /**
         * "Expires" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        expires: GlideElementGlideObject;
        
        /**
         * "Expires in days" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        expires_in_days: GlideElementNumeric;
        
        /**
         * "Format" column element.
         * Max Length: 40.
         * Default Value: "pem".
         */
        format: GlideElement;
        
        /**
         * "Issuer" column element.
         * Read-only: true; Max Length: 1000.
         */
        issuer: GlideElement;
        
        /**
         * "Key store password" column element.
         * Max Length: 255.
         */
        key_store_password: GlideElementPassword2;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 128.
         */
        name: GlideElement;
        
        /**
         * "Notify on expiration" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         */
        notify_on_expiration: $$GlideElement.sys_user;
        
        /**
         * "PEM Certificate" column element.
         * Max Length: 4000.
         */
        pem_certificate: GlideElement;
        
        /**
         * "Serial number" column element.
         * Max Length: 41.
         */
        serial_number: GlideElement;
        
        /**
         * "Short description" column element.
         * Max Length: 100.
         */
        short_description: GlideElement;
        
        /**
         * "Subject" column element.
         * Read-only: true; Max Length: 1000.
         */
        subject: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "trust_store".
         */
        type: GlideElement;
        
        /**
         * "Valid from" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        valid_from: GlideElementGlideObject;
        
        /**
         * "Warn in days to expire" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 20.
         */
        warn_in_days_to_expire: GlideElementNumeric;
    }
    
    /**
     * "Authentication Configuration" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_auth_profile}
     * @see {@link $$GlideElement.sys_auth_profile}
     */
    export interface sys_auth_profile extends sys_metadata {
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "Basic Auth Configuration" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_auth_profile_basic}
     * @see {@link $$GlideElement.sys_auth_profile_basic}
     */
    export interface sys_auth_profile_basic extends sys_auth_profile {
        /**
         * "Password" column element.
         * Mandatory: true; Max Length: 255.
         */
        password: GlideElementPassword2;
        
        /**
         * "Username" column element.
         * Mandatory: true; Max Length: 80.
         */
        username: GlideElement;
    }
    
    /**
     * "Oauth Entity Profile" GlideRecord fields.
     * @see {@link $$GlideRecord.oauth_entity_profile}
     * @see {@link $$GlideElement.oauth_entity_profile}
     */
    export interface oauth_entity_profile extends sys_metadata {
        /**
         * "Is default" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        default: GlideElementBoolean;
        
        /**
         * "Grant type" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 60.
         * Default Value: "password".
         */
        grant_type: GlideElement;
        
        /**
         * "JWT Provider" column element.
         * Max Length: 32.
         */
        jwt_provider: $$GlideElement.jwt_provider;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "OAuth provider" column element.
         * Mandatory: true; Max Length: 32.
         */
        oauth_entity: $$GlideElement.oauth_entity;
        
        /**
         * "Assertion Producer" column element.
         * Max Length: 32.
         */
        saml2_assertion_producer: $$GlideElement.saml2_assertion_producer;
    }
    
    /**
     * "Saml2 Assertion Producer" GlideRecord fields.
     * @see {@link $$GlideRecord.saml2_assertion_producer}
     * @see {@link $$GlideElement.saml2_assertion_producer}
     */
    export interface saml2_assertion_producer extends sys_metadata {
        /**
         * "Audience" column element.
         * Mandatory: true; Max Length: 1024.
         */
        audience: GlideElement;
        
        /**
         * "Expiry Interval (sec)" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 255.
         * Default Value: 60.
         */
        expiry_interval: GlideElementNumeric;
        
        /**
         * "Issuer" column element.
         * Mandatory: true; Max Length: 1024.
         * Default Value: "www.yourinstance.service-now.com".
         */
        issuer: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "NameID Format" column element.
         * Mandatory: true; Max Length: 255.
         * Default Value: "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified".
         */
        nameid_format: GlideElement;
        
        /**
         * "Recipient" column element.
         * Mandatory: true; Max Length: 1024.
         */
        recipient: GlideElement;
        
        /**
         * "Signing Algorithm" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 255.
         * Default Value: "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256".
         */
        signing_algorithm: GlideElement;
        
        /**
         * "Subject NameID" column element.
         * Mandatory: true; Max Length: 255.
         */
        subject_nameid: GlideElement;
    }
    
    /**
     * "Oauth Entity" GlideRecord fields.
     * @see {@link $$GlideRecord.oauth_entity}
     * @see {@link $$GlideElement.oauth_entity}
     */
    export interface oauth_entity extends sys_metadata {
        /**
         * "Accessible from" column element.
         * Max Length: 40.
         * Default Value: "public".
         */
        access: GlideElement;
        
        /**
         * "Access Token Lifespan" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 1800.
         */
        access_token_lifespan: GlideElementNumeric;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Authorization Code Lifespan" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 60.
         */
        auth_code_lifespan: GlideElementNumeric;
        
        /**
         * "Authorization URL" column element.
         * Max Length: 500.
         */
        auth_url: GlideElementURL;
        
        /**
         * "Certificate URL" column element.
         * Mandatory: true; Max Length: 500.
         */
        certificate_url: GlideElementURL;
        
        /**
         * "Client ID" column element.
         * Mandatory: true; Max Length: 100.
         */
        client_id: GlideElement;
        
        /**
         * "Client Secret" column element.
         * Max Length: 255.
         */
        client_secret: GlideElementPassword2;
        
        /**
         * "OAuth Application UUID" column element.
         * Max Length: 256.
         */
        client_uuid: GlideElement;
        
        /**
         * "Code challenge method" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "S256".
         */
        code_challenge_method: GlideElement;
        
        /**
         * "Comments" column element.
         * Max Length: 4000.
         */
        comments: GlideElement;
        
        /**
         * "Default Grant type" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 60.
         * Default Value: "password".
         */
        default_grant_type: GlideElement;
        
        /**
         * "ID Token Lifespan" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 86400.
         */
        id_token_lifespan: GlideElementNumeric;
        
        /**
         * "Logo URL" column element.
         * Max Length: 500.
         */
        logo_url: GlideElementURL;
        
        /**
         * "Message Signature Lifespan" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 60.
         */
        message_signature_lifespan: GlideElementNumeric;
        
        /**
         * "Mobile Client" column element.
         * Max Length: 40.
         */
        mobile_client: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "OAuth API Script" column element.
         * Max Length: 32.
         */
        oauth_api_script: $$GlideElement.sys_script_include;
        
        /**
         * "Mutual authentication profile" column element.
         * Max Length: 32.
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "Public Client" column element.
         * Max Length: 40.
         */
        public_client: GlideElementBoolean;
        
        /**
         * "Redirect URL" column element.
         * Max Length: 500.
         */
        redirect_url: GlideElementURL;
        
        /**
         * "Refresh Token Lifespan" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 8640000.
         */
        refresh_token_lifespan: GlideElementNumeric;
        
        /**
         * "Refresh Token URL" column element.
         * Max Length: 500.
         */
        refresh_token_url: GlideElementURL;
        
        /**
         * "Enforce Token Restrictions" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        restricted_binding: GlideElementBoolean;
        
        /**
         * "Token Revocation URL" column element.
         * Max Length: 500.
         */
        revoke_token_url: GlideElementURL;
        
        /**
         * "Cryptographic salt" column element.
         * Mandatory: true; Max Length: 96.
         */
        salt: GlideElement;
        
        /**
         * "Send Credentials" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "request_body_parameter".
         */
        send_client_credentials_as: GlideElement;
        
        /**
         * "Disable consent screen" column element.
         * Max Length: 40.
         */
        skip_authorize: GlideElementBoolean;
        
        /**
         * "Token URL" column element.
         * Max Length: 500.
         */
        token_url: GlideElementURL;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "client".
         */
        type: GlideElement;
        
        /**
         * "Use mutual authentication" column element.
         * Max Length: 40.
         */
        use_mutual_auth: GlideElementBoolean;
        
        /**
         * "OAuth Application User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Jwt Provider" GlideRecord fields.
     * @see {@link $$GlideRecord.jwt_provider}
     * @see {@link $$GlideElement.jwt_provider}
     */
    export interface jwt_provider extends sys_metadata {
        /**
         * "Expiry Interval (sec)" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 60.
         */
        expiry_interval: GlideElementNumeric;
        
        /**
         * "JWT API Script" column element.
         * Max Length: 32.
         */
        jwt_api_script: $$GlideElement.sys_script_include;
        
        /**
         * "Signing Configuration" column element.
         * Mandatory: true; Max Length: 32.
         */
        jwt_keystore_alias: $$GlideElement.jwt_keystore_aliases;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "JWT Keys" GlideRecord fields.
     * @see {@link $$GlideRecord.jwt_keystore_aliases}
     * @see {@link $$GlideElement.jwt_keystore_aliases}
     */
    export interface jwt_keystore_aliases extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Certificate Thumbprint" column element.
         * Mandatory: true; Max Length: 500.
         */
        certificate_thumbprint: GlideElement;
        
        /**
         * "Expiry" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        expiry: GlideElementGlideObject;
        
        /**
         * "Key Id" column element.
         * Max Length: 40.
         */
        kid: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Signing Algorithm" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         * Default Value: "rsa_256".
         */
        signing_algorithm: GlideElement;
        
        /**
         * "Signing Key" column element.
         * Mandatory: true; Max Length: 255.
         */
        signing_key_password: GlideElementPassword2;
        
        /**
         * "Signing Keystore" column element.
         * Max Length: 32.
         */
        signing_keystore: $$GlideElement.sys_certificate;
    }
    
    /**
     * "HTTP Method" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_rest_message_fn}
     * @see {@link $$GlideElement.sys_rest_message_fn}
     */
    export interface sys_rest_message_fn extends sys_metadata {
        /**
         * "Authentication type" column element.
         * Max Length: 40.
         * Default Value: "inherit_from_parent".
         */
        authentication_type: GlideElement;
        
        /**
         * "Basic authentication password (simple)" column element.
         * Max Length: 255.
         */
        basic_auth_password: GlideElementPassword2;
        
        /**
         * "Basic auth profile" column element.
         * Max Length: 32.
         */
        basic_auth_profile: $$GlideElement.sys_auth_profile_basic;
        
        /**
         * "Basic authentication user ID (simple)" column element.
         * Max Length: 40.
         */
        basic_auth_user: GlideElement;
        
        /**
         * "Content" column element.
         * Max Length: 4000.
         */
        content: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        function_name: GlideElement;
        
        /**
         * "HTTP method" column element.
         * Mandatory: true; Max Length: 10.
         */
        http_method: GlideElement;
        
        /**
         * "Lock" column element.
         * Max Length: 40.
         */
        lock: GlideElementBoolean;
        
        /**
         * "OAuth profile" column element.
         * Max Length: 32.
         */
        oauth2_profile: $$GlideElement.oauth_entity_profile;
        
        /**
         * "Mutual authentication profile" column element.
         * Max Length: 32.
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "REST Message [ HTTP Method ]" column element.
         * Max Length: 150.
         */
        qualified_name: GlideElement;
        
        /**
         * "Endpoint" column element.
         * Max Length: 200.
         */
        rest_endpoint: GlideElement;
        
        /**
         * "REST Message" column element.
         * Max Length: 32.
         */
        rest_message: $$GlideElement.sys_rest_message;
        
        /**
         * "Use basic authentication" column element.
         * Max Length: 40.
         */
        use_basic_auth: GlideElementBoolean;
        
        /**
         * "Use MID Server" column element.
         * Max Length: 32.
         */
        use_mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Use mutual authentication" column element.
         * Max Length: 40.
         */
        use_mutual_auth: GlideElementBoolean;
    }
    
    /**
     * "Context" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_cs_virtual_agent_context}
     * @see {@link $$GlideElement.sys_cs_virtual_agent_context}
     */
    export interface sys_cs_virtual_agent_context extends sys_metadata {
        /**
         * "Chat Setup" column element.
         * Read-only: true; Max Length: 32.
         */
        live_agent_setup: $$GlideElement.sys_cs_live_agent_setup;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Record" column element.
         * Read-only: true; Max Length: 40.
         */
        record: GlideElementBoolean;
        
        /**
         * "Script Variable Name" column element.
         * Read-only: true; Max Length: 40.
         */
        script_variable: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Table" column element.
         * Max Length: 32.
         */
        table: $$GlideElement.sys_db_object;
        
        /**
         * "Value" column element.
         * Max Length: 2000.
         */
        value: GlideElementScript;
    }

    /**
     * "Chat Setup" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_cs_live_agent_setup}
     * @see {@link $$GlideElement.sys_cs_live_agent_setup}
     */
    export interface sys_cs_live_agent_setup extends sys_metadata {
        /**
         * "Agent Whisper" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        agent_whisper: GlideElementBoolean;
        
        /**
         * "Allow transcript download" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        allow_transcript_download: GlideElementBoolean;
        
        /**
         * "CSM Fulfiller UI" column element.
         * Max Length: 40.
         * Default Value: "service_workspace".
         */
        csm_fulfiller: GlideElement;
        
        /**
         * "CSM Queue" column element.
         * Max Length: 32.
         */
        csm_queue: $$GlideElement.chat_queue;
        
        /**
         * "Dynamic Translation" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        dynamic_translation: GlideElementBoolean;
        
        /**
         * "Emoji Enabled" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        emoji_enabled: GlideElementBoolean;
        
        /**
         * "Global Fulfiller UI" column element.
         * Max Length: 40.
         * Default Value: "service_workspace".
         */
        global_fulfiller: GlideElement;
        
        /**
         * "Global Queue" column element.
         * Max Length: 32.
         */
        global_queue: $$GlideElement.chat_queue;
        
        /**
         * "HR Fulfiller UI" column element.
         * Max Length: 40.
         * Default Value: "service_workspace".
         */
        hr_fulfiller: GlideElement;
        
        /**
         * "HR Queue" column element.
         * Max Length: 32.
         */
        hr_queue: $$GlideElement.chat_queue;
        
        /**
         * "ITSM Fulfiller UI" column element.
         * Max Length: 40.
         * Default Value: "service_workspace".
         */
        itsm_fulfiller: GlideElement;
        
        /**
         * "ITSM Queue" column element.
         * Max Length: 32.
         */
        itsm_queue: $$GlideElement.chat_queue;
        
        /**
         * "Live Chat Enabled" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        live_agent_enabled: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "No Agents Available message" column element.
         * Max Length: 1000.
         */
        no_agent_available_message: GlideElementTranslatedText;
        
        /**
         * "Enable notifications for all users" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        notification_enabled: GlideElementBoolean;
        
        /**
         * "Short description" column element.
         * Max Length: 1000.
         */
        short_description: GlideElement;
        
        /**
         * "Show agent names and avatars" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        show_agent_details: GlideElementBoolean;
        
        /**
         * "Show agent name in chat header" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        show_agent_name_in_header: GlideElementBoolean;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_cs_live_agent_setup;
        
        /**
         * "Transfer message" column element.
         * Max Length: 1000.
         */
        transfer_message: GlideElementTranslatedText;
        
        /**
         * "Live chat wait status" column element.
         * Max Length: 40.
         */
        wait_status: GlideElement;
    }
    
    /**
     * "Application Menu" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_app_application}
     * @see {@link $$GlideElement.sys_app_application}
     */
    export interface sys_app_application extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        category: $$GlideElement.sys_app_category;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Device type" column element.
         * Max Length: 40.
         * Default Value: "browser".
         */
        device_type: GlideElement;
        
        /**
         * "Hint" column element.
         * Max Length: 255.
         */
        hint: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        order: GlideElementNumeric;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 100.
         */
        roles: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_app_application;
        
        /**
         * "Title" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        title: GlideElementTranslatedField;
        
        /**
         * "View name" column element.
         * Max Length: 40.
         */
        view_name: GlideElement;
    }
    
    /**
     * "Menu Category" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_app_category}
     * @see {@link $$GlideElement.sys_app_category}
     */
    export interface sys_app_category extends sys_metadata {
        /**
         * "Default order" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        default_order: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Style" column element.
         * Max Length: 100.
         */
        style: GlideElement;
    }
    
    /**
     * "Report Source" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_source}
     * @see {@link $$GlideElement.sys_report_source}
     */
    export interface sys_report_source extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Display" column element.
         * Display: true; Max Length: 1000.
         */
        display: GlideElement;
        
        /**
         * "Filter" column element.
         * Max Length: 4000.
         */
        filter: GlideElementConditions;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Report Drillown" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_drill}
     * @see {@link $$GlideElement.sys_report_drill}
     */
    export interface sys_report_drill extends sys_report { }
    
    /**
     * "PDF Page Header Footer Template" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_page_hdrftr}
     * @see {@link $$GlideElement.sys_report_page_hdrftr}
     */
    export interface sys_report_page_hdrftr extends sys_metadata {
        /**
         * "Footer Data" column element.
         * Max Length: 100.
         */
        ftr_data: GlideElement;
        
        /**
         * "Header Data" column element.
         * Max Length: 255.
         */
        hdr_data: GlideElement;
        
        /**
         * "Left footer content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        left_ftr_content: GlideElementNumeric;
        
        /**
         * "Left footer image" column element.
         * Max Length: 40.
         */
        left_ftr_img: GlideElementUserImage;
        
        /**
         * "Left footer text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        left_ftr_text: GlideElement;
        
        /**
         * "Left header content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 2.
         */
        left_hdr_content: GlideElementNumeric;
        
        /**
         * "Left header image" column element.
         * Max Length: 40.
         */
        left_hdr_img: GlideElementUserImage;
        
        /**
         * "Left header text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        left_hdr_text: GlideElement;
        
        /**
         * "Middle footer content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 7.
         */
        mid_ftr_content: GlideElementNumeric;
        
        /**
         * "Middle footer image" column element.
         * Max Length: 40.
         */
        mid_ftr_img: GlideElementUserImage;
        
        /**
         * "Middle footer text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        mid_ftr_text: GlideElement;
        
        /**
         * "Middle header content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 7.
         */
        mid_hdr_content: GlideElementNumeric;
        
        /**
         * "Middle header image" column element.
         * Max Length: 40.
         */
        mid_hdr_img: GlideElementUserImage;
        
        /**
         * "Middle header text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        mid_hdr_text: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 150.
         */
        name: GlideElement;
        
        /**
         * "Right footer content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 4.
         */
        right_ftr_content: GlideElementNumeric;
        
        /**
         * "Right footer image" column element.
         * Max Length: 40.
         */
        right_ftr_img: GlideElementUserImage;
        
        /**
         * "Right footer text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        right_ftr_text: GlideElement;
        
        /**
         * "Right header content" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        right_hdr_content: GlideElementNumeric;
        
        /**
         * "Right header image" column element.
         * Max Length: 40.
         */
        right_hdr_img: GlideElementUserImage;
        
        /**
         * "Right header text" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 150.
         */
        right_hdr_text: GlideElement;
    }
    
    /**
     * "Map Source" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_map_source}
     * @see {@link $$GlideElement.sys_report_map_source}
     */
    export interface sys_report_map_source extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        aggregate_field: GlideElement;
        
        /**
         * "Use this key" column element.
         * Max Length: 255.
         * Default Value: "hc-key".
         */
        join_by_column: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_report_map_source;
        
        /**
         * "Use these mappings" column element.
         * Max Length: 32.
         */
        report_map_source_mapping: $$GlideElement.sys_report_map_source_mapping;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Level" column element.
         * Max Length: 32.
         */
        type: $$GlideElement.sys_report_map_type;
        
        /**
         * "How to use data" column element.
         * Type: "Radio Button Choice" (radio).
         * Max Length: 40.
         * Default Value: "mapping".
         */
        type_mapping: GlideElement;
    }
    
    /**
     * "Report Map Types" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_map_type}
     * @see {@link $$GlideElement.sys_report_map_type}
     */
    export interface sys_report_map_type extends sys_metadata {
        /**
         * "Key" column element.
         * Max Length: 100.
         */
        key: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 100.
         */
        name: GlideElementTranslatedText;
    }
    
    /**
     * "Mapping group" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_map_source_mapping}
     * @see {@link $$GlideElement.sys_report_map_source_mapping}
     */
    export interface sys_report_map_source_mapping extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElementTranslatedField;
    }
    
    /**
     * "Report Maps" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_map}
     * @see {@link $$GlideElement.sys_report_map}
     */
    export interface sys_report_map extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Geographical map" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        is_geomap: GlideElementBoolean;
        
        /**
         * "JSON definition" column element.
         * Max Length: 500000.
         */
        json_map: GlideElement;
        
        /**
         * "Key" column element.
         * Max Length: 100.
         */
        key: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 100.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_report_map;
        
        /**
         * "Level" column element.
         * Max Length: 32.
         */
        type: $$GlideElement.sys_report_map_type;
    }
    
    /**
     * "UI View" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_view}
     * @see {@link $$GlideElement.sys_ui_view}
     */
    export interface sys_ui_view extends sys_metadata {
        /**
         * "Group" column element.
         * Max Length: 32.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Hidden" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        hidden: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 100.
         */
        roles: GlideElement;
        
        /**
         * "Title" column element.
         * Unique: true; Display: true; Max Length: 80.
         */
        title: GlideElementTranslatedField;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Import Table" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_report_import_table}
     * @see {@link $$GlideElement.sys_report_import_table}
     */
    export interface sys_report_import_table extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        active: GlideElementBoolean;
        
        /**
         * "Created by user" column element.
         * Max Length: 32.
         */
        created_by_user: $$GlideElement.sys_user;
        
        /**
         * "Expiration days" column element.
         * Max Length: 40.
         * Default Value: "7".
         */
        expiration_days: GlideElement;
        
        /**
         * "Expire on date" column element.
         * Type: "Other Date" (date).
         * Max Length: 40.
         */
        expire_on_date: GlideElementGlideObject;
        
        /**
         * "Expired" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        expired: GlideElementBoolean;
        
        /**
         * "Filename" column element.
         * Max Length: 50.
         */
        filename: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Chart color scheme" GlideRecord fields.
     * @see {@link $$GlideRecord.pa_chart_color_schemes}
     * @see {@link $$GlideElement.pa_chart_color_schemes}
     */
    export interface pa_chart_color_schemes extends sys_metadata {
        /**
         * "Color 1" column element.
         * Mandatory: true; Max Length: 32.
         */
        color_1: $$GlideElement.sys_report_color;
        
        /**
         * "Color 10" column element.
         * Max Length: 32.
         */
        color_10: $$GlideElement.sys_report_color;
        
        /**
         * "Color 11" column element.
         * Max Length: 32.
         */
        color_11: $$GlideElement.sys_report_color;
        
        /**
         * "Color 12" column element.
         * Max Length: 32.
         */
        color_12: $$GlideElement.sys_report_color;
        
        /**
         * "Color 13" column element.
         * Max Length: 32.
         */
        color_13: $$GlideElement.sys_report_color;
        
        /**
         * "Color 14" column element.
         * Max Length: 32.
         */
        color_14: $$GlideElement.sys_report_color;
        
        /**
         * "Color 15" column element.
         * Max Length: 32.
         */
        color_15: $$GlideElement.sys_report_color;
        
        /**
         * "Color 16" column element.
         * Max Length: 32.
         */
        color_16: $$GlideElement.sys_report_color;
        
        /**
         * "Color 17" column element.
         * Max Length: 32.
         */
        color_17: $$GlideElement.sys_report_color;
        
        /**
         * "Color 18" column element.
         * Max Length: 32.
         */
        color_18: $$GlideElement.sys_report_color;
        
        /**
         * "Color 19" column element.
         * Max Length: 32.
         */
        color_19: $$GlideElement.sys_report_color;
        
        /**
         * "Color 2" column element.
         * Mandatory: true; Max Length: 32.
         */
        color_2: $$GlideElement.sys_report_color;
        
        /**
         * "Color 20" column element.
         * Max Length: 32.
         */
        color_20: $$GlideElement.sys_report_color;
        
        /**
         * "Color 21" column element.
         * Max Length: 32.
         */
        color_21: $$GlideElement.sys_report_color;
        
        /**
         * "Color 22" column element.
         * Max Length: 32.
         */
        color_22: $$GlideElement.sys_report_color;
        
        /**
         * "Color 23" column element.
         * Max Length: 32.
         */
        color_23: $$GlideElement.sys_report_color;
        
        /**
         * "Color 24" column element.
         * Max Length: 32.
         */
        color_24: $$GlideElement.sys_report_color;
        
        /**
         * "Color 25" column element.
         * Max Length: 32.
         */
        color_25: $$GlideElement.sys_report_color;
        
        /**
         * "Color 26" column element.
         * Max Length: 32.
         */
        color_26: $$GlideElement.sys_report_color;
        
        /**
         * "Color 27" column element.
         * Max Length: 32.
         */
        color_27: $$GlideElement.sys_report_color;
        
        /**
         * "Color 28" column element.
         * Max Length: 32.
         */
        color_28: $$GlideElement.sys_report_color;
        
        /**
         * "Color 29" column element.
         * Max Length: 32.
         */
        color_29: $$GlideElement.sys_report_color;
        
        /**
         * "Color 3" column element.
         * Max Length: 32.
         */
        color_3: $$GlideElement.sys_report_color;
        
        /**
         * "Color 30" column element.
         * Max Length: 32.
         */
        color_30: $$GlideElement.sys_report_color;
        
        /**
         * "Color 31" column element.
         * Max Length: 32.
         */
        color_31: $$GlideElement.sys_report_color;
        
        /**
         * "Color 32" column element.
         * Max Length: 32.
         */
        color_32: $$GlideElement.sys_report_color;
        
        /**
         * "Color 4" column element.
         * Max Length: 32.
         */
        color_4: $$GlideElement.sys_report_color;
        
        /**
         * "Color 5" column element.
         * Max Length: 32.
         */
        color_5: $$GlideElement.sys_report_color;
        
        /**
         * "Color 6" column element.
         * Max Length: 32.
         */
        color_6: $$GlideElement.sys_report_color;
        
        /**
         * "Color 7" column element.
         * Max Length: 32.
         */
        color_7: $$GlideElement.sys_report_color;
        
        /**
         * "Color 8" column element.
         * Max Length: 32.
         */
        color_8: $$GlideElement.sys_report_color;
        
        /**
         * "Color 9" column element.
         * Max Length: 32.
         */
        color_9: $$GlideElement.sys_report_color;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Domain" column element.
         * Read-only: true; Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.pa_chart_color_schemes;
    }
    
    /**
     * "Software Model" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_software_product_model}
     * @see {@link $$GlideElement.cmdb_software_product_model}
     */
    export interface cmdb_software_product_model extends cmdb_model {
        /**
         * "Activation status" column element.
         * Max Length: 40.
         */
        activation_status: GlideElement;
        
        /**
         * "Application model" column element.
         * Max Length: 32.
         */
        application_model: $$GlideElement.cmdb_application_product_model;
        
        /**
         * "Build" column element.
         * Max Length: 40.
         */
        build_version: GlideElement;
        
        /**
         * "Edition" column element.
         * Max Length: 40.
         */
        edition: GlideElement;
        
        /**
         * "End of life date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 10.
         */
        end_of_life_date: GlideElementGlideObject;
        
        /**
         * "GA release date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 10.
         */
        ga_release_date: GlideElementGlideObject;
        
        /**
         * "ISO id" column element.
         * Max Length: 100.
         */
        id: GlideElement;
        
        /**
         * "Inference percent" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        inference: GlideElementNumeric;
        
        /**
         * "Is an option" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_option: GlideElementBoolean;
        
        /**
         * "License type" column element.
         * Max Length: 32.
         */
        license_type: $$GlideElement.cmdb_sw_license_calculation;
        
        /**
         * "Major" column element.
         * Max Length: 40.
         */
        major_version: GlideElement;
        
        /**
         * "Maximum socket count" column element.
         * Max Length: 40.
         */
        max_sockets: GlideElement;
        
        /**
         * "Maximum users" column element.
         * Max Length: 40.
         */
        max_users: GlideElement;
        
        /**
         * "Minimum users" column element.
         * Max Length: 40.
         */
        min_users: GlideElement;
        
        /**
         * "Minor" column element.
         * Max Length: 15.
         */
        minor_version: GlideElement;
        
        /**
         * "Next version" column element.
         * Max Length: 32.
         */
        next_version: $$GlideElement.cmdb_software_product_model;
        
        /**
         * "Review" column element.
         * Max Length: 40.
         */
        review_version: GlideElement;
        
        /**
         * "Rights" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        rights: GlideElementNumeric;
        
        /**
         * "ISO serial number" column element.
         * Max Length: 100.
         */
        serial_number: GlideElement;
        
        /**
         * "Single or multi license" column element.
         * Max Length: 40.
         */
        single: GlideElement;
        
        /**
         * "Software category" column element.
         * Max Length: 100.
         */
        software_category: GlideElement;
        
        /**
         * "Title" column element.
         * Max Length: 100.
         */
        title: GlideElement;
        
        /**
         * "Track" column element.
         * Max Length: 40.
         */
        track: GlideElementBoolean;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         */
        version: GlideElement;
    }

    /**
     * "Software License Calculation" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_sw_license_calculation}
     * @see {@link $$GlideElement.cmdb_sw_license_calculation}
     */
    export interface cmdb_sw_license_calculation extends IBaseRecord {
        /**
         * "Script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 4000.
         */
        calculation: GlideElementScript;
        
        /**
         * "Full name" column element.
         * Max Length: 200.
         */
        full_name: GlideElement;
        
        /**
         * "Install field" column element.
         * Max Length: 100.
         */
        install_field: GlideElement;
        
        /**
         * "License field" column element.
         * Max Length: 100.
         */
        license_field: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.cmdb_sw_license_calculation;
        
        /**
         * "Query type" column element.
         * Max Length: 40.
         */
        query_field: GlideElement;
    }
    
    /**
     * "Task Relationship Type" GlideRecord fields.
     * @see {@link $$GlideRecord.task_rel_type}
     * @see {@link $$GlideElement.task_rel_type}
     */
    export interface task_rel_type extends sys_metadata {
        /**
         * "Child descriptor" column element.
         * Max Length: 40.
         */
        child_descriptor: GlideElementTranslatedField;
        
        /**
         * "Child script" column element.
         * Max Length: 8000.
         */
        child_script: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Parent descriptor" column element.
         * Max Length: 40.
         */
        parent_descriptor: GlideElementTranslatedField;
        
        /**
         * "Parent script" column element.
         * Max Length: 8000.
         */
        parent_script: GlideElement;
    }
    
    /**
     * "Agile Filter Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.agile_filter_definition}
     * @see {@link $$GlideElement.agile_filter_definition}
     */
    export interface agile_filter_definition extends IBaseRecord {
        /**
         * "Filter" column element.
         * Max Length: 4000.
         */
        filter: GlideElementConditions;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Personal backlog" GlideRecord fields.
     * @see {@link $$GlideRecord.backlog_definition}
     * @see {@link $$GlideElement.backlog_definition}
     */
    export interface backlog_definition extends agile_filter_definition {
        /**
         * "Owner" column element.
         * Max Length: 32.
         */
        owner: $$GlideElement.sys_user;
        
        /**
         * "Visible to" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        shared_with: $$GlideElement.sys_user;
        
        /**
         * "Visible to Groups" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        shared_with_groups: $$GlideElement.sys_user_group;
    }
    
    /**
     * "Defect" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_defect}
     * @see {@link $$GlideElement.rm_defect}
     */
    export interface rm_defect extends rm_feature {
        /**
         * "Product" column element.
         * Max Length: 32.
         */
        product: $$GlideElement.cmdb_application_product_model;
        
        /**
         * "Reported against" column element.
         * Max Length: 32.
         */
        reported_against: $$GlideElement.task;
    }
    
    /**
     * "Enhancement" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_enhancement}
     * @see {@link $$GlideElement.rm_enhancement}
     */
    export interface rm_enhancement extends rm_feature {
        /**
         * "Product" column element.
         * Max Length: 32.
         */
        product: $$GlideElement.cmdb_application_product_model;
    }
    
    /**
     * "Epic" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_epic}
     * @see {@link $$GlideElement.rm_epic}
     */
    export interface rm_epic extends rm_feature {
        /**
         * "Color" column element.
         * Max Length: 32.
         * Default Value: "3f804840d7333100b4964ebfae610329".
         */
        color: $$GlideElement.sys_report_color;
        
        /**
         * "Completed count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        completed_count: GlideElementNumeric;
        
        /**
         * "Completed estimate" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        completed_estimate: GlideElementNumeric;
        
        /**
         * "Global rank" column element.
         * Type: "Long" (longint).
         * Read-only: true; Max Length: 40.
         */
        global_rank: GlideElementNumeric;
        
        /**
         * "Missing estimates" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        missing_estimates: GlideElementNumeric;
        
        /**
         * "Parent epic" column element.
         * Max Length: 32.
         */
        parent_epic: $$GlideElement.rm_epic;
        
        /**
         * "Percent complete by count" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Read-only: true; Max Length: 15.
         * Default Value: 0.
         */
        percent_complete_by_count: GlideElementNumeric;
        
        /**
         * "Percent complete by estimate" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Read-only: true; Max Length: 15.
         * Default Value: 0.
         */
        percent_complete_by_estimate: GlideElementNumeric;
        
        /**
         * "Product" column element.
         * Max Length: 32.
         */
        product: $$GlideElement.cmdb_model;
        
        /**
         * "Theme" column element.
         * Max Length: 32.
         */
        theme: $$GlideElement.scrum_theme;
        
        /**
         * "Total estimate" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        total_estimate: GlideElementNumeric;
        
        /**
         * "Total story count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        total_story_count: GlideElementNumeric;
    }
    
    /**
     * "Release" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_release}
     * @see {@link $$GlideElement.rm_release}
     */
    export interface rm_release extends planned_task {
        /**
         * "Release phase" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        release_phase: GlideElement;
        
        /**
         * "Release type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        release_type: GlideElement;
        
        /**
         * "Visited States" column element.
         * Read-only: true; Max Length: 255.
         */
        visited_state: GlideElement;
    }
    
    /**
     * "Scrum release" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_release_scrum}
     * @see {@link $$GlideElement.rm_release_scrum}
     */
    export interface rm_release_scrum extends rm_release {
        /**
         * "Default team" column element.
         * Max Length: 32.
         */
        default_team: $$GlideElement.scrum_pp_team;
        
        /**
         * "Total committed points" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        points: GlideElementNumeric;
        
        /**
         * "Release capacity (points)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        release_capacity: GlideElementNumeric;
        
        /**
         * "Story has tasks" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        story_has_tasks: GlideElementBoolean;
    }
    
    /**
     * "Team" GlideRecord fields.
     * @see {@link $$GlideRecord.scrum_pp_team}
     * @see {@link $$GlideElement.scrum_pp_team}
     */
    export interface scrum_pp_team extends IBaseRecord {
        /**
         * "Points" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        points: GlideElementNumeric;
        
        /**
         * "Release" column element.
         * Read-only: true; Max Length: 32.
         */
        release: $$GlideElement.rm_release_scrum;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 80.
         */
        show_name: GlideElement;
        
        /**
         * "Sys class name" column element.
         * Max Length: 40.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Name" column element.
         * Max Length: 32.
         */
        team_name: $$GlideElement.scrum_pp_team_name;
    }
    
    /**
     * "Sprint" GlideRecord fields.
     * @see {@link $$GlideRecord.rm_sprint}
     * @see {@link $$GlideElement.rm_sprint}
     */
    export interface rm_sprint extends rm_release {
        /**
         * "Completed points" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        actual_points: GlideElementNumeric;
        
        /**
         * "Total committed points" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        committed_points: GlideElementNumeric;
        
        /**
         * "Points" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        points: GlideElementNumeric;
        
        /**
         * "Release" column element.
         * Mandatory: true; Max Length: 32.
         */
        release: $$GlideElement.rm_release_scrum;
        
        /**
         * "Team" column element.
         * Max Length: 32.
         */
        release_team: $$GlideElement.scrum_pp_team;
        
        /**
         * "Current scope points" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        story_points: GlideElementNumeric;
        
        /**
         * "Group capacity (points)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        team_points: GlideElementNumeric;
    }
    
    /**
     * "Theme" GlideRecord fields.
     * @see {@link $$GlideRecord.scrum_theme}
     * @see {@link $$GlideElement.scrum_theme}
     */
    export interface scrum_theme extends IBaseRecord {
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Number" column element.
         * Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Product" column element.
         * Max Length: 32.
         */
        product: $$GlideElement.cmdb_model;
        
        /**
         * "Short description" column element.
         * Mandatory: true; Max Length: 80.
         */
        short_description: GlideElement;
        
        /**
         * "Sys class name" column element.
         * Max Length: 40.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
    }
    
    /**
     * "Business Calendar Entry Name" GlideRecord fields.
     * @see {@link $$GlideRecord.business_calendar_span_name}
     * @see {@link $$GlideElement.business_calendar_span_name}
     */
    export interface business_calendar_span_name extends sys_metadata {
        /**
         * "Calendar" column element.
         * Mandatory: true; Max Length: 32.
         */
        calendar: $$GlideElement.business_calendar;
        
        /**
         * "Label" column element.
         * Max Length: 80.
         */
        label: GlideElement;
        
        /**
         * "Long name" column element.
         * Mandatory: true; Max Length: 240.
         */
        long_name: GlideElementTranslatedField;
        
        /**
         * "Short name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        short_name: GlideElementTranslatedField;
    }

    /**
     * "Version" GlideRecord fields.
     * @see {@link $$GlideRecord.wf_versionable}
     * @see {@link $$GlideElement.wf_versionable}
     */
    export interface wf_versionable extends IBaseRecord {
        /**
         * "Checked out" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        checked_out: GlideElementGlideObject;
        
        /**
         * "Checked out by" column element.
         * Max Length: 32.
         */
        checked_out_by: $$GlideElement.sys_user;
        
        /**
         * "Published" column element.
         * Max Length: 40.
         */
        published: GlideElementBoolean;
        
        /**
         * "Valid from" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        valid_from: GlideElementGlideObject;
        
        /**
         * "Valid to" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        valid_to: GlideElementGlideObject;
        
        /**
         * "Version" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        version: GlideElementNumeric;
        
        /**
         * "Version Container" column element.
         * Max Length: 100.
         */
        version_container_id: GlideElement;
        
        /**
         * "Element Definition" column element.
         * Max Length: 32.
         */
        wf_element_definition: $$GlideElement.wf_element_definition;
    }
    
    /**
     * "Service Portal" GlideRecord fields.
     * @see {@link $$GlideRecord.sp_portal}
     * @see {@link $$GlideElement.sp_portal}
     */
    export interface sp_portal extends sys_metadata {
        /**
         * "CSS variables" column element.
         * Type: "Properties" (properties).
         * Max Length: 16777215.
         */
        css_variables: GlideElement;
        
        /**
         * "Dark theme" column element.
         * Max Length: 32.
         */
        dark_theme: $$GlideElement.sp_theme;
        
        /**
         * "Default" column element.
         * Max Length: 40.
         */
        default: GlideElementBoolean;
        
        /**
         * "Enable AI Search" column element.
         * Max Length: 40.
         */
        enable_ais: GlideElementBoolean;
        
        /**
         * "Enable favorites" column element.
         * Max Length: 40.
         */
        enable_favorites: GlideElementBoolean;
        
        /**
         * "Hide portal name" column element.
         * Max Length: 40.
         */
        hide_portal_name: GlideElementBoolean;
        
        /**
         * "Homepage" column element.
         * Max Length: 32.
         */
        homepage: $$GlideElement.sp_page;
        
        /**
         * "Icon" column element.
         * Max Length: 40.
         */
        icon: GlideElementUserImage;
        
        /**
         * "Knowledge base" column element.
         * Max Length: 32.
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "KB home page" column element.
         * Max Length: 32.
         */
        kb_knowledge_page: $$GlideElement.sp_page;
        
        /**
         * "Login page" column element.
         * Max Length: 32.
         */
        login_page: $$GlideElement.sp_page;
        
        /**
         * "Logo" column element.
         * Max Length: 40.
         */
        logo: GlideElementUserImage;
        
        /**
         * "404 page" column element.
         * Max Length: 32.
         */
        notfound_page: $$GlideElement.sp_page;
        
        /**
         * "Quick start config" column element.
         * Type: "JSON" (json).
         * Max Length: 4000.
         */
        quick_start_config: GlideElement;
        
        /**
         * "Catalog" column element.
         * Max Length: 32.
         */
        sc_catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Catalog home page" column element.
         * Max Length: 32.
         */
        sc_catalog_page: $$GlideElement.sp_page;
        
        /**
         * "Catalog category home page" column element.
         * Max Length: 32.
         */
        sc_category_page: $$GlideElement.sp_page;
        
        /**
         * "Search Application" column element.
         * Max Length: 32.
         */
        search_application: $$GlideElement.sys_search_context_config;
        
        /**
         * "Search Results Configuration" column element.
         * Max Length: 32.
         */
        search_results_configuration: $$GlideElement.sys_ux_composite_data;
        
        /**
         * "Chat Queue" column element.
         * Max Length: 32.
         */
        sp_chat_queue: $$GlideElement.chat_queue;
        
        /**
         * "Main menu" column element.
         * Max Length: 32.
         */
        sp_rectangle_menu: $$GlideElement.sp_instance_menu;
        
        /**
         * "Theme" column element.
         * Max Length: 32.
         */
        theme: $$GlideElement.sp_theme;
        
        /**
         * "Title" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        title: GlideElementTranslatedText;
        
        /**
         * "Text Index Group" column element.
         * Max Length: 32.
         */
        ts_index_group: $$GlideElement.ts_index_group;
        
        /**
         * "URL suffix" column element.
         * Mandatory: true; Unique: true; Max Length: 40.
         */
        url_suffix: GlideElement;
    }
    
    /**
     * "Assessment Metric Template" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_template}
     * @see {@link $$GlideElement.asmt_template}
     */
    export interface asmt_template extends sys_metadata {
        /**
         * "Allow Image" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        allow_image: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Number" column element.
         * Read-only: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "MID Server" GlideRecord fields.
     * @see {@link $$GlideRecord.ecc_agent}
     * @see {@link $$GlideElement.ecc_agent}
     */
    export interface ecc_agent extends IBaseRecord {
        /**
         * "Application Experience" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "not_applicable".
         */
        application_experience: GlideElement;
        
        /**
         * "Application Experience Status" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "cannot_determine".
         */
        application_experience_status: GlideElement;
        
        /**
         * "Auto Invalidated" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        auto_invalidated: GlideElementBoolean;
        
        /**
         * "Container Deployment Name" column element.
         * Max Length: 64.
         */
        container_deployment_name: GlideElement;
        
        /**
         * "Container Deployment Namespace" column element.
         * Max Length: 64.
         */
        container_deployment_namespace: GlideElement;
        
        /**
         * "Container ID" column element.
         * Max Length: 80.
         */
        container_id: GlideElement;
        
        /**
         * "Deployment MID Server Id" column element.
         * Max Length: 32.
         */
        deployment_mid_id: GlideElement;
        
        /**
         * "FIPS Enforced" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        fips_enforced: GlideElementBoolean;
        
        /**
         * "Home directory" column element.
         * Max Length: 1024.
         */
        home_dir: GlideElement;
        
        /**
         * "Host core count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        host_cpu_core_count: GlideElementNumeric;
        
        /**
         * "Host cpu speed (MHz)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        host_cpu_speed: GlideElementNumeric;
        
        /**
         * "Host total disk size" column element.
         * Max Length: 40.
         */
        host_disk_size: GlideElement;
        
        /**
         * "Host total disk size bytes" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 20.
         */
        host_disk_size_bytes: GlideElementNumeric;
        
        /**
         * "Host glibc version" column element.
         * Max Length: 80.
         */
        host_glibc_version: GlideElement;
        
        /**
         * "Host cpu hyperthreading" column element.
         * Max Length: 40.
         */
        host_hyperthreading: GlideElementBoolean;
        
        /**
         * "Host name" column element.
         * Max Length: 254.
         */
        host_name: GlideElement;
        
        /**
         * "Host OS architecture" column element.
         * Max Length: 40.
         */
        host_os_address_width: GlideElement;
        
        /**
         * "Host OS distribution" column element.
         * Max Length: 80.
         */
        host_os_distribution: GlideElement;
        
        /**
         * "Host OS version" column element.
         * Max Length: 80.
         */
        host_os_version: GlideElement;
        
        /**
         * "Host powershell version" column element.
         * Max Length: 80.
         */
        host_powershell_version: GlideElement;
        
        /**
         * "Host Installed RAM (MB)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        host_total_ram: GlideElementNumeric;
        
        /**
         * "Host OS" column element.
         * Max Length: 40.
         */
        host_type: GlideElement;
        
        /**
         * "Idle Since" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        idle_since: GlideElementGlideObject;
        
        /**
         * "Invalidated At" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        invalidated_at: GlideElementGlideObject;
        
        /**
         * "Invalidated By" column element.
         * Max Length: 40.
         */
        invalidated_by: GlideElement;
        
        /**
         * "IP address" column element.
         * Max Length: 40.
         */
        ip_address: GlideElementIPAddress;
        
        /**
         * "Is running using System account" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_running_using_system: GlideElementBoolean;
        
        /**
         * "Is using a custom certificate" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_using_custom_cert: GlideElementBoolean;
        
        /**
         * "Is using mutual authentication" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_using_mutual_auth: GlideElementBoolean;
        
        /**
         * "JFR Recording State" column element.
         * Max Length: 40.
         */
        jfr_rec_state: GlideElement;
        
        /**
         * "JVM version" column element.
         * Max Length: 40.
         */
        jvm_version: GlideElement;
        
        /**
         * "Last refreshed" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_refreshed: GlideElementGlideObject;
        
        /**
         * "MID Java command directory" column element.
         * Max Length: 1024.
         */
        mid_java_command_dir: GlideElement;
        
        /**
         * "JVM RAM (MB)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        mid_maximum_ram: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Network" column element.
         * Max Length: 45.
         */
        network: GlideElement;
        
        /**
         * "Nmap Version" column element.
         * Max Length: 40.
         */
        nmap_version: GlideElement;
        
        /**
         * "Profile ID" column element.
         * Max Length: 32.
         */
        profile_id: $$GlideElement.mid_server_profile;
        
        /**
         * "Public Key" column element.
         * Max Length: 2048.
         */
        public_key: GlideElement;
        
        /**
         * "Purpose" column element.
         * Max Length: 1024.
         */
        purpose: GlideElement;
        
        /**
         * "Router" column element.
         * Max Length: 40.
         */
        router: GlideElementIPAddress;
        
        /**
         * "Started" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        started: GlideElementGlideObject;
        
        /**
         * "Status" column element.
         * Max Length: 40.
         */
        status: GlideElement;
        
        /**
         * "Stopped" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        stopped: GlideElementGlideObject;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        timezone: GlideElement;
        
        /**
         * "Unresolved issues" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        unresolved_issues: GlideElementNumeric;
        
        /**
         * "Used Installer" column element.
         * Max Length: 40.
         */
        used_installer: GlideElementBoolean;
        
        /**
         * "Logged in user" column element.
         * Max Length: 40.
         */
        user_name: GlideElement;
        
        /**
         * "Validated" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "rekey".
         */
        validated: GlideElement;
        
        /**
         * "Validated At" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        validated_at: GlideElementGlideObject;
        
        /**
         * "Validated By" column element.
         * Max Length: 40.
         */
        validated_by: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 80.
         */
        version: GlideElement;
        
        /**
         * "Windows domain" column element.
         * Max Length: 40.
         */
        win_domain: GlideElement;
        
        /**
         * "Wrapper Name" column element.
         * Max Length: 256.
         */
        wrapper_name: GlideElement;
    }
    
    /**
     * "Mid Server Profile" GlideRecord fields.
     * @see {@link $$GlideRecord.mid_server_profile}
     * @see {@link $$GlideElement.mid_server_profile}
     */
    export interface mid_server_profile extends IBaseRecord {
        /**
         * "Description" column element.
         * Max Length: 256.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Number" column element.
         * Read-only: true; Max Length: 80.
         */
        number: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 100.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Team name" GlideRecord fields.
     * @see {@link $$GlideRecord.scrum_pp_team_name}
     * @see {@link $$GlideElement.scrum_pp_team_name}
     */
    export interface scrum_pp_team_name extends IBaseRecord {
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Short description" column element.
         * Max Length: 80.
         */
        short_description: GlideElement;
        
        /**
         * "Sys class name" column element.
         * Max Length: 40.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
    }
    
    /**
     * "CI Relationship Type" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_rel_type}
     * @see {@link $$GlideElement.cmdb_rel_type}
     */
    export interface cmdb_rel_type extends sys_metadata {
        /**
         * "Child descriptor" column element.
         * Max Length: 40.
         */
        child_descriptor: GlideElementTranslatedField;
        
        /**
         * "End point" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        end_point: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Parent descriptor" column element.
         * Max Length: 40.
         */
        parent_descriptor: GlideElementTranslatedField;
    }
    
    /**
     * "CI Relationship" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_rel_ci}
     * @see {@link $$GlideElement.cmdb_rel_ci}
     */
    export interface cmdb_rel_ci extends IBaseRecord {
        /**
         * "Child" column element.
         * Max Length: 32.
         */
        child: $$GlideElement.cmdb_ci;
        
        /**
         * "Connection strength" column element.
         * Max Length: 40.
         * Default Value: "always".
         */
        connection_strength: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.cmdb_ci;
        
        /**
         * "Percent outage" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        percent_outage: GlideElementNumeric;
        
        /**
         * "Port" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        port: GlideElementNumeric;
        
        /**
         * "Type" column element.
         * Max Length: 32.
         */
        type: $$GlideElement.cmdb_rel_type;
    }
    
    /**
     * "Virtual Machine Object" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_vm_object}
     * @see {@link $$GlideElement.cmdb_ci_vm_object}
     */
    export interface cmdb_ci_vm_object extends cmdb_ci {
        /**
         * "Object ID" column element.
         * Max Length: 512.
         */
        object_id: GlideElement;
        
        /**
         * "Server" column element.
         * Max Length: 32.
         */
        server: $$GlideElement.cmdb_ci_server;
    }
    
    /**
     * "VMware vCenter Object" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_vcenter_object}
     * @see {@link $$GlideElement.cmdb_ci_vcenter_object}
     */
    export interface cmdb_ci_vcenter_object extends cmdb_ci_vm_object {
        /**
         * "Managed object reference ID" column element.
         * Max Length: 255.
         */
        morid: GlideElement;
        
        /**
         * "vCenter Reference" column element.
         * Max Length: 32.
         */
        vcenter_ref: $$GlideElement.cmdb_ci_vcenter;
        
        /**
         * "vCenter Instance UUID" column element.
         * Max Length: 255.
         */
        vcenter_uuid: GlideElement;
    }
    
    /**
     * "Application" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_appl}
     * @see {@link $$GlideElement.cmdb_ci_appl}
     */
    export interface cmdb_ci_appl extends cmdb_ci {
        /**
         * "Credentialless Discovery Port" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        cl_port: GlideElementNumeric;
        
        /**
         * "Classifier" column element.
         * Max Length: 32.
         */
        classifier: $$GlideElement.discovery_classy_proc;
        
        /**
         * "Configuration directory" column element.
         * Max Length: 255.
         */
        config_directory: GlideElement;
        
        /**
         * "Configuration file" column element.
         * Max Length: 255.
         */
        config_file: GlideElement;
        
        /**
         * "Edition" column element.
         * Max Length: 100.
         */
        edition: GlideElement;
        
        /**
         * "Installation directory" column element.
         * Max Length: 255.
         */
        install_directory: GlideElement;
        
        /**
         * "Is clustered" column element.
         * Max Length: 40.
         */
        is_clustered: GlideElementBoolean;
        
        /**
         * "PID" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        pid: GlideElementNumeric;
        
        /**
         * "Running process command hash" column element.
         * Max Length: 255.
         */
        rp_command_hash: GlideElement;
        
        /**
         * "Running process key parameters hash" column element.
         * Max Length: 255.
         */
        rp_key_parameters_hash: GlideElement;
        
        /**
         * "Running process" column element.
         * Max Length: 32.
         */
        running_process: $$GlideElement.cmdb_running_process;
        
        /**
         * "Running process command" column element.
         * Max Length: 65000.
         */
        running_process_command: GlideElement;
        
        /**
         * "Running process key parameters" column element.
         * Max Length: 65000.
         */
        running_process_key_parameters: GlideElement;
        
        /**
         * "TCP port(s)" column element.
         * Max Length: 255.
         */
        tcp_port: GlideElement;
        
        /**
         * "Used for" column element.
         * Max Length: 40.
         * Default Value: "Production".
         */
        used_for: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 255.
         */
        version: GlideElement;
    }
    
    /**
     * "VMware vCenter Instance" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_vcenter}
     * @see {@link $$GlideElement.cmdb_ci_vcenter}
     */
    export interface cmdb_ci_vcenter extends cmdb_ci_appl {
        /**
         * "API version" column element.
         * Max Length: 255.
         */
        api_version: GlideElement;
        
        /**
         * "Full name" column element.
         * Max Length: 255.
         */
        fullname: GlideElement;
        
        /**
         * "Instance UUID" column element.
         * Max Length: 255.
         */
        instance_uuid: GlideElement;
        
        /**
         * "URL" column element.
         * Max Length: 255.
         */
        url: GlideElementURL;
    }
    
    /**
     * "Running Process" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_running_process}
     * @see {@link $$GlideElement.cmdb_running_process}
     */
    export interface cmdb_running_process extends IBaseRecord {
        /**
         * "Absent" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        absent: GlideElementBoolean;
        
        /**
         * "Classify" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        classify: GlideElementBoolean;
        
        /**
         * "Command" column element.
         * Max Length: 65000.
         */
        command: GlideElement;
        
        /**
         * "Computer" column element.
         * Max Length: 32.
         */
        computer: $$GlideElement.cmdb_ci_computer;
        
        /**
         * "Connecting to" column element.
         * Max Length: 8000.
         */
        connecting_to: GlideElement;
        
        /**
         * "Count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        count: GlideElementNumeric;
        
        /**
         * "Key parameters" column element.
         * Max Length: 65000.
         */
        key_parameters: GlideElement;
        
        /**
         * "Listening on" column element.
         * Max Length: 255.
         */
        listening_on: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Parameters" column element.
         * Max Length: 65000.
         */
        parameters: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.cmdb_running_process;
        
        /**
         * "PID" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        pid: GlideElementNumeric;
        
        /**
         * "PPID" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        ppid: GlideElementNumeric;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Cloud Network" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_network}
     * @see {@link $$GlideElement.cmdb_ci_network}
     */
    export interface cmdb_ci_network extends cmdb_ci_vcenter_object {
        /**
         * "Access Port Vlan" column element.
         * Max Length: 100.
         */
        access_port_vlan: GlideElement;
        
        /**
         * "Admin State" column element.
         * Max Length: 100.
         */
        admin_state: GlideElement;
        
        /**
         * "Broadcast Address" column element.
         * Max Length: 100.
         */
        broadcast_address: GlideElement;
        
        /**
         * "Capability Control" column element.
         * Max Length: 100.
         */
        capability_control: GlideElement;
        
        /**
         * "Cidr" column element.
         * Max Length: 100.
         */
        cidr: GlideElement;
        
        /**
         * "Default Gateway" column element.
         * Max Length: 100.
         */
        default_gateway: GlideElement;
        
        /**
         * "Domain Name" column element.
         * Max Length: 100.
         */
        domain_name: GlideElement;
        
        /**
         * "DHCP Enabled" column element.
         * Max Length: 40.
         */
        is_dhcp_enabled: GlideElementBoolean;
        
        /**
         * "External" column element.
         * Max Length: 40.
         */
        is_external: GlideElementBoolean;
        
        /**
         * "Shared" column element.
         * Max Length: 40.
         */
        is_shared: GlideElementBoolean;
        
        /**
         * "Max Ports" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        max_ports: GlideElementNumeric;
        
        /**
         * "Netmask" column element.
         * Max Length: 100.
         */
        netmask: GlideElement;
        
        /**
         * "Parent Domain Name" column element.
         * Max Length: 100.
         */
        parent_domain_name: GlideElement;
        
        /**
         * "Provided Contracts" column element.
         * Max Length: 100.
         */
        provided_contracts: GlideElement;
        
        /**
         * "Scope" column element.
         * Max Length: 100.
         */
        scope: GlideElement;
        
        /**
         * "State" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "Switch Port Mode" column element.
         * Max Length: 100.
         */
        switch_port_mode: GlideElement;
        
        /**
         * "System MTU" column element.
         * Max Length: 100.
         */
        system_mtu: GlideElement;
        
        /**
         * "Terminate On" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        terminated_on: GlideElementGlideObject;
    }
    
    /**
     * "Classification" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_classy}
     * @see {@link $$GlideElement.discovery_classy}
     */
    export interface discovery_classy extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Disabled" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        disabled: GlideElementBoolean;
        
        /**
         * "Match criteria" column element.
         * Max Length: 40.
         * Default Value: "Any".
         */
        match_criteria: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "On classification script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         * Default Value: "// This script gets run when something gets classified".
         */
        script: GlideElementScript;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Computer" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_computer}
     * @see {@link $$GlideElement.cmdb_ci_computer}
     */
    export interface cmdb_ci_computer extends cmdb_ci_hardware {
        /**
         * "CD" column element.
         * Max Length: 40.
         */
        cd_rom: GlideElementBoolean;
        
        /**
         * "CD Speed" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        cd_speed: GlideElementNumeric;
        
        /**
         * "Chassis type" column element.
         * Max Length: 40.
         */
        chassis_type: GlideElement;
        
        /**
         * "CPU core count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        cpu_core_count: GlideElementNumeric;
        
        /**
         * "CPU core thread" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        cpu_core_thread: GlideElementNumeric;
        
        /**
         * "CPU count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        cpu_count: GlideElementNumeric;
        
        /**
         * "CPU manufacturer" column element.
         * Max Length: 32.
         */
        cpu_manufacturer: $$GlideElement.core_company;
        
        /**
         * "CPU name" column element.
         * Max Length: 100.
         */
        cpu_name: GlideElement;
        
        /**
         * "CPU speed (MHz)" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        cpu_speed: GlideElementNumeric;
        
        /**
         * "CPU type" column element.
         * Max Length: 40.
         */
        cpu_type: GlideElement;
        
        /**
         * "Disk space (GB)" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        disk_space: GlideElementNumeric;
        
        /**
         * "Floppy" column element.
         * Max Length: 40.
         */
        floppy: GlideElement;
        
        /**
         * "Form factor" column element.
         * Max Length: 40.
         */
        form_factor: GlideElement;
        
        /**
         * "Object ID" column element.
         * Max Length: 512.
         */
        object_id: GlideElement;
        
        /**
         * "Operating System" column element.
         * Max Length: 50.
         */
        os: GlideElement;
        
        /**
         * "OS Address Width (bits)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        os_address_width: GlideElementNumeric;
        
        /**
         * "OS Domain" column element.
         * Max Length: 40.
         */
        os_domain: GlideElement;
        
        /**
         * "OS Service Pack" column element.
         * Max Length: 40.
         */
        os_service_pack: GlideElement;
        
        /**
         * "OS Version" column element.
         * Max Length: 40.
         */
        os_version: GlideElement;
        
        /**
         * "RAM (MB)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        ram: GlideElementNumeric;
        
        /**
         * "Is Virtual" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        virtual: GlideElementBoolean;
    }
    
    /**
     * "Server" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_server}
     * @see {@link $$GlideElement.cmdb_ci_server}
     */
    export interface cmdb_ci_server extends cmdb_ci_computer {
        /**
         * "Classification" column element.
         * Max Length: 40.
         * Default Value: "Production".
         */
        classification: GlideElement;
        
        /**
         * "Cluster ID" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        cluster_id: GlideElement;
        
        /**
         * "Cluster Name" column element.
         * Max Length: 32.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        cluster_name: $$GlideElement.cmdb_ci_rubrik_cluster;
        
        /**
         * "Disaster backup" column element.
         * Max Length: 32.
         */
        dr_backup: $$GlideElement.cmdb_ci_server;
        
        /**
         * "Firewall status" column element.
         * Max Length: 40.
         * Default Value: "Intranet".
         */
        firewall_status: GlideElement;
        
        /**
         * "Host name" column element.
         * Max Length: 255.
         */
        host_name: GlideElement;
        
        /**
         * "Used for" column element.
         * Max Length: 40.
         * Default Value: "Production".
         */
        used_for: GlideElement;
    }
    
    /**
     * "Cluster" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_cluster}
     * @see {@link $$GlideElement.cmdb_ci_cluster}
     */
    export interface cmdb_ci_cluster extends cmdb_ci {
        /**
         * "Cluster ID" column element.
         * Read-only: true; Max Length: 255.
         */
        cluster_id: GlideElement;
        
        /**
         * "Cluster Status" column element.
         * Read-only: true; Max Length: 40.
         */
        cluster_status: GlideElement;
        
        /**
         * "Cluster Type" column element.
         * Read-only: true; Max Length: 40.
         */
        cluster_type: GlideElement;
        
        /**
         * "Cluster Version" column element.
         * Read-only: true; Max Length: 40.
         */
        cluster_version: GlideElement;
        
        /**
         * "Disk Space (GB)" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 38.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        disk_space: GlideElementNumeric;
    }
    
    /**
     * "IP Network" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_ip_network}
     * @see {@link $$GlideElement.cmdb_ci_ip_network}
     */
    export interface cmdb_ci_ip_network extends cmdb_ci {
        /**
         * "Discover" column element.
         * Max Length: 40.
         */
        discover: GlideElementBoolean;
        
        /**
         * "Hi IP" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        hi_ip: GlideElementNumeric;
        
        /**
         * "Hi IP expanded" column element.
         * Max Length: 40.
         */
        hi_ip_expanded: GlideElementIPAddress;
        
        /**
         * "Lo IP" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        lo_ip: GlideElementNumeric;
        
        /**
         * "Lo IP expanded" column element.
         * Max Length: 40.
         */
        lo_ip_expanded: GlideElementIPAddress;
        
        /**
         * "Mid server" column element.
         * Max Length: 40.
         */
        mid_server: GlideElement;
        
        /**
         * "Network discovery" column element.
         * Max Length: 32.
         */
        network_discovery: $$GlideElement.discovery_status;
        
        /**
         * "Router" column element.
         * Max Length: 32.
         */
        router: $$GlideElement.cmdb_ci;
        
        /**
         * "Router interface type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        router_interface_type: GlideElement;
        
        /**
         * "State" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "Ready".
         */
        state: GlideElement;
        
        /**
         * "Subnet" column element.
         * Max Length: 40.
         */
        subnet: GlideElement;
    }
    
    /**
     * "Discovery Status" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_status}
     * @see {@link $$GlideElement.discovery_status}
     */
    export interface discovery_status extends IBaseRecord {
        /**
         * "Completed" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        completed: GlideElementNumeric;
        
        /**
         * "Description" column element.
         * Max Length: 255.
         */
        description: GlideElement;
        
        /**
         * "Discover" column element.
         * Max Length: 40.
         */
        discover: GlideElement;
        
        /**
         * "Schedule" column element.
         * Max Length: 32.
         */
        dscheduler: $$GlideElement.discovery_schedule;
        
        /**
         * "Duration" column element.
         * Type: "Duration" (glide_duration).
         * Read-only: true; Max Length: 40.
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Estimated probe count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        estimated_probe_count: GlideElementNumeric;
        
        /**
         * "Include alive" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        include_alive: GlideElementBoolean;
        
        /**
         * "Log state changes" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        log_state_changes: GlideElementBoolean;
        
        /**
         * "Max run time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        max_run: GlideElementGlideObject;
        
        /**
         * "Number" column element.
         * Display: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Priority" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 2.
         */
        priority: GlideElementNumeric;
        
        /**
         * "Progress" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Read-only: true; Max Length: 15.
         */
        progress: GlideElementNumeric;
        
        /**
         * "Scheduler job" column element.
         * Max Length: 40.
         */
        scheduler_job: GlideElement;
        
        /**
         * "Scratch pad" column element.
         * Max Length: 8000.
         */
        scratchpad: GlideElementNameValue;
        
        /**
         * "Source" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: "Schedule_Discovery".
         */
        source: GlideElement;
        
        /**
         * "Started" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        started: GlideElementNumeric;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "Starting".
         */
        state: GlideElement;
        
        /**
         * "Status type" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Use SNMP Version" column element.
         * Max Length: 40.
         * Default Value: "v1_v2c".
         */
        use_snmp_version: GlideElement;
    }
    
    /**
     * "Scheduled Job" GlideRecord fields.
     * @see {@link $$GlideRecord.sysauto}
     * @see {@link $$GlideElement.sysauto}
     */
    export interface sysauto extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Business Calendar" column element.
         * Max Length: 32.
         */
        business_calendar: $$GlideElement.business_calendar;
        
        /**
         * "Condition" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        condition: GlideElementScript;
        
        /**
         * "Conditional" column element.
         * Max Length: 40.
         */
        conditional: GlideElementBoolean;
        
        /**
         * "Time" column element.
         * Type: "UTC Time" (glide_utc_time).
         * Max Length: 40.
         */
        entered_time: GlideElementGlideObject;
        
        /**
         * "Max drift" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        max_drift: GlideElementGlideObject;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Offset" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        offset: GlideElementGlideObject;
        
        /**
         * "Offset type" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        offset_type: GlideElementNumeric;
        
        /**
         * "Run as" column element.
         * Max Length: 32.
         */
        run_as: $$GlideElement.sys_user;
        
        /**
         * "Run as tz" column element.
         * Max Length: 40.
         */
        run_as_tz: GlideElement;
        
        /**
         * "Day(run_dayofmonth)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        run_dayofmonth: GlideElementNumeric;
        
        /**
         * "Day(run_dayofweek)" column element.
         * Type: "Day of Week" (day_of_week); Scalar type: integer.
         * Max Length: 40.
         */
        run_dayofweek: GlideElementGlideObject;
        
        /**
         * "Repeat Interval" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        run_period: GlideElementGlideObject;
        
        /**
         * "Starting" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        run_start: GlideElementGlideObject;
        
        /**
         * "Time" column element.
         * Type: "Time" (glide_time).
         * Max Length: 40.
         */
        run_time: GlideElementGlideObject;
        
        /**
         * "Run" column element.
         * Max Length: 40.
         * Default Value: "daily".
         */
        run_type: GlideElement;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        time_zone: GlideElement;
        
        /**
         * "Upgrade safe" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        upgrade_safe: GlideElementBoolean;
    }
    
    /**
     * "Scheduled Script Execution" GlideRecord fields.
     * @see {@link $$GlideRecord.sysauto_script}
     * @see {@link $$GlideElement.sysauto_script}
     */
    export interface sysauto_script extends sysauto {
        /**
         * "Run this script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        script: GlideElementScript;
    }
    
    /**
     * "MID Server Cluster" GlideRecord fields.
     * @see {@link $$GlideRecord.ecc_agent_cluster}
     * @see {@link $$GlideElement.ecc_agent_cluster}
     */
    export interface ecc_agent_cluster extends IBaseRecord {
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 50.
         * Default Value: "Load Balance".
         */
        type: GlideElement;
    }
    
    /**
     * "Hardware" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_hardware}
     * @see {@link $$GlideElement.cmdb_ci_hardware}
     */
    export interface cmdb_ci_hardware extends cmdb_ci {
        /**
         * "Default Gateway" column element.
         * Max Length: 40.
         */
        default_gateway: GlideElement;
        
        /**
         * "Hardware Status" column element.
         * Max Length: 40.
         * Default Value: "installed".
         */
        hardware_status: GlideElement;
        
        /**
         * "Substatus" column element.
         * Max Length: 40.
         */
        hardware_substatus: GlideElement;
        
        /**
         * "Internet Facing" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        internet_facing: GlideElementBoolean;
        
        /**
         * "Most frequent logged in user" column element.
         * Max Length: 32.
         */
        most_frequent_user: $$GlideElement.sys_user;
    }
    
    /**
     * "Network Gear" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_netgear}
     * @see {@link $$GlideElement.cmdb_ci_netgear}
     */
    export interface cmdb_ci_netgear extends cmdb_ci_hardware {
        /**
         * "Estimated bandwidth" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        bandwidth: GlideElementNumeric;
        
        /**
         * "Can hub IP" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        can_hub: GlideElementBoolean;
        
        /**
         * "Can partition VLANs" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        can_partitionvlans: GlideElementBoolean;
        
        /**
         * "Can route IP" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        can_route: GlideElementBoolean;
        
        /**
         * "Can switch IP" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        can_switch: GlideElementBoolean;
        
        /**
         * "Channels" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        channels: GlideElementNumeric;
        
        /**
         * "CPU count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        cpu_count: GlideElementNumeric;
        
        /**
         * "CPU manufacturer" column element.
         * Max Length: 32.
         */
        cpu_manufacturer: $$GlideElement.core_company;
        
        /**
         * "CPU speed (MHz)" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        cpu_speed: GlideElementNumeric;
        
        /**
         * "CPU type" column element.
         * Max Length: 40.
         */
        cpu_type: GlideElement;
        
        /**
         * "Device type" column element.
         * Max Length: 40.
         */
        device_type: GlideElement;
        
        /**
         * "Discovery Protocol ID" column element.
         * Max Length: 256.
         */
        discovery_proto_id: GlideElement;
        
        /**
         * "Discovery Protocol Type" column element.
         * Max Length: 40.
         */
        discovery_proto_type: GlideElement;
        
        /**
         * "Disk space (GB)" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        disk_space: GlideElementNumeric;
        
        /**
         * "Firmware manufacturer" column element.
         * Max Length: 32.
         */
        firmware_manufacturer: $$GlideElement.core_company;
        
        /**
         * "Firmware version" column element.
         * Max Length: 40.
         */
        firmware_version: GlideElement;
        
        /**
         * "Physical interface count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        physical_interface_count: GlideElementNumeric;
        
        /**
         * "Ports" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        ports: GlideElementNumeric;
        
        /**
         * "RAM (MB)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        ram: GlideElementNumeric;
        
        /**
         * "Range" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        range: GlideElementNumeric;
        
        /**
         * "SNMP Location" column element.
         * Max Length: 255.
         */
        snmp_sys_location: GlideElement;
    }
    
    /**
     * "Network Adapter" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_network_adapter}
     * @see {@link $$GlideElement.cmdb_ci_network_adapter}
     */
    export interface cmdb_ci_network_adapter extends cmdb_ci {
        /**
         * "Alias" column element.
         * Max Length: 40.
         */
        alias: GlideElement;
        
        /**
         * "Configuration Item" column element.
         * Max Length: 32.
         */
        cmdb_ci: $$GlideElement.cmdb_ci;
        
        /**
         * "DHCP Enabled" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        dhcp_enabled: GlideElementBoolean;
        
        /**
         * "IP default gateway" column element.
         * Max Length: 60.
         */
        ip_default_gateway: GlideElementIPAddress;
        
        /**
         * "Mac manufacturer" column element.
         * Max Length: 32.
         */
        mac_manufacturer: $$GlideElement.core_company;
        
        /**
         * "Netmask" column element.
         * Max Length: 40.
         * Default Value: "255.255.255.0".
         */
        netmask: GlideElement;
        
        /**
         * "Is Virtual" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        virtual: GlideElementBoolean;
    }

    /**
     * "Process Classification" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_classy_proc}
     * @see {@link $$GlideElement.discovery_classy_proc}
     */
    export interface discovery_classy_proc extends discovery_classy {
        /**
         * "Condition" column element.
         * Max Length: 4000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Relation type" column element.
         * Mandatory: true; Max Length: 32.
         */
        relation_type: $$GlideElement.cmdb_rel_type;
        
        /**
         * "Test with" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        test_with: $$GlideElement.cmdb_ci_computer;
    }
    
    /**
     * "Rubrik Cluster" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_rubrik_cluster}
     * @see {@link $$GlideElement.cmdb_ci_rubrik_cluster}
     */
    export interface cmdb_ci_rubrik_cluster extends cmdb_ci_cluster {
        /**
         * "API Version" column element.
         * Max Length: 40.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        api_version: GlideElement;
        
        /**
         * "Geolocation" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        geolocation: GlideElement;
        
        /**
         * "Timezone" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        timezone: GlideElement;
    }
    
    /**
     * "Discovery Schedule" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_schedule}
     * @see {@link $$GlideElement.discovery_schedule}
     */
    export interface discovery_schedule extends sysauto_script {
        /**
         * "Configuration" column element.
         * Max Length: 32.
         */
        accel_config: $$GlideElement.discovery_accel_config;
        
        /**
         * "Behavior" column element.
         * Max Length: 32.
         */
        behavior: $$GlideElement.discovery_behavior;
        
        /**
         * "CI" column element.
         * Max Length: 32.
         */
        ci_id: $$GlideElement.cmdb_ci;
        
        /**
         * "CI Type" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        ci_type: GlideElement;
        
        /**
         * "Credential alias" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         */
        credential_aliases: $$GlideElement.sys_alias;
        
        /**
         * "Run" column element.
         * Max Length: 40.
         * Default Value: "on_demand".
         */
        disco_run_type: GlideElement;
        
        /**
         * "Discover" column element.
         * Max Length: 40.
         */
        discover: GlideElement;
        
        /**
         * "Even if canceled" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        even_if_canceled: GlideElementBoolean;
        
        /**
         * "Include alive" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        include_alive: GlideElementBoolean;
        
        /**
         * "Location" column element.
         * Max Length: 32.
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Log state changes" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        log_state_changes: GlideElementBoolean;
        
        /**
         * "Max run time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        max_run: GlideElementGlideObject;
        
        /**
         * "MID Server cluster" column element.
         * Max Length: 32.
         */
        mid_cluster: $$GlideElement.ecc_agent_cluster;
        
        /**
         * "MID Server selection method" column element.
         * Max Length: 40.
         * Default Value: "specific_mid".
         */
        mid_select_method: GlideElement;
        
        /**
         * "MID Server" column element.
         * Max Length: 32.
         */
        mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Created by Quick Start" column element.
         * Read-only: true; Max Length: 40.
         */
        quick_start: GlideElementBoolean;
        
        /**
         * "Run after" column element.
         * Max Length: 32.
         */
        run_after: $$GlideElement.discovery_schedule;
        
        /**
         * "Filter Services to Discover" column element.
         * Max Length: 4000.
         */
        service_attributes: GlideElementConditions;
        
        /**
         * "Discover by" column element.
         * Max Length: 40.
         * Default Value: "ci_type".
         */
        service_discovery: GlideElement;
        
        /**
         * "Filter Groups to Discover" column element.
         * Max Length: 4000.
         */
        service_group_attributes: GlideElementConditions;
        
        /**
         * "Service Group Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         * Default Value: "cmdb_ci_service_group".
         */
        service_group_table: GlideElement;
        
        /**
         * "Service Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         * Default Value: "cmdb_ci_service_discovered".
         */
        service_table: GlideElement;
        
        /**
         * "Shazzam batch size" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1000.
         */
        shazzam_batch_size: GlideElementNumeric;
        
        /**
         * "Shazzam cluster support" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        shazzam_cluster_support: GlideElementBoolean;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Use SNMP version" column element.
         * Max Length: 40.
         * Default Value: "all".
         */
        use_snmp_version: GlideElement;
        
        /**
         * "Vm run" column element.
         * Read-only: true; Max Length: 32.
         */
        vm_run: $$GlideElement.discovery_schedule;
        
        /**
         * "Was Created By System" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        was_created_by_system: GlideElementBoolean;
    }
    
    /**
     * "Company" GlideRecord fields.
     * @see {@link $$GlideRecord.core_company}
     * @see {@link $$GlideElement.core_company}
     */
    export interface core_company extends IBaseRecord {
        /**
         * "Apple icon" column element.
         * Max Length: 40.
         */
        apple_icon: GlideElementUserImage;
        
        /**
         * "Banner image" column element.
         * Max Length: 40.
         */
        banner_image: GlideElementUserImage;
        
        /**
         * "UI16 Banner Image" column element.
         * Max Length: 40.
         */
        banner_image_light: GlideElementUserImage;
        
        /**
         * "Banner text" column element.
         * Max Length: 4000.
         */
        banner_text: GlideElement;
        
        /**
         * "City" column element.
         * Max Length: 50.
         */
        city: GlideElement;
        
        /**
         * "Contact" column element.
         * Max Length: 32.
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Coordinates retrieved on" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        coordinates_retrieved_on: GlideElementGlideObject;
        
        /**
         * "Country" column element.
         * Max Length: 40.
         * Default Value: "USA".
         */
        country: GlideElement;
        
        /**
         * "Customer" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        customer: GlideElementBoolean;
        
        /**
         * "Discount" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        discount: GlideElementNumeric;
        
        /**
         * "Fax phone" column element.
         * Type: "Phone Number" (ph_number).
         * Max Length: 40.
         */
        fax_phone: GlideElement;
        
        /**
         * "Fiscal year" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 40.
         */
        fiscal_year: GlideElementGlideObject;
        
        /**
         * "Lat long error" column element.
         * Max Length: 1000.
         */
        lat_long_error: GlideElement;
        
        /**
         * "Latitude" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        latitude: GlideElementNumeric;
        
        /**
         * "Longitude" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        longitude: GlideElementNumeric;
        
        /**
         * "Manufacturer" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        manufacturer: GlideElementBoolean;
        
        /**
         * "Market cap" column element.
         * Max Length: 20.
         */
        market_cap: GlideElementCurrency;
        
        /**
         * "Name" column element.
         * Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Notes" column element.
         * Max Length: 4000.
         */
        notes: GlideElement;
        
        /**
         * "Number of employees" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        num_employees: GlideElementNumeric;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.core_company;
        
        /**
         * "Phone" column element.
         * Type: "Phone Number" (ph_number).
         * Max Length: 40.
         */
        phone: GlideElement;
        
        /**
         * "Primary" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        primary: GlideElementBoolean;
        
        /**
         * "Profits" column element.
         * Max Length: 20.
         */
        profits: GlideElementCurrency;
        
        /**
         * "Publicly traded" column element.
         * Max Length: 40.
         */
        publicly_traded: GlideElementBoolean;
        
        /**
         * "Rank tier" column element.
         * Max Length: 40.
         */
        rank_tier: GlideElement;
        
        /**
         * "Revenue per year" column element.
         * Max Length: 20.
         */
        revenue_per_year: GlideElementCurrency;
        
        /**
         * "State / Province" column element.
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "Stock price" column element.
         * Max Length: 40.
         */
        stock_price: GlideElement;
        
        /**
         * "Stock symbol" column element.
         * Max Length: 40.
         */
        stock_symbol: GlideElement;
        
        /**
         * "Street" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 255.
         */
        street: GlideElement;
        
        /**
         * "Class" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Theme" column element.
         * Max Length: 32.
         */
        theme: $$GlideElement.sys_ui_theme;
        
        /**
         * "Vendor" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        vendor: GlideElementBoolean;
        
        /**
         * "Vendor manager" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         */
        vendor_manager: $$GlideElement.sys_user;
        
        /**
         * "Vendor type" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        vendor_type: $$GlideElement.vendor_type;
        
        /**
         * "Website" column element.
         * Max Length: 1024.
         */
        website: GlideElementURL;
        
        /**
         * "Zip / Postal code" column element.
         * Max Length: 40.
         */
        zip: GlideElement;
    }
    
    /**
     * "Base Theme" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_base_theme}
     * @see {@link $$GlideElement.sys_ui_base_theme}
     */
    export interface sys_ui_base_theme extends sys_metadata {
        /**
         * "CSS" column element.
         * Max Length: 65000.
         */
        css: GlideElement;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 40.
         */
        name: GlideElementTranslatedField;
    }
    
    /**
     * "Theme" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_theme}
     * @see {@link $$GlideElement.sys_ui_theme}
     */
    export interface sys_ui_theme extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Base Theme" column element.
         * Max Length: 32.
         */
        base_theme: $$GlideElement.sys_ui_base_theme;
        
        /**
         * "CSS" column element.
         * Max Length: 65000.
         */
        css: GlideElement;
        
        /**
         * "Device" column element.
         * Max Length: 40.
         * Default Value: "browser".
         */
        device: GlideElement;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 40.
         */
        name: GlideElementTranslatedField;
    }
    
    /**
     * "Department" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_department}
     * @see {@link $$GlideElement.cmn_department}
     */
    export interface cmn_department extends IBaseRecord {
        /**
         * "Business unit" column element.
         * Max Length: 32.
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Company" column element.
         * Max Length: 32.
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Cost center" column element.
         * Max Length: 32.
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Department head" column element.
         * Max Length: 32.
         */
        dept_head: $$GlideElement.sys_user;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Head count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        head_count: GlideElementNumeric;
        
        /**
         * "ID" column element.
         * Max Length: 40.
         */
        id: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.cmn_department;
        
        /**
         * "Primary contact" column element.
         * Max Length: 32.
         */
        primary_contact: $$GlideElement.sys_user;
    }
    
    /**
     * "Location" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_location}
     * @see {@link $$GlideElement.cmn_location}
     */
    export interface cmn_location extends IBaseRecord {
        /**
         * "City" column element.
         * Max Length: 40.
         */
        city: GlideElement;
        
        /**
         * "Location source" column element.
         * Max Length: 40.
         */
        cmn_location_source: GlideElement;
        
        /**
         * "Location type" column element.
         * Max Length: 40.
         */
        cmn_location_type: GlideElement;
        
        /**
         * "Company" column element.
         * Max Length: 32.
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Contact" column element.
         * Max Length: 32.
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Coordinates retrieved on" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        coordinates_retrieved_on: GlideElementGlideObject;
        
        /**
         * "Country" column element.
         * Max Length: 40.
         */
        country: GlideElement;
        
        /**
         * "Duplicate" column element.
         * Max Length: 40.
         */
        duplicate: GlideElementBoolean;
        
        /**
         * "Fax phone" column element.
         * Max Length: 40.
         */
        fax_phone: GlideElement;
        
        /**
         * "Full name" column element.
         * Max Length: 255.
         */
        full_name: GlideElement;
        
        /**
         * "Lat long error" column element.
         * Max Length: 1000.
         */
        lat_long_error: GlideElement;
        
        /**
         * "Latitude" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        latitude: GlideElementNumeric;
        
        /**
         * "Life Cycle Stage" column element.
         * Max Length: 40.
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
        
        /**
         * "Life Cycle Stage Status" column element.
         * Max Length: 40.
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
        
        /**
         * "Longitude" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        longitude: GlideElementNumeric;
        
        /**
         * "Managed by group" column element.
         * Max Length: 32.
         */
        managed_by_group: $$GlideElement.sys_user_group;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.cmn_location;
        
        /**
         * "Phone" column element.
         * Max Length: 40.
         */
        phone: GlideElement;
        
        /**
         * "Phone territory" column element.
         * Max Length: 32.
         */
        phone_territory: $$GlideElement.sys_phone_territory;
        
        /**
         * "Primary location" column element.
         * Max Length: 32.
         */
        primary_location: $$GlideElement.cmn_location;
        
        /**
         * "State / Province" column element.
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "Stock room" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        stock_room: GlideElementBoolean;
        
        /**
         * "Street" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 255.
         */
        street: GlideElement;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        time_zone: GlideElement;
        
        /**
         * "Zip / Postal Code" column element.
         * Max Length: 40.
         */
        zip: GlideElement;
    }
    
    /**
     * "Sys Phone Territory" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_phone_territory}
     * @see {@link $$GlideElement.sys_phone_territory}
     */
    export interface sys_phone_territory extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Country calling code" column element.
         * Mandatory: true; Unique: true; Max Length: 20.
         */
        ccc: GlideElement;
        
        /**
         * "Display" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        display: GlideElementBoolean;
        
        /**
         * "International direct dial" column element.
         * Max Length: 20.
         */
        idd: GlideElement;
        
        /**
         * "International prefix" column element.
         * Mandatory: true; Max Length: 40.
         */
        international_prefix: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "National prefix" column element.
         * Max Length: 40.
         */
        national_prefix: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "STD" column element.
         * Max Length: 20.
         */
        std: GlideElement;
        
        /**
         * "STD follows country" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        std_follows_ccc: GlideElementBoolean;
        
        /**
         * "Trunk dialing code optional" column element.
         * Max Length: 40.
         */
        std_optional: GlideElementBoolean;
    }
    
    /**
     * "User" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user}
     * @see {@link $$GlideElement.sys_user}
     */
    export interface sys_user extends IBaseRecord {
        /**
         * "Accumulated roles" column element.
         * Max Length: 4000.
         */
        accumulated_roles: GlideElement;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Avatar" column element.
         * Read-only: true; Max Length: 40.
         */
        avatar: GlideElementUserImage;
        
        /**
         * "Building" column element.
         * Max Length: 32.
         */
        building: $$GlideElement.cmn_building;
        
        /**
         * "Calendar integration" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        calendar_integration: GlideElementNumeric;
        
        /**
         * "City" column element.
         * Max Length: 40.
         */
        city: GlideElement;
        
        /**
         * "Company" column element.
         * Max Length: 32.
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Cost center" column element.
         * Max Length: 32.
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Country code" column element.
         * Max Length: 3.
         */
        country: GlideElement;
        
        /**
         * "Date format" column element.
         * Max Length: 40.
         */
        date_format: GlideElement;
        
        /**
         * "Default perspective" column element.
         * Max Length: 32.
         */
        default_perspective: $$GlideElement.sys_perspective;
        
        /**
         * "Department" column element.
         * Max Length: 32.
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "EDU Status" column element.
         * Active: false; Max Length: 40.
         * Default Value: "faculty".
         */
        edu_status: GlideElement;
        
        /**
         * "Email" column element.
         * Type: "Email" (email).
         * Max Length: 100.
         */
        email: GlideElement;
        
        /**
         * "Employee number" column element.
         * Max Length: 40.
         */
        employee_number: GlideElement;
        
        /**
         * "Enable Multifactor Authentication" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        enable_multifactor_authn: GlideElementBoolean;
        
        /**
         * "Failed login attempts" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        failed_attempts: GlideElementNumeric;
        
        /**
         * "First name" column element.
         * Max Length: 50.
         */
        first_name: GlideElement;
        
        /**
         * "Gender" column element.
         * Max Length: 40.
         */
        gender: GlideElement;
        
        /**
         * "Hashed User ID" column element.
         * Max Length: 200.
         */
        hashed_user_id: GlideElement;
        
        /**
         * "Home phone" column element.
         * Type: "Phone Number" (ph_number).
         * Max Length: 40.
         */
        home_phone: GlideElement;
        
        /**
         * "Internal Integration User" column element.
         * Max Length: 1.
         * Default Value: false.
         */
        internal_integration_user: GlideElementBoolean;
        
        /**
         * "Prefix" column element.
         * Max Length: 40.
         */
        introduction: GlideElement;
        
        /**
         * "Last login" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 40.
         */
        last_login: GlideElementGlideObject;
        
        /**
         * "Last login device" column element.
         * Active: false; Max Length: 40.
         */
        last_login_device: GlideElement;
        
        /**
         * "Last login time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_login_time: GlideElementGlideObject;
        
        /**
         * "Last name" column element.
         * Max Length: 50.
         */
        last_name: GlideElement;
        
        /**
         * "Last password" column element.
         * Active: false; Max Length: 40.
         */
        last_password: GlideElement;
        
        /**
         * "LDAP server" column element.
         * Max Length: 32.
         */
        ldap_server: $$GlideElement.ldap_server_config;
        
        /**
         * "Location" column element.
         * Max Length: 32.
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Locked out" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        locked_out: GlideElementBoolean;
        
        /**
         * "Manager" column element.
         * Max Length: 32.
         */
        manager: $$GlideElement.sys_user;
        
        /**
         * "Middle name" column element.
         * Max Length: 50.
         */
        middle_name: GlideElement;
        
        /**
         * "Mobile phone" column element.
         * Type: "Phone Number" (ph_number).
         * Max Length: 40.
         */
        mobile_phone: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 151.
         */
        name: GlideElement;
        
        /**
         * "Notification" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 2.
         */
        notification: GlideElementNumeric;
        
        /**
         * "Password needs reset" column element.
         * Max Length: 40.
         */
        password_needs_reset: GlideElementBoolean;
        
        /**
         * "Business phone" column element.
         * Type: "Phone Number" (ph_number).
         * Max Length: 40.
         */
        phone: GlideElement;
        
        /**
         * "Photo" column element.
         * Max Length: 40.
         */
        photo: GlideElementUserImage;
        
        /**
         * "Language" column element.
         * Max Length: 40.
         */
        preferred_language: GlideElement;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        roles: GlideElement;
        
        /**
         * "Schedule" column element.
         * Max Length: 32.
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Source" column element.
         * Max Length: 255.
         */
        source: GlideElement;
        
        /**
         * "State / Province" column element.
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "Street" column element.
         * Type: "Two Line Text Area" (multi_two_lines).
         * Max Length: 255.
         */
        street: GlideElement;
        
        /**
         * "Class" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         */
        sys_domain: $$GlideElement.sys_user_group;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Time format" column element.
         * Max Length: 40.
         */
        time_format: GlideElement;
        
        /**
         * "Time zone" column element.
         * Max Length: 40.
         */
        time_zone: GlideElement;
        
        /**
         * "Title" column element.
         * Max Length: 60.
         */
        title: GlideElement;
        
        /**
         * "User ID" column element.
         * Unique: true; Max Length: 40.
         */
        user_name: GlideElement;
        
        /**
         * "Password" column element.
         * Max Length: 100.
         */
        user_password: GlideElementPassword;
        
        /**
         * "VIP" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        vip: GlideElementBoolean;
        
        /**
         * "Web service access only" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        web_service_access_only: GlideElementBoolean;
        
        /**
         * "Zip / Postal code" column element.
         * Max Length: 40.
         */
        zip: GlideElement;
    }

    /**
     * "Notification Device" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_notif_device}
     * @see {@link $$GlideElement.cmn_notif_device}
     */
    export interface cmn_notif_device extends IBaseRecord {
        /**
         * "Active" column element.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Email Address" column element.
         * Type: "Email" (email).
         * Max Length: 100.
         */
        email_address: GlideElement;

        /**
         * "Group" column element.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         */
        order: GlideElementNumeric;
        
        /**
         * "Phone number" column element.
         * Max Length: 40.
         */
        phone_number: GlideElement;

        /**
         * "Primary email" column element.
         * Default Value: false.
         */
        primary_email: GlideElementBoolean;

        /**
         * "Push Application" column element.
         */
        push_app: $$GlideElement.sys_push_application;

        /**
         * "Schedule" column element.
         */
        schedule: $$GlideElement.cmn_schedule;

        /**
         * "Service provider" column element.
         */
        service_provider: $$GlideElement.cmn_notif_service_provider;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         */
        type: GlideElement;

        /**
         * "User" column element.
         */
        user: $$GlideElement.sys_user;
    }
    

    /**
     * "Notification Device Variable" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_notif_device_variable}
     * @see {@link $$GlideElement.cmn_notif_device_variable}
     */
    export interface cmn_notif_device_variable extends IBaseRecord {
        /**
         * "Device" column element.
         */
        device: $$GlideElement.cmn_notif_device;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Value" column element.
         * Max Length: 40.
         */
        value: GlideElement;
    }

    /**
     * "Tag" GlideRecord fields.
     * @see {@link $$GlideRecord.label}
     * @see {@link $$GlideElement.label}
     */
    export interface label extends IBaseRecord {
        /**
         * "Active" column element.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Background color" column element.
         * Max Length: 40.
         */
        background_color: GlideElement;
        
        /**
         * "Color" column element.
         * Max Length: 40.
         */
        color: GlideElement;

        /**
         * "Global" column element.
         */
        global: GlideElementBoolean;
        
        /**
         * "Groups" column element.
         * Type: "List" (glide_list); Scalar type: string.
         */
        group_list: $$GlideElement.sys_user_group;

        /**
         * "Home page" column element.
         */
        home_page: GlideElementBoolean;
        
        /**
         * "Icon" column element.
         * Max Length: 40.
         */
        icon: GlideElement;
        
        /**
         * "Max entries" column element.
         * Type: "Integer" (integer).
         * Default Value: 20.
         */
        max_entries: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;

        /**
         * "Navigation" column element.
         * Default Value: true.
         */
        navigation: GlideElementBoolean;
        
        /**
         * "Order" column element.
         * Type: "Decimal" (decimal).
         * Default Value: 20.
         */
        order: GlideElementNumeric;

        /**
         * "Owner" column element.
         */
        owner: $$GlideElement.sys_user;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true
         */
        roles: GlideElement;
        
        /**
         * "Short description" column element.
         * Max Length: 40.
         */
        short_description: GlideElement;
        
        /**
         * "Group Type" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;

        /**
         * "Sys default" column element.
         * Default Value: false.
         */
        sys_default: GlideElementBoolean;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         */
        type: GlideElement;
        
        /**
         * "Users" column element.
         * Type: "List" (glide_list); Scalar type: string.
         */
        user_list: $$GlideElement.sys_user;
        
        /**
         * "Viewable by" column element.
         * Max Length: 40.
         */
        viewable_by: GlideElement;
    }
    
    /**
     * "Label Entry" GlideRecord fields.
     * @see {@link $$GlideRecord.label_entry}
     * @see {@link $$GlideElement.label_entry}
     */
    export interface label_entry extends IBaseRecord {
        /**
         * "Auto" column element.
         */
        auto: $$GlideElement.label_table;
        
        /**
         * "Comments" column element.
         * Max Length: 80.
         */
        comments: GlideElement;
        
        /**
         * "Target ID" column element.
         * Max Length: 40.
         */
        id_display: GlideElement;
        
        /**
         * "Label Target" column element.
         * Max Length: 40.
         */
        id_type: GlideElement;

        /**
         * "Label" column element.
         */
        label: $$GlideElement.label;

        /**
         * "Notify onchange" column element.
         * Default Value: false.
         */
        notify_onchange: GlideElementBoolean;

        /**
         * "Notify script" column element.
         */
        notify_script: $$GlideElement.sys_script;
        
        /**
         * "Notify when" column element.
         * Max Length: 4000.
         */
        notify_when: GlideElementConditions;
        
        /**
         * "Read" column element.
         * Max Length: 40.
         */
        read: GlideElement;
        
        /**
         * "Reference count" column element.
         * Type: "Integer" (integer).
         */
        reference_count: GlideElementNumeric;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         */
        table: GlideElement;
        
        /**
         * "Table key" column element.
         * Max Length: 40.
         */
        table_key: GlideElement;
        
        /**
         * "Title" column element.
         * Max Length: 100.
         */
        title: GlideElement;
        
        /**
         * "Target" column element.
         * Type: "URL" (url).
         */
        url: GlideElement;
        
        /**
         * "View name" column element.
         * Max Length: 40.
         */
        view_name: GlideElement;
    }
    
    /**
     * "Push Application" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_push_application}
     * @see {@link $$GlideElement.sys_push_application}
     */
    export interface sys_push_application extends sys_metadata {
        /**
         * "Client Id" column element.
         * Max Length: 100.
         */
        adm_client_id: GlideElement;
        
        /**
         * "Client Secret" column element.
         * Max Length: 100.
         */
        adm_client_secret: GlideElement;
        
        /**
         * "APNS Bundle Id" column element.
         * Max Length: 255.
         */
        apns_bundle_id: GlideElement;
        
        /**
         * "Apple Authentication Type" column element.
         * Max Length: 40.
         */
        apple_auth_type: GlideElement;
        
        /**
         * "Certificate" column element.
         */
        certificate_id: $$GlideElement.sys_certificate;
        
        /**
         * "Display Name" column element.
         * Max Length: 255.
         */
        display_name: GlideElement;
        
        /**
         * "Google Authentication Type" column element.
         * Max Length: 40.
         */
        fcm_auth_type: GlideElement;
        
        /**
         * "Feedback" column element.
         * Max Length: 40.
         */
        feedback: GlideElement;
        
        /**
         * "Feedback Last Updated" column element.
         * Type: "Date/Time" (glide_date_time).
         */
        feedback_last_updated: GlideElementGlideObject;
        
        /**
         * "Feedback REST Message" column element.
         */
        feedback_rest_message_id: $$GlideElement.sys_rest_message;
        
        /**
         * "API Key" column element.
         * Max Length: 255.
         */
        gcm_api_key: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Parent app" column element.
         */
        parent_app: $$GlideElement.sys_push_application;
        
        /**
         * "Push" column element.
         * Max Length: 40.
         */
        push: GlideElement;
        
        /**
         * "OAuth Token" column element.
         */
        push_auth_fcm_id: $$GlideElement.sys_push_auth_fcm;
        
        /**
         * "Push Token Auth" column element.
         */
        push_auth_id: $$GlideElement.sys_push_auth;
        
        /**
         * "Push REST Message" column element.
         */
        push_rest_message_id: $$GlideElement.sys_rest_message;
        
        /**
         * "Sandbox Certificate" column element.
         */
        sandbox_certificate_id: $$GlideElement.sys_certificate;
    }
    
    /**
     * "Push Google OAuth" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_push_auth_fcm}
     * @see {@link $$GlideElement.sys_push_auth_fcm}
     */
    export interface sys_push_auth_fcm extends IBaseRecord {
        /**
         * "Auth Token" column element.
         * Type: "Password (2 Way Encrypted)" (password2).
         */
        auth_token: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 128.
         */
        name: GlideElement;
        
        /**
         * "Service Account Json" column element.
         * Type: "Password (2 Way Encrypted)" (password2).
         */
        service_account_json: GlideElement;
        
        /**
         * "Token Expiry On" column element.
         * Type: "Date/Time" (glide_date_time).
         */
        token_expiry_on: GlideElementGlideObject;
    }
    
    /**
     * "Push Token Based Auth" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_push_auth}
     * @see {@link $$GlideElement.sys_push_auth}
     */
    export interface sys_push_auth extends IBaseRecord {
        /**
         * "Auth Token" column element.
         * Type: "Password (2 Way Encrypted)" (password2).
         */
        auth_token: GlideElement;
        
        /**
         * "Avoid Token Based Auth Till" column element.
         * Type: "Date/Time" (glide_date_time).
         */
        avoid_token_based_auth_till: GlideElementGlideObject;
        
        /**
         * "Key Id" column element.
         * Max Length: 128.
         */
        key_id: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 128.
         */
        name: GlideElement;
        
        /**
         * "Signing Key" column element.
         * Type: "Password (2 Way Encrypted)" (password2).
         */
        signing_key: GlideElement;
        
        /**
         * "Team Id" column element.
         * Max Length: 128.
         */
        team_id: GlideElement;
        
        /**
         * "Token Updated On" column element.
         * Type: "Date/Time" (glide_date_time).
         */
        token_updated_on: GlideElementGlideObject;
    }
    
    /**
     * "Notification Service Provider" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_notif_service_provider}
     * @see {@link $$GlideElement.cmn_notif_service_provider}
     */
    export interface cmn_notif_service_provider extends sys_metadata {
        /**
         * "Active" column element.
         */
        active: GlideElementBoolean;
        
        /**
         * "Construction script" column element.
         * Max Length: 4000.
         */
        construction_script: GlideElement;
        
        /**
         * "SMS Provider Email Prefix" column element.
         * Max Length: 40.
         */
        email_prefix: GlideElement;
        
        /**
         * "SMS Provider Email Suffix" column element.
         * Max Length: 40.
         */
        email_suffix: GlideElement;
        
        /**
         * "IM Provider" column element.
         * Max Length: 40.
         */
        im_provider: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Advanced Script" column element.
         * Max Length: 4000.
         */
        script: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         */
        type: GlideElement;
        
        /**
         * "Construct address manually" column element.
         */
        use_construction_script: GlideElementBoolean;
        
        /**
         * "Advanced notification" column element.
         */
        use_custom_script: GlideElementBoolean;
    }
    
    /**
     * "Label Table" GlideRecord fields.
     * @see {@link $$GlideRecord.label_table}
     * @see {@link $$GlideElement.label_table}
     */
    export interface label_table extends IBaseRecord {
        /**
         * "Conditions" element.
         */
        conditions: GlideElementConditions;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Title" column element.
         * Max Length: 100.
         */
        title: GlideElement;
    }
    
    /**
     * "LDAP Server" GlideRecord fields.
     * @see {@link $$GlideRecord.ldap_server_config}
     * @see {@link $$GlideElement.ldap_server_config}
     */
    export interface ldap_server_config extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Attributes" column element.
         * Max Length: 4000.
         */
        attributes: GlideElement;
        
        /**
         * "Authenticate" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        authenticate: GlideElementBoolean;
        
        /**
         * "Connect timeout" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 10.
         */
        connect_timeout: GlideElementNumeric;
        
        /**
         * "Login distinguished name" column element.
         * Max Length: 100.
         */
        dn: GlideElement;
        
        /**
         * "DN Field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        dn_field: GlideElement;
        
        /**
         * "Listen interval" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 5.
         */
        listen_interval: GlideElementNumeric;
        
        /**
         * "Listener" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        listener: GlideElementBoolean;
        
        /**
         * "Map" column element.
         * Max Length: 32.
         */
        map: $$GlideElement.sys_impex_map;
        
        /**
         * "MID Server" column element.
         * Max Length: 32.
         */
        mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Paging" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        paging: GlideElementBoolean;
        
        /**
         * "Login password" column element.
         * Max Length: 255.
         */
        password: GlideElementPassword2;
        
        /**
         * "Starting search directory" column element.
         * Max Length: 100.
         */
        rdn: GlideElement;
        
        /**
         * "Read timeout" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 30.
         */
        read_timeout: GlideElementNumeric;
        
        /**
         * "Server URL" column element.
         * Read-only: true; Max Length: 1000.
         */
        server_url: GlideElement;
        
        /**
         * "SSL" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        ssl: GlideElementBoolean;
        
        /**
         * "System ID" column element.
         * Max Length: 100.
         */
        system_id: GlideElement;
        
        /**
         * "Vendor" column element.
         * Max Length: 40.
         * Default Value: "active_directory".
         */
        vendor: GlideElement;
    }
    
    /**
     * "Import Export Map" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_impex_map}
     * @see {@link $$GlideElement.sys_impex_map}
     */
    export interface sys_impex_map extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Agent" column element.
         * Max Length: 40.
         */
        agent: GlideElement;
        
        /**
         * "Apply defaults" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        apply_defaults: GlideElementBoolean;
        
        /**
         * "Coalesce" column element.
         * Max Length: 40.
         */
        coalesce: GlideElement;
        
        /**
         * "Condition script" column element.
         * Max Length: 254.
         */
        condition_script: GlideElement;
        
        /**
         * "Data option" column element.
         * Max Length: 40.
         * Default Value: "insert_update".
         */
        data_option: GlideElement;
        
        /**
         * "Data source" column element.
         * Max Length: 32.
         */
        data_source: $$GlideElement.sys_data_source;
        
        /**
         * "Description" column element.
         * Max Length: 100.
         */
        description: GlideElement;
        
        /**
         * "External names" column element.
         * Type: "External Names" (external_names).
         * Max Length: 4000.
         */
        external_names: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         */
        order: GlideElementNumeric;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_impex_map;
        
        /**
         * "Script" column element.
         * Max Length: 8000.
         */
        script: GlideElementScript;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "data_source".
         */
        type: GlideElement;
    }
    
    /**
     * "Data Source" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_data_source}
     * @see {@link $$GlideElement.sys_data_source}
     */
    export interface sys_data_source extends sys_metadata {
        /**
         * "Batch Size" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1000.
         */
        batch_size: GlideElementNumeric;
        
        /**
         * "Category" column element.
         * Max Length: 40.
         */
        category: GlideElement;
        
        /**
         * "Connection override last success time" column element.
         * Max Length: 4000.
         */
        connection_override_last_success_time: GlideElementSimpleNameValue;
        
        /**
         * "Connection timeout" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        connection_timeout: GlideElementNumeric;
        
        /**
         * "Connection URL" column element.
         * Max Length: 1000.
         */
        connection_url: GlideElement;
        
        /**
         * "Connection URL properties" column element.
         * Max Length: 100.
         */
        connection_url_parameters: GlideElement;
        
        /**
         * "CSV delimiter" column element.
         * Max Length: 40.
         */
        csv_delimiter: GlideElement;
        
        /**
         * "Data in single column" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        data_in_single_column: GlideElementBoolean;
        
        /**
         * "Data Loader" column element.
         * Max Length: 8000.
         * Default Value: "(function loadData(import_set_table, data_source, import_log, last_success_import_time) {\n\n     // Add your code here to insert data to import_set_table\n\n})(import_set_table, data_source, import_log, last_success_import_time);".
         */
        data_loader: GlideElementScript;
        
        /**
         * "Database name" column element.
         * Max Length: 40.
         */
        database_name: GlideElement;
        
        /**
         * "Database port" column element.
         * Max Length: 40.
         */
        database_port: GlideElement;
        
        /**
         * "Discard Arrays" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        discard_arrays: GlideElementBoolean;
        
        /**
         * "Expand node children" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        expand_node_children: GlideElementBoolean;
        
        /**
         * "File path" column element.
         * Max Length: 100.
         */
        file_path: GlideElement;
        
        /**
         * "File retrieval method" column element.
         * Max Length: 40.
         * Default Value: "Attachment".
         */
        file_retrieval_method: GlideElement;
        
        /**
         * "Format" column element.
         * Max Length: 100.
         * Default Value: "CSV".
         */
        format: GlideElement;
        
        /**
         * "System keystore" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        glide_keystore: GlideElementBoolean;
        
        /**
         * "Header row" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        header_row: GlideElementNumeric;
        
        /**
         * "Import set table label" column element.
         * Max Length: 40.
         */
        import_set_table_label: GlideElement;
        
        /**
         * "Import set table name" column element.
         * Mandatory: true; Max Length: 80.
         */
        import_set_table_name: GlideElement;
        
        /**
         * "Instance name" column element.
         * Max Length: 40.
         */
        instance_name: GlideElement;
        
        /**
         * "Password" column element.
         * Max Length: 255.
         */
        jdbc_password: GlideElementPassword2;
        
        /**
         * "Server" column element.
         * Max Length: 40.
         */
        jdbc_server: GlideElement;
        
        /**
         * "Username" column element.
         * Max Length: 40.
         */
        jdbc_user_name: GlideElement;
        
        /**
         * "Path for each row" column element.
         * Mandatory: true; Max Length: 100.
         */
        jpath_root_node: GlideElement;
        
        /**
         * "Last run database field" column element.
         * Max Length: 40.
         */
        last_run_database_field: GlideElement;
        
        /**
         * "Last run datetime" column element.
         * Max Length: 100.
         */
        last_run_datetime: GlideElement;
        
        /**
         * "Last success import time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_success_import_time: GlideElementGlideObject;
        
        /**
         * "LDAP target" column element.
         * Max Length: 32.
         */
        ldap_target: $$GlideElement.ldap_ou_config;
        
        /**
         * "LDAPProbe result set rows" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 200.
         */
        ldapprobe_result_set_rows: GlideElementNumeric;
        
        /**
         * "Limit" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        limit: GlideElementNumeric;
        
        /**
         * "Maximum rows" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        maximum_rows: GlideElementNumeric;
        
        /**
         * "Use MID Server" column element.
         * Max Length: 32.
         */
        mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Offset" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        offset: GlideElementNumeric;
        
        /**
         * "Oracle port" column element.
         * Max Length: 40.
         * Default Value: "1521".
         */
        oracle_port: GlideElement;
        
        /**
         * "Oracle sid" column element.
         * Max Length: 40.
         * Default Value: "orcl".
         */
        oracle_sid: GlideElement;
        
        /**
         * "Parsing script" column element.
         * Max Length: 8000.
         * Default Value: "// The input value can be accessed through the variables named \"line\", \"lineNumber\" and \"result\"\r// The function uses result variable to return parse result back. \r(function(line,lineNumber,result) {\r\t// add code here\r})(line,lineNumber,result);".
         */
        parsing_script: GlideElementScript;
        
        /**
         * "Properties" column element.
         * Max Length: 100.
         */
        properties: GlideElement;
        
        /**
         * "Query" column element.
         * Type: "Radio Button Choice" (radio).
         * Max Length: 40.
         * Default Value: "All Rows from Table".
         */
        query: GlideElement;
        
        /**
         * "Query timeout" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        query_timeout: GlideElementNumeric;
        
        /**
         * "Request action" column element.
         * Max Length: 32.
         */
        request_action: $$GlideElement.sys_hub_action_type_definition;
        
        /**
         * "Scp authentication" column element.
         * Max Length: 40.
         * Default Value: "Username and Password".
         */
        scp_authentication: GlideElement;
        
        /**
         * "Password" column element.
         * Max Length: 255.
         */
        scp_password: GlideElementPassword2;
        
        /**
         * "Port" column element.
         * Max Length: 40.
         */
        scp_port: GlideElement;
        
        /**
         * "Server" column element.
         * Max Length: 40.
         */
        scp_server: GlideElement;
        
        /**
         * "Username" column element.
         * Max Length: 40.
         */
        scp_user_name: GlideElement;
        
        /**
         * "Sheet number" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        sheet_number: GlideElementNumeric;
        
        /**
         * "SQL statement" column element.
         * Max Length: 4000.
         */
        sql_statement: GlideElement;
        
        /**
         * "Ssh keyfile path" column element.
         * Max Length: 40.
         */
        ssh_keyfile_path: GlideElement;
        
        /**
         * "Support pagination" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        support_pagination: GlideElementBoolean;
        
        /**
         * "Table name" column element.
         * Max Length: 40.
         */
        table_name: GlideElement;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "File".
         */
        type: GlideElement;
        
        /**
         * "Use Batch Import" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        use_batch_import: GlideElementBoolean;
        
        /**
         * "Use integrated authentication" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        use_integrated_authentication: GlideElementBoolean;
        
        /**
         * "Use last run datetime" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        use_last_run_datetime: GlideElementBoolean;
        
        /**
         * "XPath for each row" column element.
         * Max Length: 100.
         */
        xpath_root_node: GlideElement;
        
        /**
         * "Zipped" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        zipped: GlideElementBoolean;
    }

    /**
     * "CIs Discovery Configuration" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_accel_config}
     * @see {@link $$GlideElement.discovery_accel_config}
     */
    export interface discovery_accel_config extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Location based" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        location_based: GlideElementBoolean;
        
        /**
         * "Max run time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        max_run: GlideElementGlideObject;
        
        /**
         * "Day" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        run_dayofmonth: GlideElementNumeric;
        
        /**
         * "Day" column element.
         * Type: "Day of Week" (day_of_week); Scalar type: integer.
         * Max Length: 40.
         */
        run_dayofweek: GlideElementGlideObject;
        
        /**
         * "Repeat Interval" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        run_period: GlideElementGlideObject;
        
        /**
         * "Starting" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        run_start: GlideElementGlideObject;
        
        /**
         * "Time" column element.
         * Type: "Time" (glide_time).
         * Max Length: 40.
         */
        run_time: GlideElementGlideObject;
        
        /**
         * "Run" column element.
         * Max Length: 40.
         * Default Value: "daily".
         */
        run_type: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
    }
    
    /**
     * "Discovery Behavior" GlideRecord fields.
     * @see {@link $$GlideRecord.discovery_behavior}
     * @see {@link $$GlideElement.discovery_behavior}
     */
    export interface discovery_behavior extends sys_metadata {
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
    }
    
    /**
     * "Connection \u0026 Credential Aliases" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_alias}
     * @see {@link $$GlideElement.sys_alias}
     */
    export interface sys_alias extends sys_metadata {
        /**
         * "Configuration Template" column element.
         * Max Length: 32.
         */
        configuration_template: $$GlideElement.sys_alias_templates;
        
        /**
         * "Connection type" column element.
         * Max Length: 40.
         * Default Value: "http_connection".
         */
        connection_type: GlideElement;
        
        /**
         * "ID" column element.
         * Unique: true; Read-only: true; Display: true; Max Length: 255.
         */
        id: GlideElement;
        
        /**
         * "Support Multiple Active Connections" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        multiple_connections: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Parent Alias" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_alias;
        
        /**
         * "Default Retry Policy" column element.
         * Max Length: 32.
         */
        retry_policy: $$GlideElement.sys_retry_policy;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "connection".
         */
        type: GlideElement;
    }
    
    /**
     * "Vendor Type" GlideRecord fields.
     * @see {@link $$GlideRecord.vendor_type}
     * @see {@link $$GlideElement.vendor_type}
     */
    export interface vendor_type extends IBaseRecord {
        /**
         * "Name" column element.
         * Display: true; Max Length: 100.
         */
        name: GlideElement;
    }
    
    /**
     * "Action Type Base" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_hub_action_type_base}
     * @see {@link $$GlideElement.sys_hub_action_type_base}
     */
    export interface sys_hub_action_type_base extends sys_metadata {
        /**
         * "Accessible From" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "public".
         */
        access: GlideElement;
        
        /**
         * "ACLs" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        acls: $$GlideElement.sys_security_acl;
        
        /**
         * "Action Status" column element.
         * Max Length: 1024.
         */
        action_status: GlideElement;
        
        /**
         * "Action Template" column element.
         * Max Length: 255.
         */
        action_template: GlideElement;
        
        /**
         * "Annotation" column element.
         * Max Length: 250.
         */
        annotation: GlideElementTranslatedText;
        
        /**
         * "Callable by Client API" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        callable_by_client_api: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        category: $$GlideElement.sys_hub_category;
        
        /**
         * "Copied from" column element.
         * Max Length: 32.
         */
        copied_from: GlideElement;
        
        /**
         * "Copied from name" column element.
         * Max Length: 32.
         */
        copied_from_name: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Internal name" column element.
         * Max Length: 255.
         */
        internal_name: GlideElement;
        
        /**
         * "Label Cache" column element.
         * Max Length: 8000.
         */
        label_cache: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Natural Language Title" column element.
         * Max Length: 4000.
         */
        natlang: GlideElement;
        
        /**
         * "Outputs" column element.
         * Max Length: 32.
         */
        outputs: $$GlideElement.sys_hub_action_output;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_hub_action_type_base;
        
        /**
         * "System level" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        system_level: GlideElementBoolean;
        
        /**
         * "Type" column element.
         * Max Length: 255.
         */
        type: GlideElement;
    }
    
    /**
     * "Action Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_hub_action_type_definition}
     * @see {@link $$GlideElement.sys_hub_action_type_definition}
     */
    export interface sys_hub_action_type_definition extends sys_hub_action_type_base {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Compiler build" column element.
         * Max Length: 255.
         */
        compiler_build: GlideElement;
        
        /**
         * "Ih action" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        ih_action: GlideElementBoolean;
        
        /**
         * "Latest snapshot" column element.
         * Max Length: 32.
         */
        latest_snapshot: GlideElement;
        
        /**
         * "Main snapshot" column element.
         * Max Length: 32.
         */
        master_snapshot: GlideElement;
        
        /**
         * "Pre-Compiled" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        pre_compiled: GlideElementBoolean;
        
        /**
         * "Status" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "draft".
         */
        state: GlideElement;
    }
    
    /**
     * "LDAP OU Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.ldap_ou_config}
     * @see {@link $$GlideElement.ldap_ou_config}
     */
    export interface ldap_ou_config extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Default values" column element.
         * Max Length: 32.
         */
        default_values: $$GlideElement.sys_template;
        
        /**
         * "Filter" column element.
         * Max Length: 1000.
         */
        filter: GlideElement;
        
        /**
         * "Map" column element.
         * Max Length: 32.
         */
        map: $$GlideElement.sys_impex_map;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "RDN" column element.
         * Max Length: 100.
         */
        ou: GlideElement;
        
        /**
         * "Query field" column element.
         * Max Length: 40.
         */
        query_field: GlideElement;
        
        /**
         * "Server" column element.
         * Max Length: 32.
         */
        server: $$GlideElement.ldap_server_config;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         * Default Value: "sys_user".
         */
        table: GlideElement;
    }
    
    /**
     * "Menu List" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_perspective}
     * @see {@link $$GlideElement.sys_perspective}
     */
    export interface sys_perspective extends sys_metadata {
        /**
         * "Application" column element.
         * Max Length: 40.
         */
        application: GlideElement;
        
        /**
         * "Applications" column element.
         * Array: true; Max Length: 40.
         */
        applications: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Roles" column element.
         * Array: true; Max Length: 40.
         */
        roles: GlideElement;
    }
    
    /**
     * "Building" GlideRecord fields.
     * @see {@link $$GlideRecord.cmn_building}
     * @see {@link $$GlideElement.cmn_building}
     */
    export interface cmn_building extends IBaseRecord {
        /**
         * "Contact" column element.
         * Max Length: 32.
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Floors" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        floors: GlideElementNumeric;
        
        /**
         * "Location" column element.
         * Max Length: 32.
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Notes" column element.
         * Max Length: 4000.
         */
        notes: GlideElement;
    }
    
    /**
     * "Role" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_role}
     * @see {@link $$GlideElement.sys_user_role}
     */
    export interface sys_user_role extends sys_metadata {
        /**
         * "Assignable by" column element.
         * Max Length: 32.
         */
        assignable_by: $$GlideElement.sys_user_role;
        
        /**
         * "Can delegate" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        can_delegate: GlideElementBoolean;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Elevated privilege" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        elevated_privilege: GlideElementBoolean;
        
        /**
         * "Grantable" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        grantable: GlideElementBoolean;
        
        /**
         * "Includes roles" column element.
         * Array: true; Max Length: 40.
         */
        includes_roles: GlideElement;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Requires Subscription" column element.
         * Max Length: 40.
         * Default Value: "-1".
         */
        requires_subscription: GlideElement;
        
        /**
         * "Application Administrator" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        scoped_admin: GlideElementBoolean;
        
        /**
         * "Suffix" column element.
         * Max Length: 100.
         */
        suffix: GlideElement;
    }
    
    /**
     * "Group" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_group}
     * @see {@link $$GlideElement.sys_user_group}
     */
    export interface sys_user_group extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Cost center" column element.
         * Max Length: 32.
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Default assignee" column element.
         * Max Length: 32.
         */
        default_assignee: $$GlideElement.sys_user;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Group email" column element.
         * Type: "Email" (email).
         * Max Length: 100.
         */
        email: GlideElement;
        
        /**
         * "Exclude manager" column element.
         * Max Length: 40.
         */
        exclude_manager: GlideElementBoolean;
        
        /**
         * "Include members" column element.
         * Max Length: 40.
         */
        include_members: GlideElementBoolean;
        
        /**
         * "Manager" column element.
         * Max Length: 32.
         */
        manager: $$GlideElement.sys_user;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.sys_user_group;
        
        /**
         * "Points" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        points: GlideElementNumeric;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 100.
         */
        roles: GlideElement;
        
        /**
         * "Source" column element.
         * Max Length: 255.
         */
        source: GlideElement;
        
        /**
         * "Type" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        type: $$GlideElement.sys_user_group_type;
    }
    
    /**
     * "Group Member" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_grmember}
     * @see {@link $$GlideElement.sys_user_grmember}
     */
    export interface sys_user_grmember extends IBaseRecord {
        /**
         * "Group" column element.
         * Max Length: 32.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Average points per sprint" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        points: GlideElementNumeric;
        
        /**
         * "Scrum role" column element.
         * Max Length: 40.
         */
        scrum_role: GlideElement;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Number" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_number}
     * @see {@link $$GlideElement.sys_number}
     */
    export interface sys_number extends sys_metadata {
        /**
         * "Table" column element.
         * Max Length: 80.
         */
        category: $$GlideElement.sys_db_object;
        
        /**
         * "Number of digits" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 7.
         */
        maximum_digits: GlideElementNumeric;
        
        /**
         * "Number" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1000.
         */
        number: GlideElementNumeric;
        
        /**
         * "Prefix" column element.
         * Display: true; Max Length: 40.
         */
        prefix: GlideElement;
    }
    
    /**
     * "Table" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_db_object}
     * @see {@link $$GlideElement.sys_db_object}
     */
    export interface sys_db_object extends sys_metadata {
        /**
         * "Accessible from" column element.
         * Max Length: 40.
         * Default Value: "public".
         */
        access: GlideElement;
        
        /**
         * "Allow UI actions" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        actions_access: GlideElementBoolean;
        
        /**
         * "Allow new fields" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        alter_access: GlideElementBoolean;
        
        /**
         * "Caller Access" column element.
         * Max Length: 40.
         */
        caller_access: GlideElement;
        
        /**
         * "Allow client scripts" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        client_scripts_access: GlideElementBoolean;
        
        /**
         * "Allow configuration" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        configuration_access: GlideElementBoolean;
        
        /**
         * "Can create" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        create_access: GlideElementBoolean;
        
        /**
         * "Create access controls" column element.
         * Max Length: 40.
         */
        create_access_controls: GlideElementBoolean;
        
        /**
         * "Can delete" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        delete_access: GlideElementBoolean;
        
        /**
         * "Extension model" column element.
         * Read-only: true; Max Length: 40.
         */
        extension_model: GlideElement;
        
        /**
         * "Extensible" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        is_extendable: GlideElementBoolean;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        label: GlideElementDocumentation;
        
        /**
         * "Live feed" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        live_feed_enabled: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Auto number" column element.
         * Max Length: 32.
         */
        number_ref: $$GlideElement.sys_number;
        
        /**
         * "Provider class" column element.
         * Max Length: 100.
         */
        provider_class: GlideElement;
        
        /**
         * "Can read" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        read_access: GlideElementBoolean;
        
        /**
         * "Remote Table" column element.
         * Max Length: 40.
         */
        scriptable_table: GlideElementBoolean;
        
        /**
         * "Extends table" column element.
         * Max Length: 32.
         */
        super_class: $$GlideElement.sys_db_object;
        
        /**
         * "Sys class code" column element.
         * Type: "".
         * Max Length: 40.
         */
        sys_class_code: GlideElement;
        
        /**
         * "Sys class path" column element.
         * Type: "System Class path" (sys_class_path).
         * Max Length: 255.
         */
        sys_class_path: GlideElement;
        
        /**
         * "Can update" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        update_access: GlideElementBoolean;
        
        /**
         * "User role" column element.
         * Max Length: 32.
         */
        user_role: $$GlideElement.sys_user_role;
        
        /**
         * "Allow access to this table via web services" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        ws_access: GlideElementBoolean;
    }
    
    /**
     * "Dictionary Entry" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_dictionary}
     * @see {@link $$GlideElement.sys_dictionary}
     */
    export interface sys_dictionary extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Array" column element.
         * Max Length: 40.
         */
        array: GlideElementBoolean;
        
        /**
         * "Array denormalized" column element.
         * Max Length: 40.
         */
        array_denormalized: GlideElementBoolean;
        
        /**
         * "Attributes" column element.
         * Max Length: 1000.
         */
        attributes: GlideElement;
        
        /**
         * "Audit" column element.
         * Max Length: 40.
         */
        audit: GlideElementBoolean;
        
        /**
         * "Calculation" column element.
         * Max Length: 8000.
         * Default Value: "(function calculatedFieldValue(current) {\n\n\t// Add your code here\n\treturn \u0027\u0027;  // return the calculated value\n\n})(current);".
         */
        calculation: GlideElementScript;
        
        /**
         * "Choice" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        choice: GlideElementNumeric;
        
        /**
         * "Choice field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        choice_field: GlideElement;
        
        /**
         * "Choice table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        choice_table: GlideElement;
        
        /**
         * "Column label" column element.
         * Display: true; Max Length: 80.
         */
        column_label: GlideElementDocumentation;
        
        /**
         * "Comments" column element.
         * Max Length: 4000.
         */
        comments: GlideElement;
        
        /**
         * "Create roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        create_roles: GlideElement;
        
        /**
         * "Default value" column element.
         * Max Length: 512.
         */
        default_value: GlideElement;
        
        /**
         * "Defaultsort" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        defaultsort: GlideElementNumeric;
        
        /**
         * "Delete roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        delete_roles: GlideElement;
        
        /**
         * "Dependent" column element.
         * Max Length: 80.
         */
        dependent: GlideElement;
        
        /**
         * "Dependent on field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        dependent_on_field: GlideElement;
        
        /**
         * "Display" column element.
         * Max Length: 40.
         */
        display: GlideElementBoolean;
        
        /**
         * "Dynamic creation" column element.
         * Max Length: 40.
         */
        dynamic_creation: GlideElementBoolean;
        
        /**
         * "Dynamic creation script" column element.
         * Max Length: 4000.
         */
        dynamic_creation_script: GlideElement;
        
        /**
         * "Dynamic default value" column element.
         * Max Length: 32.
         */
        dynamic_default_value: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Dynamic ref qual" column element.
         * Max Length: 32.
         */
        dynamic_ref_qual: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Column name" column element.
         * Max Length: 80.
         */
        element: GlideElement;
        
        /**
         * "Element reference" column element.
         * Max Length: 40.
         */
        element_reference: GlideElementBoolean;
        
        /**
         * "Foreign database" column element.
         * Max Length: 40.
         */
        foreign_database: GlideElement;
        
        /**
         * "Formula" column element.
         * Type: "Expression" (expression).
         * Max Length: 4000.
         */
        formula: GlideElement;
        
        /**
         * "Function definition" column element.
         * Max Length: 4000.
         */
        function_definition: GlideElement;
        
        /**
         * "Function field" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        function_field: GlideElementBoolean;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         */
        internal_type: $$GlideElement.sys_glide_object;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         */
        mandatory: GlideElementBoolean;
        
        /**
         * "Max length" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        max_length: GlideElementNumeric;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Next element" column element.
         * Read-only: true; Max Length: 80.
         */
        next_element: GlideElement;
        
        /**
         * "Primary" column element.
         * Max Length: 40.
         */
        primary: GlideElementBoolean;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         */
        read_only: GlideElementBoolean;
        
        /**
         * "Read roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        read_roles: GlideElement;
        
        /**
         * "Reference" column element.
         * Max Length: 80.
         */
        reference: $$GlideElement.sys_db_object;
        
        /**
         * "Reference cascade rule" column element.
         * Max Length: 20.
         */
        reference_cascade_rule: GlideElement;
        
        /**
         * "Reference floats" column element.
         * Max Length: 40.
         */
        reference_floats: GlideElementBoolean;
        
        /**
         * "Reference key" column element.
         * Max Length: 40.
         */
        reference_key: GlideElement;
        
        /**
         * "Reference qual" column element.
         * Max Length: 1000.
         */
        reference_qual: GlideElement;
        
        /**
         * "Reference qual condition" column element.
         * Max Length: 1000.
         */
        reference_qual_condition: GlideElementConditions;
        
        /**
         * "Reference type" column element.
         * Max Length: 10.
         */
        reference_type: GlideElement;
        
        /**
         * "Sizeclass" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        sizeclass: GlideElementNumeric;
        
        /**
         * "Spell check" column element.
         * Max Length: 40.
         */
        spell_check: GlideElementBoolean;
        
        /**
         * "Staged" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        staged: GlideElementBoolean;
        
        /**
         * "Table reference" column element.
         * Max Length: 40.
         */
        table_reference: GlideElementBoolean;
        
        /**
         * "Text index" column element.
         * Max Length: 40.
         */
        text_index: GlideElementBoolean;
        
        /**
         * "Unique" column element.
         * Max Length: 40.
         */
        unique: GlideElementBoolean;
        
        /**
         * "Use dependent field" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        use_dependent_field: GlideElementBoolean;
        
        /**
         * "Use dynamic default" column element.
         * Max Length: 40.
         */
        use_dynamic_default: GlideElementBoolean;
        
        /**
         * "Use reference qualifier" column element.
         * Max Length: 40.
         * Default Value: "simple".
         */
        use_reference_qualifier: GlideElement;
        
        /**
         * "Calculated" column element.
         * Max Length: 40.
         */
        virtual: GlideElementBoolean;
        
        /**
         * "Calculation Type" column element.
         * Max Length: 40.
         * Default Value: "script".
         */
        virtual_type: GlideElement;
        
        /**
         * "Widget" column element.
         * Max Length: 40.
         */
        widget: GlideElement;
        
        /**
         * "Write roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        write_roles: GlideElement;
        
        /**
         * "XML view" column element.
         * Max Length: 40.
         */
        xml_view: GlideElementBoolean;
    }
    
    /**
     * "Dynamic Filter Options" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_filter_option_dynamic}
     * @see {@link $$GlideElement.sys_filter_option_dynamic}
     */
    export interface sys_filter_option_dynamic extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Available for default" column element.
         * Max Length: 40.
         */
        available_for_default: GlideElementBoolean;
        
        /**
         * "Available for filter" column element.
         * Max Length: 40.
         */
        available_for_filter: GlideElementBoolean;
        
        /**
         * "Available for ref qual" column element.
         * Max Length: 40.
         */
        available_for_ref_qual: GlideElementBoolean;
        
        /**
         * "Field type" column element.
         * Max Length: 32.
         */
        field_type: $$GlideElement.sys_glide_object;
        
        /**
         * "Label" column element.
         * Display: true; Max Length: 40.
         */
        label: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        roles: GlideElement;
        
        /**
         * "Script" column element.
         * Type: "Condition String" (condition_string).
         * Max Length: 255.
         */
        script: GlideElement;
        
        /**
         * "Reference script" column element.
         * Max Length: 32.
         */
        script_reference_id: GlideElementDocumentId;
        
        /**
         * "Reference table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        script_reference_table: GlideElement;
        
        /**
         * "Referenced table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Table containing filter" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table_containing_filter: GlideElement;
    }
    
    /**
     * "Field class" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_glide_object}
     * @see {@link $$GlideElement.sys_glide_object}
     */
    export interface sys_glide_object extends sys_metadata {
        /**
         * "Attributes" column element.
         * Max Length: 255.
         */
        attributes: GlideElement;
        
        /**
         * "Class name" column element.
         * Max Length: 80.
         */
        class_name: GlideElement;
        
        /**
         * "Label" column element.
         * Display: true; Max Length: 40.
         */
        label: GlideElementTranslatedField;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Length" column element.
         * Max Length: 40.
         */
        scalar_length: GlideElement;
        
        /**
         * "Extends" column element.
         * Max Length: 40.
         * Default Value: "string".
         */
        scalar_type: GlideElement;
        
        /**
         * "Use original value" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        use_original_value: GlideElementBoolean;
        
        /**
         * "Visible" column element.
         * Max Length: 40.
         */
        visible: GlideElementBoolean;
    }

    /**
     * "Connection \u0026 Credential Templates" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_alias_templates}
     * @see {@link $$GlideElement.sys_alias_templates}
     */
    export interface sys_alias_templates extends sys_metadata {
        /**
         * "Default Data Template" column element.
         * Type: "JSON" (json).
         * Mandatory: true; Max Length: 10000.
         */
        default_data_template: GlideElement;
        
        /**
         * "Dynamic Data Schema" column element.
         * Type: "JSON" (json).
         * Mandatory: true; Max Length: 10000.
         */
        dynamic_data_schema: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "On Edit Script" column element.
         * Max Length: 8000.
         */
        on_edit_script: GlideElementScript;
        
        /**
         * "On Create Script" column element.
         * Max Length: 8000.
         */
        post_process_script: GlideElementScript;
        
        /**
         * "Pre-Edit Script" column element.
         * Max Length: 8000.
         */
        pre_edit_script: GlideElementScript;
    }
    
    /**
     * "Retry Policy" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_retry_policy}
     * @see {@link $$GlideElement.sys_retry_policy}
     */
    export interface sys_retry_policy extends sys_metadata {
        /**
         * "Conditions" column element.
         * Max Length: 4000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Connection Type" column element.
         * Max Length: 40.
         * Default Value: "http_retry_conditions".
         */
        connection_type: GlideElement;
        
        /**
         * "Count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        count: GlideElementNumeric;
        
        /**
         * "Interval (seconds)" column element.
         * Type: "Long Integer String" (long).
         * Max Length: 40.
         */
        interval: GlideElement;
        
        /**
         * "Max Elapsed Time (seconds)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        max_elapsed_time: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Restrict To" column element.
         * Max Length: 120.
         * Default Value: "http_method,status_code,error,response_body,response_headers".
         */
        restrict_to: GlideElement;
        
        /**
         * "Retry Strategy" column element.
         * Max Length: 40.
         * Default Value: "fixed_time_interval".
         */
        retry_strategy: GlideElement;
    }
    
    /**
     * "Action Outputs" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_hub_action_output}
     * @see {@link $$GlideElement.sys_hub_action_output}
     */
    export interface sys_hub_action_output extends var_dictionary {
        /**
         * "Element prototype" column element.
         * Max Length: 32.
         */
        element_prototype: $$GlideElement.sys_dictionary;
        
        /**
         * "Internal link" column element.
         * Max Length: 32.
         */
        internal_link: $$GlideElement.sys_hub_action_input;
        
        /**
         * "Model" column element.
         * Max Length: 32.
         */
        model: $$GlideElement.sys_hub_action_type_base;
    }
    
    /**
     * "Group Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_group_type}
     * @see {@link $$GlideElement.sys_user_group_type}
     */
    export interface sys_user_group_type extends IBaseRecord {
        /**
         * "Description" column element.
         * Max Length: 100.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "User Role" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_has_role}
     * @see {@link $$GlideElement.sys_user_has_role}
     */
    export interface sys_user_has_role extends IBaseRecord {
        /**
         * "Granted by" column element.
         * Max Length: 32.
         * Default Value: "not-applicable".
         */
        granted_by: $$GlideElement.sys_user_group;
        
        /**
         * "Included in role" column element.
         * Max Length: 32.
         */
        included_in_role: $$GlideElement.sys_user_has_role;
        
        /**
         * "Included in role instance" column element.
         * Max Length: 32.
         */
        included_in_role_instance: $$GlideElement.sys_user_role_contains;
        
        /**
         * "Inheritance Count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        inh_count: GlideElementNumeric;
        
        /**
         * "Inheritance Map" column element.
         * Type: "UI Action List" (glide_action_list); Scalar type: string.
         * Read-only: true; Max Length: 255.
         */
        inh_map: GlideElementGlideObject;
        
        /**
         * "Inherited" column element.
         * Read-only: true; Max Length: 40.
         */
        inherited: GlideElementBoolean;
        
        /**
         * "Role" column element.
         * Max Length: 32.
         */
        role: $$GlideElement.sys_user_role;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "active".
         */
        state: GlideElement;
        
        /**
         * "User" column element.
         * Mandatory: true; Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Contained Role" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_user_role_contains}
     * @see {@link $$GlideElement.sys_user_role_contains}
     */
    export interface sys_user_role_contains extends sys_metadata {
        /**
         * "Contains" column element.
         * Max Length: 32.
         */
        contains: $$GlideElement.sys_user_role;
        
        /**
         * "Role" column element.
         * Max Length: 32.
         */
        role: $$GlideElement.sys_user_role;
    }
    
    /**
     * "Group Role" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_group_has_role}
     * @see {@link $$GlideElement.sys_group_has_role}
     */
    export interface sys_group_has_role extends IBaseRecord {
        /**
         * "Granted by" column element.
         * Max Length: 32.
         */
        granted_by: $$GlideElement.sys_user_group;
        
        /**
         * "Group" column element.
         * Mandatory: true; Max Length: 32.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Inherits" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        inherits: GlideElementBoolean;
        
        /**
         * "Role" column element.
         * Mandatory: true; Max Length: 32.
         */
        role: $$GlideElement.sys_user_role;
    }
    
    /**
     * "Choice" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_choice}
     * @see {@link $$GlideElement.sys_choice}
     */
    export interface sys_choice extends IBaseRecord {
        /**
         * "Dependent value" column element.
         * Max Length: 100.
         */
        dependent_value: GlideElement;
        
        /**
         * "Element" column element.
         * Mandatory: true; Max Length: 80.
         */
        element: GlideElement;
        
        /**
         * "Hint" column element.
         * Max Length: 255.
         */
        hint: GlideElement;
        
        /**
         * "Inactive" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        inactive: GlideElementBoolean;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        label: GlideElement;
        
        /**
         * "Language" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "en".
         */
        language: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Sequence" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        sequence: GlideElementNumeric;
        
        /**
         * "Synonyms" column element.
         * Max Length: 4001.
         */
        synonyms: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" column element.
         * Mandatory: true; Max Length: 4000.
         */
        value: GlideElement;
    }
    
    /**
     * "Choice Set" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_choice_set}
     * @see {@link $$GlideElement.sys_choice_set}
     */
    export interface sys_choice_set extends sys_metadata {
        /**
         * "Element" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        element: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
    }
    
    /**
     * "Question" GlideRecord fields.
     * @see {@link $$GlideRecord.question}
     * @see {@link $$GlideElement.question}
     */
    export interface question extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Variable attributes" column element.
         * Max Length: 255.
         */
        attributes: GlideElement;
        
        /**
         * "Choice direction" column element.
         * Max Length: 40.
         * Default Value: "down".
         */
        choice_direction: GlideElement;
        
        /**
         * "Choice field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        choice_field: GlideElement;
        
        /**
         * "Choice table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        choice_table: GlideElement;
        
        /**
         * "Create roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        create_roles: GlideElement;
        
        /**
         * "Default HTML" column element.
         * Type: "HTML" (html); Scalar type: string.
         * Max Length: 65536.
         */
        default_html_value: GlideElementGlideObject;
        
        /**
         * "Default value" column element.
         * Max Length: 512.
         */
        default_value: GlideElement;
        
        /**
         * "Delete roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        delete_roles: GlideElement;
        
        /**
         * "Display title" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        display_title: GlideElementBoolean;
        
        /**
         * "Do not select the first choice" column element.
         * Max Length: 40.
         */
        do_not_select_first: GlideElementBoolean;
        
        /**
         * "Dynamic default value" column element.
         * Max Length: 32.
         */
        dynamic_default_value: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Dynamic reference qualifier" column element.
         * Max Length: 32.
         */
        dynamic_ref_qual: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Example Text" column element.
         * Max Length: 255.
         */
        example_text: GlideElementTranslatedField;
        
        /**
         * "Field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        field: GlideElement;
        
        /**
         * "Help tag" column element.
         * Max Length: 100.
         * Default Value: "More information".
         */
        help_tag: GlideElementTranslatedField;
        
        /**
         * "Help text" column element.
         * Max Length: 4000.
         */
        help_text: GlideElementTranslatedText;
        
        /**
         * "Hidden" column element.
         * Max Length: 40.
         */
        hidden: GlideElementBoolean;
        
        /**
         * "Include none" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        include_none: GlideElementBoolean;
        
        /**
         * "Layout" column element.
         * Max Length: 40.
         * Default Value: "normal".
         */
        layout: GlideElement;
        
        /**
         * "List table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        list_table: GlideElement;
        
        /**
         * "Lookup label field(s)" column element.
         * Max Length: 80.
         */
        lookup_label: GlideElement;
        
        /**
         * "Lookup price field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        lookup_price: GlideElement;
        
        /**
         * "Lookup from table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        lookup_table: GlideElement;
        
        /**
         * "Unique values only" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        lookup_unique: GlideElementBoolean;
        
        /**
         * "Lookup value field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        lookup_value: GlideElement;
        
        /**
         * "Macro" column element.
         * Max Length: 32.
         */
        macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         */
        mandatory: GlideElementBoolean;
        
        /**
         * "Map to field" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        map_to_field: GlideElementBoolean;
        
        /**
         * "Use confirmation" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        mask_use_confirmation: GlideElementBoolean;
        
        /**
         * "Use encryption" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        mask_use_encryption: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Price if checked" column element.
         * Max Length: 20.
         * Default Value: 0.00.
         */
        price_if_checked: GlideElementPrice;
        
        /**
         * "Pricing implications" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        pricing_implications: GlideElementBoolean;
        
        /**
         * "Question" column element.
         * Display: true; Max Length: 255.
         */
        question_text: GlideElementTranslatedField;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         */
        read_only: GlideElementBoolean;
        
        /**
         * "Read roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        read_roles: GlideElement;
        
        /**
         * "Lookup recurring price field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        rec_lookup_price: GlideElement;
        
        /**
         * "Recurring price if checked" column element.
         * Max Length: 20.
         * Default Value: 0.00.
         */
        rec_price_if_checked: GlideElementPrice;
        
        /**
         * "Record" column element.
         * Max Length: 40.
         */
        record: GlideElement;
        
        /**
         * "Record producer table" column element.
         * Max Length: 80.
         */
        record_producer_table: GlideElement;
        
        /**
         * "Reference" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        reference: GlideElement;
        
        /**
         * "Reference qualifier" column element.
         * Max Length: 4000.
         */
        reference_qual: GlideElement;
        
        /**
         * "Reference qualifier condition" column element.
         * Max Length: 4000.
         */
        reference_qual_condition: GlideElementConditions;
        
        /**
         * "Scale max" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 5.
         */
        scale_max: GlideElementNumeric;
        
        /**
         * "Scale min" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        scale_min: GlideElementNumeric;
        
        /**
         * "Show help" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        show_help: GlideElementBoolean;
        
        /**
         * "Always Expanded" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        show_help_on_load: GlideElementBoolean;
        
        /**
         * "Summary macro" column element.
         * Max Length: 32.
         */
        summary_macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Tooltip" column element.
         * Max Length: 40.
         */
        tooltip: GlideElementTranslatedField;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "6".
         */
        type: GlideElement;
        
        /**
         * "UI page" column element.
         * Max Length: 32.
         */
        ui_page: $$GlideElement.sys_ui_page;
        
        /**
         * "Use dynamic default" column element.
         * Max Length: 40.
         */
        use_dynamic_default: GlideElementBoolean;
        
        /**
         * "Use reference qualifier" column element.
         * Max Length: 40.
         * Default Value: "simple".
         */
        use_reference_qualifier: GlideElement;
        
        /**
         * "Variable name" column element.
         * Max Length: 80.
         */
        variable_name: GlideElement;
        
        /**
         * "Write roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        write_roles: GlideElement;
    }
    
    /**
     * "UI Page" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_page}
     * @see {@link $$GlideElement.sys_ui_page}
     */
    export interface sys_ui_page extends sys_metadata {
        /**
         * "Category" column element.
         * Max Length: 40.
         * Default Value: "general".
         */
        category: GlideElement;
        
        /**
         * "Client script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        client_script: GlideElementScript;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Direct" column element.
         * Max Length: 40.
         */
        direct: GlideElementBoolean;
        
        /**
         * "Endpoint" column element.
         * Read-only: true; Max Length: 200.
         */
        endpoint: GlideElementURL;
        
        /**
         * "HTML" column element.
         * Type: "XML" (xml).
         * Max Length: 65000.
         * Default Value: "\u003c?xml version=\"1.0\" encoding=\"utf-8\" ?\u003e\r\n\u003cj:jelly trim=\"false\" xmlns:j=\"jelly:core\" xmlns:g=\"glide\" xmlns:j2=\"null\" xmlns:g2=\"null\"\u003e\r\n\r\n\u003c/j:jelly\u003e".
         */
        html: GlideElementScript;
        
        /**
         * "Name" column element.
         * Max Length: 250.
         */
        name: GlideElement;
        
        /**
         * "Processing script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        processing_script: GlideElementScript;
    }
    
    /**
     * "Variable" GlideRecord fields.
     * @see {@link $$GlideRecord.item_option_new}
     * @see {@link $$GlideElement.item_option_new}
     */
    export interface item_option_new extends question {
        /**
         * "Catalog item" column element.
         * Max Length: 32.
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        category: $$GlideElement.item_option_category;
        
        /**
         * "Delivery plan" column element.
         * Max Length: 32.
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;
        
        /**
         * "Description" column element.
         * Type: "HTML" (html); Scalar type: string.
         * Max Length: 8000.
         */
        description: GlideElementGlideObject;
        
        /**
         * "Dot walk path" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        dynamic_value_dot_walk_path: GlideElement;
        
        /**
         * "Dependent question" column element.
         * Max Length: 32.
         */
        dynamic_value_field: $$GlideElement.item_option_new;
        
        /**
         * "Enable also request for" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        enable_also_request_for: GlideElementBoolean;
        
        /**
         * "Global" column element.
         * Max Length: 40.
         */
        global: GlideElementBoolean;
        
        /**
         * "Instructions" column element.
         * Max Length: 65536.
         */
        instructions: GlideElementTranslatedHTML;
        
        /**
         * "Macroponent" column element.
         * Max Length: 32.
         */
        macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Post insert script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        post_insert_script: GlideElementScript;
        
        /**
         * "Published option" column element.
         * Read-only: true; Max Length: 32.
         */
        published_ref: $$GlideElement.item_option_new;
        
        /**
         * "Read script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        read_script: GlideElementScript;
        
        /**
         * "Rich Text" column element.
         * Max Length: 65536.
         */
        rich_text: GlideElementTranslatedHTML;
        
        /**
         * "Roles to use also request for" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        roles_to_use_also_request_for: GlideElement;
        
        /**
         * "Save script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        save_script: GlideElementScript;
        
        /**
         * "Widget" column element.
         * Max Length: 32.
         */
        sp_widget: $$GlideElement.sp_widget;
        
        /**
         * "Unique" column element.
         * Max Length: 40.
         */
        unique: GlideElementBoolean;
        
        /**
         * "Validation Regex" column element.
         * Max Length: 32.
         */
        validate_regex: $$GlideElement.question_regex;
        
        /**
         * "Variable set" column element.
         * Max Length: 32.
         */
        variable_set: $$GlideElement.item_option_new_set;
        
        /**
         * "Variable Width" column element.
         * Max Length: 40.
         */
        variable_width: GlideElement;
        
        /**
         * "Visibility" column element.
         * Max Length: 40.
         * Default Value: "1".
         */
        visibility: GlideElement;
        
        /**
         * "Visible on Bundles" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        visible_bundle: GlideElementBoolean;
        
        /**
         * "Visible on Guides" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        visible_guide: GlideElementBoolean;
        
        /**
         * "Visible Elsewhere" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        visible_standalone: GlideElementBoolean;
        
        /**
         * "Visible on Summaries" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        visible_summary: GlideElementBoolean;
    }
    
    /**
     * "UX Macroponent Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_macroponent_type}
     * @see {@link $$GlideElement.sys_ux_macroponent_type}
     */
    export interface sys_ux_macroponent_type extends sys_metadata {
        /**
         * "API Name" column element.
         * Max Length: 273.
         */
        api_name: GlideElement;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
    }
    
    /**
     * "UX Macroponent Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_macroponent}
     * @see {@link $$GlideElement.sys_ux_macroponent}
     */
    export interface sys_ux_macroponent extends sys_metadata {
        /**
         * "Associated types" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        associated_types: $$GlideElement.sys_ux_macroponent_type;
        
        /**
         * "Category" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "component".
         */
        category: GlideElement;
        
        /**
         * "Component dependencies" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        component_dependencies: $$GlideElement.sys_ux_lib_component;
        
        /**
         * "Composition" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        composition: GlideElement;
        
        /**
         * "Action relay models" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        da_relay_models: $$GlideElement.sys_declarative_action_model_definition;
        
        /**
         * "Data" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        data: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Dispatched Events" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        dispatched_events: $$GlideElement.sys_ux_event;
        
        /**
         * "External Controller Dependencies" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        ext_controller_dep: GlideElement;
        
        /**
         * "Extends" column element.
         * Max Length: 32.
         */
        extends: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Extension Point" column element.
         * Max Length: 32.
         */
        extension_point: $$GlideElement.sys_ux_extension_point;
        
        /**
         * "Handled Events" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        handled_events: $$GlideElement.sys_ux_event;
        
        /**
         * "Interactions" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        interactions: GlideElement;
        
        /**
         * "Interfaces" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        interfaces: $$GlideElement.sys_ux_interface;
        
        /**
         * "Internal Event Mappings" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        internal_event_mappings: GlideElement;
        
        /**
         * "Layout model" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        layout: GlideElement;
        
        /**
         * "Macroponent dependencies" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        macroponent_dependencies: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Output Prop Mapping" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        output_prop_mapping: GlideElement;
        
        /**
         * "Properties" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        props: GlideElement;
        
        /**
         * "Required translations" column element.
         * Type: "JSON Translations" (json_translations).
         * Read-only: true; Max Length: 8000.
         */
        required_translations: GlideElement;
        
        /**
         * "Root element definition" column element.
         * Max Length: 32.
         */
        root_component: $$GlideElement.sys_ux_lib_component;
        
        /**
         * "Root element configuration" column element.
         * Max Length: 8000.
         */
        root_component_config: GlideElement;
        
        /**
         * "Root element metadata" column element.
         * Max Length: 8000.
         */
        root_component_definition: GlideElement;
        
        /**
         * "Schema version" column element.
         * Mandatory: true; Max Length: 40.
         */
        schema_version: GlideElement;
        
        /**
         * "State" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        state_properties: GlideElement;
    }
    
    /**
     * "UX Extension Point" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_extension_point}
     * @see {@link $$GlideElement.sys_ux_extension_point}
     */
    export interface sys_ux_extension_point extends sys_metadata {
        /**
         * "App shell" column element.
         * Max Length: 32.
         * Default Value: "76a83a645b122010b913030a1d81c780".
         */
        app_shell: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Component" column element.
         * Mandatory: true; Max Length: 32.
         */
        component: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Controller" column element.
         * Max Length: 32.
         */
        controller: $$GlideElement.sys_ux_controller;
        
        /**
         * "Controller Dependencies" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        controller_dependencies: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        type: GlideElement;
    }
    
    /**
     * "UX Controller" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_controller}
     * @see {@link $$GlideElement.sys_ux_controller}
     */
    export interface sys_ux_controller extends sys_metadata {
        /**
         * "Controller config guidance" column element.
         * Type: "JSON" (json).
         * Max Length: 4000.
         * Default Value: "{ }".
         */
        controller_config_guidance: GlideElement;
        
        /**
         * "Definition" column element.
         * Mandatory: true; Max Length: 32.
         */
        controller_macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElementTranslatedField;
    }
    
    /**
     * "UX Component Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_lib_component}
     * @see {@link $$GlideElement.sys_ux_lib_component}
     */
    export interface sys_ux_lib_component extends sys_metadata {
        /**
         * "Default Available Child Slots" column element.
         * Max Length: 32.
         */
        default_children: $$GlideElement.sys_ux_children;
        
        /**
         * "Default Layout" column element.
         * Max Length: 32.
         */
        default_layout: $$GlideElement.sys_ux_children_layout;
        
        /**
         * "Deprecated" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        deprecated: GlideElementBoolean;
        
        /**
         * "Inner Components" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 8000.
         */
        inner_components: $$GlideElement.sys_ux_lib_component;
        
        /**
         * "Allow Overrides" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        overrides: GlideElement;
        
        /**
         * "Required system properties" column element.
         * Max Length: 8000.
         */
        required_sys_props: GlideElement;
        
        /**
         * "Required translated message keys" column element.
         * Max Length: 8000.
         */
        required_translation_keys: GlideElement;
        
        /**
         * "Required user preferences" column element.
         * Max Length: 8000.
         */
        required_user_prefs: GlideElement;
        
        /**
         * "Source script" column element.
         * Max Length: 32.
         */
        source_script: $$GlideElement.sys_ux_lib_source_script;
        
        /**
         * "Source script name" column element.
         * Max Length: 255.
         */
        source_script_name: GlideElement;
        
        /**
         * "Tag" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        tag: GlideElement;
    }

    /**
     * "Action Inputs" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_hub_action_input}
     * @see {@link $$GlideElement.sys_hub_action_input}
     */
    export interface sys_hub_action_input extends var_dictionary {
        /**
         * "Model" column element.
         * Max Length: 32.
         */
        model: $$GlideElement.sys_hub_action_type_base;
    }
    
    /**
     * "Action Model Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_declarative_action_model_definition}
     * @see {@link $$GlideElement.sys_declarative_action_model_definition}
     */
    export interface sys_declarative_action_model_definition extends sys_metadata {
        /**
         * "Model field table" column element.
         * Read-only: true; Max Length: 250.
         */
        model_field_table: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "UX Event" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_event}
     * @see {@link $$GlideElement.sys_ux_event}
     */
    export interface sys_ux_event extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Event Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        event_name: GlideElement;
        
        /**
         * "Explicit API Name" column element.
         * Max Length: 255.
         */
        explicit_api_name: GlideElement;
        
        /**
         * "UX Interfaces" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        interfaces: $$GlideElement.sys_ux_interface;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        label: GlideElementTranslatedField;
        
        /**
         * "Properties" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        props: GlideElement;
        
        /**
         * "Required translations" column element.
         * Type: "JSON Translations" (json_translations).
         * Read-only: true; Max Length: 8000.
         */
        required_translations: GlideElement;
        
        /**
         * "Schema version" column element.
         * Mandatory: true; Max Length: 40.
         */
        schema_version: GlideElement;
    }
    
    /**
     * "UX Interface" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_interface}
     * @see {@link $$GlideElement.sys_ux_interface}
     */
    export interface sys_ux_interface extends sys_metadata {
        /**
         * "API Name" column element.
         * Unique: true; Read-only: true; Max Length: 273.
         */
        api_name: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Schema Infered from Type" column element.
         * Max Length: 32.
         */
        from_type: $$GlideElement.sys_ux_type;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "JSON Schema" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        schema: GlideElement;
        
        /**
         * "Schema version" column element.
         * Mandatory: true; Max Length: 40.
         */
        schema_version: GlideElement;
    }
    
    /**
     * "UX Source Code" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_lib_source_script}
     * @see {@link $$GlideElement.sys_ux_lib_source_script}
     */
    export interface sys_ux_lib_source_script extends sys_metadata {
        /**
         * "Config Option" column element.
         * Max Length: 40.
         */
        config_option: GlideElement;
        
        /**
         * "UXF engine version" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         * Default Value: 6.
         */
        engine: GlideElementNumeric;
        
        /**
         * "External libraries" column element.
         * Max Length: 8000.
         */
        externals: GlideElement;
        
        /**
         * "Inner components" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 8000.
         */
        inner_components: $$GlideElement.sys_ux_lib_component;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        script: GlideElementScript;
        
        /**
         * "Script link" column element.
         * Max Length: 1024.
         */
        script_link: GlideElementURL;
        
        /**
         * "Source type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "script".
         */
        type: GlideElement;
    }
    
    /**
     * "UX Children Layout" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_children_layout}
     * @see {@link $$GlideElement.sys_ux_children_layout}
     */
    export interface sys_ux_children_layout extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Host" column element.
         * Max Length: 32.
         */
        host: $$GlideElement.sys_ux_children;
        
        /**
         * "Model" column element.
         * Max Length: 65536.
         */
        model: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "rowColumn".
         */
        type: GlideElement;
    }
    
    /**
     * "UX Children Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_children}
     * @see {@link $$GlideElement.sys_ux_children}
     */
    export interface sys_ux_children extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 40.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "Macroponent Priority" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_macroponent_priority}
     * @see {@link $$GlideElement.sys_ux_macroponent_priority}
     */
    export interface sys_ux_macroponent_priority extends sys_metadata {
        /**
         * "Composition Element ID" column element.
         * Mandatory: true; Max Length: 255.
         */
        composition_element_id: GlideElement;
        
        /**
         * "Macroponent" column element.
         * Mandatory: true; Max Length: 32.
         */
        macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Priority Level" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         */
        priority_level: GlideElementNumeric;
    }
    
    /**
     * "Variable Category" GlideRecord fields.
     * @see {@link $$GlideRecord.item_option_category}
     * @see {@link $$GlideElement.item_option_category}
     */
    export interface item_option_category extends sys_metadata {
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Max Length: 40.
         */
        order: GlideElement;
    }
    
    /**
     * "Variable Set" GlideRecord fields.
     * @see {@link $$GlideRecord.item_option_new_set}
     * @see {@link $$GlideElement.item_option_new_set}
     */
    export interface item_option_new_set extends sys_metadata {
        /**
         * "Create roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        create_roles: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Display title" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        display_title: GlideElementBoolean;
        
        /**
         * "Internal name" column element.
         * Mandatory: true; Max Length: 80.
         */
        internal_name: GlideElement;
        
        /**
         * "Layout" column element.
         * Max Length: 40.
         * Default Value: "normal".
         */
        layout: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Read roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        read_roles: GlideElement;
        
        /**
         * "Variable Set attributes" column element.
         * Max Length: 255.
         */
        set_attributes: GlideElement;
        
        /**
         * "Title" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        title: GlideElementTranslatedField;
        
        /**
         * "Type" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: "one_to_one".
         */
        type: GlideElement;
        
        /**
         * "Write roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        write_roles: GlideElement;
    }
    
    /**
     * "Flow catalog variable" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_flow_cat_variable}
     * @see {@link $$GlideElement.sys_flow_cat_variable}
     */
    export interface sys_flow_cat_variable extends item_option_new {
        /**
         * "Flow catalog model" column element.
         * Max Length: 32.
         */
        flow_catalog_model: $$GlideElement.sys_flow_cat_variable_model;
    }
    
    /**
     * "Workflow SC Variable" GlideRecord fields.
     * @see {@link $$GlideRecord.wf_variable}
     * @see {@link $$GlideElement.wf_variable}
     */
    export interface wf_variable extends item_option_new {
        /**
         * "Workflow" column element.
         * Max Length: 32.
         */
        workflow: $$GlideElement.wf_workflow_version;
    }
    
    /**
     * "Producer Set" GlideRecord fields.
     * @see {@link $$GlideRecord.item_option_new_producer_set}
     * @see {@link $$GlideElement.item_option_new_producer_set}
     */
    export interface item_option_new_producer_set extends item_option_new_set {
        /**
         * "Parent reference field" column element.
         * Type: "Field Name" (field_name).
         * Mandatory: true; Max Length: 80.
         */
        parent_reference_field: GlideElement;
        
        /**
         * "Table name" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table_name: GlideElement;
    }
    
    /**
     * "Decision" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_decision_question}
     * @see {@link $$GlideElement.sys_decision_question}
     */
    export interface sys_decision_question extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Answer" column element.
         * Max Length: 32.
         */
        answer: GlideElementDocumentId;
        
        /**
         * "Condition" column element.
         * Max Length: 4000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Decision table" column element.
         * Max Length: 32.
         */
        decision_table: $$GlideElement.sys_decision;
        
        /**
         * "Default answer" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        default_answer: GlideElementBoolean;
        
        /**
         * "Input table" column element.
         * Max Length: 250.
         */
        input_table: GlideElement;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 250.
         */
        label: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        order: GlideElementNumeric;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_decision_question;
    }
    
    /**
     * "Help Question" GlideRecord fields.
     * @see {@link $$GlideRecord.help_question}
     * @see {@link $$GlideElement.help_question}
     */
    export interface help_question extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Condition" column element.
         * Type: "Condition String" (condition_string).
         * Max Length: 256.
         */
        condition: GlideElement;
        
        /**
         * "Help content" column element.
         * Max Length: 32.
         */
        content: $$GlideElement.help_content;
        
        /**
         * "Internal Name" column element.
         * Max Length: 80.
         */
        internal_name: GlideElement;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         */
        mandatory: GlideElementBoolean;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Question" column element.
         * Mandatory: true; Display: true; Max Length: 300.
         */
        question: GlideElementTranslatedText;
        
        /**
         * "Short Description" column element.
         * Max Length: 256.
         */
        short_description: GlideElementTranslatedText;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.help_question;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "single_choice".
         */
        type: GlideElement;
        
        /**
         * "Variant" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "radio".
         */
        variant: GlideElement;
    }
    
    /**
     * "Decision Table" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_decision}
     * @see {@link $$GlideElement.sys_decision}
     */
    export interface sys_decision extends sys_metadata {
        /**
         * "Accessible From" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "public".
         */
        access: GlideElement;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Answer table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        answer_table: GlideElement;
        
        /**
         * "Answer type" column element.
         * Max Length: 40.
         * Default Value: "reference".
         */
        answer_type: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 512.
         */
        description: GlideElement;
        
        /**
         * "Label" column element.
         * Max Length: 250.
         */
        label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 250.
         */
        name: GlideElement;
        
        /**
         * "Reference qualifier" column element.
         * Max Length: 4000.
         */
        reference_qualifier: GlideElementConditions;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_decision;
    }
    
    /**
     * "Help Content" GlideRecord fields.
     * @see {@link $$GlideRecord.help_content}
     * @see {@link $$GlideElement.help_content}
     */
    export interface help_content extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Configuration Types" column element.
         * Max Length: 40.
         * Default Value: "custom".
         */
        configuration_types: GlideElement;
        
        /**
         * "Custom HTML" column element.
         * Max Length: 65536.
         */
        custom_html: GlideElementTranslatedHTML;
        
        /**
         * "Default" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        default_content: GlideElementBoolean;
        
        /**
         * "Field Name" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        field_name: GlideElement;
        
        /**
         * "Filter" column element.
         * Max Length: 255.
         */
        filter: GlideElementConditions;
        
        /**
         * "Footer" column element.
         * Max Length: 255.
         */
        footer: GlideElementTranslatedText;
        
        /**
         * "Guidance Step" column element.
         * Read-only: true; Max Length: 32.
         */
        guidance_step: $$GlideElement.help_guidance_step;
        
        /**
         * "Provide Custom HTML" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        has_custom_html: GlideElementBoolean;
        
        /**
         * "Provide Image Link" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        has_image_link: GlideElementBoolean;
        
        /**
         * "Image" column element.
         * Max Length: 40.
         */
        image: GlideElementUserImage;
        
        /**
         * "Alternate Text" column element.
         * Max Length: 255.
         */
        image_alt: GlideElementTranslatedText;
        
        /**
         * "Image Link" column element.
         * Max Length: 1024.
         */
        image_link: GlideElementURL;
        
        /**
         * "Open In" column element.
         * Max Length: 40.
         * Default Value: "new_tab".
         */
        open_in: GlideElement;
        
        /**
         * "Options" column element.
         * Type: "JSON" (json).
         * Max Length: 4000.
         */
        options: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Records" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        records: GlideElementGlideObject;
        
        /**
         * "Related Content" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        related_content: $$GlideElement.help_content;
        
        /**
         * "Resource ID" column element.
         * Unique: true; Max Length: 100.
         */
        resource_id: GlideElement;
        
        /**
         * "Subtitle" column element.
         * Max Length: 255.
         */
        subtitle: GlideElementTranslatedText;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.help_content;
        
        /**
         * "Table Name" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table_name: GlideElement;
        
        /**
         * "Text" column element.
         * Max Length: 65536.
         */
        text: GlideElementTranslatedHTML;
        
        /**
         * "Title" column element.
         * Display: true; Max Length: 255.
         */
        title: GlideElementTranslatedText;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "text".
         */
        type: GlideElement;
        
        /**
         * "URL" column element.
         * Max Length: 1024.
         */
        url: GlideElementURL;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         */
        version: GlideElement;
        
        /**
         * "Alternate Text" column element.
         * Max Length: 255.
         */
        video_alt: GlideElementTranslatedText;
        
        /**
         * "Video Link" column element.
         * Max Length: 1024.
         */
        video_link: GlideElementURL;
        
        /**
         * "View" column element.
         * Max Length: 40.
         */
        view: GlideElement;
    }

    /**
     * "UX Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ux_type}
     * @see {@link $$GlideElement.sys_ux_type}
     */
    export interface sys_ux_type extends sys_metadata {
        /**
         * "API Name" column element.
         * Unique: true; Read-only: true; Max Length: 273.
         */
        api_name: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "JSON Schema" column element.
         * Type: "JSON" (json).
         * Max Length: 8000.
         */
        schema: GlideElement;
        
        /**
         * "Schema version" column element.
         * Mandatory: true; Max Length: 40.
         */
        schema_version: GlideElement;
    }
    
    /**
     * "Help Guidance Step" GlideRecord fields.
     * @see {@link $$GlideRecord.help_guidance_step}
     * @see {@link $$GlideElement.help_guidance_step}
     */
    export interface help_guidance_step extends sys_metadata {
        /**
         * "Actions Label" column element.
         * Max Length: 4000.
         * Default Value: "{\"next\":\"Next\",\"prev\":\"Previous\",\"submit\":\"Submit\"}".
         */
        actions_label: GlideElementSimpleNameValue;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Allow Delegation" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        allow_delegation: GlideElementBoolean;
        
        /**
         * "Callout Position" column element.
         * Max Length: 40.
         * Default Value: "default".
         */
        callout_position: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Guidance" column element.
         * Mandatory: true; Max Length: 32.
         */
        guidance: $$GlideElement.help_guidance;
        
        /**
         * "Has decision" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        has_decision: GlideElementBoolean;
        
        /**
         * "Layout" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "text".
         */
        layout: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         */
        parent: $$GlideElement.help_guidance_step;
        
        /**
         * "Rich Description" column element.
         * Max Length: 65536.
         */
        rich_description: GlideElementTranslatedHTML;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        roles: GlideElement;
        
        /**
         * "Script" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         */
        script: GlideElementScript;
        
        /**
         * "Skippable" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        skippable: GlideElementBoolean;
        
        /**
         * "Status" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        status: GlideElementNumeric;
        
        /**
         * "Decision" column element.
         * Max Length: 32.
         */
        sys_decision: $$GlideElement.sys_decision;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.help_guidance_step;
        
        /**
         * "Target Element" column element.
         * Max Length: 255.
         */
        target_element: GlideElement;
        
        /**
         * "Task Type" column element.
         * Max Length: 40.
         * Default Value: "basic".
         */
        task_type: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "default".
         */
        type: GlideElement;
        
        /**
         * "Unlock By Decision Step" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        unlock_by_decision_step: GlideElementBoolean;
    }
    
    /**
     * "Guidance" GlideRecord fields.
     * @see {@link $$GlideRecord.help_guidance}
     * @see {@link $$GlideElement.help_guidance}
     */
    export interface help_guidance extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Application route" column element.
         * Max Length: 100.
         */
        app_route: GlideElement;
        
        /**
         * "Auto launch order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        auto_launch_order: GlideElementNumeric;
        
        /**
         * "Checklist" column element.
         * Max Length: 65536.
         */
        checklist: GlideElementTranslatedHTML;
        
        /**
         * "Context" column element.
         * Mandatory: true; Max Length: 255.
         */
        context: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Embedded help content" column element.
         * Max Length: 32.
         */
        eh_content: $$GlideElement.sys_embedded_help_content;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 10.
         */
        order: GlideElementNumeric;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        roles: GlideElement;
        
        /**
         * "Route parameters" column element.
         * Type: "JSON" (json).
         * Max Length: 4000.
         */
        route_params: GlideElement;
        
        /**
         * "ServiceNow created" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        snc_created: GlideElementBoolean;
        
        /**
         * "Status" column element.
         * Max Length: 40.
         * Default Value: "draft".
         */
        status: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.help_guidance;
        
        /**
         * "Topic id" column element.
         * Max Length: 100.
         */
        topic_id: GlideElement;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 40.
         * Default Value: "modal".
         */
        type: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         */
        version: GlideElement;
    }
    
    /**
     * "Embedded Help" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_embedded_help_content}
     * @see {@link $$GlideElement.sys_embedded_help_content}
     */
    export interface sys_embedded_help_content extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Max Length: 100.
         */
        category: GlideElement;
        
        /**
         * "Content" column element.
         * Max Length: 65000.
         */
        content: GlideElementTranslatedHTML;
        
        /**
         * "Last sync" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_sync: GlideElementGlideObject;
        
        /**
         * "Mode" column element.
         * Max Length: 40.
         * Default Value: "normal".
         */
        modifier: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Page" column element.
         * Mandatory: true; Max Length: 80.
         */
        page: GlideElement;
        
        /**
         * "Product" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        product: GlideElementNumeric;
        
        /**
         * "Qualifier" column element.
         * Max Length: 100.
         */
        qualifier: GlideElement;
        
        /**
         * "Role" column element.
         * Max Length: 32.
         */
        role: $$GlideElement.sys_user_role;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 10.
         * Default Value: 1000.
         */
        role_order: GlideElementNumeric;
        
        /**
         * "Snc created" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        snc_created: GlideElementBoolean;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         * Default Value: "u".
         */
        version: GlideElement;
    }
    
    /**
     * "Password Reset Question" GlideRecord fields.
     * @see {@link $$GlideRecord.pwd_question}
     * @see {@link $$GlideElement.pwd_question}
     */
    export interface pwd_question extends sys_metadata {
        /**
         * "Question (Translated field)" column element.
         * Mandatory: true; Display: true; Max Length: 250.
         */
        question_translated: GlideElementTranslatedField;
        
        /**
         * "Domain" column element.
         * Read-only: true; Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Variable Layout" GlideRecord fields.
     * @see {@link $$GlideRecord.item_option_layout}
     * @see {@link $$GlideElement.item_option_layout}
     */
    export interface item_option_layout extends question {
        /**
         * "Column" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        column: GlideElementNumeric;
        
        /**
         * "Position" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        index: GlideElementNumeric;
        
        /**
         * "Section" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        section: GlideElementNumeric;
        
        /**
         * "Column Count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        total_columns: GlideElementNumeric;
        
        /**
         * "Variable" column element.
         * Max Length: 32.
         */
        variable: $$GlideElement.item_option_new;
    }
    
    /**
     * "Wizard Variable" GlideRecord fields.
     * @see {@link $$GlideRecord.expert_variable}
     * @see {@link $$GlideElement.expert_variable}
     */
    export interface expert_variable extends question {
        /**
         * "Expert" column element.
         * Max Length: 32.
         */
        expert: $$GlideElement.expert;
    }
    
    /**
     * "Wizard" GlideRecord fields.
     * @see {@link $$GlideRecord.expert}
     * @see {@link $$GlideElement.expert}
     */
    export interface expert extends sys_metadata {
        /**
         * "Banner type" column element.
         * Max Length: 40.
         * Default Value: "generated".
         */
        banner_type: GlideElement;
        
        /**
         * "Basic panel flow" column element.
         * Max Length: 40.
         */
        basic_panel_flow: GlideElementBoolean;
        
        /**
         * "First panel" column element.
         * Max Length: 32.
         */
        first_panel: $$GlideElement.expert_panel;
        
        /**
         * "Name" column element.
         * Unique: true; Max Length: 40.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Redirect" column element.
         * Max Length: 40.
         */
        redirect: GlideElement;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        roles: GlideElement;
    }
    
    /**
     * "Wizard Panel" GlideRecord fields.
     * @see {@link $$GlideRecord.expert_panel}
     * @see {@link $$GlideElement.expert_panel}
     */
    export interface expert_panel extends sys_metadata {
        /**
         * "Banner step" column element.
         * Max Length: 32.
         */
        banner_step: $$GlideElement.expert_banner_step;
        
        /**
         * "Complete message" column element.
         * Max Length: 40.
         * Default Value: "Done".
         */
        complete_message: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 8000.
         */
        description: GlideElementTranslatedHTML;
        
        /**
         * "Expert" column element.
         * Max Length: 32.
         */
        expert: $$GlideElement.expert;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Next message" column element.
         * Max Length: 40.
         * Default Value: "Next".
         */
        next_message: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Previous message" column element.
         * Max Length: 40.
         * Default Value: "Previous".
         */
        previous_message: GlideElement;
        
        /**
         * "Title" column element.
         * Max Length: 100.
         */
        title: GlideElementTranslatedField;
    }
    
    /**
     * "Banner Step" GlideRecord fields.
     * @see {@link $$GlideRecord.expert_banner_step}
     * @see {@link $$GlideElement.expert_banner_step}
     */
    export interface expert_banner_step extends sys_metadata {
        /**
         * "Expert" column element.
         * Max Length: 32.
         */
        expert: $$GlideElement.expert;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Max Length: 40.
         * Default Value: "100".
         */
        order: GlideElement;
    }
    
    /**
     * "Question" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_question}
     * @see {@link $$GlideElement.sc_ic_question}
     */
    export interface sc_ic_question extends sys_metadata {
        /**
         * "Base type" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        base_type: GlideElementNumeric;
        
        /**
         * "One off cost" column element.
         * Max Length: 20.
         */
        cost: GlideElementPrice;
        
        /**
         * "Default value" column element.
         * Max Length: 512.
         */
        default_value: GlideElement;
        
        /**
         * "Help text" column element.
         * Max Length: 1024.
         */
        help_text: GlideElementTranslatedText;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        mandatory: GlideElementBoolean;
        
        /**
         * "Max Length" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 255.
         */
        max_length: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        order: GlideElementNumeric;
        
        /**
         * "Policy payload" column element.
         * Max Length: 100000.
         */
        policy_payload: GlideElementCompressed;
        
        /**
         * "Preconfigured Question" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        preconfigured: GlideElementBoolean;
        
        /**
         * "Question" column element.
         * Mandatory: true; Max Length: 255.
         */
        question_text: GlideElementTranslatedText;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        read_only: GlideElementBoolean;
        
        /**
         * "Read only question type" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        read_only_question_type: GlideElementBoolean;
        
        /**
         * "Recurring cost" column element.
         * Max Length: 20.
         */
        recurring_cost: GlideElementPrice;
        
        /**
         * "Column" column element.
         * Max Length: 32.
         */
        sc_ic_column: $$GlideElement.sc_ic_column;
        
        /**
         * "Item" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_ic_item_staging: $$GlideElement.sc_ic_item_staging;
        
        /**
         * "Type" column element.
         * Mandatory: true; Max Length: 32.
         * Default Value: "027ffb11eb5211003623666cd206fe1f".
         */
        sc_ic_question_class: $$GlideElement.sc_ic_question_class;
        
        /**
         * "Option" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_ic_question_type: $$GlideElement.sc_ic_question_type;
        
        /**
         * "Section" column element.
         * Max Length: 32.
         */
        sc_ic_section: $$GlideElement.sc_ic_section;
        
        /**
         * "Scale Max" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        scale_max: GlideElementNumeric;
        
        /**
         * "Scale Min" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        scale_min: GlideElementNumeric;
    }
    
    /**
     * "Section" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_section}
     * @see {@link $$GlideElement.sc_ic_section}
     */
    export interface sc_ic_section extends sys_metadata {
        /**
         * "Position" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        index: GlideElementNumeric;
        
        /**
         * "Label" column element.
         * Max Length: 250.
         */
        label: GlideElementTranslatedText;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 270.
         */
        name: GlideElement;
        
        /**
         * "Item" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_ic_item_staging: $$GlideElement.sc_ic_item_staging;
    }
    
    /**
     * "Column" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_column}
     * @see {@link $$GlideElement.sc_ic_column}
     */
    export interface sc_ic_column extends sys_metadata {
        /**
         * "Position" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         */
        index: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Section" column element.
         * Max Length: 32.
         */
        sc_ic_section: $$GlideElement.sc_ic_section;
    }
    
    /**
     * "Question Choice" GlideRecord fields.
     * @see {@link $$GlideRecord.question_choice}
     * @see {@link $$GlideElement.question_choice}
     */
    export interface question_choice extends sys_metadata {
        /**
         * "Inactive" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        inactive: GlideElementBoolean;
        
        /**
         * "Price" column element.
         * Max Length: 20.
         */
        misc: GlideElementPrice;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Published choice" column element.
         * Read-only: true; Max Length: 32.
         */
        published_ref: $$GlideElement.question_choice;
        
        /**
         * "Question" column element.
         * Max Length: 32.
         */
        question: $$GlideElement.question;
        
        /**
         * "Recurring price" column element.
         * Max Length: 20.
         */
        rec_misc: GlideElementPrice;
        
        /**
         * "Text" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        text: GlideElementTranslatedField;
        
        /**
         * "Value" column element.
         * Mandatory: true; Max Length: 80.
         */
        value: GlideElement;
    }

    /**
     * "Question Choice" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_question_choice}
     * @see {@link $$GlideElement.sc_ic_question_choice}
     */
    export interface sc_ic_question_choice extends sys_metadata {
        /**
         * "One off cost" column element.
         * Max Length: 20.
         */
        cost: GlideElementPrice;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Recurring cost" column element.
         * Max Length: 20.
         */
        recurring_cost: GlideElementPrice;
        
        /**
         * "Question" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_ic_question: $$GlideElement.sc_ic_question;
        
        /**
         * "Text" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        text: GlideElementTranslatedText;
        
        /**
         * "Value" column element.
         * Mandatory: true; Max Length: 80.
         */
        value: GlideElement;
    }
    
    /**
     * "Question Class" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_question_class}
     * @see {@link $$GlideElement.sc_ic_question_class}
     */
    export interface sc_ic_question_class extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Preconfigured only" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        preconfigured_only: GlideElementBoolean;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "6".
         */
        type: GlideElement;
    }
    
    /**
     * "Question Type" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_question_type}
     * @see {@link $$GlideElement.sc_ic_question_type}
     */
    export interface sc_ic_question_type extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "One off cost" column element.
         * Max Length: 20.
         */
        cost: GlideElementPrice;
        
        /**
         * "Default value" column element.
         * Max Length: 512.
         */
        default_value: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Help text" column element.
         * Max Length: 1024.
         */
        help_text: GlideElementTranslatedText;
        
        /**
         * "Max Length" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 255.
         */
        max_length: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Preconfigured question" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        preconfigured: GlideElementBoolean;
        
        /**
         * "Question" column element.
         * Max Length: 255.
         */
        question_text: GlideElementTranslatedText;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        read_only: GlideElementBoolean;
        
        /**
         * "Recurring cost" column element.
         * Max Length: 20.
         */
        recurring_cost: GlideElementPrice;
        
        /**
         * "Reference" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        reference: GlideElement;
        
        /**
         * "Reference qualifier" column element.
         * Max Length: 1024.
         */
        reference_qual: GlideElement;
        
        /**
         * "Question class" column element.
         * Mandatory: true; Max Length: 40.
         */
        sc_ic_question_class: $$GlideElement.sc_ic_question_class;
        
        /**
         * "Scale Max" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        scale_max: GlideElementNumeric;
        
        /**
         * "Scale Min" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        scale_min: GlideElementNumeric;
    }
    
    /**
     * "Question Type Choice" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_ic_question_type_choice}
     * @see {@link $$GlideElement.sc_ic_question_type_choice}
     */
    export interface sc_ic_question_type_choice extends sys_metadata {
        /**
         * "One off cost" column element.
         * Max Length: 20.
         */
        cost: GlideElementPrice;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Recurring cost" column element.
         * Max Length: 20.
         */
        recurring_cost: GlideElementPrice;
        
        /**
         * "Question type" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_ic_question_type: $$GlideElement.sc_ic_question_type;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 80.
         */
        text: GlideElementTranslatedText;
        
        /**
         * "Value" column element.
         * Mandatory: true; Max Length: 80.
         */
        value: GlideElement;
    }
    
    /**
     * "Assessment Instance Question" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_assessment_instance_question}
     * @see {@link $$GlideElement.asmt_assessment_instance_question}
     */
    export interface asmt_assessment_instance_question extends IBaseRecord {
        /**
         * "Additional Information" column element.
         * Max Length: 8000.
         */
        add_info: GlideElement;
        
        /**
         * "Category" column element.
         * Read-only: true; Max Length: 32.
         */
        category: $$GlideElement.asmt_metric_category;
        
        /**
         * "Instance" column element.
         * Read-only: true; Max Length: 32.
         */
        instance: $$GlideElement.asmt_assessment_instance;
        
        /**
         * "Is hidden" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        is_hidden: GlideElementBoolean;
        
        /**
         * "Metric" column element.
         * Read-only: true; Display: true; Max Length: 32.
         */
        metric: $$GlideElement.asmt_metric;
        
        /**
         * "Metric Definition" column element.
         * Read-only: true; Max Length: 32.
         */
        metric_definition: $$GlideElement.asmt_metric_definition;
        
        /**
         * "Metric type group" column element.
         * Read-only: true; Max Length: 32.
         */
        metric_type_group: $$GlideElement.asmt_metric_type_group;
        
        /**
         * "Reference id" column element.
         * Read-only: true; Max Length: 32.
         */
        reference_id: GlideElement;
        
        /**
         * "Source" column element.
         * Read-only: true; Max Length: 32.
         */
        source_id: GlideElementDocumentId;
        
        /**
         * "Source table" column element.
         * Type: "Table Name" (table_name).
         * Read-only: true; Max Length: 80.
         */
        source_table: GlideElement;
        
        /**
         * "String value" column element.
         * Read-only: true; Max Length: 1000.
         */
        string_value: GlideElement;
        
        /**
         * "Domain" column element.
         * Read-only: true; Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        value: GlideElementNumeric;
    }
    
    /**
     * "Assessment Metric Type Group" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_metric_type_group}
     * @see {@link $$GlideElement.asmt_metric_type_group}
     */
    export interface asmt_metric_type_group extends IBaseRecord {
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Metric type" column element.
         * Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Assessment Metric Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_metric_definition}
     * @see {@link $$GlideElement.asmt_metric_definition}
     */
    export interface asmt_metric_definition extends sys_metadata {
        /**
         * "Display" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        display: GlideElementTranslatedText;
        
        /**
         * "Metric" column element.
         * Max Length: 32.
         */
        metric: $$GlideElement.asmt_metric;
        
        /**
         * "Normalization Input" column element.
         * Type: "Integer" (integer).
         * Max Length: 15.
         * Default Value: 0.
         */
        normalization_input: GlideElementNumeric;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 15.
         */
        order: GlideElementNumeric;
        
        /**
         * "Selected Image" column element.
         * Max Length: 40.
         */
        selected_image: GlideElementUserImage;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Unselected Image" column element.
         * Max Length: 40.
         */
        unselected_image: GlideElementUserImage;
        
        /**
         * "Value" column element.
         * Type: "Decimal" (decimal).
         * Mandatory: true; Max Length: 15.
         */
        value: GlideElementNumeric;
    }
    
    /**
     * "Assessment Instance" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_assessment_instance}
     * @see {@link $$GlideElement.asmt_assessment_instance}
     */
    export interface asmt_assessment_instance extends IBaseRecord {
        /**
         * "Assessment group" column element.
         * Mandatory: true; Max Length: 32.
         */
        assessment_group: $$GlideElement.asmt_assessment;
        
        /**
         * "Channel" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         */
        channel: GlideElement;
        
        /**
         * "Continue from question" column element.
         * Read-only: true; Max Length: 40.
         */
        continue_from_question: GlideElement;
        
        /**
         * "Due date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Read-only: true; Max Length: 40.
         */
        due_date: GlideElementGlideObject;
        
        /**
         * "Expiration date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Read-only: true; Max Length: 40.
         */
        expiration_date: GlideElementGlideObject;
        
        /**
         * "Metric type" column element.
         * Read-only: true; Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Number" column element.
         * Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Percent answered" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Max Length: 15.
         * Default Value: 0.
         */
        percent_answered: GlideElementNumeric;
        
        /**
         * "Preview" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        preview: GlideElementBoolean;
        
        /**
         * "Related record 1" column element.
         * Read-only: true; Max Length: 32.
         */
        related_id_1: GlideElementDocumentId;
        
        /**
         * "Related record 2" column element.
         * Read-only: true; Max Length: 32.
         */
        related_id_2: GlideElementDocumentId;
        
        /**
         * "Related record 3" column element.
         * Read-only: true; Max Length: 32.
         */
        related_id_3: GlideElementDocumentId;
        
        /**
         * "Related record 4" column element.
         * Read-only: true; Max Length: 32.
         */
        related_id_4: GlideElementDocumentId;
        
        /**
         * "Related table 1" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        related_table_1: GlideElement;
        
        /**
         * "Related table 2" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        related_table_2: GlideElement;
        
        /**
         * "Related table 3" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        related_table_3: GlideElement;
        
        /**
         * "Related table 4" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        related_table_4: GlideElement;
        
        /**
         * "Signature" column element.
         * Read-only: true; Max Length: 32.
         */
        signature: $$GlideElement.asmt_signature;
        
        /**
         * "Signature result" column element.
         * Read-only: true; Max Length: 40.
         */
        signature_result: GlideElement;
        
        /**
         * "State" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: "ready".
         */
        state: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Taken on" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        taken_on: GlideElementGlideObject;
        
        /**
         * "Task" column element.
         * Read-only: true; Max Length: 32.
         */
        task_id: $$GlideElement.task;
        
        /**
         * "Trigger condition" column element.
         * Read-only: true; Max Length: 32.
         */
        trigger_condition: $$GlideElement.asmt_condition;
        
        /**
         * "Trigger ID" column element.
         * Read-only: true; Max Length: 32.
         */
        trigger_id: GlideElementDocumentId;
        
        /**
         * "Trigger table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        trigger_table: GlideElement;
        
        /**
         * "Assigned to" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Trigger Condition" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_condition}
     * @see {@link $$GlideElement.asmt_condition}
     */
    export interface asmt_condition extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Assessment" column element.
         * Mandatory: true; Max Length: 32.
         */
        assessment: $$GlideElement.asmt_metric_type;
        
        /**
         * "Assessable record" column element.
         * Max Length: 32.
         */
        assessment_record: $$GlideElement.asmt_assessable_record;
        
        /**
         * "Assessable Record Field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        assessment_record_field: GlideElement;
        
        /**
         * "Business rule" column element.
         * Read-only: true; Max Length: 32.
         */
        business_rule: $$GlideElement.sys_script;
        
        /**
         * "Condition" column element.
         * Mandatory: true; Max Length: 1000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Description" column element.
         * Display: true; Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Repeat Interval" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         * Default Value: "30 00:00:00".
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Probability (%)" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        percent_random: GlideElementNumeric;
        
        /**
         * "Related field 1" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        related_field_1: GlideElement;
        
        /**
         * "Related field 2" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        related_field_2: GlideElement;
        
        /**
         * "Related field 3" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        related_field_3: GlideElement;
        
        /**
         * "Related field 4" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        related_field_4: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.asmt_condition;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Trigger randomly" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        trigger_random: GlideElementBoolean;
        
        /**
         * "User field" column element.
         * Type: "Field Name" (field_name).
         * Mandatory: true; Max Length: 80.
         */
        user_field: GlideElement;
    }
    
    /**
     * "Assessment Group" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_assessment}
     * @see {@link $$GlideElement.asmt_assessment}
     */
    export interface asmt_assessment extends IBaseRecord {
        /**
         * "Metric type" column element.
         * Read-only: true; Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Number" column element.
         * Read-only: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Assessable Record" GlideRecord fields.
     * @see {@link $$GlideRecord.asmt_assessable_record}
     * @see {@link $$GlideElement.asmt_assessable_record}
     */
    export interface asmt_assessable_record extends IBaseRecord {
        /**
         * "Decision matrix" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        dm_display: GlideElementBoolean;
        
        /**
         * "Live feed" column element.
         * Max Length: 40.
         */
        live_feed: GlideElementBoolean;
        
        /**
         * "Live feed conversation" column element.
         * Read-only: true; Max Length: 32.
         */
        live_feed_group: $$GlideElement.live_group_profile;
        
        /**
         * "Type" column element.
         * Max Length: 32.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Metric type group" column element.
         * Max Length: 32.
         */
        metric_type_group: $$GlideElement.asmt_metric_type_group;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 250.
         */
        name: GlideElement;
        
        /**
         * "Source" column element.
         * Max Length: 32.
         */
        source_id: GlideElementDocumentId;
        
        /**
         * "Source table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        source_table: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Live Group Profile" GlideRecord fields.
     * @see {@link $$GlideRecord.live_group_profile}
     * @see {@link $$GlideElement.live_group_profile}
     */
    export interface live_group_profile extends IBaseRecord {
        /**
         * "Document ID" column element.
         * Max Length: 32.
         */
        document: GlideElementDocumentId;
        
        /**
         * "Document conversation" column element.
         * Max Length: 40.
         */
        document_group: GlideElementBoolean;
        
        /**
         * "Image" column element.
         * Max Length: 128.
         */
        image: GlideElement;
        
        /**
         * "Last activity" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_activity: GlideElementGlideObject;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Photo" column element.
         * Max Length: 40.
         */
        photo: GlideElementUserImage;
        
        /**
         * "Public" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        public_group: GlideElementBoolean;
        
        /**
         * "Short description" column element.
         * Max Length: 100.
         */
        short_description: GlideElement;
        
        /**
         * "Group Type" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "group".
         */
        type: GlideElement;
        
        /**
         * "Visible" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        visible_group: GlideElementBoolean;
    }
    
    /**
     * "Item" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cart_item}
     * @see {@link $$GlideElement.sc_cart_item}
     */
    export interface sc_cart_item extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Cart" column element.
         * Max Length: 32.
         */
        cart: $$GlideElement.sc_cart;
        
        /**
         * "Item" column element.
         * Max Length: 32.
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Hints" column element.
         * Type: "XML" (xml).
         * Max Length: 4000.
         */
        hints: GlideElementScript;
        
        /**
         * "Order Guide" column element.
         * Max Length: 32.
         */
        order_guide: $$GlideElement.sc_cat_item_guide;
        
        /**
         * "Quantity" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        quantity: GlideElementNumeric;
        
        /**
         * "Requested for" column element.
         * Max Length: 32.
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Catalog" column element.
         * Read-only: true; Max Length: 32.
         */
        sc_catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Show quantity" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        show_quantity: GlideElementBoolean;
        
        /**
         * "Variables" column element.
         * Max Length: 40.
         */
        variables: GlideElementVariables;
    }
    
    /**
     * "Shopping Cart" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_cart}
     * @see {@link $$GlideElement.sc_cart}
     */
    export interface sc_cart extends IBaseRecord {
        /**
         * "Contact type" column element.
         * Max Length: 40.
         */
        contact_type: GlideElement;
        
        /**
         * "Current crumb history" column element.
         * Max Length: 4000.
         */
        current_crumb_history: GlideElement;
        
        /**
         * "Current crumbs" column element.
         * Max Length: 4000.
         */
        current_crumbs: GlideElement;
        
        /**
         * "Current guide" column element.
         * Max Length: 32.
         */
        current_guide: $$GlideElement.sc_cat_item_guide;
        
        /**
         * "Current guide active" column element.
         * Max Length: 32.
         */
        current_guide_active: $$GlideElement.sc_cat_item;
        
        /**
         * "Current guide serial" column element.
         * Max Length: 32000.
         */
        current_guide_serial: GlideElement;
        
        /**
         * "Delivery address" column element.
         * Max Length: 4000.
         */
        delivery_address: GlideElement;
        
        /**
         * "Guides added" column element.
         * Max Length: 512.
         */
        guides_added: GlideElement;
        
        /**
         * "Hidden" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        hidden: GlideElementBoolean;
        
        /**
         * "Manual address" column element.
         * Max Length: 40.
         */
        manual_address: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 100.
         * Default Value: "DEFAULT".
         */
        name: GlideElement;
        
        /**
         * "Requested for" column element.
         * Max Length: 32.
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Source ID" column element.
         * Max Length: 32.
         */
        source_id: GlideElementDocumentId;
        
        /**
         * "Source table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        source_table: GlideElement;
        
        /**
         * "Special instructions" column element.
         * Max Length: 4000.
         */
        special_instructions: GlideElement;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Question Answer" GlideRecord fields.
     * @see {@link $$GlideRecord.question_answer}
     * @see {@link $$GlideElement.question_answer}
     */
    export interface question_answer extends IBaseRecord {
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Question" column element.
         * Max Length: 32.
         */
        question: $$GlideElement.question;
        
        /**
         * "Class" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Table name" column element.
         * Max Length: 40.
         */
        table_name: GlideElementShortTableName;
        
        /**
         * "Table sys ID" column element.
         * Type: "Char" (char); Scalar type: GUID.
         * Max Length: 32.
         */
        table_sys_id: GlideElement;
        
        /**
         * "Value" column element.
         * Max Length: 4000.
         */
        value: GlideElement;
    }
    
    /**
     * "Password Reset Active Question" GlideRecord fields.
     * @see {@link $$GlideRecord.pwd_active_question}
     * @see {@link $$GlideElement.pwd_active_question}
     */
    export interface pwd_active_question extends IBaseRecord {
        /**
         * "Question" column element.
         * Max Length: 256.
         */
        question: GlideElement;
        
        /**
         * "Domain" column element.
         * Read-only: true; Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Social Q\u0026A Question" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_social_qa_question}
     * @see {@link $$GlideElement.kb_social_qa_question}
     */
    export interface kb_social_qa_question extends IBaseRecord {
        /**
         * "Accepted answer" column element.
         * Read-only: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        accepted_answer: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        active: GlideElementBoolean;
        
        /**
         * "Answer count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        answer_count: GlideElementNumeric;
        
        /**
         * "Has comment" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        has_comment: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        kb_category: $$GlideElement.kb_category;
        
        /**
         * "Knowledge Base" column element.
         * Mandatory: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "Language" column element.
         * Max Length: 40.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        language: GlideElement;
        
        /**
         * "Last activity" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        last_activity: GlideElementGlideObject;
        
        /**
         * "Profile" column element.
         * Mandatory: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        profile: $$GlideElement.live_profile;
        
        /**
         * "Question" column element.
         * Mandatory: true; Display: true; Max Length: 250.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        question: GlideElement;
        
        /**
         * "Question details" column element.
         * Max Length: 65000.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        question_details: GlideElementTranslatedHTML;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Top answer" column element.
         * Read-only: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        top_answer: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Views" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        views: GlideElementNumeric;
        
        /**
         * "Votes" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        votes: GlideElementNumeric;
    }
    
    /**
     * "Social Q\u0026A Answer" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_social_qa_answer}
     * @see {@link $$GlideElement.kb_social_qa_answer}
     */
    export interface kb_social_qa_answer extends IBaseRecord {
        /**
         * "Accepted" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        accepted: GlideElementBoolean;
        
        /**
         * "Accepted by" column element.
         * Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        accepted_by: $$GlideElement.live_profile;
        
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        active: GlideElementBoolean;
        
        /**
         * "Answer" column element.
         * Mandatory: true; Display: true; Max Length: 65000.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        answer: GlideElementTranslatedHTML;
        
        /**
         * "Has comment" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        has_comment: GlideElementBoolean;
        
        /**
         * "Parent" column element.
         * Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        parent: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Profile" column element.
         * Mandatory: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        profile: $$GlideElement.live_profile;
        
        /**
         * "Question" column element.
         * Mandatory: true; Max Length: 32.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        question: $$GlideElement.kb_social_qa_question;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Votes" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         * Scope: "Social Knowledge" (sn_kb_social_qa)
         */
        votes: GlideElementNumeric;
    }
    
    /**
     * "Knowledge Category" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_category}
     * @see {@link $$GlideElement.kb_category}
     */
    export interface kb_category extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Full Category" column element.
         * Max Length: 255.
         */
        full_category: GlideElementTranslatedText;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        label: GlideElementTranslatedText;
        
        /**
         * "Parent ID" column element.
         * Max Length: 32.
         */
        parent_id: GlideElementDocumentId;
        
        /**
         * "Parent table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        parent_table: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" column element.
         * Max Length: 40.
         */
        value: GlideElement;
    }
    
    /**
     * "Live Profile" GlideRecord fields.
     * @see {@link $$GlideRecord.live_profile}
     * @see {@link $$GlideElement.live_profile}
     */
    export interface live_profile extends IBaseRecord {
        /**
         * "Document" column element.
         * Max Length: 32.
         */
        document: GlideElementDocumentId;
        
        /**
         * "Follower count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        follower_count: GlideElementNumeric;
        
        /**
         * "Following count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        following_count: GlideElementNumeric;
        
        /**
         * "Image" column element.
         * Max Length: 128.
         */
        image: GlideElement;
        
        /**
         * "Joined feed" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        joined_feed: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 128.
         */
        name: GlideElement;
        
        /**
         * "Photo" column element.
         * Max Length: 40.
         */
        photo: GlideElementUserImage;
        
        /**
         * "Short description" column element.
         * Max Length: 4095.
         */
        short_description: GlideElement;
        
        /**
         * "Status" column element.
         * Max Length: 100.
         */
        status: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "user".
         */
        type: GlideElement;
    }
    
    /**
     * "Attachment" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_attachment}
     * @see {@link $$GlideElement.sys_attachment}
     */
    export interface sys_attachment extends IBaseRecord {
        /**
         * "Average image color" column element.
         * Type: "Color" (color).
         * Max Length: 40.
         */
        average_image_color: GlideElement;
        
        /**
         * "Chunk size bytes" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        chunk_size_bytes: GlideElementNumeric;
        
        /**
         * "Compressed" column element.
         * Max Length: 40.
         */
        compressed: GlideElementBoolean;
        
        /**
         * "Content type" column element.
         * Max Length: 100.
         */
        content_type: GlideElement;
        
        /**
         * "File name" column element.
         * Display: true; Max Length: 100.
         */
        file_name: GlideElement;
        
        /**
         * "Hash" column element.
         * Max Length: 64.
         */
        hash: GlideElement;
        
        /**
         * "Image height" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        image_height: GlideElementNumeric;
        
        /**
         * "Image width" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        image_width: GlideElementNumeric;
        
        /**
         * "Size bytes" column element.
         * Type: "Long" (longint).
         * Max Length: 40.
         */
        size_bytes: GlideElementNumeric;
        
        /**
         * "Size compressed" column element.
         * Type: "Long" (longint).
         * Max Length: 40.
         */
        size_compressed: GlideElementNumeric;
        
        /**
         * "State" column element.
         * Max Length: 40.
         */
        state: GlideElement;
        
        /**
         * "Table name" column element.
         * Max Length: 80.
         */
        table_name: GlideElement;
        
        /**
         * "Table sys ID" column element.
         * Type: "Char" (char); Scalar type: GUID.
         * Max Length: 32.
         */
        table_sys_id: GlideElement;
    }
    
    /**
     * "Attachment Document" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_attachment_doc}
     * @see {@link $$GlideElement.sys_attachment_doc}
     */
    export interface sys_attachment_doc {
        /**
         * "Data" column element.
         * Max Length: 4000.
         */
        data: GlideElement;
        
        /**
         * "Length" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        length: GlideElementNumeric;
        
        /**
         * "Position" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        position: GlideElementNumeric;
        
        /**
         * "Sys attachment" column element.
         * Max Length: 32.
         */
        sys_attachment: $$GlideElement.sys_attachment;
        
        /**
         * "Created by" column element.
         * Max Length: 40.
         */
        sys_created_by: GlideElement;
        
        /**
         * "Created" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        sys_created_on: GlideElementGlideObject;
        
        /**
         * "Sys ID" column element.
         * Type: "Sys ID (GUID)" (GUID).
         * Primary: true; Max Length: 32.
         */
        sys_id: GlideElement;
    }
    
    /**
     * "Attachment Document V2" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_attachment_doc_v2}
     * @see {@link $$GlideElement.sys_attachment_doc_v2}
     */
    export interface sys_attachment_doc_v2 {
        /**
         * "Data" column element.
         * Max Length: 1000000.
         */
        data: GlideElement;
        
        /**
         * "Length" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        length: GlideElementNumeric;
        
        /**
         * "Position" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        position: GlideElementNumeric;
        
        /**
         * "Sys attachment" column element.
         * Max Length: 32.
         */
        sys_attachment: $$GlideElement.sys_attachment;
        
        /**
         * "Created by" column element.
         * Max Length: 40.
         */
        sys_created_by: GlideElement;
        
        /**
         * "Created" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        sys_created_on: GlideElementGlideObject;
        
        /**
         * "Sys ID" column element.
         * Type: "Sys ID (GUID)" (GUID).
         * Primary: true; Max Length: 32.
         */
        sys_id: GlideElement;
    }
    
    /**
     * "History" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_history_line}
     * @see {@link $$GlideElement.sys_history_line}
     */
    export interface sys_history_line extends IBaseRecord {
        /**
         * "Audit sysid" column element.
         * Max Length: 32.
         */
        audit_sysid: GlideElement;
        
        /**
         * "Email" column element.
         * Max Length: 100.
         */
        email: GlideElement;
        
        /**
         * "Field" column element.
         * Max Length: 40.
         */
        field: GlideElementShortFieldName;
        
        /**
         * "Record internal checkpoint" column element.
         * Max Length: 40.
         */
        internal_checkpoint: GlideElement;
        
        /**
         * "Label" column element.
         * Max Length: 80.
         */
        label: GlideElement;
        
        /**
         * "New" column element.
         * Max Length: 4000.
         */
        new: GlideElement;
        
        /**
         * "New value" column element.
         * Max Length: 40.
         */
        new_value: GlideElement;
        
        /**
         * "Old" column element.
         * Max Length: 4000.
         */
        old: GlideElement;
        
        /**
         * "Old value" column element.
         * Max Length: 40.
         */
        old_value: GlideElement;
        
        /**
         * "Relation" column element.
         * Max Length: 100.
         */
        relation: GlideElement;
        
        /**
         * "Set" column element.
         * Max Length: 32.
         */
        set: $$GlideElement.sys_history_set;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "audit".
         */
        type: GlideElement;
        
        /**
         * "Update number" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        update: GlideElementNumeric;
        
        /**
         * "Update time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        update_time: GlideElementGlideObject;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
        
        /**
         * "User ID" column element.
         * Max Length: 40.
         */
        user_id: GlideElement;
        
        /**
         * "User name" column element.
         * Max Length: 40.
         */
        user_name: GlideElement;
    }

    /**
     * "Record History" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_history_set}
     * @see {@link $$GlideElement.sys_history_set}
     */
    export interface sys_history_set extends IBaseRecord {
        /**
         * "Date format" column element.
         * Max Length: 40.
         */
        date_format: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         */
        domain: GlideElement;
        
        /**
         * "ID" column element.
         * Display: true; Max Length: 32.
         */
        id: GlideElementDocumentId;
        
        /**
         * "Initial values" column element.
         * Max Length: 1024000.
         */
        initial_values: GlideElement;
        
        /**
         * "Record internal checkpoint" column element.
         * Max Length: 40.
         */
        internal_checkpoint: GlideElement;
        
        /**
         * "Language" column element.
         * Max Length: 40.
         */
        language: GlideElement;
        
        /**
         * "Last update recorded" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        last_update_recorded: GlideElementGlideObject;
        
        /**
         * "Line table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        line_table: GlideElement;
        
        /**
         * "Load time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        load_time: GlideElementGlideObject;
        
        /**
         * "Refresh" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        refresh: GlideElementBoolean;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Timezone" column element.
         * Max Length: 40.
         */
        timezone: GlideElement;
        
        /**
         * "Updates" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        updates: GlideElementNumeric;
    }
    
    /**
     * "Attachment Icon Rule" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_attachment_icon_rule}
     * @see {@link $$GlideElement.sys_attachment_icon_rule}
     */
    export interface sys_attachment_icon_rule extends IBaseRecord {
        /**
         * "File format indicator" column element.
         * Max Length: 100.
         */
        file_format_indicator: GlideElement;
        
        /**
         * "Icon" column element.
         * Max Length: 250.
         */
        icon: GlideElement;
        
        /**
         * "Select icon by" column element.
         * Max Length: 40.
         * Default Value: "file_extension".
         */
        select_icon_by: GlideElement;
    }
    
    /**
     * "System Plugin" GlideRecord fields.
     * @see {@link $$GlideRecord.v_plugin}
     * @see {@link $$GlideElement.v_plugin}
     */
    export interface v_plugin extends IBaseRecord {
        /**
         * "Status" column element.
         * Read-only: true; Max Length: 40.
         */
        active: GlideElement;
        
        /**
         * "Available version" column element.
         * Read-only: true; Max Length: 40.
         */
        available_version: GlideElement;
        
        /**
         * "Block Install" column element.
         * Max Length: 40.
         */
        block_install: GlideElementBoolean;
        
        /**
         * "Definition" column element.
         * Read-only: true; Max Length: 65000.
         */
        definition: GlideElement;
        
        /**
         * "Description" column element.
         * Read-only: true; Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Entitled" column element.
         * Read-only: true; Max Length: 40.
         */
        entitled: GlideElement;
        
        /**
         * "Guided Setup Configuration" column element.
         * Read-only: true; Max Length: 32.
         */
        guided_setup_guid: $$GlideElement.gsw_content;
        
        /**
         * "Has demo data" column element.
         * Read-only: true; Max Length: 40.
         */
        has_demo_data: GlideElementBoolean;
        
        /**
         * "Help" column element.
         * Max Length: 4000.
         */
        help: GlideElementURL;
        
        /**
         * "ID" column element.
         * Read-only: true; Max Length: 255.
         */
        id: GlideElement;
        
        /**
         * "Plugin indicators" column element.
         * Read-only: true; Max Length: 1024.
         * Default Value: "[]".
         */
        indicators: GlideElement;
        
        /**
         * "Licensable" column element.
         * Read-only: true; Max Length: 40.
         */
        licensable: GlideElementBoolean;
        
        /**
         * "Subscription Category" column element.
         * Read-only: true; Max Length: 40.
         */
        license_category: GlideElement;
        
        /**
         * "Subscription Model" column element.
         * Read-only: true; Max Length: 40.
         */
        license_model: GlideElement;
        
        /**
         * "Name" column element.
         * Read-only: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Path" column element.
         * Read-only: true; Max Length: 255.
         */
        path: GlideElement;
        
        /**
         * "Provider" column element.
         * Read-only: true; Max Length: 255.
         */
        provider: GlideElement;
        
        /**
         * "Requires" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Read-only: true; Max Length: 1024.
         */
        requires: $$GlideElement.v_plugin;
        
        /**
         * "Scope" column element.
         * Max Length: 40.
         */
        scope: GlideElement;
        
        /**
         * "State" column element.
         * Read-only: true; Max Length: 255.
         */
        state: GlideElement;
        
        /**
         * "Supports Rollback" column element.
         * Read-only: true; Max Length: 40.
         */
        supports_rollback: GlideElementBoolean;
        
        /**
         * "Trackable" column element.
         * Read-only: true; Max Length: 40.
         */
        trackable: GlideElementBoolean;
        
        /**
         * "Type" column element.
         * Read-only: true; Max Length: 40.
         */
        type: GlideElement;
        
        /**
         * "Version" column element.
         * Read-only: true; Max Length: 40.
         */
        version: GlideElement;
    }
    
    /**
     * "Setup Dependency" GlideRecord fields.
     * @see {@link $$GlideRecord.help_setup_dependency}
     * @see {@link $$GlideElement.help_setup_dependency}
     */
    export interface help_setup_dependency extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Dependent on Plugins" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        dependent_on_plugins: $$GlideElement.v_plugin;
        
        /**
         * "Dependent on Steps" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        dependent_on_steps: $$GlideElement.help_guidance_step;
        
        /**
         * "Dependent on Store Apps" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        dependent_on_store_apps: $$GlideElement.sys_store_app;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 80.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.help_setup_dependency;
    }
    
    /**
     * "Question Regular Expression" GlideRecord fields.
     * @see {@link $$GlideRecord.question_regex}
     * @see {@link $$GlideElement.question_regex}
     */
    export interface question_regex extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Regular Expression" column element.
         * Mandatory: true; Max Length: 4000.
         */
        regex: GlideElement;
        
        /**
         * "Regex Flag" column element.
         * Max Length: 40.
         */
        regex_flag: GlideElement;
        
        /**
         * "Validation message" column element.
         * Max Length: 40.
         * Default Value: "Input is not correct".
         */
        validation_message: GlideElementTranslatedText;
    }
    
    /**
     * "Knowledge" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_knowledge}
     * @see {@link $$GlideElement.kb_knowledge}
     */
    export interface kb_knowledge extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Article type" column element.
         * Max Length: 40.
         * Default Value: "text".
         */
        article_type: GlideElement;
        
        /**
         * "Author" column element.
         * Max Length: 32.
         */
        author: $$GlideElement.sys_user;
        
        /**
         * "Can Read" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        can_read_user_criteria: $$GlideElement.user_criteria;
        
        /**
         * "Cannot Read" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        cannot_read_user_criteria: $$GlideElement.user_criteria;
        
        /**
         * "Category" column element.
         * Max Length: 40.
         */
        category: GlideElement;
        
        /**
         * "Configuration item" column element.
         * Max Length: 32.
         */
        cmdb_ci: $$GlideElement.cmdb_ci;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Attachment link" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        direct: GlideElementBoolean;
        
        /**
         * "Disable commenting" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        disable_commenting: GlideElementBoolean;
        
        /**
         * "Disable suggesting" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        disable_suggesting: GlideElementBoolean;
        
        /**
         * "Display attachments" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        display_attachments: GlideElementBoolean;
        
        /**
         * "Flagged" column element.
         * Max Length: 40.
         */
        flagged: GlideElementBoolean;
        
        /**
         * "Helpful count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        helpful_count: GlideElementNumeric;
        
        /**
         * "Image" column element.
         * Type: "Basic Image" (image).
         * Max Length: 100.
         */
        image: GlideElement;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        kb_category: $$GlideElement.kb_category;
        
        /**
         * "Knowledge base" column element.
         * Mandatory: true; Max Length: 32.
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "Meta" column element.
         * Max Length: 4000.
         */
        meta: GlideElement;
        
        /**
         * "Meta Description" column element.
         * Max Length: 1000.
         */
        meta_description: GlideElement;
        
        /**
         * "Number" column element.
         * Read-only: true; Display: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Published" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 40.
         */
        published: GlideElementGlideObject;
        
        /**
         * "Rating" column element.
         * Type: "Decimal" (decimal).
         * Read-only: true; Max Length: 15.
         */
        rating: GlideElementNumeric;
        
        /**
         * "Replacement Article" column element.
         * Read-only: true; Max Length: 32.
         */
        replacement_article: $$GlideElement.kb_knowledge;
        
        /**
         * "Retired" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Read-only: true; Max Length: 40.
         */
        retired: GlideElementGlideObject;
        
        /**
         * "Roles" column element.
         * Type: "User Roles" (user_roles).
         * Array: true; Max Length: 255.
         */
        roles: GlideElement;
        
        /**
         * "Short description" column element.
         * Mandatory: true; Max Length: 100.
         */
        short_description: GlideElement;
        
        /**
         * "Source Task" column element.
         * Max Length: 32.
         */
        source: $$GlideElement.task;
        
        /**
         * "Class" column element.
         * Max Length: 80.
         */
        sys_class_name: GlideElementSysClassName;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "View count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        sys_view_count: GlideElementNumeric;
        
        /**
         * "Taxonomy topic" column element.
         * Max Length: 32.
         */
        taxonomy_topic: $$GlideElement.topic;
        
        /**
         * "Article body" column element.
         * Max Length: 65000.
         */
        text: GlideElementTranslatedHTML;
        
        /**
         * "Topic" column element.
         * Max Length: 40.
         * Default Value: "General".
         */
        topic: GlideElement;
        
        /**
         * "Use count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        use_count: GlideElementNumeric;
        
        /**
         * "Valid to" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 40.
         */
        valid_to: GlideElementGlideObject;
        
        /**
         * "View as allowed" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        view_as_allowed: GlideElementBoolean;
        
        /**
         * "Wiki" column element.
         * Max Length: 65000.
         */
        wiki: GlideElementWikiText;
        
        /**
         * "Workflow" column element.
         * Max Length: 80.
         * Default Value: "draft".
         */
        workflow_state: GlideElementWorkflow;
    }
    
    /**
     * "Knowledge keyword" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_knowledge_keyword}
     * @see {@link $$GlideElement.kb_knowledge_keyword}
     */
    export interface kb_knowledge_keyword extends sys_metadata {
        /**
         * "Keywords" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Mandatory: true; Max Length: 1024.
         */
        keywords: $$GlideElement.kb_keyword;
        
        /**
         * "Knowledge" column element.
         * Mandatory: true; Max Length: 32.
         */
        knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Related Articles" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_2_kb}
     * @see {@link $$GlideElement.kb_2_kb}
     */
    export interface kb_2_kb extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Knowledge article" column element.
         * Mandatory: true; Max Length: 32.
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Related knowledge article" column element.
         * Mandatory: true; Max Length: 32.
         */
        related_kb_knowledge: $$GlideElement.kb_knowledge;
    }
    
    /**
     * "Related Articles" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_2_kb}
     * @see {@link $$GlideElement.sc_2_kb}
     */
    export interface sc_2_kb extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Knowledge Article" column element.
         * Max Length: 32.
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Catalog Item" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }
    
    /**
     * "Related Catalog Items" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_2_sc}
     * @see {@link $$GlideElement.kb_2_sc}
     */
    export interface kb_2_sc extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Knowledge article" column element.
         * Mandatory: true; Max Length: 32.
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Catalog item" column element.
         * Mandatory: true; Max Length: 32.
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }
    
    /**
     * "Incident" GlideRecord fields.
     * @see {@link $$GlideRecord.incident}
     * @see {@link $$GlideElement.incident}
     */
    export interface incident extends task {
        /**
         * "Business impact" column element.
         * Max Length: 4000.
         */
        business_impact: GlideElement;
        
        /**
         * "Business resolve time" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        business_stc: GlideElementNumeric;
        
        /**
         * "Resolve time" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        calendar_stc: GlideElementNumeric;
        
        /**
         * "Caller" column element.
         * Max Length: 32.
         */
        caller_id: $$GlideElement.sys_user;
        
        /**
         * "Category" column element.
         * Max Length: 40.
         * Default Value: "inquiry".
         */
        category: GlideElement;
        
        /**
         * "Probable cause" column element.
         * Max Length: 4000.
         */
        cause: GlideElement;
        
        /**
         * "Caused by Change" column element.
         * Max Length: 32.
         */
        caused_by: $$GlideElement.change_request;
        
        /**
         * "Child Incidents" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        child_incidents: GlideElementNumeric;
        
        /**
         * "Close code" column element.
         * Max Length: 40.
         */
        close_code: GlideElement;
        
        /**
         * "On hold reason" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        hold_reason: GlideElementNumeric;
        
        /**
         * "Incident state" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        incident_state: GlideElementNumeric;
        
        /**
         * "Notify" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        notify: GlideElementNumeric;
        
        /**
         * "Origin" column element.
         * Max Length: 32.
         */
        origin_id: GlideElementDocumentId;
        
        /**
         * "Origin table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        origin_table: GlideElement;
        
        /**
         * "Parent Incident" column element.
         * Max Length: 32.
         */
        parent_incident: $$GlideElement.incident;
        
        /**
         * "Problem" column element.
         * Max Length: 32.
         */
        problem_id: $$GlideElement.problem;
        
        /**
         * "Reopen count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        reopen_count: GlideElementNumeric;
        
        /**
         * "Last reopened by" column element.
         * Read-only: true; Max Length: 32.
         */
        reopened_by: $$GlideElement.sys_user;
        
        /**
         * "Last reopened at" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        reopened_time: GlideElementGlideObject;
        
        /**
         * "Resolved" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        resolved_at: GlideElementGlideObject;
        
        /**
         * "Resolved by" column element.
         * Max Length: 32.
         */
        resolved_by: $$GlideElement.sys_user;
        
        /**
         * "Change Request" column element.
         * Max Length: 32.
         */
        rfc: $$GlideElement.change_request;
        
        /**
         * "Severity" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        severity: GlideElementNumeric;
        
        /**
         * "Subcategory" column element.
         * Max Length: 40.
         */
        subcategory: GlideElement;
    }
    
    /**
     * "Problem" GlideRecord fields.
     * @see {@link $$GlideRecord.problem}
     * @see {@link $$GlideElement.problem}
     */
    export interface problem extends task {
        /**
         * "Category" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        category: GlideElement;
        
        /**
         * "Cause notes" column element.
         * Type: "HTML" (html); Scalar type: string.
         * Max Length: 65536.
         */
        cause_notes: GlideElementGlideObject;
        
        /**
         * "Confirmed" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        confirmed_at: GlideElementGlideObject;
        
        /**
         * "Confirmed by" column element.
         * Read-only: true; Max Length: 32.
         */
        confirmed_by: $$GlideElement.sys_user;
        
        /**
         * "Duplicate of" column element.
         * Max Length: 32.
         */
        duplicate_of: $$GlideElement.problem;
        
        /**
         * "First reported by" column element.
         * Max Length: 32.
         */
        first_reported_by_task: $$GlideElement.task;
        
        /**
         * "Fix" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        fix_at: GlideElementGlideObject;
        
        /**
         * "Fix by" column element.
         * Read-only: true; Max Length: 32.
         */
        fix_by: $$GlideElement.sys_user;
        
        /**
         * "Fix communicated" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        fix_communicated_at: GlideElementGlideObject;
        
        /**
         * "Fix communicated by" column element.
         * Read-only: true; Max Length: 32.
         */
        fix_communicated_by: $$GlideElement.sys_user;
        
        /**
         * "Fix notes" column element.
         * Type: "HTML" (html); Scalar type: string.
         * Max Length: 65536.
         */
        fix_notes: GlideElementGlideObject;
        
        /**
         * "Known error" column element.
         * Max Length: 40.
         */
        known_error: GlideElementBoolean;
        
        /**
         * "Major problem" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        major_problem: GlideElementBoolean;
        
        /**
         * "Problem state" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        problem_state: GlideElementNumeric;
        
        /**
         * "Related Incidents" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        related_incidents: GlideElementNumeric;
        
        /**
         * "Reopen count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Default Value: 0.
         */
        reopen_count: GlideElementNumeric;
        
        /**
         * "Last reopened at" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        reopened_at: GlideElementGlideObject;
        
        /**
         * "Last reopened by" column element.
         * Read-only: true; Max Length: 32.
         */
        reopened_by: $$GlideElement.sys_user;
        
        /**
         * "Resolution code" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         */
        resolution_code: GlideElement;
        
        /**
         * "Resolved" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        resolved_at: GlideElementGlideObject;
        
        /**
         * "Resolved by" column element.
         * Read-only: true; Max Length: 32.
         */
        resolved_by: $$GlideElement.sys_user;
        
        /**
         * "Major problem review notes" column element.
         * Max Length: 4000.
         */
        review_outcome: GlideElement;
        
        /**
         * "Change request" column element.
         * Max Length: 32.
         */
        rfc: $$GlideElement.change_request;
        
        /**
         * "Subcategory" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        subcategory: GlideElement;
        
        /**
         * "Workaround" column element.
         * Type: "HTML" (html); Scalar type: string.
         * Max Length: 65536.
         */
        workaround: GlideElementGlideObject;
        
        /**
         * "Workaround applied" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        workaround_applied: GlideElementBoolean;
        
        /**
         * "Workaround communicated" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        workaround_communicated_at: GlideElementGlideObject;
        
        /**
         * "Workaround communicated by" column element.
         * Read-only: true; Max Length: 32.
         */
        workaround_communicated_by: $$GlideElement.sys_user;
    }
    
    /**
     * "Change Request" GlideRecord fields.
     * @see {@link $$GlideRecord.change_request}
     * @see {@link $$GlideElement.change_request}
     */
    export interface change_request extends task {
        /**
         * "Backout plan" column element.
         * Max Length: 4000.
         */
        backout_plan: GlideElement;
        
        /**
         * "CAB date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Active: false; Max Length: 40.
         */
        cab_date: GlideElementGlideObject;
        
        /**
         * "CAB date/time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        cab_date_time: GlideElementGlideObject;
        
        /**
         * "CAB delegate" column element.
         * Max Length: 32.
         */
        cab_delegate: $$GlideElement.sys_user;
        
        /**
         * "CAB recommendation" column element.
         * Max Length: 4000.
         */
        cab_recommendation: GlideElement;
        
        /**
         * "CAB required" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        cab_required: GlideElementBoolean;
        
        /**
         * "Category" column element.
         * Max Length: 40.
         * Default Value: "Other".
         */
        category: GlideElement;
        
        /**
         * "Change plan" column element.
         * Max Length: 4000.
         */
        change_plan: GlideElement;
        
        /**
         * "Model" column element.
         * Max Length: 32.
         */
        chg_model: $$GlideElement.chg_model;
        
        /**
         * "Close code" column element.
         * Max Length: 40.
         */
        close_code: GlideElement;
        
        /**
         * "Conflict last run" column element.
         * Type: "Date/Time" (glide_date_time).
         * Read-only: true; Max Length: 40.
         */
        conflict_last_run: GlideElementGlideObject;
        
        /**
         * "Conflict status" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: "Not Run".
         */
        conflict_status: GlideElement;
        
        /**
         * "Planned end date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        end_date: GlideElementGlideObject;
        
        /**
         * "Implementation plan" column element.
         * Max Length: 4000.
         */
        implementation_plan: GlideElement;
        
        /**
         * "Justification" column element.
         * Max Length: 4000.
         */
        justification: GlideElement;
        
        /**
         * "On hold" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        on_hold: GlideElementBoolean;
        
        /**
         * "On hold reason" column element.
         * Max Length: 4000.
         */
        on_hold_reason: GlideElement;
        
        /**
         * "On Hold Change Tasks" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         */
        on_hold_task: $$GlideElement.change_task;
        
        /**
         * "Outside maintenance schedule" column element.
         * Max Length: 40.
         */
        outside_maintenance_schedule: GlideElementBoolean;
        
        /**
         * "Phase" column element.
         * Max Length: 40.
         * Default Value: "requested".
         */
        phase: GlideElement;
        
        /**
         * "Phase state" column element.
         * Max Length: 40.
         * Default Value: "open".
         */
        phase_state: GlideElement;
        
        /**
         * "Production system" column element.
         * Max Length: 40.
         */
        production_system: GlideElementBoolean;
        
        /**
         * "Reason" column element.
         * Max Length: 40.
         */
        reason: GlideElement;
        
        /**
         * "Requested by" column element.
         * Max Length: 32.
         */
        requested_by: $$GlideElement.sys_user;
        
        /**
         * "Requested by date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        requested_by_date: GlideElementGlideObject;
        
        /**
         * "Review comments" column element.
         * Max Length: 4000.
         */
        review_comments: GlideElement;
        
        /**
         * "Review date" column element.
         * Type: "Date" (glide_date); Scalar type: date.
         * Max Length: 40.
         */
        review_date: GlideElementGlideObject;
        
        /**
         * "Review status" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        review_status: GlideElementNumeric;
        
        /**
         * "Risk" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        risk: GlideElementNumeric;
        
        /**
         * "Risk and impact analysis" column element.
         * Max Length: 4000.
         */
        risk_impact_analysis: GlideElement;
        
        /**
         * "Scope" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 3.
         */
        scope: GlideElementNumeric;
        
        /**
         * "Planned start date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        start_date: GlideElementGlideObject;
        
        /**
         * "Standard Change Template version" column element.
         * Read-only: true; Max Length: 32.
         */
        std_change_producer_version: $$GlideElement.std_change_producer_version;
        
        /**
         * "Test plan" column element.
         * Max Length: 4000.
         */
        test_plan: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         */
        type: GlideElement;
        
        /**
         * "Unauthorized" column element.
         * Max Length: 40.
         */
        unauthorized: GlideElementBoolean;
    }
    
    /**
     * "Standard Change Template Version" GlideRecord fields.
     * @see {@link $$GlideRecord.std_change_producer_version}
     * @see {@link $$GlideElement.std_change_producer_version}
     */
    export interface std_change_producer_version extends IBaseRecord {
        /**
         * "Closed Change count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        closed_change_count: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 140.
         */
        name: GlideElement;
        
        /**
         * "Percent successful" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         * Default Value: 0.
         */
        percent_successful: GlideElementNumeric;
        
        /**
         * "Template" column element.
         * Mandatory: true; Max Length: 32.
         */
        std_change_producer: $$GlideElement.std_change_record_producer;
        
        /**
         * "Proposal" column element.
         * Mandatory: true; Max Length: 32.
         */
        std_change_proposal: $$GlideElement.std_change_proposal;
        
        /**
         * "Unsuccessful Change count" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        unsuccessful_change_count: GlideElementNumeric;
        
        /**
         * "Version" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         */
        version: GlideElementNumeric;
    }

    /**
     * "Store Application" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_store_app}
     * @see {@link $$GlideElement.sys_store_app}
     */
    export interface sys_store_app extends sys_scope {
        /**
         * "Assigned version" column element.
         * Type: "Version" (version).
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        assigned_version: GlideElement;
        
        /**
         * "Auto update" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        auto_update: GlideElementBoolean;
        
        /**
         * "Batch Installation Plan" column element.
         * Read-only: true; Max Length: 32.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        batch_install_plan: $$GlideElement.sys_batch_install_plan;
        
        /**
         * "Compatibilities" column element.
         * Max Length: 500.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        compatibilities: GlideElement;
        
        /**
         * "Contains conditional content" column element.
         * Read-only: true; Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        conditional_content: GlideElementBoolean;
        
        /**
         * "Custom table count" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        custom_table_count: GlideElementNumeric;
        
        /**
         * "Demo data" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Default Value: "no_demo_data".
         * Scope: "Scoped App Client" (sn_appclient)
         */
        demo_data: GlideElement;
        
        /**
         * "Dependencies" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        dependencies: GlideElementGlideObject;
        
        /**
         * "Display message" column element.
         * Max Length: 128.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        display_message: GlideElement;
        
        /**
         * "Hidden on ui" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        hide_on_ui: GlideElementBoolean;
        
        /**
         * "Contains hosted plugins" column element.
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        hosted_plugins: GlideElementBoolean;
        
        /**
         * "Application indicators" column element.
         * Read-only: true; Max Length: 1024.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        indicators: GlideElement;
        
        /**
         * "Install date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        install_date: GlideElementGlideObject;
        
        /**
         * "Installation details" column element.
         * Read-only: true; Max Length: 1024.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        installation_info: GlideElement;
        
        /**
         * "Installed via Dependency" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        installed_as_dependency: GlideElementBoolean;
        
        /**
         * "Is Store App" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        is_store_app: GlideElementBoolean;
        
        /**
         * "Last Installed From" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        last_installed_from: GlideElement;
        
        /**
         * "Latest version" column element.
         * Type: "Version" (version).
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        latest_version: GlideElement;
        
        /**
         * "License Definition" column element.
         * Max Length: 32.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        license_definition: $$GlideElement.sys_app_license_defn;
        
        /**
         * "LOBs" column element.
         * Read-only: true; Max Length: 256.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        lob: GlideElement;
        
        /**
         * "Needs app engine licensing" column element.
         * Read-only: true; Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        needs_app_engine_licensing: GlideElementBoolean;
        
        /**
         * "Price type" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        price_type: GlideElement;
        
        /**
         * "Products" column element.
         * Max Length: 4096.
         * Default Value: "[]".
         * Scope: "Scoped App Client" (sn_appclient)
         */
        products: GlideElement;
        
        /**
         * "Repo latest updated time" column element.
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        repo_latest_updated_time: GlideElement;
        
        /**
         * "Shared Internally" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        shared_internally: GlideElementBoolean;
        
        /**
         * "Static content" column element.
         * Max Length: 40.
         * Default Value: true.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        static_content: GlideElementBoolean;
        
        /**
         * "Store latest updated time" column element.
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        store_latest_updated_time: GlideElement;
        
        /**
         * "Code" column element.
         * Max Length: 100.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        sys_code: GlideElement;
        
        /**
         * "Uninstall blocked" column element.
         * Max Length: 40.
         * Default Value: false.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        uninstall_blocked: GlideElementBoolean;
        
        /**
         * "Update date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        update_date: GlideElementGlideObject;
        
        /**
         * "Upload info" column element.
         * Max Length: 512.
         * Scope: "Scoped App Client" (sn_appclient)
         */
        upload_info: GlideElement;
    }
    
    /**
     * "Knowledge keyword" GlideRecord fields.
     * @see {@link $$GlideRecord.kb_keyword}
     * @see {@link $$GlideElement.kb_keyword}
     */
    export interface kb_keyword extends sys_metadata {
        /**
         * "Keyword" column element.
         * Mandatory: true; Display: true; Max Length: 40.
         */
        keyword: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
    }
    
    /**
     * "Change Task" GlideRecord fields.
     * @see {@link $$GlideRecord.change_task}
     * @see {@link $$GlideElement.change_task}
     */
    export interface change_task extends task {
        /**
         * "Change request" column element.
         * Max Length: 32.
         */
        change_request: $$GlideElement.change_request;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "planning".
         */
        change_task_type: GlideElement;
        
        /**
         * "Close code" column element.
         * Max Length: 40.
         */
        close_code: GlideElement;
        
        /**
         * "Created from" column element.
         * Max Length: 40.
         * Default Value: "manual".
         */
        created_from: GlideElement;
        
        /**
         * "On hold" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        on_hold: GlideElementBoolean;
        
        /**
         * "On hold reason" column element.
         * Max Length: 4000.
         */
        on_hold_reason: GlideElement;
        
        /**
         * "Planned end date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        planned_end_date: GlideElementGlideObject;
        
        /**
         * "Planned start date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        planned_start_date: GlideElementGlideObject;
    }
    
    /**
     * "Standard Change Proposal" GlideRecord fields.
     * @see {@link $$GlideRecord.std_change_proposal}
     * @see {@link $$GlideElement.std_change_proposal}
     */
    export interface std_change_proposal extends task {
        /**
         * "Business justification" column element.
         * Max Length: 4000.
         */
        business_justification: GlideElement;
        
        /**
         * "Catalog" column element.
         * Max Length: 32.
         */
        catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Category" column element.
         * Max Length: 32.
         */
        category: $$GlideElement.sc_category;
        
        /**
         * "Sample Change Requests" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 4000.
         */
        change_requests: $$GlideElement.change_request;
        
        /**
         * "Created from change" column element.
         * Max Length: 32.
         */
        created_from_change: $$GlideElement.change_request;
        
        /**
         * "Proposal type" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        proposal_type: GlideElementNumeric;
        
        /**
         * "Template to modify/retire" column element.
         * Max Length: 32.
         */
        std_change_producer: $$GlideElement.std_change_record_producer;
        
        /**
         * "Template version" column element.
         * Max Length: 32.
         */
        std_change_producer_version: $$GlideElement.std_change_producer_version;
        
        /**
         * "Template name" column element.
         * Max Length: 80.
         */
        template_name: GlideElement;
        
        /**
         * "Change Request values" column element.
         * Mandatory: true; Max Length: 65000.
         */
        template_value: GlideElementWorkflowConditions;
    }
    
    /**
     * "Change Model" GlideRecord fields.
     * @see {@link $$GlideRecord.chg_model}
     * @see {@link $$GlideElement.chg_model}
     */
    export interface chg_model extends sttrm_model {
        /**
         * "Available in \u0027Create New\u0027" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        available_in_ui: GlideElementBoolean;
        
        /**
         * "Color" column element.
         * Type: "Color" (color).
         * Max Length: 40.
         * Default Value: "#cbcbcb".
         */
        color: GlideElement;
        
        /**
         * "Default change model" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        default_change_model: GlideElementBoolean;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Implementation states" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        implementation_states: $$GlideElement.sttrm_state;
        
        /**
         * "Record preset" column element.
         * Max Length: 4000.
         * Default Value: "type=normal".
         */
        record_preset: GlideElementWorkflowConditions;
    }
    
    /**
     * "State Transition Model" GlideRecord fields.
     * @see {@link $$GlideRecord.sttrm_model}
     * @see {@link $$GlideElement.sttrm_model}
     */
    export interface sttrm_model extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Advanced Security" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        advanced_security: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 200.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Read Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        read_roles: GlideElement;
        
        /**
         * "State field" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 80.
         * Default Value: "state".
         */
        state_field: GlideElement;
        
        /**
         * "Table name" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         * Default Value: "task".
         */
        table_name: GlideElement;
        
        /**
         * "Write Roles" column element.
         * Type: "User Roles" (user_roles).
         * Max Length: 255.
         */
        write_roles: GlideElement;
    }
    
    /**
     * "SLA Conditions" GlideRecord fields.
     * @see {@link $$GlideRecord.sla_condition_class}
     * @see {@link $$GlideElement.sla_condition_class}
     */
    export interface sla_condition_class extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Class name" column element.
         * Max Length: 32.
         */
        class_name: $$GlideElement.sys_script_include;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
    }
    
    /**
     * "Task SLA" GlideRecord fields.
     * @see {@link $$GlideRecord.task_sla}
     * @see {@link $$GlideElement.task_sla}
     */
    export interface task_sla extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Business elapsed time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        business_duration: GlideElementGlideObject;
        
        /**
         * "Business pause duration" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        business_pause_duration: GlideElementGlideObject;
        
        /**
         * "Business elapsed percentage" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Max Length: 15.
         */
        business_percentage: GlideElementNumeric;
        
        /**
         * "Business time left" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        business_time_left: GlideElementGlideObject;
        
        /**
         * "Actual elapsed time" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Stop time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        end_time: GlideElementGlideObject;
        
        /**
         * "Has breached" column element.
         * Max Length: 40.
         */
        has_breached: GlideElementBoolean;
        
        /**
         * "Original breach time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        original_breach_time: GlideElementGlideObject;
        
        /**
         * "Pause duration" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        pause_duration: GlideElementGlideObject;
        
        /**
         * "Pause time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        pause_time: GlideElementGlideObject;
        
        /**
         * "Actual elapsed percentage" column element.
         * Type: "Percent Complete" (percent_complete); Scalar type: decimal.
         * Max Length: 15.
         */
        percentage: GlideElementNumeric;
        
        /**
         * "Breach time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        planned_end_time: GlideElementGlideObject;
        
        /**
         * "Schedule" column element.
         * Max Length: 32.
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "SLA definition" column element.
         * Display: true; Max Length: 32.
         */
        sla: $$GlideElement.contract_sla;
        
        /**
         * "Stage" column element.
         * Max Length: 40.
         * Default Value: "in_progress".
         */
        stage: GlideElement;
        
        /**
         * "Start time" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        start_time: GlideElementGlideObject;
        
        /**
         * "Task" column element.
         * Max Length: 32.
         */
        task: $$GlideElement.task;
        
        /**
         * "Actual time left" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        time_left: GlideElementGlideObject;
        
        /**
         * "Timezone" column element.
         * Max Length: 40.
         */
        timezone: GlideElement;
    }
    
    /**
     * "SLA Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.contract_sla}
     * @see {@link $$GlideElement.contract_sla}
     */
    export interface contract_sla extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Advanced Condition Type" column element.
         * Active: false; Max Length: 40.
         * Default Value: "none".
         */
        adv_condition_type: GlideElement;
        
        /**
         * "Cancel condition" column element.
         * Max Length: 1000.
         */
        cancel_condition: GlideElementConditions;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         * Default Value: "incident".
         */
        collection: GlideElement;
        
        /**
         * "Condition type" column element.
         * Max Length: 32.
         */
        condition_class: $$GlideElement.sla_condition_class;
        
        /**
         * "Duration" column element.
         * Type: "Duration" (glide_duration).
         * Max Length: 40.
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Duration type" column element.
         * Max Length: 32.
         */
        duration_type: $$GlideElement.cmn_relative_duration;
        
        /**
         * "Enable logging" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        enable_logging: GlideElementBoolean;
        
        /**
         * "Flow" column element.
         * Max Length: 32.
         * Default Value: "Default SLA Flow".
         */
        flow: $$GlideElement.sys_hub_flow;
        
        /**
         * "Name" column element.
         * Display: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Pause condition" column element.
         * Max Length: 1000.
         */
        pause_condition: GlideElementConditions;
        
        /**
         * "Relative duration works on" column element.
         * Max Length: 40.
         * Default Value: "Task record".
         */
        relative_duration_works_on: GlideElement;
        
        /**
         * "Reset action" column element.
         * Max Length: 40.
         * Default Value: "cancel".
         */
        reset_action: GlideElement;
        
        /**
         * "Reset condition" column element.
         * Max Length: 1000.
         */
        reset_condition: GlideElementConditions;
        
        /**
         * "Resume condition" column element.
         * Max Length: 1000.
         */
        resume_condition: GlideElementConditions;
        
        /**
         * "Retroactive start" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        retroactive: GlideElementBoolean;
        
        /**
         * "Retroactive pause" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        retroactive_pause: GlideElementBoolean;
        
        /**
         * "Schedule" column element.
         * Max Length: 32.
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Schedule source" column element.
         * Max Length: 40.
         * Default Value: "sla_definition".
         */
        schedule_source: GlideElement;
        
        /**
         * "Schedule source field" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        schedule_source_field: GlideElement;
        
        /**
         * "Set start to" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        set_start_to: GlideElement;
        
        /**
         * "Start condition" column element.
         * Max Length: 1000.
         */
        start_condition: GlideElementConditions;
        
        /**
         * "Stop condition" column element.
         * Max Length: 1000.
         */
        stop_condition: GlideElementConditions;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.contract_sla;
        
        /**
         * "Target" column element.
         * Max Length: 40.
         */
        target: GlideElement;
        
        /**
         * "Timezone" column element.
         * Max Length: 40.
         */
        timezone: GlideElement;
        
        /**
         * "Timezone source" column element.
         * Max Length: 40.
         * Default Value: "task.caller_id.time_zone".
         */
        timezone_source: GlideElement;
        
        /**
         * "Type" column element.
         * Max Length: 40.
         * Default Value: "SLA".
         */
        type: GlideElement;
        
        /**
         * "Vendor" column element.
         * Max Length: 32.
         */
        vendor: $$GlideElement.core_company;
        
        /**
         * "When to cancel" column element.
         * Max Length: 40.
         * Default Value: "on_condition".
         */
        when_to_cancel: GlideElement;
        
        /**
         * "When to resume" column element.
         * Max Length: 40.
         * Default Value: "on_condition".
         */
        when_to_resume: GlideElement;
        
        /**
         * "Workflow" column element.
         * Max Length: 32.
         */
        workflow: $$GlideElement.wf_workflow;
    }
    
    /**
     * "View Table" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_db_view_table}
     * @see {@link $$GlideElement.sys_db_view_table}
     */
    export interface sys_db_view_table extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Left join" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        left_join: GlideElementBoolean;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Display: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Variable prefix" column element.
         * Mandatory: true; Max Length: 40.
         */
        variable_prefix: GlideElement;
        
        /**
         * "View" column element.
         * Read-only: true; Max Length: 32.
         */
        view: $$GlideElement.sys_db_view;
        
        /**
         * "Where clause" column element.
         * Max Length: 4000.
         */
        where_clause: GlideElement;
    }
    
    /**
     * "Database View" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_db_view}
     * @see {@link $$GlideElement.sys_db_view}
     */
    export interface sys_db_view extends sys_metadata {
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Label" column element.
         * Max Length: 40.
         */
        label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElement;
        
        /**
         * "Plural" column element.
         * Max Length: 40.
         */
        plural: GlideElement;
    }
    
    /**
     * "View Field" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_db_view_table_field}
     * @see {@link $$GlideElement.sys_db_view_table_field}
     */
    export interface sys_db_view_table_field extends sys_metadata {
        /**
         * "Field" column element.
         * Type: "Field Name" (field_name).
         * Mandatory: true; Display: true; Max Length: 80.
         */
        field: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Read-only: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "View table" column element.
         * Read-only: true; Max Length: 32.
         */
        view_table: $$GlideElement.sys_db_view_table;
    }
    
    /**
     * "UI Policy Action" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_policy_action}
     * @see {@link $$GlideElement.sys_ui_policy_action}
     */
    export interface sys_ui_policy_action extends sys_metadata {
        /**
         * "Clear the field value" column element.
         * Max Length: 40.
         */
        cleared: GlideElementBoolean;
        
        /**
         * "Read only" column element.
         * Max Length: 40.
         * Default Value: "ignore".
         */
        disabled: GlideElement;
        
        /**
         * "Field name" column element.
         * Type: "Field Name" (field_name).
         * Display: true; Max Length: 80.
         */
        field: GlideElement;
        
        /**
         * "Mandatory" column element.
         * Max Length: 40.
         * Default Value: "ignore".
         */
        mandatory: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Read-only: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "UI policy" column element.
         * Max Length: 32.
         */
        ui_policy: $$GlideElement.sys_ui_policy;
        
        /**
         * "Visible" column element.
         * Max Length: 40.
         * Default Value: "ignore".
         */
        visible: GlideElement;
    }
    
    /**
     * "Catalog UI Policy Action" GlideRecord fields.
     * @see {@link $$GlideRecord.catalog_ui_policy_action}
     * @see {@link $$GlideElement.catalog_ui_policy_action}
     */
    export interface catalog_ui_policy_action extends sys_ui_policy_action {
        /**
         * "Catalog Item" column element.
         * Read-only: true; Max Length: 32.
         */
        catalog_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Variable name" column element.
         * Max Length: 40.
         */
        catalog_variable: GlideElement;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Name" column element.
         * Read-only: true; Display: true; Max Length: 100.
         */
        variable: GlideElement;
        
        /**
         * "Variable Set" column element.
         * Read-only: true; Max Length: 32.
         */
        variable_set: $$GlideElement.item_option_new_set;
    }

    /**
     * "Batch Install Plan" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_batch_install_plan}
     * @see {@link $$GlideElement.sys_batch_install_plan}
     */
    export interface sys_batch_install_plan extends IBaseRecord {
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Notes" column element.
         * Max Length: 4000.
         */
        notes: GlideElement;
        
        /**
         * "Rollback Context" column element.
         * Max Length: 32.
         */
        rollback_context: $$GlideElement.sys_rollback_context;
        
        /**
         * "State" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "ready".
         */
        state: GlideElement;
    }
    
    /**
     * "Application License Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_app_license_defn}
     * @see {@link $$GlideElement.sys_app_license_defn}
     */
    export interface sys_app_license_defn extends sys_metadata {
        /**
         * "Aggregation Column" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        agg_col: GlideElement;
        
        /**
         * "Aggregation" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "count".
         */
        aggregation: GlideElement;
        
        /**
         * "Description" column element.
         * Mandatory: true; Max Length: 250.
         */
        description: GlideElementTranslatedText;
        
        /**
         * "Frequency" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         * Default Value: "Monthly".
         */
        frequency: GlideElement;
        
        /**
         * "Group By" column element.
         * Max Length: 400.
         */
        group_by: GlideElement;
        
        /**
         * "Metric Key" column element.
         * Read-only: true; Display: true; Max Length: 100.
         */
        metric_key: GlideElement;
        
        /**
         * "Metric Type" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         * Default Value: "capacity".
         */
        metric_type: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Display: true; Max Length: 100.
         */
        name: GlideElement;
        
        /**
         * "Number" column element.
         * Read-only: true; Max Length: 40.
         */
        number: GlideElement;
        
        /**
         * "Performance Validated" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        performance_validated: GlideElementBoolean;
        
        /**
         * "Query" column element.
         * Max Length: 4000.
         */
        query: GlideElementConditions;
        
        /**
         * "Definition State" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Default Value: "provisional".
         */
        state: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Model State" GlideRecord fields.
     * @see {@link $$GlideRecord.sttrm_state}
     * @see {@link $$GlideElement.sttrm_state}
     */
    export interface sttrm_state extends sys_metadata {
        /**
         * "Initial state" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        initial_state: GlideElementBoolean;
        
        /**
         * "State" column element.
         * Read-only: true; Display: true; Max Length: 200.
         */
        state_label: GlideElementTranslatedText;
        
        /**
         * "Sequence" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        state_sequence: GlideElementNumeric;
        
        /**
         * "State" column element.
         * Mandatory: true; Max Length: 40.
         */
        state_value: GlideElement;
        
        /**
         * "Model" column element.
         * Mandatory: true; Max Length: 32.
         */
        sttrm_model: $$GlideElement.sttrm_model;
    }
    
    /**
     * "UI Policy" GlideRecord fields.
     * @see {@link $$GlideRecord.sys_ui_policy}
     * @see {@link $$GlideElement.sys_ui_policy}
     */
    export interface sys_ui_policy extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Conditions" column element.
         * Max Length: 1000.
         */
        conditions: GlideElementConditions;
        
        /**
         * "Description" column element.
         * Max Length: 4000.
         */
        description: GlideElement;
        
        /**
         * "Global" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        global: GlideElementBoolean;
        
        /**
         * "Inherit" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        inherit: GlideElementBoolean;
        
        /**
         * "Isolate script" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        isolate_script: GlideElementBoolean;
        
        /**
         * "Model ID" column element.
         * Max Length: 32.
         */
        model_id: GlideElementDocumentId;
        
        /**
         * "Model table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        model_table: GlideElement;
        
        /**
         * "On load" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        on_load: GlideElementBoolean;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 100.
         */
        order: GlideElementNumeric;
        
        /**
         * "Reverse if false" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        reverse_if_false: GlideElementBoolean;
        
        /**
         * "Run scripts" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        run_scripts: GlideElementBoolean;
        
        /**
         * "Execute if false" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         * Default Value: "function onCondition() {\r\r}".
         */
        script_false: GlideElementScript;
        
        /**
         * "Execute if true" column element.
         * Type: "Script (Plain)" (script_plain).
         * Max Length: 8000.
         * Default Value: "function onCondition() {\r\r}".
         */
        script_true: GlideElementScript;
        
        /**
         * "Set values" column element.
         * Max Length: 1000.
         */
        set_values: GlideElementWorkflowConditions;
        
        /**
         * "Short description" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        short_description: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.sys_ui_policy;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Run scripts in UI type" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 0.
         */
        ui_type: GlideElementNumeric;
        
        /**
         * "View" column element.
         * Max Length: 80.
         */
        view: $$GlideElement.sys_ui_view;
    }
    
    /**
     * "Catalog UI Policy" GlideRecord fields.
     * @see {@link $$GlideRecord.catalog_ui_policy}
     * @see {@link $$GlideElement.catalog_ui_policy}
     */
    export interface catalog_ui_policy extends sys_ui_policy {
        /**
         * "Applies on a Catalog Item view" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        applies_catalog: GlideElementBoolean;
        
        /**
         * "Applies on Requested Items" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        applies_req_item: GlideElementBoolean;
        
        /**
         * "Applies on Catalog Tasks" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        applies_sc_task: GlideElementBoolean;
        
        /**
         * "Applies on the Target Record" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        applies_target_record: GlideElementBoolean;
        
        /**
         * "Applies to" column element.
         * Max Length: 40.
         * Default Value: "item".
         */
        applies_to: GlideElement;
        
        /**
         * "Catalog Conditions" column element.
         * Type: "Variable Conditions" (variable_conditions).
         * Max Length: 4000.
         */
        catalog_conditions: GlideElement;
        
        /**
         * "Catalog item" column element.
         * Max Length: 32.
         */
        catalog_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Variable set" column element.
         * Max Length: 32.
         */
        variable_set: $$GlideElement.item_option_new_set;
    }
    
    /**
     * "Catalog Task" GlideRecord fields.
     * @see {@link $$GlideRecord.sc_task}
     * @see {@link $$GlideElement.sc_task}
     */
    export interface sc_task extends task {
        /**
         * "Resolve Time" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        calendar_stc: GlideElementNumeric;
        
        /**
         * "Item" column element.
         * Read-only: true; Max Length: 32.
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Request" column element.
         * Read-only: true; Max Length: 32.
         */
        request: $$GlideElement.sc_request;
        
        /**
         * "Request item" column element.
         * Max Length: 32.
         */
        request_item: $$GlideElement.sc_req_item;
        
        /**
         * "Catalog" column element.
         * Read-only: true; Max Length: 32.
         */
        sc_catalog: $$GlideElement.sc_catalog;
    }
    
    /**
     * "Approval" GlideRecord fields.
     * @see {@link $$GlideRecord.sysapproval_approver}
     * @see {@link $$GlideElement.sysapproval_approver}
     */
    export interface sysapproval_approver extends IBaseRecord {
        /**
         * "Approval Column" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        approval_column: GlideElement;
        
        /**
         * "Approval Journal Column" column element.
         * Type: "Field Name" (field_name).
         * Max Length: 80.
         */
        approval_journal_column: GlideElement;
        
        /**
         * "Approval source" column element.
         * Max Length: 40.
         */
        approval_source: GlideElement;
        
        /**
         * "Approver" column element.
         * Max Length: 32.
         */
        approver: $$GlideElement.sys_user;
        
        /**
         * "Comments" column element.
         * Type: "Journal Input" (journal_input); Scalar type: string.
         * Max Length: 4000.
         */
        comments: GlideElementGlideObject;
        
        /**
         * "Approving" column element.
         * Display: true; Max Length: 32.
         */
        document_id: GlideElementDocumentId;
        
        /**
         * "Due date" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        due_date: GlideElementGlideObject;
        
        /**
         * "Expected start" column element.
         * Type: "Date/Time" (glide_date_time).
         * Max Length: 40.
         */
        expected_start: GlideElementGlideObject;
        
        /**
         * "Group" column element.
         * Max Length: 32.
         */
        group: $$GlideElement.sysapproval_group;
        
        /**
         * "Iteration" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         * Default Value: 1.
         */
        iteration: GlideElementNumeric;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Process step" column element.
         * Max Length: 32.
         */
        process_step: $$GlideElement.process_step;
        
        /**
         * "Source table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        source_table: GlideElement;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "not requested".
         */
        state: GlideElement;
        
        /**
         * "State binding" column element.
         * Max Length: 32.
         */
        state_binding: $$GlideElement.state_binding;
        
        /**
         * "Approval for" column element.
         * Max Length: 32.
         */
        sysapproval: $$GlideElement.task;
        
        /**
         * "Workflow activity" column element.
         * Active: false; Max Length: 32.
         */
        wf_activity: $$GlideElement.wf_activity;
    }
    
    /**
     * "Group approval" GlideRecord fields.
     * @see {@link $$GlideRecord.sysapproval_group}
     * @see {@link $$GlideElement.sysapproval_group}
     */
    export interface sysapproval_group extends task {
        /**
         * "Admin override" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        admin_override: GlideElementBoolean;
        
        /**
         * "Approval user" column element.
         * Max Length: 32.
         */
        approval_user: $$GlideElement.sys_user;
        
        /**
         * "Handle a rejection by" column element.
         * Max Length: 40.
         * Default Value: "reject".
         */
        reject_handling: GlideElement;
        
        /**
         * "Wait for" column element.
         * Max Length: 40.
         * Default Value: "any".
         */
        wait_for: GlideElement;
    }
    
    /**
     * "State Binding" GlideRecord fields.
     * @see {@link $$GlideRecord.state_binding}
     * @see {@link $$GlideElement.state_binding}
     */
    export interface state_binding extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Active list" column element.
         * Max Length: 40.
         */
        active_list: GlideElement;
        
        /**
         * "Approval rule" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        approval_rule: GlideElementBoolean;
        
        /**
         * "Closed list" column element.
         * Max Length: 40.
         */
        closed_list: GlideElement;
        
        /**
         * "Document" column element.
         * Max Length: 40.
         */
        document: GlideElement;
        
        /**
         * "Document key" column element.
         * Max Length: 40.
         */
        document_key: GlideElement;
        
        /**
         * "Pending list" column element.
         * Max Length: 40.
         */
        pending_list: GlideElement;
        
        /**
         * "Process guide" column element.
         * Max Length: 32.
         */
        process_guide: $$GlideElement.process_guide;
        
        /**
         * "Sysrule approvals" column element.
         * Max Length: 32.
         */
        sysrule_approvals: $$GlideElement.sysrule_approvals;
    }
    
    /**
     * "Process Guides" GlideRecord fields.
     * @see {@link $$GlideRecord.process_guide}
     * @see {@link $$GlideElement.process_guide}
     */
    export interface process_guide extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Advanced condition" column element.
         * Max Length: 4000.
         */
        advanced_condition: GlideElementScript;
        
        /**
         * "Conditions" column element.
         * Max Length: 4000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "On insert" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        on_insert: GlideElementBoolean;
        
        /**
         * "On update" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        on_update: GlideElementBoolean;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Start" column element.
         * Max Length: 32.
         */
        start: $$GlideElement.process_step;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         */
        table: GlideElement;
    }
    
    /**
     * "Approval Rules" GlideRecord fields.
     * @see {@link $$GlideRecord.sysrule_approvals}
     * @see {@link $$GlideElement.sysrule_approvals}
     */
    export interface sysrule_approvals extends sysrule {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Conditions" column element.
         * Max Length: 1000.
         */
        condition: GlideElementConditions;
        
        /**
         * "Group" column element.
         * Max Length: 32.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Match conditions" column element.
         * Max Length: 40.
         * Default Value: "ALL".
         */
        match_conditions: GlideElement;
        
        /**
         * "Optional group" column element.
         * Max Length: 32.
         */
        optional_group: $$GlideElement.sys_user_group;
        
        /**
         * "Run rule before" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        run_rule_before: GlideElementBoolean;
        
        /**
         * "Script" column element.
         * Max Length: 8000.
         */
        script: GlideElement;
        
        /**
         * "Set state" column element.
         * Max Length: 40.
         */
        set_state: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Max Length: 80.
         * Default Value: "change_request".
         */
        table: GlideElement;
        
        /**
         * "User" column element.
         * Max Length: 32.
         */
        user: $$GlideElement.sys_user;
    }
    
    /**
     * "Process Steps" GlideRecord fields.
     * @see {@link $$GlideRecord.process_step}
     * @see {@link $$GlideElement.process_step}
     */
    export interface process_step extends sys_metadata {
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Process guide" column element.
         * Max Length: 32.
         */
        process_guide: $$GlideElement.process_guide;
    }
    
    /**
     * "Storage File Share" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_storage_fileshare}
     * @see {@link $$GlideElement.cmdb_ci_storage_fileshare}
     */
    export interface cmdb_ci_storage_fileshare extends cmdb_ci {
        /**
         * "Cluster ID" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        cluster_id: GlideElement;
        
        /**
         * "Cluster Name" column element.
         * Max Length: 32.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        cluster_name: $$GlideElement.cmdb_ci_rubrik_cluster;
        
        /**
         * "File Share ID" column element.
         * Max Length: 100.
         */
        fileshare_id: GlideElement;
        
        /**
         * "Host" column element.
         * Max Length: 32.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        host: $$GlideElement.cmdb_ci_server;
        
        /**
         * "Host ID" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        host_id: GlideElement;
        
        /**
         * "Path" column element.
         * Max Length: 100.
         */
        path: GlideElement;
        
        /**
         * "Share type" column element.
         * Max Length: 100.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        share_type: GlideElement;
        
        /**
         * "State" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        state: GlideElement;
        
        /**
         * "Vendor type" column element.
         * Max Length: 255.
         * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class)
         */
        vendor_type: GlideElement;
    }

    /**
     * "Taxonomy Layer Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.spm_taxonomy_layer_definition}
     * @see {@link $$GlideElement.spm_taxonomy_layer_definition}
     */
    export interface spm_taxonomy_layer_definition extends IBaseRecord {
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 80.
         */
        name: GlideElementTranslatedText;
        
        /**
         * "Order" column element.
         * Type: "Integer" (integer).
         * Mandatory: true; Max Length: 40.
         */
        order: GlideElementNumeric;
        
        /**
         * "Short description" column element.
         * Max Length: 1000.
         */
        short_description: GlideElementTranslatedText;
        
        /**
         * "Service portfolio" column element.
         * Mandatory: true; Max Length: 32.
         */
        spm_service_portfolio: $$GlideElement.spm_service_portfolio;
    }
    
    /**
     * "Virtualization Server" GlideRecord fields.
     * @see {@link $$GlideRecord.cmdb_ci_virtualization_server}
     * @see {@link $$GlideElement.cmdb_ci_virtualization_server}
     */
    export interface cmdb_ci_virtualization_server extends cmdb_ci_server { }
    
    /**
     * "Asset Task" GlideRecord fields.
     * @see {@link $$GlideRecord.asset_task}
     * @see {@link $$GlideElement.asset_task}
     */
    export interface asset_task extends task {
        /**
         * "Asset" column element.
         * Max Length: 32.
         */
        asset: $$GlideElement.alm_asset;
        
        /**
         * "Model" column element.
         * Max Length: 32.
         */
        model: $$GlideElement.cmdb_model;
        
        /**
         * "Quantity" column element.
         * Type: "Integer" (integer).
         * Max Length: 40.
         */
        quantity: GlideElementNumeric;
        
        /**
         * "Requested for" column element.
         * Max Length: 32.
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Stockroom" column element.
         * Max Length: 32.
         */
        stockroom: $$GlideElement.alm_stockroom;
        
        /**
         * "Task name" column element.
         * Max Length: 40.
         */
        task_name: GlideElement;
    }
    
    /**
     * "Goal" GlideRecord fields.
     * @see {@link $$GlideRecord.goal}
     * @see {@link $$GlideElement.goal}
     */
    export interface goal extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Actual achievement till date" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        actual_achievement_till_date: GlideElementNumeric;
        
        /**
         * "Comments" column element.
         * Max Length: 1000.
         */
        comments: GlideElement;
        
        /**
         * "Direction" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        direction: GlideElement;
        
        /**
         * "Planned achievement" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        estimated_achievement: GlideElementNumeric;
        
        /**
         * "Goal Indicator" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        goal_indicator: GlideElement;
        
        /**
         * "Owner" column element.
         * Max Length: 32.
         */
        goal_owner: $$GlideElement.sys_user;
        
        /**
         * "Short description" column element.
         * Display: true; Max Length: 80.
         */
        short_description: GlideElement;
        
        /**
         * "State" column element.
         * Max Length: 40.
         * Default Value: "pending".
         */
        state: GlideElement;
        
        /**
         * "Status indicator" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         */
        status_indicator: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Target" column element.
         * Type: "Floating Point Number" (float).
         * Max Length: 40.
         */
        target_value: GlideElementNumeric;
        
        /**
         * "Task" column element.
         * Max Length: 32.
         */
        task: $$GlideElement.task;
        
        /**
         * "Unit" column element.
         * Max Length: 32.
         */
        unit: $$GlideElement.pa_units;
    }
    
    /**
     * "Unit" GlideRecord fields.
     * @see {@link $$GlideRecord.pa_units}
     * @see {@link $$GlideElement.pa_units}
     */
    export interface pa_units extends sys_metadata {
        /**
         * "Format" column element.
         * Max Length: 40.
         */
        format: GlideElementTranslatedField;
        
        /**
         * "Name" column element.
         * Mandatory: true; Max Length: 40.
         */
        name: GlideElementTranslatedField;
        
        /**
         * "Domain" column element.
         * Read-only: true; Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" column element.
         * Max Length: 32.
         */
        sys_overrides: $$GlideElement.pa_units;
    }
    
    /**
     * "Currency" GlideRecord fields.
     * @see {@link $$GlideRecord.fx_currency}
     * @see {@link $$GlideElement.fx_currency}
     */
    export interface fx_currency extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Code" column element.
         * Unique: true; Display: true; Max Length: 40.
         */
        code: GlideElement;
        
        /**
         * "Description" column element.
         * Max Length: 1000.
         */
        description: GlideElement;
        
        /**
         * "Name" column element.
         * Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Symbol" column element.
         * Max Length: 40.
         */
        symbol: GlideElement;
    }
    
    /**
     * "Solution Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_capability_definition_base}
     * @see {@link $$GlideElement.ml_capability_definition_base}
     */
    export interface ml_capability_definition_base extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Capability" column element.
         * Max Length: 32.
         */
        capability: $$GlideElement.ml_capability;
        
        /**
         * "Current Solution Version" column element.
         * Type: "Integer" (integer).
         * Read-only: true; Max Length: 40.
         */
        current_solution_version: GlideElementNumeric;
        
        /**
         * "Processing Language" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "en".
         */
        dataset_language: GlideElement;
        
        /**
         * "Fields" column element.
         * Type: "Field List" (field_list).
         * Mandatory: true; Max Length: 4000.
         */
        fields: GlideElement;
        
        /**
         * "Filter" column element.
         * Max Length: 4000.
         */
        filter: GlideElementConditions;
        
        /**
         * "Request Source" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Default Value: "ui".
         */
        request_source: GlideElement;
        
        /**
         * "Label" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        solution_label: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Unique: true; Max Length: 255.
         */
        solution_name: GlideElement;
        
        /**
         * "Solution Parameters" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         */
        solution_parameters: $$GlideElement.ml_solution_parameters;
        
        /**
         * "Solution Properties" column element.
         * Read-only: true; Max Length: 16777215.
         */
        solution_properties: GlideElement;
        
        /**
         * "Stopwords" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Max Length: 1024.
         * Default Value: "Default English Stopwords".
         */
        stopwords: $$GlideElement.ml_stopwords;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        table: GlideElement;
        
        /**
         * "Training Frequency" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "run_once".
         */
        training_frequency: GlideElement;
        
        /**
         * "Triggered Source" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: "API".
         */
        triggered_source: GlideElement;
        
        /**
         * "Word Corpus" column element.
         * Mandatory: true; Max Length: 32.
         */
        word_vector_corpus: $$GlideElement.ml_word_vector_corpus;
    }
    
    /**
     * "Similarity Definition" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_capability_definition_similarity}
     * @see {@link $$GlideElement.ml_capability_definition_similarity}
     */
    export interface ml_capability_definition_similarity extends ml_capability_definition_base {
        /**
         * "Test Fields" column element.
         * Type: "Field List" (field_list).
         * Mandatory: true; Max Length: 4000.
         */
        test_fields: GlideElement;
        
        /**
         * "Test Table" column element.
         * Type: "Table Name" (table_name).
         * Mandatory: true; Max Length: 80.
         */
        test_table: GlideElement;
        
        /**
         * "Similarity Score Threshold" column element.
         * Type: "Decimal" (decimal).
         * Max Length: 15.
         * Default Value: 80.
         */
        threshold: GlideElementNumeric;
        
        /**
         * "Update Frequency" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "do_not_update".
         */
        update_frequency: GlideElement;
    }
    
    /**
     * "Ml Capability" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_capability}
     * @see {@link $$GlideElement.ml_capability}
     */
    export interface ml_capability extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Label" column element.
         * Display: true; Max Length: 255.
         */
        label: GlideElement;
        
        /**
         * "Value" column element.
         * Max Length: 255.
         */
        value: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         */
        version: GlideElement;
    }
    
    /**
     * "Word corpus" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_word_vector_corpus}
     * @see {@link $$GlideElement.ml_word_vector_corpus}
     */
    export interface ml_word_vector_corpus extends IBaseRecord {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Name" column element.
         * Mandatory: true; Unique: true; Max Length: 255.
         */
        name: GlideElement;
        
        /**
         * "Request Source" column element.
         * Type: "Choice" (choice).
         * Read-only: true; Max Length: 40.
         * Default Value: "ui".
         */
        request_source: GlideElement;
        
        /**
         * "Short description" column element.
         * Max Length: 160.
         */
        short_description: GlideElement;
        
        /**
         * "Domain" column element.
         * Max Length: 32.
         * Default Value: "global".
         */
        sys_domain: GlideElementDomainId;
        
        /**
         * "Domain Path" column element.
         * Type: "Domain Path" (domain_path).
         * Max Length: 255.
         * Default Value: "/".
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Type" column element.
         * Type: "Choice" (choice).
         * Max Length: 40.
         * Default Value: "paravec".
         */
        type: GlideElement;
        
        /**
         * "Version" column element.
         * Max Length: 40.
         */
        version: GlideElement;
    }

    /**
     * "Ml Solution Parameters" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_solution_parameters}
     * @see {@link $$GlideElement.ml_solution_parameters}
     */
    export interface ml_solution_parameters extends sys_metadata {
        /**
         * "Active" column element.
         * Max Length: 40.
         * Default Value: true.
         */
        active: GlideElementBoolean;
        
        /**
         * "Capability" column element.
         * Type: "List" (glide_list); Scalar type: string.
         * Mandatory: true; Max Length: 1024.
         */
        capability: $$GlideElement.ml_capability;
        
        /**
         * "Category" column element.
         * Max Length: 40.
         */
        category: GlideElement;
        
        /**
         * "Key" column element.
         * Mandatory: true; Max Length: 255.
         */
        key: GlideElement;
        
        /**
         * "Requires user input" column element.
         * Max Length: 40.
         * Default Value: false.
         */
        requires_user_input: GlideElementBoolean;
        
        /**
         * "Short Description" column element.
         * Mandatory: true; Display: true; Max Length: 255.
         */
        short_description: GlideElement;
        
        /**
         * "Default User Inputs" column element.
         * Max Length: 255.
         */
        user_inputs: GlideElement;
    }
    
    /**
     * "Stopwords" GlideRecord fields.
     * @see {@link $$GlideRecord.ml_stopwords}
     * @see {@link $$GlideElement.ml_stopwords}
     */
    export interface ml_stopwords extends IBaseRecord {
        /**
         * "Is Default" column element.
         * Read-only: true; Max Length: 40.
         * Default Value: false.
         */
        is_default: GlideElementBoolean;
        
        /**
         * "Stopwords Language" column element.
         * Type: "Choice" (choice).
         * Mandatory: true; Max Length: 40.
         * Default Value: "en".
         */
        language: GlideElement;
        
        /**
         * "Name" column element.
         * Mandatory: true; Unique: true; Max Length: 40.
         */
        name: GlideElement;
        
        /**
         * "Stopwords List" column element.
         * Mandatory: true; Max Length: 1000000.
         */
        stopwords_list: GlideElement;
    }
}
