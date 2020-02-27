/// <reference path="DictionaryBase.d.ts" />

/**
 * GlideElement values from the Model Category table.
 * @interface cmdb_model_categoryFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_model_categoryFields extends IGlideTableProperties {
    /**
     * Allow as master
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_as_master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow in bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_in_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow pre-allocation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_pre_allocation: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    asset_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Enforce CI verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    enforce_verification: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     */
    name: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_model_categoryGlideRecord = GlideRecord & cmdb_model_categoryFields;

/**
 * GlideElement values from the Model Component table.
 * @interface cmdb_m2m_model_componentFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_m2m_model_componentFields extends IGlideTableProperties {
    /**
     * Component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    child: $$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>;

    /**
     * Is main component
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_m2m_model_componentFields
     */
    master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Model category of component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>;
}
declare type cmdb_m2m_model_componentGlideRecord = GlideRecord & cmdb_m2m_model_componentFields;

/**
 * GlideElement values from the Product Model table.
 * @interface cmdb_modelFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_modelFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>}
     * @memberof cmdb_modelFields
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>;

    /**
     * Asset tracking strategy
     * @type {$$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>}
     * @memberof cmdb_modelFields
     * @description "leave_to_category"=""; "track_as_consumable"=""; "do_not_track"=""
     */
    asset_tracking_strategy: $$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>;

    /**
     * Barcode
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    barcode: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Certified
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    certified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CMDB CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Model categories
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof cmdb_modelFields
     * @description Internal type is "glide_list"
     */
    cmdb_model_category: $$rhino.Nilable<IGlideElement>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof cmdb_modelFields
     */
    cost: $$rhino.Nilable<$$property.Price>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_modelFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof cmdb_modelFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * Flow Rate (cfm)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    flow_rate: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Full name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    full_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Main component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_m2m_model_component (Model Component)
     */
    main_component: $$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Owner
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to sys_user (User)
     */
    owner: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof cmdb_modelFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Power (watts)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    power_consumption: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Product Catalog Item
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    product_catalog_item: $$rhino.Nilable<$$property.generic.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>>;

    /**
     * Height (U)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    rack_units: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof cmdb_modelFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    sla: $$rhino.Nilable<$$property.Element>;

    /**
     * Sound Power (bels)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    sound_power: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>}
     * @memberof cmdb_modelFields
     */
    status: $$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>}
     * @memberof cmdb_modelFields
     */
    type: $$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>;

    /**
     * Weight (lbs)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    weight: $$rhino.Nilable<$$property.Numeric>;
}
declare type cmdb_modelGlideRecord = GlideRecord & cmdb_modelFields;

/**
 * GlideElement values from the Asset table.
 * @interface alm_assetFields
 * @extends {IGlideTableProperties}
 */
declare interface alm_assetFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>}
     * @memberof alm_assetFields
     * @description "purchase"=""; "lease"=""; "rental"=""; "loan"=""
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>;

    /**
     * Active transfer order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    active_to: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Beneficiary
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    beneficiary: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Configuration Item
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    ci: $$rhino.Nilable<$$property.generic.Reference<cmdb_ciFields, cmdb_ciGlideRecord>>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    cost: $$rhino.Nilable<$$property.Currency>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * Depreciated amount
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    depreciated_amount: $$rhino.Nilable<$$property.Currency>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Depreciation effective date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    depreciation_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Disposal reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    disposal_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>}
     * @memberof alm_assetFields
     */
    due_in: $$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof alm_assetFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>}
     * @memberof alm_assetFields
     * @description "2"=""; "6"=""; "9"=""; "1"=""; "10"=""; "3"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>}
     * @memberof alm_assetFields
     */
    justification: $$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Model
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>;

    /**
     * Model category
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Old status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_status: $$rhino.Nilable<$$property.Element>;

    /**
     * Old substatus
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_substatus: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_asset (Asset)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Pre-allocated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    pre_allocated: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Purchase order line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_po_item (Purchase order line items)
     */
    purchase_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof alm_assetFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Receiving line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_rec_slip_item (Receiving Slip Line)
     */
    receiving_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Request line
     * @type {$$rhino.Nilable<$$property.generic.Reference<sc_req_itemFields, sc_req_itemGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_line: $$rhino.Nilable<$$property.generic.Reference<sc_req_itemFields, sc_req_itemGlideRecord>>;

    /**
     * Resale price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof alm_assetFields
     */
    resale_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Reserved for
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    reserved_for: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Residual value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    residual: $$rhino.Nilable<$$property.Currency>;

    /**
     * Residual date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    residual_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Retired date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retired: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Scheduled retirement
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retirement_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stockroom
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_stockroom (Stockroom)
     */
    stockroom: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Substate
     * @type {$$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>}
     * @memberof alm_assetFields
     * @description "available"=""; "disposed"=""; "lost"=""; "reserved"=""; "sold"=""; "stolen"=""; "defective"=""; "donated"=""; "pending_repair"=""; "vendor_credit"=""; "pending_install"=""; "pending_disposal"=""; "pending_transfer"=""; "pre_allocated"=""
     */
    substatus: $$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Support group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof alm_assetFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof alm_assetFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof alm_assetFields
     * @description Internal type is "journal_input"
     */
    work_notes: $$rhino.Nilable<IGlideElement>;
}
declare type alm_assetGlideRecord = GlideRecord & alm_assetFields;

