Ext.define('ExtTask2.view.main.Inputs', {
    extend: 'Ext.form.FieldContainer',

    xtype: 'inputs',

    layout: {
        type: 'anchor'
    },

    defaults: {anchor: '100%'},

    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Name:',
        bind: '{nameField}'
    }, {
        fieldLabel: 'Surname:',
        bind: '{surnameField}'
    }, {
        fieldLabel: 'Email:',
        bind: '{emailField}',
        vtype: 'email'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date of birth:',
        maxValue: new Date(),
        bind: '{dateBirthField}'
    }]
})