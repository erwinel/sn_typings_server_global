"use strict";
/// <reference path="../types/index.d.ts" />
/**
 * GlideRecord
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_to_update_set;
(function (add_to_update_set) {
    (function () {
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        var sys_id = gs.getPreference('sys_update_set');
        var gr = new GlideRecord('sys_update_set');
        gr.get(sys_id);
        gs.addInfoMessage('Record included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set.');
        action.setRedirectURL(current);
    })();
})(add_to_update_set || (add_to_update_set = {}));
/**
 * sc_cat_item
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_sc_cat_item_to_update_set;
(function (add_sc_cat_item_to_update_set) {
    (function () {
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        function refToHtml(el) {
            var label = el.getLabel();
            var html = el.getHTMLValue();
            return ((typeof label === 'string' && label.length > 0) ? label : el.getReferenceTable()) + ': <a href="' + el.getRefRecord().getLink() + '">' +
                ((typeof html === 'string' && html.trim().length > 0) ? html : el) + '</a>';
        }
        var notIncluded = [];
        var sys_id = current.getValue('sys_id');
        var gr = new GlideRecord('io_set_item');
        gr.addQuery('sc_cat_item', sys_id);
        gr.addNotNullQuery('variable_set');
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            notIncluded.push(refToHtml(gr.variable_set));
        }
        var vsCount = notIncluded.length;
        gr = new GlideRecord('sc_cat_item_catalog');
        gr.addQuery('sc_cat_item', sys_id);
        gr.addNotNullQuery('sc_catalog');
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            notIncluded.push(refToHtml(gr.sc_catalog));
        }
        var cCount = notIncluded.length - vsCount;
        gr = new GlideRecord('sc_cat_item_category');
        gr.addQuery('sc_cat_item', sys_id);
        gr.addNotNullQuery('sc_category');
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            notIncluded.push(refToHtml(gr.sc_category));
        }
        var count = notIncluded.length - (vsCount + cCount);
        function checkRelatedRecord(el) {
            el.getRefRecord().getLink();
            if (!gs.nil(el))
                notIncluded.push(refToHtml(el));
        }
        checkRelatedRecord(current.custom_cart);
        checkRelatedRecord(current.delivery_plan);
        checkRelatedRecord(current.flow_designer_flow);
        checkRelatedRecord(current.group);
        checkRelatedRecord(current.location);
        checkRelatedRecord(current.model);
        checkRelatedRecord(current.ordered_item_link);
        checkRelatedRecord(current.sc_template);
        checkRelatedRecord(current.taxonomy_topic);
        checkRelatedRecord(current.template);
        checkRelatedRecord(current.workflow);
        gr = new GlideRecord('sys_update_set');
        sys_id = gs.getPreference('sys_update_set');
        gr.get(sys_id);
        if (notIncluded.length > 0)
            gs.addInfoMessage('Record included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set, including ' + vsCount + " variable set, " + cCount + " catalog and " + count + " category relationship(s); Related records NOT included:<ul><li>" + notIncluded.join("</li></li>") + "</ul>");
        else
            gs.addInfoMessage('Record included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + "</a> update set, including " + vsCount + " variable set, " + cCount + " catalog and " + count + " category relationship(s).");
        action.setRedirectURL(current);
    })();
})(add_sc_cat_item_to_update_set || (add_sc_cat_item_to_update_set = {}));
/**
 * sys_portal_page
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_sys_portal_page_to_update_set;
(function (add_sys_portal_page_to_update_set) {
    (function () {
        function getDisplayValue(g) {
            try {
                var d = g.getDisplayValue().trim();
                if (d.length > 0)
                    return g.getTableName() + ' (' + g.getDisplayValue() + ')';
            }
            catch (e) { }
            return g.getTableName() + '[' + g.getUniqueValue() + ']';
        }
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        var sys_id = current.getValue('sys_id');
        var gr = new GlideRecord('sys_portal');
        gr.addQuery('page', sys_id);
        gr.query();
        var displayValues = [getDisplayValue(current)];
        while (gr.next()) {
            um.saveRecord(gr);
            displayValues.push(getDisplayValue(gr));
            var id = gr.getValue('sys_id');
            var g = new GlideRecord('sys_portal_preferences');
            g.addQuery('portal_section', id);
            g.query();
            while (g.next()) {
                um.saveRecord(g);
                displayValues.push(getDisplayValue(g));
            }
        }
        sys_id = gs.getPreference('sys_update_set');
        gr = new GlideRecord('sys_update_set');
        gr.get(sys_id);
        gs.addInfoMessage(displayValues.length + ' record(s) included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set: ' + displayValues.join("\n"));
        action.setRedirectURL(current);
    })();
})(add_sys_portal_page_to_update_set || (add_sys_portal_page_to_update_set = {}));
/**
 * catalog_ui_policy
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_catalog_ui_policy_to_update_set;
(function (add_catalog_ui_policy_to_update_set) {
    (function () {
        function getDisplayValue(g) {
            try {
                var d = g.getDisplayValue().trim();
                if (d.length > 0)
                    return g.getTableName() + ' (' + g.getDisplayValue() + ')';
            }
            catch (e) { }
            return g.getTableName() + '[' + g.getUniqueValue() + ']';
        }
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        var displayValues = [getDisplayValue(current)];
        var sys_id = current.getValue('sys_id');
        var gr = new GlideRecord('catalog_ui_policy_action');
        gr.addQuery('ui_policy', sys_id);
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            displayValues.push(getDisplayValue(gr));
        }
        sys_id = gs.getPreference('sys_update_set');
        gr = new GlideRecord('sys_update_set');
        gr.get(sys_id);
        gs.addInfoMessage(displayValues.length + ' record(s) included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set: ' + displayValues.join("\n"));
        action.setRedirectURL(current);
    })();
})(add_catalog_ui_policy_to_update_set || (add_catalog_ui_policy_to_update_set = {}));
/**
 * item_option_new_set
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_item_option_new_set_to_update_set;
(function (add_item_option_new_set_to_update_set) {
    (function () {
        function getDisplayValue(g) {
            try {
                var d = g.getDisplayValue().trim();
                if (d.length > 0)
                    return g.getTableName() + ' (' + g.getDisplayValue() + ')';
            }
            catch (e) { }
            return g.getTableName() + '[' + g.getUniqueValue() + ']';
        }
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        var displayValues = [getDisplayValue(current)];
        var sys_id = current.getValue('sys_id');
        var gr = new GlideRecord('catalog_script_client');
        gr.addQuery('variable_set', sys_id);
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            displayValues.push(getDisplayValue(gr));
        }
        sys_id = gs.getPreference('sys_update_set');
        gr = new GlideRecord('sys_update_set');
        gr.get(sys_id);
        gs.addInfoMessage(displayValues.length + ' record(s) included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set: ' + displayValues.join("\n"));
        action.setRedirectURL(current);
    })();
})(add_item_option_new_set_to_update_set || (add_item_option_new_set_to_update_set = {}));
/**
 * item_option_new
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_item_option_new_to_update_set;
(function (add_item_option_new_to_update_set) {
    (function () {
        function getDisplayValue(g) {
            try {
                var d = g.getDisplayValue().trim();
                if (d.length > 0)
                    return g.getTableName() + ' (' + g.getDisplayValue() + ')';
            }
            catch (e) { }
            return g.getTableName() + '[' + g.getUniqueValue() + ']';
        }
        current.update();
        var um = new GlideUpdateManager2();
        um.saveRecord(current);
        var displayValues = [getDisplayValue(current)];
        var sys_id = current.getValue('sys_id');
        var gr = new GlideRecord('question_choice');
        gr.addQuery('question', sys_id);
        gr.query();
        while (gr.next()) {
            um.saveRecord(gr);
            displayValues.push(getDisplayValue(gr));
        }
        sys_id = gs.getPreference('sys_update_set');
        gr = new GlideRecord('sys_update_set');
        gr.get(sys_id);
        gs.addInfoMessage(displayValues.length + ' record(s) included in <a href="sys_update_set.do?sys_id=' + sys_id + '">' + gr.name + '</a> update set: ' + displayValues.join("\n"));
        action.setRedirectURL(current);
    })();
})(add_item_option_new_to_update_set || (add_item_option_new_to_update_set = {}));
/**
 * cmn_schedule
 * Add to Current Update Set
 *
 * Form link: true
 * Show Insert: false
 * @example Condition
 * gs.hasRole('admin')
 */
