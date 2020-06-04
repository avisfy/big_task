Ext.define('ExtTask2.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    storeId: 'usersList',
    model: 'ExtTask2.model.User',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
