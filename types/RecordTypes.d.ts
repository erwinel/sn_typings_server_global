/// <reference path="./GlideTypes.d.ts" />

/**
 * Contains helper types for table-specific GlideRecord instances.
 * @namespace $$GlideRecord
 */
declare namespace $$GlideRecord {
    // #region Done

    /**
     * "Business Unit" glide record.
     */
    export type business_unit = $$tableFields.business_unit & GlideRecord;
 
    /**
     * Task glide record.
     * Auto-number Prefix: TASK
     */
    export type task = $$tableFields.task & GlideRecord;
 
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
     * "Guided Setup Content" glide record.
     * Scope: "Guided Setup - Legacy" (sn_guided_setup)
     */
    export type gsw_content = $$tableFields.gsw_content & sys_metadata;
 
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
     * "Catalog Item" glide record.
     */
    export type sc_cat_item = $$tableFields.sc_cat_item & sys_metadata;
 
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

    // #endregion

    // #region Not Done
 
    /**
     * GlideRecord representing the "Business Rule" table (sys_script).
     */
    export type sys_script = $$tableFields.sys_script & sys_metadata;
 
    /**
     * GlideRecord representing the "Signature" table (asmt_signature).
     */
    export type asmt_signature = $$tableFields.asmt_signature & sys_metadata;
 
    /**
     * GlideRecord representing the "Assessment Metric" table (asmt_metric).
     */
    export type asmt_metric = $$tableFields.asmt_metric & sys_metadata;
 
    /**
     * GlideRecord representing the "Metric Category" table (asmt_metric_category).
     */
    export type asmt_metric_category = $$tableFields.asmt_metric_category & sys_metadata;
 
    /**
     * GlideRecord representing the "Custom Metric" table (asmt_custom_metric).
     */
    export type asmt_custom_metric = $$tableFields.asmt_custom_metric & sys_metadata;
 
    /**
     * GlideRecord representing the "Conversation Server Field Script Validator" table (sys_cs_field_script_validator).
     */
    export type sys_cs_field_script_validator = $$tableFields.sys_cs_field_script_validator & sys_metadata;
 
    /**
     * GlideRecord representing the "Schedule Item" table (sys_trigger).
     */
    export type sys_trigger = $$tableFields.sys_trigger & GlideRecord;
 
    /**
     * GlideRecord representing the "Rollback Context" table (sys_rollback_context).
     */
    export type sys_rollback_context = $$tableFields.sys_rollback_context & GlideRecord;
 
    /**
     * GlideRecord representing the "Node State" table (sys_cluster_state).
     */
    export type sys_cluster_state = $$tableFields.sys_cluster_state & GlideRecord;
 
    /**
     * GlideRecord representing the "Node Type" table (sys_node_type).
     */
    export type sys_node_type = $$tableFields.sys_node_type & sys_metadata;
 
    /**
     * GlideRecord representing the "Node stats" table (sys_cluster_node_stats).
     */
    export type sys_cluster_node_stats = $$tableFields.sys_cluster_node_stats & GlideRecord;
 
    /**
     * GlideRecord representing the "Sys Job" table (sys_job).
     */
    export type sys_job = $$tableFields.sys_job & sys_metadata;
 
    /**
     * GlideRecord representing the "UI Action" table (sys_ui_action).
     */
    export type sys_ui_action = $$tableFields.sys_ui_action & sys_metadata;
 
    /**
     * GlideRecord representing the "REST Message" table (sys_rest_message).
     */
    export type sys_rest_message = $$tableFields.sys_rest_message & sys_metadata;
 
    /**
     * GlideRecord representing the "Protocol Profile" table (sys_protocol_profile).
     */
    export type sys_protocol_profile = $$tableFields.sys_protocol_profile & GlideRecord;
 
    /**
     * GlideRecord representing the "X.509 Certificate" table (sys_certificate).
     */
    export type sys_certificate = $$tableFields.sys_certificate & GlideRecord;
 
    /**
     * GlideRecord representing the "Authentication Configuration" table (sys_auth_profile).
     */
    export type sys_auth_profile = $$tableFields.sys_auth_profile & sys_metadata;
 
    /**
     * GlideRecord representing the "Basic Auth Configuration" table (sys_auth_profile_basic).
     */
    export type sys_auth_profile_basic = $$tableFields.sys_auth_profile_basic & sys_auth_profile;
 
    /**
     * GlideRecord representing the "Oauth Entity Profile" table (oauth_entity_profile).
     */
    export type oauth_entity_profile = $$tableFields.oauth_entity_profile & sys_metadata;
 
    /**
     * GlideRecord representing the "Saml2 Assertion Producer" table (saml2_assertion_producer).
     */
    export type saml2_assertion_producer = $$tableFields.saml2_assertion_producer & sys_metadata;
 
    /**
     * GlideRecord representing the "Oauth Entity" table (oauth_entity).
     */
    export type oauth_entity = $$tableFields.oauth_entity & sys_metadata;
 
    /**
     * GlideRecord representing the "Jwt Provider" table (jwt_provider).
     */
    export type jwt_provider = $$tableFields.jwt_provider & sys_metadata;
 
    /**
     * GlideRecord representing the "JWT Keys" table (jwt_keystore_aliases).
     */
    export type jwt_keystore_aliases = $$tableFields.jwt_keystore_aliases & sys_metadata;
 
    /**
     * GlideRecord representing the "HTTP Method" table (sys_rest_message_fn).
     */
    export type sys_rest_message_fn = $$tableFields.sys_rest_message_fn & sys_metadata;
 
    /**
     * GlideRecord representing the "Context" table (sys_cs_virtual_agent_context).
     */
    export type sys_cs_virtual_agent_context = $$tableFields.sys_cs_virtual_agent_context & sys_metadata;
 
    /**
     * GlideRecord representing the "Chat Setup" table (sys_cs_live_agent_setup).
     */
    export type sys_cs_live_agent_setup = $$tableFields.sys_cs_live_agent_setup & sys_metadata;
 
    /**
     * GlideRecord representing the "Application Menu" table (sys_app_application).
     */
    export type sys_app_application = $$tableFields.sys_app_application & sys_metadata;
 
    /**
     * GlideRecord representing the "Menu Category" table (sys_app_category).
     */
    export type sys_app_category = $$tableFields.sys_app_category & sys_metadata;
 
    /**
     * GlideRecord representing the "Report Source" table (sys_report_source).
     */
    export type sys_report_source = $$tableFields.sys_report_source & sys_metadata;
 
    /**
     * GlideRecord representing the "Report Drillown" table (sys_report_drill).
     */
    export type sys_report_drill = $$tableFields.sys_report_drill & sys_report;
 
    /**
     * GlideRecord representing the "PDF Page Header Footer Template" table (sys_report_page_hdrftr).
     */
    export type sys_report_page_hdrftr = $$tableFields.sys_report_page_hdrftr & sys_metadata;
 
    /**
     * GlideRecord representing the "Map Source" table (sys_report_map_source).
     */
    export type sys_report_map_source = $$tableFields.sys_report_map_source & GlideRecord;
 
    /**
     * GlideRecord representing the "Report Map Types" table (sys_report_map_type).
     */
    export type sys_report_map_type = $$tableFields.sys_report_map_type & sys_metadata;
 
    /**
     * GlideRecord representing the "Mapping group" table (sys_report_map_source_mapping).
     */
    export type sys_report_map_source_mapping = $$tableFields.sys_report_map_source_mapping & GlideRecord;
 
    /**
     * GlideRecord representing the "Report Maps" table (sys_report_map).
     */
    export type sys_report_map = $$tableFields.sys_report_map & GlideRecord;
 
    /**
     * GlideRecord representing the "UI View" table (sys_ui_view).
     */
    export type sys_ui_view = $$tableFields.sys_ui_view & sys_metadata;
 
    /**
     * GlideRecord representing the "Import Table" table (sys_report_import_table).
     */
    export type sys_report_import_table = $$tableFields.sys_report_import_table & GlideRecord;
 
    /**
     * GlideRecord representing the "Chart color scheme" table (pa_chart_color_schemes).
     */
    export type pa_chart_color_schemes = $$tableFields.pa_chart_color_schemes & sys_metadata;
 
    /**
     * GlideRecord representing the "Task Relationship Type" table (task_rel_type).
     */
    export type task_rel_type = $$tableFields.task_rel_type & sys_metadata;
 
    /**
     * GlideRecord representing the "Software License Calculation" table (cmdb_sw_license_calculation).
     */
    export type cmdb_sw_license_calculation = $$tableFields.cmdb_sw_license_calculation & GlideRecord;
 
    /**
     * GlideRecord representing the "Agile Filter Definition" table (agile_filter_definition).
     */
    export type agile_filter_definition = $$tableFields.agile_filter_definition & GlideRecord;
 
    /**
     * GlideRecord representing the "Personal backlog" table (backlog_definition).
     */
    export type backlog_definition = $$tableFields.backlog_definition & agile_filter_definition;
 
    /**
     * GlideRecord representing the "Defect" table (rm_defect).
     */
    export type rm_defect = $$tableFields.rm_defect & rm_feature;
 
    /**
     * GlideRecord representing the "Software Model" table (cmdb_software_product_model).
     */
    export type cmdb_software_product_model = $$tableFields.cmdb_software_product_model & cmdb_model;
 
    /**
     * GlideRecord representing the "Enhancement" table (rm_enhancement).
     */
    export type rm_enhancement = $$tableFields.rm_enhancement & rm_feature;
 
    /**
     * GlideRecord representing the "Epic" table (rm_epic).
     */
    export type rm_epic = $$tableFields.rm_epic & rm_feature;
 
    /**
     * GlideRecord representing the "Release" table (rm_release).
     */
    export type rm_release = $$tableFields.rm_release & planned_task;
 
    /**
     * GlideRecord representing the "Scrum release" table (rm_release_scrum).
     */
    export type rm_release_scrum = $$tableFields.rm_release_scrum & rm_release;
 
    /**
     * GlideRecord representing the "Team" table (scrum_pp_team).
     */
    export type scrum_pp_team = $$tableFields.scrum_pp_team & GlideRecord;
 
    /**
     * GlideRecord representing the "Sprint" table (rm_sprint).
     */
    export type rm_sprint = $$tableFields.rm_sprint & rm_release;
 
    /**
     * GlideRecord representing the "Theme" table (scrum_theme).
     */
    export type scrum_theme = $$tableFields.scrum_theme & GlideRecord;
 
    /**
     * GlideRecord representing the "Business Calendar Entry Name" table (business_calendar_span_name).
     */
    export type business_calendar_span_name = $$tableFields.business_calendar_span_name & sys_metadata;
 
    /**
     * GlideRecord representing the "Version" table (wf_versionable).
     */
    export type wf_versionable = $$tableFields.wf_versionable & GlideRecord;
 
    /**
     * GlideRecord representing the "Service Portal" table (sp_portal).
     */
    export type sp_portal = $$tableFields.sp_portal & sys_metadata;
 
    /**
     * GlideRecord representing the "Assessment Metric Template" table (asmt_template).
     */
    export type asmt_template = $$tableFields.asmt_template & sys_metadata;
 
    /**
     * GlideRecord representing the "MID Server" table (ecc_agent).
     */
    export type ecc_agent = $$tableFields.ecc_agent & GlideRecord;
 
    /**
     * GlideRecord representing the "Mid Server Profile" table (mid_server_profile).
     */
    export type mid_server_profile = $$tableFields.mid_server_profile & GlideRecord;
 
    /**
     * GlideRecord representing the "Team name" table (scrum_pp_team_name).
     */
    export type scrum_pp_team_name = $$tableFields.scrum_pp_team_name & GlideRecord;
 
    /**
     * GlideRecord representing the "CI Relationship Type" table (cmdb_rel_type).
     */
    export type cmdb_rel_type = $$tableFields.cmdb_rel_type & sys_metadata;
 
    /**
     * GlideRecord representing the "CI Relationship" table (cmdb_rel_ci).
     */
    export type cmdb_rel_ci = $$tableFields.cmdb_rel_ci & GlideRecord;
 
    /**
     * GlideRecord representing the "Virtual Machine Object" table (cmdb_ci_vm_object).
     */
    export type cmdb_ci_vm_object = $$tableFields.cmdb_ci_vm_object & cmdb_ci;
 
    /**
     * GlideRecord representing the "VMware vCenter Object" table (cmdb_ci_vcenter_object).
     */
    export type cmdb_ci_vcenter_object = $$tableFields.cmdb_ci_vcenter_object & cmdb_ci_vm_object;
 
    /**
     * GlideRecord representing the "Application" table (cmdb_ci_appl).
     */
    export type cmdb_ci_appl = $$tableFields.cmdb_ci_appl & cmdb_ci;
 
    /**
     * GlideRecord representing the "VMware vCenter Instance" table (cmdb_ci_vcenter).
     */
    export type cmdb_ci_vcenter = $$tableFields.cmdb_ci_vcenter & cmdb_ci_appl;
 
    /**
     * GlideRecord representing the "Running Process" table (cmdb_running_process).
     */
    export type cmdb_running_process = $$tableFields.cmdb_running_process & GlideRecord;
 
    /**
     * GlideRecord representing the "Cloud Network" table (cmdb_ci_network).
     */
    export type cmdb_ci_network = $$tableFields.cmdb_ci_network & cmdb_ci_vcenter_object;
 
    /**
     * GlideRecord representing the "Classification" table (discovery_classy).
     */
    export type discovery_classy = $$tableFields.discovery_classy & sys_metadata;
 
    /**
     * GlideRecord representing the "Computer" table (cmdb_ci_computer).
     */
    export type cmdb_ci_computer = $$tableFields.cmdb_ci_computer & cmdb_ci_hardware;
 
    /**
     * GlideRecord representing the "Server" table (cmdb_ci_server).
     */
    export type cmdb_ci_server = $$tableFields.cmdb_ci_server & cmdb_ci_computer;
 
    /**
     * GlideRecord representing the "Cluster" table (cmdb_ci_cluster).
     */
    export type cmdb_ci_cluster = $$tableFields.cmdb_ci_cluster & cmdb_ci;
 
    /**
     * GlideRecord representing the "IP Network" table (cmdb_ci_ip_network).
     */
    export type cmdb_ci_ip_network = $$tableFields.cmdb_ci_ip_network & cmdb_ci;
 
    /**
     * GlideRecord representing the "Discovery Status" table (discovery_status).
     */
    export type discovery_status = $$tableFields.discovery_status & GlideRecord;
 
    /**
     * GlideRecord representing the "Scheduled Job" table (sysauto).
     */
    export type sysauto = $$tableFields.sysauto & sys_metadata;
 
    /**
     * GlideRecord representing the "Scheduled Script Execution" table (sysauto_script).
     */
    export type sysauto_script = $$tableFields.sysauto_script & sysauto;
 
    /**
     * GlideRecord representing the "MID Server Cluster" table (ecc_agent_cluster).
     */
    export type ecc_agent_cluster = $$tableFields.ecc_agent_cluster & GlideRecord;
 
    /**
     * GlideRecord representing the "Hardware" table (cmdb_ci_hardware).
     */
    export type cmdb_ci_hardware = $$tableFields.cmdb_ci_hardware & cmdb_ci;
 
    /**
     * GlideRecord representing the "Network Gear" table (cmdb_ci_netgear).
     */
    export type cmdb_ci_netgear = $$tableFields.cmdb_ci_netgear & cmdb_ci_hardware;
 
    /**
     * GlideRecord representing the "Network Adapter" table (cmdb_ci_network_adapter).
     */
    export type cmdb_ci_network_adapter = $$tableFields.cmdb_ci_network_adapter & cmdb_ci;
 
    /**
     * GlideRecord representing the "Company" table (core_company).
     */
    export type core_company = $$tableFields.core_company & GlideRecord;
 
    /**
     * GlideRecord representing the "Base Theme" table (sys_ui_base_theme).
     */
    export type sys_ui_base_theme = $$tableFields.sys_ui_base_theme & sys_metadata;
 
    /**
     * GlideRecord representing the "Theme" table (sys_ui_theme).
     */
    export type sys_ui_theme = $$tableFields.sys_ui_theme & sys_metadata;
 
    /**
     * GlideRecord representing the "Department" table (cmn_department).
     */
    export type cmn_department = $$tableFields.cmn_department & GlideRecord;
 
    /**
     * GlideRecord representing the "Location" table (cmn_location).
     */
    export type cmn_location = $$tableFields.cmn_location & GlideRecord;
 
    /**
     * GlideRecord representing the "Sys Phone Territory" table (sys_phone_territory).
     */
    export type sys_phone_territory = $$tableFields.sys_phone_territory & GlideRecord;
 
    /**
     * GlideRecord representing the "User" table (sys_user).
     */
    export type sys_user = $$tableFields.sys_user & GlideRecord;
 
    /**
     * GlideRecord representing the "LDAP Server" table (ldap_server_config).
     */
    export type ldap_server_config = $$tableFields.ldap_server_config & sys_metadata;
 
    /**
     * GlideRecord representing the "Import Export Map" table (sys_impex_map).
     */
    export type sys_impex_map = $$tableFields.sys_impex_map & sys_metadata;
 
    /**
     * GlideRecord representing the "Data Source" table (sys_data_source).
     */
    export type sys_data_source = $$tableFields.sys_data_source & sys_metadata;
 
    /**
     * GlideRecord representing the "Action Type Base" table (sys_hub_action_type_base).
     */
    export type sys_hub_action_type_base = $$tableFields.sys_hub_action_type_base & sys_metadata;
 
    /**
     * GlideRecord representing the "Action Type" table (sys_hub_action_type_definition).
     */
    export type sys_hub_action_type_definition = $$tableFields.sys_hub_action_type_definition & sys_hub_action_type_base;
 
    /**
     * GlideRecord representing the "LDAP OU Definition" table (ldap_ou_config).
     */
    export type ldap_ou_config = $$tableFields.ldap_ou_config & sys_metadata;
 
    /**
     * GlideRecord representing the "Menu List" table (sys_perspective).
     */
    export type sys_perspective = $$tableFields.sys_perspective & sys_metadata;
 
    /**
     * GlideRecord representing the "Building" table (cmn_building).
     */
    export type cmn_building = $$tableFields.cmn_building & GlideRecord;

    /**
     * GlideRecord representing the "Role" table (sys_user_role).
     */
    export type sys_user_role = $$tableFields.sys_user_role & sys_metadata;
 
    /**
     * GlideRecord representing the "Group" table (sys_user_group).
     */
    export type sys_user_group = $$tableFields.sys_user_group & GlideRecord;
 
    /**
     * GlideRecord representing the "Group Member" table (sys_user_grmember).
     */
    export type sys_user_grmember = $$tableFields.sys_user_grmember & GlideRecord;
 
    /**
     * GlideRecord representing the "Number" table (sys_number).
     */
    export type sys_number = $$tableFields.sys_number & sys_metadata;
 
    /**
     * GlideRecord representing the "Table" table (sys_db_object).
     */
    export type sys_db_object = $$tableFields.sys_db_object & sys_metadata;
 
    /**
     * GlideRecord representing the "Dictionary Entry" table (sys_dictionary).
     */
    export type sys_dictionary = $$tableFields.sys_dictionary & sys_metadata;
 
    /**
     * GlideRecord representing the "Dynamic Filter Options" table (sys_filter_option_dynamic).
     */
    export type sys_filter_option_dynamic = $$tableFields.sys_filter_option_dynamic & sys_metadata;
 
    /**
     * GlideRecord representing the "Field class" table (sys_glide_object).
     */
    export type sys_glide_object = $$tableFields.sys_glide_object & sys_metadata;
 
    /**
     * GlideRecord representing the "User Role" table (sys_user_has_role).
     */
    export type sys_user_has_role = $$tableFields.sys_user_has_role & GlideRecord;
 
    /**
     * GlideRecord representing the "Contained Role" table (sys_user_role_contains).
     */
    export type sys_user_role_contains = $$tableFields.sys_user_role_contains & sys_metadata;
 
    /**
     * GlideRecord representing the "Group Role" table (sys_group_has_role).
     */
    export type sys_group_has_role = $$tableFields.sys_group_has_role & GlideRecord;
 
    /**
     * GlideRecord representing the "Choice" table (sys_choice).
     */
    export type sys_choice = $$tableFields.sys_choice & GlideRecord;
 
    /**
     * GlideRecord representing the "Choice Set" table (sys_choice_set).
     */
    export type sys_choice_set = $$tableFields.sys_choice_set & sys_metadata;
 
    /**
     * GlideRecord representing the "Question" table (question).
     */
    export type question = $$tableFields.question & sys_metadata;
 
    /**
     * GlideRecord representing the "UI Page" table (sys_ui_page).
     */
    export type sys_ui_page = $$tableFields.sys_ui_page & sys_metadata;
 
    /**
     * GlideRecord representing the "Variable" table (item_option_new).
     */
    export type item_option_new = $$tableFields.item_option_new & question;
 
    /**
     * GlideRecord representing the "UX Macroponent Type" table (sys_ux_macroponent_type).
     */
    export type sys_ux_macroponent_type = $$tableFields.sys_ux_macroponent_type & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Macroponent Definition" table (sys_ux_macroponent).
     */
    export type sys_ux_macroponent = $$tableFields.sys_ux_macroponent & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Extension Point" table (sys_ux_extension_point).
     */
    export type sys_ux_extension_point = $$tableFields.sys_ux_extension_point & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Controller" table (sys_ux_controller).
     */
    export type sys_ux_controller = $$tableFields.sys_ux_controller & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Component Definition" table (sys_ux_lib_component).
     */
    export type sys_ux_lib_component = $$tableFields.sys_ux_lib_component & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Source Code" table (sys_ux_lib_source_script).
     */
    export type sys_ux_lib_source_script = $$tableFields.sys_ux_lib_source_script & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Children Layout" table (sys_ux_children_layout).
     */
    export type sys_ux_children_layout = $$tableFields.sys_ux_children_layout & sys_metadata;
 
    /**
     * GlideRecord representing the "UX Children Definition" table (sys_ux_children).
     */
    export type sys_ux_children = $$tableFields.sys_ux_children & sys_metadata;
 
    /**
     * GlideRecord representing the "Macroponent Priority" table (sys_ux_macroponent_priority).
     */
    export type sys_ux_macroponent_priority = $$tableFields.sys_ux_macroponent_priority & sys_metadata;
 
    /**
     * GlideRecord representing the "Variable Category" table (item_option_category).
     */
    export type item_option_category = $$tableFields.item_option_category & sys_metadata;
 
    /**
     * GlideRecord representing the "Variable Set" table (item_option_new_set).
     */
    export type item_option_new_set = $$tableFields.item_option_new_set & sys_metadata;
 
    /**
     * GlideRecord representing the "Flow catalog variable" table (sys_flow_cat_variable).
     */
    export type sys_flow_cat_variable = $$tableFields.sys_flow_cat_variable & item_option_new;
 
    /**
     * GlideRecord representing the "Workflow SC Variable" table (wf_variable).
     */
    export type wf_variable = $$tableFields.wf_variable & item_option_new;
 
    /**
     * GlideRecord representing the "Producer Set" table (item_option_new_producer_set).
     */
    export type item_option_new_producer_set = $$tableFields.item_option_new_producer_set & item_option_new_set;
 
    /**
     * GlideRecord representing the "Decision" table (sys_decision_question).
     */
    export type sys_decision_question = $$tableFields.sys_decision_question & sys_metadata;
 
    /**
     * GlideRecord representing the "Help Question" table (help_question).
     */
    export type help_question = $$tableFields.help_question & sys_metadata;
 
    /**
     * GlideRecord representing the "Decision Table" table (sys_decision).
     */
    export type sys_decision = $$tableFields.sys_decision & sys_metadata;
 
    /**
     * GlideRecord representing the "Help Content" table (help_content).
     */
    export type help_content = $$tableFields.help_content & sys_metadata;
 
    /**
     * GlideRecord representing the "Help Guidance Step" table (help_guidance_step).
     */
    export type help_guidance_step = $$tableFields.help_guidance_step & sys_metadata;
 
    /**
     * GlideRecord representing the "Guidance" table (help_guidance).
     */
    export type help_guidance = $$tableFields.help_guidance & sys_metadata;
 
    /**
     * GlideRecord representing the "Embedded Help" table (sys_embedded_help_content).
     */
    export type sys_embedded_help_content = $$tableFields.sys_embedded_help_content & sys_metadata;
 
    /**
     * GlideRecord representing the "Password Reset Question" table (pwd_question).
     */
    export type pwd_question = $$tableFields.pwd_question & sys_metadata;
 
    /**
     * GlideRecord representing the "Variable Layout" table (item_option_layout).
     */
    export type item_option_layout = $$tableFields.item_option_layout & question;
 
    /**
     * GlideRecord representing the "Wizard Variable" table (expert_variable).
     */
    export type expert_variable = $$tableFields.expert_variable & question;
 
    /**
     * GlideRecord representing the "Wizard" table (expert).
     */
    export type expert = $$tableFields.expert & sys_metadata;
 
    /**
     * GlideRecord representing the "Wizard Panel" table (expert_panel).
     */
    export type expert_panel = $$tableFields.expert_panel & sys_metadata;
 
    /**
     * GlideRecord representing the "Banner Step" table (expert_banner_step).
     */
    export type expert_banner_step = $$tableFields.expert_banner_step & sys_metadata;
 
    /**
     * GlideRecord representing the "Question" table (sc_ic_question).
     */
    export type sc_ic_question = $$tableFields.sc_ic_question & sys_metadata;
 
    /**
     * GlideRecord representing the "Section" table (sc_ic_section).
     */
    export type sc_ic_section = $$tableFields.sc_ic_section & sys_metadata;

    /**
     * GlideRecord representing the "Column" table (sc_ic_column).
     */
    export type sc_ic_column = $$tableFields.sc_ic_column & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Choice" table (question_choice).
     */
    export type question_choice = $$tableFields.question_choice & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Choice" table (sc_ic_question_choice).
     */
    export type sc_ic_question_choice = $$tableFields.sc_ic_question_choice & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Class" table (sc_ic_question_class).
     */
    export type sc_ic_question_class = $$tableFields.sc_ic_question_class & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Type" table (sc_ic_question_type).
     */
    export type sc_ic_question_type = $$tableFields.sc_ic_question_type & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Type Choice" table (sc_ic_question_type_choice).
     */
    export type sc_ic_question_type_choice = $$tableFields.sc_ic_question_type_choice & sys_metadata;
 
    /**
     * GlideRecord representing the "Assessment Instance Question" table (asmt_assessment_instance_question).
     */
    export type asmt_assessment_instance_question = $$tableFields.asmt_assessment_instance_question & GlideRecord;
 
    /**
     * GlideRecord representing the "Assessment Metric Type Group" table (asmt_metric_type_group).
     */
    export type asmt_metric_type_group = $$tableFields.asmt_metric_type_group & GlideRecord;
 
    /**
     * GlideRecord representing the "Assessment Metric Definition" table (asmt_metric_definition).
     */
    export type asmt_metric_definition = $$tableFields.asmt_metric_definition & sys_metadata;
 
    /**
     * GlideRecord representing the "Assessment Instance" table (asmt_assessment_instance).
     */
    export type asmt_assessment_instance = $$tableFields.asmt_assessment_instance & GlideRecord;
 
    /**
     * GlideRecord representing the "Trigger Condition" table (asmt_condition).
     */
    export type asmt_condition = $$tableFields.asmt_condition & sys_metadata;
 
    /**
     * GlideRecord representing the "Assessment Group" table (asmt_assessment).
     */
    export type asmt_assessment = $$tableFields.asmt_assessment & GlideRecord;
 
    /**
     * GlideRecord representing the "Assessable Record" table (asmt_assessable_record).
     */
    export type asmt_assessable_record = $$tableFields.asmt_assessable_record & GlideRecord;
 
    /**
     * GlideRecord representing the "Live Group Profile" table (live_group_profile).
     */
    export type live_group_profile = $$tableFields.live_group_profile & GlideRecord;
 
    /**
     * GlideRecord representing the "Multi Row Question Answer" table (sc_multi_row_question_answer).
     */
    export type sc_multi_row_question_answer = $$tableFields.sc_multi_row_question_answer & GlideRecord;
 
    /**
     * GlideRecord representing the "Options" table (sc_item_option).
     */
    export type sc_item_option = $$tableFields.sc_item_option & GlideRecord;
 
    /**
     * GlideRecord representing the "Item Option" table (sc_cat_item_option).
     */
    export type sc_cat_item_option = $$tableFields.sc_cat_item_option & sys_metadata;
 
    /**
     * GlideRecord representing the "Item" table (sc_cart_item).
     */
    export type sc_cart_item = $$tableFields.sc_cart_item & GlideRecord;
 
    /**
     * GlideRecord representing the "Shopping Cart" table (sc_cart).
     */
    export type sc_cart = $$tableFields.sc_cart & GlideRecord;
 
    /**
     * GlideRecord representing the "Question Answer" table (question_answer).
     */
    export type question_answer = $$tableFields.question_answer & GlideRecord;
 
    /**
     * GlideRecord representing the "Password Reset Active Question" table (pwd_active_question).
     */
    export type pwd_active_question = $$tableFields.pwd_active_question & GlideRecord;
 
    /**
     * GlideRecord representing the "Social Q&A Question" table (kb_social_qa_question).
     */
    export type kb_social_qa_question = $$tableFields.kb_social_qa_question & GlideRecord;
 
    /**
     * GlideRecord representing the "Social Q&A Answer" table (kb_social_qa_answer).
     */
    export type kb_social_qa_answer = $$tableFields.kb_social_qa_answer & GlideRecord;
 
    /**
     * GlideRecord representing the "Knowledge Category" table (kb_category).
     */
    export type kb_category = $$tableFields.kb_category & GlideRecord;
 
    /**
     * GlideRecord representing the "Live Profile" table (live_profile).
     */
    export type live_profile = $$tableFields.live_profile & GlideRecord;
 
    /**
     * GlideRecord representing the "Attachment" table (sys_attachment).
     */
    export type sys_attachment = $$tableFields.sys_attachment & GlideRecord;
 
    /**
     * GlideRecord representing the "Attachment Document" table (sys_attachment_doc).
     */
    export type sys_attachment_doc = $$tableFields.sys_attachment_doc & GlideRecord;
 
    /**
     * GlideRecord representing the "Attachment Document V2" table (sys_attachment_doc_v2).
     */
    export type sys_attachment_doc_v2 = $$tableFields.sys_attachment_doc_v2 & GlideRecord;
 
    /**
     * GlideRecord representing the "Attachment Icon Rule" table (sys_attachment_icon_rule).
     */
    export type sys_attachment_icon_rule = $$tableFields.sys_attachment_icon_rule & GlideRecord;
 
    /**
     * GlideRecord representing the "System Plugin" table (v_plugin).
     */
    export type v_plugin = $$tableFields.v_plugin & GlideRecord;
 
    /**
     * GlideRecord representing the "Setup Dependency" table (help_setup_dependency).
     */
    export type help_setup_dependency = $$tableFields.help_setup_dependency & sys_metadata;
 
    /**
     * GlideRecord representing the "Question Regular Expression" table (question_regex).
     */
    export type question_regex = $$tableFields.question_regex & sys_metadata;
 
    /**
     * GlideRecord representing the "Knowledge" table (kb_knowledge).
     */
    export type kb_knowledge = $$tableFields.kb_knowledge & GlideRecord;
 
    /**
     * GlideRecord representing the "Knowledge keyword" table (kb_knowledge_keyword).
     */
    export type kb_knowledge_keyword = $$tableFields.kb_knowledge_keyword & sys_metadata;
 
    /**
     * GlideRecord representing the "Related Articles" table (kb_2_kb).
     */
    export type kb_2_kb = $$tableFields.kb_2_kb & GlideRecord;
 
    /**
     * GlideRecord representing the "Related Articles" table (sc_2_kb).
     */
    export type sc_2_kb = $$tableFields.sc_2_kb & GlideRecord;
 
    /**
     * GlideRecord representing the "Related Catalog Items" table (kb_2_sc).
     */
    export type kb_2_sc = $$tableFields.kb_2_sc & GlideRecord;
 
    /**
     * GlideRecord representing the "Incident" table (incident).
     */
    export type incident = $$tableFields.incident & task;
 
    /**
     * GlideRecord representing the "Problem" table (problem).
     */
    export type problem = $$tableFields.problem & task;
 
    /**
     * GlideRecord representing the "Change Request" table (change_request).
     */
    export type change_request = $$tableFields.change_request & task;
 
    /**
     * GlideRecord representing the "Standard Change Template Version" table (std_change_producer_version).
     */
    export type std_change_producer_version = $$tableFields.std_change_producer_version & GlideRecord;
 
    /**
     * GlideRecord representing the "Standard Change Proposal" table (std_change_proposal).
     */
    export type std_change_proposal = $$tableFields.std_change_proposal & task;
 
    /**
     * GlideRecord representing the "Record Producer" table (sc_cat_item_producer).
     */
    export type sc_cat_item_producer = $$tableFields.sc_cat_item_producer & sc_cat_item;
 
    /**
     * GlideRecord representing the "Standard Change Template" table (std_change_record_producer).
     */
    export type std_change_record_producer = $$tableFields.std_change_record_producer & sc_cat_item_producer;
 
    /**
     * GlideRecord representing the "Change Model" table (chg_model).
     */
    export type chg_model = $$tableFields.chg_model & sttrm_model;
 
    /**
     * GlideRecord representing the "State Transition Model" table (sttrm_model).
     */
    export type sttrm_model = $$tableFields.sttrm_model & sys_metadata;
 
    /**
     * GlideRecord representing the "SLA Conditions" table (sla_condition_class).
     */
    export type sla_condition_class = $$tableFields.sla_condition_class & sys_metadata;
 
    /**
     * GlideRecord representing the "Task SLA" table (task_sla).
     */
    export type task_sla = $$tableFields.task_sla & GlideRecord;
 
    /**
     * GlideRecord representing the "SLA Definition" table (contract_sla).
     */
    export type contract_sla = $$tableFields.contract_sla & sys_metadata;
 
    /**
     * GlideRecord representing the "View Table" table (sys_db_view_table).
     */
    export type sys_db_view_table = $$tableFields.sys_db_view_table & sys_metadata;
 
    /**
     * GlideRecord representing the "Database View" table (sys_db_view).
     */
    export type sys_db_view = $$tableFields.sys_db_view & sys_metadata;
 
    /**
     * GlideRecord representing the "View Field" table (sys_db_view_table_field).
     */
    export type sys_db_view_table_field = $$tableFields.sys_db_view_table_field & sys_metadata;
 
    /**
     * GlideRecord representing the "Catalog UI Policy Action" table (catalog_ui_policy_action).
     */
    export type catalog_ui_policy_action = $$tableFields.catalog_ui_policy_action & sys_ui_policy_action;
 
    /**
     * GlideRecord representing the "UI Policy Action" table (sys_ui_policy_action).
     */
    export type sys_ui_policy_action = $$tableFields.sys_ui_policy_action & sys_metadata;
 
    /**
     * GlideRecord representing the "UI Policy" table (sys_ui_policy).
     */
    export type sys_ui_policy = $$tableFields.sys_ui_policy & sys_metadata;
 
    /**
     * GlideRecord representing the "Catalog UI Policy" table (catalog_ui_policy).
     */
    export type catalog_ui_policy = $$tableFields.catalog_ui_policy & sys_ui_policy;
 
    /**
     * GlideRecord representing the "Catalog Task" table (sc_task).
     */
    export type sc_task = $$tableFields.sc_task & task;
 
    /**
     * GlideRecord representing the "Approval" table (sysapproval_approver).
     */
    export type sysapproval_approver = $$tableFields.sysapproval_approver & GlideRecord;
 
    /**
     * GlideRecord representing the "Group approval" table (sysapproval_group).
     */
    export type sysapproval_group = $$tableFields.sysapproval_group & task;
 
    /**
     * GlideRecord representing the "State Binding" table (state_binding).
     */
    export type state_binding = $$tableFields.state_binding & GlideRecord;
 
    /**
     * GlideRecord representing the "Process Guides" table (process_guide).
     */
    export type process_guide = $$tableFields.process_guide & sys_metadata;
 
    /**
     * GlideRecord representing the "Approval Rules" table (sysrule_approvals).
     */
    export type sysrule_approvals = $$tableFields.sysrule_approvals & sysrule;
 
    /**
     * GlideRecord representing the "Process Steps" table (process_step).
     */
    export type process_step = $$tableFields.process_step & sys_metadata;
 
    /**
     * GlideRecord representing the "Storage File Share" table (cmdb_ci_storage_fileshare).
     */
    export type cmdb_ci_storage_fileshare = $$tableFields.cmdb_ci_storage_fileshare & cmdb_ci;

    /**
     * GlideRecord representing the "Purchase order line items" table (proc_po_item).
     */
    export type proc_po_item = $$tableFields.proc_po_item & GlideRecord;

    /**
     * GlideRecord representing the "Receiving Slip Line" table (proc_rec_slip_item).
     */
    export type proc_rec_slip_item = $$tableFields.proc_rec_slip_item & GlideRecord;

    /**
     * GlideRecord representing the "Portfolio" table (pm_portfolio).
     */
    export type pm_portfolio = $$tableFields.pm_portfolio & GlideRecord;

    /**
     * GlideRecord representing the "Program" table (pm_program).
     */
    export type pm_program = $$tableFields.pm_program & planned_task;

    /**
     * GlideRecord representing the "Demand" table (dmn_demand).
     */
    export type dmn_demand = $$tableFields.dmn_demand & task;

    /**
     * GlideRecord representing the "Project" table (pm_project).
     */
    export type pm_project = $$tableFields.pm_project & planned_task;

    /**
     * GlideRecord representing the "Project Task" table (pm_project_task).
     */
    export type pm_project_task = $$tableFields.pm_project_task & planned_task;

    /**
     * GlideRecord representing the "Taxonomy Layer Definition" table (spm_taxonomy_layer_definition).
     */
    export type spm_taxonomy_layer_definition = $$tableFields.spm_taxonomy_layer_definition & GlideRecord;

    /**
     * GlideRecord representing the "Virtualization Server" table (cmdb_ci_virtualization_server).
     */
    export type cmdb_ci_virtualization_server = $$tableFields.cmdb_ci_virtualization_server & cmdb_ci_server;

    /**
     * GlideRecord representing the "Time Sheet Policy" table (time_sheet_policy).
     */
    export type time_sheet_policy = $$tableFields.time_sheet_policy & GlideRecord;

    /**
     * GlideRecord representing the "Asset Task" table (asset_task).
     */
    export type asset_task = $$tableFields.asset_task & task;

    /**
     * GlideRecord representing the "Purchase Order" table (proc_po).
     */
    export type proc_po = $$tableFields.proc_po & GlideRecord;

    /**
     * GlideRecord representing the "Receiving Slip" table (proc_rec_slip).
     */
    export type proc_rec_slip = $$tableFields.proc_rec_slip & GlideRecord;

    /**
     * GlideRecord representing the "Goal" table (goal).
     */
    export type goal = $$tableFields.goal & GlideRecord;

    /**
     * GlideRecord representing the "Idea" table (im_idea_core).
     */
    export type im_idea_core = $$tableFields.im_idea_core & task;

    /**
     * GlideRecord representing the "Idea" table (idea).
     */
    export type idea = $$tableFields.idea & im_idea_core;

    /**
     * GlideRecord representing the "Rate Model" table (rate_model).
     */
    export type rate_model = $$tableFields.rate_model & GlideRecord;

    /**
     * GlideRecord representing the "Rate Type" table (rate_type).
     */
    export type rate_type = $$tableFields.rate_type & sys_metadata;

    /**
     * GlideRecord representing the "Unit" table (pa_units).
     */
    export type pa_units = $$tableFields.pa_units & sys_metadata;

    /**
     * GlideRecord representing the "Idea module" table (im_module).
     */
    export type im_module = $$tableFields.im_module & GlideRecord;

    /**
     * GlideRecord representing the "Currency" table (fx_currency).
     */
    export type fx_currency = $$tableFields.fx_currency & GlideRecord;

    /**
     * GlideRecord representing the "Rate Model Context" table (rate_model_transaction_entity).
     */
    export type rate_model_transaction_entity = $$tableFields.rate_model_transaction_entity & GlideRecord;

    /**
     * GlideRecord representing the "Similarity Definition" table (ml_capability_definition_similarity).
     */
    export type ml_capability_definition_similarity = $$tableFields.ml_capability_definition_similarity & ml_capability_definition_base;

    /**
     * GlideRecord representing the "Solution Definition" table (ml_capability_definition_base).
     */
    export type ml_capability_definition_base = $$tableFields.ml_capability_definition_base & sys_metadata;

    /**
     * GlideRecord representing the "Ml Capability" table (ml_capability).
     */
    export type ml_capability = $$tableFields.ml_capability & sys_metadata;

    /**
     * GlideRecord representing the "Word corpus" table (ml_word_vector_corpus).
     */
    export type ml_word_vector_corpus = $$tableFields.ml_word_vector_corpus & GlideRecord;

    // #endregion
}

/**
 * Contains helper types for table-specific GlideElement instances.
 * @namespace $$GlideElement
 */
declare namespace $$GlideElement {
    // #region Done

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
     * Element that refers to a "Catalog Item" glide record.
     */
    export type sc_cat_item = Reference<$$tableFields.sc_cat_item, $$GlideRecord.sc_cat_item>;
 
    /**
     * Element that refers to a "Order guide" glide record.
     */
    export type sc_cat_item_guide = Reference<$$tableFields.sc_cat_item_guide, $$GlideRecord.sc_cat_item_guide>;
 
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

    // #endregion

    // #region Not Done

    /**
     * Reference element for the "Business Rule" record type (sys_script).
     */
    export type sys_script = Reference<$$tableFields.sys_script, $$GlideRecord.sys_script> & sys_metadata;
 
    /**
     * Reference element for the "Signature" record type (asmt_signature).
     */
    export type asmt_signature = Reference<$$tableFields.asmt_signature, $$GlideRecord.asmt_signature> & sys_metadata;
 
    /**
     * Reference element for the "Assessment Metric" record type (asmt_metric).
     */
    export type asmt_metric = Reference<$$tableFields.asmt_metric, $$GlideRecord.asmt_metric> & sys_metadata;
 
    /**
     * GlideRecord representing the "Metric Category" table (asmt_metric_category).
     */
    export type asmt_metric_category = Reference<$$tableFields.asmt_metric_category, $$GlideRecord.asmt_metric_category> & sys_metadata;
 
    /**
     * Reference element for the "Custom Metric" record type (asmt_custom_metric).
     */
    export type asmt_custom_metric = Reference<$$tableFields.asmt_custom_metric, $$GlideRecord.asmt_custom_metric> & sys_metadata;
 
    /**
     * Reference element for the "Conversation Server Field Script Validator" record type (sys_cs_field_script_validator).
     */
    export type sys_cs_field_script_validator = Reference<$$tableFields.sys_cs_field_script_validator, $$GlideRecord.sys_cs_field_script_validator> & sys_metadata;
 
    /**
     * Reference element for the "Schedule Item" record type (sys_trigger).
     */
    export type sys_trigger = Reference<$$tableFields.sys_trigger, $$GlideRecord.sys_trigger>;
 
    /**
     * Reference element for the "Rollback Context" record type (sys_rollback_context).
     */
    export type sys_rollback_context = Reference<$$tableFields.sys_rollback_context, $$GlideRecord.sys_rollback_context>;
 
    /**
     * Reference element for the "Node State" record type (sys_cluster_state).
     */
    export type sys_cluster_state = Reference<$$tableFields.sys_cluster_state, $$GlideRecord.sys_cluster_state>;
 
    /**
     * Reference element for the "Node Type" record type (sys_node_type).
     */
    export type sys_node_type = Reference<$$tableFields.sys_node_type, $$GlideRecord.sys_node_type> & sys_metadata;
 
    /**
     * Reference element for the "Node stats" record type (sys_cluster_node_stats).
     */
    export type sys_cluster_node_stats = Reference<$$tableFields.sys_cluster_node_stats, $$GlideRecord.sys_cluster_node_stats>;
 
    /**
     * Reference element for the "Sys Job" record type (sys_job).
     */
    export type sys_job = Reference<$$tableFields.sys_job, $$GlideRecord.sys_job> & sys_metadata;
 
    /**
     * Reference element for the "UI Action" record type (sys_ui_action).
     */
    export type sys_ui_action = Reference<$$tableFields.sys_ui_action, $$GlideRecord.sys_ui_action> & sys_metadata;
 
    /**
     * Reference element for the "REST Message" record type (sys_rest_message).
     */
    export type sys_rest_message = Reference<$$tableFields.sys_rest_message, $$GlideRecord.sys_rest_message> & sys_metadata;
 
    /**
     * Reference element for the "Protocol Profile" record type (sys_protocol_profile).
     */
    export type sys_protocol_profile = Reference<$$tableFields.sys_protocol_profile, $$GlideRecord.sys_protocol_profile>;
 
    /**
     * Reference element for the "X.509 Certificate" record type (sys_certificate).
     */
    export type sys_certificate = Reference<$$tableFields.sys_certificate, $$GlideRecord.sys_certificate>;
 
    /**
     * Reference element for the "Authentication Configuration" record type (sys_auth_profile).
     */
    export type sys_auth_profile = Reference<$$tableFields.sys_auth_profile, $$GlideRecord.sys_auth_profile> & sys_metadata;
 
    /**
     * Reference element for the "Basic Auth Configuration" record type (sys_auth_profile_basic).
     */
    export type sys_auth_profile_basic = Reference<$$tableFields.sys_auth_profile_basic, $$GlideRecord.sys_auth_profile_basic> & sys_auth_profile;
 
    /**
     * Reference element for the "Oauth Entity Profile" record type (oauth_entity_profile).
     */
    export type oauth_entity_profile = Reference<$$tableFields.oauth_entity_profile, $$GlideRecord.oauth_entity_profile> & sys_metadata;
 
    /**
     * Reference element for the "Saml2 Assertion Producer" record type (saml2_assertion_producer).
     */
    export type saml2_assertion_producer = Reference<$$tableFields.saml2_assertion_producer, $$GlideRecord.saml2_assertion_producer> & sys_metadata;
 
    /**
     * Reference element for the "Oauth Entity" record type (oauth_entity).
     */
    export type oauth_entity = Reference<$$tableFields.oauth_entity, $$GlideRecord.oauth_entity> & sys_metadata;
 
    /**
     * Reference element for the "Jwt Provider" record type (jwt_provider).
     */
    export type jwt_provider = Reference<$$tableFields.jwt_provider, $$GlideRecord.jwt_provider> & sys_metadata;
 
    /**
     * Reference element for the "JWT Keys" record type (jwt_keystore_aliases).
     */
    export type jwt_keystore_aliases = Reference<$$tableFields.jwt_keystore_aliases, $$GlideRecord.jwt_keystore_aliases> & sys_metadata;
 
    /**
     * Reference element for the "HTTP Method" record type (sys_rest_message_fn).
     */
    export type sys_rest_message_fn = Reference<$$tableFields.sys_rest_message_fn, $$GlideRecord.sys_rest_message_fn> & sys_metadata;
 
    /**
     * Reference element for the "Context" record type (sys_cs_virtual_agent_context).
     */
    export type sys_cs_virtual_agent_context = Reference<$$tableFields.sys_cs_virtual_agent_context, $$GlideRecord.sys_cs_virtual_agent_context> & sys_metadata;
 
    /**
     * Reference element for the "Chat Setup" record type (sys_cs_live_agent_setup).
     */
    export type sys_cs_live_agent_setup = Reference<$$tableFields.sys_cs_live_agent_setup, $$GlideRecord.sys_cs_live_agent_setup> & sys_metadata;
 
    /**
     * Reference element for the "Application Menu" record type (sys_app_application).
     */
    export type sys_app_application = Reference<$$tableFields.sys_app_application, $$GlideRecord.sys_app_application> & sys_metadata;
 
    /**
     * Reference element for the "Menu Category" record type (sys_app_category).
     */
    export type sys_app_category = Reference<$$tableFields.sys_app_category, $$GlideRecord.sys_app_category> & sys_metadata;
 
    /**
     * Reference element for the "Report Source" record type (sys_report_source).
     */
    export type sys_report_source = Reference<$$tableFields.sys_report_source, $$GlideRecord.sys_report_source> & sys_metadata;
 
    /**
     * Reference element for the "Report Drillown" record type (sys_report_drill).
     */
    export type sys_report_drill = Reference<$$tableFields.sys_report_drill, $$GlideRecord.sys_report_drill> & sys_report;
 
    /**
     * Reference element for the "PDF Page Header Footer Template" record type (sys_report_page_hdrftr).
     */
    export type sys_report_page_hdrftr = Reference<$$tableFields.sys_report_page_hdrftr, $$GlideRecord.sys_report_page_hdrftr> & sys_metadata;
 
    /**
     * Reference element for the "Map Source" record type (sys_report_map_source).
     */
    export type sys_report_map_source = Reference<$$tableFields.sys_report_map_source, $$GlideRecord.sys_report_map_source>;
 
    /**
     * Reference element for the "Report Map Types" record type (sys_report_map_type).
     */
    export type sys_report_map_type = Reference<$$tableFields.sys_report_map_type, $$GlideRecord.sys_report_map_type> & sys_metadata;
 
    /**
     * Reference element for the "Mapping group" record type (sys_report_map_source_mapping).
     */
    export type sys_report_map_source_mapping = Reference<$$tableFields.sys_report_map_source_mapping, $$GlideRecord.sys_report_map_source_mapping>;
 
    /**
     * Reference element for the "Report Maps" record type (sys_report_map).
     */
    export type sys_report_map = Reference<$$tableFields.sys_report_map, $$GlideRecord.sys_report_map>;
 
    /**
     * Reference element for the "UI View" record type (sys_ui_view).
     */
    export type sys_ui_view = Reference<$$tableFields.sys_ui_view, $$GlideRecord.sys_ui_view> & sys_metadata;
 
    /**
     * Reference element for the "Import Table" record type (sys_report_import_table).
     */
    export type sys_report_import_table = Reference<$$tableFields.sys_report_import_table, $$GlideRecord.sys_report_import_table>;
 
    /**
     * Reference element for the "Chart color scheme" record type (pa_chart_color_schemes).
     */
    export type pa_chart_color_schemes = Reference<$$tableFields.pa_chart_color_schemes, $$GlideRecord.pa_chart_color_schemes> & sys_metadata;
 
    /**
     * Reference element for the "Software License Calculation" record type (cmdb_sw_license_calculation).
     */
    export type cmdb_sw_license_calculation = Reference<$$tableFields.cmdb_sw_license_calculation, $$GlideRecord.cmdb_sw_license_calculation>;
 
    /**
     * Reference element for the "Task Relationship Type" record type (task_rel_type).
     */
    export type task_rel_type = Reference<$$tableFields.task_rel_type, $$GlideRecord.task_rel_type> & sys_metadata;
 
    /**
     * Reference element for the "Agile Filter Definition" record type (agile_filter_definition).
     */
    export type agile_filter_definition = Reference<$$tableFields.agile_filter_definition, $$GlideRecord.agile_filter_definition>;
 
    /**
     * Reference element for the "Personal backlog" record type (backlog_definition).
     */
    export type backlog_definition = Reference<$$tableFields.backlog_definition, $$GlideRecord.backlog_definition> & agile_filter_definition;
 
    /**
     * Reference element for the "Defect" record type (rm_defect).
     */
    export type rm_defect = Reference<$$tableFields.rm_defect, $$GlideRecord.rm_defect> & rm_feature;
 
    /**
     * Reference element for the "Software Model" record type (cmdb_software_product_model).
     */
    export type cmdb_software_product_model = Reference<$$tableFields.cmdb_software_product_model, $$GlideRecord.cmdb_software_product_model> & cmdb_model;
 
    /**
     * Reference element for the "Enhancement" record type (rm_enhancement).
     */
    export type rm_enhancement = Reference<$$tableFields.rm_enhancement, $$GlideRecord.rm_enhancement> & rm_feature;
 
    /**
     * Reference element for the "Epic" record type (rm_epic).
     */
    export type rm_epic = Reference<$$tableFields.rm_epic, $$GlideRecord.rm_epic> & rm_feature;
 
    /**
     * Reference element for the "Release" record type (rm_release).
     */
    export type rm_release = Reference<$$tableFields.rm_release, $$GlideRecord.rm_release> & planned_task;
 
    /**
     * Reference element for the "Scrum release" record type (rm_release_scrum).
     */
    export type rm_release_scrum = Reference<$$tableFields.rm_release_scrum, $$GlideRecord.rm_release_scrum> & rm_release;
 
    /**
     * Reference element for the "Team" record type (scrum_pp_team).
     */
    export type scrum_pp_team = Reference<$$tableFields.scrum_pp_team, $$GlideRecord.scrum_pp_team>;
 
    /**
     * Reference element for the "Sprint" record type (rm_sprint).
     */
    export type rm_sprint = Reference<$$tableFields.rm_sprint, $$GlideRecord.rm_sprint> & rm_release;
 
    /**
     * Reference element for the "Theme" record type (scrum_theme).
     */
    export type scrum_theme = Reference<$$tableFields.scrum_theme, $$GlideRecord.scrum_theme>;
 
    /**
     * Reference element for the "Business Calendar Entry Name" record type (business_calendar_span_name).
     */
    export type business_calendar_span_name = Reference<$$tableFields.business_calendar_span_name, $$GlideRecord.business_calendar_span_name> & sys_metadata;
 
    /**
     * Reference element for the "Version" record type (wf_versionable).
     */
    export type wf_versionable = Reference<$$tableFields.wf_versionable, $$GlideRecord.wf_versionable>;
 
    /**
     * Reference element for the "Service Portal" record type (sp_portal).
     */
    export type sp_portal = Reference<$$tableFields.sp_portal, $$GlideRecord.sp_portal> & sys_metadata;
 
    /**
     * Reference element for the "Assessment Metric Template" record type (asmt_template).
     */
    export type asmt_template = Reference<$$tableFields.asmt_template, $$GlideRecord.asmt_template> & sys_metadata;
 
    /**
     * Reference element for the "MID Server" record type (ecc_agent).
     */
    export type ecc_agent = Reference<$$tableFields.ecc_agent, $$GlideRecord.ecc_agent>;
 
    /**
     * Reference element for the "Mid Server Profile" record type (mid_server_profile).
     */
    export type mid_server_profile = Reference<$$tableFields.mid_server_profile, $$GlideRecord.mid_server_profile>;
 
    /**
     * Reference element for the "Team name" record type (scrum_pp_team_name).
     */
    export type scrum_pp_team_name = Reference<$$tableFields.scrum_pp_team_name, $$GlideRecord.scrum_pp_team_name>;
 
    /**
     * Reference element for the "CI Relationship Type" record type (cmdb_rel_type).
     */
    export type cmdb_rel_type = Reference<$$tableFields.cmdb_rel_type, $$GlideRecord.cmdb_rel_type> & sys_metadata;
 
    /**
     * Reference element for the "CI Relationship" record type (cmdb_rel_ci).
     */
    export type cmdb_rel_ci = Reference<$$tableFields.cmdb_rel_ci, $$GlideRecord.cmdb_rel_ci>;
 
    /**
     * Reference element for the "Virtual Machine Object" record type (cmdb_ci_vm_object).
     */
    export type cmdb_ci_vm_object = Reference<$$tableFields.cmdb_ci_vm_object, $$GlideRecord.cmdb_ci_vm_object> & cmdb_ci;
 
    /**
     * Reference element for the "VMware vCenter Object" record type (cmdb_ci_vcenter_object).
     */
    export type cmdb_ci_vcenter_object = Reference<$$tableFields.cmdb_ci_vcenter_object, $$GlideRecord.cmdb_ci_vcenter_object> & cmdb_ci_vm_object;
 
    /**
     * Reference element for the "Application" record type (cmdb_ci_appl).
     */
    export type cmdb_ci_appl = Reference<$$tableFields.cmdb_ci_appl, $$GlideRecord.cmdb_ci_appl> & cmdb_ci;
 
    /**
     * Reference element for the "VMware vCenter Instance" record type (cmdb_ci_vcenter).
     */
    export type cmdb_ci_vcenter = Reference<$$tableFields.cmdb_ci_vcenter, $$GlideRecord.cmdb_ci_vcenter> & cmdb_ci_appl;
 
    /**
     * Reference element for the "Running Process" record type (cmdb_running_process).
     */
    export type cmdb_running_process = Reference<$$tableFields.cmdb_running_process, $$GlideRecord.cmdb_running_process>;
 
    /**
     * Reference element for the "Cloud Network" record type (cmdb_ci_network).
     */
    export type cmdb_ci_network = Reference<$$tableFields.cmdb_ci_network, $$GlideRecord.cmdb_ci_network> & cmdb_ci_vcenter_object;
 
    /**
     * Reference element for the "Classification" record type (discovery_classy).
     */
    export type discovery_classy = Reference<$$tableFields.discovery_classy, $$GlideRecord.discovery_classy> & sys_metadata;
 
    /**
     * Reference element for the "Computer" record type (cmdb_ci_computer).
     */
    export type cmdb_ci_computer = Reference<$$tableFields.cmdb_ci_computer, $$GlideRecord.cmdb_ci_computer> & cmdb_ci_hardware;
 
    /**
     * Reference element for the "Server" record type (cmdb_ci_server).
     */
    export type cmdb_ci_server = Reference<$$tableFields.cmdb_ci_server, $$GlideRecord.cmdb_ci_server> & cmdb_ci_computer;
 
    /**
     * Reference element for the "Cluster" record type (cmdb_ci_cluster).
     */
    export type cmdb_ci_cluster = Reference<$$tableFields.cmdb_ci_cluster, $$GlideRecord.cmdb_ci_cluster> & cmdb_ci;
 
    /**
     * Reference element for the "IP Network" record type (cmdb_ci_ip_network).
     */
    export type cmdb_ci_ip_network = Reference<$$tableFields.cmdb_ci_ip_network, $$GlideRecord.cmdb_ci_ip_network> & cmdb_ci;
 
    /**
     * Reference element for the "Discovery Status" record type (discovery_status).
     */
    export type discovery_status = Reference<$$tableFields.discovery_status, $$GlideRecord.discovery_status>;
 
    /**
     * Reference element for the "Scheduled Job" record type (sysauto).
     */
    export type sysauto = Reference<$$tableFields.sysauto, $$GlideRecord.sysauto> & sys_metadata;
 
    /**
     * Reference element for the "Scheduled Script Execution" record type (sysauto_script).
     */
    export type sysauto_script = Reference<$$tableFields.sysauto_script, $$GlideRecord.sysauto_script> & sysauto;
 
    /**
     * Reference element for the "MID Server Cluster" record type (ecc_agent_cluster).
     */
    export type ecc_agent_cluster = Reference<$$tableFields.ecc_agent_cluster, $$GlideRecord.ecc_agent_cluster>;
 
    /**
     * Reference element for the "Hardware" record type (cmdb_ci_hardware).
     */
    export type cmdb_ci_hardware = Reference<$$tableFields.cmdb_ci_hardware, $$GlideRecord.cmdb_ci_hardware> & cmdb_ci;
 
    /**
     * Reference element for the "Network Gear" record type (cmdb_ci_netgear).
     */
    export type cmdb_ci_netgear = Reference<$$tableFields.cmdb_ci_netgear, $$GlideRecord.cmdb_ci_netgear> & cmdb_ci_hardware;
 
    /**
     * Reference element for the "Network Adapter" record type (cmdb_ci_network_adapter).
     */
    export type cmdb_ci_network_adapter = Reference<$$tableFields.cmdb_ci_network_adapter, $$GlideRecord.cmdb_ci_network_adapter> & cmdb_ci;
 
    /**
     * Reference element for the "Company" record type (core_company).
     */
    export type core_company = Reference<$$tableFields.core_company, $$GlideRecord.core_company>;
 
    /**
     * Reference element for the "Base Theme" record type (sys_ui_base_theme).
     */
    export type sys_ui_base_theme = Reference<$$tableFields.sys_ui_base_theme, $$GlideRecord.sys_ui_base_theme> & sys_metadata;
 
    /**
     * Reference element for the "Theme" record type (sys_ui_theme).
     */
    export type sys_ui_theme = Reference<$$tableFields.sys_ui_theme, $$GlideRecord.sys_ui_theme> & sys_metadata;
 
    /**
     * Reference element for the "Department" record type (cmn_department).
     */
    export type cmn_department = Reference<$$tableFields.cmn_department, $$GlideRecord.cmn_department>;
 
    /**
     * Reference element for the "Location" record type (cmn_location).
     */
    export type cmn_location = Reference<$$tableFields.cmn_location, $$GlideRecord.cmn_location>;
 
    /**
     * Reference element for the "Sys Phone Territory" record type (sys_phone_territory).
     */
    export type sys_phone_territory = Reference<$$tableFields.sys_phone_territory, $$GlideRecord.sys_phone_territory>;
 
    /**
     * Reference element for the "User" record type (sys_user).
     */
    export type sys_user = Reference<$$tableFields.sys_user, $$GlideRecord.sys_user>;
 
    /**
     * Reference element for the "LDAP Server" record type (ldap_server_config).
     */
    export type ldap_server_config = Reference<$$tableFields.ldap_server_config, $$GlideRecord.ldap_server_config> & sys_metadata;
 
    /**
     * Reference element for the "Import Export Map" record type (sys_impex_map).
     */
    export type sys_impex_map = Reference<$$tableFields.sys_impex_map, $$GlideRecord.sys_impex_map> & sys_metadata;
 
    /**
     * Reference element for the "Data Source" record type (sys_data_source).
     */
    export type sys_data_source = Reference<$$tableFields.sys_data_source, $$GlideRecord.sys_data_source> & sys_metadata;
 
    /**
     * Reference element for the "Action Type Base" record type (sys_hub_action_type_base).
     */
    export type sys_hub_action_type_base = Reference<$$tableFields.sys_hub_action_type_base, $$GlideRecord.sys_hub_action_type_base> & sys_metadata;
 
    /**
     * Reference element for the "Action Type" record type (sys_hub_action_type_definition).
     */
    export type sys_hub_action_type_definition = Reference<$$tableFields.sys_hub_action_type_definition, $$GlideRecord.sys_hub_action_type_definition> & sys_hub_action_type_base;
 
    /**
     * Reference element for the "LDAP OU Definition" record type (ldap_ou_config).
     */
    export type ldap_ou_config = Reference<$$tableFields.ldap_ou_config, $$GlideRecord.ldap_ou_config> & sys_metadata;
 
    /**
     * Reference element for the "Menu List" record type (sys_perspective).
     */
    export type sys_perspective = Reference<$$tableFields.sys_perspective, $$GlideRecord.sys_perspective> & sys_metadata;
 
    /**
     * Reference element for the "Building" record type (cmn_building).
     */
    export type cmn_building = Reference<$$tableFields.cmn_building, $$GlideRecord.cmn_building>;
 
    /**
     * Reference element for the "Role" record type (sys_user_role).
     */
    export type sys_user_role = Reference<$$tableFields.sys_user_role, $$GlideRecord.sys_user_role> & sys_metadata;
 
    /**
     * Reference element for the "Group" record type (sys_user_group).
     */
    export type sys_user_group = Reference<$$tableFields.sys_user_group, $$GlideRecord.sys_user_group>;
 
    /**
     * Reference element for the "Group Member" record type (sys_user_grmember).
     */
    export type sys_user_grmember = Reference<$$tableFields.sys_user_grmember, $$GlideRecord.sys_user_grmember>;
 
    /**
     * Reference element for the "Number" record type (sys_number).
     */
    export type sys_number = Reference<$$tableFields.sys_number, $$GlideRecord.sys_number> & sys_metadata;
 
    /**
     * Reference element for the "Table" record type (sys_db_object).
     */
    export type sys_db_object = Reference<$$tableFields.sys_db_object, $$GlideRecord.sys_db_object> & sys_metadata;
 
    /**
     * Reference element for the "Dictionary Entry" record type (sys_dictionary).
     */
    export type sys_dictionary = Reference<$$tableFields.sys_dictionary, $$GlideRecord.sys_dictionary> & sys_metadata;
 
    /**
     * Reference element for the "Dynamic Filter Options" record type (sys_filter_option_dynamic).
     */
    export type sys_filter_option_dynamic = Reference<$$tableFields.sys_filter_option_dynamic, $$GlideRecord.sys_filter_option_dynamic> & sys_metadata;
 
    /**
     * Reference element for the "Field class" record type (sys_glide_object).
     */
    export type sys_glide_object = Reference<$$tableFields.sys_glide_object, $$GlideRecord.sys_glide_object> & sys_metadata;
 
    /**
     * Reference element for the "User Role" record type (sys_user_has_role).
     */
    export type sys_user_has_role = Reference<$$tableFields.sys_user_has_role, $$GlideRecord.sys_user_has_role>;
 
    /**
     * Reference element for the "Contained Role" record type (sys_user_role_contains).
     */
    export type sys_user_role_contains = Reference<$$tableFields.sys_user_role_contains, $$GlideRecord.sys_user_role_contains> & sys_metadata;
 
    /**
     * Reference element for the "Group Role" record type (sys_group_has_role).
     */
    export type sys_group_has_role = Reference<$$tableFields.sys_group_has_role, $$GlideRecord.sys_group_has_role>;
 
    /**
     * Reference element for the "Choice" record type (sys_choice).
     */
    export type sys_choice = Reference<$$tableFields.sys_choice, $$GlideRecord.sys_choice>;
 
    /**
     * Reference element for the "Choice Set" record type (sys_choice_set).
     */
    export type sys_choice_set = Reference<$$tableFields.sys_choice_set, $$GlideRecord.sys_choice_set> & sys_metadata;
 
    /**
     * Reference element for the "Question" record type (question).
     */
    export type question = Reference<$$tableFields.question, $$GlideRecord.question> & sys_metadata;
 
    /**
     * Reference element for the "UI Page" record type (sys_ui_page).
     */
    export type sys_ui_page = Reference<$$tableFields.sys_ui_page, $$GlideRecord.sys_ui_page> & sys_metadata;
 
    /**
     * Reference element for the "Variable" record type (item_option_new).
     */
    export type item_option_new = Reference<$$tableFields.item_option_new, $$GlideRecord.item_option_new> & question;

    /**
     * Reference element for the "UX Macroponent Type" record type (sys_ux_macroponent_type).
     */
    export type sys_ux_macroponent_type = Reference<$$tableFields.sys_ux_macroponent_type, $$GlideRecord.sys_ux_macroponent_type> & sys_metadata;
 
    /**
     * Reference element for the "UX Macroponent Definition" record type (sys_ux_macroponent).
     */
    export type sys_ux_macroponent = Reference<$$tableFields.sys_ux_macroponent, $$GlideRecord.sys_ux_macroponent> & sys_metadata;
 
    /**
     * Reference element for the "UX Extension Point" record type (sys_ux_extension_point).
     */
    export type sys_ux_extension_point = Reference<$$tableFields.sys_ux_extension_point, $$GlideRecord.sys_ux_extension_point> & sys_metadata;
 
    /**
     * Reference element for the "UX Controller" record type (sys_ux_controller).
     */
    export type sys_ux_controller = Reference<$$tableFields.sys_ux_controller, $$GlideRecord.sys_ux_controller> & sys_metadata;
 
    /**
     * Reference element for the "UX Component Definition" record type (sys_ux_lib_component).
     */
    export type sys_ux_lib_component = Reference<$$tableFields.sys_ux_lib_component, $$GlideRecord.sys_ux_lib_component> & sys_metadata;
 
    /**
     * Reference element for the "UX Source Code" record type (sys_ux_lib_source_script).
     */
    export type sys_ux_lib_source_script = Reference<$$tableFields.sys_ux_lib_source_script, $$GlideRecord.sys_ux_lib_source_script> & sys_metadata;
 
    /**
     * Reference element for the "UX Children Layout" record type (sys_ux_children_layout).
     */
    export type sys_ux_children_layout = Reference<$$tableFields.sys_ux_children_layout, $$GlideRecord.sys_ux_children_layout> & sys_metadata;
 
    /**
     * Reference element for the "UX Children Definition" record type (sys_ux_children).
     */
    export type sys_ux_children = Reference<$$tableFields.sys_ux_children, $$GlideRecord.sys_ux_children> & sys_metadata;
 
    /**
     * Reference element for the "Macroponent Priority" record type (sys_ux_macroponent_priority).
     */
    export type sys_ux_macroponent_priority = Reference<$$tableFields.sys_ux_macroponent_priority, $$GlideRecord.sys_ux_macroponent_priority> & sys_metadata;
 
    /**
     * Reference element for the "Variable Category" record type (item_option_category).
     */
    export type item_option_category = Reference<$$tableFields.item_option_category, $$GlideRecord.item_option_category> & sys_metadata;
 
    /**
     * Reference element for the "Variable Set" record type (item_option_new_set).
     */
    export type item_option_new_set = Reference<$$tableFields.item_option_new_set, $$GlideRecord.item_option_new_set> & sys_metadata;
 
    /**
     * Reference element for the "Flow catalog variable" record type (sys_flow_cat_variable).
     */
    export type sys_flow_cat_variable = Reference<$$tableFields.sys_flow_cat_variable, $$GlideRecord.sys_flow_cat_variable> & item_option_new;
 
    /**
     * Reference element for the "Workflow SC Variable" record type (wf_variable).
     */
    export type wf_variable = Reference<$$tableFields.wf_variable, $$GlideRecord.wf_variable> & item_option_new;
 
    /**
     * Reference element for the "Producer Set" record type (item_option_new_producer_set).
     */
    export type item_option_new_producer_set = Reference<$$tableFields.item_option_new_producer_set, $$GlideRecord.item_option_new_producer_set> & item_option_new_set;
 
    /**
     * Reference element for the "Decision" record type (sys_decision_question).
     */
    export type sys_decision_question = Reference<$$tableFields.sys_decision_question, $$GlideRecord.sys_decision_question> & sys_metadata;
 
    /**
     * Reference element for the "Help Question" record type (help_question).
     */
    export type help_question = Reference<$$tableFields.help_question, $$GlideRecord.help_question> & sys_metadata;
 
    /**
     * Reference element for the "Decision Table" record type (sys_decision).
     */
    export type sys_decision = Reference<$$tableFields.sys_decision, $$GlideRecord.sys_decision> & sys_metadata;
 
    /**
     * Reference element for the "Help Content" record type (help_content).
     */
    export type help_content = Reference<$$tableFields.help_content, $$GlideRecord.help_content> & sys_metadata;
 
    /**
     * Reference element for the "Help Guidance Step" record type (help_guidance_step).
     */
    export type help_guidance_step = Reference<$$tableFields.help_guidance_step, $$GlideRecord.help_guidance_step> & sys_metadata;
 
    /**
     * Reference element for the "Guidance" record type (help_guidance).
     */
    export type help_guidance = Reference<$$tableFields.help_guidance, $$GlideRecord.help_guidance> & sys_metadata;
 
    /**
     * Reference element for the "Embedded Help" record type (sys_embedded_help_content).
     */
    export type sys_embedded_help_content = Reference<$$tableFields.sys_embedded_help_content, $$GlideRecord.sys_embedded_help_content> & sys_metadata;
 
    /**
     * Reference element for the "Password Reset Question" record type (pwd_question).
     */
    export type pwd_question = Reference<$$tableFields.pwd_question, $$GlideRecord.pwd_question> & sys_metadata;
 
    /**
     * Reference element for the "Variable Layout" record type (item_option_layout).
     */
    export type item_option_layout = Reference<$$tableFields.item_option_layout, $$GlideRecord.item_option_layout> & question;
 
    /**
     * Reference element for the "Wizard Variable" record type (expert_variable).
     */
    export type expert_variable = Reference<$$tableFields.expert_variable, $$GlideRecord.expert_variable> & question;
 
    /**
     * Reference element for the "Wizard" record type (expert).
     */
    export type expert = Reference<$$tableFields.expert, $$GlideRecord.expert> & sys_metadata;
 
    /**
     * Reference element for the "Wizard Panel" record type (expert_panel).
     */
    export type expert_panel = Reference<$$tableFields.expert_panel, $$GlideRecord.expert_panel> & sys_metadata;
 
    /**
     * Reference element for the "Banner Step" record type (expert_banner_step).
     */
    export type expert_banner_step = Reference<$$tableFields.expert_banner_step, $$GlideRecord.expert_banner_step> & sys_metadata;
 
    /**
     * Reference element for the "Question" record type (sc_ic_question).
     */
    export type sc_ic_question = Reference<$$tableFields.sc_ic_question, $$GlideRecord.sc_ic_question> & sys_metadata;
 
    /**
     * Reference element for the "Section" record type (sc_ic_section).
     */
    export type sc_ic_section = Reference<$$tableFields.sc_ic_section, $$GlideRecord.sc_ic_section> & sys_metadata;
 
    /**
     * Reference element for the "Column" record type (sc_ic_column).
     */
    export type sc_ic_column = Reference<$$tableFields.sc_ic_column, $$GlideRecord.sc_ic_column> & sys_metadata;
 
    /**
     * Reference element for the "Question Choice" record type (question_choice).
     */
    export type question_choice = Reference<$$tableFields.question_choice, $$GlideRecord.question_choice> & sys_metadata;
 
    /**
     * Reference element for the "Question Choice" record type (sc_ic_question_choice).
     */
    export type sc_ic_question_choice = Reference<$$tableFields.sc_ic_question_choice, $$GlideRecord.sc_ic_question_choice> & sys_metadata;
 
    /**
     * Reference element for the "Question Class" record type (sc_ic_question_class).
     */
    export type sc_ic_question_class = Reference<$$tableFields.sc_ic_question_class, $$GlideRecord.sc_ic_question_class> & sys_metadata;
 
    /**
     * Reference element for the "Question Type" record type (sc_ic_question_type).
     */
    export type sc_ic_question_type = Reference<$$tableFields.sc_ic_question_type, $$GlideRecord.sc_ic_question_type> & sys_metadata;
 
    /**
     * Reference element for the "Question Type Choice" record type (sc_ic_question_type_choice).
     */
    export type sc_ic_question_type_choice = Reference<$$tableFields.sc_ic_question_type_choice, $$GlideRecord.sc_ic_question_type_choice> & sys_metadata;
 
    /**
     * Reference element for the "Assessment Instance Question" record type (asmt_assessment_instance_question).
     */
    export type asmt_assessment_instance_question = Reference<$$tableFields.asmt_assessment_instance_question, $$GlideRecord.asmt_assessment_instance_question>;
 
    /**
     * Reference element for the "Assessment Metric Type Group" record type (asmt_metric_type_group).
     */
    export type asmt_metric_type_group = Reference<$$tableFields.asmt_metric_type_group, $$GlideRecord.asmt_metric_type_group>;
 
    /**
     * Reference element for the "Assessment Metric Definition" record type (asmt_metric_definition).
     */
    export type asmt_metric_definition = Reference<$$tableFields.asmt_metric_definition, $$GlideRecord.asmt_metric_definition> & sys_metadata;
 
    /**
     * Reference element for the "Assessment Instance" record type (asmt_assessment_instance).
     */
    export type asmt_assessment_instance = Reference<$$tableFields.asmt_assessment_instance, $$GlideRecord.asmt_assessment_instance>;
 
    /**
     * Reference element for the "Trigger Condition" record type (asmt_condition).
     */
    export type asmt_condition = Reference<$$tableFields.asmt_condition, $$GlideRecord.asmt_condition> & sys_metadata;
 
    /**
     * Reference element for the "Assessment Group" record type (asmt_assessment).
     */
    export type asmt_assessment = Reference<$$tableFields.asmt_assessment, $$GlideRecord.asmt_assessment>;
 
    /**
     * Reference element for the "Assessable Record" record type (asmt_assessable_record).
     */
    export type asmt_assessable_record = Reference<$$tableFields.asmt_assessable_record, $$GlideRecord.asmt_assessable_record>;
 
    /**
     * Reference element for the "Live Group Profile" record type (live_group_profile).
     */
    export type live_group_profile = Reference<$$tableFields.live_group_profile, $$GlideRecord.live_group_profile>;
 
    /**
     * Reference element for the "Multi Row Question Answer" record type (sc_multi_row_question_answer).
     */
    export type sc_multi_row_question_answer = Reference<$$tableFields.sc_multi_row_question_answer, $$GlideRecord.sc_multi_row_question_answer>;
 
    /**
     * Reference element for the "Options" record type (sc_item_option).
     */
    export type sc_item_option = Reference<$$tableFields.sc_item_option, $$GlideRecord.sc_item_option>;
 
    /**
     * Reference element for the "Item Option" record type (sc_cat_item_option).
     */
    export type sc_cat_item_option = Reference<$$tableFields.sc_cat_item_option, $$GlideRecord.sc_cat_item_option> & sys_metadata;
 
    /**
     * Reference element for the "Item" record type (sc_cart_item).
     */
    export type sc_cart_item = Reference<$$tableFields.sc_cart_item, $$GlideRecord.sc_cart_item>;
 
    /**
     * Reference element for the "Shopping Cart" record type (sc_cart).
     */
    export type sc_cart = Reference<$$tableFields.sc_cart, $$GlideRecord.sc_cart>;
 
    /**
     * Reference element for the "Question Answer" record type (question_answer).
     */
    export type question_answer = Reference<$$tableFields.question_answer, $$GlideRecord.question_answer>;
 
    /**
     * Reference element for the "Password Reset Active Question" record type (pwd_active_question).
     */
    export type pwd_active_question = Reference<$$tableFields.pwd_active_question, $$GlideRecord.pwd_active_question>;
 
    /**
     * GlideRecord representing the "Social Q&A Question" table (kb_social_qa_question).
     */
    export type kb_social_qa_question = $$tableFields.kb_social_qa_question & GlideRecord;
 
    /**
     * Reference element for the "Social Q&A Answer" record type (kb_social_qa_answer).
     */
    export type kb_social_qa_answer = Reference<$$tableFields.kb_social_qa_answer, $$GlideRecord.kb_social_qa_answer>;
 
    /**
     * Reference element for the "Knowledge Category" record type (kb_category).
     */
    export type kb_category = Reference<$$tableFields.kb_category, $$GlideRecord.kb_category>;
 
    /**
     * Reference element for the "Live Profile" record type (live_profile).
     */
    export type live_profile = Reference<$$tableFields.live_profile, $$GlideRecord.live_profile>;
 
    /**
     * Reference element for the "Attachment" record type (sys_attachment).
     */
    export type sys_attachment = Reference<$$tableFields.sys_attachment, $$GlideRecord.sys_attachment>;
 
    /**
     * Reference element for the "Attachment Document" record type (sys_attachment_doc).
     */
    export type sys_attachment_doc = Reference<$$tableFields.sys_attachment_doc, $$GlideRecord.sys_attachment_doc>;
 
    /**
     * Reference element for the "Attachment Document V2" record type (sys_attachment_doc_v2).
     */
    export type sys_attachment_doc_v2 = Reference<$$tableFields.sys_attachment_doc_v2, $$GlideRecord.sys_attachment_doc_v2>;
 
    /**
     * Reference element for the "Attachment Icon Rule" record type (sys_attachment_icon_rule).
     */
    export type sys_attachment_icon_rule = Reference<$$tableFields.sys_attachment_icon_rule, $$GlideRecord.sys_attachment_icon_rule>;
 
    /**
     * Reference element for the "System Plugin" record type (v_plugin).
     */
    export type v_plugin = Reference<$$tableFields.v_plugin, $$GlideRecord.v_plugin>;
 
    /**
     * Reference element for the "Setup Dependency" record type (help_setup_dependency).
     */
    export type help_setup_dependency = Reference<$$tableFields.help_setup_dependency, $$GlideRecord.help_setup_dependency> & sys_metadata;
 
    /**
     * Reference element for the "Question Regular Expression" record type (question_regex).
     */
    export type question_regex = Reference<$$tableFields.question_regex, $$GlideRecord.question_regex> & sys_metadata;
  
    /**
     * Reference element for the "Knowledge" record type (kb_knowledge).
     */
    export type kb_knowledge = Reference<$$tableFields.kb_knowledge, $$GlideRecord.kb_knowledge>;
 
    /**
     * Reference element for the "Knowledge keyword" record type (kb_knowledge_keyword).
     */
    export type kb_knowledge_keyword = Reference<$$tableFields.kb_knowledge_keyword, $$GlideRecord.kb_knowledge_keyword> & sys_metadata;
 
    /**
     * Reference element for the "Related Articles" record type (kb_2_kb).
     */
    export type kb_2_kb = Reference<$$tableFields.kb_2_kb, $$GlideRecord.kb_2_kb>;
 
    /**
     * Reference element for the "Related Articles" record type (sc_2_kb).
     */
    export type sc_2_kb = Reference<$$tableFields.sc_2_kb, $$GlideRecord.sc_2_kb>;
 
    /**
     * Reference element for the "Related Catalog Items" record type (kb_2_sc).
     */
    export type kb_2_sc = Reference<$$tableFields.kb_2_sc, $$GlideRecord.kb_2_sc>;
 
    /**
     * Reference element for the "Incident" record type (incident).
     */
    export type incident = Reference<$$tableFields.incident, $$GlideRecord.incident> & task;
 
    /**
     * Reference element for the "Problem" record type (problem).
     */
    export type problem = Reference<$$tableFields.problem, $$GlideRecord.problem> & task;
 
    /**
     * Reference element for the "Change Request" record type (change_request).
     */
    export type change_request = Reference<$$tableFields.change_request, $$GlideRecord.change_request> & task;
 
    /**
     * Reference element for the "Standard Change Template Version" record type (std_change_producer_version).
     */
    export type std_change_producer_version = Reference<$$tableFields.std_change_producer_version, $$GlideRecord.std_change_producer_version>;
 
    /**
     * Reference element for the "Standard Change Proposal" record type (std_change_proposal).
     */
    export type std_change_proposal = Reference<$$tableFields.std_change_proposal, $$GlideRecord.std_change_proposal> & task;
 
    /**
     * Reference element for the "Standard Change Template" record type (std_change_record_producer).
     */
    export type std_change_record_producer = Reference<$$tableFields.std_change_record_producer, $$GlideRecord.std_change_record_producer> & sc_cat_item_producer;
 
    /**
     * Reference element for the "Record Producer" record type (sc_cat_item_producer).
     */
    export type sc_cat_item_producer = Reference<$$tableFields.sc_cat_item_producer, $$GlideRecord.sc_cat_item_producer> & sc_cat_item;
 
    /**
     * Reference element for the "Change Model" record type (chg_model).
     */
    export type chg_model = Reference<$$tableFields.chg_model, $$GlideRecord.chg_model> & sttrm_model;
 
    /**
     * Reference element for the "State Transition Model" record type (sttrm_model).
     */
    export type sttrm_model = Reference<$$tableFields.sttrm_model, $$GlideRecord.sttrm_model> & sys_metadata;
 
    /**
     * Reference element for the "SLA Conditions" record type (sla_condition_class).
     */
    export type sla_condition_class = Reference<$$tableFields.sla_condition_class, $$GlideRecord.sla_condition_class> & sys_metadata;
 
    /**
     * Reference element for the "Task SLA" record type (task_sla).
     */
    export type task_sla = Reference<$$tableFields.task_sla, $$GlideRecord.task_sla>;
 
    /**
     * Reference element for the "SLA Definition" record type (contract_sla).
     */
    export type contract_sla = Reference<$$tableFields.contract_sla, $$GlideRecord.contract_sla> & sys_metadata;
 
    /**
     * Reference element for the "View Table" record type (sys_db_view_table).
     */
    export type sys_db_view_table = Reference<$$tableFields.sys_db_view_table, $$GlideRecord.sys_db_view_table> & sys_metadata;
 
    /**
     * Reference element for the "Database View" record type (sys_db_view).
     */
    export type sys_db_view = Reference<$$tableFields.sys_db_view, $$GlideRecord.sys_db_view> & sys_metadata;
 
    /**
     * Reference element for the "View Field" record type (sys_db_view_table_field).
     */
    export type sys_db_view_table_field = Reference<$$tableFields.sys_db_view_table_field, $$GlideRecord.sys_db_view_table_field> & sys_metadata;
 
    /**
     * Reference element for the "Catalog UI Policy Action" record type (catalog_ui_policy_action).
     */
    export type catalog_ui_policy_action = Reference<$$tableFields.catalog_ui_policy_action, $$GlideRecord.catalog_ui_policy_action> & sys_ui_policy_action;
 
    /**
     * Reference element for the "UI Policy Action" record type (sys_ui_policy_action).
     */
    export type sys_ui_policy_action = Reference<$$tableFields.sys_ui_policy_action, $$GlideRecord.sys_ui_policy_action> & sys_metadata;
 
    /**
     * Reference element for the "UI Policy" record type (sys_ui_policy).
     */
    export type sys_ui_policy = Reference<$$tableFields.sys_ui_policy, $$GlideRecord.sys_ui_policy> & sys_metadata;
 
    /**
     * Reference element for the "Catalog UI Policy" record type (catalog_ui_policy).
     */
    export type catalog_ui_policy = Reference<$$tableFields.catalog_ui_policy, $$GlideRecord.catalog_ui_policy> & sys_ui_policy;
 
    /**
     * Reference element for the "Catalog Task" record type (sc_task).
     */
    export type sc_task = Reference<$$tableFields.sc_task, $$GlideRecord.sc_task> & task;
 
    /**
     * Reference element for the "Approval" record type (sysapproval_approver).
     */
    export type sysapproval_approver = Reference<$$tableFields.sysapproval_approver, $$GlideRecord.sysapproval_approver>;
 
    /**
     * Reference element for the "Group approval" record type (sysapproval_group).
     */
    export type sysapproval_group = Reference<$$tableFields.sysapproval_group, $$GlideRecord.sysapproval_group> & task;
 
    /**
     * Reference element for the "State Binding" record type (state_binding).
     */
    export type state_binding = Reference<$$tableFields.state_binding, $$GlideRecord.state_binding>;
 
    /**
     * Reference element for the "Process Guides" record type (process_guide).
     */
    export type process_guide = Reference<$$tableFields.process_guide, $$GlideRecord.process_guide> & sys_metadata;
 
    /**
     * Reference element for the "Approval Rules" record type (sysrule_approvals).
     */
    export type sysrule_approvals = Reference<$$tableFields.sysrule_approvals, $$GlideRecord.sysrule_approvals> & sysrule;
 
    /**
     * Reference element for the "Process Steps" record type (process_step).
     */
    export type process_step = Reference<$$tableFields.process_step, $$GlideRecord.process_step> & sys_metadata;
 
    /**
     * Reference element for the "Storage File Share" record type (cmdb_ci_storage_fileshare).
     */
    export type cmdb_ci_storage_fileshare = Reference<$$tableFields.cmdb_ci_storage_fileshare, $$GlideRecord.cmdb_ci_storage_fileshare> & cmdb_ci;

    /**
     * Reference element for the "Purchase order line items" record type (proc_po_item).
     */
    export type proc_po_item = Reference<$$tableFields.proc_po_item, $$GlideRecord.proc_po_item>;

    /**
     * Reference element for the "Receiving Slip Line" record type (proc_rec_slip_item).
     */
    export type proc_rec_slip_item = Reference<$$tableFields.proc_rec_slip_item, $$GlideRecord.proc_rec_slip_item>;

    /**
     * Reference element for the "Portfolio" record type (pm_portfolio).
     */
    export type pm_portfolio = Reference<$$tableFields.pm_portfolio, $$GlideRecord.pm_portfolio>;

    /**
     * Reference element for the "Program" record type (pm_program).
     */
    export type pm_program = Reference<$$tableFields.pm_program, $$GlideRecord.pm_program> & planned_task;

    /**
     * Reference element for the "Demand" record type (dmn_demand).
     */
    export type dmn_demand = Reference<$$tableFields.dmn_demand, $$GlideRecord.dmn_demand> & task;

    /**
     * Reference element for the "Project" record type (pm_project).
     */
    export type pm_project = Reference<$$tableFields.pm_project, $$GlideRecord.pm_project> & planned_task;

    /**
     * Reference element for the "Project Task" record type (pm_project_task).
     */
    export type pm_project_task = Reference<$$tableFields.pm_project_task, $$GlideRecord.pm_project_task> & planned_task;

    /**
     * Reference element for the "Taxonomy Layer Definition" record type (spm_taxonomy_layer_definition).
     */
    export type spm_taxonomy_layer_definition = Reference<$$tableFields.spm_taxonomy_layer_definition, $$GlideRecord.spm_taxonomy_layer_definition>;

    /**
     * Reference element for the "Virtualization Server" record type (cmdb_ci_virtualization_server).
     */
    export type cmdb_ci_virtualization_server = Reference<$$tableFields.cmdb_ci_virtualization_server, $$GlideRecord.cmdb_ci_virtualization_server> & cmdb_ci_server;

    /**
     * Reference element for the "Time Sheet Policy" record type (time_sheet_policy).
     */
    export type time_sheet_policy = Reference<$$tableFields.time_sheet_policy, $$GlideRecord.time_sheet_policy>;

    /**
     * Reference element for the "Asset Task" record type (asset_task).
     */
    export type asset_task = Reference<$$tableFields.asset_task, $$GlideRecord.asset_task> & task;

    /**
     * Reference element for the "Purchase Order" record type (proc_po).
     */
    export type proc_po = Reference<$$tableFields.proc_po, $$GlideRecord.proc_po>;

    /**
     * Reference element for the "Receiving Slip" record type (proc_rec_slip).
     */
    export type proc_rec_slip = Reference<$$tableFields.proc_rec_slip, $$GlideRecord.proc_rec_slip>;

    /**
     * Reference element for the "Goal" record type (goal).
     */
    export type goal = Reference<$$tableFields.goal, $$GlideRecord.goal>;

    /**
     * Reference element for the "Idea" record type (im_idea_core).
     */
    export type im_idea_core = Reference<$$tableFields.im_idea_core, $$GlideRecord.im_idea_core> & task;

    /**
     * Reference element for the "Idea" record type (idea).
     */
    export type idea = Reference<$$tableFields.idea, $$GlideRecord.idea> & im_idea_core;

    /**
     * GlideRecord representing the "Rate Model" table (rate_model).
     */
    export type rate_model = $$tableFields.rate_model & GlideRecord;

    /**
     * GlideRecord representing the "Rate Type" table (rate_type).
     */
    export type rate_type = $$tableFields.rate_type & sys_metadata;

    /**
     * GlideRecord representing the "Unit" table (pa_units).
     */
    export type pa_units = $$tableFields.pa_units & sys_metadata;

    /**
     * GlideRecord representing the "Idea module" table (im_module).
     */
    export type im_module = $$tableFields.im_module & GlideRecord;

    /**
     * GlideRecord representing the "Currency" table (fx_currency).
     */
    export type fx_currency = $$tableFields.fx_currency & GlideRecord;

    /**
     * GlideRecord representing the "Rate Model Context" table (rate_model_transaction_entity).
     */
    export type rate_model_transaction_entity = $$tableFields.rate_model_transaction_entity & GlideRecord;

    /**
     * GlideRecord representing the "Similarity Definition" table (ml_capability_definition_similarity).
     */
    export type ml_capability_definition_similarity = $$tableFields.ml_capability_definition_similarity & ml_capability_definition_base;

    /**
     * Reference element for the "Solution Definition" record type (ml_capability_definition_base).
     */
    export type ml_capability_definition_base = Reference<$$tableFields.ml_capability_definition_base, $$GlideRecord.ml_capability_definition_base> & sys_metadata;

    /**
     * Reference element for the "Ml Capability" record type (ml_capability).
     */
    export type ml_capability = Reference<$$tableFields.ml_capability, $$GlideRecord.ml_capability> & sys_metadata;

    /**
     * Reference element for the "Word corpus" record type (ml_word_vector_corpus).
     */
    export type ml_word_vector_corpus = Reference<$$tableFields.ml_word_vector_corpus, $$GlideRecord.ml_word_vector_corpus>;

    // #endregion
}

declare namespace $$tableFields {
    // #region Done

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
         * "Created by" element.
         */
        sys_created_by: GlideElement;
 
        /**
         * Created element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        sys_created_on: GlideElementGlideObject;
 
        /**
         * Domain element.
         */
        sys_domain: GlideElementDomainId;
 
        /**
         * "Domain Path" element.
         */
        sys_domain_path: GlideElement;
 
        /**
         * "Sys ID" element.
         */
        sys_id: GlideElement;
 
        /**
         * Updates element.
         */
        sys_mod_count: GlideElementNumeric;
 
        /**
         * "Updated by" element.
         */
        sys_updated_by: GlideElement;
 
        /**
         * Updated element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        sys_updated_on: GlideElementGlideObject;
 
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
     * "Execution Plan" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_delivery_plan}
     * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
     */
    export interface sc_cat_item_delivery_plan extends sys_metadata {
        /**
         * Active element.
         */
        active: GlideElementBoolean;
 
        /**
         * Advanced element.
         */
        advanced: GlideElementBoolean;
 
        /**
         * "On Calendar" element.
         * @see {@link $$GlideRecord.sys_calendar}
         */
        calendar: $$GlideElement.sys_calendar;
 
        /**
         * Conditions element.
         */
        condition: GlideElementConditions;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Parent table" element.
         */
        parent_table: GlideElement;
 
        /**
         * Script element.
         */
        script: GlideElement;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * "Task table" element.
         */
        task_table: GlideElement;
 
        /**
         * "Total delivery time" element.
         * Type: Duration (glide_duration); scalar type: datetime
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
         * "Assigned to" element.
         * @see {@link $$GlideRecord.sys_user}
         */
        assigned_to: $$GlideElement.sys_user;
 
        /**
         * Condition element.
         */
        condition: GlideElementConditions;
 
        /**
         * "Condition script" element.
         */
        condition_script: GlideElementScript;
 
        /**
         * "Delivery plan" element.
         * @see {@link $$GlideRecord.sc_cat_item_delivery_plan}
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;
 
        /**
         * "Delivery time" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        delivery_time: GlideElementGlideObject;
 
        /**
         * "Generation script" element.
         */
        generation_script: GlideElementScript;
 
        /**
         * "Fulfillment group" element.
         * @see {@link $$GlideRecord.sys_user_group}
         */
        group: $$GlideElement.sys_user_group;
 
        /**
         * Instructions element.
         */
        instructions: GlideElement;
 
        /**
         * Name element.
         */
        name: GlideElement;
 
        /**
         * Order element.
         */
        order: GlideElementNumeric;
 
        /**
         * "Short description" element.
         */
        short_description: GlideElement;
 
        /**
         * SLA element.
         * @see {@link $$GlideRecord.sysrule_escalate}
         */
        sla: $$GlideElement.sysrule_escalate;
 
        /**
         * "Work notes" element.
         */
        work_notes: GlideElement;
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
     * "Catalog Item" glide record fields.
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
     * "Order guide" glide record fields.
     * @see {@link $$GlideElement.sc_cat_item_guide}
     * @see {@link $$GlideRecord.sc_cat_item_guide}
     */
    export interface sc_cat_item_guide extends sc_cat_item {
        /**
         * "Cascade Variables" element.
         */
        cascade: GlideElementBoolean;
 
        /**
         * "Show Include Toggle" element.
         */
        include_items: GlideElementBoolean;
 
        /**
         * "Order to cart" element.
         */
        order_to_cart: GlideElementBoolean;
 
        /**
         * Script element.
         */
        script: GlideElementScript;
 
        /**
         * "Two step" element.
         */
        two_step: GlideElementBoolean;
 
        /**
         * Validator element.
         */
        validator: GlideElementScript;
    }
 
    /**
     * "Planned Task" glide record fields.
     * @see {@link $$GlideElement.planned_task}
     * @see {@link $$GlideRecord.planned_task}
     */
    export interface planned_task extends task {
        /**
         * "Allow dates outside schedule" element.
         */
        allow_dates_outside_schedule: GlideElementBoolean;
 
        /**
         * "Budget cost" element.
         */
        budget_cost: GlideElementCurrency;
 
        /**
         * Calculation element.
         */
        calculation_type: GlideElement;
 
        /**
         * "Planned capital" element.
         */
        capex_cost: GlideElementCurrency;
 
        /**
         * "Constraint date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        constraint_date: GlideElementGlideObject;
 
        /**
         * "Planned cost" element.
         */
        cost: GlideElementCurrency;
 
        /**
         * "Critical path" element.
         */
        critical_path: GlideElementBoolean;
 
        /**
         * Dependency element.
         */
        dependency: GlideElement;
 
        /**
         * "Planned duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        duration: GlideElementGlideObject;
 
        /**
         * "Planned effort" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        effort: GlideElementGlideObject;
 
        /**
         * "end date" element.
         * Type: Date (glide_date); scalar type: date
         */
        end: GlideElementGlideObject;
 
        /**
         * "Planned end date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        end_date: GlideElementGlideObject;
 
        /**
         * "End date derived from" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        end_date_derived_from: $$GlideElement.planned_task;
 
        /**
         * "Has Issue" element.
         */
        has_conflict: GlideElementBoolean;
 
        /**
         * "HTML description" element.
         * Type: HTML (html); Scalar length: undefined
         */
        html_description: GlideElementGlideObject;
 
        /**
         * "Key milestone" element.
         */
        key_milestone: GlideElementBoolean;
 
        /**
         * Level element.
         */
        level: GlideElementNumeric;
 
        /**
         * Milestone element.
         */
        milestone: GlideElementBoolean;
 
        /**
         * "Model ID" element.
         * @see {@link $$GlideRecord.cmdb_model}
         */
        model_id: $$GlideElement.cmdb_model;
 
        /**
         * "MPP task id" element.
         */
        mpp_task_id: GlideElementNumeric;
 
        /**
         * "Planned operating" element.
         */
        opex_cost: GlideElementCurrency;
 
        /**
         * "Orig sys ID" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        orig_sys_id: $$GlideElement.planned_task;
 
        /**
         * "Orig top task ID" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        orig_top_task_id: $$GlideElement.planned_task;
 
        /**
         * "Override status" element.
         */
        override_status: GlideElementBoolean;
 
        /**
         * "Percent complete" element.
         */
        percent_complete: GlideElementNumeric;
 
        /**
         * "Relation applied" element.
         * @see {@link $$GlideRecord.planned_task_rel_planned_task}
         */
        relation_applied: $$GlideElement.planned_task_rel_planned_task;
 
        /**
         * "Remaining duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        remaining_duration: GlideElementGlideObject;
 
        /**
         * "Remaining effort" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        remaining_effort: GlideElementGlideObject;
 
        /**
         * Rollup element.
         */
        rollup: GlideElementBoolean;
 
        /**
         * "Run calculation brs" element.
         */
        run_calc_brs: GlideElementBoolean;
 
        /**
         * "Original end date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        schedule_end_date: GlideElementGlideObject;
 
        /**
         * "Original start date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        schedule_start_date: GlideElementGlideObject;
 
        /**
         * Shadow element.
         */
        shadow: GlideElementBoolean;
 
        /**
         * "Software Model" element.
         * @see {@link $$GlideRecord.cmdb_software_product_model}
         */
        software_model: $$GlideElement.cmdb_software_product_model;
 
        /**
         * "start date" element.
         * Type: Date (glide_date); scalar type: date
         */
        start: GlideElementGlideObject;
 
        /**
         * "Planned start date" element.
         * Type: "Date/Time" (glide_date_time); scalar type: datetime
         */
        start_date: GlideElementGlideObject;
 
        /**
         * "Start date derived from" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        start_date_derived_from: $$GlideElement.planned_task;
 
        /**
         * Status element.
         */
        status: GlideElement;
 
        /**
         * "Sub tree root" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        sub_tree_root: $$GlideElement.planned_task;
 
        /**
         * Task element.
         */
        task: GlideElement;
 
        /**
         * "Time constraint" element.
         */
        time_constraint: GlideElement;
 
        /**
         * "Time Zone" element.
         */
        time_zone: GlideElement;
 
        /**
         * "Top task" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        top_task: $$GlideElement.planned_task;
 
        /**
         * Version element.
         */
        version: GlideElementNumeric;
 
        /**
         * WBS element.
         */
        wbs: GlideElement;
 
        /**
         * "WBS Order" element.
         */
        wbs_order: GlideElementNumeric;
 
        /**
         * "Actual cost" element.
         */
        work_cost: GlideElementCurrency;
 
        /**
         * "Actual duration" element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        work_duration: GlideElementGlideObject;
 
        /**
         * "Actual effort" element.
         * Type: Duration (glide_duration); scalar type: datetime
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
         * Child element.
         * @see {@link $$GlideRecord.task}
         */
        child: $$GlideElement.task;
 
        /**
         * Parent element.
         * @see {@link $$GlideRecord.task}
         */
        parent: $$GlideElement.task;
 
        /**
         * Type element.
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
         * "Child top task" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        child_top_task: $$GlideElement.planned_task;
 
        /**
         * "External Relation" element.
         */
        external: GlideElementBoolean;
 
        /**
         * "Inter Task Dependency Type" element.
         */
        inter_task_dependency_type: GlideElement;
 
        /**
         * Lag element.
         * Type: Duration (glide_duration); scalar type: datetime
         */
        lag: GlideElementGlideObject;
 
        /**
         * "External Relation Id" element.
         * @see {@link $$GlideRecord.planned_task_rel_planned_task}
         */
        orig_sys_id: $$GlideElement.planned_task_rel_planned_task;
 
        /**
         * "Parent top task" element.
         * @see {@link $$GlideRecord.planned_task}
         */
        parent_top_task: $$GlideElement.planned_task;
 
        /**
         * "Process Flag" element.
         */
        process_flag: GlideElementBoolean;
 
        /**
         * "Run calculation brs" element.
         */
        run_calc_brs: GlideElementBoolean;
 
        /**
         * "Sub Type" element.
         */
        sub_type: GlideElement;
 
        /**
         * Domain element.
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
 
        /**
         * "Sys ID" element.
         */
        sys_id: GlideElement;
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
    
    // #endregion

    // #region Not Done

    /**
     * "Business Rule" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_script extends sys_metadata {
        /**
         * "Abort action" element (abort_action)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        abort_action: GlideElement;
        
        /**
         * "Accessible from" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "package_private"
         */
        access: GlideElement;
        
        /**
         * "Delete" element (action_delete)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        action_delete: GlideElement;
        
        /**
         * "Insert" element (action_insert)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        action_insert: GlideElement;
        
        /**
         * "Query" element (action_query)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        action_query: GlideElement;
        
        /**
         * "Update" element (action_update)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        action_update: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Add message" element (add_message)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        add_message: GlideElement;
        
        /**
         * "Advanced" element (advanced)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        advanced: GlideElement;
        
        /**
         * "Update reference fields" element (change_fields)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        change_fields: GlideElement;
        
        /**
         * "Client callable" element (client_callable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        client_callable: GlideElement;
        
        /**
         * "Table" element (collection)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        collection: GlideElement;
        
        /**
         * "Condition" element (condition)
         * Type: "Condition String" (condition_string)
         * Maximum length: 254
         */
        condition: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Execute function" element (execute_function)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        execute_function: GlideElement;
        
        /**
         * "Filter Conditions" element (filter_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        filter_condition: GlideElement;
        
        /**
         * "Web Services" element (is_rest)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        is_rest: GlideElement;
        
        /**
         * "Message" element (message)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 4000
         */
        message: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Priority" element (priority)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        priority: GlideElement;
        
        /**
         * "REST Method" element (rest_method)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rest_method: $$GlideElement.sys_rest_message_fn;
        
        /**
         * "REST Method Text" element (rest_method_text)
         * Type: "String" (string)
         * Maximum length: 100
         */
        rest_method_text: GlideElement;
        
        /**
         * "REST Service" element (rest_service)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rest_service: $$GlideElement.sys_rest_message;
        
        /**
         * "REST Service Text" element (rest_service_text)
         * Type: "String" (string)
         * Maximum length: 40
         */
        rest_service_text: GlideElement;
        
        /**
         * "Variable Substitution" element (rest_variables)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        rest_variables: GlideElement;
        
        /**
         * "Role conditions" element (role_conditions)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        role_conditions: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script" (script)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_script;
        
        /**
         * "Set field values" element (template)
         * Type: "Template Value" (template_value)
         * Maximum length: 65000
         */
        template: GlideElement;
        
        /**
         * "When" element (when)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "before"
         */
        when: GlideElement;
    }

    /**
     * "Signature" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_signature extends sys_metadata {
        /**
         * "Assertion" element (assertion)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 8000
         * This is column is mandatory.
         */
        assertion: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Signature type" element (type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "checkbox"
         */
        type: GlideElement;
    }

    /**
     * "Assessment Metric" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_metric extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Additional information label" element (add_info_label)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * Default value: "Additional Information"
         */
        add_info_label: GlideElement;
        
        /**
         * "Allow additional information" element (allow_add_info)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_add_info: GlideElement;
        
        /**
         * "Allow not applicable" element (allow_not_applicable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        allow_not_applicable: GlideElement;
        
        /**
         * "Auto dependent" element (auto_gen)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        auto_gen: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        category: $$GlideElement.asmt_metric_category;
        
        /**
         * "Ask question" element (cond_question)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "always"
         */
        cond_question: GlideElement;
        
        /**
         * "Condition" element (condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        condition: GlideElement;
        
        /**
         * "Context" element (context)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        context: $$GlideElement.sys_cs_virtual_agent_context;
        
        /**
         * "Correct answer" element (correct_answer)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        correct_answer: GlideElement;
        
        /**
         * "Correct answer" element (correct_answer_checkbox)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1"
         */
        correct_answer_checkbox: GlideElement;
        
        /**
         * "Correct answer" element (correct_answer_choice)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        correct_answer_choice: GlideElementGlideObject;
        
        /**
         * "Correct answer" element (correct_answer_template)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        correct_answer_template: GlideElementGlideObject;
        
        /**
         * "Correct answer" element (correct_answer_yesno)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1"
         */
        correct_answer_yesno: GlideElement;
        
        /**
         * "Custom Metric" element (custom_metric)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        custom_metric: $$GlideElement.asmt_custom_metric;
        
        /**
         * "Data type" element (datatype)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "long"
         * This is column is mandatory.
         */
        datatype: GlideElement;
        
        /**
         * "Default answer" element (default_value_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        default_value_field: GlideElement;
        
        /**
         * "Depends on" element (depends_on)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        depends_on: $$GlideElement.asmt_metric;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Details" element (details)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 8000
         */
        details: GlideElement;
        
        /**
         * "Displayed when" element (displayed_when)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        displayed_when: GlideElementGlideObject;
        
        /**
         * "Displayed when" element (displayed_when_checkbox)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1"
         */
        displayed_when_checkbox: GlideElement;
        
        /**
         * "Displayed when" element (displayed_when_template)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        displayed_when_template: GlideElementGlideObject;
        
        /**
         * "Displayed when" element (displayed_when_yesno)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1"
         */
        displayed_when_yesno: GlideElement;
        
        /**
         * "Duration" element (duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Field validation" element (field_validation)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        field_validation: $$GlideElement.sys_cs_field_script_validator;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        mandatory: GlideElement;
        
        /**
         * "Max" element (max)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "10"
         * This is column is mandatory.
         */
        max: GlideElement;
        
        /**
         * "Max weight" element (max_weight)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        max_weight: GlideElement;
        
        /**
         * "Maximum normalization input" element (maximum_normalization_input)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        maximum_normalization_input: GlideElement;
        
        /**
         * "Method" element (method)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "assessment"
         */
        method: GlideElement;
        
        /**
         * "Type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Min" element (min)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is column is mandatory.
         */
        min: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         * This is column is mandatory.
         */
        order: GlideElement;
        
        /**
         * "Dependent plugin" element (plugin)
         * Type: "Choice" (choice)
         * Maximum length: 100
         */
        plugin: GlideElement;
        
        /**
         * "Question" element (question)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 512
         * This is column is mandatory.
         */
        question: GlideElement;
        
        /**
         * "Randomize answers" element (randomize_answers)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        randomize_answers: GlideElement;
        
        /**
         * "Read only" element (read_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        read_only: GlideElement;
        
        /**
         * "Reference table" element (reference_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        reference_table: GlideElement;
        
        /**
         * "Scale definition" element (scale)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "high"
         * This is column is mandatory.
         */
        scale: GlideElement;
        
        /**
         * "Scored" element (scored)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        scored: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script" (script)
         * Maximum length: 4000
         * Default value: "// The following variables are available: \r // - primary: contains the sys_id of the assessable object to be evaluated \r // - string_result: the script sets the display string value for this metric to this variable \r // - actual_result: the script sets the actual value for this metric to this variable \r // - scaled_result: the script sets the scaled value (used in calculations) for this metric to this variable \r // \r // For example:\r // var gr = new GlideRecord('cmdb_ci');\r // gr.addQuery('manufacturer', primary);\r // gr.query();\r // actual_result = gr.getRowCount();\r // string_result = actual_result + '';\r // if (actual_result &gt; 100) scaled_result = 5;\r // else scaled_result = 1;"
         */
        script: GlideElement;
        
        /**
         * "Source field" element (source_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        source_field: GlideElement;
        
        /**
         * "String option" element (string_option)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "short"
         */
        string_option: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Template" element (template)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        template: $$GlideElement.asmt_template;
        
        /**
         * "Value parameters" element (value_parameters)
         * Type: "Name-Value Pairs" (simple_name_values)
         * Maximum length: 4000
         */
        value_parameters: GlideElement;
        
        /**
         * "Weight" element (weight)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "10"
         * This is column is mandatory.
         */
        weight: GlideElement;
    }

    /**
     * "Metric Category" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_metric_category extends sys_metadata {
        /**
         * "Create stakeholders" element (create_stakeholders)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        create_stakeholders: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Details" element (details)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 8000
         */
        details: GlideElement;
        
        /**
         * "Filter" element (filter)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        filter: GlideElement;
        
        /**
         * "Type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        order: GlideElement;
        
        /**
         * "Question bank evaluation method" element (qb_evaluation_method)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * This is a read-only column.
         */
        qb_evaluation_method: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 200
         */
        roles: GlideElement;
        
        /**
         * "Scoring type" element (scoring_type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "percent"
         */
        scoring_type: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is a read-only column.
         */
        table: GlideElement;
        
        /**
         * "Total metrics" element (total_metrics)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        total_metrics: GlideElement;
        
        /**
         * "Weight" element (weight)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "10"
         * This is column is mandatory.
         */
        weight: GlideElement;
    }

    /**
     * "Custom Metric" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_custom_metric extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Icon" element (icon)
         * Type: "Glyph Icon (Bootstrap)" (glyphicon)
         * Maximum length: 40
         * Default value: "user"
         */
        icon: GlideElement;
        
        /**
         * "Macro" element (macro)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Result type" element (result_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "number"
         * This is column is mandatory.
         */
        result_type: GlideElement;
        
        /**
         * "Value parameters" element (value_parameters)
         * Type: "Name-Value Pairs" (simple_name_values)
         * Maximum length: 4000
         */
        value_parameters: GlideElement;
        
        /**
         * "Widget" element (widget)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        widget: $$GlideElement.sp_widget;
    }

    /**
     * "Conversation Server Field Script Validator" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_cs_field_script_validator extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Error Message" element (error_message)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 200
         * This is column is mandatory.
         */
        error_message: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 40
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_cs_field_script_validator;
        
        /**
         * "Validator" element (validator)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         * Default value: "function validate(value) { \r    return true;\r}"
         * This is column is mandatory.
         */
        validator: GlideElement;
    }

    /**
     * "Schedule Item" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_trigger extends IBaseRecord {
        /**
         * "Application" element (application)
         * Type: "String" (string)
         * Maximum length: 40
         */
        application: GlideElement;
        
        /**
         * "Business calendar" element (business_calendar)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_calendar: $$GlideElement.business_calendar;
        
        /**
         * "Calendar" element (calendar)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        calendar: $$GlideElement.sys_calendar;
        
        /**
         * "Claimed by" element (claimed_by)
         * Type: "String" (string)
         * Maximum length: 100
         */
        claimed_by: GlideElement;
        
        /**
         * "Document" element (document)
         * Type: "String" (string)
         * Maximum length: 80
         */
        document: GlideElement;
        
        /**
         * "Document key" element (document_key)
         * Type: "Char" (char)
         * Maximum length: 32
         */
        document_key: GlideElement;
        
        /**
         * "Time" element (entered_time)
         * Type: "UTC Time" (glide_utc_time)
         * Maximum length: 40
         */
        entered_time: GlideElementGlideObject;
        
        /**
         * "Error count" element (error_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        error_count: GlideElement;
        
        /**
         * "Job context" element (job_context)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        job_context: GlideElement;
        
        /**
         * "Job ID" element (job_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "81c92ce9c0a8016400e5f0d2f784ea78"
         */
        job_id: $$GlideElement.sys_job;
        
        /**
         * "Last error" element (last_error)
         * Type: "String" (string)
         * Maximum length: 255
         */
        last_error: GlideElement;
        
        /**
         * "Log" element (log)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        log: GlideElement;
        
        /**
         * "Maintenance" element (maintenance)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        maintenance: GlideElement;
        
        /**
         * "Max drift" element (max_drift)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        max_drift: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Next action" element (next_action)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        next_action: GlideElementGlideObject;
        
        /**
         * "Offset" element (offset)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        offset: GlideElementGlideObject;
        
        /**
         * "Offset type" element (offset_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        offset_type: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.sys_trigger;
        
        /**
         * "Priority" element (priority)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        priority: GlideElement;
        
        /**
         * "Processing duration" element (processing_duration)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        processing_duration: GlideElement;
        
        /**
         * "Repeat" element (repeat)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        repeat: GlideElementGlideObject;
        
        /**
         * "Replication originator" element (replication_originator)
         * Type: "String" (string)
         * Maximum length: 32
         */
        replication_originator: GlideElement;
        
        /**
         * "Rollback context ID" element (rollback_context_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rollback_context_id: $$GlideElement.sys_rollback_context;
        
        /**
         * "Run count" element (run_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        run_count: GlideElement;
        
        /**
         * "Run dayofmonth" element (run_dayofmonth)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        run_dayofmonth: GlideElement;
        
        /**
         * "Run dayofweek" element (run_dayofweek)
         * Type: "Day of Week" (day_of_week)
         * Maximum length: 40
         */
        run_dayofweek: GlideElement;
        
        /**
         * "Run month" element (run_month)
         * Type: "Month of Year" (month_of_year)
         * Maximum length: 40
         */
        run_month: GlideElement;
        
        /**
         * "Run time" element (run_time)
         * Type: "Time" (glide_time)
         * Maximum length: 40
         */
        run_time: GlideElementGlideObject;
        
        /**
         * "Run weekinmonth" element (run_weekinmonth)
         * Type: "Week of Month" (week_of_month)
         * Maximum length: 40
         */
        run_weekinmonth: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        state: GlideElement;
        
        /**
         * "System ID" element (system_id)
         * Type: "String" (string)
         * Maximum length: 255
         */
        system_id: GlideElement;
        
        /**
         * "Time zone" element (time_zone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        time_zone: GlideElement;
        
        /**
         * "Trigger class" element (trigger_class)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "DEFAULT"
         */
        trigger_class: GlideElement;
        
        /**
         * "Trigger type" element (trigger_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        trigger_type: GlideElement;
        
        /**
         * "Upgrade safe" element (upgrade_safe)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        upgrade_safe: GlideElement;
    }

    /**
     * "Rollback Context" glide record fields.
     * Auto-number prefix: BAK
     * Scope: Global (global) - Global application scope
     */
    export interface sys_rollback_context extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Error" element (error)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        error: GlideElement;
        
        /**
         * "From Version" element (from_version)
         * Type: "String" (string)
         * Maximum length: 255
         */
        from_version: GlideElement;
        
        /**
         * "Last node to change state" element (last_node_id)
         * Type: "Reference" (reference)
         * Maximum length: 40
         */
        last_node_id: $$GlideElement.sys_cluster_state;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        number: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "To Version" element (to_version)
         * Type: "String" (string)
         * Maximum length: 255
         */
        to_version: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        type: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Node State" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_cluster_state extends IBaseRecord {
        /**
         * "Allow inbound connections" element (allow_inbound)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        allow_inbound: GlideElement;
        
        /**
         * "Build Name" element (build_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        build_name: GlideElement;
        
        /**
         * "Fast AHA Readiness" element (fast_aha_readiness)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        fast_aha_readiness: GlideElement;
        
        /**
         * "Heartbeat timestamp" element (heartbeat_timestamp)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        heartbeat_timestamp: GlideElementGlideObject;
        
        /**
         * "Most recent keys" element (most_recent_keys)
         * Type: "String" (string)
         * Maximum length: 1024000
         */
        most_recent_keys: GlideElement;
        
        /**
         * "Most recent message" element (most_recent_message)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        most_recent_message: GlideElementGlideObject;
        
        /**
         * "Node ID" element (node_id)
         * Type: "String" (string)
         * Maximum length: 40
         */
        node_id: GlideElement;
        
        /**
         * "Node stats" element (node_stats)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        node_stats: $$GlideElement.sys_cluster_node_stats;
        
        /**
         * "Node Type" element (node_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        node_type: $$GlideElement.sys_node_type;
        
        /**
         * "Participation" element (participation)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "standby"
         */
        participation: GlideElement;
        
        /**
         * "Pause count" element (pause_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        pause_count: GlideElement;
        
        /**
         * "Ready to failover" element (ready_to_failover)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        ready_to_failover: GlideElement;
        
        /**
         * "Role" element (role)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * This is column is mandatory.
         */
        role: GlideElement;
        
        /**
         * "Schedulers" element (schedulers)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "any"
         */
        schedulers: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "offline"
         */
        status: GlideElement;
        
        /**
         * "System ID" element (system_id)
         * Type: "String" (string)
         * Maximum length: 255
         */
        system_id: GlideElement;
        
        /**
         * "Upgrades After" element (upgrades_after)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        upgrades_after: $$GlideElement.sys_cluster_state;
    }

    /**
     * "Node Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_node_type extends sys_metadata {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 40
         */
        description: GlideElement;
        
        /**
         * "Job Criteria" element (job_criteria)
         * Type: "String" (string)
         * Maximum length: 200
         */
        job_criteria: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "For Participation" element (participation)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * This is column is mandatory.
         */
        participation: GlideElement;
        
        /**
         * "For Role" element (role)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        role: GlideElement;
        
        /**
         * "Schedulers" element (schedulers)
         * Type: "String" (string)
         * Maximum length: 16
         * Default value: "any"
         */
        schedulers: GlideElement;
        
        /**
         * "Semaphore Set ID" element (semaphore_set_id)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        semaphore_set_id: GlideElement;
    }

    /**
     * "Node stats" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_cluster_node_stats extends IBaseRecord {
        /**
         * "Iostats" element (iostats)
         * Type: "String" (string)
         * Maximum length: 512000
         */
        iostats: GlideElement;
        
        /**
         * "Node ID" element (node_id)
         * Type: "String" (string)
         * Maximum length: 40
         */
        node_id: GlideElement;
        
        /**
         * "Stats" element (stats)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        stats: GlideElement;
    }

    /**
     * "Sys Job" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_job extends sys_metadata {
        /**
         * "Application" element (application)
         * Type: "String" (string)
         * Maximum length: 40
         */
        application: GlideElement;
        
        /**
         * "Java Class" element (handler_class)
         * Type: "String" (string)
         * Maximum length: 80
         */
        handler_class: GlideElement;
        
        /**
         * "Job details" element (job_details)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        job_details: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
    }

    /**
     * "UI Action" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_action extends sys_metadata {
        /**
         * "Action name" element (action_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        action_name: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Client" element (client)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        client: GlideElement;
        
        /**
         * "Workspace Client Script" element (client_script_v2)
         * Type: "Script" (script)
         * Maximum length: 8000
         */
        client_script_v2: GlideElement;
        
        /**
         * "Comments" element (comments)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        comments: GlideElement;
        
        /**
         * "Condition" element (condition)
         * Type: "Condition String" (condition_string)
         * Maximum length: 254
         */
        condition: GlideElement;
        
        /**
         * "Form action" element (form_action)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        form_action: GlideElement;
        
        /**
         * "Form button" element (form_button)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        form_button: GlideElement;
        
        /**
         * "Workspace Form Button" element (form_button_v2)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        form_button_v2: GlideElement;
        
        /**
         * "Form context menu" element (form_context_menu)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        form_context_menu: GlideElement;
        
        /**
         * "Form link" element (form_link)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        form_link: GlideElement;
        
        /**
         * "Workspace Form Menu" element (form_menu_button_v2)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        form_menu_button_v2: GlideElement;
        
        /**
         * "Form style" element (form_style)
         * Type: "String" (string)
         * Maximum length: 40
         */
        form_style: GlideElement;
        
        /**
         * "Format for Configurable Workspace" element (format_for_configurable_workspace)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        format_for_configurable_workspace: GlideElement;
        
        /**
         * "Hint" element (hint)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 254
         */
        hint: GlideElement;
        
        /**
         * "Isolate script" element (isolate_script)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        isolate_script: GlideElement;
        
        /**
         * "List action" element (list_action)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        list_action: GlideElement;
        
        /**
         * "List banner button" element (list_banner_button)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_banner_button: GlideElement;
        
        /**
         * "List bottom button" element (list_button)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_button: GlideElement;
        
        /**
         * "List choice" element (list_choice)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_choice: GlideElement;
        
        /**
         * "List context menu" element (list_context_menu)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_context_menu: GlideElement;
        
        /**
         * "List link" element (list_link)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_link: GlideElement;
        
        /**
         * "Save with form button" element (list_save_with_form_button)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        list_save_with_form_button: GlideElement;
        
        /**
         * "List style" element (list_style)
         * Type: "String" (string)
         * Maximum length: 40
         */
        list_style: GlideElement;
        
        /**
         * "Messages" element (messages)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        messages: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Onclick" element (onclick)
         * Type: "String" (string)
         * Maximum length: 254
         */
        onclick: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script" (script)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Show insert" element (show_insert)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        show_insert: GlideElement;
        
        /**
         * "Show multiple update" element (show_multiple_update)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        show_multiple_update: GlideElement;
        
        /**
         * "Show query" element (show_query)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        show_query: GlideElement;
        
        /**
         * "Show update" element (show_update)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        show_update: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_ui_action;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "List v2 Compatible" element (ui11_compatible)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        ui11_compatible: GlideElement;
        
        /**
         * "List v3 Compatible" element (ui16_compatible)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        ui16_compatible: GlideElement;
    }

    /**
     * "REST Message" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_rest_message extends sys_metadata {
        /**
         * "Accessible from" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "package_private"
         */
        access: GlideElement;
        
        /**
         * "Authentication type" element (authentication_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "no_authentication"
         */
        authentication_type: GlideElement;
        
        /**
         * "Basic authentication password" element (basic_auth_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        basic_auth_password: GlideElement;
        
        /**
         * "Basic auth profile" element (basic_auth_profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        basic_auth_profile: $$GlideElement.sys_auth_profile_basic;
        
        /**
         * "Basic authentication user ID" element (basic_auth_user)
         * Type: "String" (string)
         * Maximum length: 40
         */
        basic_auth_user: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "OAuth profile" element (oauth2_profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        oauth2_profile: $$GlideElement.oauth_entity_profile;
        
        /**
         * "Mutual authentication profile" element (protocol_name)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "Endpoint" element (rest_endpoint)
         * Type: "String" (string)
         * Maximum length: 200
         * This is column is mandatory.
         */
        rest_endpoint: GlideElement;
        
        /**
         * "Use basic authentication" element (use_basic_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_basic_auth: GlideElement;
        
        /**
         * "Use mutual authentication" element (use_mutual_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_mutual_auth: GlideElement;
    }

    /**
     * "Protocol Profile" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_protocol_profile extends IBaseRecord {
        /**
         * "Default port" element (default_port)
         * Type: "String" (string)
         * Maximum length: 5
         * Default value: "443"
         */
        default_port: GlideElement;
        
        /**
         * "Keystore" element (keystore)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        keystore: $$GlideElement.sys_certificate;
        
        /**
         * "Protocol" element (protocol)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        protocol: GlideElement;
    }

    /**
     * "X.509 Certificate" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_certificate extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Expiration notification" element (expiration_notification)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        expiration_notification: GlideElement;
        
        /**
         * "Expires" element (expires)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        expires: GlideElementGlideObject;
        
        /**
         * "Expires in days" element (expires_in_days)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        expires_in_days: GlideElement;
        
        /**
         * "Format" element (format)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "pem"
         */
        format: GlideElement;
        
        /**
         * "Issuer" element (issuer)
         * Type: "String" (string)
         * Maximum length: 1000
         * This is a read-only column.
         */
        issuer: GlideElement;
        
        /**
         * "Key store password" element (key_store_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        key_store_password: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 128
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Notify on expiration" element (notify_on_expiration)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        notify_on_expiration: GlideElementGlideObject;
        
        /**
         * "PEM Certificate" element (pem_certificate)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        pem_certificate: GlideElement;
        
        /**
         * "Serial number" element (serial_number)
         * Type: "String" (string)
         * Maximum length: 41
         */
        serial_number: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 100
         */
        short_description: GlideElement;
        
        /**
         * "Subject" element (subject)
         * Type: "String" (string)
         * Maximum length: 1000
         * This is a read-only column.
         */
        subject: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "trust_store"
         */
        type: GlideElement;
        
        /**
         * "Valid from" element (valid_from)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        valid_from: GlideElementGlideObject;
        
        /**
         * "Warn in days to expire" element (warn_in_days_to_expire)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "20"
         */
        warn_in_days_to_expire: GlideElement;
    }

    /**
     * "Authentication Configuration" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_auth_profile extends sys_metadata {
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
    }

    /**
     * "Basic Auth Configuration" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_auth_profile_basic extends sys_auth_profile {
        /**
         * "Password" element (password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         * This is column is mandatory.
         */
        password: GlideElement;
        
        /**
         * "Username" element (username)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        username: GlideElement;
    }

    /**
     * "Oauth Entity Profile" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface oauth_entity_profile extends sys_metadata {
        /**
         * "Is default" element (default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        default: GlideElement;
        
        /**
         * "Grant type" element (grant_type)
         * Type: "Choice" (choice)
         * Maximum length: 60
         * Default value: "password"
         * This is column is mandatory.
         */
        grant_type: GlideElement;
        
        /**
         * "JWT Provider" element (jwt_provider)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        jwt_provider: $$GlideElement.jwt_provider;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "OAuth provider" element (oauth_entity)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        oauth_entity: $$GlideElement.oauth_entity;
        
        /**
         * "Assertion Producer" element (saml2_assertion_producer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        saml2_assertion_producer: $$GlideElement.saml2_assertion_producer;
    }

    /**
     * "Saml2 Assertion Producer" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface saml2_assertion_producer extends sys_metadata {
        /**
         * "Audience" element (audience)
         * Type: "String" (string)
         * Maximum length: 1024
         * This is column is mandatory.
         */
        audience: GlideElement;
        
        /**
         * "Expiry Interval (sec)" element (expiry_interval)
         * Type: "Integer" (integer)
         * Maximum length: 255
         * Default value: "60"
         * This is column is mandatory.
         */
        expiry_interval: GlideElement;
        
        /**
         * "Issuer" element (issuer)
         * Type: "String" (string)
         * Maximum length: 1024
         * Default value: "www.yourinstance.service-now.com"
         * This is column is mandatory.
         */
        issuer: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "NameID Format" element (nameid_format)
         * Type: "String" (string)
         * Maximum length: 255
         * Default value: "urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified"
         * This is column is mandatory.
         */
        nameid_format: GlideElement;
        
        /**
         * "Recipient" element (recipient)
         * Type: "String" (string)
         * Maximum length: 1024
         * This is column is mandatory.
         */
        recipient: GlideElement;
        
        /**
         * "Signing Algorithm" element (signing_algorithm)
         * Type: "Choice" (choice)
         * Maximum length: 255
         * Default value: "http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"
         * This is column is mandatory.
         */
        signing_algorithm: GlideElement;
        
        /**
         * "Subject NameID" element (subject_nameid)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        subject_nameid: GlideElement;
    }

    /**
     * "Oauth Entity" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface oauth_entity extends sys_metadata {
        /**
         * "Accessible from" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "public"
         */
        access: GlideElement;
        
        /**
         * "Access Token Lifespan" element (access_token_lifespan)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1800"
         * This is column is mandatory.
         */
        access_token_lifespan: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Authorization Code Lifespan" element (auth_code_lifespan)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "60"
         * This is column is mandatory.
         */
        auth_code_lifespan: GlideElement;
        
        /**
         * "Authorization URL" element (auth_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        auth_url: GlideElement;
        
        /**
         * "Certificate URL" element (certificate_url)
         * Type: "URL" (url)
         * Maximum length: 500
         * This is column is mandatory.
         */
        certificate_url: GlideElement;
        
        /**
         * "Client ID" element (client_id)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        client_id: GlideElement;
        
        /**
         * "Client Secret" element (client_secret)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        client_secret: GlideElement;
        
        /**
         * "OAuth Application UUID" element (client_uuid)
         * Type: "String" (string)
         * Maximum length: 256
         */
        client_uuid: GlideElement;
        
        /**
         * "Code challenge method" element (code_challenge_method)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "S256"
         */
        code_challenge_method: GlideElement;
        
        /**
         * "Comments" element (comments)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        comments: GlideElement;
        
        /**
         * "Default Grant type" element (default_grant_type)
         * Type: "Choice" (choice)
         * Maximum length: 60
         * Default value: "password"
         * This is column is mandatory.
         */
        default_grant_type: GlideElement;
        
        /**
         * "ID Token Lifespan" element (id_token_lifespan)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "86400"
         * This is column is mandatory.
         */
        id_token_lifespan: GlideElement;
        
        /**
         * "Logo URL" element (logo_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        logo_url: GlideElement;
        
        /**
         * "Message Signature Lifespan" element (message_signature_lifespan)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "60"
         * This is column is mandatory.
         */
        message_signature_lifespan: GlideElement;
        
        /**
         * "Mobile Client" element (mobile_client)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        mobile_client: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "OAuth API Script" element (oauth_api_script)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        oauth_api_script: $$GlideElement.sys_script_include;
        
        /**
         * "Mutual authentication profile" element (protocol_name)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "Public Client" element (public_client)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        public_client: GlideElement;
        
        /**
         * "Redirect URL" element (redirect_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        redirect_url: GlideElement;
        
        /**
         * "Refresh Token Lifespan" element (refresh_token_lifespan)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "8640000"
         * This is column is mandatory.
         */
        refresh_token_lifespan: GlideElement;
        
        /**
         * "Refresh Token URL" element (refresh_token_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        refresh_token_url: GlideElement;
        
        /**
         * "Enforce Token Restrictions" element (restricted_binding)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        restricted_binding: GlideElement;
        
        /**
         * "Token Revocation URL" element (revoke_token_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        revoke_token_url: GlideElement;
        
        /**
         * "Cryptographic salt" element (salt)
         * Type: "String" (string)
         * Maximum length: 96
         * This is column is mandatory.
         */
        salt: GlideElement;
        
        /**
         * "Send Credentials" element (send_client_credentials_as)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "request_body_parameter"
         */
        send_client_credentials_as: GlideElement;
        
        /**
         * "Disable consent screen" element (skip_authorize)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        skip_authorize: GlideElement;
        
        /**
         * "Token URL" element (token_url)
         * Type: "URL" (url)
         * Maximum length: 500
         */
        token_url: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "client"
         * This is column is mandatory.
         */
        type: GlideElement;
        
        /**
         * "Use mutual authentication" element (use_mutual_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_mutual_auth: GlideElement;
        
        /**
         * "OAuth Application User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Jwt Provider" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface jwt_provider extends sys_metadata {
        /**
         * "Expiry Interval (sec)" element (expiry_interval)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "60"
         * This is column is mandatory.
         */
        expiry_interval: GlideElement;
        
        /**
         * "JWT API Script" element (jwt_api_script)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        jwt_api_script: $$GlideElement.sys_script_include;
        
        /**
         * "Signing Configuration" element (jwt_keystore_alias)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        jwt_keystore_alias: $$GlideElement.jwt_keystore_aliases;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
    }

    /**
     * "JWT Keys" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface jwt_keystore_aliases extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Certificate Thumbprint" element (certificate_thumbprint)
         * Type: "String" (string)
         * Maximum length: 500
         * This is column is mandatory.
         */
        certificate_thumbprint: GlideElement;
        
        /**
         * "Expiry" element (expiry)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        expiry: GlideElementGlideObject;
        
        /**
         * "Key Id" element (kid)
         * Type: "String" (string)
         * Maximum length: 40
         */
        kid: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Signing Algorithm" element (signing_algorithm)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "rsa_256"
         * This is column is mandatory.
         */
        signing_algorithm: GlideElement;
        
        /**
         * "Signing Key" element (signing_key_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         * This is column is mandatory.
         */
        signing_key_password: GlideElement;
        
        /**
         * "Signing Keystore" element (signing_keystore)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        signing_keystore: $$GlideElement.sys_certificate;
    }

    /**
     * "HTTP Method" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_rest_message_fn extends sys_metadata {
        /**
         * "Authentication type" element (authentication_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "inherit_from_parent"
         */
        authentication_type: GlideElement;
        
        /**
         * "Basic authentication password (simple)" element (basic_auth_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        basic_auth_password: GlideElement;
        
        /**
         * "Basic auth profile" element (basic_auth_profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        basic_auth_profile: $$GlideElement.sys_auth_profile_basic;
        
        /**
         * "Basic authentication user ID (simple)" element (basic_auth_user)
         * Type: "String" (string)
         * Maximum length: 40
         */
        basic_auth_user: GlideElement;
        
        /**
         * "Content" element (content)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        content: GlideElement;
        
        /**
         * "Name" element (function_name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        function_name: GlideElement;
        
        /**
         * "HTTP method" element (http_method)
         * Type: "String" (string)
         * Maximum length: 10
         * This is column is mandatory.
         */
        http_method: GlideElement;
        
        /**
         * "Lock" element (lock)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        lock: GlideElement;
        
        /**
         * "OAuth profile" element (oauth2_profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        oauth2_profile: $$GlideElement.oauth_entity_profile;
        
        /**
         * "Mutual authentication profile" element (protocol_name)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        protocol_name: $$GlideElement.sys_protocol_profile;
        
        /**
         * "REST Message [ HTTP Method ]" element (qualified_name)
         * Type: "String" (string)
         * Maximum length: 150
         */
        qualified_name: GlideElement;
        
        /**
         * "Endpoint" element (rest_endpoint)
         * Type: "String" (string)
         * Maximum length: 200
         */
        rest_endpoint: GlideElement;
        
        /**
         * "REST Message" element (rest_message)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rest_message: $$GlideElement.sys_rest_message;
        
        /**
         * "Use basic authentication" element (use_basic_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_basic_auth: GlideElement;
        
        /**
         * "Use MID Server" element (use_mid_server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        use_mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Use mutual authentication" element (use_mutual_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_mutual_auth: GlideElement;
    }

    /**
     * "Context" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_cs_virtual_agent_context extends sys_metadata {
        /**
         * "Chat Setup" element (live_agent_setup)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        live_agent_setup: $$GlideElement.sys_cs_live_agent_setup;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Record" element (record)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        record: GlideElement;
        
        /**
         * "Script Variable Name" element (script_variable)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        script_variable: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Table" element (table)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        table: $$GlideElement.sys_db_object;
        
        /**
         * "Value" element (value)
         * Type: "Script" (script)
         * Maximum length: 2000
         */
        value: GlideElement;
    }

    /**
     * "Chat Setup" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_cs_live_agent_setup extends sys_metadata {
        /**
         * "Agent Whisper" element (agent_whisper)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        agent_whisper: GlideElement;
        
        /**
         * "Allow transcript download" element (allow_transcript_download)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_transcript_download: GlideElement;
        
        /**
         * "CSM Fulfiller UI" element (csm_fulfiller)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "service_workspace"
         */
        csm_fulfiller: GlideElement;
        
        /**
         * "CSM Queue" element (csm_queue)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        csm_queue: $$GlideElement.chat_queue;
        
        /**
         * "Dynamic Translation" element (dynamic_translation)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        dynamic_translation: GlideElement;
        
        /**
         * "Emoji Enabled" element (emoji_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        emoji_enabled: GlideElement;
        
        /**
         * "Global Fulfiller UI" element (global_fulfiller)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "service_workspace"
         */
        global_fulfiller: GlideElement;
        
        /**
         * "Global Queue" element (global_queue)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        global_queue: $$GlideElement.chat_queue;
        
        /**
         * "HR Fulfiller UI" element (hr_fulfiller)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "service_workspace"
         */
        hr_fulfiller: GlideElement;
        
        /**
         * "HR Queue" element (hr_queue)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        hr_queue: $$GlideElement.chat_queue;
        
        /**
         * "ITSM Fulfiller UI" element (itsm_fulfiller)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "service_workspace"
         */
        itsm_fulfiller: GlideElement;
        
        /**
         * "ITSM Queue" element (itsm_queue)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        itsm_queue: $$GlideElement.chat_queue;
        
        /**
         * "Live Chat Enabled" element (live_agent_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        live_agent_enabled: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "No Agents Available message" element (no_agent_available_message)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        no_agent_available_message: GlideElement;
        
        /**
         * "Enable notifications for all users" element (notification_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        notification_enabled: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        short_description: GlideElement;
        
        /**
         * "Show agent names and avatars" element (show_agent_details)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        show_agent_details: GlideElement;
        
        /**
         * "Show agent name in chat header" element (show_agent_name_in_header)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        show_agent_name_in_header: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_cs_live_agent_setup;
        
        /**
         * "Transfer message" element (transfer_message)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        transfer_message: GlideElement;
        
        /**
         * "Live chat wait status" element (wait_status)
         * Type: "String" (string)
         * Maximum length: 40
         */
        wait_status: GlideElement;
    }

    /**
     * "Application Menu" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_app_application extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        category: $$GlideElement.sys_app_category;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Device type" element (device_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "browser"
         */
        device_type: GlideElement;
        
        /**
         * "Hint" element (hint)
         * Type: "String" (string)
         * Maximum length: 255
         */
        hint: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        order: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 100
         * This column is an array column.
         */
        roles: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_app_application;
        
        /**
         * "Title" element (title)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         * This is column is mandatory.
         */
        title: GlideElement;
        
        /**
         * "View name" element (view_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        view_name: GlideElement;
    }

    /**
     * "Menu Category" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_app_category extends sys_metadata {
        /**
         * "Default order" element (default_order)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        default_order: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Style" element (style)
         * Type: "String" (string)
         * Maximum length: 100
         */
        style: GlideElement;
    }

    /**
     * "Report Source" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_source extends sys_metadata {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Display" element (display)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        display: GlideElement;
        
        /**
         * "Filter" element (filter)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        filter: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
    }

    /**
     * "Report Drillown" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_drill extends sys_report {
    }

    /**
     * "PDF Page Header Footer Template" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_page_hdrftr extends sys_metadata {
        /**
         * "Footer Data" element (ftr_data)
         * Type: "String" (string)
         * Maximum length: 100
         */
        ftr_data: GlideElement;
        
        /**
         * "Header Data" element (hdr_data)
         * Type: "String" (string)
         * Maximum length: 255
         */
        hdr_data: GlideElement;
        
        /**
         * "Left footer content" element (left_ftr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        left_ftr_content: GlideElement;
        
        /**
         * "Left footer image" element (left_ftr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        left_ftr_img: GlideElement;
        
        /**
         * "Left footer text" element (left_ftr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        left_ftr_text: GlideElement;
        
        /**
         * "Left header content" element (left_hdr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "2"
         */
        left_hdr_content: GlideElement;
        
        /**
         * "Left header image" element (left_hdr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        left_hdr_img: GlideElement;
        
        /**
         * "Left header text" element (left_hdr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        left_hdr_text: GlideElement;
        
        /**
         * "Middle footer content" element (mid_ftr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "7"
         */
        mid_ftr_content: GlideElement;
        
        /**
         * "Middle footer image" element (mid_ftr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        mid_ftr_img: GlideElement;
        
        /**
         * "Middle footer text" element (mid_ftr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        mid_ftr_text: GlideElement;
        
        /**
         * "Middle header content" element (mid_hdr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "7"
         */
        mid_hdr_content: GlideElement;
        
        /**
         * "Middle header image" element (mid_hdr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        mid_hdr_img: GlideElement;
        
        /**
         * "Middle header text" element (mid_hdr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        mid_hdr_text: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 150
         */
        name: GlideElement;
        
        /**
         * "Right footer content" element (right_ftr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "4"
         */
        right_ftr_content: GlideElement;
        
        /**
         * "Right footer image" element (right_ftr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        right_ftr_img: GlideElement;
        
        /**
         * "Right footer text" element (right_ftr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        right_ftr_text: GlideElement;
        
        /**
         * "Right header content" element (right_hdr_content)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        right_hdr_content: GlideElement;
        
        /**
         * "Right header image" element (right_hdr_img)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        right_hdr_img: GlideElement;
        
        /**
         * "Right header text" element (right_hdr_text)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 150
         */
        right_hdr_text: GlideElement;
    }

    /**
     * "Map Source" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_map_source extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Field" element (aggregate_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        aggregate_field: GlideElement;
        
        /**
         * "Use this key" element (join_by_column)
         * Type: "String" (string)
         * Maximum length: 255
         * Default value: "hc-key"
         */
        join_by_column: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.sys_report_map_source;
        
        /**
         * "Use these mappings" element (report_map_source_mapping)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        report_map_source_mapping: $$GlideElement.sys_report_map_source_mapping;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
        
        /**
         * "Level" element (type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        type: $$GlideElement.sys_report_map_type;
        
        /**
         * "How to use data" element (type_mapping)
         * Type: "Radio Button Choice" (radio)
         * Maximum length: 40
         * Default value: "mapping"
         */
        type_mapping: GlideElement;
    }

    /**
     * "Report Map Types" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_map_type extends sys_metadata {
        /**
         * "Key" element (key)
         * Type: "String" (string)
         * Maximum length: 100
         */
        key: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 100
         */
        name: GlideElement;
    }

    /**
     * "Mapping group" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_map_source_mapping extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
    }

    /**
     * "Report Maps" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_map extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Geographical map" element (is_geomap)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        is_geomap: GlideElement;
        
        /**
         * "JSON definition" element (json_map)
         * Type: "String" (string)
         * Maximum length: 500000
         */
        json_map: GlideElement;
        
        /**
         * "Key" element (key)
         * Type: "String" (string)
         * Maximum length: 100
         */
        key: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.sys_report_map;
        
        /**
         * "Level" element (type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        type: $$GlideElement.sys_report_map_type;
    }

    /**
     * "UI View" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_view extends sys_metadata {
        /**
         * "Group" element (group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Hidden" element (hidden)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        hidden: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 100
         * This column is an array column.
         */
        roles: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         */
        title: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Import Table" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_report_import_table extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        active: GlideElement;
        
        /**
         * "Created by user" element (created_by_user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        created_by_user: $$GlideElement.sys_user;
        
        /**
         * "Expiration days" element (expiration_days)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "7"
         */
        expiration_days: GlideElement;
        
        /**
         * "Expire on date" element (expire_on_date)
         * Type: "Other Date" (date)
         * Maximum length: 40
         */
        expire_on_date: GlideElement;
        
        /**
         * "Expired" element (expired)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        expired: GlideElement;
        
        /**
         * "Filename" element (filename)
         * Type: "String" (string)
         * Maximum length: 50
         */
        filename: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
    }

    /**
     * "Chart color scheme" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pa_chart_color_schemes extends sys_metadata {
        /**
         * "Color 1" element (color_1)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        color_1: $$GlideElement.sys_report_color;
        
        /**
         * "Color 10" element (color_10)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_10: $$GlideElement.sys_report_color;
        
        /**
         * "Color 11" element (color_11)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_11: $$GlideElement.sys_report_color;
        
        /**
         * "Color 12" element (color_12)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_12: $$GlideElement.sys_report_color;
        
        /**
         * "Color 13" element (color_13)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_13: $$GlideElement.sys_report_color;
        
        /**
         * "Color 14" element (color_14)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_14: $$GlideElement.sys_report_color;
        
        /**
         * "Color 15" element (color_15)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_15: $$GlideElement.sys_report_color;
        
        /**
         * "Color 16" element (color_16)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_16: $$GlideElement.sys_report_color;
        
        /**
         * "Color 17" element (color_17)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_17: $$GlideElement.sys_report_color;
        
        /**
         * "Color 18" element (color_18)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_18: $$GlideElement.sys_report_color;
        
        /**
         * "Color 19" element (color_19)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_19: $$GlideElement.sys_report_color;
        
        /**
         * "Color 2" element (color_2)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        color_2: $$GlideElement.sys_report_color;
        
        /**
         * "Color 20" element (color_20)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_20: $$GlideElement.sys_report_color;
        
        /**
         * "Color 21" element (color_21)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_21: $$GlideElement.sys_report_color;
        
        /**
         * "Color 22" element (color_22)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_22: $$GlideElement.sys_report_color;
        
        /**
         * "Color 23" element (color_23)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_23: $$GlideElement.sys_report_color;
        
        /**
         * "Color 24" element (color_24)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_24: $$GlideElement.sys_report_color;
        
        /**
         * "Color 25" element (color_25)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_25: $$GlideElement.sys_report_color;
        
        /**
         * "Color 26" element (color_26)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_26: $$GlideElement.sys_report_color;
        
        /**
         * "Color 27" element (color_27)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_27: $$GlideElement.sys_report_color;
        
        /**
         * "Color 28" element (color_28)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_28: $$GlideElement.sys_report_color;
        
        /**
         * "Color 29" element (color_29)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_29: $$GlideElement.sys_report_color;
        
        /**
         * "Color 3" element (color_3)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_3: $$GlideElement.sys_report_color;
        
        /**
         * "Color 30" element (color_30)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_30: $$GlideElement.sys_report_color;
        
        /**
         * "Color 31" element (color_31)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_31: $$GlideElement.sys_report_color;
        
        /**
         * "Color 32" element (color_32)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_32: $$GlideElement.sys_report_color;
        
        /**
         * "Color 4" element (color_4)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_4: $$GlideElement.sys_report_color;
        
        /**
         * "Color 5" element (color_5)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_5: $$GlideElement.sys_report_color;
        
        /**
         * "Color 6" element (color_6)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_6: $$GlideElement.sys_report_color;
        
        /**
         * "Color 7" element (color_7)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_7: $$GlideElement.sys_report_color;
        
        /**
         * "Color 8" element (color_8)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_8: $$GlideElement.sys_report_color;
        
        /**
         * "Color 9" element (color_9)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        color_9: $$GlideElement.sys_report_color;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         * This is a read-only column.
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.pa_chart_color_schemes;
    }

    /**
     * "Software Model" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_software_product_model extends cmdb_model {
        /**
         * "Activation status" element (activation_status)
         * Type: "String" (string)
         * Maximum length: 40
         */
        activation_status: GlideElement;
        
        /**
         * "Application model" element (application_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        application_model: $$GlideElement.cmdb_application_product_model;
        
        /**
         * "Build" element (build_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        build_version: GlideElement;
        
        /**
         * "Edition" element (edition)
         * Type: "String" (string)
         * Maximum length: 40
         */
        edition: GlideElement;
        
        /**
         * "End of life date" element (end_of_life_date)
         * Type: "Date" (glide_date)
         * Maximum length: 10
         */
        end_of_life_date: GlideElementGlideObject;
        
        /**
         * "GA release date" element (ga_release_date)
         * Type: "Date" (glide_date)
         * Maximum length: 10
         */
        ga_release_date: GlideElementGlideObject;
        
        /**
         * "ISO id" element (id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        id: GlideElement;
        
        /**
         * "Inference percent" element (inference)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        inference: GlideElement;
        
        /**
         * "Is an option" element (is_option)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        is_option: GlideElement;
        
        /**
         * "License type" element (license_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        license_type: $$GlideElement.cmdb_sw_license_calculation;
        
        /**
         * "Major" element (major_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        major_version: GlideElement;
        
        /**
         * "Maximum socket count" element (max_sockets)
         * Type: "String" (string)
         * Maximum length: 40
         */
        max_sockets: GlideElement;
        
        /**
         * "Maximum users" element (max_users)
         * Type: "String" (string)
         * Maximum length: 40
         */
        max_users: GlideElement;
        
        /**
         * "Minimum users" element (min_users)
         * Type: "String" (string)
         * Maximum length: 40
         */
        min_users: GlideElement;
        
        /**
         * "Minor" element (minor_version)
         * Type: "String" (string)
         * Maximum length: 15
         */
        minor_version: GlideElement;
        
        /**
         * "Next version" element (next_version)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        next_version: $$GlideElement.cmdb_software_product_model;
        
        /**
         * "Review" element (review_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        review_version: GlideElement;
        
        /**
         * "Rights" element (rights)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        rights: GlideElement;
        
        /**
         * "ISO serial number" element (serial_number)
         * Type: "String" (string)
         * Maximum length: 100
         */
        serial_number: GlideElement;
        
        /**
         * "Single or multi license" element (single)
         * Type: "String" (string)
         * Maximum length: 40
         */
        single: GlideElement;
        
        /**
         * "Software category" element (software_category)
         * Type: "String" (string)
         * Maximum length: 100
         */
        software_category: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "String" (string)
         * Maximum length: 100
         */
        title: GlideElement;
        
        /**
         * "Track" element (track)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        track: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        version: GlideElement;
    }

    /**
     * "Software License Calculation" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_sw_license_calculation extends IBaseRecord {
        /**
         * "Script" element (calculation)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 4000
         */
        calculation: GlideElement;
        
        /**
         * "Full name" element (full_name)
         * Type: "String" (string)
         * Maximum length: 200
         */
        full_name: GlideElement;
        
        /**
         * "Install field" element (install_field)
         * Type: "String" (string)
         * Maximum length: 100
         */
        install_field: GlideElement;
        
        /**
         * "License field" element (license_field)
         * Type: "String" (string)
         * Maximum length: 100
         */
        license_field: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.cmdb_sw_license_calculation;
        
        /**
         * "Query type" element (query_field)
         * Type: "String" (string)
         * Maximum length: 40
         */
        query_field: GlideElement;
    }

    /**
     * "Task Relationship Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface task_rel_type extends sys_metadata {
        /**
         * "Child descriptor" element (child_descriptor)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        child_descriptor: GlideElement;
        
        /**
         * "Child script" element (child_script)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        child_script: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Parent descriptor" element (parent_descriptor)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        parent_descriptor: GlideElement;
        
        /**
         * "Parent script" element (parent_script)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        parent_script: GlideElement;
    }

    /**
     * "Agile Filter Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface agile_filter_definition extends IBaseRecord {
        /**
         * "Filter" element (filter)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        filter: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
    }

    /**
     * "Personal backlog" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface backlog_definition extends agile_filter_definition {
        /**
         * "Owner" element (owner)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        owner: $$GlideElement.sys_user;
        
        /**
         * "Visible to" element (shared_with)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        shared_with: GlideElementGlideObject;
        
        /**
         * "Visible to Groups" element (shared_with_groups)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        shared_with_groups: GlideElementGlideObject;
    }

    /**
     * "Defect" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_defect extends rm_feature {
        /**
         * "Product" element (product)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        product: $$GlideElement.cmdb_application_product_model;
        
        /**
         * "Reported against" element (reported_against)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        reported_against: $$GlideElement.task;
    }

    /**
     * "Enhancement" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_enhancement extends rm_feature {
        /**
         * "Product" element (product)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        product: $$GlideElement.cmdb_application_product_model;
    }

    /**
     * "Epic" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_epic extends rm_feature {
        /**
         * "Color" element (color)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "3f804840d7333100b4964ebfae610329"
         */
        color: $$GlideElement.sys_report_color;
        
        /**
         * "Completed count" element (completed_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        completed_count: GlideElement;
        
        /**
         * "Completed estimate" element (completed_estimate)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        completed_estimate: GlideElement;
        
        /**
         * "Demand" element (demand)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        demand: $$GlideElement.dmn_demand;
        
        /**
         * "Global rank" element (global_rank)
         * Type: "Long" (longint)
         * Maximum length: 40
         * This is a read-only column.
         */
        global_rank: GlideElement;
        
        /**
         * "Missing estimates" element (missing_estimates)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        missing_estimates: GlideElement;
        
        /**
         * "Parent epic" element (parent_epic)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent_epic: $$GlideElement.rm_epic;
        
        /**
         * "Percent complete by count" element (percent_complete_by_count)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         * Default value: "0"
         * This is a read-only column.
         */
        percent_complete_by_count: GlideElement;
        
        /**
         * "Percent complete by estimate" element (percent_complete_by_estimate)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         * Default value: "0"
         * This is a read-only column.
         */
        percent_complete_by_estimate: GlideElement;
        
        /**
         * "Product" element (product)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        product: $$GlideElement.cmdb_model;
        
        /**
         * "Theme" element (theme)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        theme: $$GlideElement.scrum_theme;
        
        /**
         * "Total estimate" element (total_estimate)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        total_estimate: GlideElement;
        
        /**
         * "Total story count" element (total_story_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        total_story_count: GlideElement;
    }

    /**
     * "Release" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_release extends planned_task {
        /**
         * "Release phase" element (release_phase)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        release_phase: GlideElement;
        
        /**
         * "Release type" element (release_type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        release_type: GlideElement;
        
        /**
         * "Visited States" element (visited_state)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        visited_state: GlideElement;
    }

    /**
     * "Scrum release" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_release_scrum extends rm_release {
        /**
         * "Default team" element (default_team)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_team: $$GlideElement.scrum_pp_team;
        
        /**
         * "Total committed points" element (points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        points: GlideElement;
        
        /**
         * "Release capacity (points)" element (release_capacity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        release_capacity: GlideElement;
        
        /**
         * "Story has tasks" element (story_has_tasks)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        story_has_tasks: GlideElement;
    }

    /**
     * "Team" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface scrum_pp_team extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Manager" element (manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        manager: $$GlideElement.sys_user;
        
        /**
         * "Points" element (points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        points: GlideElement;
        
        /**
         * "Release" element (release)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        release: $$GlideElement.rm_release_scrum;
        
        /**
         * "Scrum master" element (scrum_master)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        scrum_master: $$GlideElement.sys_user;
        
        /**
         * "Name" element (show_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        show_name: GlideElement;
        
        /**
         * "Sprint Calendar" element (sprint_calendar)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sprint_calendar: $$GlideElement.cmn_schedule;
        
        /**
         * "Sys class name" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 40
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Name" element (team_name)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        team_name: $$GlideElement.scrum_pp_team_name;
    }

    /**
     * "Sprint" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rm_sprint extends rm_release {
        /**
         * "Completed points" element (actual_points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        actual_points: GlideElement;
        
        /**
         * "Total committed points" element (committed_points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        committed_points: GlideElement;
        
        /**
         * "Points" element (points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        points: GlideElement;
        
        /**
         * "Release" element (release)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        release: $$GlideElement.rm_release_scrum;
        
        /**
         * "Team" element (release_team)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        release_team: $$GlideElement.scrum_pp_team;
        
        /**
         * "Current scope points" element (story_points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        story_points: GlideElement;
        
        /**
         * "Group capacity (points)" element (team_points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        team_points: GlideElement;
    }

    /**
     * "Theme" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface scrum_theme extends IBaseRecord {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        number: GlideElement;
        
        /**
         * "Product" element (product)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        product: $$GlideElement.cmdb_model;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        short_description: GlideElement;
        
        /**
         * "Sys class name" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 40
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "Business Calendar Entry Name" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface business_calendar_span_name extends sys_metadata {
        /**
         * "Calendar" element (calendar)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        calendar: $$GlideElement.business_calendar;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 80
         */
        label: GlideElement;
        
        /**
         * "Long name" element (long_name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 240
         * This is column is mandatory.
         */
        long_name: GlideElement;
        
        /**
         * "Short name" element (short_name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        short_name: GlideElement;
    }

    /**
     * "Version" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface wf_versionable extends IBaseRecord {
        /**
         * "Checked out" element (checked_out)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        checked_out: GlideElementGlideObject;
        
        /**
         * "Checked out by" element (checked_out_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        checked_out_by: $$GlideElement.sys_user;
        
        /**
         * "Published" element (published)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        published: GlideElement;
        
        /**
         * "Valid from" element (valid_from)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        valid_from: GlideElementGlideObject;
        
        /**
         * "Valid to" element (valid_to)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        valid_to: GlideElementGlideObject;
        
        /**
         * "Version" element (version)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        version: GlideElement;
        
        /**
         * "Version Container" element (version_container_id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        version_container_id: GlideElement;
        
        /**
         * "Element Definition" element (wf_element_definition)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        wf_element_definition: $$GlideElement.wf_element_definition;
    }

    /**
     * "Service Portal" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sp_portal extends sys_metadata {
        /**
         * "CSS variables" element (css_variables)
         * Type: "Properties" (properties)
         * Maximum length: 16777215
         */
        css_variables: GlideElement;
        
        /**
         * "Dark theme" element (dark_theme)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dark_theme: $$GlideElement.sp_theme;
        
        /**
         * "Default" element (default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        default: GlideElement;
        
        /**
         * "Enable AI Search" element (enable_ais)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        enable_ais: GlideElement;
        
        /**
         * "Enable certificate based authentication" element (enable_certificate_based_authentication)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        enable_certificate_based_authentication: GlideElement;
        
        /**
         * "Enable favorites" element (enable_favorites)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        enable_favorites: GlideElement;
        
        /**
         * "Hide portal name" element (hide_portal_name)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        hide_portal_name: GlideElement;
        
        /**
         * "Homepage" element (homepage)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        homepage: $$GlideElement.sp_page;
        
        /**
         * "Icon" element (icon)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        icon: GlideElement;
        
        /**
         * "Knowledge base" element (kb_knowledge_base)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "KB home page" element (kb_knowledge_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        kb_knowledge_page: $$GlideElement.sp_page;
        
        /**
         * "Login page" element (login_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        login_page: $$GlideElement.sp_page;
        
        /**
         * "Logo" element (logo)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        logo: GlideElement;
        
        /**
         * "404 page" element (notfound_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        notfound_page: $$GlideElement.sp_page;
        
        /**
         * "Quick start config" element (quick_start_config)
         * Type: "JSON" (json)
         * Maximum length: 4000
         */
        quick_start_config: GlideElement;
        
        /**
         * "Catalog" element (sc_catalog)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Catalog home page" element (sc_catalog_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_catalog_page: $$GlideElement.sp_page;
        
        /**
         * "Catalog category home page" element (sc_category_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_category_page: $$GlideElement.sp_page;
        
        /**
         * "Search Application" element (search_application)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        search_application: $$GlideElement.sys_search_context_config;
        
        /**
         * "Search Results Configuration" element (search_results_configuration)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        search_results_configuration: $$GlideElement.sys_ux_composite_data;
        
        /**
         * "Chat Queue" element (sp_chat_queue)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sp_chat_queue: $$GlideElement.chat_queue;
        
        /**
         * "Main menu" element (sp_rectangle_menu)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sp_rectangle_menu: $$GlideElement.sp_instance_menu;
        
        /**
         * "Social QA Knowledge Base" element (sqanda_knowledge_base)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sqanda_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "Theme" element (theme)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        theme: $$GlideElement.sp_theme;
        
        /**
         * "Title" element (title)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 100
         * This is column is mandatory.
         */
        title: GlideElement;
        
        /**
         * "Text Index Group" element (ts_index_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        ts_index_group: $$GlideElement.ts_index_group;
        
        /**
         * "URL suffix" element (url_suffix)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        url_suffix: GlideElement;
    }

    /**
     * "Assessment Metric Template" glide record fields.
     * Auto-number prefix: ATP
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_template extends sys_metadata {
        /**
         * "Allow Image" element (allow_image)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_image: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "MID Server" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ecc_agent extends IBaseRecord {
        /**
         * "Application Experience" element (application_experience)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "not_applicable"
         */
        application_experience: GlideElement;
        
        /**
         * "Application Experience Status" element (application_experience_status)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "cannot_determine"
         */
        application_experience_status: GlideElement;
        
        /**
         * "Auto Invalidated" element (auto_invalidated)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        auto_invalidated: GlideElement;
        
        /**
         * "Container Deployment Name" element (container_deployment_name)
         * Type: "String" (string)
         * Maximum length: 64
         */
        container_deployment_name: GlideElement;
        
        /**
         * "Container Deployment Namespace" element (container_deployment_namespace)
         * Type: "String" (string)
         * Maximum length: 64
         */
        container_deployment_namespace: GlideElement;
        
        /**
         * "Container ID" element (container_id)
         * Type: "String" (string)
         * Maximum length: 80
         */
        container_id: GlideElement;
        
        /**
         * "Deployment MID Server Id" element (deployment_mid_id)
         * Type: "String" (string)
         * Maximum length: 32
         */
        deployment_mid_id: GlideElement;
        
        /**
         * "FIPS Enforced" element (fips_enforced)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        fips_enforced: GlideElement;
        
        /**
         * "Home directory" element (home_dir)
         * Type: "String" (string)
         * Maximum length: 1024
         */
        home_dir: GlideElement;
        
        /**
         * "Host core count" element (host_cpu_core_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        host_cpu_core_count: GlideElement;
        
        /**
         * "Host cpu speed (MHz)" element (host_cpu_speed)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        host_cpu_speed: GlideElement;
        
        /**
         * "Host total disk size" element (host_disk_size)
         * Type: "String" (string)
         * Maximum length: 40
         */
        host_disk_size: GlideElement;
        
        /**
         * "Host total disk size bytes" element (host_disk_size_bytes)
         * Type: "Decimal" (decimal)
         * Maximum length: 20
         */
        host_disk_size_bytes: GlideElement;
        
        /**
         * "Host glibc version" element (host_glibc_version)
         * Type: "String" (string)
         * Maximum length: 80
         */
        host_glibc_version: GlideElement;
        
        /**
         * "Host cpu hyperthreading" element (host_hyperthreading)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        host_hyperthreading: GlideElement;
        
        /**
         * "Host name" element (host_name)
         * Type: "String" (string)
         * Maximum length: 254
         */
        host_name: GlideElement;
        
        /**
         * "Host OS architecture" element (host_os_address_width)
         * Type: "String" (string)
         * Maximum length: 40
         */
        host_os_address_width: GlideElement;
        
        /**
         * "Host OS distribution" element (host_os_distribution)
         * Type: "String" (string)
         * Maximum length: 80
         */
        host_os_distribution: GlideElement;
        
        /**
         * "Host OS version" element (host_os_version)
         * Type: "String" (string)
         * Maximum length: 80
         */
        host_os_version: GlideElement;
        
        /**
         * "Host powershell version" element (host_powershell_version)
         * Type: "String" (string)
         * Maximum length: 80
         */
        host_powershell_version: GlideElement;
        
        /**
         * "Host Installed RAM (MB)" element (host_total_ram)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        host_total_ram: GlideElement;
        
        /**
         * "Host OS" element (host_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        host_type: GlideElement;
        
        /**
         * "Idle Since" element (idle_since)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        idle_since: GlideElementGlideObject;
        
        /**
         * "Invalidated At" element (invalidated_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        invalidated_at: GlideElementGlideObject;
        
        /**
         * "Invalidated By" element (invalidated_by)
         * Type: "String" (string)
         * Maximum length: 40
         */
        invalidated_by: GlideElement;
        
        /**
         * "IP address" element (ip_address)
         * Type: "IP Address (Validated IPV4, IPV6)" (ip_addr)
         * Maximum length: 40
         */
        ip_address: GlideElement;
        
        /**
         * "Is running using System account" element (is_running_using_system)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        is_running_using_system: GlideElement;
        
        /**
         * "Is using a custom certificate" element (is_using_custom_cert)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        is_using_custom_cert: GlideElement;
        
        /**
         * "Is using mutual authentication" element (is_using_mutual_auth)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        is_using_mutual_auth: GlideElement;
        
        /**
         * "JFR Recording State" element (jfr_rec_state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        jfr_rec_state: GlideElement;
        
        /**
         * "JVM version" element (jvm_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        jvm_version: GlideElement;
        
        /**
         * "Last refreshed" element (last_refreshed)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_refreshed: GlideElementGlideObject;
        
        /**
         * "MID Java command directory" element (mid_java_command_dir)
         * Type: "String" (string)
         * Maximum length: 1024
         */
        mid_java_command_dir: GlideElement;
        
        /**
         * "JVM RAM (MB)" element (mid_maximum_ram)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        mid_maximum_ram: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Network" element (network)
         * Type: "String" (string)
         * Maximum length: 45
         */
        network: GlideElement;
        
        /**
         * "Nmap Version" element (nmap_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        nmap_version: GlideElement;
        
        /**
         * "Profile ID" element (profile_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        profile_id: $$GlideElement.mid_server_profile;
        
        /**
         * "Public Key" element (public_key)
         * Type: "String" (string)
         * Maximum length: 2048
         */
        public_key: GlideElement;
        
        /**
         * "Purpose" element (purpose)
         * Type: "String" (string)
         * Maximum length: 1024
         */
        purpose: GlideElement;
        
        /**
         * "Router" element (router)
         * Type: "IP Address (Validated IPV4, IPV6)" (ip_addr)
         * Maximum length: 40
         */
        router: GlideElement;
        
        /**
         * "Started" element (started)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        started: GlideElementGlideObject;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 40
         */
        status: GlideElement;
        
        /**
         * "Stopped" element (stopped)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        stopped: GlideElementGlideObject;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Time zone" element (timezone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        timezone: GlideElement;
        
        /**
         * "Unresolved issues" element (unresolved_issues)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        unresolved_issues: GlideElement;
        
        /**
         * "Used Installer" element (used_installer)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        used_installer: GlideElement;
        
        /**
         * "Logged in user" element (user_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        user_name: GlideElement;
        
        /**
         * "Validated" element (validated)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "rekey"
         */
        validated: GlideElement;
        
        /**
         * "Validated At" element (validated_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        validated_at: GlideElementGlideObject;
        
        /**
         * "Validated By" element (validated_by)
         * Type: "String" (string)
         * Maximum length: 40
         */
        validated_by: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 80
         */
        version: GlideElement;
        
        /**
         * "Windows domain" element (win_domain)
         * Type: "String" (string)
         * Maximum length: 40
         */
        win_domain: GlideElement;
        
        /**
         * "Wrapper Name" element (wrapper_name)
         * Type: "String" (string)
         * Maximum length: 256
         */
        wrapper_name: GlideElement;
    }

    /**
     * "Mid Server Profile" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface mid_server_profile extends IBaseRecord {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 256
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 80
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 100
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Team name" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface scrum_pp_team_name extends IBaseRecord {
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 80
         */
        short_description: GlideElement;
        
        /**
         * "Sys class name" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 40
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "CI Relationship Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_rel_type extends sys_metadata {
        /**
         * "Child descriptor" element (child_descriptor)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        child_descriptor: GlideElement;
        
        /**
         * "End point" element (end_point)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        end_point: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Parent descriptor" element (parent_descriptor)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        parent_descriptor: GlideElement;
    }

    /**
     * "CI Relationship" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_rel_ci extends IBaseRecord {
        /**
         * "Child" element (child)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        child: $$GlideElement.cmdb_ci;
        
        /**
         * "Connection strength" element (connection_strength)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "always"
         */
        connection_strength: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.cmdb_ci;
        
        /**
         * "Percent outage" element (percent_outage)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        percent_outage: GlideElement;
        
        /**
         * "Port" element (port)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        port: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        type: $$GlideElement.cmdb_rel_type;
    }

    /**
     * "Virtual Machine Object" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_vm_object extends cmdb_ci {
        /**
         * "Object ID" element (object_id)
         * Type: "String" (string)
         * Maximum length: 512
         */
        object_id: GlideElement;
        
        /**
         * "Server" element (server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        server: $$GlideElement.cmdb_ci_virtualization_server;
    }

    /**
     * "VMware vCenter Object" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_vcenter_object extends cmdb_ci_vm_object {
        /**
         * "Managed object reference ID" element (morid)
         * Type: "String" (string)
         * Maximum length: 255
         */
        morid: GlideElement;
        
        /**
         * "vCenter Reference" element (vcenter_ref)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        vcenter_ref: $$GlideElement.cmdb_ci_vcenter;
        
        /**
         * "vCenter Instance UUID" element (vcenter_uuid)
         * Type: "String" (string)
         * Maximum length: 255
         */
        vcenter_uuid: GlideElement;
    }

    /**
     * "Application" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_appl extends cmdb_ci {
        /**
         * "Credentialless Discovery Port" element (cl_port)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        cl_port: GlideElement;
        
        /**
         * "Configuration directory" element (config_directory)
         * Type: "String" (string)
         * Maximum length: 255
         */
        config_directory: GlideElement;
        
        /**
         * "Configuration file" element (config_file)
         * Type: "String" (string)
         * Maximum length: 255
         */
        config_file: GlideElement;
        
        /**
         * "Edition" element (edition)
         * Type: "String" (string)
         * Maximum length: 100
         */
        edition: GlideElement;
        
        /**
         * "Installation directory" element (install_directory)
         * Type: "String" (string)
         * Maximum length: 255
         */
        install_directory: GlideElement;
        
        /**
         * "Is clustered" element (is_clustered)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        is_clustered: GlideElement;
        
        /**
         * "PID" element (pid)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        pid: GlideElement;
        
        /**
         * "Running process command hash" element (rp_command_hash)
         * Type: "String" (string)
         * Maximum length: 255
         */
        rp_command_hash: GlideElement;
        
        /**
         * "Running process key parameters hash" element (rp_key_parameters_hash)
         * Type: "String" (string)
         * Maximum length: 255
         */
        rp_key_parameters_hash: GlideElement;
        
        /**
         * "Running process command" element (running_process_command)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        running_process_command: GlideElement;
        
        /**
         * "Running process key parameters" element (running_process_key_parameters)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        running_process_key_parameters: GlideElement;
        
        /**
         * "TCP port(s)" element (tcp_port)
         * Type: "String" (string)
         * Maximum length: 255
         */
        tcp_port: GlideElement;
        
        /**
         * "Used for" element (used_for)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Production"
         */
        used_for: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 255
         */
        version: GlideElement;
    }

    /**
     * "VMware vCenter Instance" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_vcenter extends cmdb_ci_appl {
        /**
         * "API version" element (api_version)
         * Type: "String" (string)
         * Maximum length: 255
         */
        api_version: GlideElement;
        
        /**
         * "Full name" element (fullname)
         * Type: "String" (string)
         * Maximum length: 255
         */
        fullname: GlideElement;
        
        /**
         * "Instance UUID" element (instance_uuid)
         * Type: "String" (string)
         * Maximum length: 255
         */
        instance_uuid: GlideElement;
        
        /**
         * "URL" element (url)
         * Type: "URL" (url)
         * Maximum length: 255
         */
        url: GlideElement;
    }

    /**
     * "Running Process" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_running_process extends IBaseRecord {
        /**
         * "Absent" element (absent)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        absent: GlideElement;
        
        /**
         * "Classify" element (classify)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        classify: GlideElement;
        
        /**
         * "Command" element (command)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        command: GlideElement;
        
        /**
         * "Computer" element (computer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        computer: $$GlideElement.cmdb_ci_computer;
        
        /**
         * "Connecting to" element (connecting_to)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        connecting_to: GlideElement;
        
        /**
         * "Count" element (count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        count: GlideElement;
        
        /**
         * "Key parameters" element (key_parameters)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        key_parameters: GlideElement;
        
        /**
         * "Listening on" element (listening_on)
         * Type: "String" (string)
         * Maximum length: 255
         */
        listening_on: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Parameters" element (parameters)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        parameters: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.cmdb_running_process;
        
        /**
         * "PID" element (pid)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        pid: GlideElement;
        
        /**
         * "PPID" element (ppid)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        ppid: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Cloud Network" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_network extends cmdb_ci_vcenter_object {
        /**
         * "Access Port Vlan" element (access_port_vlan)
         * Type: "String" (string)
         * Maximum length: 100
         */
        access_port_vlan: GlideElement;
        
        /**
         * "Admin State" element (admin_state)
         * Type: "String" (string)
         * Maximum length: 100
         */
        admin_state: GlideElement;
        
        /**
         * "Broadcast Address" element (broadcast_address)
         * Type: "String" (string)
         * Maximum length: 100
         */
        broadcast_address: GlideElement;
        
        /**
         * "Capability Control" element (capability_control)
         * Type: "String" (string)
         * Maximum length: 100
         */
        capability_control: GlideElement;
        
        /**
         * "Cidr" element (cidr)
         * Type: "String" (string)
         * Maximum length: 100
         */
        cidr: GlideElement;
        
        /**
         * "Default Gateway" element (default_gateway)
         * Type: "String" (string)
         * Maximum length: 100
         */
        default_gateway: GlideElement;
        
        /**
         * "Domain Name" element (domain_name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        domain_name: GlideElement;
        
        /**
         * "DHCP Enabled" element (is_dhcp_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        is_dhcp_enabled: GlideElement;
        
        /**
         * "External" element (is_external)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        is_external: GlideElement;
        
        /**
         * "Shared" element (is_shared)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        is_shared: GlideElement;
        
        /**
         * "Max Ports" element (max_ports)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        max_ports: GlideElement;
        
        /**
         * "Netmask" element (netmask)
         * Type: "String" (string)
         * Maximum length: 100
         */
        netmask: GlideElement;
        
        /**
         * "Parent Domain Name" element (parent_domain_name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        parent_domain_name: GlideElement;
        
        /**
         * "Provided Contracts" element (provided_contracts)
         * Type: "String" (string)
         * Maximum length: 100
         */
        provided_contracts: GlideElement;
        
        /**
         * "Scope" element (scope)
         * Type: "String" (string)
         * Maximum length: 100
         */
        scope: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "Switch Port Mode" element (switch_port_mode)
         * Type: "String" (string)
         * Maximum length: 100
         */
        switch_port_mode: GlideElement;
        
        /**
         * "System MTU" element (system_mtu)
         * Type: "String" (string)
         * Maximum length: 100
         */
        system_mtu: GlideElement;
        
        /**
         * "Terminate On" element (terminated_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        terminated_on: GlideElementGlideObject;
    }

    /**
     * "Classification" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface discovery_classy extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Disabled" element (disabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        disabled: GlideElement;
        
        /**
         * "Match criteria" element (match_criteria)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Any"
         */
        match_criteria: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "On classification script" element (script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         * Default value: "// This script gets run when something gets classified"
         */
        script: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
    }

    /**
     * "Computer" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_computer extends cmdb_ci_hardware {
        /**
         * "CD" element (cd_rom)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        cd_rom: GlideElement;
        
        /**
         * "CD Speed" element (cd_speed)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        cd_speed: GlideElement;
        
        /**
         * "Chassis type" element (chassis_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        chassis_type: GlideElement;
        
        /**
         * "CPU core count" element (cpu_core_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        cpu_core_count: GlideElement;
        
        /**
         * "CPU core thread" element (cpu_core_thread)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        cpu_core_thread: GlideElement;
        
        /**
         * "CPU count" element (cpu_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        cpu_count: GlideElement;
        
        /**
         * "CPU manufacturer" element (cpu_manufacturer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cpu_manufacturer: $$GlideElement.core_company;
        
        /**
         * "CPU name" element (cpu_name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        cpu_name: GlideElement;
        
        /**
         * "CPU speed (MHz)" element (cpu_speed)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        cpu_speed: GlideElement;
        
        /**
         * "CPU type" element (cpu_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        cpu_type: GlideElement;
        
        /**
         * "Disk space (GB)" element (disk_space)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        disk_space: GlideElement;
        
        /**
         * "Floppy" element (floppy)
         * Type: "String" (string)
         * Maximum length: 40
         */
        floppy: GlideElement;
        
        /**
         * "Form factor" element (form_factor)
         * Type: "String" (string)
         * Maximum length: 40
         */
        form_factor: GlideElement;
        
        /**
         * "Object ID" element (object_id)
         * Type: "String" (string)
         * Maximum length: 512
         */
        object_id: GlideElement;
        
        /**
         * "Operating System" element (os)
         * Type: "String" (string)
         * Maximum length: 50
         */
        os: GlideElement;
        
        /**
         * "OS Address Width (bits)" element (os_address_width)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        os_address_width: GlideElement;
        
        /**
         * "OS Domain" element (os_domain)
         * Type: "String" (string)
         * Maximum length: 40
         */
        os_domain: GlideElement;
        
        /**
         * "OS Service Pack" element (os_service_pack)
         * Type: "String" (string)
         * Maximum length: 40
         */
        os_service_pack: GlideElement;
        
        /**
         * "OS Version" element (os_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        os_version: GlideElement;
        
        /**
         * "RAM (MB)" element (ram)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        ram: GlideElement;
        
        /**
         * "Is Virtual" element (virtual)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        virtual: GlideElement;
    }

    /**
     * "Server" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_server extends cmdb_ci_computer {
        /**
         * "Classification" element (classification)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Production"
         */
        classification: GlideElement;
        
        /**
         * "Disaster backup" element (dr_backup)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dr_backup: $$GlideElement.cmdb_ci_server;
        
        /**
         * "Firewall status" element (firewall_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Intranet"
         */
        firewall_status: GlideElement;
        
        /**
         * "Host name" element (host_name)
         * Type: "String" (string)
         * Maximum length: 255
         */
        host_name: GlideElement;
        
        /**
         * "Used for" element (used_for)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Production"
         */
        used_for: GlideElement;
    }

    /**
     * "Cluster" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_cluster extends cmdb_ci {
        /**
         * "Cluster ID" element (cluster_id)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        cluster_id: GlideElement;
        
        /**
         * "Cluster Status" element (cluster_status)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        cluster_status: GlideElement;
        
        /**
         * "Cluster Type" element (cluster_type)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        cluster_type: GlideElement;
        
        /**
         * "Cluster Version" element (cluster_version)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        cluster_version: GlideElement;
    }

    /**
     * "IP Network" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_ip_network extends cmdb_ci {
        /**
         * "Discover" element (discover)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        discover: GlideElement;
        
        /**
         * "Mid server" element (mid_server)
         * Type: "String" (string)
         * Maximum length: 40
         */
        mid_server: GlideElement;
        
        /**
         * "Router" element (router)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        router: $$GlideElement.cmdb_ci;
        
        /**
         * "Router interface type" element (router_interface_type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        router_interface_type: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "Ready"
         */
        state: GlideElement;
        
        /**
         * "Subnet" element (subnet)
         * Type: "String" (string)
         * Maximum length: 40
         */
        subnet: GlideElement;
    }

    /**
     * "Discovery Status" glide record fields.
     * Auto-number prefix: DIS
     * Scope: Global (global) - Global application scope
     */
    export interface discovery_status extends IBaseRecord {
        /**
         * "Completed" element (completed)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        completed: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 255
         */
        description: GlideElement;
        
        /**
         * "Discover" element (discover)
         * Type: "String" (string)
         * Maximum length: 40
         */
        discover: GlideElement;
        
        /**
         * "Schedule" element (dscheduler)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dscheduler: GlideElementReference;
        
        /**
         * "Duration" element (duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         * This is a read-only column.
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Estimated probe count" element (estimated_probe_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        estimated_probe_count: GlideElement;
        
        /**
         * "Include alive" element (include_alive)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        include_alive: GlideElement;
        
        /**
         * "Log state changes" element (log_state_changes)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        log_state_changes: GlideElement;
        
        /**
         * "Max run time" element (max_run)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        max_run: GlideElementGlideObject;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        number: GlideElement;
        
        /**
         * "Priority" element (priority)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "2"
         * This is a read-only column.
         */
        priority: GlideElement;
        
        /**
         * "Progress" element (progress)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         * This is a read-only column.
         */
        progress: GlideElement;
        
        /**
         * "Scheduler job" element (scheduler_job)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scheduler_job: GlideElement;
        
        /**
         * "Scratch pad" element (scratchpad)
         * Type: "Name/Values" (name_values)
         * Maximum length: 8000
         */
        scratchpad: GlideElement;
        
        /**
         * "Source" element (source)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Schedule_Discovery"
         * This is a read-only column.
         */
        source: GlideElement;
        
        /**
         * "Started" element (started)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        started: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Starting"
         */
        state: GlideElement;
        
        /**
         * "Status type" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Use SNMP Version" element (use_snmp_version)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "v1_v2c"
         */
        use_snmp_version: GlideElement;
    }

    /**
     * "Scheduled Job" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sysauto extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Business Calendar" element (business_calendar)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_calendar: $$GlideElement.business_calendar;
        
        /**
         * "Condition" element (condition)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        condition: GlideElement;
        
        /**
         * "Conditional" element (conditional)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        conditional: GlideElement;
        
        /**
         * "Time" element (entered_time)
         * Type: "UTC Time" (glide_utc_time)
         * Maximum length: 40
         */
        entered_time: GlideElementGlideObject;
        
        /**
         * "Max drift" element (max_drift)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        max_drift: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Offset" element (offset)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        offset: GlideElementGlideObject;
        
        /**
         * "Offset type" element (offset_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        offset_type: GlideElement;
        
        /**
         * "Run as" element (run_as)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        run_as: $$GlideElement.sys_user;
        
        /**
         * "Run as tz" element (run_as_tz)
         * Type: "String" (string)
         * Maximum length: 40
         */
        run_as_tz: GlideElement;
        
        /**
         * "Day" element (run_dayofmonth)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        run_dayofmonth: GlideElement;
        
        /**
         * "Day" element (run_dayofweek)
         * Type: "Day of Week" (day_of_week)
         * Maximum length: 40
         */
        run_dayofweek: GlideElement;
        
        /**
         * "Repeat Interval" element (run_period)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        run_period: GlideElementGlideObject;
        
        /**
         * "Starting" element (run_start)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        run_start: GlideElementGlideObject;
        
        /**
         * "Time" element (run_time)
         * Type: "Time" (glide_time)
         * Maximum length: 40
         */
        run_time: GlideElementGlideObject;
        
        /**
         * "Run" element (run_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "daily"
         */
        run_type: GlideElement;
        
        /**
         * "Time zone" element (time_zone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        time_zone: GlideElement;
        
        /**
         * "Upgrade safe" element (upgrade_safe)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        upgrade_safe: GlideElement;
    }

    /**
     * "Scheduled Script Execution" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sysauto_script extends sysauto {
        /**
         * "Run this script" element (script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        script: GlideElement;
    }

    /**
     * "MID Server Cluster" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ecc_agent_cluster extends IBaseRecord {
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 50
         * Default value: "Load Balance"
         */
        type: GlideElement;
    }

    /**
     * "Hardware" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_hardware extends cmdb_ci {
        /**
         * "Default Gateway" element (default_gateway)
         * Type: "String" (string)
         * Maximum length: 40
         */
        default_gateway: GlideElement;
        
        /**
         * "Hardware Status" element (hardware_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "installed"
         */
        hardware_status: GlideElement;
        
        /**
         * "Substatus" element (hardware_substatus)
         * Type: "String" (string)
         * Maximum length: 40
         */
        hardware_substatus: GlideElement;
        
        /**
         * "Internet Facing" element (internet_facing)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        internet_facing: GlideElement;
        
        /**
         * "Most frequent logged in user" element (most_frequent_user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        most_frequent_user: $$GlideElement.sys_user;
    }

    /**
     * "Network Gear" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_netgear extends cmdb_ci_hardware {
        /**
         * "Estimated bandwidth" element (bandwidth)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        bandwidth: GlideElement;
        
        /**
         * "Can hub IP" element (can_hub)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        can_hub: GlideElement;
        
        /**
         * "Can partition VLANs" element (can_partitionvlans)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        can_partitionvlans: GlideElement;
        
        /**
         * "Can route IP" element (can_route)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        can_route: GlideElement;
        
        /**
         * "Can switch IP" element (can_switch)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        can_switch: GlideElement;
        
        /**
         * "Channels" element (channels)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        channels: GlideElement;
        
        /**
         * "CPU count" element (cpu_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        cpu_count: GlideElement;
        
        /**
         * "CPU manufacturer" element (cpu_manufacturer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cpu_manufacturer: $$GlideElement.core_company;
        
        /**
         * "CPU speed (MHz)" element (cpu_speed)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        cpu_speed: GlideElement;
        
        /**
         * "CPU type" element (cpu_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        cpu_type: GlideElement;
        
        /**
         * "Device type" element (device_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        device_type: GlideElement;
        
        /**
         * "Discovery Protocol ID" element (discovery_proto_id)
         * Type: "String" (string)
         * Maximum length: 256
         */
        discovery_proto_id: GlideElement;
        
        /**
         * "Discovery Protocol Type" element (discovery_proto_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        discovery_proto_type: GlideElement;
        
        /**
         * "Disk space (GB)" element (disk_space)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        disk_space: GlideElement;
        
        /**
         * "Firmware manufacturer" element (firmware_manufacturer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        firmware_manufacturer: $$GlideElement.core_company;
        
        /**
         * "Firmware version" element (firmware_version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        firmware_version: GlideElement;
        
        /**
         * "Physical interface count" element (physical_interface_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        physical_interface_count: GlideElement;
        
        /**
         * "Ports" element (ports)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        ports: GlideElement;
        
        /**
         * "RAM (MB)" element (ram)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        ram: GlideElement;
        
        /**
         * "Range" element (range)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        range: GlideElement;
        
        /**
         * "SNMP Location" element (snmp_sys_location)
         * Type: "String" (string)
         * Maximum length: 255
         */
        snmp_sys_location: GlideElement;
    }

    /**
     * "Network Adapter" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_network_adapter extends cmdb_ci {
        /**
         * "Alias" element (alias)
         * Type: "String" (string)
         * Maximum length: 40
         */
        alias: GlideElement;
        
        /**
         * "Configuration Item" element (cmdb_ci)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cmdb_ci: $$GlideElement.cmdb_ci;
        
        /**
         * "DHCP Enabled" element (dhcp_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        dhcp_enabled: GlideElement;
        
        /**
         * "IP default gateway" element (ip_default_gateway)
         * Type: "IP Address (Validated IPV4, IPV6)" (ip_addr)
         * Maximum length: 60
         */
        ip_default_gateway: GlideElement;
        
        /**
         * "Mac manufacturer" element (mac_manufacturer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        mac_manufacturer: $$GlideElement.core_company;
        
        /**
         * "Netmask" element (netmask)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "255.255.255.0"
         */
        netmask: GlideElement;
        
        /**
         * "Is Virtual" element (virtual)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        virtual: GlideElement;
    }

    /**
     * "Company" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface core_company extends IBaseRecord {
        /**
         * "Apple icon" element (apple_icon)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        apple_icon: GlideElement;
        
        /**
         * "Banner image" element (banner_image)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        banner_image: GlideElement;
        
        /**
         * "UI16 Banner Image" element (banner_image_light)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        banner_image_light: GlideElement;
        
        /**
         * "Banner text" element (banner_text)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        banner_text: GlideElement;
        
        /**
         * "City" element (city)
         * Type: "String" (string)
         * Maximum length: 50
         */
        city: GlideElement;
        
        /**
         * "Contact" element (contact)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Coordinates retrieved on" element (coordinates_retrieved_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        coordinates_retrieved_on: GlideElementGlideObject;
        
        /**
         * "Country" element (country)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "USA"
         */
        country: GlideElement;
        
        /**
         * "Customer" element (customer)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        customer: GlideElement;
        
        /**
         * "Discount" element (discount)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        discount: GlideElement;
        
        /**
         * "Fax phone" element (fax_phone)
         * Type: "Phone Number" (ph_number)
         * Maximum length: 40
         */
        fax_phone: GlideElement;
        
        /**
         * "Fiscal year" element (fiscal_year)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        fiscal_year: GlideElementGlideObject;
        
        /**
         * "Lat long error" element (lat_long_error)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        lat_long_error: GlideElement;
        
        /**
         * "Latitude" element (latitude)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        latitude: GlideElement;
        
        /**
         * "Longitude" element (longitude)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        longitude: GlideElement;
        
        /**
         * "Manufacturer" element (manufacturer)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        manufacturer: GlideElement;
        
        /**
         * "Market cap" element (market_cap)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        market_cap: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Notes" element (notes)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        notes: GlideElement;
        
        /**
         * "Number of employees" element (num_employees)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        num_employees: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.core_company;
        
        /**
         * "Phone" element (phone)
         * Type: "Phone Number" (ph_number)
         * Maximum length: 40
         */
        phone: GlideElement;
        
        /**
         * "Primary" element (primary)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        primary: GlideElement;
        
        /**
         * "Profits" element (profits)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        profits: GlideElement;
        
        /**
         * "Publicly traded" element (publicly_traded)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        publicly_traded: GlideElement;
        
        /**
         * "Rank tier" element (rank_tier)
         * Type: "String" (string)
         * Maximum length: 40
         */
        rank_tier: GlideElement;
        
        /**
         * "Revenue per year" element (revenue_per_year)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        revenue_per_year: GlideElement;
        
        /**
         * "SSO Source" element (sso_source)
         * Type: "String" (string)
         * Maximum length: 128
         */
        sso_source: GlideElement;
        
        /**
         * "State / Province" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "Stock price" element (stock_price)
         * Type: "String" (string)
         * Maximum length: 40
         */
        stock_price: GlideElement;
        
        /**
         * "Stock symbol" element (stock_symbol)
         * Type: "String" (string)
         * Maximum length: 40
         */
        stock_symbol: GlideElement;
        
        /**
         * "Street" element (street)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 255
         */
        street: GlideElement;
        
        /**
         * "Class" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Theme" element (theme)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        theme: $$GlideElement.sys_ui_theme;
        
        /**
         * "Vendor" element (vendor)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        vendor: GlideElement;
        
        /**
         * "Vendor manager" element (vendor_manager)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        vendor_manager: GlideElementGlideObject;
        
        /**
         * "Vendor type" element (vendor_type)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        vendor_type: GlideElementGlideObject;
        
        /**
         * "Website" element (website)
         * Type: "URL" (url)
         * Maximum length: 1024
         */
        website: GlideElement;
        
        /**
         * "Zip / Postal code" element (zip)
         * Type: "String" (string)
         * Maximum length: 40
         */
        zip: GlideElement;
    }

    /**
     * "Base Theme" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_base_theme extends sys_metadata {
        /**
         * "CSS" element (css)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        css: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        name: GlideElement;
    }

    /**
     * "Theme" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_theme extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Base Theme" element (base_theme)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        base_theme: $$GlideElement.sys_ui_base_theme;
        
        /**
         * "CSS" element (css)
         * Type: "String" (string)
         * Maximum length: 65000
         */
        css: GlideElement;
        
        /**
         * "Device" element (device)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "browser"
         */
        device: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        name: GlideElement;
    }

    /**
     * "Department" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmn_department extends IBaseRecord {
        /**
         * "Business unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Company" element (company)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Cost center" element (cost_center)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Department head" element (dept_head)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dept_head: $$GlideElement.sys_user;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Head count" element (head_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        head_count: GlideElement;
        
        /**
         * "ID" element (id)
         * Type: "String" (string)
         * Maximum length: 40
         */
        id: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.cmn_department;
        
        /**
         * "Primary contact" element (primary_contact)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        primary_contact: $$GlideElement.sys_user;
    }

    /**
     * "Location" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmn_location extends IBaseRecord {
        /**
         * "City" element (city)
         * Type: "String" (string)
         * Maximum length: 40
         */
        city: GlideElement;
        
        /**
         * "Location source" element (cmn_location_source)
         * Type: "String" (string)
         * Maximum length: 40
         */
        cmn_location_source: GlideElement;
        
        /**
         * "Location type" element (cmn_location_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        cmn_location_type: GlideElement;
        
        /**
         * "Company" element (company)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Contact" element (contact)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Coordinates retrieved on" element (coordinates_retrieved_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        coordinates_retrieved_on: GlideElementGlideObject;
        
        /**
         * "Country" element (country)
         * Type: "String" (string)
         * Maximum length: 40
         */
        country: GlideElement;
        
        /**
         * "Duplicate" element (duplicate)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        duplicate: GlideElement;
        
        /**
         * "Fax phone" element (fax_phone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        fax_phone: GlideElement;
        
        /**
         * "Full name" element (full_name)
         * Type: "String" (string)
         * Maximum length: 255
         */
        full_name: GlideElement;
        
        /**
         * "Lat long error" element (lat_long_error)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        lat_long_error: GlideElement;
        
        /**
         * "Latitude" element (latitude)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        latitude: GlideElement;
        
        /**
         * "Life Cycle Stage" element (life_cycle_stage)
         * Type: "Reference" (reference)
         * Maximum length: 100
         */
        life_cycle_stage: $$GlideElement.life_cycle_stage;
        
        /**
         * "Life Cycle Stage Status" element (life_cycle_stage_status)
         * Type: "Reference" (reference)
         * Maximum length: 100
         */
        life_cycle_stage_status: $$GlideElement.life_cycle_stage_status;
        
        /**
         * "Longitude" element (longitude)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        longitude: GlideElement;
        
        /**
         * "Managed by group" element (managed_by_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        managed_by_group: $$GlideElement.sys_user_group;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.cmn_location;
        
        /**
         * "Phone" element (phone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        phone: GlideElement;
        
        /**
         * "Phone territory" element (phone_territory)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        phone_territory: $$GlideElement.sys_phone_territory;
        
        /**
         * "Primary location" element (primary_location)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        primary_location: $$GlideElement.cmn_location;
        
        /**
         * "State / Province" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "Stock room" element (stock_room)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        stock_room: GlideElement;
        
        /**
         * "Street" element (street)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 255
         */
        street: GlideElement;
        
        /**
         * "Time zone" element (time_zone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        time_zone: GlideElement;
        
        /**
         * "Zip / Postal Code" element (zip)
         * Type: "String" (string)
         * Maximum length: 40
         */
        zip: GlideElement;
    }

    /**
     * "Sys Phone Territory" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_phone_territory extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Country calling code" element (ccc)
         * Type: "String" (string)
         * Maximum length: 20
         * This is column is mandatory.
         */
        ccc: GlideElement;
        
        /**
         * "Display" element (display)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        display: GlideElement;
        
        /**
         * "International direct dial" element (idd)
         * Type: "String" (string)
         * Maximum length: 20
         */
        idd: GlideElement;
        
        /**
         * "International prefix" element (international_prefix)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        international_prefix: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "National prefix" element (national_prefix)
         * Type: "String" (string)
         * Maximum length: 40
         */
        national_prefix: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "STD" element (std)
         * Type: "String" (string)
         * Maximum length: 20
         */
        std: GlideElement;
        
        /**
         * "STD follows country" element (std_follows_ccc)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        std_follows_ccc: GlideElement;
        
        /**
         * "Trunk dialing code optional" element (std_optional)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        std_optional: GlideElement;
    }

    /**
     * "User" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user extends IBaseRecord {
        /**
         * "Accumulated roles" element (accumulated_roles)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        accumulated_roles: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Avatar" element (avatar)
         * Type: "Image" (user_image)
         * Maximum length: 40
         * This is a read-only column.
         */
        avatar: GlideElement;
        
        /**
         * "Average Daily FTE Hours/Hours Per Person Day" element (average_daily_fte)
         * Type: "Decimal" (decimal)
         * Maximum length: 20
         */
        average_daily_fte: GlideElement;
        
        /**
         * "Building" element (building)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        building: $$GlideElement.cmn_building;
        
        /**
         * "Calendar integration" element (calendar_integration)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        calendar_integration: GlideElement;
        
        /**
         * "City" element (city)
         * Type: "String" (string)
         * Maximum length: 40
         */
        city: GlideElement;
        
        /**
         * "Company" element (company)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        company: $$GlideElement.core_company;
        
        /**
         * "Cost center" element (cost_center)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Country code" element (country)
         * Type: "String" (string)
         * Maximum length: 3
         */
        country: GlideElement;
        
        /**
         * "Date format" element (date_format)
         * Type: "String" (string)
         * Maximum length: 40
         */
        date_format: GlideElement;
        
        /**
         * "Default perspective" element (default_perspective)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_perspective: $$GlideElement.sys_perspective;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Email" element (email)
         * Type: "Email" (email)
         * Maximum length: 100
         */
        email: GlideElement;
        
        /**
         * "Employee number" element (employee_number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        employee_number: GlideElement;
        
        /**
         * "Enable Multifactor Authentication" element (enable_multifactor_authn)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        enable_multifactor_authn: GlideElement;
        
        /**
         * "Failed login attempts" element (failed_attempts)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        failed_attempts: GlideElement;
        
        /**
         * "First name" element (first_name)
         * Type: "String" (string)
         * Maximum length: 50
         */
        first_name: GlideElement;
        
        /**
         * "Gender" element (gender)
         * Type: "String" (string)
         * Maximum length: 40
         */
        gender: GlideElement;
        
        /**
         * "Hashed User ID" element (hashed_user_id)
         * Type: "String" (string)
         * Maximum length: 200
         */
        hashed_user_id: GlideElement;
        
        /**
         * "Home phone" element (home_phone)
         * Type: "Phone Number" (ph_number)
         * Maximum length: 40
         */
        home_phone: GlideElement;
        
        /**
         * "Internal Integration User" element (internal_integration_user)
         * Type: "True/False" (boolean)
         * Maximum length: 1
         * Default value: "false"
         */
        internal_integration_user: GlideElement;
        
        /**
         * "Prefix" element (introduction)
         * Type: "String" (string)
         * Maximum length: 40
         */
        introduction: GlideElement;
        
        /**
         * "Last login" element (last_login)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        last_login: GlideElementGlideObject;
        
        /**
         * "Last login time" element (last_login_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_login_time: GlideElementGlideObject;
        
        /**
         * "Last name" element (last_name)
         * Type: "String" (string)
         * Maximum length: 50
         */
        last_name: GlideElement;
        
        /**
         * "LDAP server" element (ldap_server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        ldap_server: $$GlideElement.ldap_server_config;
        
        /**
         * "Location" element (location)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Locked out" element (locked_out)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        locked_out: GlideElement;
        
        /**
         * "Manager" element (manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        manager: $$GlideElement.sys_user;
        
        /**
         * "Middle name" element (middle_name)
         * Type: "String" (string)
         * Maximum length: 50
         */
        middle_name: GlideElement;
        
        /**
         * "Mobile phone" element (mobile_phone)
         * Type: "Phone Number" (ph_number)
         * Maximum length: 40
         */
        mobile_phone: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 151
         */
        name: GlideElement;
        
        /**
         * "Notification" element (notification)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "2"
         */
        notification: GlideElement;
        
        /**
         * "Password needs reset" element (password_needs_reset)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        password_needs_reset: GlideElement;
        
        /**
         * "Business phone" element (phone)
         * Type: "Phone Number" (ph_number)
         * Maximum length: 40
         */
        phone: GlideElement;
        
        /**
         * "Photo" element (photo)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        photo: GlideElement;
        
        /**
         * "Language" element (preferred_language)
         * Type: "String" (string)
         * Maximum length: 40
         */
        preferred_language: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        roles: GlideElement;
        
        /**
         * "Schedule" element (schedule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Source" element (source)
         * Type: "String" (string)
         * Maximum length: 255
         */
        source: GlideElement;
        
        /**
         * "SSO Source" element (sso_source)
         * Type: "String" (string)
         * Maximum length: 128
         */
        sso_source: GlideElement;
        
        /**
         * "State / Province" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "Street" element (street)
         * Type: "Two Line Text Area" (multi_two_lines)
         * Maximum length: 255
         */
        street: GlideElement;
        
        /**
         * "Class" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         */
        sys_domain: $$GlideElement.sys_user_group;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Time format" element (time_format)
         * Type: "String" (string)
         * Maximum length: 40
         */
        time_format: GlideElement;
        
        /**
         * "Time sheet policy" element (time_sheet_policy)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        time_sheet_policy: $$GlideElement.time_sheet_policy;
        
        /**
         * "Time zone" element (time_zone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        time_zone: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "String" (string)
         * Maximum length: 60
         */
        title: GlideElement;
        
        /**
         * "User ID" element (user_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        user_name: GlideElement;
        
        /**
         * "Password" element (user_password)
         * Type: "Password (1 Way Encrypted)" (password)
         * Maximum length: 100
         */
        user_password: GlideElement;
        
        /**
         * "VIP" element (vip)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        vip: GlideElement;
        
        /**
         * "Web service access only" element (web_service_access_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        web_service_access_only: GlideElement;
        
        /**
         * "Zip / Postal code" element (zip)
         * Type: "String" (string)
         * Maximum length: 40
         */
        zip: GlideElement;
    }

    /**
     * "LDAP Server" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ldap_server_config extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Attributes" element (attributes)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        attributes: GlideElement;
        
        /**
         * "Authenticate" element (authenticate)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        authenticate: GlideElement;
        
        /**
         * "Connect timeout" element (connect_timeout)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "10"
         */
        connect_timeout: GlideElement;
        
        /**
         * "Login distinguished name" element (dn)
         * Type: "String" (string)
         * Maximum length: 100
         */
        dn: GlideElement;
        
        /**
         * "DN Field" element (dn_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        dn_field: GlideElement;
        
        /**
         * "Listen interval" element (listen_interval)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "5"
         */
        listen_interval: GlideElement;
        
        /**
         * "Listener" element (listener)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        listener: GlideElement;
        
        /**
         * "Map" element (map)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        map: $$GlideElement.sys_impex_map;
        
        /**
         * "MID Server" element (mid_server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Paging" element (paging)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        paging: GlideElement;
        
        /**
         * "Login password" element (password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        password: GlideElement;
        
        /**
         * "Starting search directory" element (rdn)
         * Type: "String" (string)
         * Maximum length: 100
         */
        rdn: GlideElement;
        
        /**
         * "Read timeout" element (read_timeout)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "30"
         */
        read_timeout: GlideElement;
        
        /**
         * "Server URL" element (server_url)
         * Type: "String" (string)
         * Maximum length: 1000
         * This is a read-only column.
         */
        server_url: GlideElement;
        
        /**
         * "SSL" element (ssl)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        ssl: GlideElement;
        
        /**
         * "System ID" element (system_id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        system_id: GlideElement;
        
        /**
         * "Vendor" element (vendor)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "active_directory"
         */
        vendor: GlideElement;
    }

    /**
     * "Import Export Map" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_impex_map extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Agent" element (agent)
         * Type: "String" (string)
         * Maximum length: 40
         */
        agent: GlideElement;
        
        /**
         * "Apply defaults" element (apply_defaults)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        apply_defaults: GlideElement;
        
        /**
         * "Coalesce" element (coalesce)
         * Type: "String" (string)
         * Maximum length: 40
         */
        coalesce: GlideElement;
        
        /**
         * "Condition script" element (condition_script)
         * Type: "String" (string)
         * Maximum length: 254
         */
        condition_script: GlideElement;
        
        /**
         * "Data option" element (data_option)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "insert_update"
         */
        data_option: GlideElement;
        
        /**
         * "Data source" element (data_source)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        data_source: $$GlideElement.sys_data_source;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 100
         */
        description: GlideElement;
        
        /**
         * "External names" element (external_names)
         * Type: "External Names" (external_names)
         * Maximum length: 4000
         */
        external_names: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        order: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.sys_impex_map;
        
        /**
         * "Script" element (script)
         * Type: "Script" (script)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "data_source"
         */
        type: GlideElement;
    }

    /**
     * "Data Source" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_data_source extends sys_metadata {
        /**
         * "Batch Size" element (batch_size)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1000"
         */
        batch_size: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         */
        category: GlideElement;
        
        /**
         * "Connection override last success time" element (connection_override_last_success_time)
         * Type: "Name-Value Pairs" (simple_name_values)
         * Maximum length: 4000
         */
        connection_override_last_success_time: GlideElement;
        
        /**
         * "Connection timeout" element (connection_timeout)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        connection_timeout: GlideElement;
        
        /**
         * "Connection URL" element (connection_url)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        connection_url: GlideElement;
        
        /**
         * "Connection URL properties" element (connection_url_parameters)
         * Type: "String" (string)
         * Maximum length: 100
         */
        connection_url_parameters: GlideElement;
        
        /**
         * "CSV delimiter" element (csv_delimiter)
         * Type: "String" (string)
         * Maximum length: 40
         */
        csv_delimiter: GlideElement;
        
        /**
         * "Data in single column" element (data_in_single_column)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        data_in_single_column: GlideElement;
        
        /**
         * "Data Loader" element (data_loader)
         * Type: "Script" (script)
         * Maximum length: 8000
         * Default value: "(function loadData(import_set_table, data_source, import_log, last_success_import_time) {\n\n     // Add your code here to insert data to import_set_table\n\n})(import_set_table, data_source, import_log, last_success_import_time);"
         */
        data_loader: GlideElement;
        
        /**
         * "Database name" element (database_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        database_name: GlideElement;
        
        /**
         * "Database port" element (database_port)
         * Type: "String" (string)
         * Maximum length: 40
         */
        database_port: GlideElement;
        
        /**
         * "Discard Arrays" element (discard_arrays)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        discard_arrays: GlideElement;
        
        /**
         * "Expand node children" element (expand_node_children)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        expand_node_children: GlideElement;
        
        /**
         * "File path" element (file_path)
         * Type: "String" (string)
         * Maximum length: 100
         */
        file_path: GlideElement;
        
        /**
         * "File retrieval method" element (file_retrieval_method)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Attachment"
         */
        file_retrieval_method: GlideElement;
        
        /**
         * "Format" element (format)
         * Type: "String" (string)
         * Maximum length: 100
         * Default value: "CSV"
         */
        format: GlideElement;
        
        /**
         * "System keystore" element (glide_keystore)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        glide_keystore: GlideElement;
        
        /**
         * "Header row" element (header_row)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        header_row: GlideElement;
        
        /**
         * "Import set table label" element (import_set_table_label)
         * Type: "String" (string)
         * Maximum length: 40
         */
        import_set_table_label: GlideElement;
        
        /**
         * "Import set table name" element (import_set_table_name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        import_set_table_name: GlideElement;
        
        /**
         * "Instance name" element (instance_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        instance_name: GlideElement;
        
        /**
         * "Password" element (jdbc_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        jdbc_password: GlideElement;
        
        /**
         * "Server" element (jdbc_server)
         * Type: "String" (string)
         * Maximum length: 40
         */
        jdbc_server: GlideElement;
        
        /**
         * "Username" element (jdbc_user_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        jdbc_user_name: GlideElement;
        
        /**
         * "Path for each row" element (jpath_root_node)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        jpath_root_node: GlideElement;
        
        /**
         * "Last run database field" element (last_run_database_field)
         * Type: "String" (string)
         * Maximum length: 40
         */
        last_run_database_field: GlideElement;
        
        /**
         * "Last run datetime" element (last_run_datetime)
         * Type: "String" (string)
         * Maximum length: 100
         */
        last_run_datetime: GlideElement;
        
        /**
         * "Last success import time" element (last_success_import_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_success_import_time: GlideElementGlideObject;
        
        /**
         * "LDAP target" element (ldap_target)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        ldap_target: $$GlideElement.ldap_ou_config;
        
        /**
         * "LDAPProbe result set rows" element (ldapprobe_result_set_rows)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "200"
         */
        ldapprobe_result_set_rows: GlideElement;
        
        /**
         * "Limit" element (limit)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        limit: GlideElement;
        
        /**
         * "Maximum rows" element (maximum_rows)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        maximum_rows: GlideElement;
        
        /**
         * "Use MID Server" element (mid_server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        mid_server: $$GlideElement.ecc_agent;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Offset" element (offset)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        offset: GlideElement;
        
        /**
         * "Oracle port" element (oracle_port)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1521"
         */
        oracle_port: GlideElement;
        
        /**
         * "Oracle sid" element (oracle_sid)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "orcl"
         */
        oracle_sid: GlideElement;
        
        /**
         * "Parsing script" element (parsing_script)
         * Type: "Script" (script)
         * Maximum length: 8000
         * Default value: "// The input value can be accessed through the variables named \"line\", \"lineNumber\" and \"result\"\r// The function uses result variable to return parse result back. \r(function(line,lineNumber,result) {\r\t// add code here\r})(line,lineNumber,result);"
         */
        parsing_script: GlideElement;
        
        /**
         * "Properties" element (properties)
         * Type: "String" (string)
         * Maximum length: 100
         */
        properties: GlideElement;
        
        /**
         * "Query" element (query)
         * Type: "Radio Button Choice" (radio)
         * Maximum length: 40
         * Default value: "All Rows from Table"
         */
        query: GlideElement;
        
        /**
         * "Query timeout" element (query_timeout)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        query_timeout: GlideElement;
        
        /**
         * "Request action" element (request_action)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        request_action: $$GlideElement.sys_hub_action_type_definition;
        
        /**
         * "Scp authentication" element (scp_authentication)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Username and Password"
         */
        scp_authentication: GlideElement;
        
        /**
         * "Password" element (scp_password)
         * Type: "Password (2 Way Encrypted)" (password2)
         * Maximum length: 255
         */
        scp_password: GlideElement;
        
        /**
         * "Port" element (scp_port)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scp_port: GlideElement;
        
        /**
         * "Server" element (scp_server)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scp_server: GlideElement;
        
        /**
         * "Username" element (scp_user_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scp_user_name: GlideElement;
        
        /**
         * "Sheet number" element (sheet_number)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        sheet_number: GlideElement;
        
        /**
         * "SQL statement" element (sql_statement)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        sql_statement: GlideElement;
        
        /**
         * "Ssh keyfile path" element (ssh_keyfile_path)
         * Type: "String" (string)
         * Maximum length: 40
         */
        ssh_keyfile_path: GlideElement;
        
        /**
         * "Support pagination" element (support_pagination)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        support_pagination: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        table_name: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "File"
         */
        type: GlideElement;
        
        /**
         * "Use Batch Import" element (use_batch_import)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        use_batch_import: GlideElement;
        
        /**
         * "Use integrated authentication" element (use_integrated_authentication)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        use_integrated_authentication: GlideElement;
        
        /**
         * "Use last run datetime" element (use_last_run_datetime)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        use_last_run_datetime: GlideElement;
        
        /**
         * "XPath for each row" element (xpath_root_node)
         * Type: "String" (string)
         * Maximum length: 100
         */
        xpath_root_node: GlideElement;
        
        /**
         * "Zipped" element (zipped)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        zipped: GlideElement;
    }

    /**
     * "Action Type Base" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_hub_action_type_base extends sys_metadata {
        /**
         * "Accessible From" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "public"
         * This is column is mandatory.
         */
        access: GlideElement;
        
        /**
         * "ACLs" element (acls)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        acls: GlideElementGlideObject;
        
        /**
         * "Action Status" element (action_status)
         * Type: "String" (string)
         * Maximum length: 1024
         */
        action_status: GlideElement;
        
        /**
         * "Action Template" element (action_template)
         * Type: "String" (string)
         * Maximum length: 255
         */
        action_template: GlideElement;
        
        /**
         * "Annotation" element (annotation)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 250
         */
        annotation: GlideElement;
        
        /**
         * "Callable by Client API" element (callable_by_client_api)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        callable_by_client_api: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        category: $$GlideElement.sys_hub_category;
        
        /**
         * "Copied from" element (copied_from)
         * Type: "String" (string)
         * Maximum length: 32
         */
        copied_from: GlideElement;
        
        /**
         * "Copied from name" element (copied_from_name)
         * Type: "String" (string)
         * Maximum length: 32
         */
        copied_from_name: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Internal name" element (internal_name)
         * Type: "String" (string)
         * Maximum length: 255
         */
        internal_name: GlideElement;
        
        /**
         * "Label Cache" element (label_cache)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        label_cache: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Natural Language Title" element (natlang)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        natlang: GlideElement;
        
        /**
         * "Outputs" element (outputs)
         * Type: "Glide Var" (glide_var)
         * Maximum length: 32
         */
        outputs: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_hub_action_type_base;
        
        /**
         * "System level" element (system_level)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        system_level: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 255
         */
        type: GlideElement;
    }

    /**
     * "Action Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_hub_action_type_definition extends sys_hub_action_type_base {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Compiler build" element (compiler_build)
         * Type: "String" (string)
         * Maximum length: 255
         */
        compiler_build: GlideElement;
        
        /**
         * "Ih action" element (ih_action)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        ih_action: GlideElement;
        
        /**
         * "Latest snapshot" element (latest_snapshot)
         * Type: "String" (string)
         * Maximum length: 32
         */
        latest_snapshot: GlideElement;
        
        /**
         * "Main snapshot" element (master_snapshot)
         * Type: "String" (string)
         * Maximum length: 32
         */
        master_snapshot: GlideElement;
        
        /**
         * "Pre-Compiled" element (pre_compiled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        pre_compiled: GlideElement;
        
        /**
         * "Status" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "draft"
         * This is column is mandatory.
         */
        state: GlideElement;
    }

    /**
     * "LDAP OU Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ldap_ou_config extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Default values" element (default_values)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_values: $$GlideElement.sys_template;
        
        /**
         * "Filter" element (filter)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        filter: GlideElement;
        
        /**
         * "Map" element (map)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        map: $$GlideElement.sys_impex_map;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "RDN" element (ou)
         * Type: "String" (string)
         * Maximum length: 100
         */
        ou: GlideElement;
        
        /**
         * "Query field" element (query_field)
         * Type: "String" (string)
         * Maximum length: 40
         */
        query_field: GlideElement;
        
        /**
         * "Server" element (server)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        server: $$GlideElement.ldap_server_config;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * Default value: "sys_user"
         */
        table: GlideElement;
    }

    /**
     * "Menu List" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_perspective extends sys_metadata {
        /**
         * "Application" element (application)
         * Type: "String" (string)
         * Maximum length: 40
         */
        application: GlideElement;
        
        /**
         * "Applications" element (applications)
         * Type: "String" (string)
         * Maximum length: 40
         * This column is an array column.
         */
        applications: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "String" (string)
         * Maximum length: 40
         * This column is an array column.
         */
        roles: GlideElement;
    }

    /**
     * "Building" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmn_building extends IBaseRecord {
        /**
         * "Contact" element (contact)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        contact: $$GlideElement.sys_user;
        
        /**
         * "Floors" element (floors)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        floors: GlideElement;
        
        /**
         * "Location" element (location)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Notes" element (notes)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        notes: GlideElement;
    }

    /**
     * "Role" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user_role extends sys_metadata {
        /**
         * "Assignable by" element (assignable_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        assignable_by: $$GlideElement.sys_user_role;
        
        /**
         * "Can delegate" element (can_delegate)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        can_delegate: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Elevated privilege" element (elevated_privilege)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        elevated_privilege: GlideElement;
        
        /**
         * "Grantable" element (grantable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        grantable: GlideElement;
        
        /**
         * "Includes roles" element (includes_roles)
         * Type: "String" (string)
         * Maximum length: 40
         * This column is an array column.
         */
        includes_roles: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Requires Subscription" element (requires_subscription)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "-1"
         */
        requires_subscription: GlideElement;
        
        /**
         * "Application Administrator" element (scoped_admin)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        scoped_admin: GlideElement;
        
        /**
         * "Suffix" element (suffix)
         * Type: "String" (string)
         * Maximum length: 100
         */
        suffix: GlideElement;
    }

    /**
     * "Group" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user_group extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Average Daily FTE Hours/Hours Per Person Day" element (average_daily_fte)
         * Type: "Decimal" (decimal)
         * Maximum length: 20
         */
        average_daily_fte: GlideElement;
        
        /**
         * "Cost center" element (cost_center)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cost_center: $$GlideElement.cmn_cost_center;
        
        /**
         * "Default assignee" element (default_assignee)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_assignee: $$GlideElement.sys_user;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Group email" element (email)
         * Type: "Email" (email)
         * Maximum length: 100
         */
        email: GlideElement;
        
        /**
         * "Exclude manager" element (exclude_manager)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        exclude_manager: GlideElement;
        
        /**
         * "Hourly rate" element (hourly_rate)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         */
        hourly_rate: GlideElement;
        
        /**
         * "Include members" element (include_members)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        include_members: GlideElement;
        
        /**
         * "Manager" element (manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        manager: $$GlideElement.sys_user;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.sys_user_group;
        
        /**
         * "Points" element (points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        points: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 100
         * This column is an array column.
         */
        roles: GlideElement;
        
        /**
         * "Source" element (source)
         * Type: "String" (string)
         * Maximum length: 255
         */
        source: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        type: GlideElementGlideObject;
    }

    /**
     * "Group Member" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user_grmember extends IBaseRecord {
        /**
         * "Group" element (group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Average points per sprint" element (points)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        points: GlideElement;
        
        /**
         * "Scrum role" element (scrum_role)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scrum_role: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Number" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_number extends sys_metadata {
        /**
         * "Table" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 80
         */
        category: $$GlideElement.sys_db_object;
        
        /**
         * "Number of digits" element (maximum_digits)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "7"
         */
        maximum_digits: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1000"
         */
        number: GlideElement;
        
        /**
         * "Prefix" element (prefix)
         * Type: "String" (string)
         * Maximum length: 40
         */
        prefix: GlideElement;
    }

    /**
     * "Table" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_db_object extends sys_metadata {
        /**
         * "Accessible from" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "public"
         */
        access: GlideElement;
        
        /**
         * "Allow UI actions" element (actions_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        actions_access: GlideElement;
        
        /**
         * "Allow new fields" element (alter_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        alter_access: GlideElement;
        
        /**
         * "Caller Access" element (caller_access)
         * Type: "String" (string)
         * Maximum length: 40
         */
        caller_access: GlideElement;
        
        /**
         * "Allow client scripts" element (client_scripts_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        client_scripts_access: GlideElement;
        
        /**
         * "Allow configuration" element (configuration_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        configuration_access: GlideElement;
        
        /**
         * "Can create" element (create_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        create_access: GlideElement;
        
        /**
         * "Create access controls" element (create_access_controls)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        create_access_controls: GlideElement;
        
        /**
         * "Can delete" element (delete_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        delete_access: GlideElement;
        
        /**
         * "Extension model" element (extension_model)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        extension_model: GlideElement;
        
        /**
         * "Extensible" element (is_extendable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        is_extendable: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "Documentation Field" (documentation_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Live feed" element (live_feed_enabled)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        live_feed_enabled: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Auto number" element (number_ref)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        number_ref: $$GlideElement.sys_number;
        
        /**
         * "Provider class" element (provider_class)
         * Type: "String" (string)
         * Maximum length: 100
         */
        provider_class: GlideElement;
        
        /**
         * "Can read" element (read_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        read_access: GlideElement;
        
        /**
         * "Remote Table" element (scriptable_table)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        scriptable_table: GlideElement;
        
        /**
         * "Extends table" element (super_class)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        super_class: $$GlideElement.sys_db_object;
        
        /**
         * "Sys class code" element (sys_class_code)
         * Type: null
         * Maximum length: 40
         */
        sys_class_code: GlideElement;
        
        /**
         * "Sys class path" element (sys_class_path)
         * Type: "System Class path" (sys_class_path)
         * Maximum length: 255
         */
        sys_class_path: GlideElement;
        
        /**
         * "Can update" element (update_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        update_access: GlideElement;
        
        /**
         * "User role" element (user_role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user_role: $$GlideElement.sys_user_role;
        
        /**
         * "Allow access to this table via web services" element (ws_access)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        ws_access: GlideElement;
    }

    /**
     * "Dictionary Entry" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_dictionary extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Array" element (array)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        array: GlideElement;
        
        /**
         * "Array denormalized" element (array_denormalized)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        array_denormalized: GlideElement;
        
        /**
         * "Attributes" element (attributes)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        attributes: GlideElement;
        
        /**
         * "Audit" element (audit)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        audit: GlideElement;
        
        /**
         * "Calculation" element (calculation)
         * Type: "Script" (script)
         * Maximum length: 8000
         * Default value: "(function calculatedFieldValue(current) {\n\n\t// Add your code here\n\treturn '';  // return the calculated value\n\n})(current);"
         */
        calculation: GlideElement;
        
        /**
         * "Choice" element (choice)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        choice: GlideElement;
        
        /**
         * "Choice field" element (choice_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        choice_field: GlideElement;
        
        /**
         * "Choice table" element (choice_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        choice_table: GlideElement;
        
        /**
         * "Column label" element (column_label)
         * Type: "Documentation Field" (documentation_field)
         * Maximum length: 80
         */
        column_label: GlideElement;
        
        /**
         * "Comments" element (comments)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        comments: GlideElement;
        
        /**
         * "Create roles" element (create_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        create_roles: GlideElement;
        
        /**
         * "Default value" element (default_value)
         * Type: "String" (string)
         * Maximum length: 512
         */
        default_value: GlideElement;
        
        /**
         * "Defaultsort" element (defaultsort)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        defaultsort: GlideElement;
        
        /**
         * "Delete roles" element (delete_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        delete_roles: GlideElement;
        
        /**
         * "Dependent" element (dependent)
         * Type: "String" (string)
         * Maximum length: 80
         */
        dependent: GlideElement;
        
        /**
         * "Dependent on field" element (dependent_on_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        dependent_on_field: GlideElement;
        
        /**
         * "Display" element (display)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        display: GlideElement;
        
        /**
         * "Dynamic creation" element (dynamic_creation)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        dynamic_creation: GlideElement;
        
        /**
         * "Dynamic creation script" element (dynamic_creation_script)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        dynamic_creation_script: GlideElement;
        
        /**
         * "Dynamic default value" element (dynamic_default_value)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dynamic_default_value: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Dynamic ref qual" element (dynamic_ref_qual)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dynamic_ref_qual: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Column name" element (element)
         * Type: "String" (string)
         * Maximum length: 80
         */
        element: GlideElement;
        
        /**
         * "Element reference" element (element_reference)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        element_reference: GlideElement;
        
        /**
         * "Foreign database" element (foreign_database)
         * Type: "String" (string)
         * Maximum length: 40
         */
        foreign_database: GlideElement;
        
        /**
         * "Formula" element (formula)
         * Type: "Expression" (expression)
         * Maximum length: 4000
         */
        formula: GlideElement;
        
        /**
         * "Function definition" element (function_definition)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        function_definition: GlideElement;
        
        /**
         * "Function field" element (function_field)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        function_field: GlideElement;
        
        /**
         * "Type" element (internal_type)
         * Type: "Reference" (reference)
         * Maximum length: 40
         */
        internal_type: $$GlideElement.sys_glide_object;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        mandatory: GlideElement;
        
        /**
         * "Max length" element (max_length)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        max_length: GlideElement;
        
        /**
         * "Table" element (name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Next element" element (next_element)
         * Type: "String" (string)
         * Maximum length: 80
         * This is a read-only column.
         */
        next_element: GlideElement;
        
        /**
         * "Primary" element (primary)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        primary: GlideElement;
        
        /**
         * "Read only" element (read_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        read_only: GlideElement;
        
        /**
         * "Read roles" element (read_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        read_roles: GlideElement;
        
        /**
         * "Reference" element (reference)
         * Type: "Reference" (reference)
         * Maximum length: 80
         */
        reference: $$GlideElement.sys_db_object;
        
        /**
         * "Reference cascade rule" element (reference_cascade_rule)
         * Type: "String" (string)
         * Maximum length: 20
         */
        reference_cascade_rule: GlideElement;
        
        /**
         * "Reference floats" element (reference_floats)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        reference_floats: GlideElement;
        
        /**
         * "Reference key" element (reference_key)
         * Type: "String" (string)
         * Maximum length: 40
         */
        reference_key: GlideElement;
        
        /**
         * "Reference qual" element (reference_qual)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        reference_qual: GlideElement;
        
        /**
         * "Reference qual condition" element (reference_qual_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        reference_qual_condition: GlideElement;
        
        /**
         * "Reference type" element (reference_type)
         * Type: "String" (string)
         * Maximum length: 10
         */
        reference_type: GlideElement;
        
        /**
         * "Sizeclass" element (sizeclass)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        sizeclass: GlideElement;
        
        /**
         * "Spell check" element (spell_check)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        spell_check: GlideElement;
        
        /**
         * "Staged" element (staged)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        staged: GlideElement;
        
        /**
         * "Table reference" element (table_reference)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        table_reference: GlideElement;
        
        /**
         * "Text index" element (text_index)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        text_index: GlideElement;
        
        /**
         * "Unique" element (unique)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        unique: GlideElement;
        
        /**
         * "Use dependent field" element (use_dependent_field)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        use_dependent_field: GlideElement;
        
        /**
         * "Use dynamic default" element (use_dynamic_default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_dynamic_default: GlideElement;
        
        /**
         * "Use reference qualifier" element (use_reference_qualifier)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "simple"
         */
        use_reference_qualifier: GlideElement;
        
        /**
         * "Calculated" element (virtual)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        virtual: GlideElement;
        
        /**
         * "Calculation Type" element (virtual_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "script"
         */
        virtual_type: GlideElement;
        
        /**
         * "Widget" element (widget)
         * Type: "String" (string)
         * Maximum length: 40
         */
        widget: GlideElement;
        
        /**
         * "Write roles" element (write_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        write_roles: GlideElement;
        
        /**
         * "XML view" element (xml_view)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        xml_view: GlideElement;
    }

    /**
     * "Dynamic Filter Options" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_filter_option_dynamic extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Available for default" element (available_for_default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        available_for_default: GlideElement;
        
        /**
         * "Available for filter" element (available_for_filter)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        available_for_filter: GlideElement;
        
        /**
         * "Available for ref qual" element (available_for_ref_qual)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        available_for_ref_qual: GlideElement;
        
        /**
         * "Field type" element (field_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        field_type: $$GlideElement.sys_glide_object;
        
        /**
         * "Schedule" element (filter_by_schedule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        filter_by_schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 40
         */
        label: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        roles: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Condition String" (condition_string)
         * Maximum length: 255
         */
        script: GlideElement;
        
        /**
         * "Reference script" element (script_reference_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        script_reference_id: GlideElementReference;
        
        /**
         * "Reference table" element (script_reference_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        script_reference_table: GlideElement;
        
        /**
         * "Referenced table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Table containing filter" element (table_containing_filter)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table_containing_filter: GlideElement;
    }

    /**
     * "Field class" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_glide_object extends sys_metadata {
        /**
         * "Attributes" element (attributes)
         * Type: "String" (string)
         * Maximum length: 255
         */
        attributes: GlideElement;
        
        /**
         * "Class name" element (class_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        class_name: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        label: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Length" element (scalar_length)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scalar_length: GlideElement;
        
        /**
         * "Extends" element (scalar_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "string"
         */
        scalar_type: GlideElement;
        
        /**
         * "Use original value" element (use_original_value)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        use_original_value: GlideElement;
        
        /**
         * "Visible" element (visible)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        visible: GlideElement;
    }

    /**
     * "User Role" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user_has_role extends IBaseRecord {
        /**
         * "Granted by" element (granted_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "not-applicable"
         */
        granted_by: $$GlideElement.sys_user_group;
        
        /**
         * "Included in role" element (included_in_role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        included_in_role: $$GlideElement.sys_user_has_role;
        
        /**
         * "Included in role instance" element (included_in_role_instance)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        included_in_role_instance: $$GlideElement.sys_user_role_contains;
        
        /**
         * "Inheritance Count" element (inh_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        inh_count: GlideElement;
        
        /**
         * "Inheritance Map" element (inh_map)
         * Type: "UI Action List" (glide_action_list)
         * Maximum length: 255
         * This is a read-only column.
         */
        inh_map: GlideElementGlideObject;
        
        /**
         * "Inherited" element (inherited)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        inherited: GlideElement;
        
        /**
         * "Role" element (role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        role: $$GlideElement.sys_user_role;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "active"
         */
        state: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Contained Role" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_user_role_contains extends sys_metadata {
        /**
         * "Contains" element (contains)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        contains: $$GlideElement.sys_user_role;
        
        /**
         * "Role" element (role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        role: $$GlideElement.sys_user_role;
    }

    /**
     * "Group Role" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_group_has_role extends IBaseRecord {
        /**
         * "Granted by" element (granted_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        granted_by: $$GlideElement.sys_user_group;
        
        /**
         * "Group" element (group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Inherits" element (inherits)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        inherits: GlideElement;
        
        /**
         * "Role" element (role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        role: $$GlideElement.sys_user_role;
    }

    /**
     * "Choice" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_choice extends IBaseRecord {
        /**
         * "Dependent value" element (dependent_value)
         * Type: "String" (string)
         * Maximum length: 100
         */
        dependent_value: GlideElement;
        
        /**
         * "Element" element (element)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        element: GlideElement;
        
        /**
         * "Hint" element (hint)
         * Type: "String" (string)
         * Maximum length: 255
         */
        hint: GlideElement;
        
        /**
         * "Inactive" element (inactive)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        inactive: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Language" element (language)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "en"
         * This is column is mandatory.
         */
        language: GlideElement;
        
        /**
         * "Table" element (name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Sequence" element (sequence)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        sequence: GlideElement;
        
        /**
         * "Synonyms" element (synonyms)
         * Type: "String" (string)
         * Maximum length: 4001
         */
        synonyms: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 4000
         * This is column is mandatory.
         */
        value: GlideElement;
    }

    /**
     * "Choice Set" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_choice_set extends sys_metadata {
        /**
         * "Element" element (element)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        element: GlideElement;
        
        /**
         * "Table" element (name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
    }

    /**
     * "Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface question extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Variable attributes" element (attributes)
         * Type: "String" (string)
         * Maximum length: 255
         */
        attributes: GlideElement;
        
        /**
         * "Choice direction" element (choice_direction)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "down"
         */
        choice_direction: GlideElement;
        
        /**
         * "Choice field" element (choice_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        choice_field: GlideElement;
        
        /**
         * "Choice table" element (choice_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        choice_table: GlideElement;
        
        /**
         * "Create roles" element (create_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        create_roles: GlideElement;
        
        /**
         * "Default HTML" element (default_html_value)
         * Type: "HTML" (html)
         * Maximum length: 65536
         */
        default_html_value: GlideElement;
        
        /**
         * "Default value" element (default_value)
         * Type: "String" (string)
         * Maximum length: 512
         */
        default_value: GlideElement;
        
        /**
         * "Delete roles" element (delete_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        delete_roles: GlideElement;
        
        /**
         * "Display title" element (display_title)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        display_title: GlideElement;
        
        /**
         * "Do not select the first choice" element (do_not_select_first)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        do_not_select_first: GlideElement;
        
        /**
         * "Dynamic default value" element (dynamic_default_value)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dynamic_default_value: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Dynamic reference qualifier" element (dynamic_ref_qual)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dynamic_ref_qual: $$GlideElement.sys_filter_option_dynamic;
        
        /**
         * "Example Text" element (example_text)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 255
         */
        example_text: GlideElement;
        
        /**
         * "Field" element (field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        field: GlideElement;
        
        /**
         * "Help tag" element (help_tag)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 100
         * Default value: "More information"
         */
        help_tag: GlideElement;
        
        /**
         * "Help text" element (help_text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        help_text: GlideElement;
        
        /**
         * "Hidden" element (hidden)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        hidden: GlideElement;
        
        /**
         * "Include none" element (include_none)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        include_none: GlideElement;
        
        /**
         * "Layout" element (layout)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "normal"
         */
        layout: GlideElement;
        
        /**
         * "List table" element (list_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        list_table: GlideElement;
        
        /**
         * "Lookup label field(s)" element (lookup_label)
         * Type: "String" (string)
         * Maximum length: 80
         */
        lookup_label: GlideElement;
        
        /**
         * "Lookup price field" element (lookup_price)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        lookup_price: GlideElement;
        
        /**
         * "Lookup from table" element (lookup_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        lookup_table: GlideElement;
        
        /**
         * "Unique values only" element (lookup_unique)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        lookup_unique: GlideElement;
        
        /**
         * "Lookup value field" element (lookup_value)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        lookup_value: GlideElement;
        
        /**
         * "Macro" element (macro)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        mandatory: GlideElement;
        
        /**
         * "Map to field" element (map_to_field)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        map_to_field: GlideElement;
        
        /**
         * "Use confirmation" element (mask_use_confirmation)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        mask_use_confirmation: GlideElement;
        
        /**
         * "Use encryption" element (mask_use_encryption)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        mask_use_encryption: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Price if checked" element (price_if_checked)
         * Type: "Price" (price)
         * Maximum length: 20
         * Default value: "0.00"
         */
        price_if_checked: GlideElement;
        
        /**
         * "Pricing implications" element (pricing_implications)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        pricing_implications: GlideElement;
        
        /**
         * "Question" element (question_text)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 255
         */
        question_text: GlideElement;
        
        /**
         * "Read only" element (read_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        read_only: GlideElement;
        
        /**
         * "Read roles" element (read_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        read_roles: GlideElement;
        
        /**
         * "Lookup recurring price field" element (rec_lookup_price)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        rec_lookup_price: GlideElement;
        
        /**
         * "Recurring price if checked" element (rec_price_if_checked)
         * Type: "Price" (price)
         * Maximum length: 20
         * Default value: "0.00"
         */
        rec_price_if_checked: GlideElement;
        
        /**
         * "Record" element (record)
         * Type: "String" (string)
         * Maximum length: 40
         */
        record: GlideElement;
        
        /**
         * "Record producer table" element (record_producer_table)
         * Type: "String" (string)
         * Maximum length: 80
         */
        record_producer_table: GlideElement;
        
        /**
         * "Reference" element (reference)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        reference: GlideElement;
        
        /**
         * "Reference qualifier" element (reference_qual)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        reference_qual: GlideElement;
        
        /**
         * "Reference qualifier condition" element (reference_qual_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        reference_qual_condition: GlideElement;
        
        /**
         * "Scale max" element (scale_max)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "5"
         */
        scale_max: GlideElement;
        
        /**
         * "Scale min" element (scale_min)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        scale_min: GlideElement;
        
        /**
         * "Show help" element (show_help)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        show_help: GlideElement;
        
        /**
         * "Always Expanded" element (show_help_on_load)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        show_help_on_load: GlideElement;
        
        /**
         * "Summary macro" element (summary_macro)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        summary_macro: $$GlideElement.sys_ui_macro;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Tooltip" element (tooltip)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        tooltip: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "6"
         */
        type: GlideElement;
        
        /**
         * "UI page" element (ui_page)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        ui_page: $$GlideElement.sys_ui_page;
        
        /**
         * "Use dynamic default" element (use_dynamic_default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        use_dynamic_default: GlideElement;
        
        /**
         * "Use reference qualifier" element (use_reference_qualifier)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "simple"
         */
        use_reference_qualifier: GlideElement;
        
        /**
         * "Variable name" element (variable_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        variable_name: GlideElement;
        
        /**
         * "Write roles" element (write_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        write_roles: GlideElement;
    }

    /**
     * "UI Page" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_page extends sys_metadata {
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "general"
         */
        category: GlideElement;
        
        /**
         * "Client script" element (client_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        client_script: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Direct" element (direct)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        direct: GlideElement;
        
        /**
         * "Endpoint" element (endpoint)
         * Type: "URL" (url)
         * Maximum length: 200
         * This is a read-only column.
         */
        endpoint: GlideElement;
        
        /**
         * "HTML" element (html)
         * Type: "XML" (xml)
         * Maximum length: 65000
         * Default value: "<?xml version=\"1.0\" encoding=\"utf-8\" ?>\r\n<j:jelly trim=\"false\" xmlns:j=\"jelly:core\" xmlns:g=\"glide\" xmlns:j2=\"null\" xmlns:g2=\"null\">\r\n\r\n</j:jelly>"
         */
        html: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 250
         */
        name: GlideElement;
        
        /**
         * "Processing script" element (processing_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        processing_script: GlideElement;
    }

    /**
     * "Variable" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface item_option_new extends question {
        /**
         * "Catalog item" element (cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        category: $$GlideElement.item_option_category;
        
        /**
         * "Delivery plan" element (delivery_plan)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        delivery_plan: $$GlideElement.sc_cat_item_delivery_plan;
        
        /**
         * "Description" element (description)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        description: GlideElement;
        
        /**
         * "Dot walk path" element (dynamic_value_dot_walk_path)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        dynamic_value_dot_walk_path: GlideElement;
        
        /**
         * "Dependent question" element (dynamic_value_field)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        dynamic_value_field: $$GlideElement.item_option_new;
        
        /**
         * "Enable also request for" element (enable_also_request_for)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        enable_also_request_for: GlideElement;
        
        /**
         * "Global" element (global)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        global: GlideElement;
        
        /**
         * "Instructions" element (instructions)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        instructions: GlideElement;
        
        /**
         * "Macroponent" element (macroponent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Post insert script" element (post_insert_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        post_insert_script: GlideElement;
        
        /**
         * "Published option" element (published_ref)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        published_ref: $$GlideElement.item_option_new;
        
        /**
         * "Read Script" element (read_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        read_script: GlideElement;
        
        /**
         * "Rich Text" element (rich_text)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        rich_text: GlideElement;
        
        /**
         * "Roles to use also request for" element (roles_to_use_also_request_for)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        roles_to_use_also_request_for: GlideElement;
        
        /**
         * "Save Script" element (save_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        save_script: GlideElement;
        
        /**
         * "Widget" element (sp_widget)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sp_widget: $$GlideElement.sp_widget;
        
        /**
         * "Unique" element (unique)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        unique: GlideElement;
        
        /**
         * "Validation Regex" element (validate_regex)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        validate_regex: $$GlideElement.question_regex;
        
        /**
         * "Variable set" element (variable_set)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        variable_set: $$GlideElement.item_option_new_set;
        
        /**
         * "Variable Width" element (variable_width)
         * Type: "String" (string)
         * Maximum length: 40
         */
        variable_width: GlideElement;
        
        /**
         * "Visibility" element (visibility)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "1"
         */
        visibility: GlideElement;
        
        /**
         * "Visible on Bundles" element (visible_bundle)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        visible_bundle: GlideElement;
        
        /**
         * "Visible on Guides" element (visible_guide)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        visible_guide: GlideElement;
        
        /**
         * "Visible Elsewhere" element (visible_standalone)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        visible_standalone: GlideElement;
        
        /**
         * "Visible on Summaries" element (visible_summary)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        visible_summary: GlideElement;
    }

    /**
     * "UX Macroponent Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_macroponent_type extends sys_metadata {
        /**
         * "API Name" element (api_name)
         * Type: "String" (string)
         * Maximum length: 273
         */
        api_name: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
    }

    /**
     * "UX Macroponent Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_macroponent extends sys_metadata {
        /**
         * "Associated types" element (associated_types)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        associated_types: GlideElementGlideObject;
        
        /**
         * "Category" element (category)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "component"
         */
        category: GlideElement;
        
        /**
         * "Component dependencies" element (component_dependencies)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        component_dependencies: GlideElementGlideObject;
        
        /**
         * "Composition" element (composition)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        composition: GlideElement;
        
        /**
         * "Action relay models" element (da_relay_models)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        da_relay_models: GlideElementGlideObject;
        
        /**
         * "Data" element (data)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        data: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Dispatched Events" element (dispatched_events)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        dispatched_events: GlideElementGlideObject;
        
        /**
         * "Events" element (events)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        events: GlideElement;
        
        /**
         * "External Controller Dependencies" element (ext_controller_dep)
         * Type: "JSON" (json)
         * Maximum length: 8000
         */
        ext_controller_dep: GlideElement;
        
        /**
         * "Extends" element (extends)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        extends: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Extension Point" element (extension_point)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        extension_point: $$GlideElement.sys_ux_extension_point;
        
        /**
         * "Handled Events" element (handled_events)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        handled_events: GlideElementGlideObject;
        
        /**
         * "Interactions" element (interactions)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        interactions: GlideElement;
        
        /**
         * "Interfaces" element (interfaces)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        interfaces: GlideElementGlideObject;
        
        /**
         * "Internal Event Mappings" element (internal_event_mappings)
         * Type: "JSON" (json)
         * Maximum length: 8000
         */
        internal_event_mappings: GlideElement;
        
        /**
         * "Layout model" element (layout)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        layout: GlideElement;
        
        /**
         * "Macroponent dependencies" element (macroponent_dependencies)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        macroponent_dependencies: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Output Prop Mapping" element (output_prop_mapping)
         * Type: "JSON" (json)
         * Maximum length: 8000
         */
        output_prop_mapping: GlideElement;
        
        /**
         * "Properties" element (props)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        props: GlideElement;
        
        /**
         * "Required translations" element (required_translations)
         * Type: "JSON Translations" (json_translations)
         * Maximum length: 8000
         */
        required_translations: GlideElement;
        
        /**
         * "Root element definition" element (root_component)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        root_component: $$GlideElement.sys_ux_lib_component;
        
        /**
         * "Root element configuration" element (root_component_config)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        root_component_config: GlideElement;
        
        /**
         * "Root element metadata" element (root_component_definition)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        root_component_definition: GlideElement;
        
        /**
         * "Macroponent schema version" element (schema_version)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        schema_version: GlideElement;
        
        /**
         * "State" element (state_properties)
         * Type: "JSON" (json)
         * Maximum length: 8000
         */
        state_properties: GlideElement;
    }

    /**
     * "UX Extension Point" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_extension_point extends sys_metadata {
        /**
         * "App shell" element (app_shell)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "76a83a645b122010b913030a1d81c780"
         */
        app_shell: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Component" element (component)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        component: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Controller" element (controller)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        controller: $$GlideElement.sys_ux_controller;
        
        /**
         * "Controller Dependencies" element (controller_dependencies)
         * Type: "JSON" (json)
         * Maximum length: 8000
         */
        controller_dependencies: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        type: GlideElement;
    }

    /**
     * "UX Controller" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_controller extends sys_metadata {
        /**
         * "Controller config guidance" element (controller_config_guidance)
         * Type: "JSON" (json)
         * Maximum length: 4000
         * Default value: "{ }"
         */
        controller_config_guidance: GlideElement;
        
        /**
         * "Definition" element (controller_macroponent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        controller_macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
    }

    /**
     * "UX Component Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_lib_component extends sys_metadata {
        /**
         * "Default Available Child Slots" element (default_children)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_children: $$GlideElement.sys_ux_children;
        
        /**
         * "Default Layout" element (default_layout)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_layout: $$GlideElement.sys_ux_children_layout;
        
        /**
         * "Deprecated" element (deprecated)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        deprecated: GlideElement;
        
        /**
         * "Inner Components" element (inner_components)
         * Type: "List" (glide_list)
         * Maximum length: 8000
         */
        inner_components: GlideElementGlideObject;
        
        /**
         * "Allow Overrides" element (overrides)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        overrides: GlideElement;
        
        /**
         * "Required system properties" element (required_sys_props)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        required_sys_props: GlideElement;
        
        /**
         * "Required translated message keys" element (required_translation_keys)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        required_translation_keys: GlideElement;
        
        /**
         * "Required user preferences" element (required_user_prefs)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        required_user_prefs: GlideElement;
        
        /**
         * "Source script" element (source_script)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        source_script: $$GlideElement.sys_ux_lib_source_script;
        
        /**
         * "Source script name" element (source_script_name)
         * Type: "String" (string)
         * Maximum length: 255
         */
        source_script_name: GlideElement;
        
        /**
         * "Tag" element (tag)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        tag: GlideElement;
    }

    /**
     * "UX Source Code" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_lib_source_script extends sys_metadata {
        /**
         * "Config Option" element (config_option)
         * Type: "String" (string)
         * Maximum length: 40
         */
        config_option: GlideElement;
        
        /**
         * "UXF engine version" element (engine)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "6"
         * This is column is mandatory.
         */
        engine: GlideElement;
        
        /**
         * "External libraries" element (externals)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        externals: GlideElement;
        
        /**
         * "Inner components" element (inner_components)
         * Type: "List" (glide_list)
         * Maximum length: 8000
         */
        inner_components: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Script link" element (script_link)
         * Type: "URL" (url)
         * Maximum length: 1024
         */
        script_link: GlideElement;
        
        /**
         * "Source type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "script"
         * This is column is mandatory.
         */
        type: GlideElement;
    }

    /**
     * "UX Children Layout" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_children_layout extends sys_metadata {
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Host" element (host)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        host: $$GlideElement.sys_ux_children;
        
        /**
         * "Model" element (model)
         * Type: "String" (string)
         * Maximum length: 65536
         */
        model: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "rowColumn"
         */
        type: GlideElement;
    }

    /**
     * "UX Children Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_children extends sys_metadata {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 40
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
    }

    /**
     * "Macroponent Priority" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ux_macroponent_priority extends sys_metadata {
        /**
         * "Composition Element ID" element (composition_element_id)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        composition_element_id: GlideElement;
        
        /**
         * "Macroponent" element (macroponent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        macroponent: $$GlideElement.sys_ux_macroponent;
        
        /**
         * "Priority Level" element (priority_level)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is column is mandatory.
         */
        priority_level: GlideElement;
    }

    /**
     * "Variable Category" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface item_option_category extends sys_metadata {
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "String" (string)
         * Maximum length: 40
         */
        order: GlideElement;
    }

    /**
     * "Variable Set" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface item_option_new_set extends sys_metadata {
        /**
         * "Create roles" element (create_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        create_roles: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Display title" element (display_title)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        display_title: GlideElement;
        
        /**
         * "Internal name" element (internal_name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        internal_name: GlideElement;
        
        /**
         * "Layout" element (layout)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "normal"
         */
        layout: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Read roles" element (read_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        read_roles: GlideElement;
        
        /**
         * "Variable Set attributes" element (set_attributes)
         * Type: "String" (string)
         * Maximum length: 255
         */
        set_attributes: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        title: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "one_to_one"
         * This is a read-only column.
         */
        type: GlideElement;
        
        /**
         * "Write roles" element (write_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        write_roles: GlideElement;
    }

    /**
     * "Flow catalog variable" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_flow_cat_variable extends item_option_new {
        /**
         * "Flow catalog model" element (flow_catalog_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        flow_catalog_model: $$GlideElement.sys_flow_cat_variable_model;
    }

    /**
     * "Workflow SC Variable" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface wf_variable extends item_option_new {
        /**
         * "Workflow" element (workflow)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        workflow: $$GlideElement.wf_workflow_version;
    }

    /**
     * "Producer Set" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface item_option_new_producer_set extends item_option_new_set {
        /**
         * "Parent reference field" element (parent_reference_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        parent_reference_field: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table_name: GlideElement;
    }

    /**
     * "Decision" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_decision_question extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Answer" element (answer)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        answer: GlideElementReference;
        
        /**
         * "Condition" element (condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        condition: GlideElement;
        
        /**
         * "Decision table" element (decision_table)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        decision_table: $$GlideElement.sys_decision;
        
        /**
         * "Default answer" element (default_answer)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        default_answer: GlideElement;
        
        /**
         * "Input table" element (input_table)
         * Type: "String" (string)
         * Maximum length: 250
         */
        input_table: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 250
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        order: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_decision_question;
    }

    /**
     * "Help Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface help_question extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Condition" element (condition)
         * Type: "Condition String" (condition_string)
         * Maximum length: 256
         */
        condition: GlideElement;
        
        /**
         * "Help content" element (content)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        content: $$GlideElement.help_content;
        
        /**
         * "Internal Name" element (internal_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        internal_name: GlideElement;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        mandatory: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Question" element (question)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 300
         * This is column is mandatory.
         */
        question: GlideElement;
        
        /**
         * "Short Description" element (short_description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 256
         */
        short_description: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.help_question;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "single_choice"
         */
        type: GlideElement;
        
        /**
         * "Variant" element (variant)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "radio"
         * This is column is mandatory.
         */
        variant: GlideElement;
    }

    /**
     * "Decision Table" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_decision extends sys_metadata {
        /**
         * "Accessible From" element (access)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "public"
         * This is column is mandatory.
         */
        access: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Answer table" element (answer_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        answer_table: GlideElement;
        
        /**
         * "Answer type" element (answer_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "reference"
         */
        answer_type: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 512
         */
        description: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 250
         */
        label: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 250
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Reference qualifier" element (reference_qualifier)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        reference_qualifier: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Sys overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_decision;
    }

    /**
     * "Help Content" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface help_content extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Configuration Types" element (configuration_types)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "custom"
         */
        configuration_types: GlideElement;
        
        /**
         * "Custom HTML" element (custom_html)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        custom_html: GlideElement;
        
        /**
         * "Default" element (default_content)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        default_content: GlideElement;
        
        /**
         * "Field Name" element (field_name)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        field_name: GlideElement;
        
        /**
         * "Filter" element (filter)
         * Type: "Conditions" (conditions)
         * Maximum length: 255
         */
        filter: GlideElement;
        
        /**
         * "Footer" element (footer)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        footer: GlideElement;
        
        /**
         * "Guidance Step" element (guidance_step)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        guidance_step: $$GlideElement.help_guidance_step;
        
        /**
         * "Provide Custom HTML" element (has_custom_html)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        has_custom_html: GlideElement;
        
        /**
         * "Provide Image Link" element (has_image_link)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        has_image_link: GlideElement;
        
        /**
         * "Image" element (image)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        image: GlideElement;
        
        /**
         * "Alternate Text" element (image_alt)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        image_alt: GlideElement;
        
        /**
         * "Image Link" element (image_link)
         * Type: "URL" (url)
         * Maximum length: 1024
         */
        image_link: GlideElement;
        
        /**
         * "Open In" element (open_in)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "new_tab"
         */
        open_in: GlideElement;
        
        /**
         * "Options" element (options)
         * Type: "JSON" (json)
         * Maximum length: 4000
         */
        options: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Records" element (records)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        records: GlideElementGlideObject;
        
        /**
         * "Related Content" element (related_content)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        related_content: GlideElementGlideObject;
        
        /**
         * "Resource ID" element (resource_id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        resource_id: GlideElement;
        
        /**
         * "Subtitle" element (subtitle)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        subtitle: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.help_content;
        
        /**
         * "Table Name" element (table_name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table_name: GlideElement;
        
        /**
         * "Text" element (text)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        text: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        title: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "text"
         */
        type: GlideElement;
        
        /**
         * "URL" element (url)
         * Type: "URL" (url)
         * Maximum length: 1024
         */
        url: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        version: GlideElement;
        
        /**
         * "Alternate Text" element (video_alt)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        video_alt: GlideElement;
        
        /**
         * "Video Link" element (video_link)
         * Type: "URL" (url)
         * Maximum length: 1024
         */
        video_link: GlideElement;
        
        /**
         * "View" element (view)
         * Type: "String" (string)
         * Maximum length: 40
         */
        view: GlideElement;
    }

    /**
     * "Help Guidance Step" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface help_guidance_step extends sys_metadata {
        /**
         * "Actions Label" element (actions_label)
         * Type: "Name-Value Pairs" (simple_name_values)
         * Maximum length: 4000
         * Default value: "{\"next\":\"Next\",\"prev\":\"Previous\",\"submit\":\"Submit\"}"
         */
        actions_label: GlideElement;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Allow Delegation" element (allow_delegation)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        allow_delegation: GlideElement;
        
        /**
         * "Callout Position" element (callout_position)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "default"
         */
        callout_position: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Guidance" element (guidance)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        guidance: $$GlideElement.help_guidance;
        
        /**
         * "Has decision" element (has_decision)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        has_decision: GlideElement;
        
        /**
         * "Layout" element (layout)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "text"
         * This is column is mandatory.
         */
        layout: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.help_guidance_step;
        
        /**
         * "Rich Description" element (rich_description)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        rich_description: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        roles: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Skippable" element (skippable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        skippable: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        status: GlideElement;
        
        /**
         * "Decision" element (sys_decision)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_decision: $$GlideElement.sys_decision;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.help_guidance_step;
        
        /**
         * "Target Element" element (target_element)
         * Type: "String" (string)
         * Maximum length: 255
         */
        target_element: GlideElement;
        
        /**
         * "Task Type" element (task_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "basic"
         */
        task_type: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "default"
         */
        type: GlideElement;
        
        /**
         * "Unlock By Decision Step" element (unlock_by_decision_step)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        unlock_by_decision_step: GlideElement;
    }

    /**
     * "Guidance" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface help_guidance extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Application Route" element (app_route)
         * Type: "String" (string)
         * Maximum length: 100
         */
        app_route: GlideElement;
        
        /**
         * "Auto launch order" element (auto_launch_order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        auto_launch_order: GlideElement;
        
        /**
         * "Checklist" element (checklist)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65536
         */
        checklist: GlideElement;
        
        /**
         * "Context" element (context)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        context: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Embedded Help Content" element (eh_content)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        eh_content: $$GlideElement.sys_embedded_help_content;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 10
         */
        order: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        roles: GlideElement;
        
        /**
         * "Route parameters" element (route_params)
         * Type: "JSON" (json)
         * Maximum length: 4000
         */
        route_params: GlideElement;
        
        /**
         * "ServiceNow Created" element (snc_created)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        snc_created: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "draft"
         */
        status: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.help_guidance;
        
        /**
         * "Topic id" element (topic_id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        topic_id: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "modal"
         * This is column is mandatory.
         */
        type: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        version: GlideElement;
    }

    /**
     * "Embedded Help" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_embedded_help_content extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 100
         */
        category: GlideElement;
        
        /**
         * "Content" element (content)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65000
         */
        content: GlideElement;
        
        /**
         * "Last sync" element (last_sync)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_sync: GlideElementGlideObject;
        
        /**
         * "Mode" element (modifier)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "normal"
         */
        modifier: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Page" element (page)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        page: GlideElement;
        
        /**
         * "Product" element (product)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        product: GlideElement;
        
        /**
         * "Qualifier" element (qualifier)
         * Type: "String" (string)
         * Maximum length: 100
         */
        qualifier: GlideElement;
        
        /**
         * "Role" element (role)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        role: $$GlideElement.sys_user_role;
        
        /**
         * "Order" element (role_order)
         * Type: "Integer" (integer)
         * Maximum length: 10
         * Default value: "1000"
         * This is a read-only column.
         */
        role_order: GlideElement;
        
        /**
         * "Snc created" element (snc_created)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        snc_created: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "u"
         */
        version: GlideElement;
    }

    /**
     * "Password Reset Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pwd_question extends sys_metadata {
        /**
         * "Question (Translated field)" element (question_translated)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 250
         * This is column is mandatory.
         */
        question_translated: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         * This is a read-only column.
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Variable Layout" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface item_option_layout extends question {
        /**
         * "Column" element (column)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        column: GlideElement;
        
        /**
         * "Position" element (index)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        index: GlideElement;
        
        /**
         * "Section" element (section)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        section: GlideElement;
        
        /**
         * "Column Count" element (total_columns)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        total_columns: GlideElement;
        
        /**
         * "Variable" element (variable)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        variable: $$GlideElement.item_option_new;
    }

    /**
     * "Wizard Variable" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface expert_variable extends question {
        /**
         * "Expert" element (expert)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        expert: $$GlideElement.expert;
    }

    /**
     * "Wizard" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface expert extends sys_metadata {
        /**
         * "Banner type" element (banner_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "generated"
         */
        banner_type: GlideElement;
        
        /**
         * "Basic panel flow" element (basic_panel_flow)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        basic_panel_flow: GlideElement;
        
        /**
         * "First panel" element (first_panel)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        first_panel: $$GlideElement.expert_panel;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Redirect" element (redirect)
         * Type: "String" (string)
         * Maximum length: 40
         */
        redirect: GlideElement;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        roles: GlideElement;
    }

    /**
     * "Wizard Panel" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface expert_panel extends sys_metadata {
        /**
         * "Banner step" element (banner_step)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        banner_step: $$GlideElement.expert_banner_step;
        
        /**
         * "Complete message" element (complete_message)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Done"
         */
        complete_message: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 8000
         */
        description: GlideElement;
        
        /**
         * "Expert" element (expert)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        expert: $$GlideElement.expert;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Next message" element (next_message)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Next"
         */
        next_message: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Previous message" element (previous_message)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Previous"
         */
        previous_message: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 100
         */
        title: GlideElement;
    }

    /**
     * "Banner Step" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface expert_banner_step extends sys_metadata {
        /**
         * "Expert" element (expert)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        expert: $$GlideElement.expert;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
    }

    /**
     * "Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_question extends sys_metadata {
        /**
         * "Base type" element (base_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        base_type: GlideElement;
        
        /**
         * "One off cost" element (cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        cost: GlideElement;
        
        /**
         * "Default value" element (default_value)
         * Type: "String" (string)
         * Maximum length: 512
         */
        default_value: GlideElement;
        
        /**
         * "Help text" element (help_text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1024
         */
        help_text: GlideElement;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        mandatory: GlideElement;
        
        /**
         * "Max Length" element (max_length)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "255"
         */
        max_length: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        order: GlideElement;
        
        /**
         * "Policy payload" element (policy_payload)
         * Type: "Compressed" (compressed)
         * Maximum length: 100000
         */
        policy_payload: GlideElement;
        
        /**
         * "Preconfigured Question" element (preconfigured)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        preconfigured: GlideElement;
        
        /**
         * "Question" element (question_text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        question_text: GlideElement;
        
        /**
         * "Read only" element (read_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        read_only: GlideElement;
        
        /**
         * "Read only question type" element (read_only_question_type)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        read_only_question_type: GlideElement;
        
        /**
         * "Recurring cost" element (recurring_cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        recurring_cost: GlideElement;
        
        /**
         * "Column" element (sc_ic_column)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_ic_column: $$GlideElement.sc_ic_column;
        
        /**
         * "Item" element (sc_ic_item_staging)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_ic_item_staging: $$GlideElement.sc_ic_item_staging;
        
        /**
         * "Type" element (sc_ic_question_class)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "027ffb11eb5211003623666cd206fe1f"
         * This is column is mandatory.
         */
        sc_ic_question_class: $$GlideElement.sc_ic_question_class;
        
        /**
         * "Option" element (sc_ic_question_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_ic_question_type: $$GlideElement.sc_ic_question_type;
        
        /**
         * "Section" element (sc_ic_section)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_ic_section: $$GlideElement.sc_ic_section;
        
        /**
         * "Scale Max" element (scale_max)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        scale_max: GlideElement;
        
        /**
         * "Scale Min" element (scale_min)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        scale_min: GlideElement;
    }

    /**
     * "Section" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_section extends sys_metadata {
        /**
         * "Position" element (index)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        index: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 250
         */
        label: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 270
         */
        name: GlideElement;
        
        /**
         * "Item" element (sc_ic_item_staging)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_ic_item_staging: $$GlideElement.sc_ic_item_staging;
    }

    /**
     * "Column" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_column extends sys_metadata {
        /**
         * "Position" element (index)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is column is mandatory.
         */
        index: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Section" element (sc_ic_section)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_ic_section: $$GlideElement.sc_ic_section;
    }

    /**
     * "Question Choice" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface question_choice extends sys_metadata {
        /**
         * "Inactive" element (inactive)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        inactive: GlideElement;
        
        /**
         * "Price" element (misc)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        misc: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Published choice" element (published_ref)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        published_ref: $$GlideElement.question_choice;
        
        /**
         * "Question" element (question)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        question: $$GlideElement.question;
        
        /**
         * "Recurring price" element (rec_misc)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        rec_misc: GlideElement;
        
        /**
         * "Text" element (text)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 80
         * This is column is mandatory.
         */
        text: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        value: GlideElement;
    }

    /**
     * "Question Choice" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_question_choice extends sys_metadata {
        /**
         * "One off cost" element (cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        cost: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Recurring cost" element (recurring_cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        recurring_cost: GlideElement;
        
        /**
         * "Question" element (sc_ic_question)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_ic_question: $$GlideElement.sc_ic_question;
        
        /**
         * "Text" element (text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 80
         * This is column is mandatory.
         */
        text: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        value: GlideElement;
    }

    /**
     * "Question Class" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_question_class extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Preconfigured only" element (preconfigured_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        preconfigured_only: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "6"
         */
        type: GlideElement;
    }

    /**
     * "Question Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_question_type extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "One off cost" element (cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        cost: GlideElement;
        
        /**
         * "Default value" element (default_value)
         * Type: "String" (string)
         * Maximum length: 512
         */
        default_value: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Help text" element (help_text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1024
         */
        help_text: GlideElement;
        
        /**
         * "Max Length" element (max_length)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "255"
         */
        max_length: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Preconfigured question" element (preconfigured)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        preconfigured: GlideElement;
        
        /**
         * "Question" element (question_text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        question_text: GlideElement;
        
        /**
         * "Read only" element (read_only)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        read_only: GlideElement;
        
        /**
         * "Recurring cost" element (recurring_cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        recurring_cost: GlideElement;
        
        /**
         * "Reference" element (reference)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        reference: GlideElement;
        
        /**
         * "Reference qualifier" element (reference_qual)
         * Type: "String" (string)
         * Maximum length: 1024
         */
        reference_qual: GlideElement;
        
        /**
         * "Question class" element (sc_ic_question_class)
         * Type: "Reference" (reference)
         * Maximum length: 40
         * This is column is mandatory.
         */
        sc_ic_question_class: $$GlideElement.sc_ic_question_class;
        
        /**
         * "Scale Max" element (scale_max)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        scale_max: GlideElement;
        
        /**
         * "Scale Min" element (scale_min)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        scale_min: GlideElement;
    }

    /**
     * "Question Type Choice" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_ic_question_type_choice extends sys_metadata {
        /**
         * "One off cost" element (cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        cost: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Recurring cost" element (recurring_cost)
         * Type: "Price" (price)
         * Maximum length: 20
         */
        recurring_cost: GlideElement;
        
        /**
         * "Question type" element (sc_ic_question_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_ic_question_type: $$GlideElement.sc_ic_question_type;
        
        /**
         * "Label" element (text)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 80
         * This is column is mandatory.
         */
        text: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        value: GlideElement;
    }

    /**
     * "Assessment Instance Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_assessment_instance_question extends IBaseRecord {
        /**
         * "Additional Information" element (add_info)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        add_info: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        category: $$GlideElement.asmt_metric_category;
        
        /**
         * "Instance" element (instance)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        instance: $$GlideElement.asmt_assessment_instance;
        
        /**
         * "Is hidden" element (is_hidden)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        is_hidden: GlideElement;
        
        /**
         * "Metric" element (metric)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric: $$GlideElement.asmt_metric;
        
        /**
         * "Metric Definition" element (metric_definition)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric_definition: $$GlideElement.asmt_metric_definition;
        
        /**
         * "Metric type group" element (metric_type_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric_type_group: $$GlideElement.asmt_metric_type_group;
        
        /**
         * "Reference id" element (reference_id)
         * Type: "String" (string)
         * Maximum length: 32
         * This is a read-only column.
         */
        reference_id: GlideElement;
        
        /**
         * "Source" element (source_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        source_id: GlideElementReference;
        
        /**
         * "Source table" element (source_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is a read-only column.
         */
        source_table: GlideElement;
        
        /**
         * "String value" element (string_value)
         * Type: "String" (string)
         * Maximum length: 1000
         * This is a read-only column.
         */
        string_value: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         * This is a read-only column.
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        value: GlideElement;
    }

    /**
     * "Assessment Metric Type Group" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_metric_type_group extends IBaseRecord {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Metric type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Assessment Metric Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_metric_definition extends sys_metadata {
        /**
         * "Display" element (display)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         * This is column is mandatory.
         */
        display: GlideElement;
        
        /**
         * "Metric" element (metric)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        metric: $$GlideElement.asmt_metric;
        
        /**
         * "Normalization Input" element (normalization_input)
         * Type: "Integer" (integer)
         * Maximum length: 15
         * Default value: "0"
         */
        normalization_input: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 15
         * This is column is mandatory.
         */
        order: GlideElement;
        
        /**
         * "Selected Image" element (selected_image)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        selected_image: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Unselected Image" element (unselected_image)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        unselected_image: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is column is mandatory.
         */
        value: GlideElement;
    }

    /**
     * "Assessment Instance" glide record fields.
     * Auto-number prefix: AINST
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_assessment_instance extends IBaseRecord {
        /**
         * "Assessment group" element (assessment_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        assessment_group: $$GlideElement.asmt_assessment;
        
        /**
         * "Channel" element (channel)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * This is a read-only column.
         */
        channel: GlideElement;
        
        /**
         * "Continue from question" element (continue_from_question)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        continue_from_question: GlideElement;
        
        /**
         * "Due date" element (due_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         * This is a read-only column.
         */
        due_date: GlideElementGlideObject;
        
        /**
         * "Expiration date" element (expiration_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         * This is a read-only column.
         */
        expiration_date: GlideElementGlideObject;
        
        /**
         * "Metric type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        number: GlideElement;
        
        /**
         * "Percent answered" element (percent_answered)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         * Default value: "0"
         */
        percent_answered: GlideElement;
        
        /**
         * "Preview" element (preview)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        preview: GlideElement;
        
        /**
         * "Related record 1" element (related_id_1)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        related_id_1: GlideElementReference;
        
        /**
         * "Related record 2" element (related_id_2)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        related_id_2: GlideElementReference;
        
        /**
         * "Related record 3" element (related_id_3)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        related_id_3: GlideElementReference;
        
        /**
         * "Related record 4" element (related_id_4)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        related_id_4: GlideElementReference;
        
        /**
         * "Related table 1" element (related_table_1)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        related_table_1: GlideElement;
        
        /**
         * "Related table 2" element (related_table_2)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        related_table_2: GlideElement;
        
        /**
         * "Related table 3" element (related_table_3)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        related_table_3: GlideElement;
        
        /**
         * "Related table 4" element (related_table_4)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        related_table_4: GlideElement;
        
        /**
         * "Signature" element (signature)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        signature: $$GlideElement.asmt_signature;
        
        /**
         * "Signature result" element (signature_result)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        signature_result: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "ready"
         * This is a read-only column.
         */
        state: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Taken on" element (taken_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        taken_on: GlideElementGlideObject;
        
        /**
         * "Task" element (task_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        task_id: $$GlideElement.task;
        
        /**
         * "Trigger condition" element (trigger_condition)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        trigger_condition: $$GlideElement.asmt_condition;
        
        /**
         * "Trigger ID" element (trigger_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         * This is a read-only column.
         */
        trigger_id: GlideElementReference;
        
        /**
         * "Trigger table" element (trigger_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        trigger_table: GlideElement;
        
        /**
         * "Assigned to" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Trigger Condition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_condition extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Assessment" element (assessment)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        assessment: $$GlideElement.asmt_metric_type;
        
        /**
         * "Assessable record" element (assessment_record)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        assessment_record: $$GlideElement.asmt_assessable_record;
        
        /**
         * "Assessable Record Field" element (assessment_record_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        assessment_record_field: GlideElement;
        
        /**
         * "Business rule" element (business_rule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        business_rule: $$GlideElement.sys_script;
        
        /**
         * "Condition" element (condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         * This is column is mandatory.
         */
        condition: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Repeat Interval" element (duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         * Default value: "30 00:00:00"
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Probability (%)" element (percent_random)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        percent_random: GlideElement;
        
        /**
         * "Related field 1" element (related_field_1)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        related_field_1: GlideElement;
        
        /**
         * "Related field 2" element (related_field_2)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        related_field_2: GlideElement;
        
        /**
         * "Related field 3" element (related_field_3)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        related_field_3: GlideElement;
        
        /**
         * "Related field 4" element (related_field_4)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        related_field_4: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.asmt_condition;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
        
        /**
         * "Trigger randomly" element (trigger_random)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        trigger_random: GlideElement;
        
        /**
         * "User field" element (user_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        user_field: GlideElement;
    }

    /**
     * "Assessment Group" glide record fields.
     * Auto-number prefix: ASG
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_assessment extends IBaseRecord {
        /**
         * "Metric type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Assessable Record" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asmt_assessable_record extends IBaseRecord {
        /**
         * "Decision matrix" element (dm_display)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        dm_display: GlideElement;
        
        /**
         * "Live feed" element (live_feed)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        live_feed: GlideElement;
        
        /**
         * "Live feed conversation" element (live_feed_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        live_feed_group: $$GlideElement.live_group_profile;
        
        /**
         * "Type" element (metric_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        metric_type: $$GlideElement.asmt_metric_type;
        
        /**
         * "Metric type group" element (metric_type_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        metric_type_group: $$GlideElement.asmt_metric_type_group;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 250
         */
        name: GlideElement;
        
        /**
         * "Source" element (source_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        source_id: GlideElementReference;
        
        /**
         * "Source table" element (source_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        source_table: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Live Group Profile" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface live_group_profile extends IBaseRecord {
        /**
         * "Document ID" element (document)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        document: GlideElementReference;
        
        /**
         * "Document conversation" element (document_group)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        document_group: GlideElement;
        
        /**
         * "Image" element (image)
         * Type: "String" (string)
         * Maximum length: 128
         */
        image: GlideElement;
        
        /**
         * "Last activity" element (last_activity)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_activity: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Photo" element (photo)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        photo: GlideElement;
        
        /**
         * "Public" element (public_group)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        public_group: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 100
         */
        short_description: GlideElement;
        
        /**
         * "Group Type" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "group"
         */
        type: GlideElement;
        
        /**
         * "Visible" element (visible_group)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        visible_group: GlideElement;
    }

    /**
     * "Multi Row Question Answer" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_multi_row_question_answer extends IBaseRecord {
        /**
         * "Question" element (item_option_new)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        item_option_new: $$GlideElement.item_option_new;
        
        /**
         * "Parent ID" element (parent_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        parent_id: GlideElementReference;
        
        /**
         * "Parent table name" element (parent_table_name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        parent_table_name: GlideElement;
        
        /**
         * "Question Answer" element (question_answer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        question_answer: $$GlideElement.question_answer;
        
        /**
         * "Row index" element (row_index)
         * Type: "Long Integer String" (long)
         * Maximum length: 40
         */
        row_index: GlideElement;
        
        /**
         * "SC Item Option" element (sc_item_option)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_item_option: $$GlideElement.sc_item_option;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        value: GlideElement;
        
        /**
         * "Multi Row Set" element (variable_set)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        variable_set: $$GlideElement.item_option_new_set;
    }

    /**
     * "Options" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_item_option extends IBaseRecord {
        /**
         * "Cart item" element (cart_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cart_item: $$GlideElement.sc_cart_item;
        
        /**
         * "Question" element (item_option_new)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        item_option_new: $$GlideElement.item_option_new;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1000000"
         */
        order: GlideElement;
        
        /**
         * "Sc cat item option" element (sc_cat_item_option)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sc_cat_item_option: $$GlideElement.sc_cat_item_option;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        value: GlideElement;
    }

    /**
     * "Item Option" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_cat_item_option extends sys_metadata {
        /**
         * "Cat item" element (cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Choice prices" element (choice_prices)
         * Type: "String" (string)
         * Maximum length: 200
         */
        choice_prices: GlideElement;
        
        /**
         * "Default value" element (default_value)
         * Type: "String" (string)
         * Maximum length: 512
         */
        default_value: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        description: GlideElement;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        mandatory: GlideElement;
        
        /**
         * "Multiple choices" element (multiple_choices)
         * Type: "String" (string)
         * Maximum length: 200
         */
        multiple_choices: GlideElement;
        
        /**
         * "Name or Question" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "short_text"
         */
        type: GlideElement;
    }

    /**
     * "Item" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_cart_item extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Cart" element (cart)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cart: $$GlideElement.sc_cart;
        
        /**
         * "Item" element (cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Hints" element (hints)
         * Type: "XML" (xml)
         * Maximum length: 4000
         */
        hints: GlideElement;
        
        /**
         * "Order Guide" element (order_guide)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        order_guide: $$GlideElement.sc_cat_item_guide;
        
        /**
         * "Quantity" element (quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        quantity: GlideElement;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Catalog" element (sc_catalog)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        sc_catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Show quantity" element (show_quantity)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        show_quantity: GlideElement;
        
        /**
         * "Variables" element (variables)
         * Type: "Variables" (variables)
         * Maximum length: 40
         */
        variables: GlideElement;
    }

    /**
     * "Shopping Cart" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_cart extends IBaseRecord {
        /**
         * "Contact type" element (contact_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        contact_type: GlideElement;
        
        /**
         * "Current crumb history" element (current_crumb_history)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        current_crumb_history: GlideElement;
        
        /**
         * "Current crumbs" element (current_crumbs)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        current_crumbs: GlideElement;
        
        /**
         * "Current guide" element (current_guide)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        current_guide: $$GlideElement.sc_cat_item_guide;
        
        /**
         * "Current guide active" element (current_guide_active)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        current_guide_active: $$GlideElement.sc_cat_item;
        
        /**
         * "Current guide serial" element (current_guide_serial)
         * Type: "String" (string)
         * Maximum length: 32000
         */
        current_guide_serial: GlideElement;
        
        /**
         * "Delivery address" element (delivery_address)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        delivery_address: GlideElement;
        
        /**
         * "Guides added" element (guides_added)
         * Type: "String" (string)
         * Maximum length: 512
         */
        guides_added: GlideElement;
        
        /**
         * "Hidden" element (hidden)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        hidden: GlideElement;
        
        /**
         * "Manual address" element (manual_address)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        manual_address: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 100
         * Default value: "DEFAULT"
         */
        name: GlideElement;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Source ID" element (source_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        source_id: GlideElementReference;
        
        /**
         * "Source table" element (source_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        source_table: GlideElement;
        
        /**
         * "Special instructions" element (special_instructions)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        special_instructions: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Question Answer" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface question_answer extends IBaseRecord {
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Question" element (question)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        question: $$GlideElement.question;
        
        /**
         * "Class" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "Short Table Name" (short_table_name)
         * Maximum length: 40
         */
        table_name: GlideElement;
        
        /**
         * "Table sys ID" element (table_sys_id)
         * Type: "Char" (char)
         * Maximum length: 32
         */
        table_sys_id: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        value: GlideElement;
    }

    /**
     * "Password Reset Active Question" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pwd_active_question extends IBaseRecord {
        /**
         * "Question" element (question)
         * Type: "String" (string)
         * Maximum length: 256
         */
        question: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         * This is a read-only column.
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Social Q&A Question" glide record fields.
     * Scope: Social Knowledge (sn_kb_social_qa)
     */
    export interface kb_social_qa_question extends IBaseRecord {
        /**
         * "Accepted answer" element (accepted_answer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        accepted_answer: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Answer count" element (answer_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        answer_count: GlideElement;
        
        /**
         * "Has comment" element (has_comment)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        has_comment: GlideElement;
        
        /**
         * "Category" element (kb_category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        kb_category: $$GlideElement.kb_category;
        
        /**
         * "Knowledge Base" element (kb_knowledge_base)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "Language" element (language)
         * Type: "String" (string)
         * Maximum length: 40
         */
        language: GlideElement;
        
        /**
         * "Last activity" element (last_activity)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        last_activity: GlideElementGlideObject;
        
        /**
         * "Profile" element (profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        profile: $$GlideElement.live_profile;
        
        /**
         * "Question" element (question)
         * Type: "String" (string)
         * Maximum length: 250
         * This is column is mandatory.
         */
        question: GlideElement;
        
        /**
         * "Question details" element (question_details)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65000
         */
        question_details: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Top answer" element (top_answer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        top_answer: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Views" element (views)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        views: GlideElement;
        
        /**
         * "Votes" element (votes)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        votes: GlideElement;
    }

    /**
     * "Social Q&A Answer" glide record fields.
     * Scope: Social Knowledge (sn_kb_social_qa)
     */
    export interface kb_social_qa_answer extends IBaseRecord {
        /**
         * "Accepted" element (accepted)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        accepted: GlideElement;
        
        /**
         * "Accepted by" element (accepted_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        accepted_by: $$GlideElement.live_profile;
        
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Answer" element (answer)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65000
         * This is column is mandatory.
         */
        answer: GlideElement;
        
        /**
         * "Has comment" element (has_comment)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        has_comment: GlideElement;
        
        /**
         * "Parent" element (parent)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent: $$GlideElement.kb_social_qa_answer;
        
        /**
         * "Profile" element (profile)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        profile: $$GlideElement.live_profile;
        
        /**
         * "Question" element (question)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        question: $$GlideElement.kb_social_qa_question;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Votes" element (votes)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        votes: GlideElement;
    }

    /**
     * "Knowledge Category" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface kb_category extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Full Category" element (full_category)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 255
         */
        full_category: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 40
         * This is column is mandatory.
         */
        label: GlideElement;
        
        /**
         * "Parent ID" element (parent_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        parent_id: GlideElementReference;
        
        /**
         * "Parent table" element (parent_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        parent_table: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 40
         */
        value: GlideElement;
    }

    /**
     * "Live Profile" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface live_profile extends IBaseRecord {
        /**
         * "Document" element (document)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        document: GlideElementReference;
        
        /**
         * "Follower count" element (follower_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        follower_count: GlideElement;
        
        /**
         * "Following count" element (following_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        following_count: GlideElement;
        
        /**
         * "Image" element (image)
         * Type: "String" (string)
         * Maximum length: 128
         */
        image: GlideElement;
        
        /**
         * "Joined feed" element (joined_feed)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        joined_feed: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 128
         */
        name: GlideElement;
        
        /**
         * "Photo" element (photo)
         * Type: "Image" (user_image)
         * Maximum length: 40
         */
        photo: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 4095
         */
        short_description: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 100
         */
        status: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "user"
         */
        type: GlideElement;
    }

    /**
     * "Attachment" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_attachment extends IBaseRecord {
        /**
         * "Average image color" element (average_image_color)
         * Type: "Color" (color)
         * Maximum length: 40
         */
        average_image_color: GlideElement;
        
        /**
         * "Chunk size bytes" element (chunk_size_bytes)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        chunk_size_bytes: GlideElement;
        
        /**
         * "Compressed" element (compressed)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        compressed: GlideElement;
        
        /**
         * "Content type" element (content_type)
         * Type: "String" (string)
         * Maximum length: 100
         */
        content_type: GlideElement;
        
        /**
         * "File name" element (file_name)
         * Type: "String" (string)
         * Maximum length: 100
         */
        file_name: GlideElement;
        
        /**
         * "Hash" element (hash)
         * Type: "String" (string)
         * Maximum length: 64
         */
        hash: GlideElement;
        
        /**
         * "Image height" element (image_height)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        image_height: GlideElement;
        
        /**
         * "Image width" element (image_width)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        image_width: GlideElement;
        
        /**
         * "Size bytes" element (size_bytes)
         * Type: "Long" (longint)
         * Maximum length: 40
         */
        size_bytes: GlideElement;
        
        /**
         * "Size compressed" element (size_compressed)
         * Type: "Long" (longint)
         * Maximum length: 40
         */
        size_compressed: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        state: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        table_name: GlideElement;
        
        /**
         * "Table sys ID" element (table_sys_id)
         * Type: "Char" (char)
         * Maximum length: 32
         */
        table_sys_id: GlideElement;
    }

    /**
     * "Attachment Document" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_attachment_doc {
        /**
         * "Data" element (data)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        data: GlideElement;
        
        /**
         * "Length" element (length)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        length: GlideElement;
        
        /**
         * "Position" element (position)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        position: GlideElement;
        
        /**
         * "Sys attachment" element (sys_attachment)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_attachment: $$GlideElement.sys_attachment;
        
        /**
         * "Created by" element (sys_created_by)
         * Type: "String" (string)
         * Maximum length: 40
         */
        sys_created_by: GlideElement;
        
        /**
         * "Created" element (sys_created_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        sys_created_on: GlideElementGlideObject;
        
        /**
         * "Sys ID" element (sys_id)
         * Type: "Sys ID (GUID)" (GUID)
         * Maximum length: 32
         */
        sys_id: GlideElement;
    }

    /**
     * "Attachment Document V2" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_attachment_doc_v2 {
        /**
         * "Data" element (data)
         * Type: "String" (string)
         * Maximum length: 1000000
         */
        data: GlideElement;
        
        /**
         * "Length" element (length)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        length: GlideElement;
        
        /**
         * "Position" element (position)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        position: GlideElement;
        
        /**
         * "Sys attachment" element (sys_attachment)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_attachment: $$GlideElement.sys_attachment;
        
        /**
         * "Created by" element (sys_created_by)
         * Type: "String" (string)
         * Maximum length: 40
         */
        sys_created_by: GlideElement;
        
        /**
         * "Created" element (sys_created_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        sys_created_on: GlideElementGlideObject;
        
        /**
         * "Sys ID" element (sys_id)
         * Type: "Sys ID (GUID)" (GUID)
         * Maximum length: 32
         */
        sys_id: GlideElement;
    }

    /**
     * "Attachment Icon Rule" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_attachment_icon_rule extends IBaseRecord {
        /**
         * "File format indicator" element (file_format_indicator)
         * Type: "String" (string)
         * Maximum length: 100
         */
        file_format_indicator: GlideElement;
        
        /**
         * "Icon" element (icon)
         * Type: "String" (string)
         * Maximum length: 250
         */
        icon: GlideElement;
        
        /**
         * "Select icon by" element (select_icon_by)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "file_extension"
         */
        select_icon_by: GlideElement;
    }

    /**
     * "System Plugin" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface v_plugin extends IBaseRecord {
        /**
         * "Status" element (active)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        active: GlideElement;
        
        /**
         * "Available version" element (available_version)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        available_version: GlideElement;
        
        /**
         * "Block Install" element (block_install)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        block_install: GlideElement;
        
        /**
         * "Definition" element (definition)
         * Type: "String" (string)
         * Maximum length: 65000
         * This is a read-only column.
         */
        definition: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         * This is a read-only column.
         */
        description: GlideElement;
        
        /**
         * "Entitled" element (entitled)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        entitled: GlideElement;
        
        /**
         * "Guided Setup Configuration" element (guided_setup_guid)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        guided_setup_guid: $$GlideElement.gsw_content;
        
        /**
         * "Has demo data" element (has_demo_data)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        has_demo_data: GlideElement;
        
        /**
         * "Help" element (help)
         * Type: "URL" (url)
         * Maximum length: 4000
         */
        help: GlideElement;
        
        /**
         * "ID" element (id)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        id: GlideElement;
        
        /**
         * "Plugin indicators" element (indicators)
         * Type: "String" (string)
         * Maximum length: 1024
         * Default value: "[]"
         * This is a read-only column.
         */
        indicators: GlideElement;
        
        /**
         * "Licensable" element (licensable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        licensable: GlideElement;
        
        /**
         * "Subscription Category" element (license_category)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        license_category: GlideElement;
        
        /**
         * "Subscription Model" element (license_model)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        license_model: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        name: GlideElement;
        
        /**
         * "Path" element (path)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        path: GlideElement;
        
        /**
         * "Provider" element (provider)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        provider: GlideElement;
        
        /**
         * "Requires" element (requires)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         * This is a read-only column.
         */
        requires: GlideElementGlideObject;
        
        /**
         * "Scope" element (scope)
         * Type: "String" (string)
         * Maximum length: 40
         */
        scope: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        state: GlideElement;
        
        /**
         * "Supports Rollback" element (supports_rollback)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        supports_rollback: GlideElement;
        
        /**
         * "Trackable" element (trackable)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * This is a read-only column.
         */
        trackable: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        type: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        version: GlideElement;
    }

    /**
     * "Setup Dependency" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface help_setup_dependency extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Dependent on Plugins" element (dependent_on_plugins)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        dependent_on_plugins: GlideElementGlideObject;
        
        /**
         * "Dependent on Steps" element (dependent_on_steps)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        dependent_on_steps: GlideElementGlideObject;
        
        /**
         * "Dependent on Store Apps" element (dependent_on_store_apps)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        dependent_on_store_apps: GlideElementGlideObject;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 80
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.help_setup_dependency;
    }

    /**
     * "Question Regular Expression" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface question_regex extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Regular Expression" element (regex)
         * Type: "String" (string)
         * Maximum length: 4000
         * This is column is mandatory.
         */
        regex: GlideElement;
        
        /**
         * "Regex Flag" element (regex_flag)
         * Type: "String" (string)
         * Maximum length: 40
         */
        regex_flag: GlideElement;
        
        /**
         * "Validation message" element (validation_message)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 40
         * Default value: "Input is not correct"
         */
        validation_message: GlideElement;
    }

    /**
     * "Knowledge" glide record fields.
     * Auto-number prefix: KB
     * Scope: Global (global) - Global application scope
     */
    export interface kb_knowledge extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Article type" element (article_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "text"
         */
        article_type: GlideElement;
        
        /**
         * "Author" element (author)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        author: $$GlideElement.sys_user;
        
        /**
         * "Can Read" element (can_read_user_criteria)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        can_read_user_criteria: GlideElementGlideObject;
        
        /**
         * "Cannot Read" element (cannot_read_user_criteria)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        cannot_read_user_criteria: GlideElementGlideObject;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         */
        category: GlideElement;
        
        /**
         * "Configuration item" element (cmdb_ci)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cmdb_ci: $$GlideElement.cmdb_ci;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Attachment link" element (direct)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        direct: GlideElement;
        
        /**
         * "Disable commenting" element (disable_commenting)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        disable_commenting: GlideElement;
        
        /**
         * "Disable suggesting" element (disable_suggesting)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        disable_suggesting: GlideElement;
        
        /**
         * "Display attachments" element (display_attachments)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        display_attachments: GlideElement;
        
        /**
         * "Flagged" element (flagged)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        flagged: GlideElement;
        
        /**
         * "Helpful count" element (helpful_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        helpful_count: GlideElement;
        
        /**
         * "Image" element (image)
         * Type: "Basic Image" (image)
         * Maximum length: 100
         */
        image: GlideElement;
        
        /**
         * "Category" element (kb_category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        kb_category: $$GlideElement.kb_category;
        
        /**
         * "Knowledge base" element (kb_knowledge_base)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        kb_knowledge_base: $$GlideElement.kb_knowledge_base;
        
        /**
         * "Meta" element (meta)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        meta: GlideElement;
        
        /**
         * "Meta Description" element (meta_description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        meta_description: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        number: GlideElement;
        
        /**
         * "Published" element (published)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        published: GlideElementGlideObject;
        
        /**
         * "Rating" element (rating)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        rating: GlideElement;
        
        /**
         * "Replacement Article" element (replacement_article)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        replacement_article: $$GlideElement.kb_knowledge;
        
        /**
         * "Retired" element (retired)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         * This is a read-only column.
         */
        retired: GlideElementGlideObject;
        
        /**
         * "Roles" element (roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         * This column is an array column.
         */
        roles: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 100
         * This is column is mandatory.
         */
        short_description: GlideElement;
        
        /**
         * "Source Task" element (source)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        source: $$GlideElement.task;
        
        /**
         * "Class" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "View count" element (sys_view_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        sys_view_count: GlideElement;
        
        /**
         * "Taxonomy topic" element (taxonomy_topic)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        taxonomy_topic: $$GlideElement.topic;
        
        /**
         * "Article body" element (text)
         * Type: "Translated HTML" (translated_html)
         * Maximum length: 65000
         */
        text: GlideElement;
        
        /**
         * "Topic" element (topic)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "General"
         */
        topic: GlideElement;
        
        /**
         * "Use count" element (use_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        use_count: GlideElement;
        
        /**
         * "Valid to" element (valid_to)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        valid_to: GlideElementGlideObject;
        
        /**
         * "View as allowed" element (view_as_allowed)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        view_as_allowed: GlideElement;
        
        /**
         * "Wiki" element (wiki)
         * Type: "Wiki" (wiki_text)
         * Maximum length: 65000
         */
        wiki: GlideElement;
        
        /**
         * "Workflow" element (workflow_state)
         * Type: "Workflow" (workflow)
         * Maximum length: 80
         * Default value: "draft"
         */
        workflow_state: GlideElement;
    }

    /**
     * "Knowledge keyword" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface kb_knowledge_keyword extends sys_metadata {
        /**
         * "Keywords" element (keywords)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         * This is column is mandatory.
         */
        keywords: GlideElementGlideObject;
        
        /**
         * "Knowledge" element (knowledge)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
    }

    /**
     * "Related Articles" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface kb_2_kb extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Knowledge article" element (kb_knowledge)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Related knowledge article" element (related_kb_knowledge)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        related_kb_knowledge: $$GlideElement.kb_knowledge;
    }

    /**
     * "Related Articles" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_2_kb extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Knowledge Article" element (kb_knowledge)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Catalog Item" element (sc_cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Related Catalog Items" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface kb_2_sc extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Knowledge article" element (kb_knowledge)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        kb_knowledge: $$GlideElement.kb_knowledge;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Catalog item" element (sc_cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        sc_cat_item: $$GlideElement.sc_cat_item;
    }

    /**
     * "Incident" glide record fields.
     * Auto-number prefix: INC
     * Scope: Global (global) - Global application scope
     */
    export interface incident extends task {
        /**
         * "Business impact" element (business_impact)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        business_impact: GlideElement;
        
        /**
         * "Business resolve time" element (business_stc)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        business_stc: GlideElement;
        
        /**
         * "Resolve time" element (calendar_stc)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        calendar_stc: GlideElement;
        
        /**
         * "Caller" element (caller_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        caller_id: $$GlideElement.sys_user;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "inquiry"
         */
        category: GlideElement;
        
        /**
         * "Probable cause" element (cause)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        cause: GlideElement;
        
        /**
         * "Caused by Change" element (caused_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        caused_by: $$GlideElement.change_request;
        
        /**
         * "Child Incidents" element (child_incidents)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        child_incidents: GlideElement;
        
        /**
         * "Close code" element (close_code)
         * Type: "String" (string)
         * Maximum length: 40
         */
        close_code: GlideElement;
        
        /**
         * "On hold reason" element (hold_reason)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        hold_reason: GlideElement;
        
        /**
         * "Incident state" element (incident_state)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        incident_state: GlideElement;
        
        /**
         * "Notify" element (notify)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        notify: GlideElement;
        
        /**
         * "Origin" element (origin_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        origin_id: GlideElementReference;
        
        /**
         * "Origin table" element (origin_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        origin_table: GlideElement;
        
        /**
         * "Parent Incident" element (parent_incident)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        parent_incident: $$GlideElement.incident;
        
        /**
         * "Problem" element (problem_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        problem_id: $$GlideElement.problem;
        
        /**
         * "Reopen count" element (reopen_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        reopen_count: GlideElement;
        
        /**
         * "Last reopened by" element (reopened_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        reopened_by: $$GlideElement.sys_user;
        
        /**
         * "Last reopened at" element (reopened_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        reopened_time: GlideElementGlideObject;
        
        /**
         * "Resolved" element (resolved_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        resolved_at: GlideElementGlideObject;
        
        /**
         * "Resolved by" element (resolved_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        resolved_by: $$GlideElement.sys_user;
        
        /**
         * "Change Request" element (rfc)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rfc: $$GlideElement.change_request;
        
        /**
         * "Severity" element (severity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        severity: GlideElement;
        
        /**
         * "Subcategory" element (subcategory)
         * Type: "String" (string)
         * Maximum length: 40
         */
        subcategory: GlideElement;
    }

    /**
     * "Problem" glide record fields.
     * Auto-number prefix: PRB
     * Scope: Global (global) - Global application scope
     */
    export interface problem extends task {
        /**
         * "Category" element (category)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        category: GlideElement;
        
        /**
         * "Cause notes" element (cause_notes)
         * Type: "HTML" (html)
         * Maximum length: 65536
         */
        cause_notes: GlideElement;
        
        /**
         * "Confirmed" element (confirmed_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        confirmed_at: GlideElementGlideObject;
        
        /**
         * "Confirmed by" element (confirmed_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        confirmed_by: $$GlideElement.sys_user;
        
        /**
         * "Duplicate of" element (duplicate_of)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        duplicate_of: $$GlideElement.problem;
        
        /**
         * "First reported by" element (first_reported_by_task)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        first_reported_by_task: $$GlideElement.task;
        
        /**
         * "Fix" element (fix_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        fix_at: GlideElementGlideObject;
        
        /**
         * "Fix by" element (fix_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        fix_by: $$GlideElement.sys_user;
        
        /**
         * "Fix communicated" element (fix_communicated_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        fix_communicated_at: GlideElementGlideObject;
        
        /**
         * "Fix communicated by" element (fix_communicated_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        fix_communicated_by: $$GlideElement.sys_user;
        
        /**
         * "Fix notes" element (fix_notes)
         * Type: "HTML" (html)
         * Maximum length: 65536
         */
        fix_notes: GlideElement;
        
        /**
         * "Known error" element (known_error)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        known_error: GlideElement;
        
        /**
         * "Major problem" element (major_problem)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        major_problem: GlideElement;
        
        /**
         * "Problem state" element (problem_state)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        problem_state: GlideElement;
        
        /**
         * "Related Incidents" element (related_incidents)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        related_incidents: GlideElement;
        
        /**
         * "Reopen count" element (reopen_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        reopen_count: GlideElement;
        
        /**
         * "Last reopened at" element (reopened_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        reopened_at: GlideElementGlideObject;
        
        /**
         * "Last reopened by" element (reopened_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        reopened_by: $$GlideElement.sys_user;
        
        /**
         * "Resolution code" element (resolution_code)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * This is a read-only column.
         */
        resolution_code: GlideElement;
        
        /**
         * "Resolved" element (resolved_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        resolved_at: GlideElementGlideObject;
        
        /**
         * "Resolved by" element (resolved_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        resolved_by: $$GlideElement.sys_user;
        
        /**
         * "Major problem review notes" element (review_outcome)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        review_outcome: GlideElement;
        
        /**
         * "Change request" element (rfc)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rfc: $$GlideElement.change_request;
        
        /**
         * "Subcategory" element (subcategory)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        subcategory: GlideElement;
        
        /**
         * "Workaround" element (workaround)
         * Type: "HTML" (html)
         * Maximum length: 65536
         */
        workaround: GlideElement;
        
        /**
         * "Workaround applied" element (workaround_applied)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        workaround_applied: GlideElement;
        
        /**
         * "Workaround communicated" element (workaround_communicated_at)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        workaround_communicated_at: GlideElementGlideObject;
        
        /**
         * "Workaround communicated by" element (workaround_communicated_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        workaround_communicated_by: $$GlideElement.sys_user;
    }

    /**
     * "Change Request" glide record fields.
     * Auto-number prefix: CHG
     * Scope: Global (global) - Global application scope
     */
    export interface change_request extends task {
        /**
         * "Backout plan" element (backout_plan)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        backout_plan: GlideElement;
        
        /**
         * "CAB date" element (cab_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         * This is column is mandatory.
         */
        cab_date: GlideElementGlideObject;
        
        /**
         * "CAB date/time" element (cab_date_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        cab_date_time: GlideElementGlideObject;
        
        /**
         * "CAB delegate" element (cab_delegate)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        cab_delegate: $$GlideElement.sys_user;
        
        /**
         * "CAB recommendation" element (cab_recommendation)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        cab_recommendation: GlideElement;
        
        /**
         * "CAB required" element (cab_required)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        cab_required: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        category: GlideElement;
        
        /**
         * "Change plan" element (change_plan)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        change_plan: GlideElement;
        
        /**
         * "Model" element (chg_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        chg_model: $$GlideElement.chg_model;
        
        /**
         * "Close code" element (close_code)
         * Type: "String" (string)
         * Maximum length: 40
         */
        close_code: GlideElement;
        
        /**
         * "Conflict last run" element (conflict_last_run)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        conflict_last_run: GlideElementGlideObject;
        
        /**
         * "Conflict status" element (conflict_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Not Run"
         * This is a read-only column.
         */
        conflict_status: GlideElement;
        
        /**
         * "Planned end date" element (end_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is column is mandatory.
         */
        end_date: GlideElementGlideObject;
        
        /**
         * "Implementation plan" element (implementation_plan)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        implementation_plan: GlideElement;
        
        /**
         * "Justification" element (justification)
         * Type: "String" (string)
         * Maximum length: 4000
         * This is column is mandatory.
         */
        justification: GlideElement;
        
        /**
         * "On hold" element (on_hold)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        on_hold: GlideElement;
        
        /**
         * "On hold reason" element (on_hold_reason)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        on_hold_reason: GlideElement;
        
        /**
         * "On Hold Change Tasks" element (on_hold_task)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        on_hold_task: GlideElementGlideObject;
        
        /**
         * "Outside maintenance schedule" element (outside_maintenance_schedule)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        outside_maintenance_schedule: GlideElement;
        
        /**
         * "Phase" element (phase)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "requested"
         */
        phase: GlideElement;
        
        /**
         * "Phase state" element (phase_state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "open"
         */
        phase_state: GlideElement;
        
        /**
         * "Production system" element (production_system)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        production_system: GlideElement;
        
        /**
         * "Reason" element (reason)
         * Type: "String" (string)
         * Maximum length: 40
         */
        reason: GlideElement;
        
        /**
         * "Requested by" element (requested_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_by: $$GlideElement.sys_user;
        
        /**
         * "Requested by date" element (requested_by_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        requested_by_date: GlideElementGlideObject;
        
        /**
         * "Review comments" element (review_comments)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        review_comments: GlideElement;
        
        /**
         * "Review date" element (review_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        review_date: GlideElementGlideObject;
        
        /**
         * "Review status" element (review_status)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        review_status: GlideElement;
        
        /**
         * "Risk" element (risk)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        risk: GlideElement;
        
        /**
         * "Risk and impact analysis" element (risk_impact_analysis)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        risk_impact_analysis: GlideElement;
        
        /**
         * "Scope" element (scope)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "3"
         */
        scope: GlideElement;
        
        /**
         * "Planned start date" element (start_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is column is mandatory.
         */
        start_date: GlideElementGlideObject;
        
        /**
         * "Standard Change Template version" element (std_change_producer_version)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        std_change_producer_version: $$GlideElement.std_change_producer_version;
        
        /**
         * "Test plan" element (test_plan)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        test_plan: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        type: GlideElement;
        
        /**
         * "Unauthorized" element (unauthorized)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        unauthorized: GlideElement;
    }

    /**
     * "Standard Change Template Version" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface std_change_producer_version extends IBaseRecord {
        /**
         * "Closed Change count" element (closed_change_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        closed_change_count: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 140
         */
        name: GlideElement;
        
        /**
         * "Percent successful" element (percent_successful)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         * Default value: "0"
         */
        percent_successful: GlideElement;
        
        /**
         * "Template" element (std_change_producer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        std_change_producer: $$GlideElement.std_change_record_producer;
        
        /**
         * "Proposal" element (std_change_proposal)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        std_change_proposal: $$GlideElement.std_change_proposal;
        
        /**
         * "Unsuccessful Change count" element (unsuccessful_change_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        unsuccessful_change_count: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is column is mandatory.
         */
        version: GlideElement;
    }

    /**
     * "Standard Change Proposal" glide record fields.
     * Auto-number prefix: STDCHG
     * Scope: Global (global) - Global application scope
     */
    export interface std_change_proposal extends task {
        /**
         * "Business justification" element (business_justification)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        business_justification: GlideElement;
        
        /**
         * "Catalog" element (catalog)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        catalog: $$GlideElement.sc_catalog;
        
        /**
         * "Category" element (category)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        category: $$GlideElement.sc_category;
        
        /**
         * "Sample Change Requests" element (change_requests)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        change_requests: GlideElementGlideObject;
        
        /**
         * "Created from change" element (created_from_change)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        created_from_change: $$GlideElement.change_request;
        
        /**
         * "Last update language" element (last_update_language)
         * Type: "String" (string)
         * Maximum length: 40
         */
        last_update_language: GlideElement;
        
        /**
         * "Proposal type" element (proposal_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        proposal_type: GlideElement;
        
        /**
         * "Template to modify/retire" element (std_change_producer)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        std_change_producer: $$GlideElement.std_change_record_producer;
        
        /**
         * "Template version" element (std_change_producer_version)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        std_change_producer_version: $$GlideElement.std_change_producer_version;
        
        /**
         * "Template name" element (template_name)
         * Type: "String" (string)
         * Maximum length: 80
         */
        template_name: GlideElement;
        
        /**
         * "Change Request values" element (template_value)
         * Type: "Template Value" (template_value)
         * Maximum length: 65000
         * This is column is mandatory.
         */
        template_value: GlideElement;
    }

    /**
     * "Record Producer" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sc_cat_item_producer extends sc_cat_item {
        /**
         * "Allow edit" element (allow_edit)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_edit: GlideElement;
        
        /**
         * "Can cancel" element (can_cancel)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        can_cancel: GlideElement;
        
        /**
         * "Post insert script" element (post_insert_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        post_insert_script: GlideElement;
        
        /**
         * "Redirect To" element (redirect_url)
         * Type: "String" (string)
         * Maximum length: 40
         */
        redirect_url: GlideElement;
        
        /**
         * "Save Options" element (save_options)
         * Type: "String" (string)
         * Maximum length: 40
         */
        save_options: GlideElement;
        
        /**
         * "Save Script" element (save_script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        save_script: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table_name: GlideElement;
        
        /**
         * "View" element (view)
         * Type: "String" (string)
         * Maximum length: 40
         */
        view: GlideElement;
    }

    /**
     * "Standard Change Template" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface std_change_record_producer extends sc_cat_item_producer {
        /**
         * "Available in 'Create New'" element (available_in_ui)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        available_in_ui: GlideElement;
        
        /**
         * "Closed Change count" element (closed_change_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        closed_change_count: GlideElement;
        
        /**
         * "Color" element (color)
         * Type: "Color" (color)
         * Maximum length: 40
         * Default value: "#cbcbcb"
         */
        color: GlideElement;
        
        /**
         * "Current version" element (current_version)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        current_version: $$GlideElement.std_change_producer_version;
        
        /**
         * "Percent successful" element (percent_successful)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         * Default value: "0"
         */
        percent_successful: GlideElement;
        
        /**
         * "Retired" element (retired)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        retired: GlideElement;
        
        /**
         * "Unsuccessful Change count" element (unsuccessful_change_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        unsuccessful_change_count: GlideElement;
    }

    /**
     * "Change Model" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface chg_model extends sttrm_model {
        /**
         * "Available in 'Create New'" element (available_in_ui)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        available_in_ui: GlideElement;
        
        /**
         * "Color" element (color)
         * Type: "Color" (color)
         * Maximum length: 40
         * Default value: "#cbcbcb"
         */
        color: GlideElement;
        
        /**
         * "Default change model" element (default_change_model)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        default_change_model: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Implementation states" element (implementation_states)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        implementation_states: GlideElementGlideObject;
        
        /**
         * "Record preset" element (record_preset)
         * Type: "Template Value" (template_value)
         * Maximum length: 4000
         * Default value: "type=normal"
         */
        record_preset: GlideElement;
    }

    /**
     * "State Transition Model" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sttrm_model extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Advanced Security" element (advanced_security)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        advanced_security: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 200
         */
        name: GlideElement;
        
        /**
         * "Read Roles" element (read_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        read_roles: GlideElement;
        
        /**
         * "State field" element (state_field)
         * Type: "Choice" (choice)
         * Maximum length: 80
         * Default value: "state"
         * This is column is mandatory.
         */
        state_field: GlideElement;
        
        /**
         * "Table name" element (table_name)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * Default value: "task"
         * This is column is mandatory.
         */
        table_name: GlideElement;
        
        /**
         * "Write Roles" element (write_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        write_roles: GlideElement;
    }

    /**
     * "SLA Conditions" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sla_condition_class extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Class name" element (class_name)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        class_name: $$GlideElement.sys_script_include;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
    }

    /**
     * "Task SLA" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface task_sla extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Business elapsed time" element (business_duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        business_duration: GlideElementGlideObject;
        
        /**
         * "Business pause duration" element (business_pause_duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        business_pause_duration: GlideElementGlideObject;
        
        /**
         * "Business elapsed percentage" element (business_percentage)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         */
        business_percentage: GlideElement;
        
        /**
         * "Business time left" element (business_time_left)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        business_time_left: GlideElementGlideObject;
        
        /**
         * "Actual elapsed time" element (duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Stop time" element (end_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        end_time: GlideElementGlideObject;
        
        /**
         * "Has breached" element (has_breached)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        has_breached: GlideElement;
        
        /**
         * "Original breach time" element (original_breach_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        original_breach_time: GlideElementGlideObject;
        
        /**
         * "Pause duration" element (pause_duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        pause_duration: GlideElementGlideObject;
        
        /**
         * "Pause time" element (pause_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        pause_time: GlideElementGlideObject;
        
        /**
         * "Actual elapsed percentage" element (percentage)
         * Type: "Percent Complete" (percent_complete)
         * Maximum length: 15
         */
        percentage: GlideElement;
        
        /**
         * "Breach time" element (planned_end_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        planned_end_time: GlideElementGlideObject;
        
        /**
         * "Schedule" element (schedule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "SLA definition" element (sla)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sla: $$GlideElement.contract_sla;
        
        /**
         * "Stage" element (stage)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "in_progress"
         */
        stage: GlideElement;
        
        /**
         * "Start time" element (start_time)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        start_time: GlideElementGlideObject;
        
        /**
         * "Task" element (task)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        task: $$GlideElement.task;
        
        /**
         * "Actual time left" element (time_left)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        time_left: GlideElementGlideObject;
        
        /**
         * "Timezone" element (timezone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        timezone: GlideElement;
    }

    /**
     * "SLA Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface contract_sla extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Advanced Condition Type" element (adv_condition_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "none"
         */
        adv_condition_type: GlideElement;
        
        /**
         * "Cancel condition" element (cancel_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        cancel_condition: GlideElement;
        
        /**
         * "Table" element (collection)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * Default value: "incident"
         */
        collection: GlideElement;
        
        /**
         * "Condition type" element (condition_class)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        condition_class: $$GlideElement.sla_condition_class;
        
        /**
         * "Duration" element (duration)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         */
        duration: GlideElementGlideObject;
        
        /**
         * "Duration type" element (duration_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        duration_type: $$GlideElement.cmn_relative_duration;
        
        /**
         * "Enable logging" element (enable_logging)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        enable_logging: GlideElement;
        
        /**
         * "Flow" element (flow)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        flow: $$GlideElement.sys_hub_flow;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Pause condition" element (pause_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        pause_condition: GlideElement;
        
        /**
         * "Relative duration works on" element (relative_duration_works_on)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "Task record"
         */
        relative_duration_works_on: GlideElement;
        
        /**
         * "Reset action" element (reset_action)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "cancel"
         */
        reset_action: GlideElement;
        
        /**
         * "Reset condition" element (reset_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        reset_condition: GlideElement;
        
        /**
         * "Resume condition" element (resume_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        resume_condition: GlideElement;
        
        /**
         * "Retroactive start" element (retroactive)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        retroactive: GlideElement;
        
        /**
         * "Retroactive pause" element (retroactive_pause)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        retroactive_pause: GlideElement;
        
        /**
         * "Schedule" element (schedule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Schedule source" element (schedule_source)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "sla_definition"
         */
        schedule_source: GlideElement;
        
        /**
         * "Schedule source field" element (schedule_source_field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        schedule_source_field: GlideElement;
        
        /**
         * "Set start to" element (set_start_to)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        set_start_to: GlideElement;
        
        /**
         * "Start condition" element (start_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        start_condition: GlideElement;
        
        /**
         * "Stop condition" element (stop_condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        stop_condition: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.contract_sla;
        
        /**
         * "Target" element (target)
         * Type: "String" (string)
         * Maximum length: 40
         */
        target: GlideElement;
        
        /**
         * "Timezone" element (timezone)
         * Type: "String" (string)
         * Maximum length: 40
         */
        timezone: GlideElement;
        
        /**
         * "Timezone source" element (timezone_source)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "task.caller_id.time_zone"
         */
        timezone_source: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "SLA"
         */
        type: GlideElement;
        
        /**
         * "Vendor" element (vendor)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        vendor: $$GlideElement.core_company;
        
        /**
         * "When to cancel" element (when_to_cancel)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "on_condition"
         */
        when_to_cancel: GlideElement;
        
        /**
         * "When to resume" element (when_to_resume)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "on_condition"
         */
        when_to_resume: GlideElement;
        
        /**
         * "Workflow" element (workflow)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "Default SLA workflow"
         */
        workflow: $$GlideElement.wf_workflow;
    }

    /**
     * "View Table" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_db_view_table extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Left join" element (left_join)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        left_join: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
        
        /**
         * "Variable prefix" element (variable_prefix)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        variable_prefix: GlideElement;
        
        /**
         * "View" element (view)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        view: $$GlideElement.sys_db_view;
        
        /**
         * "Where clause" element (where_clause)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        where_clause: GlideElement;
    }

    /**
     * "Database View" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_db_view extends sys_metadata {
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 40
         */
        label: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Plural" element (plural)
         * Type: "String" (string)
         * Maximum length: 40
         */
        plural: GlideElement;
    }

    /**
     * "View Field" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_db_view_table_field extends sys_metadata {
        /**
         * "Field" element (field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        field: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is a read-only column.
         */
        table: GlideElement;
        
        /**
         * "View table" element (view_table)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        view_table: $$GlideElement.sys_db_view_table;
    }

    /**
     * "UI Policy Action" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_policy_action extends sys_metadata {
        /**
         * "Clear the field value" element (cleared)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        cleared: GlideElement;
        
        /**
         * "Read only" element (disabled)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "ignore"
         */
        disabled: GlideElement;
        
        /**
         * "Field name" element (field)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        field: GlideElement;
        
        /**
         * "Mandatory" element (mandatory)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "ignore"
         */
        mandatory: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is a read-only column.
         */
        table: GlideElement;
        
        /**
         * "UI policy" element (ui_policy)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        ui_policy: $$GlideElement.sys_ui_policy;
        
        /**
         * "Visible" element (visible)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "ignore"
         */
        visible: GlideElement;
    }

    /**
     * "Catalog UI Policy Action" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface catalog_ui_policy_action extends sys_ui_policy_action {
        /**
         * "Catalog Item" element (catalog_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        catalog_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Variable name" element (catalog_variable)
         * Type: "String" (string)
         * Maximum length: 40
         */
        catalog_variable: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Name" element (variable)
         * Type: "String" (string)
         * Maximum length: 100
         * This is a read-only column.
         */
        variable: GlideElement;
        
        /**
         * "Variable Set" element (variable_set)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        variable_set: $$GlideElement.item_option_new_set;
    }

    /**
     * "UI Policy" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sys_ui_policy extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Conditions" element (conditions)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        conditions: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Global" element (global)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        global: GlideElement;
        
        /**
         * "Inherit" element (inherit)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        inherit: GlideElement;
        
        /**
         * "Isolate script" element (isolate_script)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        isolate_script: GlideElement;
        
        /**
         * "Model ID" element (model_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        model_id: GlideElementReference;
        
        /**
         * "Model table" element (model_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        model_table: GlideElement;
        
        /**
         * "On load" element (on_load)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        on_load: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "100"
         */
        order: GlideElement;
        
        /**
         * "Reverse if false" element (reverse_if_false)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        reverse_if_false: GlideElement;
        
        /**
         * "Run scripts" element (run_scripts)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        run_scripts: GlideElement;
        
        /**
         * "Execute if false" element (script_false)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         * Default value: "function onCondition() {\r\r}"
         */
        script_false: GlideElement;
        
        /**
         * "Execute if true" element (script_true)
         * Type: "Script (Plain)" (script_plain)
         * Maximum length: 8000
         * Default value: "function onCondition() {\r\r}"
         */
        script_true: GlideElement;
        
        /**
         * "Set values" element (set_values)
         * Type: "Template Value" (template_value)
         * Maximum length: 1000
         */
        set_values: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        short_description: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.sys_ui_policy;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
        
        /**
         * "Run scripts in UI type" element (ui_type)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        ui_type: GlideElement;
        
        /**
         * "View" element (view)
         * Type: "Reference" (reference)
         * Maximum length: 80
         */
        view: $$GlideElement.sys_ui_view;
    }

    /**
     * "Catalog UI Policy" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface catalog_ui_policy extends sys_ui_policy {
        /**
         * "Applies on a Catalog Item view" element (applies_catalog)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        applies_catalog: GlideElement;
        
        /**
         * "Applies on Requested Items" element (applies_req_item)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        applies_req_item: GlideElement;
        
        /**
         * "Applies on Catalog Tasks" element (applies_sc_task)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        applies_sc_task: GlideElement;
        
        /**
         * "Applies on the Target Record" element (applies_target_record)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        applies_target_record: GlideElement;
        
        /**
         * "Applies to" element (applies_to)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "item"
         */
        applies_to: GlideElement;
        
        /**
         * "Catalog Conditions" element (catalog_conditions)
         * Type: "Variable Conditions" (variable_conditions)
         * Maximum length: 4000
         */
        catalog_conditions: GlideElement;
        
        /**
         * "Catalog item" element (catalog_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        catalog_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Variable set" element (variable_set)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        variable_set: $$GlideElement.item_option_new_set;
    }

    /**
     * "Catalog Task" glide record fields.
     * Auto-number prefix: SCTASK
     * Scope: Global (global) - Global application scope
     */
    export interface sc_task extends task {
        /**
         * "Resolve Time" element (calendar_stc)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        calendar_stc: GlideElement;
        
        /**
         * "Item" element (cat_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        cat_item: $$GlideElement.sc_cat_item;
        
        /**
         * "Request" element (request)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        request: $$GlideElement.sc_request;
        
        /**
         * "Request item" element (request_item)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        request_item: $$GlideElement.sc_req_item;
        
        /**
         * "Catalog" element (sc_catalog)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        sc_catalog: $$GlideElement.sc_catalog;
    }

    /**
     * "Approval" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sysapproval_approver extends IBaseRecord {
        /**
         * "Approval Column" element (approval_column)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        approval_column: GlideElement;
        
        /**
         * "Approval Journal Column" element (approval_journal_column)
         * Type: "Field Name" (field_name)
         * Maximum length: 80
         */
        approval_journal_column: GlideElement;
        
        /**
         * "Approval source" element (approval_source)
         * Type: "String" (string)
         * Maximum length: 40
         */
        approval_source: GlideElement;
        
        /**
         * "Approver" element (approver)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        approver: $$GlideElement.sys_user;
        
        /**
         * "Comments" element (comments)
         * Type: "Journal Input" (journal_input)
         * Maximum length: 4000
         */
        comments: GlideElementGlideObject;
        
        /**
         * "Approving" element (document_id)
         * Type: "Document ID" (document_id)
         * Maximum length: 32
         */
        document_id: GlideElementReference;
        
        /**
         * "Due date" element (due_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        due_date: GlideElementGlideObject;
        
        /**
         * "Expected start" element (expected_start)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        expected_start: GlideElementGlideObject;
        
        /**
         * "Group" element (group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        group: $$GlideElement.sysapproval_group;
        
        /**
         * "Iteration" element (iteration)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         */
        iteration: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Process step" element (process_step)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        process_step: $$GlideElement.process_step;
        
        /**
         * "Source table" element (source_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        source_table: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "not requested"
         */
        state: GlideElement;
        
        /**
         * "State binding" element (state_binding)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        state_binding: $$GlideElement.state_binding;
        
        /**
         * "Approval for" element (sysapproval)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sysapproval: $$GlideElement.task;
    }

    /**
     * "Group approval" glide record fields.
     * Auto-number prefix: GAPRV
     * Scope: Global (global) - Global application scope
     */
    export interface sysapproval_group extends task {
        /**
         * "Admin override" element (admin_override)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        admin_override: GlideElement;
        
        /**
         * "Approval user" element (approval_user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        approval_user: $$GlideElement.sys_user;
        
        /**
         * "Handle a rejection by" element (reject_handling)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "reject"
         */
        reject_handling: GlideElement;
        
        /**
         * "Wait for" element (wait_for)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "any"
         */
        wait_for: GlideElement;
    }

    /**
     * "State Binding" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface state_binding extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Active list" element (active_list)
         * Type: "String" (string)
         * Maximum length: 40
         */
        active_list: GlideElement;
        
        /**
         * "Approval rule" element (approval_rule)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        approval_rule: GlideElement;
        
        /**
         * "Closed list" element (closed_list)
         * Type: "String" (string)
         * Maximum length: 40
         */
        closed_list: GlideElement;
        
        /**
         * "Document" element (document)
         * Type: "String" (string)
         * Maximum length: 40
         */
        document: GlideElement;
        
        /**
         * "Document key" element (document_key)
         * Type: "String" (string)
         * Maximum length: 40
         */
        document_key: GlideElement;
        
        /**
         * "Pending list" element (pending_list)
         * Type: "String" (string)
         * Maximum length: 40
         */
        pending_list: GlideElement;
        
        /**
         * "Process guide" element (process_guide)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        process_guide: $$GlideElement.process_guide;
        
        /**
         * "Sysrule approvals" element (sysrule_approvals)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sysrule_approvals: $$GlideElement.sysrule_approvals;
    }

    /**
     * "Process Guides" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface process_guide extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Advanced condition" element (advanced_condition)
         * Type: "Script" (script)
         * Maximum length: 4000
         */
        advanced_condition: GlideElement;
        
        /**
         * "Conditions" element (condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        condition: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "On insert" element (on_insert)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        on_insert: GlideElement;
        
        /**
         * "On update" element (on_update)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        on_update: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        order: GlideElement;
        
        /**
         * "Start" element (start)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        start: $$GlideElement.process_step;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         */
        table: GlideElement;
    }

    /**
     * "Approval Rules" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface sysrule_approvals extends sysrule {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Conditions" element (condition)
         * Type: "Conditions" (conditions)
         * Maximum length: 1000
         */
        condition: GlideElement;
        
        /**
         * "Group" element (group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        group: $$GlideElement.sys_user_group;
        
        /**
         * "Match conditions" element (match_conditions)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "ALL"
         */
        match_conditions: GlideElement;
        
        /**
         * "Optional group" element (optional_group)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        optional_group: $$GlideElement.sys_user_group;
        
        /**
         * "Run rule before" element (run_rule_before)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        run_rule_before: GlideElement;
        
        /**
         * "Script" element (script)
         * Type: "String" (string)
         * Maximum length: 8000
         */
        script: GlideElement;
        
        /**
         * "Set state" element (set_state)
         * Type: "String" (string)
         * Maximum length: 40
         */
        set_state: GlideElement;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * Default value: "change_request"
         */
        table: GlideElement;
        
        /**
         * "User" element (user)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        user: $$GlideElement.sys_user;
    }

    /**
     * "Process Steps" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface process_step extends sys_metadata {
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Process guide" element (process_guide)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        process_guide: $$GlideElement.process_guide;
    }

    /**
     * "Storage File Share" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_storage_fileshare extends cmdb_ci {
        /**
         * "File Share ID" element (fileshare_id)
         * Type: "String" (string)
         * Maximum length: 100
         */
        fileshare_id: GlideElement;
        
        /**
         * "Path" element (path)
         * Type: "String" (string)
         * Maximum length: 100
         */
        path: GlideElement;
    }
    
    /**
     * "Purchase order line items" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface proc_po_item extends IBaseRecord {
        /**
         * "Asset operation" element (asset_operation)
         * Type: "String" (string)
         * Maximum length: 20
         */
        asset_operation: GlideElement;
        
        /**
         * "Asset task" element (asset_task)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        asset_task: $$GlideElement.asset_task;
        
        /**
         * "Cost" element (cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         */
        cost: GlideElement;
        
        /**
         * "Discount" element (discount)
         * Type: "Decimal" (decimal)
         * Maximum length: 20
         * Default value: "0"
         */
        discount: GlideElement;
        
        /**
         * "Expected delivery" element (expected_delivery)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        expected_delivery: GlideElementGlideObject;
        
        /**
         * "List price" element (list_price)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         */
        list_price: GlideElement;
        
        /**
         * "Product Model" element (model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        model: $$GlideElement.cmdb_model;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Ordered" element (ordered)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        ordered: GlideElementGlideObject;
        
        /**
         * "Ordered quantity" element (ordered_quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "1"
         * This is column is mandatory.
         */
        ordered_quantity: GlideElement;
        
        /**
         * "Part number" element (part_number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        part_number: GlideElement;
        
        /**
         * "Product Catalog" element (product_catalog)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        product_catalog: $$GlideElement.sc_cat_item;
        
        /**
         * "Purchase order" element (purchase_order)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        purchase_order: $$GlideElement.proc_po;
        
        /**
         * "Received" element (received)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        received: GlideElementGlideObject;
        
        /**
         * "Received quantity" element (received_quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         */
        received_quantity: GlideElement;
        
        /**
         * "Remaining quantity" element (remaining_quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        remaining_quantity: GlideElement;
        
        /**
         * "Request line" element (request_line)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        request_line: $$GlideElement.sc_req_item;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 100
         */
        short_description: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "requested"
         * This is a read-only column.
         */
        status: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Total cost" element (total_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         * This is a read-only column.
         */
        total_cost: GlideElement;
        
        /**
         * "Total list price" element (total_list_price)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         * This is a read-only column.
         */
        total_list_price: GlideElement;
        
        /**
         * "Vendor" element (vendor)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        vendor: $$GlideElement.core_company;
    }

    /**
     * "Receiving Slip Line" glide record fields.
     * Auto-number prefix: RCL
     * Scope: Global (global) - Global application scope
     */
    export interface proc_rec_slip_item extends IBaseRecord {
        /**
         * "Unit cost" element (cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        cost: GlideElement;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Purchase Order Line" element (purchase_line)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        purchase_line: $$GlideElement.proc_po_item;
        
        /**
         * "Quantity" element (quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is column is mandatory.
         */
        quantity: GlideElement;
        
        /**
         * "Received" element (received)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        received: GlideElementGlideObject;
        
        /**
         * "Received by" element (received_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        received_by: $$GlideElement.sys_user;
        
        /**
         * "Receiving Slip" element (receiving_slip)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        receiving_slip: $$GlideElement.proc_rec_slip;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "Portfolio" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pm_portfolio extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Business Unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         */
        category: GlideElement;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Portfolio manager" element (portfolio_manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        portfolio_manager: $$GlideElement.sys_user;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "define"
         */
        state: GlideElement;
        
        /**
         * "Task type" element (sys_class_name)
         * Type: "System Class Name" (sys_class_name)
         * Maximum length: 80
         * This is a read-only column.
         */
        sys_class_name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "Program" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pm_program extends planned_task {
        /**
         * "Business Unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Cost Status" element (cost_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "green"
         */
        cost_status: GlideElement;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Goals" element (goals)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        goals: GlideElementGlideObject;
        
        /**
         * "Impacted Business Units" element (impacted_business_units)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        impacted_business_units: GlideElementGlideObject;
        
        /**
         * "Investment Type" element (investment_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        investment_type: GlideElement;
        
        /**
         * "Phase" element (phase)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "initiating"
         */
        phase: GlideElement;
        
        /**
         * "Planned returns" element (planned_return)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        planned_return: GlideElement;
        
        /**
         * "Portfolio" element (portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        portfolio: $$GlideElement.pm_portfolio;
        
        /**
         * "Program manager" element (program_manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        program_manager: $$GlideElement.sys_user;
        
        /**
         * "Project/Demand Portfolios" element (related_portfolios)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         * This is a read-only column.
         */
        related_portfolios: GlideElementGlideObject;
        
        /**
         * "Resource Status" element (resource_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "green"
         */
        resource_status: GlideElement;
        
        /**
         * "Risk" element (risk)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "low"
         */
        risk: GlideElement;
        
        /**
         * "Planned ROI %" element (roi)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        roi: GlideElement;
        
        /**
         * "Schedule Status" element (schedule_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "green"
         */
        schedule_status: GlideElement;
        
        /**
         * "Scope Status" element (scope_status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "green"
         */
        scope_status: GlideElement;
        
        /**
         * "Score" element (score)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "0"
         */
        score: GlideElement;
        
        /**
         * "Risk" element (score_risk)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_risk: GlideElement;
        
        /**
         * "Size" element (score_size)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_size: GlideElement;
        
        /**
         * "Value" element (score_value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_value: GlideElement;
        
        /**
         * "Strategies" element (strategic_objectives)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        strategic_objectives: GlideElementGlideObject;
    }

    /**
     * "Demand" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface dmn_demand extends task {
        /**
         * "Approved end date" element (approved_end_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        approved_end_date: GlideElementGlideObject;
        
        /**
         * "Approved start date" element (approved_start_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        approved_start_date: GlideElementGlideObject;
        
        /**
         * "Assessment Required" element (assessment_required)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        assessment_required: GlideElement;
        
        /**
         * "Assumptions" element (assumptions)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        assumptions: GlideElement;
        
        /**
         * "Barriers" element (barriers)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        barriers: GlideElement;
        
        /**
         * "Business Applications" element (business_applications)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_applications: GlideElementGlideObject;
        
        /**
         * "Business Capabilities" element (business_capabilities)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_capabilities: GlideElementGlideObject;
        
        /**
         * "Business case" element (business_case)
         * Type: "HTML" (html)
         * Maximum length: 4000
         */
        business_case: GlideElement;
        
        /**
         * "Business Unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Project calculation" element (calculation_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        calculation_type: GlideElement;
        
        /**
         * "Capital budget" element (capital_budget)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        capital_budget: GlideElement;
        
        /**
         * "Capital expense" element (capital_outlay)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        capital_outlay: GlideElement;
        
        /**
         * "Category" element (category)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "strategic"
         * This is column is mandatory.
         */
        category: GlideElement;
        
        /**
         * "Change" element (change)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        change: $$GlideElement.change_request;
        
        /**
         * "Close Demand" element (close_demand)
         * Type: "String" (string)
         * Maximum length: 40
         */
        close_demand: GlideElement;
        
        /**
         * "Collaborators" element (collaborators)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        collaborators: GlideElementGlideObject;
        
        /**
         * "Defect" element (defect)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        defect: $$GlideElement.rm_defect;
        
        /**
         * "Demand" element (demand)
         * Type: "Composite Field" (composite_field)
         * Maximum length: 300
         */
        demand: GlideElement;
        
        /**
         * "Demand Actual Cost" element (demand_actual_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        demand_actual_cost: GlideElement;
        
        /**
         * "Demand Actual Effort" element (demand_actual_effort)
         * Type: "Duration" (glide_duration)
         * Maximum length: 40
         * This is a read-only column.
         */
        demand_actual_effort: GlideElementGlideObject;
        
        /**
         * "Demand manager" element (demand_manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        demand_manager: $$GlideElement.sys_user;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Discount Rate %" element (discount_rate)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "0"
         */
        discount_rate: GlideElement;
        
        /**
         * "Enablers" element (enablers)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        enablers: GlideElement;
        
        /**
         * "Enhancement" element (enhancement)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        enhancement: $$GlideElement.rm_enhancement;
        
        /**
         * "Risk Level" element (expected_risk)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "low"
         */
        expected_risk: GlideElement;
        
        /**
         * "ROI %" element (expected_roi)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        expected_roi: GlideElement;
        
        /**
         * "Financial benefit" element (financial_benefit)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        financial_benefit: GlideElement;
        
        /**
         * "Financial return" element (financial_return)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        financial_return: GlideElement;
        
        /**
         * "Goal" element (goal)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        goal: $$GlideElement.goal;
        
        /**
         * "Goals" element (goals)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        goals: GlideElementGlideObject;
        
        /**
         * "Idea" element (idea)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        idea: $$GlideElement.idea;
        
        /**
         * "Impacted Business Units" element (impacted_business_units)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        impacted_business_units: GlideElementGlideObject;
        
        /**
         * "In scope" element (in_scope)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        in_scope: GlideElement;
        
        /**
         * "Investment Class" element (investment_class)
         * Type: "String" (string)
         * Maximum length: 40
         */
        investment_class: GlideElement;
        
        /**
         * "Investment Type" element (investment_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        investment_type: GlideElement;
        
        /**
         * "Internal rate of return %" element (irr_value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        irr_value: GlideElement;
        
        /**
         * "Labor costs" element (labor_costs)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        labor_costs: GlideElement;
        
        /**
         * "Model ID" element (model_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        model_id: $$GlideElement.cmdb_model;
        
        /**
         * "Net present value" element (npv_value)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        npv_value: GlideElement;
        
        /**
         * "Operating budget" element (operational_budget)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        operational_budget: GlideElement;
        
        /**
         * "Operating expense" element (operational_outlay)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        operational_outlay: GlideElement;
        
        /**
         * "Other costs" element (other_costs)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        other_costs: GlideElement;
        
        /**
         * "Out of scope" element (out_of_scope)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        out_of_scope: GlideElement;
        
        /**
         * "Portfolio" element (portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        portfolio: $$GlideElement.pm_portfolio;
        
        /**
         * "Program" element (primary_program)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        primary_program: $$GlideElement.pm_program;
        
        /**
         * "Project" element (project)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        project: $$GlideElement.pm_project;
        
        /**
         * "Project Manager" element (project_manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        project_manager: $$GlideElement.sys_user;
        
        /**
         * "Rate Model" element (rate_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rate_model: $$GlideElement.rate_model;
        
        /**
         * "Related Records" element (related_records)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        related_records: GlideElementGlideObject;
        
        /**
         * "Due date" element (requested_by)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        requested_by: GlideElementGlideObject;
        
        /**
         * "Resource allocated cost" element (resource_allocated_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        resource_allocated_cost: GlideElement;
        
        /**
         * "Resource planned cost" element (resource_planned_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        resource_planned_cost: GlideElement;
        
        /**
         * "Risk of not performing" element (risk_of_not_performing)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        risk_of_not_performing: GlideElement;
        
        /**
         * "Risk of performing" element (risk_of_performing)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        risk_of_performing: GlideElement;
        
        /**
         * "Score" element (score)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "0"
         */
        score: GlideElement;
        
        /**
         * "Cost" element (score_cost)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_cost: GlideElement;
        
        /**
         * "Risk" element (score_risk)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_risk: GlideElement;
        
        /**
         * "Size" element (score_size)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_size: GlideElement;
        
        /**
         * "Strategic Alignment" element (score_strategic_allignment)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_strategic_allignment: GlideElement;
        
        /**
         * "Value" element (score_value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_value: GlideElement;
        
        /**
         * "Epic" element (scrum_epic)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        scrum_epic: $$GlideElement.rm_epic;
        
        /**
         * "Story" element (scrum_story)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        scrum_story: $$GlideElement.rm_story;
        
        /**
         * "T-Shirt size" element (size)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "small"
         */
        size: GlideElement;
        
        /**
         * "Software Model" element (software_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        software_model: $$GlideElement.cmdb_software_product_model;
        
        /**
         * "Stage" element (stage)
         * Type: "Decoration" (decoration)
         * Maximum length: 40
         * Default value: "demand"
         * This is a read-only column.
         */
        stage: GlideElement;
        
        /**
         * "Start date" element (start_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        start_date: GlideElementGlideObject;
        
        /**
         * "Strategies" element (strategic_objectives)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        strategic_objectives: GlideElementGlideObject;
        
        /**
         * "Submitted on" element (submitted_date)
         * Type: "Date" (glide_date)
         * Maximum length: 40
         */
        submitted_date: GlideElementGlideObject;
        
        /**
         * "Submitted by" element (submitter)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        submitter: $$GlideElement.sys_user;
        
        /**
         * "Total planned cost" element (total_costs)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        total_costs: GlideElement;
        
        /**
         * "Type" element (type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "project"
         * This is column is mandatory.
         */
        type: GlideElement;
        
        /**
         * "Visited States" element (visited_state)
         * Type: "String" (string)
         * Maximum length: 255
         * Default value: "1"
         * This is a read-only column.
         */
        visited_state: GlideElement;
    }

    /**
     * "Project" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pm_project extends planned_task {
        /**
         * "Approved end date" element (approved_end_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        approved_end_date: GlideElementGlideObject;
        
        /**
         * "Approved start date" element (approved_start_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        approved_start_date: GlideElementGlideObject;
        
        /**
         * "Assumptions" element (assumptions)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        assumptions: GlideElement;
        
        /**
         * "Backlog" element (backlog_definition)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        backlog_definition: $$GlideElement.backlog_definition;
        
        /**
         * "Barriers" element (barriers)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        barriers: GlideElement;
        
        /**
         * "Business Applications" element (business_applications)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_applications: GlideElementGlideObject;
        
        /**
         * "Business Capabilities" element (business_capabilities)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_capabilities: GlideElementGlideObject;
        
        /**
         * "Business case" element (business_case)
         * Type: "HTML" (html)
         * Maximum length: 4000
         */
        business_case: GlideElement;
        
        /**
         * "Business Unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Capital estimate to completion" element (capex_estimate_to_completion)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        capex_estimate_to_completion: GlideElement;
        
        /**
         * "Capital estimate at completion" element (capex_forecast_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        capex_forecast_cost: GlideElement;
        
        /**
         * "Demand" element (demand)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        demand: $$GlideElement.dmn_demand;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Discount Rate %" element (discount_rate)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "0"
         */
        discount_rate: GlideElement;
        
        /**
         * "Enablers" element (enablers)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        enablers: GlideElement;
        
        /**
         * "Estimate to completion" element (estimate_to_completion)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        estimate_to_completion: GlideElement;
        
        /**
         * "Execution type" element (execution_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "waterfall"
         */
        execution_type: GlideElement;
        
        /**
         * "Estimate at completion" element (forecast_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "PPMCurrencyHelper.defaultCurrencyValue()"
         * This is a read-only column.
         */
        forecast_cost: GlideElement;
        
        /**
         * "Goal" element (goal)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        goal: $$GlideElement.goal;
        
        /**
         * "Goals" element (goals)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        goals: GlideElementGlideObject;
        
        /**
         * "Impacted Business Units" element (impacted_business_units)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        impacted_business_units: GlideElementGlideObject;
        
        /**
         * "In scope" element (in_scope)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        in_scope: GlideElement;
        
        /**
         * "Investment Class" element (investment_class)
         * Type: "String" (string)
         * Maximum length: 40
         */
        investment_class: GlideElement;
        
        /**
         * "Investment Type" element (investment_type)
         * Type: "String" (string)
         * Maximum length: 40
         */
        investment_type: GlideElement;
        
        /**
         * "Internal rate of return %" element (irr_value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * This is a read-only column.
         */
        irr_value: GlideElement;
        
        /**
         * "Marked for delete" element (marked_for_delete)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        marked_for_delete: GlideElement;
        
        /**
         * "Net present value" element (npv_value)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "PPMCurrencyHelper.defaultCurrencyValue()"
         * This is a read-only column.
         */
        npv_value: GlideElement;
        
        /**
         * "Operating estimate to completion" element (opex_estimate_to_completion)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        opex_estimate_to_completion: GlideElement;
        
        /**
         * "Operating estimate at completion" element (opex_forecast_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        opex_forecast_cost: GlideElement;
        
        /**
         * "Out of scope" element (out_of_scope)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        out_of_scope: GlideElement;
        
        /**
         * "Phase" element (phase)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "initiating"
         */
        phase: GlideElement;
        
        /**
         * "Portfolio" element (primary_portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        primary_portfolio: $$GlideElement.pm_portfolio;
        
        /**
         * "Program" element (primary_program)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        primary_program: $$GlideElement.pm_program;
        
        /**
         * "Project manager" element (project_manager)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        project_manager: $$GlideElement.sys_user;
        
        /**
         * "Project schedule date format" element (project_schedule_date_format)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "date"
         */
        project_schedule_date_format: GlideElement;
        
        /**
         * "Project type" element (project_type)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "regular"
         */
        project_type: GlideElement;
        
        /**
         * "Rate Model" element (rate_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        rate_model: $$GlideElement.rate_model;
        
        /**
         * "Derive assignee list from resource plan" element (resources_from_resource_plan)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        resources_from_resource_plan: GlideElement;
        
        /**
         * "Risk" element (risk)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "low"
         */
        risk: GlideElement;
        
        /**
         * "Risk cost" element (risk_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        risk_cost: GlideElement;
        
        /**
         * "Risk of not performing" element (risk_of_not_performing)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        risk_of_not_performing: GlideElement;
        
        /**
         * "Risk of performing" element (risk_of_performing)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        risk_of_performing: GlideElement;
        
        /**
         * "Planned ROI %" element (roi)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         */
        roi: GlideElement;
        
        /**
         * "Schedule" element (schedule)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        schedule: $$GlideElement.cmn_schedule;
        
        /**
         * "Score" element (score)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "0"
         */
        score: GlideElement;
        
        /**
         * "Risk Score" element (score_risk)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_risk: GlideElement;
        
        /**
         * "Size Score" element (score_size)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_size: GlideElement;
        
        /**
         * "Value Score" element (score_value)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "5"
         */
        score_value: GlideElement;
        
        /**
         * "Show on Program Status Report" element (show_on_program_status_report)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        show_on_program_status_report: GlideElement;
        
        /**
         * "Strategies" element (strategic_objectives)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        strategic_objectives: GlideElementGlideObject;
        
        /**
         * "Allow time card reporting on" element (time_card_preference)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "project_project_task"
         */
        time_card_preference: GlideElement;
        
        /**
         * "Derive time component from planned dates" element (time_component_from_planned)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        time_component_from_planned: GlideElement;
        
        /**
         * "Title" element (title)
         * Type: "String" (string)
         * Maximum length: 120
         */
        title: GlideElement;
        
        /**
         * "Update actual effort from time card" element (update_actual_effort_from_time_card)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "yes"
         */
        update_actual_effort_from_time_card: GlideElement;
        
        /**
         * "Recalculate score on project change" element (update_score_on_value_change)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "yes"
         */
        update_score_on_value_change: GlideElement;
        
        /**
         * "Planned return" element (value)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * This is a read-only column.
         */
        value: GlideElement;
    }

    /**
     * "Project Task" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pm_project_task extends planned_task {
        /**
         * "Rollup dates from stories" element (agile_rollup_dates)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        agile_rollup_dates: GlideElement;
        
        /**
         * "End Sprint" element (end_sprint)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        end_sprint: $$GlideElement.rm_sprint;
        
        /**
         * "Link" element (link)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        link: GlideElement;
        
        /**
         * "Project" element (project)
         * Type: "Composite Field" (composite_field)
         * Maximum length: 300
         */
        project: GlideElement;
        
        /**
         * "Team" element (scrum_team)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        scrum_team: $$GlideElement.scrum_pp_team;
        
        /**
         * "Start Sprint" element (start_sprint)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        start_sprint: $$GlideElement.rm_sprint;
    }

    /**
     * "Taxonomy Layer Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface spm_taxonomy_layer_definition extends IBaseRecord {
        /**
         * "Name" element (name)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 80
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Order" element (order)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is column is mandatory.
         */
        order: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "Translated Text" (translated_text)
         * Maximum length: 1000
         */
        short_description: GlideElement;
        
        /**
         * "Service portfolio" element (spm_service_portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        spm_service_portfolio: $$GlideElement.spm_service_portfolio;
    }

    /**
     * "Virtualization Server" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface cmdb_ci_virtualization_server extends cmdb_ci_server {
    }

    /**
     * "Time Sheet Policy" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface time_sheet_policy extends IBaseRecord {
        /**
         * "Allow blank time cards" element (allow_blank_time_cards)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_blank_time_cards: GlideElement;
        
        /**
         * "Allow multiple rate types" element (allow_multiple_rate_types)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        allow_multiple_rate_types: GlideElement;
        
        /**
         * "Allow recall" element (allow_recall)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        allow_recall: GlideElement;
        
        /**
         * "Auto create time card on planned task update" element (auto_create_on_task_update)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        auto_create_on_task_update: GlideElement;
        
        /**
         * "Auto fill time card with time worked entries" element (auto_fill_from_time_worked)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        auto_fill_from_time_worked: GlideElement;
        
        /**
         * "Auto create time cards every week" element (auto_generate_time_cards)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        auto_generate_time_cards: GlideElement;
        
        /**
         * "Default rate type" element (default_rate_type)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        default_rate_type: $$GlideElement.rate_type;
        
        /**
         * "Default Policy" element (is_default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         * This is a read-only column.
         */
        is_default: GlideElement;
        
        /**
         * "Maximum hours per day" element (max_hours_per_day)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "24"
         */
        max_hours_per_day: GlideElement;
        
        /**
         * "Maximum hours per week" element (max_hours_per_week)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "40"
         */
        max_hours_per_week: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Non-project time approver" element (non_project_time_approver)
         * Type: "String" (string)
         * Maximum length: 40
         */
        non_project_time_approver: GlideElement;
        
        /**
         * "Project time approver" element (project_time_approver)
         * Type: "String" (string)
         * Maximum length: 40
         */
        project_time_approver: GlideElement;
        
        /**
         * "Recall period allowed (days)" element (recall_period_allowed)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "30"
         */
        recall_period_allowed: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_overrides: $$GlideElement.time_sheet_policy;
        
        /**
         * "Update actual hours and cost in resource plan/reports" element (update_resource_plan)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        update_resource_plan: GlideElement;
        
        /**
         * "Week starts on" element (week_starts_on)
         * Type: "Day of Week" (day_of_week)
         * Maximum length: 40
         * Default value: "7"
         */
        week_starts_on: GlideElement;
    }

    /**
     * "Asset Task" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface asset_task extends task {
        /**
         * "Asset" element (asset)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        asset: $$GlideElement.alm_asset;
        
        /**
         * "Model" element (model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        model: $$GlideElement.cmdb_model;
        
        /**
         * "Quantity" element (quantity)
         * Type: "Integer" (integer)
         * Maximum length: 40
         */
        quantity: GlideElement;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Stockroom" element (stockroom)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        stockroom: $$GlideElement.alm_stockroom;
        
        /**
         * "Task name" element (task_name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        task_name: GlideElement;
    }

    /**
     * "Purchase Order" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface proc_po extends IBaseRecord {
        /**
         * "Asset operation" element (asset_operation)
         * Type: "String" (string)
         * Maximum length: 20
         */
        asset_operation: GlideElement;
        
        /**
         * "Assigned to" element (assigned_to)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        assigned_to: $$GlideElement.sys_user;
        
        /**
         * "Bill to" element (bill_to)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        bill_to: $$GlideElement.cmn_location;
        
        /**
         * "Budget number" element (budget_number)
         * Type: "String" (string)
         * Maximum length: 40
         */
        budget_number: GlideElement;
        
        /**
         * "Contract" element (contract)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        contract: $$GlideElement.ast_contract;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Due by" element (due_by)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        due_by: GlideElementGlideObject;
        
        /**
         * "Expected delivery" element (expected_delivery)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        expected_delivery: GlideElementGlideObject;
        
        /**
         * "Initial request" element (init_request)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        init_request: $$GlideElement.sc_request;
        
        /**
         * "Location" element (location)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        location: $$GlideElement.cmn_location;
        
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Ordered" element (ordered)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        ordered: GlideElementGlideObject;
        
        /**
         * "PO date" element (po_date)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        po_date: GlideElementGlideObject;
        
        /**
         * "Received" element (received)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        received: GlideElementGlideObject;
        
        /**
         * "Requested" element (requested)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        requested: GlideElementGlideObject;
        
        /**
         * "Requested by" element (requested_by)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_by: $$GlideElement.sys_user;
        
        /**
         * "Requested for" element (requested_for)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        requested_for: $$GlideElement.sys_user;
        
        /**
         * "Ship rate" element (ship_rate)
         * Type: "Currency" (currency)
         * Maximum length: 20
         */
        ship_rate: GlideElement;
        
        /**
         * "Ship to" element (ship_to)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        ship_to: $$GlideElement.alm_stockroom;
        
        /**
         * "Shipping" element (shipping)
         * Type: "String" (string)
         * Maximum length: 40
         */
        shipping: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 100
         */
        short_description: GlideElement;
        
        /**
         * "Status" element (status)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "requested"
         * This is a read-only column.
         */
        status: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Terms" element (terms)
         * Type: "String" (string)
         * Maximum length: 40
         */
        terms: GlideElement;
        
        /**
         * "Total cost" element (total_cost)
         * Type: "Currency" (currency)
         * Maximum length: 20
         * Default value: "0"
         * This is a read-only column.
         */
        total_cost: GlideElement;
        
        /**
         * "Vendor" element (vendor)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        vendor: $$GlideElement.core_company;
        
        /**
         * "Vendor account" element (vendor_account)
         * Type: "String" (string)
         * Maximum length: 40
         */
        vendor_account: GlideElement;
        
        /**
         * "Contract number" element (vendor_contract)
         * Type: "String" (string)
         * Maximum length: 40
         */
        vendor_contract: GlideElement;
    }

    /**
     * "Receiving Slip" glide record fields.
     * Auto-number prefix: RCS
     * Scope: Global (global) - Global application scope
     */
    export interface proc_rec_slip extends IBaseRecord {
        /**
         * "Number" element (number)
         * Type: "String" (string)
         * Maximum length: 40
         * This is a read-only column.
         */
        number: GlideElement;
        
        /**
         * "Purchase Order" element (purchase_order)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        purchase_order: $$GlideElement.proc_po;
        
        /**
         * "Received" element (received)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         * This is a read-only column.
         */
        received: GlideElementGlideObject;
        
        /**
         * "Receiving stockroom" element (stockroom)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        stockroom: $$GlideElement.alm_stockroom;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "Goal" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface goal extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Actual achievement till date" element (actual_achievement_till_date)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        actual_achievement_till_date: GlideElement;
        
        /**
         * "Comments" element (comments)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        comments: GlideElement;
        
        /**
         * "Direction" element (direction)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        direction: GlideElement;
        
        /**
         * "Planned achievement" element (estimated_achievement)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        estimated_achievement: GlideElement;
        
        /**
         * "Goal Indicator" element (goal_indicator)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        goal_indicator: GlideElement;
        
        /**
         * "Owner" element (goal_owner)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        goal_owner: $$GlideElement.sys_user;
        
        /**
         * "Portfolio" element (portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        portfolio: $$GlideElement.pm_portfolio;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 80
         */
        short_description: GlideElement;
        
        /**
         * "State" element (state)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "pending"
         */
        state: GlideElement;
        
        /**
         * "Status indicator" element (status_indicator)
         * Type: "Choice" (choice)
         * Maximum length: 40
         */
        status_indicator: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Target" element (target_value)
         * Type: "Floating Point Number" (float)
         * Maximum length: 40
         */
        target_value: GlideElement;
        
        /**
         * "Task" element (task)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        task: $$GlideElement.task;
        
        /**
         * "Unit" element (unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        unit: $$GlideElement.pa_units;
    }

    /**
     * "Idea" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface im_idea_core extends task {
        /**
         * "Duplicate" element (duplicate)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        duplicate: $$GlideElement.im_idea_core;
        
        /**
         * "Idea Description" element (idea_description)
         * Type: "HTML" (html)
         * Maximum length: 8000
         */
        idea_description: GlideElement;
        
        /**
         * "Marked for delete" element (marked_for_delete)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        marked_for_delete: GlideElement;
        
        /**
         * "Model ID" element (model_id)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        model_id: $$GlideElement.cmdb_model;
        
        /**
         * "Module" element (module)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        module: $$GlideElement.im_module;
        
        /**
         * "Recent activity on" element (recent_activity_on)
         * Type: "Date/Time" (glide_date_time)
         * Maximum length: 40
         */
        recent_activity_on: GlideElementGlideObject;
        
        /**
         * "Score" element (score)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        score: GlideElement;
        
        /**
         * "Software Model" element (software_model)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        software_model: $$GlideElement.cmdb_software_product_model;
        
        /**
         * "Submitted by" element (submitter)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        submitter: $$GlideElement.sys_user;
        
        /**
         * "Task" element (task)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        task: $$GlideElement.task;
        
        /**
         * "Views" element (view_count)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "0"
         * This is a read-only column.
         */
        view_count: GlideElement;
    }

    /**
     * "Idea" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface idea extends im_idea_core {
        /**
         * "Business Applications" element (business_applications)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_applications: GlideElementGlideObject;
        
        /**
         * "Business Capabilities" element (business_capabilities)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        business_capabilities: GlideElementGlideObject;
        
        /**
         * "Description" element (business_case)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        business_case: GlideElement;
        
        /**
         * "Business Unit" element (business_unit)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        business_unit: $$GlideElement.business_unit;
        
        /**
         * "Collaborators" element (collaborators)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        collaborators: GlideElementGlideObject;
        
        /**
         * "Demand" element (demand)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        demand: $$GlideElement.dmn_demand;
        
        /**
         * "Demand" element (demand_composite)
         * Type: "Composite Field" (composite_field)
         * Maximum length: 300
         */
        demand_composite: GlideElement;
        
        /**
         * "Department" element (department)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        department: $$GlideElement.cmn_department;
        
        /**
         * "Idea" element (idea)
         * Type: "Composite Field" (composite_field)
         * Maximum length: 300
         */
        idea: GlideElement;
        
        /**
         * "Impacted Business Units" element (impacted_business_units)
         * Type: "List" (glide_list)
         * Maximum length: 4000
         */
        impacted_business_units: GlideElementGlideObject;
        
        /**
         * "Portfolio" element (portfolio)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        portfolio: $$GlideElement.pm_portfolio;
    }

    /**
     * "Rate Model" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rate_model extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Currency" element (currency)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        currency: $$GlideElement.fx_currency;
        
        /**
         * "Description" element (description)
         * Type: "Wide Text" (wide_text)
         * Maximum length: 250
         */
        description: GlideElement;
        
        /**
         * "Default" element (is_default)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         */
        is_default: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Rate model context" element (rate_model_transaction_entity)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is a read-only column.
         */
        rate_model_transaction_entity: $$GlideElement.rate_model_transaction_entity;
        
        /**
         * "Rate type" element (rate_type)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "false"
         */
        rate_type: GlideElement;
    }

    /**
     * "Rate Type" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rate_type extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 4000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_overrides: $$GlideElement.rate_type;
    }

    /**
     * "Unit" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface pa_units extends sys_metadata {
        /**
         * "Format" element (format)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         */
        format: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "Translated Field" (translated_field)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         * This is a read-only column.
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Domain Path" element (sys_domain_path)
         * Type: "Domain Path" (domain_path)
         * Maximum length: 255
         * Default value: "/"
         */
        sys_domain_path: GlideElement;
        
        /**
         * "Overrides" element (sys_overrides)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        sys_overrides: $$GlideElement.pa_units;
    }

    /**
     * "Idea module" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface im_module extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Category Limit" element (category_limit)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * Default value: "5"
         */
        category_limit: GlideElement;
        
        /**
         * "Enable downvote" element (enable_downvote)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        enable_downvote: GlideElement;
        
        /**
         * "Module Id" element (id)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        id: GlideElement;
        
        /**
         * "Idea table" element (idea_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        idea_table: GlideElement;
        
        /**
         * "Module name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Similar ideas solution definition" element (solution_def)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        solution_def: $$GlideElement.ml_capability_definition_similarity;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
    }

    /**
     * "Currency" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface fx_currency extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Code" element (code)
         * Type: "String" (string)
         * Maximum length: 40
         */
        code: GlideElement;
        
        /**
         * "Description" element (description)
         * Type: "String" (string)
         * Maximum length: 1000
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         */
        name: GlideElement;
        
        /**
         * "Symbol" element (symbol)
         * Type: "String" (string)
         * Maximum length: 40
         */
        symbol: GlideElement;
    }

    /**
     * "Rate Model Context" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface rate_model_transaction_entity extends IBaseRecord {
        /**
         * "Description" element (description)
         * Type: "Wide Text" (wide_text)
         * Maximum length: 250
         */
        description: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Context code" element (transaction_entity_code)
         * Type: "String" (string)
         * Maximum length: 40
         * This is column is mandatory.
         */
        transaction_entity_code: GlideElement;
        
        /**
         * "Write roles" element (write_roles)
         * Type: "User Roles" (user_roles)
         * Maximum length: 255
         */
        write_roles: GlideElement;
    }

    /**
     * "Solution Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ml_capability_definition_base extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Capability" element (capability)
         * Type: "Reference" (reference)
         * Maximum length: 32
         */
        capability: $$GlideElement.ml_capability;
        
        /**
         * "Current Solution Version" element (current_solution_version)
         * Type: "Integer" (integer)
         * Maximum length: 40
         * This is a read-only column.
         */
        current_solution_version: GlideElement;
        
        /**
         * "Processing Language" element (dataset_language)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "en"
         */
        dataset_language: GlideElement;
        
        /**
         * "Fields" element (fields)
         * Type: "Field List" (field_list)
         * Maximum length: 4000
         * This is column is mandatory.
         */
        fields: GlideElement;
        
        /**
         * "Filter" element (filter)
         * Type: "Conditions" (conditions)
         * Maximum length: 4000
         */
        filter: GlideElement;
        
        /**
         * "Request Source" element (request_source)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "ui"
         * This is a read-only column.
         */
        request_source: GlideElement;
        
        /**
         * "Label" element (solution_label)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        solution_label: GlideElement;
        
        /**
         * "Name" element (solution_name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is a read-only column.
         */
        solution_name: GlideElement;
        
        /**
         * "Solution Parameters" element (solution_parameters)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         */
        solution_parameters: GlideElementGlideObject;
        
        /**
         * "Solution Properties" element (solution_properties)
         * Type: "String" (string)
         * Maximum length: 16777215
         * This is a read-only column.
         */
        solution_properties: GlideElement;
        
        /**
         * "Stopwords" element (stopwords)
         * Type: "List" (glide_list)
         * Maximum length: 1024
         * Default value: "Default English Stopwords"
         * This is column is mandatory.
         */
        stopwords: GlideElementGlideObject;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Table" element (table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        table: GlideElement;
        
        /**
         * "Training Frequency" element (training_frequency)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "every_30_days"
         */
        training_frequency: GlideElement;
        
        /**
         * "Triggered Source" element (triggered_source)
         * Type: "String" (string)
         * Maximum length: 40
         * Default value: "API"
         * This is a read-only column.
         */
        triggered_source: GlideElement;
        
        /**
         * "Word Corpus" element (word_vector_corpus)
         * Type: "Reference" (reference)
         * Maximum length: 32
         * This is column is mandatory.
         */
        word_vector_corpus: $$GlideElement.ml_word_vector_corpus;
    }

    /**
     * "Similarity Definition" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ml_capability_definition_similarity extends ml_capability_definition_base {
        /**
         * "Test Fields" element (test_fields)
         * Type: "Field List" (field_list)
         * Maximum length: 4000
         * This is column is mandatory.
         */
        test_fields: GlideElement;
        
        /**
         * "Test Table" element (test_table)
         * Type: "Table Name" (table_name)
         * Maximum length: 80
         * This is column is mandatory.
         */
        test_table: GlideElement;
        
        /**
         * "Similarity Score Threshold" element (threshold)
         * Type: "Decimal" (decimal)
         * Maximum length: 15
         * Default value: "80"
         */
        threshold: GlideElement;
        
        /**
         * "Update Frequency" element (update_frequency)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "do_not_update"
         */
        update_frequency: GlideElement;
    }

    /**
     * "Ml Capability" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ml_capability extends sys_metadata {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Label" element (label)
         * Type: "String" (string)
         * Maximum length: 255
         */
        label: GlideElement;
        
        /**
         * "Value" element (value)
         * Type: "String" (string)
         * Maximum length: 255
         */
        value: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        version: GlideElement;
    }

    /**
     * "Word corpus" glide record fields.
     * Scope: Global (global) - Global application scope
     */
    export interface ml_word_vector_corpus extends IBaseRecord {
        /**
         * "Active" element (active)
         * Type: "True/False" (boolean)
         * Maximum length: 40
         * Default value: "true"
         */
        active: GlideElement;
        
        /**
         * "Name" element (name)
         * Type: "String" (string)
         * Maximum length: 255
         * This is column is mandatory.
         */
        name: GlideElement;
        
        /**
         * "Request Source" element (request_source)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "ui"
         * This is a read-only column.
         */
        request_source: GlideElement;
        
        /**
         * "Short description" element (short_description)
         * Type: "String" (string)
         * Maximum length: 160
         */
        short_description: GlideElement;
        
        /**
         * "Domain" element (sys_domain)
         * Type: "Domain ID" (domain_id)
         * Maximum length: 32
         * Default value: "global"
         */
        sys_domain: GlideElementReference;
        
        /**
         * "Type" element (type)
         * Type: "Choice" (choice)
         * Maximum length: 40
         * Default value: "paravec"
         */
        type: GlideElement;
        
        /**
         * "Version" element (version)
         * Type: "String" (string)
         * Maximum length: 40
         */
        version: GlideElement;
    }
    
    // #endregion
}
