module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(params,cb){
            return common.postParams('/packs/create.json', params, cb);
        },
        delete: function(id, cb){
            return common.delete(`/packs/${id}.json`, cb);
        },
        show: function(id, cb){
            return common.get(`/packs/${id}.json`, cb);
        },
        update: function(id, pack, cb){
            return common.putParams(`/packs/${id}.json`, pack, cb);
        }
    };
};
