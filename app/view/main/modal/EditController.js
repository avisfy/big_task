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
        var index = vm.get('actualRow');
        var store = Ext.getStore('usersList');

        var name = vm.get('editModel.nameField');
        var surname = vm.get('editModel.surnameField');
        var email = vm.get('editModel.emailField');
        var dateBirth = vm.get('editModel.dateBirthField');

        var user = store.getData().getAt(index);
        var oldName =  user.get('name');
        var oldSurname =  user.get('surname');
        var oldEmail =  user.get('email');
        var oldDateBirth =  user.get('dateOfBirth');

        if (!(oldName === name)) {
            user.set('name', name);
        }
        if (!(oldSurname === surname)) {
            user.set('surname', surname);
        }

        if (!(oldEmail === email)) {
            user.set('email', email);
        }
        if  (!(oldDateBirth === dateBirth)) {
            user.set('dateOfBirth', dateBirth);
        }

        /*if (!((oldName === name) && (oldSurname === surname) && (oldEmail === email) && oldDateBirth === dateBirth)) {
           var user = Ext.create('ExtTask2.model.User', {
               name: name,
               surname: surname,
               email: email,
               dateOfBirth: dateBirth,
               needDelete: false
           });
           store.removeAt(index);
           store.insert(index, user);
       }*/

        this.getView().close();
    }

});
