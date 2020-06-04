/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('ExtTask2.view.main.signIn.ViewModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.signIn',

    data: {
        nameField: null,
        surnameField: null,
        emailField: null,
        dateBirthField: null,
        editModel: {
            nameField: null,
            surnameField: null,
            emailField: null,
            dateBirthField: null
        }
    },

    formulas: {
        isFull: function (get) {
            var name = get('nameField');
            var surname = get('surnameField');
            var email = get('emailField');
            var dateBirth = get('dateBirthField');
            if (name && surname && email && dateBirth) {
                return false;
            } else {
                return true;
            }
        }
    }
});
