module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        list: function(cb){
            common.get('/stores/list.json', cb);
        },
        products: function(id, cb){ //API check
            common.get(`/stores/${id}/products.json`, cb);
        }
    };
};
