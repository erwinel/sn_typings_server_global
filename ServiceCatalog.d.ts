/// <reference path="DictionaryBase.d.ts" />

/**
 * GlideElement values from the Category table.
 * @interface sc_categoryFields
 * @extends {sys_metadataFields}
 */
declare interface sc_categoryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_categoryFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Header icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    header_icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    homepage_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage renderer
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sc_homepage_renderer (Homepage Category Renderer)
     */
    homepage_renderer: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Hide description (mobile browsing)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    mobile_hide_description: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Mobile Subcategory Render Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("list" | "card")>>}
     * @memberof sc_categoryFields
     * @description "list"=""; "card"=""
     */
    mobile_subcategory_render_type: $$rhino.Nilable<$$property.generic.Element<("list" | "card")>>;

    /**
     * Module link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sys_app_module (Module)
     */
    module: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_categoryFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_categoryFields, sc_categoryGlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sc_category (Category)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<sc_categoryFields, sc_categoryGlideRecord>>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>;

    /**
     * Show in CMS
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    show_in_cms: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    title: $$rhino.Nilable<$$property.TranslatedText>;
}
declare type sc_categoryGlideRecord = sys_metadataGlideRecord & sc_categoryFields;

/**
 * GlideElement values from the Catalog table.
 * @interface sc_catalogFields
 * @extends {sys_metadataFields}
 */
declare interface sc_catalogFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Background Color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "color"
     */
    background_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_catalogFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * 'Continue Shopping' page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_continue_shopping: $$rhino.Nilable<$$property.Element>;

    /**
     * 'Catalog Home' Page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_home_page: $$rhino.Nilable<$$property.Element>;

    /**
     * Desktop image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_catalogFields
     */
    desktop_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Editors
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "glide_list"
     */
    editors: $$rhino.Nilable<IGlideElement>;

    /**
     * Enable Wish List
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    enable_wish_list: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Manager
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof sc_catalogFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedField>}
     * @memberof sc_catalogFields
     */
    title: $$rhino.Nilable<$$property.TranslatedField>;
}
declare type sc_catalogGlideRecord = sys_metadataGlideRecord & sc_catalogFields;

/**
 * GlideElement values from the Catalog Item table.
 * @interface sc_cat_itemFields
 * @extends {sys_metadataFields}
 */
declare interface sc_cat_itemFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Availability
     * @type {$$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>}
     * @memberof sc_cat_itemFields
     * @description "on_both"=""; "on_desktop"=""; "on_mobile"=""
     */
    availability: $$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_categoryFields, sc_categoryGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_category (Category)
     */
    category: $$rhino.Nilable<$$property.generic.Reference<sc_categoryFields, sc_categoryGlideRecord>>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "decimal"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cart
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_ui_macro (Macro)
     */
    custom_cart: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Execution Plan
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_cat_item_delivery_plan (Execution Plan)
     */
    delivery_plan: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Delivery plan script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    delivery_plan_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Delivery time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_duration"
     */
    delivery_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof sc_cat_itemFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Fulfillment group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_user_group (Group)
     */
    group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Hide on Service Portal
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    hide_sp: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Ignore price
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    ignore_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * List Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_cat_itemFields
     */
    list_price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Meta
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_cat_itemFields
     */
    meta: $$rhino.Nilable<$$property.Element>;

    /**
     * Hide price (mobile listings)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    mobile_hide_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     *  Mobile Picture Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>}
     * @memberof sc_cat_itemFields
     * @description "use_desktop_picture"=""; "use_mobile_picture"=""; "use_no_picture"=""
     */
    mobile_picture_type: $$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>;

    /**
     * Model
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    name: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * No cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_cart: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order now
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order_now: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No proceed checkout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_proceed_checkout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No quantity
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_quantity: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No search
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_search: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Omit price in cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    omit_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Ordered item link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ordered_item_link (Ordered Item Link)
     */
    ordered_item_link: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Preview link
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "catalog_preview"
     */
    preview: $$rhino.Nilable<IGlideElement>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>}
     * @memberof sc_cat_itemFields
     * @description "daily"=""; "weekly"=""; "weekly2"=""; "monthly"=""; "monthly2"=""; "quarterly"=""; "semiannual"=""; "yearly"=""
     */
    recurring_frequency: $$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>;

    /**
     * Recurring price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalogs
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_list"
     */
    sc_catalogs: $$rhino.Nilable<IGlideElement>;

    /**
     * Created from item design
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ic_item_staging (Item)
     */
    sc_ic_item_staging: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Published version
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    sc_ic_version: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    short_description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Expand help for all questions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    show_variable_help_on_load: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Start closed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    start_closed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Template
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_template (Template)
     */
    template: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>}
     * @memberof sc_cat_itemFields
     * @description "item"=""; "task"=""; "bundle"=""; "template"=""; "package"=""
     */
    type: $$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>;

    /**
     * Use cart layout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    use_sc_layout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Visible on Bundles
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible on Guides
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_guide: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible elsewhere
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_standalone: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Workflow
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to wf_workflow (Workflow)
     */
    workflow: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;
}
declare type sc_cat_itemGlideRecord = sys_metadataGlideRecord & sc_cat_itemFields;

