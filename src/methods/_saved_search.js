module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        list: function(cb){
            common.get('/saved_searches/list.json', cb);
        }
    };
};
