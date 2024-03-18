/// <reference path="./GlideTypes.d.ts" />
/// <reference path="./$$tableFields.d.ts" />
/// <reference path="./$$GlideRecord.d.ts" />

/**
 * Contains helper types for table-specific GlideElement instances.
 * @namespace $$GlideElement
 */
declare namespace $$GlideElement {
    /**
    * Reference
    * scalar_type: GUID; name: reference
    */
    export type ReferenceBase<TFields = {}, TRecord extends GlideRecord & TFields = GlideRecord & TFields> = TFields & {
        getRefRecord(): TRecord;
    } & GlideElementReference;

    /**
    * Reference
    * scalar_type: GUID; name: reference
    */
    export type Reference<TFields = $$tableFields.IBaseRecord, TRecord extends GlideRecord & TFields = GlideRecord & TFields> = TFields & {
        getRefRecord(): TRecord;
    } & GlideElementReference;

    /**
     * Element that refers to a "Business Unit" glide record.
     */
    export type business_unit = Reference<$$tableFields.business_unit, $$GlideRecord.business_unit>;

    /**
     * Element that refers to a Task glide record.
     * Auto-number Prefix: TASK
     */
    export type task = Reference<$$tableFields.task, $$GlideRecord.task>;

    /**
     * Element that refers to a "Application File" glide record.
     */
    export type sys_metadata = Reference<$$tableFields.sys_metadata, $$GlideRecord.sys_metadata>;

    /**
     * Element that refers to a Package glide record.
     */
    export type sys_package = Reference<$$tableFields.sys_package, $$GlideRecord.sys_package>;

    /**
     * Element that refers to a Application glide record.
     */
    export type sys_scope = Reference<$$tableFields.sys_scope, $$GlideRecord.sys_scope>;

    /**
     * Element that refers to a "Guided Setup Content" glide record.
     * Scope: "Guided Setup - Legacy" (sn_guided_setup)
     */
    export type gsw_content = Reference<$$tableFields.gsw_content, $$GlideRecord.gsw_content>;

    /**
     * Element that refers to a Subscription glide record.
     */
    export type license_details = Reference<$$tableFields.license_details, $$GlideRecord.license_details>;

    /**
     * Element that refers to a "UsageAnalytics Definitions Base" glide record.
     */
    export type ua_defn_base = Reference<$$tableFields.ua_defn_base, $$GlideRecord.ua_defn_base>;

    /**
     * Element that refers to a Asset glide record.
     */
    export type alm_asset = Reference<$$tableFields.alm_asset, $$GlideRecord.alm_asset>;

    /**
     * Element that refers to a "Cost Center" glide record.
     */
    export type cmn_cost_center = Reference<$$tableFields.cmn_cost_center, $$GlideRecord.cmn_cost_center>;

    /**
     * Element that refers to a Depreciation glide record.
     */
    export type cmdb_depreciation = Reference<$$tableFields.cmdb_depreciation, $$GlideRecord.cmdb_depreciation>;

    /**
     * Element that refers to a "Life Cycle Stage" glide record.
     */
    export type life_cycle_stage = Reference<$$tableFields.life_cycle_stage, $$GlideRecord.life_cycle_stage>;

    /**
     * Element that refers to a "Life Cycle Stage Status" glide record.
     */
    export type life_cycle_stage_status = Reference<$$tableFields.life_cycle_stage_status, $$GlideRecord.life_cycle_stage_status>;

    /**
     * Element that refers to a "Product Model" glide record.
     */
    export type cmdb_model = Reference<$$tableFields.cmdb_model, $$GlideRecord.cmdb_model>;

    /**
     * Element that refers to a "Model Category" glide record.
     */
    export type cmdb_model_category = Reference<$$tableFields.cmdb_model_category, $$GlideRecord.cmdb_model_category>;

    /**
     * Element that refers to a "Base Configuration Item" glide record.
     */
    export type cmdb = Reference<$$tableFields.cmdb, $$GlideRecord.cmdb>;

    /**
     * Element that refers to a "Configuration Item" glide record.
     */
    export type cmdb_ci = Reference<$$tableFields.cmdb_ci, $$GlideRecord.cmdb_ci>;

    /**
     * Element that refers to a "Model Component" glide record.
     */
    export type cmdb_m2m_model_component = Reference<$$tableFields.cmdb_m2m_model_component, $$GlideRecord.cmdb_m2m_model_component>;

    /**
     * Element that refers to a Service glide record.
     * Auto-number Prefix: BSN
     */
    export type cmdb_ci_service = Reference<$$tableFields.cmdb_ci_service, $$GlideRecord.cmdb_ci_service>;

    /**
     * Element that refers to a "Subscription Role Type" glide record.
     */
    export type license_role_type = Reference<$$tableFields.license_role_type, $$GlideRecord.license_role_type>;

    /**
     * Element that refers to a "OT Asset" glide record.
     * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class): A single source for all new, out-of-the-box, CMDB CI class models from ServiceNow
     */
    export type cmdb_ot_entity = Reference<$$tableFields.cmdb_ot_entity, $$GlideRecord.cmdb_ot_entity>;

    /**
     * Element that refers to a Contract glide record.
     * Auto-number Prefix: CNTR
     */
    export type ast_contract = Reference<$$tableFields.ast_contract, $$GlideRecord.ast_contract>;

    /**
     * Element that refers to a "Execution Plan" glide record.
     */
    export type sc_cat_item_delivery_plan = Reference<$$tableFields.sc_cat_item_delivery_plan, $$GlideRecord.sc_cat_item_delivery_plan>;

    /**
     * Element that refers to a "Execution Plan Task" glide record.
     */
    export type sc_cat_item_delivery_task = Reference<$$tableFields.sc_cat_item_delivery_task, $$GlideRecord.sc_cat_item_delivery_task>;

    /**
     * Element that refers to a Offering glide record.
     */
    export type service_offering = Reference<$$tableFields.service_offering, $$GlideRecord.service_offering>;

    /**
     * Element that refers to a Request glide record.
     * Auto-number Prefix: REQ
     */
    export type sc_request = Reference<$$tableFields.sc_request, $$GlideRecord.sc_request>;

    /**
     * Element that refers to a "Requested Item" glide record.
     * Auto-number Prefix: RITM
     */
    export type sc_req_item = Reference<$$tableFields.sc_req_item, $$GlideRecord.sc_req_item>;

    /**
     * Element that refers to a "Flow engine context" glide record.
     */
    export type sys_flow_context = Reference<$$tableFields.sys_flow_context, $$GlideRecord.sys_flow_context>;

    /**
     * Element that refers to a "OT Asset Type" glide record.
     * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class): A single source for all new, out-of-the-box, CMDB CI class models from ServiceNow
     */
    export type cmdb_ot_entity_type = Reference<$$tableFields.cmdb_ot_entity_type, $$GlideRecord.cmdb_ot_entity_type>;

    /**
     * Element that refers to a Stockroom glide record.
     */
    export type alm_stockroom = Reference<$$tableFields.alm_stockroom, $$GlideRecord.alm_stockroom>;

    /**
     * Element that refers to a Unit glide record.
     */
    export type cmdb_model_unit = Reference<$$tableFields.cmdb_model_unit, $$GlideRecord.cmdb_model_unit>;

    /**
     * Element that refers to a "Vendor Catalog Item" glide record.
     */
    export type pc_vendor_cat_item = Reference<$$tableFields.pc_vendor_cat_item, $$GlideRecord.pc_vendor_cat_item> & sys_metadata;

    /**
     * Element that refers to a "Rule" glide record.
     */
    export type sc_cat_item_guide_items = Reference<$$tableFields.sc_cat_item_guide_items, $$GlideRecord.sc_cat_item_guide_items> & sys_metadata;

    /**
     * Element that refers to a "Plan Sequencing" glide record.
     */
    export type sc_cat_item_dt_mtom = Reference<$$tableFields.sc_cat_item_dt_mtom, $$GlideRecord.sc_cat_item_dt_mtom> & sys_metadata;

    /**
     * Element that refers to a "Not Available for Users" glide record.
     */
    export type sc_cat_item_user_no_mtom = Reference<$$tableFields.sc_cat_item_user_no_mtom, $$GlideRecord.sc_cat_item_user_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "Not Available for Subscribers" glide record.
     */
    export type sc_cat_item_subscribe_no_mtom = Reference<$$tableFields.sc_cat_item_subscribe_no_mtom, $$GlideRecord.sc_cat_item_subscribe_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "Not Available for Groups" glide record.
     */
    export type sc_cat_item_group_no_mtom = Reference<$$tableFields.sc_cat_item_group_no_mtom, $$GlideRecord.sc_cat_item_group_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "Not Available for Companies" glide record.
     */
    export type sc_cat_item_company_no_mtom = Reference<$$tableFields.sc_cat_item_company_no_mtom, $$GlideRecord.sc_cat_item_company_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "Not Available at Locations" glide record.
     */
    export type sc_cat_item_location_no_mtom = Reference<$$tableFields.sc_cat_item_location_no_mtom, $$GlideRecord.sc_cat_item_location_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "External Dependencies" glide record.
     */
    export type sc_cat_item_dt_ext_mtom = Reference<$$tableFields.sc_cat_item_dt_ext_mtom, $$GlideRecord.sc_cat_item_dt_ext_mtom> & sys_metadata;

    /**
     * Element that refers to a "Execution Plan Approval Task" glide record.
     */
    export type sc_cat_item_dt_approval = Reference<$$tableFields.sc_cat_item_dt_approval, $$GlideRecord.sc_cat_item_dt_approval> & sc_cat_item_delivery_task;

    /**
     * Element that refers to a "Child" glide record.
     */
    export type sc_cat_item_children = Reference<$$tableFields.sc_cat_item_children, $$GlideRecord.sc_cat_item_children> & sys_metadata;

    /**
     * Element that refers to a "Catalog Item Not Available for" glide record.
     */
    export type sc_cat_item_user_criteria_no_mtom = Reference<$$tableFields.sc_cat_item_user_criteria_no_mtom, $$GlideRecord.sc_cat_item_user_criteria_no_mtom> & sys_metadata;

    /**
     * Element that refers to a "Catalog Item Available for" glide record.
     */
    export type sc_cat_item_user_criteria_mtom = Reference<$$tableFields.sc_cat_item_user_criteria_mtom, $$GlideRecord.sc_cat_item_user_criteria_mtom> & sys_metadata;

    /**
     * Element that refers to a "Available for Users" glide record.
     */
    export type sc_cat_item_user_mtom = Reference<$$tableFields.sc_cat_item_user_mtom, $$GlideRecord.sc_cat_item_user_mtom> & sys_metadata;

    /**
     * Element that refers to a "Available for Subscribers" glide record.
     */
    export type sc_cat_item_subscribe_mtom = Reference<$$tableFields.sc_cat_item_subscribe_mtom, $$GlideRecord.sc_cat_item_subscribe_mtom> & sys_metadata;

    /**
     * Element that refers to a "Available for Departments" glide record.
     */
    export type sc_cat_item_dept_mtom = Reference<$$tableFields.sc_cat_item_dept_mtom, $$GlideRecord.sc_cat_item_dept_mtom> & sys_metadata;

    /**
     * Element that refers to a "Available for Companies" glide record.
     */
    export type sc_cat_item_company_mtom = Reference<$$tableFields.sc_cat_item_company_mtom, $$GlideRecord.sc_cat_item_company_mtom> & sys_metadata;

    /**
     * Element that refers to a "Available at Locations" glide record.
     */
    export type sc_cat_item_location_mtom = Reference<$$tableFields.sc_cat_item_location_mtom, $$GlideRecord.sc_cat_item_location_mtom> & sys_metadata;

    /**
     * Element that refers to a "Catalog Item" glide record.
     */
    export type sc_cat_item = Reference<$$tableFields.sc_cat_item, $$GlideRecord.sc_cat_item> & sys_metadata;

    /**
     * Element that refers to a "Product Catalog Item" glide record.
     */
    export type pc_product_cat_item = Reference<$$tableFields.pc_product_cat_item, $$GlideRecord.pc_product_cat_item> & sc_cat_item;

