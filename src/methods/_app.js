module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
    return {
        config: {
            delete: function(keysArr, cb){
                var keys = "";
                if (keysArr) keys = "?keys=" + keysArr.join('+');
                var endpoint = '/app/config/delete.json' + keys;
                return common.post(endpoint, cb);
            },
            get: function(keysArr, cb){
                var keys = "";
                if (keysArr) keys = "?keys=" + keysArr.join('+');
                var endpoint = '/app/config/get.json' + keys;
                return common.get(endpoint, cb);
            },
            set: function(keyValues, cb){
                var endpoint = '/app/config/set.json' + keys;
                return common.postParams(endpoint, keyValues, cb);
            },
        },
        data: {
            delete: function(keysArr, cb){
                var keys = "";
                if (keysArr) keys = "?keys=" + keysArr.join('+');
                var endpoint = '/app/data/delete.json' + keys;
                return common.post(endpoint, cb);
            },
            get: function(keysArr, cb){
                var keys = "";
                if (keysArr) keys = "?keys=" + keysArr.join('+');
                var endpoint = '/app/data/get.json' + keys;
                return common.get(endpoint, cb);
            },
            set: function(keyValues, cb){
                var endpoint = '/app/data/set.json' + keys;
                return common.postParams(endpoint, keyValues, cb);
            },
        }
    };
};
