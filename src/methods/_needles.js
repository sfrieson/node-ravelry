module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        list: function(username, cb){
            return common.getUser('/people/','/needles/list.json', username, cb);
        },
        sizes: function(cb){
            return common.get('/needles/sizes.json', cb);
        },
        types: function(cb){
            return common.get('/needles/types.json', cb);
        }
    };
};
