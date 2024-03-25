/// <reference path="./GlideTypes.d.ts" />
/// <reference path="./$$tableFields.d.ts" />
/// <reference path="./$$GlideElement.d.ts" />

/**
 * Contains helper types for table-specific GlideRecord instances.
 * @namespace $$GlideRecord
 */
declare namespace $$GlideRecord {
    /**
     * "Business Unit" glide record.
     */
    export type business_unit = $$tableFields.business_unit & GlideRecord;

    /**
     * "Guided Setup Content" glide record.
     * Scope: "Guided Setup - Legacy" (sn_guided_setup)
     */
    export type gsw_content = $$tableFields.gsw_content & sys_metadata;

    /**
     * "Application File" glide record.
     */
    export type sys_metadata = $$tableFields.sys_metadata & GlideRecord;

    /**
     * Package glide record.
     */
    export type sys_package = $$tableFields.sys_package & GlideRecord;

    /**
     * Application glide record.
     */
    export type sys_scope = $$tableFields.sys_scope & sys_package;

    /**
     * Task glide record.
     * Auto-number Prefix: TASK
     */
    export type task = $$tableFields.task & GlideRecord;

    /**
     * Subscription glide record.
     */
    export type license_details = $$tableFields.license_details & GlideRecord;

    /**
     * "UsageAnalytics Definitions Base" glide record.
     */
    export type ua_defn_base = $$tableFields.ua_defn_base & GlideRecord;

    /**
     * Asset glide record.
     */
    export type alm_asset = $$tableFields.alm_asset & GlideRecord;

    /**
     * "Cost Center" glide record.
     */
    export type cmn_cost_center = $$tableFields.cmn_cost_center & GlideRecord;

    /**
     * Depreciation glide record.
     */
    export type cmdb_depreciation = $$tableFields.cmdb_depreciation & GlideRecord;

    /**
     * "Life Cycle Stage" glide record.
     */
    export type life_cycle_stage = $$tableFields.life_cycle_stage & sys_metadata;

    /**
     * "Life Cycle Stage Status" glide record.
     */
    export type life_cycle_stage_status = $$tableFields.life_cycle_stage_status & sys_metadata;

    /**
     * "Product Model" glide record.
     */
    export type cmdb_model = $$tableFields.cmdb_model & GlideRecord;

    /**
     * "Model Category" glide record.
     */
    export type cmdb_model_category = $$tableFields.cmdb_model_category & GlideRecord;

    /**
     * "Base Configuration Item" glide record.
     */
    export type cmdb = $$tableFields.cmdb & GlideRecord;

    /**
     * "Configuration Item" glide record.
     */
    export type cmdb_ci = $$tableFields.cmdb_ci & cmdb;

    /**
     * "Model Component" glide record.
     */
    export type cmdb_m2m_model_component = $$tableFields.cmdb_m2m_model_component & GlideRecord;

    /**
     * Service glide record.
     * Auto-number Prefix: BSN
     */
    export type cmdb_ci_service = $$tableFields.cmdb_ci_service & cmdb_ci;

    /**
     * "Subscription Role Type" glide record.
     */
    export type license_role_type = $$tableFields.license_role_type & GlideRecord;

    /**
     * "OT Asset" glide record.
     * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class): A single source for all new, out-of-the-box, CMDB CI class models from ServiceNow
     */
    export type cmdb_ot_entity = $$tableFields.cmdb_ot_entity & GlideRecord;

    /**
     * Contract glide record.
     * Auto-number Prefix: CNTR
     */
    export type ast_contract = $$tableFields.ast_contract & GlideRecord;

    /**
     * "Execution Plan" glide record.
     */
    export type sc_cat_item_delivery_plan = $$tableFields.sc_cat_item_delivery_plan & sys_metadata;

    /**
     * "Execution Plan Task" glide record.
     */
    export type sc_cat_item_delivery_task = $$tableFields.sc_cat_item_delivery_task & sys_metadata;

    /**
     * Offering glide record.
     */
    export type service_offering = $$tableFields.service_offering & cmdb_ci_service;

    /**
     * Request glide record.
     * Auto-number Prefix: REQ
     */
    export type sc_request = $$tableFields.sc_request & task;

    /**
     * "Requested Item" glide record.
     * Auto-number Prefix: RITM
     */
    export type sc_req_item = $$tableFields.sc_req_item & task;

    /**
     * "Flow engine context" glide record.
     */
    export type sys_flow_context = $$tableFields.sys_flow_context & GlideRecord;

    /**
     * "OT Asset Type" glide record.
     * Scope: "CMDB CI Class Models" (sn_cmdb_ci_class): A single source for all new, out-of-the-box, CMDB CI class models from ServiceNow
     */
    export type cmdb_ot_entity_type = $$tableFields.cmdb_ot_entity_type & sys_metadata;

    /**
     * Stockroom glide record.
     */
    export type alm_stockroom = $$tableFields.alm_stockroom & GlideRecord;

    /**
     * Unit glide record.
     */
    export type cmdb_model_unit = $$tableFields.cmdb_model_unit & GlideRecord;

    /**
     * "Vendor Catalog Item" glide record.
     */
    export type pc_vendor_cat_item = $$tableFields.pc_vendor_cat_item & sys_metadata;

    /**
     * "Rule" glide record.
     */
    export type sc_cat_item_guide_items = $$tableFields.sc_cat_item_guide_items & sys_metadata;

    /**
     * "Plan Sequencing" glide record.
     */
    export type sc_cat_item_dt_mtom = $$tableFields.sc_cat_item_dt_mtom & sys_metadata;

    /**
     * "Not Available for Users" glide record.
     */
    export type sc_cat_item_user_no_mtom = $$tableFields.sc_cat_item_user_no_mtom & sys_metadata;

    /**
     * "Not Available for Subscribers" glide record.
     */
    export type sc_cat_item_subscribe_no_mtom = $$tableFields.sc_cat_item_subscribe_no_mtom & sys_metadata;

    /**
     * "Not Available for Groups" glide record.
     */
    export type sc_cat_item_group_no_mtom = $$tableFields.sc_cat_item_group_no_mtom & sys_metadata;

    /**
     * "Not Available for Companies" glide record.
     */
    export type sc_cat_item_company_no_mtom = $$tableFields.sc_cat_item_company_no_mtom & sys_metadata;

    /**
     * "Not Available at Locations" glide record.
     */
    export type sc_cat_item_location_no_mtom = $$tableFields.sc_cat_item_location_no_mtom & sys_metadata;

    /**
     * "External Dependencies" glide record.
     */
    export type sc_cat_item_dt_ext_mtom = $$tableFields.sc_cat_item_dt_ext_mtom & sys_metadata;

    /**
     * "Execution Plan Approval Task" glide record.
     */
    export type sc_cat_item_dt_approval = $$tableFields.sc_cat_item_dt_approval & sc_cat_item_delivery_task;

    /**
     * "Child" glide record.
     */
    export type sc_cat_item_children = $$tableFields.sc_cat_item_children & sys_metadata;

    /**
     * "Catalog Item Not Available for" glide record.
     */
    export type sc_cat_item_user_criteria_no_mtom = $$tableFields.sc_cat_item_user_criteria_no_mtom & sys_metadata;

    /**
     * "Catalog Item Available for" glide record.
     */
    export type sc_cat_item_user_criteria_mtom = $$tableFields.sc_cat_item_user_criteria_mtom & sys_metadata;

    /**
     * "Available for Users" glide record.
     */
    export type sc_cat_item_user_mtom = $$tableFields.sc_cat_item_user_mtom & sys_metadata;

    /**
     * "Available for Subscribers" glide record.
     */
    export type sc_cat_item_subscribe_mtom = $$tableFields.sc_cat_item_subscribe_mtom & sys_metadata;

    /**
     * "Available for Departments" glide record.
     */
    export type sc_cat_item_dept_mtom = $$tableFields.sc_cat_item_dept_mtom & sys_metadata;

    /**
     * "Available for Companies" glide record.
     */
    export type sc_cat_item_company_mtom = $$tableFields.sc_cat_item_company_mtom & sys_metadata;

    /**
     * "Available at Locations" glide record.
     */
    export type sc_cat_item_location_mtom = $$tableFields.sc_cat_item_location_mtom & sys_metadata;

    /**
     * "Catalog Item" glide record.
     */
    export type sc_cat_item = $$tableFields.sc_cat_item & sys_metadata;

    /**
     * "Product Catalog Item" glide record.
     */
    export type pc_product_cat_item = $$tableFields.pc_product_cat_item & sc_cat_item;

    /**
     * "Software Catalog" glide record.
     */
    export type pc_software_cat_item = $$tableFields.pc_software_cat_item & pc_product_cat_item;

    /**
     * "Hardware Catalog" glide record.
     */
    export type pc_hardware_cat_item = $$tableFields.pc_hardware_cat_item & pc_product_cat_item;

    /**
     * "Content Item" glide record.
     */
    export type sc_cat_item_content = $$tableFields.sc_cat_item_content & sc_cat_item;

    /**
     * "Service Catalog Entry" glide record.
     */
    export type sc_cat_item_service = $$tableFields.sc_cat_item_service & sc_cat_item;

    /**
     * "SWizard Launcher" glide record.
     */
    export type sc_cat_item_wizard = $$tableFields.sc_cat_item_wizard & sc_cat_item;

