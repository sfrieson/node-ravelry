module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            // show(id[, cb])
            return common.get(`/people/${id}.json`, cb);
        }
    };
};
