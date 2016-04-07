module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        search: function(username, params, cb){
            common.getUserParams('/people/', '/library/search.json', username, params, cb;)
        }
    };
};
