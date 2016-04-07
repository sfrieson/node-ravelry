module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        delete: function(id, cb){
            common.delete(`/photos/${id}.json`, cb);
        },
        sizes: function(id, cb){
            common.get(`/photos/${id}/sizes.json`, cb);
        },
        status: function(params, cb){
            common.getParams('photos/status.json', params, cb);
        },
        update: function(id, params, cb){
            common.postParams(`/photos/${id}.json`, params, cb);
        }
    };
};
