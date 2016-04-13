module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    var obj = {
        loveknitting: {
            export: function(params, cb){
                // loveknitting.export(params[, cb])
                return common.getParams('/products/loveknitting/export.json', params, cb);
            },
            updateStatus: function(id, params, cb){
                // loveknitting.updateStatus(id, params[, cb])
                return common.postParams(`/products/${id}/loveknitting/update_status.json`, paramscb);
            }
        }
    };
    obj.export = obj.loveknitting.export;
    obj.updateStatus = obj.loveknitting.updateStatus;
    return obj;
};
