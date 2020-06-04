Ext.define('ExtTask2.view.main.users.UserView', {
    extend: 'Ext.form.FieldSet',

    xtype: 'user-view',

    requires: [
        'ExtTask2.view.main.users.Grid'
    ],

    title: 'User table',
    layout: 'anchor',
    defaults: {anchor: '100%'},
    items: [{
        xtype: 'user-grid',
        height: 350
    }]
})