    /**
     * "Order guide" glide record.
     */
    export type sc_cat_item_guide = $$tableFields.sc_cat_item_guide & sc_cat_item;

    /**
     * "Planned Task" glide record.
     */
    export type planned_task = $$tableFields.planned_task & task;

    /**
     * "Task Relationship" glide record.
     */
    export type task_rel_task = $$tableFields.task_rel_task & GlideRecord;

    /**
     * "Planned Task Relationship" glide record.
     */
    export type planned_task_rel_planned_task = $$tableFields.planned_task_rel_planned_task & task_rel_task;

    /**
     * Feature glide record.
     */
    export type rm_feature = $$tableFields.rm_feature & planned_task;

    /**
     * Goal glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_goal = $$tableFields.sn_gf_goal & sn_gf_core_goal;

    /**
     * Story glide record.
     */
    export type rm_story = $$tableFields.rm_story & rm_feature;

    /**
     * Schedule glide record.
     */
    export type cmn_schedule = $$tableFields.cmn_schedule & business_calendar;

    /**
     * "Business Calendar" glide record.
     */
    export type business_calendar = $$tableFields.business_calendar & sys_metadata;

    /**
     * "Business Calendar Entry" glide record.
     */
    export type business_calendar_span = $$tableFields.business_calendar_span & GlideRecord;

    /**
     * Agreement glide record.
     * Auto-number Prefix: SLA
     */
    export type sla = $$tableFields.sla & GlideRecord;

    /**
     * "Service Portfolio" glide record.
     */
    export type spm_service_portfolio = $$tableFields.spm_service_portfolio & GlideRecord;

    /**
     * Calendar glide record.
     */
    export type sys_calendar = $$tableFields.sys_calendar & sys_metadata;

    /**
     * "Taxonomy Node" glide record.
     */
    export type spm_taxonomy_node = $$tableFields.spm_taxonomy_node & GlideRecord;

    /**
     * "Core Goal" glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_core_goal = $$tableFields.sn_gf_core_goal & GlideRecord;

    /**
     * "Strategic Priority" glide record.
     * Scope: "Goal Framework" (sn_gf)
     */
    export type sn_gf_strategy = $$tableFields.sn_gf_strategy & GlideRecord;

    /**
     * "Application Model" glide record.
     */
    export type cmdb_application_product_model = $$tableFields.cmdb_application_product_model & cmdb_model;

    /**
     * Condition glide record.
     */
    export type clm_condition_checker = $$tableFields.clm_condition_checker & sys_metadata;

    /**
     * "Condition Checks" glide record.
     */
    export type clm_condition_check = $$tableFields.clm_condition_check & sys_metadata;

    /**
     * Rule glide record.
     */
    export type sysrule = $$tableFields.sysrule & sys_metadata;

    /**
     * "Notification" GlideRecord.
     */
    export type sysevent_email_action = $$tableFields.sysevent_email_action & sysrule;

    /**
     * "Notification Category" GlideRecord.
     */
    export type sys_notification_category = $$tableFields.sys_notification_category & sys_metadata;

    /**
     * "Digest Interval" GlideRecord.
     */
    export type sys_email_digest_interval = $$tableFields.sys_email_digest_interval & sys_metadata;

    /**
     * "Email Template" GlideRecord.
     */
    export type sysevent_email_template = $$tableFields.sysevent_email_template & sys_metadata;

    /**
     * "Email Layout" GlideRecord.
     */
    export type sys_email_layout = $$tableFields.sys_email_layout & sys_metadata;

    /**
     * "Stationery" GlideRecord.
     */
    export type sysevent_email_style = $$tableFields.sysevent_email_style & sys_metadata;

    /**
     * "Service Level Agreement" glide record.
     */
    export type sysrule_escalate = $$tableFields.sysrule_escalate & sysrule;

    /**
     * "Workflow context" glide record.
     */
    export type wf_context = $$tableFields.wf_context & GlideRecord;

    /**
     * "Workflow Version" glide record.
     */
    export type wf_workflow_version = $$tableFields.wf_workflow_version & GlideRecord;

    /**
     * Workflow glide record.
     */
    export type wf_workflow = $$tableFields.wf_workflow & sys_metadata;

    /**
     * "Workflow Stage" glide record.
     */
    export type wf_stage = $$tableFields.wf_stage & GlideRecord;

    /**
     * "Workflow Executing Activity" glide record.
     */
    export type wf_executing = $$tableFields.wf_executing & GlideRecord;

    /**
     * Macro glide record.
     */
    export type sys_ui_macro = $$tableFields.sys_ui_macro & sys_metadata;

    /**
     * "Column Renderer" glide record.
     */
    export type column_renderer = $$tableFields.column_renderer & sys_ui_macro;

    /**
     * "Workflow Activity" glide record.
     */
    export type wf_activity = $$tableFields.wf_activity & GlideRecord;

    /**
     * "Relative Duration" glide record.
     */
    export type cmn_relative_duration = $$tableFields.cmn_relative_duration & sys_metadata;

    /**
     * "Workflow Activity History" glide record.
     */
    export type wf_history = $$tableFields.wf_history & GlideRecord;

    /**
     * "Workflow Element Definition" glide record.
     */
    export type wf_element_definition = $$tableFields.wf_element_definition & sys_metadata;

    /**
     * "Activity Variables" glide record.
     */
    export type wf_activity_variable = $$tableFields.wf_activity_variable & var_dictionary;

    /**
     * "Element Provider" glide record.
     */
    export type wf_element_provider = $$tableFields.wf_element_provider & GlideRecord;

    /**
     * "Flow catalog variable model" glide record.
     */
    export type sys_flow_cat_variable_model = $$tableFields.sys_flow_cat_variable_model & GlideRecord;

    /**
     * Interaction glide record.
     * Auto-number Prefix: IMS
     */
    export type interaction = $$tableFields.interaction & GlideRecord;

    /**
     * "Provider Channel Identity" glide record.
     */
    export type sys_cs_provider_application = $$tableFields.sys_cs_provider_application & sys_metadata;

    /**
     * "Interaction Context" glide record.
     */
    export type v_interaction_context = $$tableFields.v_interaction_context & GlideRecord;

    /**
     * "Channel User Profile" glide record.
     */
    export type sys_cs_channel_user_profile = $$tableFields.sys_cs_channel_user_profile & GlideRecord;

    /**
     * "Messaging Channel" glide record.
     */
    export type sys_cs_channel = $$tableFields.sys_cs_channel & sys_metadata;

    /**
     * "Provider Channel" glide record.
     */
    export type sys_cs_provider = $$tableFields.sys_cs_provider & sys_metadata;

    /**
     * Variables glide record.
     */
    export type var_dictionary = $$tableFields.var_dictionary & sys_dictionary;

    /**
     * "Workflow Activity Definition" glide record.
     */
    export type wf_activity_definition = $$tableFields.wf_activity_definition & wf_element_definition;

    /**
     * "Provider Auth" glide record.
     */
    export type provider_auth = $$tableFields.provider_auth & GlideRecord;

    /**
     * "Text Index Group" glide record.
     */
    export type ts_index_group = $$tableFields.ts_index_group & sys_metadata;

    /**
     * Theme glide record.
     */
    export type sp_theme = $$tableFields.sp_theme & sys_metadata;

    /**
     * Instance glide record.
     */
    export type sp_instance = $$tableFields.sp_instance & sys_metadata;

    /**
     * "Instance with Menu" glide record.
     */
    export type sp_instance_menu = $$tableFields.sp_instance_menu & sp_instance;

    /**
     * "Chat Queue" glide record.
     */
    export type chat_queue = $$tableFields.chat_queue & GlideRecord;

    /**
     * "EVAM Definition" glide record.
     */
    export type sys_ux_composite_data = $$tableFields.sys_ux_composite_data & sys_metadata;

    /**
     * "Text Index Configuration" glide record.
     */
    export type ts_configuration = $$tableFields.ts_configuration & sys_metadata;

    /**
     * "Search Application Configuration" glide record.
     */
    export type sys_search_context_config = $$tableFields.sys_search_context_config & sys_metadata;

    /**
     * Page glide record.
     */
    export type sp_page = $$tableFields.sp_page & sys_metadata;

    /**
     * Catalog glide record.
     */
    export type sc_catalog = $$tableFields.sc_catalog & sys_metadata;

    /**
     * "Knowledge Base" glide record.
     */
    export type kb_knowledge_base = $$tableFields.kb_knowledge_base & GlideRecord;

    /**
     * Widget glide record.
     */
    export type sp_widget = $$tableFields.sp_widget & sys_metadata;

    /**
     * "Header | Footer" glide record.
     */
    export type sp_header_footer = $$tableFields.sp_header_footer & sp_widget;

    /**
     * "Service Portal Documentation" glide record.
     */
    export type sp_documentation = $$tableFields.sp_documentation & sys_metadata;

    /**
     * Column glide record.
     */
    export type sp_column = $$tableFields.sp_column & sys_metadata;

    /**
     * Row glide record.
     */
    export type sp_row = $$tableFields.sp_row & sys_metadata;

    /**
     * Container glide record.
     */
    export type sp_container = $$tableFields.sp_container & sys_metadata;

    /**
     * "AI Search Search Profile" glide record.
     */
    export type ais_search_profile = $$tableFields.ais_search_profile & sys_metadata;

