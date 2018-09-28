var qs = require('querystring');
module.exports = function (instance, API) {
  return {
    get: function (endpoint, params, cb) {
      if (arguments.length === 2) {
        if (typeof params === 'function') {
          cb = params;
          params = null;
        }
      }
      if (params) endpoint += '?' + qs.stringify(params);
      if (cb) {
        API.get(endpoint)
          .then((res) => cb(null, res))
          .catch(err => cb(err));
      } else return API.get(endpoint);
    },
    post: function (endpoint, params, cb) {
      if (cb) {
        API.post(endpoint, params)
          .then((res) => cb(null, res))
          .catch(err => cb(err));
      } else return API.post(endpoint, params);
    },
    put: function (endpoint, params, cb) {
      if (cb) {
        API.put(endpoint, params)
          .then(res => cb(null, res))
          .catch(err => cb(err));
      } else return API.put(endpoint, params);
    },
    delete: function (endpoint, cb) {
      if (cb) {
        API.delete(endpoint)
          .then(res => cb(null, res))
          .catch(err => cb(err));
      } else return API.delete(endpoint);
    }
  };
};
