module.exports = function(that){
    return {
        delete: function(bundledItemId, cb){
            var endpoint = `/bundled_items/${bundledItemId}.json`;
            that._delete(endpoint, function(err, data){ cb(err, data);});
        },
        show: function(bundledItemId, cb){
            var endpoint = `/bundled_items/${bundledItemId}.json`;
            that._get(endpoint, function(err, data){ cb(err, data);});
        }
    };
};
