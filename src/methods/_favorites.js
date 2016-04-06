module.exports = function(that) {
    return {
        create: function(bookmarkPost, cb){
            var endpoint = `/people/${that.user.username}/favorites/create.json`;
            that._post(endpoint, bookmarkPost, function(err, data){ return cb(err, data); });
        },

        delete: function(id, cb){
            var endpoint = `/people/${that.user.username}/favorites/${id}.json`;
            that._delete(endpoint, function(err, data){ return cb(err, data); });
        },

        list: function(username, params, cb){
            if(typeof username !== 'string'){
                cb = params;
                params = username;
                username = that.user.username;
            }
            if(typeof params !== 'object'){
                cb = params;
                params = "";
            }
            if(!cb) throw("Error: No Callback supplied");
            var endpoint = `/people/${username}/favorites/list.json`;
            that._get(endpoint, params, function(err, data){ return cb(err, data); });
        },

        show: function(username, id, cb){
            if(typeof username !== 'string'){
                cb = id;
                id = username;
                username = that.user.username;
            }
            var endpoint = `/people/${username}/favorites/${id}.json`;
            that._get(endpoint, null, function(err, data){ return cb(err, data); });
        },

        update: function(id, bookmarkPost, cb){
            var endpoint = `/people/${that.user.username}/favorites/${id}.json`;
            that._post(endpoint, bookmarkPost, function(err, data){ return cb(err, data);});
        },

        addToBundle: function(id, bundleId, cb){
            var endpoint = `/people/${that.user.username}/favorites/${id}/add_to_bundle.json`;
            that._post(endpoint, bundleId, function(err, data){ return cb(err, data); });
        },

        removeFromBundle: function(id, bundleId, cb){
            var endpoint = `/people/${this.user.username}/favorites/${id}/remove_from_bundle.json`;
            that._post(endpoint, bundleId, function(err, data){return cb(err, data);});
        }
    };
};
