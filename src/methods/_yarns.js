module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        search: function(params, cb){
            common.getParams('/yarns/search.json', params, cb);
        },
        show: function(id, cb){
            common.get(`/yarns/${id}.json`, cb);
        }
    };
};
