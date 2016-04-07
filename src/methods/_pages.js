module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            common.get(`/pages/${id}.json`, cb);
        },
        update: function(id, params, cb){
            common.putParams(`/pages/${id}.json`, params, cb);
        }
    };
};