    /**
     * Element that refers to a "Software Catalog" glide record.
     */
    export type pc_software_cat_item = Reference<$$tableFields.pc_software_cat_item, $$GlideRecord.pc_software_cat_item> & pc_product_cat_item;

    /**
     * Element that refers to a "Hardware Catalog" glide record.
     */
    export type pc_hardware_cat_item = Reference<$$tableFields.pc_hardware_cat_item, $$GlideRecord.pc_hardware_cat_item> & pc_product_cat_item;

    /**
     * Element that refers to a "Content Item" glide record.
     */
    export type sc_cat_item_content = Reference<$$tableFields.sc_cat_item_content, $$GlideRecord.sc_cat_item_content> & sc_cat_item;

    /**
     * Element that refers to a "Service Catalog Entry" glide record.
     */
    export type sc_cat_item_service = Reference<$$tableFields.sc_cat_item_service, $$GlideRecord.sc_cat_item_service> & sc_cat_item;

    /**
     * Element that refers to a "Wizard Launcher" glide record.
     */
    export type sc_cat_item_wizard = Reference<$$tableFields.sc_cat_item_wizard, $$GlideRecord.sc_cat_item_wizard> & sc_cat_item;

    /**
     * Element that refers to a "Order guide" glide record.
     */
    export type sc_cat_item_guide = Reference<$$tableFields.sc_cat_item_guide, $$GlideRecord.sc_cat_item_guide> & sc_cat_item;

    /**
     * Element that refers to a "Planned Task" glide record.
     */
    export type planned_task = Reference<$$tableFields.planned_task, $$GlideRecord.planned_task>;

    /**
     * Element that refers to a "Task Relationship" glide record.
     */
    export type task_rel_task = Reference<$$tableFields.task_rel_task, $$GlideRecord.task_rel_task>;

    /**
     * Element that refers to a "Planned Task Relationship" glide record.
     */
    export type planned_task_rel_planned_task = Reference<$$tableFields.planned_task_rel_planned_task, $$GlideRecord.planned_task_rel_planned_task>;

    /**
     * Element that refers to a Feature glide record.
     */
    export type rm_feature = Reference<$$tableFields.rm_feature, $$GlideRecord.rm_feature>;

    /**
     * Element that refers to a Goal glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_goal = Reference<$$tableFields.sn_gf_goal, $$GlideRecord.sn_gf_goal>;

    /**
     * Element that refers to a Story glide record.
     */
    export type rm_story = Reference<$$tableFields.rm_story, $$GlideRecord.rm_story>;

    /**
     * Element that refers to a Schedule glide record.
     */
    export type cmn_schedule = Reference<$$tableFields.cmn_schedule, $$GlideRecord.cmn_schedule>;

    /**
     * Element that refers to a "Business Calendar" glide record.
     */
    export type business_calendar = Reference<$$tableFields.business_calendar, $$GlideRecord.business_calendar>;

    /**
     * Element that refers to a "Business Calendar Entry" glide record.
     */
    export type business_calendar_span = Reference<$$tableFields.business_calendar_span, $$GlideRecord.business_calendar_span>;

    /**
     * Element that refers to a Agreement glide record.
     * Auto-number Prefix: SLA
     */
    export type sla = Reference<$$tableFields.sla, $$GlideRecord.sla>;

    /**
     * Element that refers to a "Service Portfolio" glide record.
     */
    export type spm_service_portfolio = Reference<$$tableFields.spm_service_portfolio, $$GlideRecord.spm_service_portfolio>;

    /**
     * Element that refers to a Calendar glide record.
     */
    export type sys_calendar = Reference<$$tableFields.sys_calendar, $$GlideRecord.sys_calendar>;

    /**
     * Element that refers to a "Taxonomy Node" glide record.
     */
    export type spm_taxonomy_node = Reference<$$tableFields.spm_taxonomy_node, $$GlideRecord.spm_taxonomy_node>;

    /**
     * Element that refers to a "Core Goal" glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_core_goal = Reference<$$tableFields.sn_gf_core_goal, $$GlideRecord.sn_gf_core_goal>;

    /**
     * Element that refers to a "Strategic Priority" glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_strategy = Reference<$$tableFields.sn_gf_strategy, $$GlideRecord.sn_gf_strategy>;

    /**
     * Element that refers to a "Application Model" glide record.
     */
    export type cmdb_application_product_model = Reference<$$tableFields.cmdb_application_product_model, $$GlideRecord.cmdb_application_product_model>;

    /**
     * Element that refers to a Condition glide record.
     */
    export type clm_condition_checker = Reference<$$tableFields.clm_condition_checker, $$GlideRecord.clm_condition_checker>;

    /**
     * Element that refers to a "Condition Checks" glide record.
     */
    export type clm_condition_check = Reference<$$tableFields.clm_condition_check, $$GlideRecord.clm_condition_check>;

    /**
     * Element that refers to a Rule glide record.
     */
    export type sysrule = Reference<$$tableFields.sysrule, $$GlideRecord.sysrule>;

    /**
     * Reference element for the "Notification" record type.
     */
    export type sysevent_email_action = Reference<$$tableFields.sysevent_email_action, $$GlideRecord.sysevent_email_action> & sysrule;

    /**
     * Reference element for the "Notification Category" record type.
     */
    export type sys_notification_category = Reference<$$tableFields.sys_notification_category, $$GlideRecord.sys_notification_category> & sys_metadata;

    /**
     * "Digest Interval" GlideRecord.
     */
    export type sys_email_digest_interval = Reference<$$tableFields.sys_email_digest_interval, $$GlideRecord.sys_email_digest_interval> & sys_metadata;

    /**
     * Reference element for the "Email Template" record type.
     */
    export type sysevent_email_template = Reference<$$tableFields.sysevent_email_template, $$GlideRecord.sysevent_email_template> & sys_metadata;

    /**
     * Reference element for the "Email Layout" record type.
     */
    export type sys_email_layout = Reference<$$tableFields.sys_email_layout, $$GlideRecord.sys_email_layout> & sys_metadata;

    /**
     * Reference element for the "Stationery" record type.
     */
    export type sysevent_email_style = Reference<$$tableFields.sysevent_email_style, $$GlideRecord.sysevent_email_style> & sys_metadata;

    /**
     * Element that refers to a "Service Level Agreement" glide record.
     */
    export type sysrule_escalate = Reference<$$tableFields.sysrule_escalate, $$GlideRecord.sysrule_escalate>;

    /**
     * Element that refers to a "Workflow context" glide record.
     */
    export type wf_context = Reference<$$tableFields.wf_context, $$GlideRecord.wf_context>;

    /**
     * Element that refers to a "Workflow Version" glide record.
     */
    export type wf_workflow_version = Reference<$$tableFields.wf_workflow_version, $$GlideRecord.wf_workflow_version>;

    /**
     * Element that refers to a Workflow glide record.
     */
    export type wf_workflow = Reference<$$tableFields.wf_workflow, $$GlideRecord.wf_workflow>;

    /**
     * Element that refers to a "Workflow Stage" glide record.
     */
    export type wf_stage = Reference<$$tableFields.wf_stage, $$GlideRecord.wf_stage>;

    /**
     * Element that refers to a "Workflow Executing Activity" glide record.
     */
    export type wf_executing = Reference<$$tableFields.wf_executing, $$GlideRecord.wf_executing>;

    /**
     * Element that refers to a Macro glide record.
     */
    export type sys_ui_macro = Reference<$$tableFields.sys_ui_macro, $$GlideRecord.sys_ui_macro>;

    /**
     * Element that refers to a "Column Renderer" glide record.
     */
    export type column_renderer = Reference<$$tableFields.column_renderer, $$GlideRecord.column_renderer>;

    /**
     * Element that refers to a "Workflow Activity" glide record.
     */
    export type wf_activity = Reference<$$tableFields.wf_activity, $$GlideRecord.wf_activity>;

    /**
     * Element that refers to a "Relative Duration" glide record.
     */
    export type cmn_relative_duration = Reference<$$tableFields.cmn_relative_duration, $$GlideRecord.cmn_relative_duration>;

    /**
     * Element that refers to a "Workflow Activity History" glide record.
     */
    export type wf_history = Reference<$$tableFields.wf_history, $$GlideRecord.wf_history>;

    /**
     * Element that refers to a "Workflow Element Definition" glide record.
     */
    export type wf_element_definition = Reference<$$tableFields.wf_element_definition, $$GlideRecord.wf_element_definition>;

    /**
     * Element that refers to a "Activity Variables" glide record.
     */
    export type wf_activity_variable = Reference<$$tableFields.wf_activity_variable, $$GlideRecord.wf_activity_variable>;

    /**
     * Element that refers to a "Element Provider" glide record.
     */
    export type wf_element_provider = Reference<$$tableFields.wf_element_provider, $$GlideRecord.wf_element_provider>;

    /**
     * Element that refers to a "Flow catalog variable model" glide record.
     */
    export type sys_flow_cat_variable_model = Reference<$$tableFields.sys_flow_cat_variable_model, $$GlideRecord.sys_flow_cat_variable_model>;

    /**
     * Element that refers to a Interaction glide record.
     * Auto-number Prefix: IMS
     */
    export type interaction = Reference<$$tableFields.interaction, $$GlideRecord.interaction>;

    /**
     * Element that refers to a "Provider Channel Identity" glide record.
     */
    export type sys_cs_provider_application = Reference<$$tableFields.sys_cs_provider_application, $$GlideRecord.sys_cs_provider_application>;

    /**
     * Element that refers to a "Interaction Context" glide record.
     */
    export type v_interaction_context = Reference<$$tableFields.v_interaction_context, $$GlideRecord.v_interaction_context>;

    /**
     * Element that refers to a "Channel User Profile" glide record.
     */
    export type sys_cs_channel_user_profile = Reference<$$tableFields.sys_cs_channel_user_profile, $$GlideRecord.sys_cs_channel_user_profile>;

    /**
     * Element that refers to a "Messaging Channel" glide record.
     */
    export type sys_cs_channel = Reference<$$tableFields.sys_cs_channel, $$GlideRecord.sys_cs_channel>;

    /**
     * Element that refers to a "Provider Channel" glide record.
     */
    export type sys_cs_provider = Reference<$$tableFields.sys_cs_provider, $$GlideRecord.sys_cs_provider>;

    /**
     * Element that refers to a Variables glide record.
     */
    export type var_dictionary = Reference<$$tableFields.var_dictionary, $$GlideRecord.var_dictionary>;

    /**
     * Element that refers to a "Workflow Activity Definition" glide record.
     */
    export type wf_activity_definition = Reference<$$tableFields.wf_activity_definition, $$GlideRecord.wf_activity_definition>;

    /**
     * Element that refers to a "Provider Auth" glide record.
     */
    export type provider_auth = Reference<$$tableFields.provider_auth, $$GlideRecord.provider_auth>;

    /**
     * Element that refers to a "Text Index Group" glide record.
     */
    export type ts_index_group = Reference<$$tableFields.ts_index_group, $$GlideRecord.ts_index_group>;

    /**
     * Element that refers to a Theme glide record.
     */
    export type sp_theme = Reference<$$tableFields.sp_theme, $$GlideRecord.sp_theme>;

    /**
     * Element that refers to a Instance glide record.
     */
    export type sp_instance = Reference<$$tableFields.sp_instance, $$GlideRecord.sp_instance>;

    /**
     * Element that refers to a "Instance with Menu" glide record.
     */
    export type sp_instance_menu = Reference<$$tableFields.sp_instance_menu, $$GlideRecord.sp_instance_menu>;

    /**
     * Element that refers to a "Chat Queue" glide record.
     */
    export type chat_queue = Reference<$$tableFields.chat_queue, $$GlideRecord.chat_queue>;

    /**
     * Element that refers to a "EVAM Definition" glide record.
     */
    export type sys_ux_composite_data = Reference<$$tableFields.sys_ux_composite_data, $$GlideRecord.sys_ux_composite_data>;

