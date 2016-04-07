module.exports = function(that){
    return {
        getUserIdParams: function(preUser, preId, postId, username, id, params, cb) {
            if(typeof username !== 'string'){
                cb = id;
                id = username;
                username = that.user.username;
            }
            var endpoint = preUser + username + preId + id + postId;
            that._get(endpoint, null, function(err, data){  cb(err, data); });
        },
        getUserParams: function(preUser, postUser, username, params, cb){
            if(typeof username !== 'string'){
                cb = params;
                params = username;
                username = that.user.username;
            }
            if(typeof params !== 'object'){
                cb = params;
                params = "";
            }
            // if(!cb) throw("Error: No Callback supplied");
            var endpoint = preUser + username + postUser;
            that._get(endpoint, params, function(err, data){  cb(err, data); });
        },
        getUserId: function(preUser, preId, postId, username, id, cb){
            this.getUserIdParams(preUser, preId, postId, username, id, null, cb);
        },
        getUser: function(preUser, postUser, username, cb){
            if(typeof username !== "string"){
                cb = username;
                username = that.user.username;
            }
            var endpoint = preUser + username + postUser;
            that._get(endpoint, null, function(err,data){cb(err,data);});
        },
        getParams: function(endpoint, params, cb){
            if(typeof params !== "object"){
                cb = params;
                params = "";
            }
            that._get(endpoint, params, function(err, data){ cb(err, data); });
        },
        get: function(endpoint, cb){
            that._get(endpoint, null, function(err, data){ cb(err, data); });
        },
        postParams: function(endpoint, params, cb){
            that._post(endpoint, params, function(err, data){ return cb(err, data); });
        },
        post: function(endpoint, cb){
            that._post(endpoint, null, function(err, data){ return cb(err, data); });
        },
        putParams: function(endpoint, params, cb){
            that._put(endpoint, params, function(err, data){ return cb(err, data); });
        },
        delete: function(endpoint, cb){
            that._delete(endpoint, function(err, data){ cb(err, data); });
        }
    };

};
