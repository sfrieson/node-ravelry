module.exports = function (that){
    return {
        create: function (params, cb){
            var endpoint = "/comments/create.json";
            that._post(endpoint, params, function(err, data){cb(err, data);});
        },
        delete: function(id, cb){
            var endpoint = `/comments/${id}.json`;
            that._delete(endpoint, function(err, data){cb(err,data);});
        }
    };
};