    /**
     * Element that refers to a "Text Index Configuration" glide record.
     */
    export type ts_configuration = Reference<$$tableFields.ts_configuration, $$GlideRecord.ts_configuration>;

    /**
     * Element that refers to a "Search Application Configuration" glide record.
     */
    export type sys_search_context_config = Reference<$$tableFields.sys_search_context_config, $$GlideRecord.sys_search_context_config>;

    /**
     * Element that refers to a Page glide record.
     */
    export type sp_page = Reference<$$tableFields.sp_page, $$GlideRecord.sp_page>;

    /**
     * Element that refers to a Catalog glide record.
     */
    export type sc_catalog = Reference<$$tableFields.sc_catalog, $$GlideRecord.sc_catalog>;

    /**
     * Element that refers to a "Knowledge Base" glide record.
     */
    export type kb_knowledge_base = Reference<$$tableFields.kb_knowledge_base, $$GlideRecord.kb_knowledge_base>;

    /**
     * Element that refers to a Widget glide record.
     */
    export type sp_widget = Reference<$$tableFields.sp_widget, $$GlideRecord.sp_widget>;

    /**
     * Element that refers to a "Header | Footer" glide record.
     */
    export type sp_header_footer = Reference<$$tableFields.sp_header_footer, $$GlideRecord.sp_header_footer>;

    /**
     * Element that refers to a "Service Portal Documentation" glide record.
     */
    export type sp_documentation = Reference<$$tableFields.sp_documentation, $$GlideRecord.sp_documentation>;

    /**
     * Element that refers to a Column glide record.
     */
    export type sp_column = Reference<$$tableFields.sp_column, $$GlideRecord.sp_column>;

    /**
     * Element that refers to a Row glide record.
     */
    export type sp_row = Reference<$$tableFields.sp_row, $$GlideRecord.sp_row>;

    /**
     * Element that refers to a Container glide record.
     */
    export type sp_container = Reference<$$tableFields.sp_container, $$GlideRecord.sp_container>;

    /**
     * Element that refers to a "AI Search Search Profile" glide record.
     */
    export type ais_search_profile = Reference<$$tableFields.ais_search_profile, $$GlideRecord.ais_search_profile>;

    /**
     * Element that refers to a "Script Include" glide record.
     */
    export type sys_script_include = Reference<$$tableFields.sys_script_include, $$GlideRecord.sys_script_include>;

    /**
     * Element that refers to a "Data Policy" glide record.
     */
    export type sys_data_policy2 = Reference<$$tableFields.sys_data_policy2, $$GlideRecord.sys_data_policy2>;

    /**
     * Element that refers to a "Stage State" glide record.
     */
    export type stage_state = Reference<$$tableFields.stage_state, $$GlideRecord.stage_state>;

    /**
     * Element that refers to a "Stockroom Type" glide record.
     */
    export type alm_stockroom_type = Reference<$$tableFields.alm_stockroom_type, $$GlideRecord.alm_stockroom_type>;

    /**
     * Element that refers to a Category glide record.
     */
    export type sc_category = Reference<$$tableFields.sc_category, $$GlideRecord.sc_category>;

    /**
     * Element that refers to a Module glide record.
     */
    export type sys_app_module = Reference<$$tableFields.sys_app_module, $$GlideRecord.sys_app_module>;

    /**
     * Element that refers to a "Timeline Page" glide record.
     */
    export type cmn_timeline_page = Reference<$$tableFields.cmn_timeline_page, $$GlideRecord.cmn_timeline_page>;

    /**
     * Element that refers to a "Catalog Renderer" glide record.
     */
    export type sc_renderer = Reference<$$tableFields.sc_renderer, $$GlideRecord.sc_renderer>;

    /**
     * Element that refers to a "Homepage Category Renderer" glide record.
     */
    export type sc_homepage_renderer = Reference<$$tableFields.sc_homepage_renderer, $$GlideRecord.sc_homepage_renderer>;

    /**
     * Element that refers to a Report glide record.
     */
    export type sys_report = Reference<$$tableFields.sys_report, $$GlideRecord.sys_report>;

    /**
     * Element that refers to a "Flow Block" glide record.
     */
    export type sys_hub_flow_block = Reference<$$tableFields.sys_hub_flow_block, $$GlideRecord.sys_hub_flow_block>;

    /**
     * Element that refers to a "Flow Base" glide record.
     */
    export type sys_hub_flow_base = Reference<$$tableFields.sys_hub_flow_base, $$GlideRecord.sys_hub_flow_base>;

    /**
     * Element that refers to a Flow glide record.
     */
    export type sys_hub_flow = Reference<$$tableFields.sys_hub_flow, $$GlideRecord.sys_hub_flow>;

    /**
     * Element that refers to a "Action Category" glide record.
     */
    export type sys_hub_category = Reference<$$tableFields.sys_hub_category, $$GlideRecord.sys_hub_category>;

    /**
     * Element that refers to a "Color Definition" glide record.
     */
    export type sys_report_color = Reference<$$tableFields.sys_report_color, $$GlideRecord.sys_report_color>;

    /**
     * Element that refers to a "Access Control" glide record.
     */
    export type sys_security_acl = Reference<$$tableFields.sys_security_acl, $$GlideRecord.sys_security_acl>;

    /**
     * Element that refers to a "Flow Outputs" glide record.
     */
    export type sys_hub_flow_output = Reference<$$tableFields.sys_hub_flow_output, $$GlideRecord.sys_hub_flow_output>;

    /**
     * Element that refers to a "UX Theme Property" glide record.
     */
    export type sys_ux_theme_property = Reference<$$tableFields.sys_ux_theme_property, $$GlideRecord.sys_ux_theme_property>;

    /**
     * Element that refers to a "UX Theme Property Schema" glide record.
     */
    export type sys_ux_theme_property_schema = Reference<$$tableFields.sys_ux_theme_property_schema, $$GlideRecord.sys_ux_theme_property_schema>;

    /**
     * Element that refers to a "Ordered Item Link" glide record.
     */
    export type sc_ordered_item_link = Reference<$$tableFields.sc_ordered_item_link, $$GlideRecord.sc_ordered_item_link>;

    /**
     * Element that refers to a Item glide record.
     */
    export type sc_ic_item_staging = Reference<$$tableFields.sc_ic_item_staging, $$GlideRecord.sc_ic_item_staging>;

    /**
     * Element that refers to a "Catalog Template" glide record.
     */
    export type sc_template = Reference<$$tableFields.sc_template, $$GlideRecord.sc_template>;

    /**
     * Element that refers to a Topic glide record.
     */
    export type topic = Reference<$$tableFields.topic, $$GlideRecord.topic>;

    /**
     * Element that refers to a Taxonomy glide record.
     */
    export type taxonomy = Reference<$$tableFields.taxonomy, $$GlideRecord.taxonomy>;

    /**
     * Element that refers to a Operation glide record.
     */
    export type sys_security_operation = Reference<$$tableFields.sys_security_operation, $$GlideRecord.sys_security_operation>;

    /**
     * Element that refers to a Type glide record.
     */
    export type sys_security_type = Reference<$$tableFields.sys_security_type, $$GlideRecord.sys_security_type>;

    /**
     * Element that refers to a "User Criteria" glide record.
     */
    export type user_criteria = Reference<$$tableFields.user_criteria, $$GlideRecord.user_criteria>;

    /**
     * Element that refers to a Template glide record.
     * Auto-number Prefix: TEMPLATE
     */
    export type sys_template = Reference<$$tableFields.sys_template, $$GlideRecord.sys_template>;

    /**
     * Element that refers to a "Map Page" glide record.
     */
    export type cmn_map_page = Reference<$$tableFields.cmn_map_page, $$GlideRecord.cmn_map_page>;

    /**
     * Element that refers to a "Map Item" glide record.
     */
    export type cmn_map_item = Reference<$$tableFields.cmn_map_item, $$GlideRecord.cmn_map_item>;

    /**
     * Element that refers to a "Map Page Filter" glide record.
     */
    export type cmn_map_filter = Reference<$$tableFields.cmn_map_filter, $$GlideRecord.cmn_map_filter>;

    /**
     * Element that refers to a "Portal Page" glide record.
     */
    export type sys_portal_page = Reference<$$tableFields.sys_portal_page, $$GlideRecord.sys_portal_page>;

    /**
     * Element that refers to a "Assessment Metric Type" glide record.
     */
    export type asmt_metric_type = Reference<$$tableFields.asmt_metric_type, $$GlideRecord.asmt_metric_type>;

    /**
     * Reference element for the "Catalog Variable Set" record type.
     */
    export type io_set_item = Reference<$$tableFields.io_set_item, $$GlideRecord.io_set_item> & sys_metadata;

    /**
     * Reference element for the "Catalog Items Catalog" record type.
     */
    export type sc_cat_item_catalog = Reference<$$tableFields.sc_cat_item_catalog, $$GlideRecord.sc_cat_item_catalog> & sys_metadata;

    /**
     * Reference element for the "Catalog Item Category" record type.
     */
    export type sc_cat_item_category = Reference<$$tableFields.sc_cat_item_category, $$GlideRecord.sc_cat_item_category> & sys_metadata;

    /**
     * Reference element for the "Remote Instance" record type.
     */
    export type sys_update_set_source = Reference<$$tableFields.sys_update_set_source, $$GlideRecord.sys_update_set_source>;

    /**
     * Reference element for the "Retrieved Update Set" record type.
     */
    export type sys_remote_update_set = Reference<$$tableFields.sys_remote_update_set, $$GlideRecord.sys_remote_update_set>;

    /**
     * Reference element for the "Update Set" record type.
     */
    export type sys_update_set = Reference<$$tableFields.sys_update_set, $$GlideRecord.sys_update_set>;

    /**
     * Reference element for the "Business Rule" record type.
     */
    export type sys_script = Reference<$$tableFields.sys_script, $$GlideRecord.sys_script> & sys_metadata;

    /**
     * Reference element for the "Signature" record type.
     */
    export type asmt_signature = Reference<$$tableFields.asmt_signature, $$GlideRecord.asmt_signature> & sys_metadata;

    /**
     * Reference element for the "Assessment Metric" record type.
     */
    export type asmt_metric = Reference<$$tableFields.asmt_metric, $$GlideRecord.asmt_metric> & sys_metadata;

    /**
     * Reference element for the "Metric Category" record type.
     */
    export type asmt_metric_category = Reference<$$tableFields.asmt_metric_category, $$GlideRecord.asmt_metric_category> & sys_metadata;

    /**
     * Reference element for the "Custom Metric" record type.
     */
    export type asmt_custom_metric = Reference<$$tableFields.asmt_custom_metric, $$GlideRecord.asmt_custom_metric> & sys_metadata;

    /**
     * Reference element for the "Conversation Server Field Script Validator" record type.
     */
    export type sys_cs_field_script_validator = Reference<$$tableFields.sys_cs_field_script_validator, $$GlideRecord.sys_cs_field_script_validator> & sys_metadata;

    /**
     * Reference element for the "Schedule Item" record type.
     */
    export type sys_trigger = Reference<$$tableFields.sys_trigger, $$GlideRecord.sys_trigger>;

    /**
     * Reference element for the "Rollback Context" record type.
     */
    export type sys_rollback_context = Reference<$$tableFields.sys_rollback_context, $$GlideRecord.sys_rollback_context>;

    /**
     * Reference element for the "Node State" record type.
     */
    export type sys_cluster_state = Reference<$$tableFields.sys_cluster_state, $$GlideRecord.sys_cluster_state>;

    /**
     * Reference element for the "Node Type" record type.
     */
    export type sys_node_type = Reference<$$tableFields.sys_node_type, $$GlideRecord.sys_node_type> & sys_metadata;

    /**
     * Reference element for the "Node stats" record type.
     */
    export type sys_cluster_node_stats = Reference<$$tableFields.sys_cluster_node_stats, $$GlideRecord.sys_cluster_node_stats>;

    /**
     * Reference element for the "Sys Job" record type.
     */
    export type sys_job = Reference<$$tableFields.sys_job, $$GlideRecord.sys_job> & sys_metadata;

