var qs = require('querystring');
// doc.title: app
// doc.link: #app_
module.exports = function (instance, common) {
  return {
    config: {
      delete: function (keys, cb) {
      // doc.method: config/delete rav.app.config.delete(keys: Array<string>, cb?: () => mixed)
        var endpoint = '/app/config/delete.json?keys=' + keys.join('+');
        return common.post(endpoint, null, cb);
      },
      get: function (keys, cb) {
      // doc.method: config/get rav.app.config.get(keys?: Array<string>, cb?: () => mixed)
        var keyStr = '';
        if (keys && typeof keys === 'object') keyStr = '?keys=' + keys.join('+');
        else cb = keys;
        var endpoint = '/app/config/get.json' + keyStr;
        return common.get(endpoint, cb);
      },
      set: function (paramsObj, cb) {
      // doc.method: config/set rav.app.config.set(paramsObj: { [string]: string }, cb?: () => mixed)
        var endpoint = '/app/config/set.json?' + qs.stringify(paramsObj);
        return common.post(endpoint, null, cb);
      }
    },
    data: {
      delete: function (keys, cb) {
        // doc.method: data/delete rav.app.data.delete(keys: Array<string>, cb?: () => mixed)
        var endpoint = '/app/data/delete.json?keys=' + keys.join('+');
        return common.post(endpoint, null, cb);
      },
      get: function (keys, cb) {
      // doc.method: data/get rav.app.data.get(keys?: Array<string>, cb?: () => mixed)
        var keyStr = '';
        if (keys && typeof keys === 'object') keyStr = '?keys=' + keys.join('+');
        else cb = keys;
        var endpoint = '/app/data/get.json' + keyStr;
        return common.get(endpoint, cb);
      },
      set: function (paramsObj, cb) {
      // doc.method: data/set rav.app.data.set(paramsObj: { [string]: string }, cb?: () => mixed)
        var endpoint = '/app/data/set.json?' + qs.stringify(paramsObj);
        return common.post(endpoint, null, cb);
      }
    }
  };
};
