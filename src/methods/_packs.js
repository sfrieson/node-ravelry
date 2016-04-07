module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(params,cb){
            common.postParams('/packs/create.json', params, cb);
        },
        delete: function(id, cb){
            common.delete(`/packs/${id}.json`, cb);
        },
        show: function(id, cb){
            common.get(`/packs/${id}.json`, cb);
        },
        update: function(id, pack, cb){
            common.putParams(`/packs/${id}.json`, pack, cb);
        }
    };
};
