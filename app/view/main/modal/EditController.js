Ext.define('ExtTask2.view.main.modal.EditController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.edit-controller',

    afterViewReady: function () {
        var vm = this.getViewModel();
        var index = vm.get('actualRow');
        var store = Ext.getStore('usersList');
        var user = store.getData().getAt(index);

        vm.set('editModel.nameField', user.get('name'));
        vm.set('editModel.surnameField', user.get('surname'));
        vm.set('editModel.emailField', user.get('email'));
        vm.set('editModel.dateBirthField', user.get('dateOfBirth'));
    },

    onSaveClicked: function () {
        var vm = this.getViewModel();

        //new
        var name = vm.get('editModel.nameField');
        var surname = vm.get('editModel.surnameField');
        var email = vm.get('editModel.emailField');
        var dateBirth = vm.get('editModel.dateBirthField');

        var index = vm.get('actualRow');
        var store = Ext.getStore('usersList');
        var user = store.getData().getAt(index);
        //old
        var oldName =  user.get('name');
        var oldSurname =  user.get('surname');
        var oldEmail =  user.get('email');
        var oldDateBirth =  user.get('dateOfBirth');
        var id = user.get('id');

        var f = false;

        if (!(oldName === name)) {
            user.set('name', name);
            f = true;
        }
        if (!(oldSurname === surname)) {
            user.set('surname', surname);
            f = true;
        }

        if (!(oldEmail === email)) {
            user.set('email', email);
            f = true;
        }
        if  (!(oldDateBirth === dateBirth)) {
            user.set('dateOfBirth', dateBirth);
            f = true;
        }

        if (f) {
            var db = dateBirth.toISOString();
            var birth = db.slice(0, db.indexOf('T'));
            var editedUser = {
                id,
                name,
                surname,
                email,
                birth
            }

            Ext.Ajax.request({
                url: 'http://localhost:8080/edit_user',
                method: 'POST',
                jsonData: JSON.stringify(editedUser),

                success: function (response, opts) {
                    console.log('Edited');
                },
                failure: function (response, opts) {
                    console.log('Failed editing');
                },
            });
        }

        this.getView().close();
    }

});
