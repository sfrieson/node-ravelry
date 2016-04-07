module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, params, cb){
            return common.getParams(`/pattern_sources/${id}/patterns.json`, params, cb);
        },
        update: function(params, cb){
            return common.getParams('/pattern_sources/search.json', params, cb);
        },
        show: function(id, cb){
            return common.get(`/pattern_sources/${id}.json`, cb);
        }
    };
};