    /**
     * Reference element for the "UI Action" record type.
     */
    export type sys_ui_action = Reference<$$tableFields.sys_ui_action, $$GlideRecord.sys_ui_action> & sys_metadata;

    /**
     * Reference element for the "Other Schedule" record type.
     */
    export type cmn_other_schedule = Reference<$$tableFields.cmn_other_schedule, $$GlideRecord.cmn_other_schedule>;

    /**
     * Reference element for the "Assessment Template Definition" record type.
     */
    export type asmt_template_definition = Reference<$$tableFields.asmt_template_definition, $$GlideRecord.asmt_template_definition> & sys_metadata;

    /**
     * Reference element for the "REST Message" record type.
     */
    export type sys_rest_message = Reference<$$tableFields.sys_rest_message, $$GlideRecord.sys_rest_message> & sys_metadata;

    /**
     * Reference element for the "Protocol Profile" record type.
     */
    export type sys_protocol_profile = Reference<$$tableFields.sys_protocol_profile, $$GlideRecord.sys_protocol_profile>;

    /**
     * Reference element for the "X.509 Certificate" record type.
     */
    export type sys_certificate = Reference<$$tableFields.sys_certificate, $$GlideRecord.sys_certificate>;

    /**
     * Reference element for the "Authentication Configuration" record type.
     */
    export type sys_auth_profile = Reference<$$tableFields.sys_auth_profile, $$GlideRecord.sys_auth_profile> & sys_metadata;

    /**
     * Reference element for the "Basic Auth Configuration" record type.
     */
    export type sys_auth_profile_basic = Reference<$$tableFields.sys_auth_profile_basic, $$GlideRecord.sys_auth_profile_basic> & sys_auth_profile;

    /**
     * Reference element for the "Oauth Entity Profile" record type.
     */
    export type oauth_entity_profile = Reference<$$tableFields.oauth_entity_profile, $$GlideRecord.oauth_entity_profile> & sys_metadata;

    /**
     * Reference element for the "Saml2 Assertion Producer" record type.
     */
    export type saml2_assertion_producer = Reference<$$tableFields.saml2_assertion_producer, $$GlideRecord.saml2_assertion_producer> & sys_metadata;

    /**
     * Reference element for the "Oauth Entity" record type.
     */
    export type oauth_entity = Reference<$$tableFields.oauth_entity, $$GlideRecord.oauth_entity> & sys_metadata;

    /**
     * Reference element for the "Jwt Provider" record type.
     */
    export type jwt_provider = Reference<$$tableFields.jwt_provider, $$GlideRecord.jwt_provider> & sys_metadata;

    /**
     * Reference element for the "JWT Keys" record type.
     */
    export type jwt_keystore_aliases = Reference<$$tableFields.jwt_keystore_aliases, $$GlideRecord.jwt_keystore_aliases> & sys_metadata;

    /**
     * Reference element for the "HTTP Method" record type.
     */
    export type sys_rest_message_fn = Reference<$$tableFields.sys_rest_message_fn, $$GlideRecord.sys_rest_message_fn> & sys_metadata;

    /**
     * Reference element for the "Context" record type.
     */
    export type sys_cs_virtual_agent_context = Reference<$$tableFields.sys_cs_virtual_agent_context, $$GlideRecord.sys_cs_virtual_agent_context> & sys_metadata;

    /**
     * Reference element for the "Chat Setup" record type.
     */
    export type sys_cs_live_agent_setup = Reference<$$tableFields.sys_cs_live_agent_setup, $$GlideRecord.sys_cs_live_agent_setup> & sys_metadata;

    /**
     * Reference element for the "Application Menu" record type.
     */
    export type sys_app_application = Reference<$$tableFields.sys_app_application, $$GlideRecord.sys_app_application> & sys_metadata;

    /**
     * Reference element for the "Menu Category" record type.
     */
    export type sys_app_category = Reference<$$tableFields.sys_app_category, $$GlideRecord.sys_app_category> & sys_metadata;

    /**
     * Reference element for the "Report Source" record type.
     */
    export type sys_report_source = Reference<$$tableFields.sys_report_source, $$GlideRecord.sys_report_source> & sys_metadata;

    /**
     * Reference element for the "Report Drillown" record type.
     */
    export type sys_report_drill = Reference<$$tableFields.sys_report_drill, $$GlideRecord.sys_report_drill> & sys_report;

    /**
     * Reference element for the "PDF Page Header Footer Template" record type.
     */
    export type sys_report_page_hdrftr = Reference<$$tableFields.sys_report_page_hdrftr, $$GlideRecord.sys_report_page_hdrftr> & sys_metadata;

    /**
     * Reference element for the "Map Source" record type.
     */
    export type sys_report_map_source = Reference<$$tableFields.sys_report_map_source, $$GlideRecord.sys_report_map_source>;

    /**
     * Reference element for the "Report Map Types" record type.
     */
    export type sys_report_map_type = Reference<$$tableFields.sys_report_map_type, $$GlideRecord.sys_report_map_type> & sys_metadata;

    /**
     * Reference element for the "Mapping group" record type.
     */
    export type sys_report_map_source_mapping = Reference<$$tableFields.sys_report_map_source_mapping, $$GlideRecord.sys_report_map_source_mapping>;

    /**
     * Reference element for the "Report Maps" record type.
     */
    export type sys_report_map = Reference<$$tableFields.sys_report_map, $$GlideRecord.sys_report_map>;

    /**
     * Reference element for the "UI View" record type.
     */
    export type sys_ui_view = Reference<$$tableFields.sys_ui_view, $$GlideRecord.sys_ui_view> & sys_metadata;

    /**
     * Reference element for the "Import Table" record type.
     */
    export type sys_report_import_table = Reference<$$tableFields.sys_report_import_table, $$GlideRecord.sys_report_import_table>;

    /**
     * Reference element for the "Chart color scheme" record type.
     */
    export type pa_chart_color_schemes = Reference<$$tableFields.pa_chart_color_schemes, $$GlideRecord.pa_chart_color_schemes> & sys_metadata;

    /**
     * Reference element for the "Software Model" record type.
     */
    export type cmdb_software_product_model = Reference<$$tableFields.cmdb_software_product_model, $$GlideRecord.cmdb_software_product_model> & cmdb_model;

    /**
     * Reference element for the "Software License Calculation" record type.
     */
    export type cmdb_sw_license_calculation = Reference<$$tableFields.cmdb_sw_license_calculation, $$GlideRecord.cmdb_sw_license_calculation>;

    /**
     * Reference element for the "Task Relationship Type" record type.
     */
    export type task_rel_type = Reference<$$tableFields.task_rel_type, $$GlideRecord.task_rel_type> & sys_metadata;

    /**
     * Reference element for the "Agile Filter Definition" record type.
     */
    export type agile_filter_definition = Reference<$$tableFields.agile_filter_definition, $$GlideRecord.agile_filter_definition>;

    /**
     * Reference element for the "Personal backlog" record type.
     */
    export type backlog_definition = Reference<$$tableFields.backlog_definition, $$GlideRecord.backlog_definition> & agile_filter_definition;

    /**
     * Reference element for the "Defect" record type.
     */
    export type rm_defect = Reference<$$tableFields.rm_defect, $$GlideRecord.rm_defect> & rm_feature;

    /**
     * Reference element for the "Enhancement" record type.
     */
    export type rm_enhancement = Reference<$$tableFields.rm_enhancement, $$GlideRecord.rm_enhancement> & rm_feature;

    /**
     * Reference element for the "Epic" record type.
     */
    export type rm_epic = Reference<$$tableFields.rm_epic, $$GlideRecord.rm_epic> & rm_feature;

    /**
     * Reference element for the "Release" record type.
     */
    export type rm_release = Reference<$$tableFields.rm_release, $$GlideRecord.rm_release> & planned_task;

    /**
     * Reference element for the "Scrum release" record type.
     */
    export type rm_release_scrum = Reference<$$tableFields.rm_release_scrum, $$GlideRecord.rm_release_scrum> & rm_release;

    /**
     * Reference element for the "Team" record type.
     */
    export type scrum_pp_team = Reference<$$tableFields.scrum_pp_team, $$GlideRecord.scrum_pp_team>;

    /**
     * Reference element for the "Sprint" record type.
     */
    export type rm_sprint = Reference<$$tableFields.rm_sprint, $$GlideRecord.rm_sprint> & rm_release;

    /**
     * Reference element for the "Theme" record type.
     */
    export type scrum_theme = Reference<$$tableFields.scrum_theme, $$GlideRecord.scrum_theme>;

    /**
     * Reference element for the "Business Calendar Entry Name" record type.
     */
    export type business_calendar_span_name = Reference<$$tableFields.business_calendar_span_name, $$GlideRecord.business_calendar_span_name> & sys_metadata;

    /**
     * Reference element for the "Version" record type.
     */
    export type wf_versionable = Reference<$$tableFields.wf_versionable, $$GlideRecord.wf_versionable>;

    /**
     * Reference element for the "Service Portal" record type.
     */
    export type sp_portal = Reference<$$tableFields.sp_portal, $$GlideRecord.sp_portal> & sys_metadata;

    /**
     * Reference element for the "Assessment Metric Template" record type.
     */
    export type asmt_template = Reference<$$tableFields.asmt_template, $$GlideRecord.asmt_template> & sys_metadata;

    /**
     * Reference element for the "MID Server" record type.
     */
    export type ecc_agent = Reference<$$tableFields.ecc_agent, $$GlideRecord.ecc_agent>;

    /**
     * Reference element for the "Mid Server Profile" record type.
     */
    export type mid_server_profile = Reference<$$tableFields.mid_server_profile, $$GlideRecord.mid_server_profile>;

    /**
     * Reference element for the "Team name" record type.
     */
    export type scrum_pp_team_name = Reference<$$tableFields.scrum_pp_team_name, $$GlideRecord.scrum_pp_team_name>;

    /**
     * Reference element for the "CI Relationship Type" record type.
     */
    export type cmdb_rel_type = Reference<$$tableFields.cmdb_rel_type, $$GlideRecord.cmdb_rel_type> & sys_metadata;

    /**
     * Reference element for the "CI Relationship" record type.
     */
    export type cmdb_rel_ci = Reference<$$tableFields.cmdb_rel_ci, $$GlideRecord.cmdb_rel_ci>;

    /**
     * Reference element for the "Virtual Machine Object" record type.
     */
    export type cmdb_ci_vm_object = Reference<$$tableFields.cmdb_ci_vm_object, $$GlideRecord.cmdb_ci_vm_object> & cmdb_ci;

    /**
     * Reference element for the "VMware vCenter Object" record type.
     */
    export type cmdb_ci_vcenter_object = Reference<$$tableFields.cmdb_ci_vcenter_object, $$GlideRecord.cmdb_ci_vcenter_object> & cmdb_ci_vm_object;

    /**
     * Reference element for the "Application" record type.
     */
    export type cmdb_ci_appl = Reference<$$tableFields.cmdb_ci_appl, $$GlideRecord.cmdb_ci_appl> & cmdb_ci;

    /**
     * Reference element for the "VMware vCenter Instance" record type.
     */
    export type cmdb_ci_vcenter = Reference<$$tableFields.cmdb_ci_vcenter, $$GlideRecord.cmdb_ci_vcenter> & cmdb_ci_appl;

    /**
     * Reference element for the "Running Process" record type.
     */
    export type cmdb_running_process = Reference<$$tableFields.cmdb_running_process, $$GlideRecord.cmdb_running_process>;

    /**
     * Reference element for the "Cloud Network" record type.
     */
    export type cmdb_ci_network = Reference<$$tableFields.cmdb_ci_network, $$GlideRecord.cmdb_ci_network> & cmdb_ci_vcenter_object;

    /**
     * Reference element for the "Classification" record type.
     */
    export type discovery_classy = Reference<$$tableFields.discovery_classy, $$GlideRecord.discovery_classy> & sys_metadata;

    /**
     * Reference element for the "Computer" record type.
     */
    export type cmdb_ci_computer = Reference<$$tableFields.cmdb_ci_computer, $$GlideRecord.cmdb_ci_computer> & cmdb_ci_hardware;

