module.exports = function(that){
    return {
        list: function(params, cb){
            var endpoint = "/deliveries/list.json";
            that._get(endpoint, params, function(err, data) {cb(err,data);});
        },
        renew: function(id, params, cb){
            var endpoint = `/deliveries/#{id}/renew.json`;
            that._post(endpoint, params, function(err, data){cb(err,data);});
        }
    };
};