/**
 * GlideElement values from the Base Configuration Item table.
 * @interface cmdbFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface cmdbFields extends IExtendedGlideTableProperties {
    /**
     * Asset
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to alm_asset (Asset)
     */
    asset: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Assignment group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Company
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdbFields
     * @description Internal type is "float"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cost currency
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    cost_cc: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<$$property.generic.Reference<cmn_departmentFields, cmn_departmentGlideRecord>>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    due_in: $$rhino.Nilable<$$property.Element>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>}
     * @memberof cmdbFields
     * @description "100"=""; "3"=""; "6"=""; "1"=""; "2"=""; "4"=""; "5"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<$$property.generic.Reference<cmn_locationFields, cmn_locationGlideRecord>>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Model ID
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmdb_model (Product Model)
     */
    model_id: $$rhino.Nilable<$$property.generic.Reference<cmdb_modelFields, cmdb_modelGlideRecord>>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<$$property.generic.Reference<sys_userFields, sys_userGlideRecord>>;

    /**
     * Support group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof cmdbFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "sys_class_path"
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof cmdbFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    unverified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<$$property.generic.Reference<core_companyFields, core_companyGlideRecord>>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;
}
declare type cmdbGlideRecord = GlideRecord & cmdbFields;

/**
 * GlideElement values from the Configuration Item table.
 * @interface cmdb_ciFields
 * @extends {cmdbFields}
 */
declare interface cmdb_ciFields extends cmdbFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Can Print
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    can_print: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Approval group
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof cmdb_ciFields
     * @description Refers to sys_user_group (Group)
     */
    change_control: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Correlation ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    correlation_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Discovery source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    discovery_source: $$rhino.Nilable<$$property.Element>;

    /**
     * DNS Domain
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    dns_domain: $$rhino.Nilable<$$property.Element>;

    /**
     * Fault count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_ciFields
     */
    fault_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * First discovered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    first_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Fully qualified domain name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    fqdn: $$rhino.Nilable<$$property.Element>;

    /**
     * IP Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    ip_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Most recent discovery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    last_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * MAC Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    mac_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Maintenance schedule
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    maintenance_schedule: $$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Monitor
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    monitor: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Operational status
     * @type {$$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>}
     * @memberof cmdb_ciFields
     * @description "1"=""; "2"=""; "3"=""; "4"=""; "5"=""; "6"=""
     */
    operational_status: $$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>;

    /**
     * Schedule
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: $$rhino.Nilable<$$property.generic.Reference<cmn_scheduleFields, cmn_scheduleGlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ciGlideRecord = cmdbGlideRecord & cmdb_ciFields;

/**
 * GlideElement values from the Business Service table.
 * @interface cmdb_ci_serviceFields
 * @extends {cmdb_ciFields}
 */
declare interface cmdb_ci_serviceFields extends cmdb_ciFields {
    /**
     * Business Criticality
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>}
     * @memberof cmdb_ci_serviceFields
     */
    busines_criticality: $$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to cmdb_ci_service (Business Service)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>>;

    /**
     * Portfolio status
     * @type {$$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "pipeline"=""; "catalog"=""; "retired"=""
     */
    portfolio_status: $$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>;

    /**
     * Price model
     * @type {$$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "fixed"=""; "per_unit"=""
     */
    price_model: $$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>;

    /**
     * Price unit
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    price_unit: $$rhino.Nilable<$$property.Element>;

    /**
     * Service classification
     * @type {$$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>}
     * @memberof cmdb_ci_serviceFields
     */
    service_classification: $$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>;

    /**
     * Service level requirement
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_ci_serviceFields
     */
    service_level_requirement: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Service status
     * @type {$$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "design"=""; "requirements"=""; "definition"=""; "development"=""; "analysis"=""; "buildtestrelease"=""; "approved"=""; "operational"=""; "chartered"=""; "retiring"=""
     */
    service_status: $$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sla (Agreement)
     */
    sla: $$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>;

    /**
     * Unit description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     * @description Internal type is "html"
     */
    unit_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Used for
     * @type {$$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>}
     * @memberof cmdb_ci_serviceFields
     */
    used_for: $$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>;

    /**
     * Users supported
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sys_user_group (Group)
     */
    user_group: $$rhino.Nilable<$$property.generic.Reference<sys_user_groupFields, sys_user_groupGlideRecord>>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ci_serviceGlideRecord = cmdb_ciGlideRecord & cmdb_ci_serviceFields;