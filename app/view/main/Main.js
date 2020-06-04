/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtTask2.view.main.Main', {
    extend: 'Ext.panel.Panel',

    xtype: 'app-main',
    requires: [
        'ExtTask2.view.main.signIn.ViewModel',
        'ExtTask2.view.main.MainController',
        'ExtTask2.view.main.signIn.SignIn',
        'ExtTask2.view.main.users.UserView'
    ],

    viewModel: 'signIn',
    controller: 'main',

    title: 'Table task',
    bodyPadding: 12,

    layout: {
        type: 'hbox',
        pack: 'center'
    },
    defaults: {
        padding: 30,
        collapsible: false
    },
    width: 100,

    items: [{
        xtype: 'sign-in',
        flex: 1,
        margin: '0 5 0 0'
    }, {
        xtype: 'user-view',
        flex: 2,
        margin: '0 0 0 5'
    }]
});
