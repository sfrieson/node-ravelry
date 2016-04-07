module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
    return {
        list: function(params, cb){
            common.getParams("/deliveries/list.json", params, cb);
        },
        renew: function(id, params, cb){
            common.postParams(`/deliveries/${id}/renew.json`, params, cb);
        }
    };
};