    /**
     * Reference element for the "Server" record type.
     */
    export type cmdb_ci_server = Reference<$$tableFields.cmdb_ci_server, $$GlideRecord.cmdb_ci_server> & cmdb_ci_computer;

    /**
     * Reference element for the "Cluster" record type.
     */
    export type cmdb_ci_cluster = Reference<$$tableFields.cmdb_ci_cluster, $$GlideRecord.cmdb_ci_cluster> & cmdb_ci;

    /**
     * Reference element for the "IP Network" record type.
     */
    export type cmdb_ci_ip_network = Reference<$$tableFields.cmdb_ci_ip_network, $$GlideRecord.cmdb_ci_ip_network> & cmdb_ci;

    /**
     * Reference element for the "Discovery Status" record type.
     */
    export type discovery_status = Reference<$$tableFields.discovery_status, $$GlideRecord.discovery_status>;

    /**
     * Reference element for the "Scheduled Job" record type.
     */
    export type sysauto = Reference<$$tableFields.sysauto, $$GlideRecord.sysauto> & sys_metadata;

    /**
     * Reference element for the "Scheduled Script Execution" record type.
     */
    export type sysauto_script = Reference<$$tableFields.sysauto_script, $$GlideRecord.sysauto_script> & sysauto;

    /**
     * Reference element for the "MID Server Cluster" record type.
     */
    export type ecc_agent_cluster = Reference<$$tableFields.ecc_agent_cluster, $$GlideRecord.ecc_agent_cluster>;

    /**
     * Reference element for the "Hardware" record type.
     */
    export type cmdb_ci_hardware = Reference<$$tableFields.cmdb_ci_hardware, $$GlideRecord.cmdb_ci_hardware> & cmdb_ci;

    /**
     * Reference element for the "Network Gear" record type.
     */
    export type cmdb_ci_netgear = Reference<$$tableFields.cmdb_ci_netgear, $$GlideRecord.cmdb_ci_netgear> & cmdb_ci_hardware;

    /**
     * Reference element for the "Network Adapter" record type.
     */
    export type cmdb_ci_network_adapter = Reference<$$tableFields.cmdb_ci_network_adapter, $$GlideRecord.cmdb_ci_network_adapter> & cmdb_ci;

    /**
     * Reference element for the "Process Classification" record type.
     */
    export type discovery_classy_proc = Reference<$$tableFields.discovery_classy_proc, $$GlideRecord.discovery_classy_proc> & discovery_classy;

    /**
     * Reference element for the "Rubrik Cluster" record type.
     */
    export type cmdb_ci_rubrik_cluster = Reference<$$tableFields.cmdb_ci_rubrik_cluster, $$GlideRecord.cmdb_ci_rubrik_cluster> & cmdb_ci_cluster;

    /**
     * Reference element for the "Discovery Schedule" record type.
     */
    export type discovery_schedule = Reference<$$tableFields.discovery_schedule, $$GlideRecord.discovery_schedule> & sysauto_script;

    /**
     * Reference element for the "Company" record type.
     */
    export type core_company = Reference<$$tableFields.core_company, $$GlideRecord.core_company>;

    /**
     * Reference element for the "Base Theme" record type.
     */
    export type sys_ui_base_theme = Reference<$$tableFields.sys_ui_base_theme, $$GlideRecord.sys_ui_base_theme> & sys_metadata;

    /**
     * Reference element for the "Theme" record type.
     */
    export type sys_ui_theme = Reference<$$tableFields.sys_ui_theme, $$GlideRecord.sys_ui_theme> & sys_metadata;

    /**
     * Reference element for the "Department" record type.
     */
    export type cmn_department = Reference<$$tableFields.cmn_department, $$GlideRecord.cmn_department>;

    /**
     * Reference element for the "Location" record type.
     */
    export type cmn_location = Reference<$$tableFields.cmn_location, $$GlideRecord.cmn_location>;

    /**
     * Reference element for the "Sys Phone Territory" record type.
     */
    export type sys_phone_territory = Reference<$$tableFields.sys_phone_territory, $$GlideRecord.sys_phone_territory>;

    /**
     * Reference element for the "User" record type.
     */
    export type sys_user = Reference<$$tableFields.sys_user, $$GlideRecord.sys_user>;

    /**
     * Reference element for the "Notification Device" record type.
     */
    export type cmn_notif_device = Reference<$$tableFields.cmn_notif_device, $$GlideRecord.cmn_notif_device>;

    /**
     * Reference element for the "Notification Device Variable" record type.
     */
    export type cmn_notif_device_variable = Reference<$$tableFields.cmn_notif_device_variable, $$GlideRecord.cmn_notif_device_variable>;

    /**
     * Reference element for the "Tag" record type.
     */
    export type label = Reference<$$tableFields.label, $$GlideRecord.label>;

    /**
     * Reference element for the "Label Entry" record type.
     */
    export type label_entry = Reference<$$tableFields.label_entry, $$GlideRecord.label_entry>;

    /**
     * Reference element for the "Label Table" record type.
     */
    export type label_table = Reference<$$tableFields.label_table, $$GlideRecord.label_table>;

    /**
     * Reference element for the "Push Application" record type.
     */
    export type sys_push_application = Reference<$$tableFields.sys_push_application, $$GlideRecord.sys_push_application> & sys_metadata;

    /**
     * Reference element for the "Push Google OAuth" record type.
     */
    export type sys_push_auth_fcm = Reference<$$tableFields.sys_push_auth_fcm, $$GlideRecord.sys_push_auth_fcm>;

    /**
     * Reference element for the "Push Token Based Auth" record type.
     */
    export type sys_push_auth = Reference<$$tableFields.sys_push_auth, $$GlideRecord.sys_push_auth>;

    /**
     * Reference element for the "Notification Service Provider" record type.
     */
    export type cmn_notif_service_provider = Reference<$$tableFields.cmn_notif_service_provider, $$GlideRecord.cmn_notif_service_provider> & sys_metadata;

    /**
     * Reference element for the "LDAP Server" record type.
     */
    export type ldap_server_config = Reference<$$tableFields.ldap_server_config, $$GlideRecord.ldap_server_config> & sys_metadata;

    /**
     * Reference element for the "Import Export Map" record type.
     */
    export type sys_impex_map = Reference<$$tableFields.sys_impex_map, $$GlideRecord.sys_impex_map> & sys_metadata;

    /**
     * Reference element for the "Data Source" record type.
     */
    export type sys_data_source = Reference<$$tableFields.sys_data_source, $$GlideRecord.sys_data_source> & sys_metadata;

    /**
     * Reference element for the "CIs Discovery Configuration" record type.
     */
    export type discovery_accel_config = Reference<$$tableFields.discovery_accel_config, $$GlideRecord.discovery_accel_config>;

    /**
     * Reference element for the "Discovery Behavior" record type.
     */
    export type discovery_behavior = Reference<$$tableFields.discovery_behavior, $$GlideRecord.discovery_behavior> & sys_metadata;

    /**
     * Reference element for the "Connection \u0026 Credential Aliases" record type.
     */
    export type sys_alias = Reference<$$tableFields.sys_alias, $$GlideRecord.sys_alias> & sys_metadata;

    /**
     * Reference element for the "Vendor Type" record type.
     */
    export type vendor_type = Reference<$$tableFields.vendor_type, $$GlideRecord.vendor_type>;

    /**
     * Reference element for the "Action Type Base" record type.
     */
    export type sys_hub_action_type_base = Reference<$$tableFields.sys_hub_action_type_base, $$GlideRecord.sys_hub_action_type_base> & sys_metadata;

    /**
     * Reference element for the "Action Type" record type.
     */
    export type sys_hub_action_type_definition = Reference<$$tableFields.sys_hub_action_type_definition, $$GlideRecord.sys_hub_action_type_definition> & sys_hub_action_type_base;

    /**
     * Reference element for the "LDAP OU Definition" record type.
     */
    export type ldap_ou_config = Reference<$$tableFields.ldap_ou_config, $$GlideRecord.ldap_ou_config> & sys_metadata;

    /**
     * Reference element for the "Menu List" record type.
     */
    export type sys_perspective = Reference<$$tableFields.sys_perspective, $$GlideRecord.sys_perspective> & sys_metadata;

    /**
     * Reference element for the "Building" record type.
     */
    export type cmn_building = Reference<$$tableFields.cmn_building, $$GlideRecord.cmn_building>;

    /**
     * Reference element for the "Role" record type.
     */
    export type sys_user_role = Reference<$$tableFields.sys_user_role, $$GlideRecord.sys_user_role> & sys_metadata;

    /**
     * Reference element for the "Group" record type.
     */
    export type sys_user_group = Reference<$$tableFields.sys_user_group, $$GlideRecord.sys_user_group>;

    /**
     * Reference element for the "Group Member" record type.
     */
    export type sys_user_grmember = Reference<$$tableFields.sys_user_grmember, $$GlideRecord.sys_user_grmember>;

    /**
     * Reference element for the "Number" record type.
     */
    export type sys_number = Reference<$$tableFields.sys_number, $$GlideRecord.sys_number> & sys_metadata;

    /**
     * Reference element for the "Table" record type.
     */
    export type sys_db_object = Reference<$$tableFields.sys_db_object, $$GlideRecord.sys_db_object> & sys_metadata;

    /**
     * Reference element for the "Dictionary Entry" record type.
     */
    export type sys_dictionary = Reference<$$tableFields.sys_dictionary, $$GlideRecord.sys_dictionary> & sys_metadata;

    /**
     * Reference element for the "Dynamic Filter Options" record type.
     */
    export type sys_filter_option_dynamic = Reference<$$tableFields.sys_filter_option_dynamic, $$GlideRecord.sys_filter_option_dynamic> & sys_metadata;

    /**
     * Reference element for the "Field class" record type.
     */
    export type sys_glide_object = Reference<$$tableFields.sys_glide_object, $$GlideRecord.sys_glide_object> & sys_metadata;

    /**
     * Reference element for the "Connection \u0026 Credential Templates" record type.
     */
    export type sys_alias_templates = Reference<$$tableFields.sys_alias_templates, $$GlideRecord.sys_alias_templates> & sys_metadata;

    /**
     * Reference element for the "Retry Policy" record type.
     */
    export type sys_retry_policy = Reference<$$tableFields.sys_retry_policy, $$GlideRecord.sys_retry_policy> & sys_metadata;

    /**
     * Reference element for the "Action Outputs" record type.
     */
    export type sys_hub_action_output = Reference<$$tableFields.sys_hub_action_output, $$GlideRecord.sys_hub_action_output> & var_dictionary;

    /**
     * Reference element for the "Group Type" record type.
     */
    export type sys_user_group_type = Reference<$$tableFields.sys_user_group_type, $$GlideRecord.sys_user_group_type>;

    /**
     * Reference element for the "User Role" record type.
     */
    export type sys_user_has_role = Reference<$$tableFields.sys_user_has_role, $$GlideRecord.sys_user_has_role>;

    /**
     * Reference element for the "Contained Role" record type.
     */
    export type sys_user_role_contains = Reference<$$tableFields.sys_user_role_contains, $$GlideRecord.sys_user_role_contains> & sys_metadata;

    /**
     * Reference element for the "Group Role" record type.
     */
    export type sys_group_has_role = Reference<$$tableFields.sys_group_has_role, $$GlideRecord.sys_group_has_role>;

    /**
     * Reference element for the "Choice" record type.
     */
    export type sys_choice = Reference<$$tableFields.sys_choice, $$GlideRecord.sys_choice>;

    /**
     * Reference element for the "Choice Set" record type.
     */
    export type sys_choice_set = Reference<$$tableFields.sys_choice_set, $$GlideRecord.sys_choice_set> & sys_metadata;

    /**
     * Reference element for the "Question" record type.
     */
    export type question = Reference<$$tableFields.question, $$GlideRecord.question> & sys_metadata;

    /**
     * Reference element for the "UI Page" record type.
     */
    export type sys_ui_page = Reference<$$tableFields.sys_ui_page, $$GlideRecord.sys_ui_page> & sys_metadata;

