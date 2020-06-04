Ext.define('ExtTask2.view.main.signIn.SignIn', {
    extend: 'Ext.form.FieldSet',

    xtype: 'sign-in',

    title: 'Sign in here',
    layout:  'anchor',

    defaults: {anchor: '90%'},
    items: [{
        xtype: 'inputs'
    }, {
        xtype: 'button',
        text: 'Add new user!',
        bind: {
            disabled: '{isFull}'
        },
        listeners: {
            click: 'onAddClicked'
        }
    } , {
        xtype: 'button',
        text: 'Get from servlet!',
        listeners: {
            click: 'onGetClicked'
        }
    }]
})