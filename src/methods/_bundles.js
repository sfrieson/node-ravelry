module.exports = function(that){
    return {
        create: function(bundle, cb){
            var endpoint = `/people/${that.user.username}/bundles/create.json`;
            that._post(endpoint, bundle, function(err, data){ cb(err, data); });
        },
        delete: function(id, cb){
            var endpoint = `/people/${that.user.username}/bundles/${id}.json`;
            that._delete(endpoint, function(err, data){ cb(err, data); });
        },
        list: function(username, params, cb){
            if(typeof username !== 'string'){
                cb = params;
                params = username;
                username = that.user.username;
            }
            if(typeof params !== 'object'){
                cb = params;
                params = null;
            }
            var endpoint = `/people/${username}/bundles/list.json`;
            that._get(endpoint, params, function(err, data){ cb(err, data); });
        },
        show: function(username, id, cb){
            if(typeof username !== 'string'){
                cb = id;
                id = username;
                username = that.user.username;
            }
            var endpoint = `/people/${username}/bundles/${id}.json`;
            that._get(endpoint, null, function(err, data){ cb(err, data); });
        },
        update: function(id, bundle, cb){
            var endpoint = `/people/${that.user.username}/bundles/${id}.json`;
            that._post(endpoint, bundle, function(err, data){ cb(err, data); });
        },
    };
};
