module.exports = function(that){ return {
    config: {
        delete: function(keysArr, cb){
            var keys = "";
            if (keysArr) keys = "?keys=" + keysArr.join('+');
            var endpoint = '/app/config/delete.json' + keys;
            that._post(endpoint, null, function(err, data){ cb(err, data); });
        },
        get: function(keysArr, cb){
            var keys = "";
            if (keysArr) keys = "?keys=" + keysArr.join('+');
            var endpoint = '/app/config/get.json' + keys;
            that._get(endpoint, null, function(err, data){ cb(err, data); });
        },
        set: function(keyValues, cb){
            var endpoint = '/app/config/set.json' + keys;
            that._post(endpoint, keyValues, function(err, data){ cb(err, data); });
        },
    },
    data: {
        delete: function(keysArr, cb){
            var keys = "";
            if (keysArr) keys = "?keys=" + keysArr.join('+');
            var endpoint = '/app/data/delete.json' + keys;
            that._post(endpoint, null, function(err, data){ cb(err, data); });
        },
        get: function(keysArr, cb){
            var keys = "";
            if (keysArr) keys = "?keys=" + keysArr.join('+');
            var endpoint = '/app/data/get.json' + keys;
            that._get(endpoint, null, function(err, data){ cb(err, data); });
        },
        set: function(keyValues, cb){
            var endpoint = '/app/data/set.json' + keys;
            that._post(endpoint, keyValues, function(err, data){ cb(err, data); });
        },
    }
};};