    /**
     * "Script Include" glide record.
     */
    export type sys_script_include = $$tableFields.sys_script_include & sys_metadata;

    /**
     * "Data Policy" glide record.
     */
    export type sys_data_policy2 = $$tableFields.sys_data_policy2 & sys_metadata;

    /**
     * "Stage State" glide record.
     */
    export type stage_state = $$tableFields.stage_state & GlideRecord;

    /**
     * "Stockroom Type" glide record.
     */
    export type alm_stockroom_type = $$tableFields.alm_stockroom_type & GlideRecord;

    /**
     * Category glide record.
     */
    export type sc_category = $$tableFields.sc_category & sys_metadata;

    /**
     * Module glide record.
     */
    export type sys_app_module = $$tableFields.sys_app_module & sys_metadata;

    /**
     * "Timeline Page" glide record.
     */
    export type cmn_timeline_page = $$tableFields.cmn_timeline_page & sys_metadata;

    /**
     * "Catalog Renderer" glide record.
     */
    export type sc_renderer = $$tableFields.sc_renderer & sys_metadata;

    /**
     * "Homepage Category Renderer" glide record.
     */
    export type sc_homepage_renderer = $$tableFields.sc_homepage_renderer & sc_renderer;

    /**
     * Report glide record.
     */
    export type sys_report = $$tableFields.sys_report & sys_metadata;

    /**
     * "Flow Block" glide record.
     */
    export type sys_hub_flow_block = $$tableFields.sys_hub_flow_block & sys_metadata;

    /**
     * "Flow Base" glide record.
     */
    export type sys_hub_flow_base = $$tableFields.sys_hub_flow_base & sys_hub_flow_block;

    /**
     * Flow glide record.
     */
    export type sys_hub_flow = $$tableFields.sys_hub_flow & sys_hub_flow_base;

    /**
     * "Action Category" glide record.
     */
    export type sys_hub_category = $$tableFields.sys_hub_category & sys_metadata;

    /**
     * "Color Definition" glide record.
     */
    export type sys_report_color = $$tableFields.sys_report_color & sys_metadata;

    /**
     * "Access Control" glide record.
     */
    export type sys_security_acl = $$tableFields.sys_security_acl & sys_metadata;

    /**
     * "Flow Outputs" glide record.
     */
    export type sys_hub_flow_output = $$tableFields.sys_hub_flow_output & var_dictionary;

    /**
     * "UX Theme Property" glide record.
     */
    export type sys_ux_theme_property = $$tableFields.sys_ux_theme_property & sys_metadata;

    /**
     * "UX Theme Property Schema" glide record.
     */
    export type sys_ux_theme_property_schema = $$tableFields.sys_ux_theme_property_schema & sys_metadata;

    /**
     * "Ordered Item Link" glide record.
     */
    export type sc_ordered_item_link = $$tableFields.sc_ordered_item_link & sys_metadata;

    /**
     * Item glide record.
     */
    export type sc_ic_item_staging = $$tableFields.sc_ic_item_staging & sys_metadata;

    /**
     * "Catalog Template" glide record.
     */
    export type sc_template = $$tableFields.sc_template & sys_metadata;

    /**
     * Topic glide record.
     */
    export type topic = $$tableFields.topic & sys_metadata;

    /**
     * Taxonomy glide record.
     */
    export type taxonomy = $$tableFields.taxonomy & sys_metadata;

    /**
     * Operation glide record.
     */
    export type sys_security_operation = $$tableFields.sys_security_operation & sys_metadata;

    /**
     * Type glide record.
     */
    export type sys_security_type = $$tableFields.sys_security_type & sys_metadata;

    /**
     * "User Criteria" glide record.
     */
    export type user_criteria = $$tableFields.user_criteria & sys_metadata;

    /**
     * Template glide record.
     * Auto-number Prefix: TEMPLATE
     */
    export type sys_template = $$tableFields.sys_template & sys_metadata;

    /**
     * "Map Page" glide record.
     */
    export type cmn_map_page = $$tableFields.cmn_map_page & sys_metadata;

    /**
     * "Map Item" glide record.
     */
    export type cmn_map_item = $$tableFields.cmn_map_item & sys_metadata;

    /**
     * "Map Page Filter" glide record.
     */
    export type cmn_map_filter = $$tableFields.cmn_map_filter & cmn_map_item;

    /**
     * "Portal Page" glide record.
     */
    export type sys_portal_page = $$tableFields.sys_portal_page & sys_metadata;

    /**
     * "Assessment Metric Type" glide record.
     */
    export type asmt_metric_type = $$tableFields.asmt_metric_type & sys_metadata;

    /**
     * "Catalog Variable Set" GlideRecord.
     */
    export type io_set_item = $$tableFields.io_set_item & sys_metadata;

    /**
     * "Catalog Items Catalog" GlideRecord.
     */
    export type sc_cat_item_catalog = $$tableFields.sc_cat_item_catalog & sys_metadata;

    /**
     * "Catalog Item Category" GlideRecord.
     */
    export type sc_cat_item_category = $$tableFields.sc_cat_item_category & sys_metadata;

    /**
     * "Taxonomy Content Configuration" GlideRecord.
     */
    export type taxonomy_content_configuration = $$tableFields.taxonomy_content_configuration & sys_metadata;

    /**
     * "External Link" GlideRecord.
     */
    export type sn_ex_sp_external_link = $$tableFields.sn_ex_sp_external_link & GlideRecord;

    /**
     * "Quick Link" GlideRecord.
     */
    export type sn_ex_sp_quick_link = $$tableFields.sn_ex_sp_quick_link & GlideRecord;

    /**
     * "Connected Content" GlideRecord.
     */
    export type m2m_connected_content = $$tableFields.m2m_connected_content & GlideRecord;

    /**
     * "Not Available for Departments" GlideRecord.
     */
    export type sc_cat_item_dept_no_mtom = $$tableFields.sc_cat_item_dept_no_mtom & sys_metadata;

    /**
     * "Available for Groups" GlideRecord.
     */
    export type sc_cat_item_group_mtom = $$tableFields.sc_cat_item_group_mtom & sys_metadata;

    /**
     * "Approval Type Definition" GlideRecord.
     */
    export type sc_ic_aprvl_type_defn = $$tableFields.sc_ic_aprvl_type_defn & sys_metadata;

    /**
     * "Task Assignment Definition" GlideRecord.
     */
    export type sc_ic_task_assign_defn = $$tableFields.sc_ic_task_assign_defn & sys_metadata;

    /**
     * "Approval Type" GlideRecord.
     */
    export type sc_ic_aprvl_type_defn_staging = $$tableFields.sc_ic_aprvl_type_defn_staging & sys_metadata;

    /**
     * "Approval Definition" GlideRecord.
     */
    export type sc_ic_aprvl_defn = $$tableFields.sc_ic_aprvl_defn & sys_metadata;

    /**
     * "Task Assignment" GlideRecord.
     */
    export type sc_ic_task_assign_defn_staging = $$tableFields.sc_ic_task_assign_defn_staging & sys_metadata;

    /**
     * "Task" GlideRecord.
     */
    export type sc_ic_task_defn_staging = $$tableFields.sc_ic_task_defn_staging & sys_metadata;

    /**
     * "Task Definition" GlideRecord.
     */
    export type sc_ic_task_defn = $$tableFields.sc_ic_task_defn & sys_metadata;

    /**
     * "Remote Instance" GlideRecord.
     */
    export type sys_update_set_source = $$tableFields.sys_update_set_source & GlideRecord;

    /**
     * "Retrieved Update Set" GlideRecord.
     * Extendable: true
     */
    export type sys_remote_update_set = $$tableFields.sys_remote_update_set & GlideRecord;

    /**
     * "Update Set" GlideRecord.
     */
    export type sys_update_set = $$tableFields.sys_update_set & GlideRecord;

    /**
     * "Business Rule" GlideRecord.
     */
    export type sys_script = $$tableFields.sys_script & sys_metadata;

    /**
     * "Signature" GlideRecord.
     */
    export type asmt_signature = $$tableFields.asmt_signature & sys_metadata;

    /**
     * "Assessment Metric" GlideRecord.
     */
    export type asmt_metric = $$tableFields.asmt_metric & sys_metadata;

    /**
     * "Metric Category" GlideRecord.
     */
    export type asmt_metric_category = $$tableFields.asmt_metric_category & sys_metadata;

    /**
     * "Custom Metric" GlideRecord.
     */
    export type asmt_custom_metric = $$tableFields.asmt_custom_metric & sys_metadata;

    /**
     * "Conversation Server Field Script Validator" GlideRecord.
     */
    export type sys_cs_field_script_validator = $$tableFields.sys_cs_field_script_validator & sys_metadata;

    /**
     * "Schedule Item" GlideRecord.
     */
    export type sys_trigger = $$tableFields.sys_trigger & GlideRecord;

    /**
     * "Rollback Context" GlideRecord.
     * Auto-number Prefix: BAK
     */
    export type sys_rollback_context = $$tableFields.sys_rollback_context & GlideRecord;

    /**
     * "Node State" GlideRecord.
     */
    export type sys_cluster_state = $$tableFields.sys_cluster_state & GlideRecord;

    /**
     * "Node Type" GlideRecord.
     */
    export type sys_node_type = $$tableFields.sys_node_type & sys_metadata;