/**
 * GlideElement values from the Request table.
 * @interface sc_requestFields
 * @extends {taskFields}
 */
declare interface sc_requestFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_requestFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Delivery address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    delivery_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_requestFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Requested for date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_requestFields
     * @description Internal type is "glide_date"
     */
    requested_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Requested for
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof sc_requestFields
     * @description Refers to sys_user (User)
     */
    requested_for: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Request state
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    request_state: $$rhino.Nilable<$$property.Element>;

    /**
     * Sourceable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourceable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Special instructions
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    special_instructions: $$rhino.Nilable<$$property.Element>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_requestFields
     */
    stage: $$rhino.Nilable<GlideElementWorkflow>;
}
declare type sc_requestGlideRecord = taskGlideRecord & sc_requestFields;

/**
 * GlideElement values from the Requested Item table.
 * @interface sc_req_itemFields
 * @extends {taskFields}
 */
declare interface sc_req_itemFields extends taskFields {
    /**
     * Backordered
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    backordered: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Item
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    cat_item: $$rhino.Nilable<$$property.generic.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>>;

    /**
     * Configuration item
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    configuration_item: $$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>;

    /**
     * Context
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to wf_context (Workflow context)
     */
    context: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Estimated delivery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_req_itemFields
     */
    estimated_delivery: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Order Guide
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item_guide (Order guide)
     */
    order_guide: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_req_itemFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Quantity Sourced
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity_sourced: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Received
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    received: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_req_itemFields
     * @description Internal type is "choice"
     */
    recurring_frequency: $$rhino.Nilable<IGlideElement>;

    /**
     * Recurring Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_req_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Request
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_requestFields, sc_requestGlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<$$property.generic.Reference<sc_requestFields, sc_requestGlideRecord>>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_req_itemFields
     */
    stage: $$rhino.Nilable<GlideElementWorkflow>;
}
declare type sc_req_itemGlideRecord = taskGlideRecord & sc_req_itemFields;

/**
 * GlideElement values from the Catalog Task table.
 * @interface sc_taskFields
 * @extends {taskFields}
 */
declare interface sc_taskFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_taskFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Request
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_requestFields, sc_requestGlideRecord>>}
     * @memberof sc_taskFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<$$property.generic.Reference<sc_requestFields, sc_requestGlideRecord>>;

    /**
     * Request item
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_req_itemFields, sc_req_itemGlideRecord>>}
     * @memberof sc_taskFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_item: $$rhino.Nilable<$$property.generic.Reference<sc_req_itemFields, sc_req_itemGlideRecord>>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>}
     * @memberof sc_taskFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<$$property.generic.Reference<sc_catalogFields, sc_catalogGlideRecord>>;
}
declare type sc_taskGlideRecord = taskGlideRecord & sc_taskFields;

/**
 * GlideElement values from the Service Offering table.
 * @interface service_offeringFields
 * @extends {cmdb_ci_serviceFields}
 */
declare interface service_offeringFields extends cmdb_ci_serviceFields {
    /**
     * Billing
     * @type {$$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>}
     * @memberof service_offeringFields
     * @description "monthly"=""; "weekly"=""; "yearly"=""
     */
    billing: $$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof service_offeringFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof service_offeringFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof service_offeringFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Technical contact
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof service_offeringFields
     * @description Refers to sys_user (User)
     */
    technical_contact: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;
}
declare type service_offeringGlideRecord = cmdb_ci_serviceGlideRecord & service_offeringFields;