module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
    return {
        createAttachment: function(params, cb){
            return common.postParams('/extras/create_attachment.json', params, cb);
        }
    };
};