    /**
     * "Node stats" GlideRecord.
     */
    export type sys_cluster_node_stats = $$tableFields.sys_cluster_node_stats & GlideRecord;

    /**
     * "Sys Job" GlideRecord.
     */
    export type sys_job = $$tableFields.sys_job & sys_metadata;

    /**
     * "UI Action" GlideRecord.
     */
    export type sys_ui_action = $$tableFields.sys_ui_action & sys_metadata;

    /**
     * "Other Schedule" GlideRecord.
     */
    export type cmn_other_schedule = $$tableFields.cmn_other_schedule & GlideRecord;

    /**
     * "Assessment Template Definition" GlideRecord.
     * Extendable: true
     */
    export type asmt_template_definition = $$tableFields.asmt_template_definition & sys_metadata;

    /**
     * "REST Message" GlideRecord.
     */
    export type sys_rest_message = $$tableFields.sys_rest_message & sys_metadata;

    /**
     * "Protocol Profile" GlideRecord.
     */
    export type sys_protocol_profile = $$tableFields.sys_protocol_profile & GlideRecord;

    /**
     * "X.509 Certificate" GlideRecord.
     */
    export type sys_certificate = $$tableFields.sys_certificate & GlideRecord;

    /**
     * "Authentication Configuration" GlideRecord.
     * Extendable: true
     */
    export type sys_auth_profile = $$tableFields.sys_auth_profile & sys_metadata;

    /**
     * "Basic Auth Configuration" GlideRecord.
     */
    export type sys_auth_profile_basic = $$tableFields.sys_auth_profile_basic & sys_auth_profile;

    /**
     * "Oauth Entity Profile" GlideRecord.
     */
    export type oauth_entity_profile = $$tableFields.oauth_entity_profile & sys_metadata;

    /**
     * "Saml2 Assertion Producer" GlideRecord.
     */
    export type saml2_assertion_producer = $$tableFields.saml2_assertion_producer & sys_metadata;

    /**
     * "Oauth Entity" GlideRecord.
     * Extendable: true
     */
    export type oauth_entity = $$tableFields.oauth_entity & sys_metadata;

    /**
     * "Jwt Provider" GlideRecord.
     */
    export type jwt_provider = $$tableFields.jwt_provider & sys_metadata;

    /**
     * "JWT Keys" GlideRecord.
     */
    export type jwt_keystore_aliases = $$tableFields.jwt_keystore_aliases & sys_metadata;

    /**
     * "HTTP Method" GlideRecord.
     */
    export type sys_rest_message_fn = $$tableFields.sys_rest_message_fn & sys_metadata;

    /**
     * "Context" GlideRecord.
     */
    export type sys_cs_virtual_agent_context = $$tableFields.sys_cs_virtual_agent_context & sys_metadata;

    /**
     * "Chat Setup" GlideRecord.
     */
    export type sys_cs_live_agent_setup = $$tableFields.sys_cs_live_agent_setup & sys_metadata;

    /**
     * "Application Menu" GlideRecord.
     */
    export type sys_app_application = $$tableFields.sys_app_application & sys_metadata;

    /**
     * "Menu Category" GlideRecord.
     */
    export type sys_app_category = $$tableFields.sys_app_category & sys_metadata;

    /**
     * "Report Source" GlideRecord.
     */
    export type sys_report_source = $$tableFields.sys_report_source & sys_metadata;

    /**
     * "Report Drillown" GlideRecord.
     */
    export type sys_report_drill = $$tableFields.sys_report_drill & sys_report;

    /**
     * "PDF Page Header Footer Template" GlideRecord.
     */
    export type sys_report_page_hdrftr = $$tableFields.sys_report_page_hdrftr & sys_metadata;

    /**
     * "Map Source" GlideRecord.
     */
    export type sys_report_map_source = $$tableFields.sys_report_map_source & GlideRecord;

    /**
     * "Report Map Types" GlideRecord.
     */
    export type sys_report_map_type = $$tableFields.sys_report_map_type & sys_metadata;

    /**
     * "Mapping group" GlideRecord.
     */
    export type sys_report_map_source_mapping = $$tableFields.sys_report_map_source_mapping & GlideRecord;

    /**
     * "Report Maps" GlideRecord.
     */
    export type sys_report_map = $$tableFields.sys_report_map & GlideRecord;

    /**
     * "UI View" GlideRecord.
     */
    export type sys_ui_view = $$tableFields.sys_ui_view & sys_metadata;

    /**
     * "Import Table" GlideRecord.
     */
    export type sys_report_import_table = $$tableFields.sys_report_import_table & GlideRecord;

    /**
     * "Chart color scheme" GlideRecord.
     */
    export type pa_chart_color_schemes = $$tableFields.pa_chart_color_schemes & sys_metadata;

    /**
     * "Software Model" GlideRecord.
     */
    export type cmdb_software_product_model = $$tableFields.cmdb_software_product_model & cmdb_model;

    /**
     * "Software License Calculation" GlideRecord.
     */
    export type cmdb_sw_license_calculation = $$tableFields.cmdb_sw_license_calculation & GlideRecord;

    /**
     * "Task Relationship Type" GlideRecord.
     */
    export type task_rel_type = $$tableFields.task_rel_type & sys_metadata;

    /**
     * "Agile Filter Definition" GlideRecord.
     * Extendable: true
     */
    export type agile_filter_definition = $$tableFields.agile_filter_definition & GlideRecord;

    /**
     * "Personal backlog" GlideRecord.
     */
    export type backlog_definition = $$tableFields.backlog_definition & agile_filter_definition;

    /**
     * "Defect" GlideRecord.
     */
    export type rm_defect = $$tableFields.rm_defect & rm_feature;

    /**
     * "Enhancement" GlideRecord.
     */
    export type rm_enhancement = $$tableFields.rm_enhancement & rm_feature;

    /**
     * "Epic" GlideRecord.
     */
    export type rm_epic = $$tableFields.rm_epic & rm_feature;

    /**
     * "Release" GlideRecord.
     * Extendable: true
     */
    export type rm_release = $$tableFields.rm_release & planned_task;

    /**
     * "Scrum release" GlideRecord.
     */
    export type rm_release_scrum = $$tableFields.rm_release_scrum & rm_release;

    /**
     * "Team" GlideRecord.
     */
    export type scrum_pp_team = $$tableFields.scrum_pp_team & GlideRecord;

    /**
     * "Sprint" GlideRecord.
     */
    export type rm_sprint = $$tableFields.rm_sprint & rm_release;

    /**
     * "Theme" GlideRecord.
     */
    export type scrum_theme = $$tableFields.scrum_theme & GlideRecord;

    /**
     * "Business Calendar Entry Name" GlideRecord.
     */
    export type business_calendar_span_name = $$tableFields.business_calendar_span_name & sys_metadata;

    /**
     * "Version" GlideRecord.
     */
    export type wf_versionable = $$tableFields.wf_versionable & GlideRecord;

    /**
     * "Service Portal" GlideRecord.
     */
    export type sp_portal = $$tableFields.sp_portal & sys_metadata;

    /**
     * "Assessment Metric Template" GlideRecord.
     * Auto-number Prefix: ATP
     * Extendable: true
     */
    export type asmt_template = $$tableFields.asmt_template & sys_metadata;

    /**
     * "MID Server" GlideRecord.
     * Auto-number Prefix: MID_
     */
    export type ecc_agent = $$tableFields.ecc_agent & GlideRecord;

    /**
     * "Mid Server Profile" GlideRecord.
     * Auto-number Prefix: PROFILE
     */
    export type mid_server_profile = $$tableFields.mid_server_profile & GlideRecord;

    /**
     * "Team name" GlideRecord.
     */
    export type scrum_pp_team_name = $$tableFields.scrum_pp_team_name & GlideRecord;

    /**
     * "CI Relationship Type" GlideRecord.
     */
    export type cmdb_rel_type = $$tableFields.cmdb_rel_type & sys_metadata;

    /**
     * "CI Relationship" GlideRecord.
     */
    export type cmdb_rel_ci = $$tableFields.cmdb_rel_ci & GlideRecord;

    /**
     * "Virtual Machine Object" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_vm_object = $$tableFields.cmdb_ci_vm_object & cmdb_ci;

    /**
     * "VMware vCenter Object" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_vcenter_object = $$tableFields.cmdb_ci_vcenter_object & cmdb_ci_vm_object;

    /**
     * "Application" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_appl = $$tableFields.cmdb_ci_appl & cmdb_ci;

    /**
     * "VMware vCenter Instance" GlideRecord.
     */
    export type cmdb_ci_vcenter = $$tableFields.cmdb_ci_vcenter & cmdb_ci_appl;

    /**
     * "Running Process" GlideRecord.
     */
    export type cmdb_running_process = $$tableFields.cmdb_running_process & GlideRecord;

    /**
     * "Cloud Network" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_network = $$tableFields.cmdb_ci_network & cmdb_ci_vcenter_object;

    /**
     * "Classification" GlideRecord.
     * Extendable: true
     */
    export type discovery_classy = $$tableFields.discovery_classy & sys_metadata;

    /**
     * "Computer" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_computer = $$tableFields.cmdb_ci_computer & cmdb_ci_hardware;

    /**
     * "Server" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_server = $$tableFields.cmdb_ci_server & cmdb_ci_computer;

    /**
     * "Cluster" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_cluster = $$tableFields.cmdb_ci_cluster & cmdb_ci;

    /**
     * "IP Network" GlideRecord.
     */
    export type cmdb_ci_ip_network = $$tableFields.cmdb_ci_ip_network & cmdb_ci;

