module.exports = function(that){
    return {
        getUserIdParams: function(preUser, preId, postId, username, id, params, cb) {
            if (!username) username = that.user.username;
            if (!params) params = "";
            var endpoint = preUser + username + preId + id + postId;
            var promise = new Promise(function(resolve, reject) {
                that._get(endpoint, params, function(err, data){
                    if(err) return reject(err);
                    resolve(JSON.parse(data));
                });
            });

            if(cb){
                promise
                    .then(function(res){ cb(null, res); })
                    .catch(cb);
                return null;
            }
            return promise;
        },
        getUserParams: function(preUser, postUser, username, params, cb){
            return this.getUserIdParams(preUser, postUser, "", username, "", params, cb);
        },
        getUserId: function(preUser, preId, postId, username, id, cb){
            return this.getUserIdParams(preUser, preId, postId, username, id, null, cb);
        },
        getUser: function(preUser, postUser, username, cb){
            return this.getUserIdParams(preUser, postUser, "", username, "", null, cb);
        },
        getParams: function(endpoint, params, cb){
            return this.getUserIdParams(endpoint, "", "", "", "", params, cb);
        },
        get: function(endpoint, cb){
            return this.getUserIdParams(endpoint, "", "", "", "", "", cb);
        },
        postParams: function(endpoint, params, cb){
            var promise = new Promise(function(resolve, reject) {
                that._post(endpoint, params, function(err, data){
                    if(err) return reject(err);
                    resolve(JSON.parse(data));
                });
            });

            if(cb){
                promise
                    .then(function(res){ cb(null, res); })
                    .catch(cb);
                return null;
            }
            return promise;
        },
        post: function(endpoint, cb){
            this.postParams(endpoint, "", cb);
        },
        putParams: function(endpoint, params, cb){
            var promise = new Promise(function(resolve, reject) {
                that._put(endpoint, params, function(err, data){
                    if(err) return reject(err);
                    resolve(JSON.parse(data));
                });
            });

            if(cb){
                promise
                    .then(function(res){ cb(null, res); })
                    .catch(cb);
                return null;
            }
            return promise;
        },
        delete: function(endpoint, cb){
            var promise = new Promise(function(resolve, reject) {
                that._delete(endpoint, function(err, data){
                    if(err) return reject(err);
                    resolve(JSON.parse(data));
                });
            });

            if(cb){
                promise
                    .then(function(res){ cb(null, res); })
                    .catch(cb);
                return null;
            }
            return promise;
        }
    };

};
