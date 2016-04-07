module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        loveknitting: {
            export: function(params, cb){
                return common.getParams('/products/loveknitting/export.json', params, cb);
            },
            updateStatus: function(id, params, cb){
                return common.postParams(`/products/${id}/loveknitting/update_status.json`, paramscb);
            }
        }
    };
};
