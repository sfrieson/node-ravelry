module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(Volume, cb){
            // create(Volume[, cb])
            return common.postParams('/volumes/create.json', Volume, cb);
        },
        delete: function(id, cb){
            // delete(id[, cb])
            return common.delete(`/volumes/${id}.json`, cb);
        },
        show: function(id, cb){
            // show(id[, cb])
            return common.get(`/volumes/${id}.json`, cb);
        },
        update: function(id, Volume, cb){
            // update(id, Volume[, cb])
            return common.get(`/volumes/${id}/update.json`, Volume, cb);
        }
    };
};
