Ext.define('ExtTask2.view.main.users.Grid', {
    extend: 'Ext.grid.Panel',

    xtype: 'user-grid',

    requires: [
        'ExtTask2.store.Users'
    ],

    id: 'MyGridPanel',

    store: {
        type: 'users'
    },

    tbar: [
        {
            text: 'Remove selected rows',
            listeners: {
                click: 'onRemoveClicked'
            }
        }],

    columns: [
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Surname',
            dataIndex: 'surname',
            flex: 1
        }, {
            text: 'Email',
            dataIndex: 'email',
            flex: 2
        }, {
            text: 'Date of birth',
            xtype: 'datecolumn',
            dataIndex: 'dateOfBirth',
            formatter: 'date("d.m.Y")',
            width: 115
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }, {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                handler: 'onRowRemoveClicked',

            }]
        }],

    listeners: [{
        itemdblclick: 'onRowDblClicked'
    }, {
        afterrender: 'afterGridReady'
    }]

});