    /**
     * "Discovery Status" GlideRecord.
     * Auto-number Prefix: DIS
     */
    export type discovery_status = $$tableFields.discovery_status & GlideRecord;

    /**
     * "Scheduled Job" GlideRecord.
     * Extendable: true
     */
    export type sysauto = $$tableFields.sysauto & sys_metadata;

    /**
     * "Scheduled Script Execution" GlideRecord.
     * Extendable: true
     */
    export type sysauto_script = $$tableFields.sysauto_script & sysauto;

    /**
     * "MID Server Cluster" GlideRecord.
     */
    export type ecc_agent_cluster = $$tableFields.ecc_agent_cluster & GlideRecord;

    /**
     * "Hardware" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_hardware = $$tableFields.cmdb_ci_hardware & cmdb_ci;

    /**
     * "Network Gear" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_netgear = $$tableFields.cmdb_ci_netgear & cmdb_ci_hardware;

    /**
     * "Network Adapter" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_network_adapter = $$tableFields.cmdb_ci_network_adapter & cmdb_ci;

    /**
     * "Process Classification" GlideRecord.
     */
    export type discovery_classy_proc = $$tableFields.discovery_classy_proc & discovery_classy;

    /**
     * "Rubrik Cluster" GlideRecord.
     */
    export type cmdb_ci_rubrik_cluster = $$tableFields.cmdb_ci_rubrik_cluster & cmdb_ci_cluster;

    /**
     * "Discovery Schedule" GlideRecord.
     * Extendable: true
     */
    export type discovery_schedule = $$tableFields.discovery_schedule & sysauto_script;

    /**
     * "Company" GlideRecord.
     */
    export type core_company = $$tableFields.core_company & GlideRecord;

    /**
     * "Base Theme" GlideRecord.
     */
    export type sys_ui_base_theme = $$tableFields.sys_ui_base_theme & sys_metadata;

    /**
     * "Theme" GlideRecord.
     */
    export type sys_ui_theme = $$tableFields.sys_ui_theme & sys_metadata;

    /**
     * "Department" GlideRecord.
     */
    export type cmn_department = $$tableFields.cmn_department & GlideRecord;

    /**
     * "Location" GlideRecord.
     */
    export type cmn_location = $$tableFields.cmn_location & GlideRecord;

    /**
     * "Sys Phone Territory" GlideRecord.
     */
    export type sys_phone_territory = $$tableFields.sys_phone_territory & GlideRecord;

    /**
     * "User" GlideRecord.
     */
    export type sys_user = $$tableFields.sys_user & GlideRecord;

    /**
     * "Notification Device" GlideRecord.
     */
    export type cmn_notif_device = $$tableFields.cmn_notif_device & GlideRecord;

    /**
     * "Notification Device Variable" GlideRecord.
     */
    export type cmn_notif_device_variable = $$tableFields.cmn_notif_device_variable & GlideRecord;

    /**
     * "Tag" GlideRecord.
     */
    export type label = $$tableFields.label & GlideRecord;

    /**
     * "Label Entry" GlideRecord.
     */
    export type label_entry = $$tableFields.label_entry & GlideRecord;

    /**
     * "Label Table" GlideRecord.
     */
    export type label_table = $$tableFields.label_table & GlideRecord;

    /**
     * "Push Application" GlideRecord.
     */
    export type sys_push_application = $$tableFields.sys_push_application & sys_metadata;

    /**
     * "Push Google OAuth" GlideRecord.
     */
    export type sys_push_auth_fcm = $$tableFields.sys_push_auth_fcm & $$GlideRecord.sys_metadata;

    /**
     * "Push Token Based Auth" GlideRecord.
     */
    export type sys_push_auth = $$tableFields.sys_push_auth & $$GlideRecord.sys_metadata;

    /**
     * "Notification Service Provider" GlideRecord.
     */
    export type cmn_notif_service_provider = $$tableFields.cmn_notif_service_provider & sys_metadata;

    /**
     * "LDAP Server" GlideRecord.
     */
    export type ldap_server_config = $$tableFields.ldap_server_config & sys_metadata;

    /**
     * "Import Export Map" GlideRecord.
     * Extendable: true
     */
    export type sys_impex_map = $$tableFields.sys_impex_map & sys_metadata;

    /**
     * "Data Source" GlideRecord.
     */
    export type sys_data_source = $$tableFields.sys_data_source & sys_metadata;

    /**
     * "CIs Discovery Configuration" GlideRecord.
     * Extendable: true
     */
    export type discovery_accel_config = $$tableFields.discovery_accel_config & GlideRecord;

    /**
     * "Discovery Behavior" GlideRecord.
     */
    export type discovery_behavior = $$tableFields.discovery_behavior & sys_metadata;

    /**
     * "Connection \u0026 Credential Aliases" GlideRecord.
     */
    export type sys_alias = $$tableFields.sys_alias & sys_metadata;

    /**
     * "Vendor Type" GlideRecord.
     */
    export type vendor_type = $$tableFields.vendor_type & GlideRecord;

    /**
     * "Action Type Base" GlideRecord.
     * Extendable: true
     */
    export type sys_hub_action_type_base = $$tableFields.sys_hub_action_type_base & sys_metadata;

    /**
     * "Action Type" GlideRecord.
     */
    export type sys_hub_action_type_definition = $$tableFields.sys_hub_action_type_definition & sys_hub_action_type_base;

    /**
     * "LDAP OU Definition" GlideRecord.
     */
    export type ldap_ou_config = $$tableFields.ldap_ou_config & sys_metadata;

    /**
     * "Menu List" GlideRecord.
     */
    export type sys_perspective = $$tableFields.sys_perspective & sys_metadata;

    /**
     * "Building" GlideRecord.
     */
    export type cmn_building = $$tableFields.cmn_building & GlideRecord;

    /**
     * "Role" GlideRecord.
     */
    export type sys_user_role = $$tableFields.sys_user_role & sys_metadata;

    /**
     * "Group" GlideRecord.
     */
    export type sys_user_group = $$tableFields.sys_user_group & GlideRecord;

    /**
     * "Group Member" GlideRecord.
     */
    export type sys_user_grmember = $$tableFields.sys_user_grmember & GlideRecord;

    /**
     * "Number" GlideRecord.
     */
    export type sys_number = $$tableFields.sys_number & sys_metadata;

    /**
     * "Table" GlideRecord.
     */
    export type sys_db_object = $$tableFields.sys_db_object & sys_metadata;

    /**
     * "Dictionary Entry" GlideRecord.
     * Extendable: true
     */
    export type sys_dictionary = $$tableFields.sys_dictionary & sys_metadata;

    /**
     * "Dynamic Filter Options" GlideRecord.
     */
    export type sys_filter_option_dynamic = $$tableFields.sys_filter_option_dynamic & sys_metadata;

    /**
     * "Field class" GlideRecord.
     */
    export type sys_glide_object = $$tableFields.sys_glide_object & sys_metadata;

    /**
     * "Connection \u0026 Credential Templates" GlideRecord.
     */
    export type sys_alias_templates = $$tableFields.sys_alias_templates & sys_metadata;

    /**
     * "Retry Policy" GlideRecord.
     */
    export type sys_retry_policy = $$tableFields.sys_retry_policy & sys_metadata;

    /**
     * "Action Outputs" GlideRecord.
     */
    export type sys_hub_action_output = $$tableFields.sys_hub_action_output & var_dictionary;

    /**
     * "Group Type" GlideRecord.
     */
    export type sys_user_group_type = $$tableFields.sys_user_group_type & GlideRecord;

    /**
     * "User Role" GlideRecord.
     */
    export type sys_user_has_role = $$tableFields.sys_user_has_role & GlideRecord;

    /**
     * "Contained Role" GlideRecord.
     */
    export type sys_user_role_contains = $$tableFields.sys_user_role_contains & sys_metadata;

    /**
     * "Group Role" GlideRecord.
     */
    export type sys_group_has_role = $$tableFields.sys_group_has_role & GlideRecord;

    /**
     * "Choice" GlideRecord.
     */
    export type sys_choice = $$tableFields.sys_choice & GlideRecord;

    /**
     * "Choice Set" GlideRecord.
     */
    export type sys_choice_set = $$tableFields.sys_choice_set & sys_metadata;

    /**
     * "Question" GlideRecord.
     * Extendable: true
     */
    export type question = $$tableFields.question & sys_metadata;

    /**
     * "UI Page" GlideRecord.
     */
    export type sys_ui_page = $$tableFields.sys_ui_page & sys_metadata;

    /**
     * "Variable" GlideRecord.
     * Extendable: true
     */
    export type item_option_new = $$tableFields.item_option_new & question;

    /**
     * "UX Macroponent Type" GlideRecord.
     */
    export type sys_ux_macroponent_type = $$tableFields.sys_ux_macroponent_type & sys_metadata;

    /**
     * "UX Macroponent Definition" GlideRecord.
     */
    export type sys_ux_macroponent = $$tableFields.sys_ux_macroponent & sys_metadata;

    /**
     * "UX Extension Point" GlideRecord.
     */
    export type sys_ux_extension_point = $$tableFields.sys_ux_extension_point & sys_metadata;

