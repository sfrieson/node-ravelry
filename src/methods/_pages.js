module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            return common.get(`/pages/${id}.json`, cb);
        },
        update: function(id, params, cb){
            return common.putParams(`/pages/${id}.json`, params, cb);
        }
    };
};
