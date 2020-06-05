Ext.define('ExtTask2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    afterGridReady: function () {
        Ext.Ajax.request({
            url: 'http://localhost:8080/load_grid',
            method: 'GET',

            success: function (response, opts) {
                console.log('Load grid!');
                var users = Ext.decode(response.responseText);
                var store = Ext.getStore('usersList');

                users.map(function (user) {
                    var modelUser = Ext.create('ExtTask2.model.User', {
                        id: user.id,
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        //dateOfBirth: new Date(Date.parse(user.birth)),
                        dateOfBirth: user.birth,
                        needDelete: false
                    });
                    store.add(modelUser);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading');
            }
        })
    },


    onAddClicked: function () {
        var vm = this.getViewModel();
        var user = Ext.create('ExtTask2.model.User', {
            name: vm.get('nameField'),
            surname: vm.get('surnameField'),
            email: vm.get('emailField'),
            dateOfBirth: vm.get('dateBirthField'),
            needDelete: false
        });

        this.saveUser(user);
        var s = Ext.getStore('usersList');
        s.add(user);

        vm.set('nameField', null);
        vm.set('surnameField', null);
        vm.set('emailField', null);
        vm.set('dateBirthField', null);
    },


    saveUser: function (u) {
        var db = u.get('dateOfBirth').toISOString();
        var dateBirth = db.slice(0, db.indexOf('T'));
        var user = {
            name: u.get('name'),
            surname: u.get('surname'),
            email: u.get('email'),
            birth: dateBirth
        };

        Ext.Ajax.request({
            url: 'http://localhost:8080/save_user',
            method: 'POST',
            jsonData: JSON.stringify(user),

            success: function (response, opts) {
                console.log('Saved');
                var id = Ext.decode(response.responseText);
                u.set('id', id);
            },
            failure: function (response, opts) {
                console.log('Failed saving');
            }
        })
    },


    onGetClicked: function () {
        var vm = this.getViewModel();

        Ext.Ajax.request({
            url: 'http://localhost:8080/gen_user',
            method: 'GET',

            success: function (response, opts) {
                console.log("Got user")
                var obj = Ext.decode(response.responseText);
                //var birth = new Date(Date.parse(String(obj.birth)));
                var birth = obj.birth;

                vm.set('nameField', obj.name);
                vm.set('surnameField', obj.surname);
                vm.set('emailField', obj.email);
                vm.set('dateBirthField', birth);
            },

            failure: function (response, opts) {
                console.log('Failed gen_user' + response.status);
            }
        })
    },


    onRemoveClicked: function () {
        var delArr = new Array();
        var s = Ext.getStore('usersList');

        s.each(function (record) {
            if (record.get('needDelete')) {
                delArr.push(record.data.id)
                s.remove(record);
            }
        });

        Ext.Ajax.request({
            url: 'http://localhost:8080/delete_users',
            method: 'POST',
            jsonData: JSON.stringify(delArr),

            success: function (response, opts) {
                console.log('Deleted');
            },
            failure: function (response, opts) {
                console.log('Failed deleting');
            },
        });
    },


    onRowDblClicked: function (ths, record, item, index, e, eOpts) {
        this.getViewModel().set('actualRow', index);
        var window = Ext.create('ExtTask2.view.main.modal.EditModal');
        window.show();
    }

});
