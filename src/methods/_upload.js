module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        image: function(params, cb){
            return common.postparams('/upload/image.json', params, cb);
        },
        requestToken: function(cb){
            return common.post(`/upload/request_token.json`, cb);
        },
        status: function(params, cb){
            return common.postParams('/upload/image/status.json', params, cb);
        }
    };
};
