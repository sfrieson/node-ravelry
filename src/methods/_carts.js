module.exports = function(that){
    return {
        add: function(id, itemCode, cb){
            var endpoint = `/carts/${id}/add.json`;
            that._post(endpoint, {item_code: itemCode}, function(err, data){ cb(err, data); });
        },
        create: function(storeId, cb){
            var endpoint = '/carts/create.json';
            that._post(endpoint, storeId, function(err, data){ cb(err, data); });
        },
        externalCheckout(id, paymentReference, cb){
            var endpoint = `/carts/{id}/external_checkout.json`;
            that._post(endpoint, paymentReference, function(err, data) { cb(err, data); } );
        },
        loveknittingCheckout(id, params, cb) {
            var endpoint = `/carts/loveknitting/${id}/external_checkout.json`;
            that._post(endpoint, params, function(err,data){ cb(err, data); });
        }
    };
};
