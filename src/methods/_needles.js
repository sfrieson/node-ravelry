module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        list: function(username, cb){
            common.getUser('/people/','/needles/list.json', username, cb);
        },
        sizes: function(cb){
            common.get('/needles/sizes.json', cb);
        },
        types: function(cb){
            common.get('/needles/types.json', cb);
        }
    };
};
