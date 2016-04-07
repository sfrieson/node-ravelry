module.exports = function (that){
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function (params, cb){
            common.postParams("/comments/create.json", params, cb);
        },
        delete: function(id, cb){
            common.delete(`/comments/${id}.json`, cb);
        }
    };
};
