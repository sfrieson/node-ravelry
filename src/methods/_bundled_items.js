module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
        return {
        delete: function(id, cb){
            commom.delete(`/bundled_items/${id}.json`, cb);
        },
        show: function(id, cb){
            common.get( `/bundled_items/${id}.json`, cb);
        }
    };
};
