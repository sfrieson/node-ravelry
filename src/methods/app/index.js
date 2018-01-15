var qs = require('querystring');

module.exports = function (instance, common) {
  return {
    config: {
      delete: function (keys, cb) {
      // rav.app.config.delete(keys: Array<string>, cb?: () => mixed)
        var endpoint = '/app/config/delete.json?keys=' + keys.join('+');
        return common.post(endpoint, null, cb);
      },
      get: function (keys, cb) {
      // rav.app.config.get(keys?: Array<string>, cb?: () => mixed)
        var keyStr = '';
        if (keys && typeof keys === 'object') keyStr = '?keys=' + keys.join('+');
        else cb = keys;
        var endpoint = '/app/config/get.json' + keyStr;
        return common.get(endpoint, cb);
      },
      set: function (paramsObj, cb) {
      // rav.app.config.set(paramsObj:{ [string]: string }, cb?: () => mixed)
        var endpoint = '/app/config/set.json?' + qs.stringify(paramsObj);
        return common.post(endpoint, null, cb);
      }
    },
    data: {
      delete: function (keys, cb) {
        // rav.app.data.delete(keys: Array<string>, cb?: () => mixed)
        var endpoint = '/app/data/delete.json?keys=' + keys.join('+');
        return common.post(endpoint, null, cb);
      },
      get: function (keys, cb) {
      // rav.app.data.get(keys?: Array<string>, cb?: () => mixed)
        var keyStr = '';
        if (keys && typeof keys === 'object') keyStr = '?keys=' + keys.join('+');
        else cb = keys;
        var endpoint = '/app/data/get.json' + keyStr;
        return common.get(endpoint, cb);
      },
      set: function (paramsObj, cb) {
      // rav.app.data.set(object: { [string]: string }, cb?: () => mixed)
        var endpoint = '/app/data/set.json?' + qs.stringify(paramsObj);
        return common.post(endpoint, null, cb);
      }
    }
  };
};
