module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        image: function(params, cb){
            common.postparams('/upload/image.json', params, cb);
        },
        requestToken: function(cb){
            common.post(`/upload/request_token.json`, cb);
        },
        status: function(params, cb){
            common.postParams('/upload/image/status.json', params, cb);
        }
    };
};
