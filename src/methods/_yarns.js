module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        search: function(params, cb){
            return common.getParams('/yarns/search.json', params, cb);
        },
        show: function(id, cb){
            return common.get(`/yarns/${id}.json`, cb);
        }
    };
};