    /**
     * Reference element for the "Variable" record type.
     */
    export type item_option_new = Reference<$$tableFields.item_option_new, $$GlideRecord.item_option_new> & question;

    /**
     * Reference element for the "UX Macroponent Type" record type.
     */
    export type sys_ux_macroponent_type = Reference<$$tableFields.sys_ux_macroponent_type, $$GlideRecord.sys_ux_macroponent_type> & sys_metadata;

    /**
     * Reference element for the "UX Macroponent Definition" record type.
     */
    export type sys_ux_macroponent = Reference<$$tableFields.sys_ux_macroponent, $$GlideRecord.sys_ux_macroponent> & sys_metadata;

    /**
     * Reference element for the "UX Extension Point" record type.
     */
    export type sys_ux_extension_point = Reference<$$tableFields.sys_ux_extension_point, $$GlideRecord.sys_ux_extension_point> & sys_metadata;

    /**
     * Reference element for the "UX Controller" record type.
     */
    export type sys_ux_controller = Reference<$$tableFields.sys_ux_controller, $$GlideRecord.sys_ux_controller> & sys_metadata;

    /**
     * Reference element for the "UX Component Definition" record type.
     */
    export type sys_ux_lib_component = Reference<$$tableFields.sys_ux_lib_component, $$GlideRecord.sys_ux_lib_component> & sys_metadata;

    /**
     * Reference element for the "Action Inputs" record type.
     */
    export type sys_hub_action_input = Reference<$$tableFields.sys_hub_action_input, $$GlideRecord.sys_hub_action_input> & var_dictionary;

    /**
     * Reference element for the "Action Model Definition" record type.
     */
    export type sys_declarative_action_model_definition = Reference<$$tableFields.sys_declarative_action_model_definition, $$GlideRecord.sys_declarative_action_model_definition> & sys_metadata;

    /**
     * Reference element for the "UX Event" record type.
     */
    export type sys_ux_event = Reference<$$tableFields.sys_ux_event, $$GlideRecord.sys_ux_event> & sys_metadata;

    /**
     * Reference element for the "UX Interface" record type.
     */
    export type sys_ux_interface = Reference<$$tableFields.sys_ux_interface, $$GlideRecord.sys_ux_interface> & sys_metadata;

    /**
     * Reference element for the "UX Source Code" record type.
     */
    export type sys_ux_lib_source_script = Reference<$$tableFields.sys_ux_lib_source_script, $$GlideRecord.sys_ux_lib_source_script> & sys_metadata;

    /**
     * Reference element for the "UX Children Layout" record type.
     */
    export type sys_ux_children_layout = Reference<$$tableFields.sys_ux_children_layout, $$GlideRecord.sys_ux_children_layout> & sys_metadata;

    /**
     * Reference element for the "UX Children Definition" record type.
     */
    export type sys_ux_children = Reference<$$tableFields.sys_ux_children, $$GlideRecord.sys_ux_children> & sys_metadata;

    /**
     * Reference element for the "Macroponent Priority" record type.
     */
    export type sys_ux_macroponent_priority = Reference<$$tableFields.sys_ux_macroponent_priority, $$GlideRecord.sys_ux_macroponent_priority> & sys_metadata;

    /**
     * Reference element for the "Variable Category" record type.
     */
    export type item_option_category = Reference<$$tableFields.item_option_category, $$GlideRecord.item_option_category> & sys_metadata;

    /**
     * Reference element for the "Variable Set" record type.
     */
    export type item_option_new_set = Reference<$$tableFields.item_option_new_set, $$GlideRecord.item_option_new_set> & sys_metadata;

    /**
     * Reference element for the "Flow catalog variable" record type.
     */
    export type sys_flow_cat_variable = Reference<$$tableFields.sys_flow_cat_variable, $$GlideRecord.sys_flow_cat_variable> & item_option_new;

    /**
     * Reference element for the "Workflow SC Variable" record type.
     */
    export type wf_variable = Reference<$$tableFields.wf_variable, $$GlideRecord.wf_variable> & item_option_new;

    /**
     * Reference element for the "Producer Set" record type.
     */
    export type item_option_new_producer_set = Reference<$$tableFields.item_option_new_producer_set, $$GlideRecord.item_option_new_producer_set> & item_option_new_set;

    /**
     * Reference element for the "Decision" record type.
     */
    export type sys_decision_question = Reference<$$tableFields.sys_decision_question, $$GlideRecord.sys_decision_question> & sys_metadata;

    /**
     * Reference element for the "Help Question" record type.
     */
    export type help_question = Reference<$$tableFields.help_question, $$GlideRecord.help_question> & sys_metadata;

    /**
     * Reference element for the "Decision Table" record type.
     */
    export type sys_decision = Reference<$$tableFields.sys_decision, $$GlideRecord.sys_decision> & sys_metadata;

    /**
     * Reference element for the "Help Content" record type.
     */
    export type help_content = Reference<$$tableFields.help_content, $$GlideRecord.help_content> & sys_metadata;

    /**
     * Reference element for the "UX Type" record type.
     */
    export type sys_ux_type = Reference<$$tableFields.sys_ux_type, $$GlideRecord.sys_ux_type> & sys_metadata;

    /**
     * Reference element for the "Help Guidance Step" record type.
     */
    export type help_guidance_step = Reference<$$tableFields.help_guidance_step, $$GlideRecord.help_guidance_step> & sys_metadata;

    /**
     * Reference element for the "Guidance" record type.
     */
    export type help_guidance = Reference<$$tableFields.help_guidance, $$GlideRecord.help_guidance> & sys_metadata;

    /**
     * Reference element for the "Embedded Help" record type.
     */
    export type sys_embedded_help_content = Reference<$$tableFields.sys_embedded_help_content, $$GlideRecord.sys_embedded_help_content> & sys_metadata;

    /**
     * Reference element for the "Password Reset Question" record type.
     */
    export type pwd_question = Reference<$$tableFields.pwd_question, $$GlideRecord.pwd_question> & sys_metadata;

    /**
     * Reference element for the "Variable Layout" record type.
     */
    export type item_option_layout = Reference<$$tableFields.item_option_layout, $$GlideRecord.item_option_layout> & question;

    /**
     * Reference element for the "Wizard Variable" record type.
     */
    export type expert_variable = Reference<$$tableFields.expert_variable, $$GlideRecord.expert_variable> & question;

    /**
     * Reference element for the "Wizard" record type.
     */
    export type expert = Reference<$$tableFields.expert, $$GlideRecord.expert> & sys_metadata;

    /**
     * Reference element for the "Wizard Panel" record type.
     */
    export type expert_panel = Reference<$$tableFields.expert_panel, $$GlideRecord.expert_panel> & sys_metadata;

    /**
     * Reference element for the "Wizard Panel Variable" record type.
     */
    export type expert_panel_variable = Reference<$$tableFields.expert_panel_variable, $$GlideRecord.expert_panel_variable> & sys_metadata;

    /**
     * Reference element for the "Catalog Wizard Question" record type.
     */
    export type sc_wizard_question = Reference<$$tableFields.sc_wizard_question, $$GlideRecord.sc_wizard_question> & sys_metadata;

    /**
     * Reference element for the "Catalog Wizard Section" record type.
     */
    export type sc_wizard_section = Reference<$$tableFields.sc_wizard_section, $$GlideRecord.sc_wizard_section> & sys_metadata;

    /**
     * Reference element for the "Catalog Wizard Step" record type.
     */
    export type sc_wizard_step = Reference<$$tableFields.sc_wizard_step, $$GlideRecord.sc_wizard_step> & sys_metadata;

    /**
     * Reference element for the "Catalog Wizard Feedback" record type.
     */
    export type sc_wizard_feedback = Reference<$$tableFields.sc_wizard_feedback, $$GlideRecord.sc_wizard_feedback> & sys_metadata;

    /**
     * Reference element for the "Catalog Wizard" record type.
     */
    export type sc_wizard = Reference<$$tableFields.sc_wizard, $$GlideRecord.sc_wizard> & sys_metadata;

    /**
     * Reference element for the "Wizard Configuration" record type.
     */
    export type cxs_wizard_config = Reference<$$tableFields.cxs_wizard_config, $$GlideRecord.cxs_wizard_config> & cxs_ui_config_base;

    /**
     * Reference element for the "Record Producer Configuration" record type.
     */
    export type cxs_rp_config = Reference<$$tableFields.cxs_rp_config, $$GlideRecord.cxs_rp_config> & cxs_ui_config_base;

    /**
     * Reference element for the "Base UI Configuration" record type.
     */
    export type cxs_ui_config_base = Reference<$$tableFields.cxs_ui_config_base, $$GlideRecord.cxs_ui_config_base> & sys_metadata;

    /**
     * Reference element for the "Search Context" record type.
     */
    export type cxs_context_config = Reference<$$tableFields.cxs_context_config, $$GlideRecord.cxs_context_config> & sys_metadata;

    /**
     * Reference element for the "Resource Configuration" record type.
     */
    export type cxs_res_context_config = Reference<$$tableFields.cxs_res_context_config, $$GlideRecord.cxs_res_context_config> & sys_metadata;

    /**
     * Reference element for the "Search Resource Context Property" record type.
     */
    export type cxs_res_context_config_prop = Reference<$$tableFields.cxs_res_context_config_prop, $$GlideRecord.cxs_res_context_config_prop> & sys_metadata;

    /**
     * Reference element for the "Table Configuration" record type.
     */
    export type cxs_table_config = Reference<$$tableFields.cxs_table_config, $$GlideRecord.cxs_table_config> & cxs_ui_config_base;

    /**
     * Reference element for the "Search Field" record type.
     */
    export type cxs_table_field_config = Reference<$$tableFields.cxs_table_field_config, $$GlideRecord.cxs_table_field_config> & sys_metadata;

    /**
     * Reference element for the "Email Configuration" record type.
     */
    export type cxs_table_email_config = Reference<$$tableFields.cxs_table_email_config, $$GlideRecord.cxs_table_email_config> & sys_metadata;

    /**
     * Reference element for the "Filter Configuration" record type.
     */
    export type cxs_table_fltr_config = Reference<$$tableFields.cxs_table_fltr_config, $$GlideRecord.cxs_table_fltr_config> & cxs_fltr_config;

    /**
     * Reference element for the "Filter Condition" record type.
     */
    export type cxs_table_fltr_condition = Reference<$$tableFields.cxs_table_fltr_condition, $$GlideRecord.cxs_table_fltr_condition> & cxs_fltr_condition;

    /**
     * Reference element for the "Searcher" record type.
     */
    export type cxs_searcher_config = Reference<$$tableFields.cxs_searcher_config, $$GlideRecord.cxs_searcher_config> & sys_metadata;

    /**
     * Reference element for the "Search Action Configuration" record type.
     */
    export type cxs_ui_action_config = Reference<$$tableFields.cxs_ui_action_config, $$GlideRecord.cxs_ui_action_config> & sys_metadata;

    /**
     * Reference element for the "Catalog Portal Page" record type.
     */
    export type sc_catalog_view_mtom = Reference<$$tableFields.sc_catalog_view_mtom, $$GlideRecord.sc_catalog_view_mtom> & sys_metadata;

    /**
     * Reference element for the "Price" record type.
     */
    export type fx_price = Reference<$$tableFields.fx_price, $$GlideRecord.fx_price>;

    /**
     * Reference element for the "Catalog Site" record type.
     */
    export type sc_catalog_site = Reference<$$tableFields.sc_catalog_site, $$GlideRecord.sc_catalog_site> & sys_metadata;

    /**
     * Reference element for the "Available Search Resource" record type.
     */
    export type cxs_search_resource = Reference<$$tableFields.cxs_search_resource, $$GlideRecord.cxs_search_resource> & sys_metadata;

    /**
     * Reference element for the "Search Resource" record type.
     */
    export type cxs_search_res_config = Reference<$$tableFields.cxs_search_res_config, $$GlideRecord.cxs_search_res_config> & sys_metadata;

