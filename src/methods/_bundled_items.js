module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
        return {
        delete: function(id, cb){
            return common.delete(`/bundled_items/${id}.json`, cb);
        },
        show: function(id, cb){
            return common.get( `/bundled_items/${id}.json`, cb);
        }
    };
};
