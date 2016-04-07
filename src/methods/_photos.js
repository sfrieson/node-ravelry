module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        delete: function(id, cb){
            return common.delete(`/photos/${id}.json`, cb);
        },
        sizes: function(id, cb){
            return common.get(`/photos/${id}/sizes.json`, cb);
        },
        status: function(params, cb){
            return common.getParams('photos/status.json', params, cb);
        },
        update: function(id, params, cb){
            return common.postParams(`/photos/${id}.json`, params, cb);
        }
    };
};
