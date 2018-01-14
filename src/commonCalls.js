module.exports = function (instance, API) {
  return {
    getUserIdParams: function (preUser, preId, postId, username, id, params, cb) {
      if (username && typeof username !== 'string') {
        cb = params;
        params = id;
        id = username;
        username = instance.user.username;
      } else if (!username && username !== '') username = instance.user && instance.user.username ? instance.user.username : ''; // User may not be logged in
      if (id === -1) id = '';
      if (typeof params !== 'object') {
        cb = params;
        params = {};
      }
      if (!params) params = {};

      var endpoint = preUser + username + preId + id + postId;
      var promise = new Promise(function (resolve, reject) {
        API.get(endpoint, params, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    },
    getUserParams: function (preUser, postUser, username, params, cb) {
      if (username && typeof username !== 'string') {
        cb = params;
        params = username;
        username = instance.user.username;
      } else if (!username) username = instance.user && instance.user.username ? instance.user.username : ''; // User may not be logged in
      if (params && typeof params !== 'object') {
        cb = params;
        params = {};
      } else if (!params) params = {};
      return this.getUserIdParams(preUser, postUser, '', username, -1, params, cb);
    },
    getUserId: function (preUser, preId, postId, username, id, cb) {
      if (username && typeof username !== 'string') {
        cb = id;
        id = username;
        username = instance.user.username;
      } else if (!username) username = instance.user && instance.user.username ? instance.user.username : ''; // User may not be logged in
      return this.getUserIdParams(preUser, preId, postId, username, id, null, cb);
    },
    getUser: function (preUser, postUser, username, cb) {
      if (username && typeof username !== 'string') {
        cb = username;
        username = instance.user.username;
      } else if (!username) username = instance.user && instance.user.username ? instance.user.username : ''; // User may not be logged in
      return this.getUserIdParams(preUser, postUser, '', username, -1, {}, cb);
    },
    getParams: function (endpoint, params, cb) {
      if (params && typeof params !== 'object') {
        cb = params;
        params = {};
      } else if (!params) params = {};
      return this.getUserIdParams(endpoint, '', '', '', -1, params, cb);
    },
    get: function (endpoint, cb) {
      if (cb) {
        API.get(endpoint)
        .then((res) => cb(null, res))
        .catch(err => cb(err));
      } else return API.get(endpoint);
    },
    postParams: function (endpoint, params, cb) {
      if (cb) {
        API.post(endpoint, params)
        .then((res) => cb(null, res))
        .catch(err => cb(err));
      } else return API.post(endpoint, params);
    },
    post: function (endpoint, cb) {
      return this.postParams(endpoint, null, cb);
    },
    putParams: function (endpoint, params, cb) {
      var promise = new Promise(function (resolve, reject) {
        API.put(endpoint, params, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    },
    delete: function (endpoint, cb) {
      var promise = new Promise(function (resolve, reject) {
        API.delete(endpoint, function (err, data) {
          if (err) return reject(err);
          resolve(JSON.parse(data));
        });
      });

      if (cb) {
        promise
        .then(function (res) { cb(null, res); })
        .catch(cb);
        return null;
      }
      return promise;
    }
  };
};
