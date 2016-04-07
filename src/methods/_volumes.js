module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(volume, cb){
            common.postParams('/volumes/create.json', volume, cb);
        },
        delete: function(id, cb){
            common.delete(`/volumes/${id}.json`, cb);
        },
        show: function(id, cb){
            common.get(`/volumes/${id}.json`, cb);
        },
        update: function(id, params, cb){
            common.get(`/volumes/${id}/update.json`, params, cb);
        }
    };
};
