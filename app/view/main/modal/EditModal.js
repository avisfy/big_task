Ext.define('ExtTask2.view.main.modal.EditModal', {
    extend: 'Ext.window.Window',

    title: 'Edit user...',
    height: 500,
    width: 400,

    controller: 'edit-controller',

    layout: {
        type: 'anchor',
    },
    defaults: {anchor: '100%'},
    padding: 30,

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Name:',
        bind: '{editModel.nameField}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Surname:',
        bind: '{editModel.surnameField}'
    }, {
        xtype: 'textfield',
        fieldLabel: 'Email:',
        bind : '{editModel.emailField}',
        vtype: 'email'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date of birth:',
        maxValue: new Date(),
        bind : '{editModel.dateBirthField}'
    }],

    buttons: [{
        text: 'Cancel',
        handler: function () {
            this.up('window').close();
        }
    },{
        text: 'Save',
        handler: 'onSaveClicked'
    }],

    listeners: {
        afterrender: 'afterViewReady'
    }

})