    /**
     * "UX Controller" GlideRecord.
     */
    export type sys_ux_controller = $$tableFields.sys_ux_controller & sys_metadata;

    /**
     * "UX Component Definition" GlideRecord.
     */
    export type sys_ux_lib_component = $$tableFields.sys_ux_lib_component & sys_metadata;

    /**
     * "Action Inputs" GlideRecord.
     */
    export type sys_hub_action_input = $$tableFields.sys_hub_action_input & var_dictionary;

    /**
     * "Action Model Definition" GlideRecord.
     */
    export type sys_declarative_action_model_definition = $$tableFields.sys_declarative_action_model_definition & sys_metadata;

    /**
     * "UX Event" GlideRecord.
     */
    export type sys_ux_event = $$tableFields.sys_ux_event & sys_metadata;

    /**
     * "UX Interface" GlideRecord.
     */
    export type sys_ux_interface = $$tableFields.sys_ux_interface & sys_metadata;

    /**
     * "UX Source Code" GlideRecord.
     */
    export type sys_ux_lib_source_script = $$tableFields.sys_ux_lib_source_script & sys_metadata;

    /**
     * "UX Children Layout" GlideRecord.
     */
    export type sys_ux_children_layout = $$tableFields.sys_ux_children_layout & sys_metadata;

    /**
     * "UX Children Definition" GlideRecord.
     */
    export type sys_ux_children = $$tableFields.sys_ux_children & sys_metadata;

    /**
     * "Macroponent Priority" GlideRecord.
     */
    export type sys_ux_macroponent_priority = $$tableFields.sys_ux_macroponent_priority & sys_metadata;

    /**
     * "Variable Category" GlideRecord.
     */
    export type item_option_category = $$tableFields.item_option_category & sys_metadata;

    /**
     * "Data Lookup Definitions" GlideRecord.
     */
    export type dl_definition = $$tableFields.dl_definition & sys_metadata;

    /**
     * "Catalog Data Lookup Definitions" GlideRecord.
     */
    export type catalog_dl_definition = $$tableFields.catalog_dl_definition & dl_definition;

    /**
     * "Client Script" GlideRecord.
     */
    export type sys_script_client = $$tableFields.sys_script_client & sys_metadata;

    /**
     * "Catalog Client Scripts" GlideRecord.
     */
    export type catalog_script_client = $$tableFields.catalog_script_client & sys_script_client;

    /**
     * "" GlideRecord.
     */
    export type expert_script_client = $$tableFields.expert_script_client & sys_script_client

    /**
     * "Variable Set" GlideRecord.
     * Extendable: true
     */
    export type item_option_new_set = $$tableFields.item_option_new_set & sys_metadata;

    /**
     * "Flow catalog variable" GlideRecord.
     */
    export type sys_flow_cat_variable = $$tableFields.sys_flow_cat_variable & item_option_new;

    /**
     * "Workflow SC Variable" GlideRecord.
     */
    export type wf_variable = $$tableFields.wf_variable & item_option_new;

    /**
     * "Producer Set" GlideRecord.
     */
    export type item_option_new_producer_set = $$tableFields.item_option_new_producer_set & item_option_new_set;

    /**
     * "Decision" GlideRecord.
     */
    export type sys_decision_question = $$tableFields.sys_decision_question & sys_metadata;

    /**
     * "Help Question" GlideRecord.
     */
    export type help_question = $$tableFields.help_question & sys_metadata;

    /**
     * "Decision Table" GlideRecord.
     * Extendable: true
     */
    export type sys_decision = $$tableFields.sys_decision & sys_metadata;

    /**
     * "Help Content" GlideRecord.
     */
    export type help_content = $$tableFields.help_content & sys_metadata;

    /**
     * "UX Type" GlideRecord.
     */
    export type sys_ux_type = $$tableFields.sys_ux_type & sys_metadata;

    /**
     * "Help Guidance Step" GlideRecord.
     */
    export type help_guidance_step = $$tableFields.help_guidance_step & sys_metadata;

    /**
     * "Guidance" GlideRecord.
     */
    export type help_guidance = $$tableFields.help_guidance & sys_metadata;

    /**
     * "Embedded Help" GlideRecord.
     */
    export type sys_embedded_help_content = $$tableFields.sys_embedded_help_content & sys_metadata;

    /**
     * "Password Reset Question" GlideRecord.
     */
    export type pwd_question = $$tableFields.pwd_question & sys_metadata;

    /**
     * "Variable Layout" GlideRecord.
     */
    export type item_option_layout = $$tableFields.item_option_layout & question;

    /**
     * "Wizard Variable" GlideRecord.
     */
    export type expert_variable = $$tableFields.expert_variable & question;

    /**
     * "Wizard" GlideRecord.
     */
    export type expert = $$tableFields.expert & sys_metadata;

    /**
     * "Wizard Panel" GlideRecord.
     * Extendable: true
     */
    export type expert_panel = $$tableFields.expert_panel & sys_metadata;

    /**
     * "Wizard Panel Variable" GlideRecord.
     * Extendable: true
     */
    export type expert_panel_variable = $$tableFields.expert_panel_variable & sys_metadata;

    /**
     * "Catalog Wizard Question" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard_question = $$tableFields.sc_wizard_question & sys_metadata;

    /**
     * "Catalog Wizard Section" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard_section = $$tableFields.sc_wizard_section & sys_metadata;

    /**
     * "Catalog Wizard Step" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard_step = $$tableFields.sc_wizard_step & sys_metadata;

    /**
     * "Catalog Wizard Feedback" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard_feedback = $$tableFields.sc_wizard_feedback & sys_metadata;

    /**
     * "Catalog Wizard" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard = $$tableFields.sc_wizard & sys_metadata;

    /**
     * "Wizard Configuration" GlideRecord.
     * Extendable: true
     */
    export type cxs_wizard_config = $$tableFields.cxs_wizard_config & cxs_ui_config_base;

    /**
     * "Record Producer Configuration" GlideRecord.
     * Extendable: true
     */
    export type cxs_rp_config = $$tableFields.cxs_rp_config & cxs_ui_config_base;

    /**
     * "Base UI Configuration" GlideRecord.
     * Extendable: true
     */
    export type cxs_ui_config_base = $$tableFields.cxs_ui_config_base & sys_metadata;

    /**
     * "Search Context" GlideRecord.
     */
    export type cxs_context_config = $$tableFields.cxs_context_config & sys_metadata;

    /**
     * "Resource Configuration" GlideRecord.
     */
    export type cxs_res_context_config = $$tableFields.cxs_res_context_config & sys_metadata;

    /**
     * "Search Resource Context Property" GlideRecord.
     */
    export type cxs_res_context_config_prop = $$tableFields.cxs_res_context_config_prop & sys_metadata;

    /**
     * "Table Configuration" GlideRecord.
     */
    export type cxs_table_config = $$tableFields.cxs_table_config & cxs_ui_config_base;

    /**
     * "Search Field" GlideRecord.
     */
    export type cxs_table_field_config = $$tableFields.cxs_table_field_config & sys_metadata;

    /**
     * "Email Configuration" GlideRecord.
     */
    export type cxs_table_email_config = $$tableFields.cxs_table_email_config & sys_metadata;
    /**
     * "Filter Configuration" GlideRecord.
     */
    export type cxs_table_fltr_config = $$tableFields.cxs_table_fltr_config & cxs_fltr_config;

    /**
     * "Filter Condition" GlideRecord.
     */
    export type cxs_table_fltr_condition = $$tableFields.cxs_table_fltr_condition & cxs_fltr_condition;

    /**
     * "Searcher" GlideRecord.
     */
    export type cxs_searcher_config = $$tableFields.cxs_searcher_config & sys_metadata;

    /**
     * "Search Action Configuration" GlideRecord.
     */
    export type cxs_ui_action_config = $$tableFields.cxs_ui_action_config & sys_metadata;

    /**
     * "Catalog Portal Page" GlideRecord.
     */
    export type sc_catalog_view_mtom = $$tableFields.sc_catalog_view_mtom & sys_metadata;

    /**
     * "Price" GlideRecord.
     */
    export type fx_price = $$tableFields.fx_price & GlideRecord;

    /**
     * "Catalog Site" GlideRecord.
     */
    export type sc_catalog_site = $$tableFields.sc_catalog_site & sys_metadata;

    /**
     * "Available Search Resource" GlideRecord.
     */
    export type cxs_search_resource = $$tableFields.cxs_search_resource & sys_metadata;

    /**
     * "Search Resource" GlideRecord.
     */
    export type cxs_search_res_config = $$tableFields.cxs_search_res_config & sys_metadata;

    /**
     * "Search Resource Property" GlideRecord.
     */
    export type cxs_search_res_config_prop = $$tableFields.cxs_search_res_config_prop & sys_metadata;

    /**
     * "Search Actions" GlideRecord.
     * Extendable: true
     */
    export type cxs_ui_action = $$tableFields.cxs_ui_action & sys_metadata;

    /**
     * "Record Producer Configuration" GlideRecord.
     * Extendable: true
     */
    export type aisa_rp_config = $$tableFields.aisa_rp_config & sys_metadata;

    /**
     * "Wizard Action Configuration Mapping" GlideRecord.
     * Extendable: true
     */
    export type sc_wizard_action_config_mapping = $$tableFields.sc_wizard_action_config_mapping & sys_metadata;

