module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        sets: function(cb){
            return common.get('/forums/sets.json', cb);
        },
        topics: function(id, params, cb){
            return common.getParams(`/forums/${id}/topics.json`, params, cb);
        }
    };
};