    /**
     * Reference element for the "Search Resource Property" record type.
     */
    export type cxs_search_res_config_prop = Reference<$$tableFields.cxs_search_res_config_prop, $$GlideRecord.cxs_search_res_config_prop> & sys_metadata;

    /**
     * Reference element for the "Search Actions" record type.
     */
    export type cxs_ui_action = Reference<$$tableFields.cxs_ui_action, $$GlideRecord.cxs_ui_action> & sys_metadata;

    /**
     * Reference element for the "Record Producer Configuration" record type.
     */
    export type aisa_rp_config = Reference<$$tableFields.aisa_rp_config, $$GlideRecord.aisa_rp_config> & sys_metadata;

    /**
     * Reference element for the "Wizard Action Configuration Mapping" record type.
     */
    export type sc_wizard_action_config_mapping = Reference<$$tableFields.sc_wizard_action_config_mapping, $$GlideRecord.sc_wizard_action_config_mapping> & sys_metadata;

    /**
     * Reference element for the "Wizard Action Configuration" record type.
     */
    export type sc_wizard_action_config = Reference<$$tableFields.sc_wizard_action_config, $$GlideRecord.sc_wizard_action_config> & sys_metadata;

    /**
     * Reference element for the "Action Assignment" record type.
     */
    export type sys_declarative_action_assignment = Reference<$$tableFields.sys_declarative_action_assignment, $$GlideRecord.sys_declarative_action_assignment> & sys_metadata;

    /**
     * Reference element for the "Action Definition" record type.
     */
    export type sys_declarative_action_definition = Reference<$$tableFields.sys_declarative_action_definition, $$GlideRecord.sys_declarative_action_definition> & sys_metadata;

    /**
     * Reference element for the "Action Payload Definition" record type.
     */
    export type sys_declarative_action_payload_definition = Reference<$$tableFields.sys_declarative_action_payload_definition, $$GlideRecord.sys_declarative_action_payload_definition> & sys_metadata;

    /**
     * Reference element for the "Declarative Action Render Mode" record type.
     */
    export type sys_declarative_action_render_mode = Reference<$$tableFields.sys_declarative_action_render_mode, $$GlideRecord.sys_declarative_action_render_mode> & sys_metadata;

    /**
     * Reference element for the "Declarative Action Group" record type.
     */
    export type sys_declarative_action_group = Reference<$$tableFields.sys_declarative_action_group, $$GlideRecord.sys_declarative_action_group>;

    /**
     * Reference element for the "Design System Icons" record type.
     */
    export type st_sys_design_system_icon = ReferenceBase<$$tableFields.st_sys_design_system_icon, $$GlideRecord.st_sys_design_system_icon>;
    /**
     * Reference element for the "Workspace" record type.
     */
    export type sys_aw_master_config = Reference<$$tableFields.sys_aw_master_config, $$GlideRecord.sys_aw_master_config> & sys_metadata;

    /**
     * Reference element for the "UX App Shell UI" record type.
     */
    export type sys_ux_page = Reference<$$tableFields.sys_ux_page, $$GlideRecord.sys_ux_page> & sys_metadata;

    /**
     * Reference element for the "UX Page Element" record type.
     */
    export type sys_ux_page_element = Reference<$$tableFields.sys_ux_page_element, $$GlideRecord.sys_ux_page_element> & sys_metadata;

    /**
     * Reference element for the "UX Content Picker" record type.
     */
    export type sys_ux_content_picker = Reference<$$tableFields.sys_ux_content_picker, $$GlideRecord.sys_ux_content_picker> & sys_ux_page_element;

    /**
     * Reference element for the "UX Content Placeholder" record type.
     */
    export type sys_ux_content_placeholder_elem = Reference<$$tableFields.sys_ux_content_placeholder_elem, $$GlideRecord.sys_ux_content_placeholder_elem> & sys_ux_page_element;

    /**
     * Reference element for the "UX Custom Content Extension" record type.
     */
    export type sys_ux_custom_content_root_elem = Reference<$$tableFields.sys_ux_custom_content_root_elem, $$GlideRecord.sys_ux_custom_content_root_elem> & sys_ux_page_element;

    /**
     * Reference element for the "UX Content Picker Slot" record type.
     */
    export type sys_ux_lib_content_picker_slot = Reference<$$tableFields.sys_ux_lib_content_picker_slot, $$GlideRecord.sys_ux_lib_content_picker_slot> & sys_metadata;

    /**
     * Reference element for the "Children Slot" record type.
     */
    export type sys_ux_children_slot = Reference<$$tableFields.sys_ux_children_slot, $$GlideRecord.sys_ux_children_slot> & sys_metadata;

    /**
     * Reference element for the "UX Application" record type.
     */
    export type sys_ux_page_registry = Reference<$$tableFields.sys_ux_page_registry, $$GlideRecord.sys_ux_page_registry> & sys_metadata;

    /**
     * Reference element for the "UX Parent Application" record type.
     */
    export type sys_ux_app = Reference<$$tableFields.sys_ux_app, $$GlideRecord.sys_ux_app> & sys_metadata;

    /**
     * Reference element for the "UX Theme" record type.
     */
    export type sys_ux_theme = Reference<$$tableFields.sys_ux_theme, $$GlideRecord.sys_ux_theme> & sys_metadata;

    /**
     * Reference element for the "Workspace Global Search Configuration" record type.
     */
    export type sys_aw_global_search_config = Reference<$$tableFields.sys_aw_global_search_config, $$GlideRecord.sys_aw_global_search_config> & sys_metadata;

    /**
     * Reference element for the "Filter Condition" record type.
     */
    export type cxs_rp_fltr_condition = Reference<$$tableFields.cxs_rp_fltr_condition, $$GlideRecord.cxs_rp_fltr_condition> & cxs_fltr_condition;

    /**
     * Reference element for the "Filter Condition" record type.
     */
    export type cxs_fltr_condition = Reference<$$tableFields.cxs_fltr_condition, $$GlideRecord.cxs_fltr_condition> & sys_metadata;

    /**
     * Reference element for the "Filter Configuration" record type.
     */
    export type cxs_rp_fltr_config = Reference<$$tableFields.cxs_rp_fltr_config, $$GlideRecord.cxs_rp_fltr_config> & cxs_fltr_config;

    /**
     * Reference element for the "Filter Configuration" record type.
     */
    export type cxs_fltr_config = Reference<$$tableFields.cxs_fltr_config, $$GlideRecord.cxs_fltr_config> & sys_metadata;

    /**
     * Reference element for the "Catalog Template Detail" record type.
     */
    export type sc_template_detail = Reference<$$tableFields.sc_template_detail, $$GlideRecord.sc_template_detail> & sys_metadata;

    /**
     * Reference element for the "Banner Step" record type.
     */
    export type expert_banner_step = Reference<$$tableFields.expert_banner_step, $$GlideRecord.expert_banner_step> & sys_metadata;

    /**
     * Reference element for the "Question" record type.
     */
    export type sc_ic_question = Reference<$$tableFields.sc_ic_question, $$GlideRecord.sc_ic_question> & sys_metadata;

    /**
     * Reference element for the "Section" record type.
     */
    export type sc_ic_section = Reference<$$tableFields.sc_ic_section, $$GlideRecord.sc_ic_section> & sys_metadata;

    /**
     * Reference element for the "Column" record type.
     */
    export type sc_ic_column = Reference<$$tableFields.sc_ic_column, $$GlideRecord.sc_ic_column> & sys_metadata;

    /**
     * Reference element for the "Question Choice" record type.
     */
    export type question_choice = Reference<$$tableFields.question_choice, $$GlideRecord.question_choice> & sys_metadata;

    /**
     * Reference element for the "Question Choice" record type.
     */
    export type sc_ic_question_choice = Reference<$$tableFields.sc_ic_question_choice, $$GlideRecord.sc_ic_question_choice> & sys_metadata;

    /**
     * Reference element for the "Question Class" record type.
     */
    export type sc_ic_question_class = Reference<$$tableFields.sc_ic_question_class, $$GlideRecord.sc_ic_question_class> & sys_metadata;

    /**
     * Reference element for the "Question Type" record type.
     */
    export type sc_ic_question_type = Reference<$$tableFields.sc_ic_question_type, $$GlideRecord.sc_ic_question_type> & sys_metadata;

    /**
     * Reference element for the "Question Type Choice" record type.
     */
    export type sc_ic_question_type_choice = Reference<$$tableFields.sc_ic_question_type_choice, $$GlideRecord.sc_ic_question_type_choice> & sys_metadata;

    /**
     * Reference element for the "Assessment Instance Question" record type.
     */
    export type asmt_assessment_instance_question = Reference<$$tableFields.asmt_assessment_instance_question, $$GlideRecord.asmt_assessment_instance_question>;

    /**
     * Reference element for the "Assessment Metric Type Group" record type.
     */
    export type asmt_metric_type_group = Reference<$$tableFields.asmt_metric_type_group, $$GlideRecord.asmt_metric_type_group>;

    /**
     * Reference element for the "Assessment Metric Definition" record type.
     */
    export type asmt_metric_definition = Reference<$$tableFields.asmt_metric_definition, $$GlideRecord.asmt_metric_definition> & sys_metadata;

    /**
     * Reference element for the "Assessment Instance" record type.
     */
    export type asmt_assessment_instance = Reference<$$tableFields.asmt_assessment_instance, $$GlideRecord.asmt_assessment_instance>;

    /**
     * Reference element for the "Trigger Condition" record type.
     */
    export type asmt_condition = Reference<$$tableFields.asmt_condition, $$GlideRecord.asmt_condition> & sys_metadata;

    /**
     * Reference element for the "Assessment Group" record type.
     */
    export type asmt_assessment = Reference<$$tableFields.asmt_assessment, $$GlideRecord.asmt_assessment>;

    /**
     * Reference element for the "Assessable Record" record type.
     */
    export type asmt_assessable_record = Reference<$$tableFields.asmt_assessable_record, $$GlideRecord.asmt_assessable_record>;

    /**
     * Reference element for the "Live Group Profile" record type.
     */
    export type live_group_profile = Reference<$$tableFields.live_group_profile, $$GlideRecord.live_group_profile>;

    /**
     * Reference element for the "Multi Row Question Answer" record type.
     */
    export type sc_multi_row_question_answer = Reference<$$tableFields.sc_multi_row_question_answer, $$GlideRecord.sc_multi_row_question_answer>;

    /**
     * Reference element for the "Options" record type.
     */
    export type sc_item_option = Reference<$$tableFields.sc_item_option, $$GlideRecord.sc_item_option>;

    /**
     * Reference element for the "Item Option" record type.
     */
    export type sc_cat_item_option = Reference<$$tableFields.sc_cat_item_option, $$GlideRecord.sc_cat_item_option> & sys_metadata;

    /**
     * Reference element for the "Item" record type.
     */
    export type sc_cart_item = Reference<$$tableFields.sc_cart_item, $$GlideRecord.sc_cart_item>;

    /**
     * Reference element for the "Shopping Cart" record type.
     */
    export type sc_cart = Reference<$$tableFields.sc_cart, $$GlideRecord.sc_cart>;

    /**
     * Reference element for the "Question Answer" record type.
     */
    export type question_answer = Reference<$$tableFields.question_answer, $$GlideRecord.question_answer>;

    /**
     * Reference element for the "Password Reset Active Question" record type.
     */
    export type pwd_active_question = Reference<$$tableFields.pwd_active_question, $$GlideRecord.pwd_active_question>;

    /**
     * Reference element for the "Social Q\u0026A Question" record type.
     */
    export type kb_social_qa_question = Reference<$$tableFields.kb_social_qa_question, $$GlideRecord.kb_social_qa_question>;

    /**
     * Reference element for the "Social Q\u0026A Answer" record type.
     */
    export type kb_social_qa_answer = Reference<$$tableFields.kb_social_qa_answer, $$GlideRecord.kb_social_qa_answer>;

    /**
     * Reference element for the "Knowledge Category" record type.
     */
    export type kb_category = Reference<$$tableFields.kb_category, $$GlideRecord.kb_category>;