    /**
     * "Wizard Action Configuration" GlideRecord.
     */
    export type sc_wizard_action_config = $$tableFields.sc_wizard_action_config & sys_metadata;

    /**
     * "Action Assignment" GlideRecord.
     */
    export type sys_declarative_action_assignment = $$tableFields.sys_declarative_action_assignment & sys_metadata;

    /**
     * "Action Definition" GlideRecord.
     */
    export type sys_declarative_action_definition = $$tableFields.sys_declarative_action_definition & sys_metadata;

    /**
     * "Action Payload Definition" GlideRecord.
     */
    export type sys_declarative_action_payload_definition = $$tableFields.sys_declarative_action_payload_definition & sys_metadata;

    /**
     * "Declarative Action Render Mode" GlideRecord.
     */
    export type sys_declarative_action_render_mode = $$tableFields.sys_declarative_action_render_mode & sys_metadata;

    /**
     * "Declarative Action Group" GlideRecord.
     */
    export type sys_declarative_action_group = $$tableFields.sys_declarative_action_group & GlideRecord;

    /**
     * "Design System Icons" GlideRecord.
     */
    export type st_sys_design_system_icon = $$tableFields.st_sys_design_system_icon & GlideRecord;

    /**
     * "Workspace" GlideRecord.
     */
    export type sys_aw_master_config = $$tableFields.sys_aw_master_config & sys_metadata;

    /**
     * "UX App Shell UI" GlideRecord.
     */
    export type sys_ux_page = $$tableFields.sys_ux_page & sys_metadata;

    /**
     * "UX Page Element" GlideRecord.
     */
    export type sys_ux_page_element = $$tableFields.sys_ux_page_element & sys_metadata;

    /**
     * "UX Content Picker" GlideRecord.
     */
    export type sys_ux_content_picker = $$tableFields.sys_ux_content_picker & sys_ux_page_element;

    /**
     * "UX Content Placeholder" GlideRecord.
     */
    export type sys_ux_content_placeholder_elem = $$tableFields.sys_ux_content_placeholder_elem & sys_ux_page_element;

    /**
     * "UX Custom Content Extension" GlideRecord.
     */
    export type sys_ux_custom_content_root_elem = $$tableFields.sys_ux_custom_content_root_elem & sys_ux_page_element;

    /**
     * "UX Content Picker Slot" GlideRecord.
     */
    export type sys_ux_lib_content_picker_slot = $$tableFields.sys_ux_lib_content_picker_slot & sys_metadata;

    /**
     * "Children Slot" GlideRecord.
     */
    export type sys_ux_children_slot = $$tableFields.sys_ux_children_slot & sys_metadata;

    /**
     * "UX Application" GlideRecord.
     */
    export type sys_ux_page_registry = $$tableFields.sys_ux_page_registry & sys_metadata;

    /**
     * "UX Parent Application" GlideRecord.
     */
    export type sys_ux_app = $$tableFields.sys_ux_app & sys_metadata;

    /**
     * "UX Theme" GlideRecord.
     */
    export type sys_ux_theme = $$tableFields.sys_ux_theme & sys_metadata;

    /**
     * "Workspace Global Search Configuration" GlideRecord.
     */
    export type sys_aw_global_search_config = $$tableFields.sys_aw_global_search_config & sys_metadata;

    /**
     * "Filter Condition" GlideRecord.
     * Extendable: true
     */
    export type cxs_rp_fltr_condition = $$tableFields.cxs_rp_fltr_condition & cxs_fltr_condition;

    /**
     * "Filter Condition" GlideRecord.
     * Extendable: true
     */
    export type cxs_fltr_condition = $$tableFields.cxs_fltr_condition & sys_metadata;

    /**
     * "Filter Configuration" GlideRecord.
     * Extendable: true
     */
    export type cxs_rp_fltr_config = $$tableFields.cxs_rp_fltr_config & cxs_fltr_config;

    /**
     * "Filter Configuration" GlideRecord.
     * Extendable: true
     */
    export type cxs_fltr_config = $$tableFields.cxs_fltr_config & sys_metadata;

    /**
     * "Catalog Template Detail" GlideRecord.
     * Extendable: true
     */
    export type sc_template_detail = $$tableFields.sc_template_detail & sys_metadata;

    /**
     * "Banner Step" GlideRecord.
     */
    export type expert_banner_step = $$tableFields.expert_banner_step & sys_metadata;

    /**
     * "Question" GlideRecord.
     */
    export type sc_ic_question = $$tableFields.sc_ic_question & sys_metadata;

    /**
     * "Section" GlideRecord.
     */
    export type sc_ic_section = $$tableFields.sc_ic_section & sys_metadata;

    /**
     * "Column" GlideRecord.
     */
    export type sc_ic_column = $$tableFields.sc_ic_column & sys_metadata;

    /**
     * "Question Choice" GlideRecord.
     */
    export type question_choice = $$tableFields.question_choice & sys_metadata;

    /**
     * "Question Choice" GlideRecord.
     */
    export type sc_ic_question_choice = $$tableFields.sc_ic_question_choice & sys_metadata;

    /**
     * "Question Class" GlideRecord.
     */
    export type sc_ic_question_class = $$tableFields.sc_ic_question_class & sys_metadata;

    /**
     * "Question Type" GlideRecord.
     */
    export type sc_ic_question_type = $$tableFields.sc_ic_question_type & sys_metadata;

    /**
     * "Question Type Choice" GlideRecord.
     */
    export type sc_ic_question_type_choice = $$tableFields.sc_ic_question_type_choice & sys_metadata;

    /**
     * "Assessment Instance Question" GlideRecord.
     */
    export type asmt_assessment_instance_question = $$tableFields.asmt_assessment_instance_question & GlideRecord;

    /**
     * "Assessment Metric Type Group" GlideRecord.
     */
    export type asmt_metric_type_group = $$tableFields.asmt_metric_type_group & GlideRecord;

    /**
     * "Assessment Metric Definition" GlideRecord.
     */
    export type asmt_metric_definition = $$tableFields.asmt_metric_definition & sys_metadata;

    /**
     * "Assessment Instance" GlideRecord.
     * Auto-number Prefix: AINST
     */
    export type asmt_assessment_instance = $$tableFields.asmt_assessment_instance & GlideRecord;

    /**
     * "Trigger Condition" GlideRecord.
     */
    export type asmt_condition = $$tableFields.asmt_condition & sys_metadata;

    /**
     * "Assessment Group" GlideRecord.
     * Auto-number Prefix: ASG
     */
    export type asmt_assessment = $$tableFields.asmt_assessment & GlideRecord;

    /**
     * "Assessable Record" GlideRecord.
     */
    export type asmt_assessable_record = $$tableFields.asmt_assessable_record & GlideRecord;

    /**
     * "Live Group Profile" GlideRecord.
     */
    export type live_group_profile = $$tableFields.live_group_profile & GlideRecord;

    /**
     * "Multi Row Question Answer" GlideRecord.
     */
    export type sc_multi_row_question_answer = $$tableFields.sc_multi_row_question_answer & GlideRecord;

    /**
     * "Options" GlideRecord.
     */
    export type sc_item_option = $$tableFields.sc_item_option & GlideRecord;

    /**
     * "Item Option" GlideRecord.
     */
    export type sc_cat_item_option = $$tableFields.sc_cat_item_option & sys_metadata;

    /**
     * "Item" GlideRecord.
     */
    export type sc_cart_item = $$tableFields.sc_cart_item & GlideRecord;

    /**
     * "Shopping Cart" GlideRecord.
     */
    export type sc_cart = $$tableFields.sc_cart & GlideRecord;

    /**
     * "Question Answer" GlideRecord.
     */
    export type question_answer = $$tableFields.question_answer & GlideRecord;

    /**
     * "Password Reset Active Question" GlideRecord.
     */
    export type pwd_active_question = $$tableFields.pwd_active_question & GlideRecord;

    /**
     * "Social Q\u0026A Question" GlideRecord.
     */
    export type kb_social_qa_question = $$tableFields.kb_social_qa_question & GlideRecord;

    /**
     * "Social Q\u0026A Answer" GlideRecord.
     */
    export type kb_social_qa_answer = $$tableFields.kb_social_qa_answer & GlideRecord;

    /**
     * "Knowledge Category" GlideRecord.
     */
    export type kb_category = $$tableFields.kb_category & GlideRecord;

    /**
     * "Live Profile" GlideRecord.
     */
    export type live_profile = $$tableFields.live_profile & GlideRecord;

    /**
     * "Attachment" GlideRecord.
     */
    export type sys_attachment = $$tableFields.sys_attachment & GlideRecord;

    /**
     * "Attachment Document" GlideRecord.
     */
    export type sys_attachment_doc = $$tableFields.sys_attachment_doc & GlideRecord;

    /**
     * "Attachment Document V2" GlideRecord.
     */
    export type sys_attachment_doc_v2 = $$tableFields.sys_attachment_doc_v2 & GlideRecord;

    /**
     * "History" GlideRecord.
     */
    export type sys_history_line = $$tableFields.sys_history_line & GlideRecord;

    /**
     * "Record History" GlideRecord.
     */
    export type sys_history_set = $$tableFields.sys_history_set & GlideRecord;

