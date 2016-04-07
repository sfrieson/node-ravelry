module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
    return {
        add: function(id, itemCode, cb){
            common.postParams(`/carts/${id}/add.json`, itemCode, cb);
        },
        create: function(storeId, cb){
            common.postParams('/carts/create.json', storeId, cb);
        },
        externalCheckout(id, paymentReference, cb){
            common.postParams(`/carts/${id}/external_checkout.json`, paymentReference, cb);
        },
        loveknittingCheckout(id, params, cb) {
            common.postParams(`/carts/loveknitting/${id}/external_checkout.json`, params, cb);
        }
    };
};