    /**
     * Reference element for the "Live Profile" record type.
     */
    export type live_profile = Reference<$$tableFields.live_profile, $$GlideRecord.live_profile>;

    /**
     * Reference element for the "Attachment" record type.
     */
    export type sys_attachment = Reference<$$tableFields.sys_attachment, $$GlideRecord.sys_attachment>;

    /**
     * Reference element for the "Attachment Document" record type.
     */
    export type sys_attachment_doc = Reference<$$tableFields.sys_attachment_doc, $$GlideRecord.sys_attachment_doc>;

    /**
     * Reference element for the "Attachment Document V2" record type.
     */
    export type sys_attachment_doc_v2 = Reference<$$tableFields.sys_attachment_doc_v2, $$GlideRecord.sys_attachment_doc_v2>;

    /**
     * Reference element for the "History" record type.
     */
    export type sys_history_line = Reference<$$tableFields.sys_history_line, $$GlideRecord.sys_history_line>;

    /**
     * Reference element for the "Record History" record type.
     */
    export type sys_history_set = Reference<$$tableFields.sys_history_set, $$GlideRecord.sys_history_set>;

    /**
     * Reference element for the "Attachment Icon Rule" record type.
     */
    export type sys_attachment_icon_rule = Reference<$$tableFields.sys_attachment_icon_rule, $$GlideRecord.sys_attachment_icon_rule>;

    /**
     * Reference element for the "System Plugin" record type.
     */
    export type v_plugin = Reference<$$tableFields.v_plugin, $$GlideRecord.v_plugin>;

    /**
     * Reference element for the "Setup Dependency" record type.
     */
    export type help_setup_dependency = Reference<$$tableFields.help_setup_dependency, $$GlideRecord.help_setup_dependency> & sys_metadata;

    /**
     * Reference element for the "Question Regular Expression" record type.
     */
    export type question_regex = Reference<$$tableFields.question_regex, $$GlideRecord.question_regex> & sys_metadata;

    /**
     * Reference element for the "Knowledge" record type.
     */
    export type kb_knowledge = Reference<$$tableFields.kb_knowledge, $$GlideRecord.kb_knowledge>;

    /**
     * Reference element for the "Knowledge keyword" record type.
     */
    export type kb_knowledge_keyword = Reference<$$tableFields.kb_knowledge_keyword, $$GlideRecord.kb_knowledge_keyword> & sys_metadata;

    /**
     * Reference element for the "Related Articles" record type.
     */
    export type kb_2_kb = Reference<$$tableFields.kb_2_kb, $$GlideRecord.kb_2_kb>;

    /**
     * Reference element for the "Related Articles" record type.
     */
    export type sc_2_kb = Reference<$$tableFields.sc_2_kb, $$GlideRecord.sc_2_kb>;

    /**
     * Reference element for the "Related Catalog Items" record type.
     */
    export type kb_2_sc = Reference<$$tableFields.kb_2_sc, $$GlideRecord.kb_2_sc>;

    /**
     * Reference element for the "Incident" record type.
     */
    export type incident = Reference<$$tableFields.incident, $$GlideRecord.incident> & task;

    /**
     * Reference element for the "Problem" record type.
     */
    export type problem = Reference<$$tableFields.problem, $$GlideRecord.problem> & task;

    /**
     * Reference element for the "Change Request" record type.
     */
    export type change_request = Reference<$$tableFields.change_request, $$GlideRecord.change_request> & task;

    /**
     * Reference element for the "Standard Change Template Version" record type.
     */
    export type std_change_producer_version = Reference<$$tableFields.std_change_producer_version, $$GlideRecord.std_change_producer_version>;

    /**
     * Reference element for the "Store Application" record type.
     */
    export type sys_store_app = Reference<$$tableFields.sys_store_app, $$GlideRecord.sys_store_app> & sys_scope;

    /**
     * Reference element for the "Knowledge keyword" record type.
     */
    export type kb_keyword = Reference<$$tableFields.kb_keyword, $$GlideRecord.kb_keyword> & sys_metadata;

    /**
     * Reference element for the "Change Task" record type.
     */
    export type change_task = Reference<$$tableFields.change_task, $$GlideRecord.change_task> & task;

    /**
     * Reference element for the "Standard Change Proposal" record type.
     */
    export type std_change_proposal = Reference<$$tableFields.std_change_proposal, $$GlideRecord.std_change_proposal> & task;

    /**
     * Reference element for the "Record Producer" record type.
     */
    export type sc_cat_item_producer = Reference<$$tableFields.sc_cat_item_producer, $$GlideRecord.sc_cat_item_producer> & sc_cat_item;

    /**
     * Reference element for the "Standard Change Template" record type.
     */
    export type std_change_record_producer = Reference<$$tableFields.std_change_record_producer, $$GlideRecord.std_change_record_producer> & sc_cat_item_producer;

    /**
     * Reference element for the "Service" record type.
     */
    export type sc_cat_item_producer_service = Reference<$$tableFields.sc_cat_item_producer_service, $$GlideRecord.sc_cat_item_producer_service> & sc_cat_item_producer;

    /**
     * Reference element for the "Change Model" record type.
     */
    export type chg_model = Reference<$$tableFields.chg_model, $$GlideRecord.chg_model> & sttrm_model;

    /**
     * Reference element for the "State Transition Model" record type.
     */
    export type sttrm_model = Reference<$$tableFields.sttrm_model, $$GlideRecord.sttrm_model> & sys_metadata;

    /**
     * Reference element for the "SLA Conditions" record type.
     */
    export type sla_condition_class = Reference<$$tableFields.sla_condition_class, $$GlideRecord.sla_condition_class> & sys_metadata;

    /**
     * Reference element for the "Task SLA" record type.
     */
    export type task_sla = Reference<$$tableFields.task_sla, $$GlideRecord.task_sla>;

    /**
     * Reference element for the "SLA Definition" record type.
     */
    export type contract_sla = Reference<$$tableFields.contract_sla, $$GlideRecord.contract_sla> & sys_metadata;

    /**
     * Reference element for the "View Table" record type.
     */
    export type sys_db_view_table = Reference<$$tableFields.sys_db_view_table, $$GlideRecord.sys_db_view_table> & sys_metadata;

    /**
     * Reference element for the "Database View" record type.
     */
    export type sys_db_view = Reference<$$tableFields.sys_db_view, $$GlideRecord.sys_db_view> & sys_metadata;

    /**
     * Reference element for the "View Field" record type.
     */
    export type sys_db_view_table_field = Reference<$$tableFields.sys_db_view_table_field, $$GlideRecord.sys_db_view_table_field> & sys_metadata;

    /**
     * Reference element for the "UI Policy Action" record type.
     */
    export type sys_ui_policy_action = Reference<$$tableFields.sys_ui_policy_action, $$GlideRecord.sys_ui_policy_action> & sys_metadata;

    /**
     * Reference element for the "Catalog UI Policy Action" record type.
     */
    export type catalog_ui_policy_action = Reference<$$tableFields.catalog_ui_policy_action, $$GlideRecord.catalog_ui_policy_action> & sys_ui_policy_action;

    /**
     * Reference element for the "Batch Install Plan" record type.
     */
    export type sys_batch_install_plan = Reference<$$tableFields.sys_batch_install_plan, $$GlideRecord.sys_batch_install_plan>;

    /**
     * Reference element for the "Application License Definition" record type.
     */
    export type sys_app_license_defn = Reference<$$tableFields.sys_app_license_defn, $$GlideRecord.sys_app_license_defn> & sys_metadata;

    /**
     * Reference element for the "Model State" record type.
     */
    export type sttrm_state = Reference<$$tableFields.sttrm_state, $$GlideRecord.sttrm_state> & sys_metadata;

    /**
     * Reference element for the "UI Policy" record type.
     */
    export type sys_ui_policy = Reference<$$tableFields.sys_ui_policy, $$GlideRecord.sys_ui_policy> & sys_metadata;

    /**
     * Reference element for the "Catalog UI Policy" record type.
     */
    export type catalog_ui_policy = Reference<$$tableFields.catalog_ui_policy, $$GlideRecord.catalog_ui_policy> & sys_ui_policy;

    /**
     * Reference element for the "Catalog Task" record type.
     */
    export type sc_task = Reference<$$tableFields.sc_task, $$GlideRecord.sc_task> & task;

    /**
     * Reference element for the "Approval" record type.
     */
    export type sysapproval_approver = Reference<$$tableFields.sysapproval_approver, $$GlideRecord.sysapproval_approver>;

    /**
     * Reference element for the "Group approval" record type.
     */
    export type sysapproval_group = Reference<$$tableFields.sysapproval_group, $$GlideRecord.sysapproval_group> & task;

    /**
     * Reference element for the "State Binding" record type.
     */
    export type state_binding = Reference<$$tableFields.state_binding, $$GlideRecord.state_binding>;

    /**
     * Reference element for the "Process Guides" record type.
     */
    export type process_guide = Reference<$$tableFields.process_guide, $$GlideRecord.process_guide> & sys_metadata;

    /**
     * Reference element for the "Approval Rules" record type.
     */
    export type sysrule_approvals = Reference<$$tableFields.sysrule_approvals, $$GlideRecord.sysrule_approvals> & sysrule;

    /**
     * Reference element for the "Process Steps" record type.
     */
    export type process_step = Reference<$$tableFields.process_step, $$GlideRecord.process_step> & sys_metadata;

    /**
     * Reference element for the "Storage File Share" record type.
     */
    export type cmdb_ci_storage_fileshare = Reference<$$tableFields.cmdb_ci_storage_fileshare, $$GlideRecord.cmdb_ci_storage_fileshare> & cmdb_ci;

    /**
     * Reference element for the "Taxonomy Layer Definition" record type.
     */
    export type spm_taxonomy_layer_definition = Reference<$$tableFields.spm_taxonomy_layer_definition, $$GlideRecord.spm_taxonomy_layer_definition>;

    /**
     * Reference element for the "Virtualization Server" record type.
     */
    export type cmdb_ci_virtualization_server = Reference<$$tableFields.cmdb_ci_virtualization_server, $$GlideRecord.cmdb_ci_virtualization_server> & cmdb_ci_server;

    /**
     * Reference element for the "Asset Task" record type.
     */
    export type asset_task = Reference<$$tableFields.asset_task, $$GlideRecord.asset_task> & task;

    /**
     * Reference element for the "Goal" record type.
     */
    export type goal = Reference<$$tableFields.goal, $$GlideRecord.goal>;

    /**
     * Reference element for the "Unit" record type.
     */
    export type pa_units = Reference<$$tableFields.pa_units, $$GlideRecord.pa_units> & sys_metadata;

    /**
     * Reference element for the "Currency" record type.
     */
    export type fx_currency = Reference<$$tableFields.fx_currency, $$GlideRecord.fx_currency>;

    /**
     * Reference element for the "Solution Definition" record type.
     */
    export type ml_capability_definition_base = Reference<$$tableFields.ml_capability_definition_base, $$GlideRecord.ml_capability_definition_base> & sys_metadata;

    /**
     * Reference element for the "Similarity Definition" record type.
     */
    export type ml_capability_definition_similarity = Reference<$$tableFields.ml_capability_definition_similarity, $$GlideRecord.ml_capability_definition_similarity> & ml_capability_definition_base;

    /**
     * Reference element for the "Ml Capability" record type.
     */
    export type ml_capability = Reference<$$tableFields.ml_capability, $$GlideRecord.ml_capability> & sys_metadata;

    /**
     * Reference element for the "Word corpus" record type.
     */
    export type ml_word_vector_corpus = Reference<$$tableFields.ml_word_vector_corpus, $$GlideRecord.ml_word_vector_corpus>;

    /**
     * Reference element for the "Ml Solution Parameters" record type.
     */
    export type ml_solution_parameters = Reference<$$tableFields.ml_solution_parameters, $$GlideRecord.ml_solution_parameters> & sys_metadata;

    /**
     * Reference element for the "Stopwords" record type.
     */
    export type ml_stopwords = Reference<$$tableFields.ml_stopwords, $$GlideRecord.ml_stopwords>;
}