    /**
     * "Attachment Icon Rule" GlideRecord.
     */
    export type sys_attachment_icon_rule = $$tableFields.sys_attachment_icon_rule & GlideRecord;

    /**
     * "System Plugin" GlideRecord.
     */
    export type v_plugin = $$tableFields.v_plugin & GlideRecord;

    /**
     * "Setup Dependency" GlideRecord.
     */
    export type help_setup_dependency = $$tableFields.help_setup_dependency & sys_metadata;

    /**
     * "Question Regular Expression" GlideRecord.
     */
    export type question_regex = $$tableFields.question_regex & sys_metadata;

    /**
     * "Knowledge" GlideRecord.
     * Auto-number Prefix: KB
     */
    export type kb_knowledge = $$tableFields.kb_knowledge & GlideRecord;

    /**
     * "Knowledge keyword" GlideRecord.
     */
    export type kb_knowledge_keyword = $$tableFields.kb_knowledge_keyword & sys_metadata;

    /**
     * "Related Articles" GlideRecord.
     */
    export type kb_2_kb = $$tableFields.kb_2_kb & GlideRecord;

    /**
     * "Related Articles" GlideRecord.
     */
    export type sc_2_kb = $$tableFields.sc_2_kb & GlideRecord;

    /**
     * "Related Catalog Items" GlideRecord.
     */
    export type kb_2_sc = $$tableFields.kb_2_sc & GlideRecord;

    /**
     * "Incident" GlideRecord.
     * Auto-number Prefix: INC
     */
    export type incident = $$tableFields.incident & task;

    /**
     * "Problem" GlideRecord.
     * Auto-number Prefix: PRB
     */
    export type problem = $$tableFields.problem & task;

    /**
     * "Change Request" GlideRecord.
     * Auto-number Prefix: CHG
     * Extendable: true
     */
    export type change_request = $$tableFields.change_request & task;

    /**
     * "Standard Change Template Version" GlideRecord.
     */
    export type std_change_producer_version = $$tableFields.std_change_producer_version & GlideRecord;

    /**
     * "Store Application" GlideRecord.
     */
    export type sys_store_app = $$tableFields.sys_store_app & sys_scope;

    /**
     * "Knowledge keyword" GlideRecord.
     */
    export type kb_keyword = $$tableFields.kb_keyword & sys_metadata;

    /**
     * "Change Task" GlideRecord.
     * Auto-number Prefix: CTASK
     */
    export type change_task = $$tableFields.change_task & task;

    /**
     * "Standard Change Proposal" GlideRecord.
     * Auto-number Prefix: STDCHG
     */
    export type std_change_proposal = $$tableFields.std_change_proposal & task;

    /**
     * "Record Producer" GlideRecord.
     * Extendable: true
     */
    export type sc_cat_item_producer = $$tableFields.sc_cat_item_producer & sc_cat_item;

    /**
     * "Standard Change Template" GlideRecord.
     */
    export type std_change_record_producer = $$tableFields.std_change_record_producer & sc_cat_item_producer;

    /**
     * "Service" GlideRecord.
     */
    export type sc_cat_item_producer_service = $$tableFields.sc_cat_item_producer_service & sc_cat_item_producer;

    /**
     * "Change Model" GlideRecord.
     */
    export type chg_model = $$tableFields.chg_model & sttrm_model;

    /**
     * "State Transition Model" GlideRecord.
     * Extendable: true
     */
    export type sttrm_model = $$tableFields.sttrm_model & sys_metadata;

    /**
     * "SLA Conditions" GlideRecord.
     */
    export type sla_condition_class = $$tableFields.sla_condition_class & sys_metadata;

    /**
     * "Task SLA" GlideRecord.
     */
    export type task_sla = $$tableFields.task_sla & GlideRecord;

    /**
     * "SLA Definition" GlideRecord.
     */
    export type contract_sla = $$tableFields.contract_sla & sys_metadata;

    /**
     * "View Table" GlideRecord.
     */
    export type sys_db_view_table = $$tableFields.sys_db_view_table & sys_metadata;

    /**
     * "Database View" GlideRecord.
     */
    export type sys_db_view = $$tableFields.sys_db_view & sys_metadata;

    /**
     * "View Field" GlideRecord.
     */
    export type sys_db_view_table_field = $$tableFields.sys_db_view_table_field & sys_metadata;

    /**
     * "UI Policy Action" GlideRecord.
     * Extendable: true
     */
    export type sys_ui_policy_action = $$tableFields.sys_ui_policy_action & sys_metadata;

    /**
     * "Wizard UI Policy Action" GlideRecord.
     */
    export type expert_ui_policy_action = $$tableFields.expert_ui_policy_action & sys_ui_policy_action;

    /**
     * "Wizard UI Policy" GlideRecord.
     */
    export type expert_ui_policy = $$tableFields.expert_ui_policy & sys_ui_policy;

    /**
     * "Workflow UI Policy" GlideRecord.
     */
    export type wf_ui_policy = $$tableFields.wf_ui_policy & sys_ui_policy;

    /**
     * "Workflow UI Policy Action" GlideRecord.
     */
    export type wf_ui_policy_action = $$tableFields.wf_ui_policy_action & sys_ui_policy_action;

    /**
     * "UI Policy Related List Action" GlideRecord.
     */
    export type sys_ui_policy_rl_action = $$tableFields.sys_ui_policy_rl_action & sys_metadata;

    /**
     * "Catalog UI Policy Action" GlideRecord.
     */
    export type catalog_ui_policy_action = $$tableFields.catalog_ui_policy_action & sys_ui_policy_action;

    /**
     * "Batch Install Plan" GlideRecord.
     */
    export type sys_batch_install_plan = $$tableFields.sys_batch_install_plan & GlideRecord;

    /**
     * "Application License Definition" GlideRecord.
     */
    export type sys_app_license_defn = $$tableFields.sys_app_license_defn & sys_metadata;

    /**
     * "Model State" GlideRecord.
     * Extendable: true
     */
    export type sttrm_state = $$tableFields.sttrm_state & sys_metadata;

    /**
     * "UI Policy" GlideRecord.
     * Extendable: true
     */
    export type sys_ui_policy = $$tableFields.sys_ui_policy & sys_metadata;

    /**
     * "Catalog UI Policy" GlideRecord.
     */
    export type catalog_ui_policy = $$tableFields.catalog_ui_policy & sys_ui_policy;

    /**
     * "Catalog Task" GlideRecord.
     * Auto-number Prefix: SCTASK
     */
    export type sc_task = $$tableFields.sc_task & task;

    /**
     * "Approval" GlideRecord.
     */
    export type sysapproval_approver = $$tableFields.sysapproval_approver & GlideRecord;

    /**
     * "Group approval" GlideRecord.
     * Auto-number Prefix: GAPRV
     */
    export type sysapproval_group = $$tableFields.sysapproval_group & task;

    /**
     * "State Binding" GlideRecord.
     */
    export type state_binding = $$tableFields.state_binding & GlideRecord;

    /**
     * "Process Guides" GlideRecord.
     */
    export type process_guide = $$tableFields.process_guide & sys_metadata;

    /**
     * "Approval Rules" GlideRecord.
     */
    export type sysrule_approvals = $$tableFields.sysrule_approvals & sysrule;

    /**
     * "Process Steps" GlideRecord.
     * Extendable: true
     */
    export type process_step = $$tableFields.process_step & sys_metadata;

    /**
     * "Storage File Share" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_storage_fileshare = $$tableFields.cmdb_ci_storage_fileshare & cmdb_ci;

    /**
     * "Taxonomy Layer Definition" GlideRecord.
     */
    export type spm_taxonomy_layer_definition = $$tableFields.spm_taxonomy_layer_definition & GlideRecord;

    /**
     * "Virtualization Server" GlideRecord.
     * Extendable: true
     */
    export type cmdb_ci_virtualization_server = $$tableFields.cmdb_ci_virtualization_server & cmdb_ci_server;

    /**
     * "Asset Task" GlideRecord.
     * Auto-number Prefix: ASTTASK
     */
    export type asset_task = $$tableFields.asset_task & task;

    /**
     * "Goal" GlideRecord.
     */
    export type goal = $$tableFields.goal & GlideRecord;

    /**
     * "Unit" GlideRecord.
     */
    export type pa_units = $$tableFields.pa_units & sys_metadata;

    /**
     * "Currency" GlideRecord.
     */
    export type fx_currency = $$tableFields.fx_currency & GlideRecord;

    /**
     * "Solution Definition" GlideRecord.
     * Extendable: true
     */
    export type ml_capability_definition_base = $$tableFields.ml_capability_definition_base & sys_metadata;

    /**
     * "Similarity Definition" GlideRecord.
     */
    export type ml_capability_definition_similarity = $$tableFields.ml_capability_definition_similarity & ml_capability_definition_base;

    /**
     * "Ml Capability" GlideRecord.
     */
    export type ml_capability = $$tableFields.ml_capability & sys_metadata;

    /**
     * "Word corpus" GlideRecord.
     */
    export type ml_word_vector_corpus = $$tableFields.ml_word_vector_corpus & GlideRecord;

    /**
     * "Ml Solution Parameters" GlideRecord.
     */
    export type ml_solution_parameters = $$tableFields.ml_solution_parameters & sys_metadata;

    /**
     * "Stopwords" GlideRecord.
     */
    export type ml_stopwords = $$tableFields.ml_stopwords & GlideRecord;
}