var add_cmn_schedule_to_update_set;
(function (add_cmn_schedule_to_update_set) {
    (function () {
        current.update();
        var um = new GlideUpdateManager2();
        var saved = {};
        function saveSchedule(glideRecord) {
            var sys_id = glideRecord.getUniqueValue();
            if (typeof saved[sys_id] !== 'undefined')
                return;
            um.saveRecord(glideRecord);
            var gr = new GlideRecord('cmn_schedule_span');
            gr.addQuery('schedule', sys_id);
            gr.query();
            var entryCount = 0;
            while (gr.next()) {
                entryCount++;
                um.saveRecord(gr);
            }
            gr = new GlideRecord('cmn_other_schedule');
            gr.addQuery('schedule', sys_id);
            gr.query();
            var childScheduleCount = 0;
            while (gr.next()) {
                childScheduleCount++;
                if (!gr.child_schedule.nil()) {
                    um.saveRecord(gr);
                    saveSchedule(gr.child_schedule.getRefRecord());
                }
            }
            saved[sys_id] = {
                name: glideRecord.getValue('name'),
                entryCount: entryCount,
                childScheduleCount: childScheduleCount
            };
        }
        saveSchedule(current);
        var resultInfo = Object.getOwnPropertyNames(saved).map(function (sys_id) {
            var item = this[sys_id];
            return '<a href="cmn_schedule.do?sys_id=' + sys_id + '">' + item.name + '</a> (+' + item.entryCount + ((item.entryCount == 1) ? 'entry and ' : ' entries and ') + item.childScheduleCount + ((item.childScheduleCount == 1) ? ' child schedule)' : ' child schedules)');
        }, saved);
        var setID = gs.getPreference('sys_update_set');
        var gr = new GlideRecord('sys_update_set');
        gr.get(setID);
        switch (resultInfo.length) {
            case 1:
                gs.addInfoMessage('1 schedule included in <a href="sys_update_set.do?sys_id=' + setID + '">' + gr.name + '</a> update set: ' + resultInfo[0]);
                break;
            case 2:
                gs.addInfoMessage('2 schedules included in <a href="sys_update_set.do?sys_id=' + setID + '">' + gr.name + '</a> update set: ' + resultInfo[0] + ' and ' + resultInfo[1]);
                break;
            default:
                var lastInfo = resultInfo.pop();
                gs.addInfoMessage(resultInfo.length + ' schedules included in <a href="sys_update_set.do?sys_id=' + setID + '">' + gr.name + '</a> update set: ' + resultInfo.join(", ") + ', and ' + lastInfo);
                break;
        }
        action.setRedirectURL(current);
    })();
})(add_cmn_schedule_to_update_set || (add_cmn_schedule_to_update_set = {}));
// https://usmskdev2.servicenowservices.com/now/nav/ui/classic/params/target/sys_ui_action_list.do%3Fsysparm_query%3Dsys_updated_by%253Dlerwinesa%26sysparm_first_row%3D1%26sysparm_view%3D
