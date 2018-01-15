var qs = require('querystring');

module.exports = function (instance, common) {
  return {
    config: {
      delete: function (keys, cb) {
        var endpoint = '/app/config/delete.json' + '?keys=' + keys.join('+');
        return common.post(endpoint, null, cb);
      },
      get: function (keys, cb) {
        // config.get([keys, cb])
        var keyStr = '';
        if (keys && typeof keys === 'object') keyStr = '?keys=' + keys.join('+');
        else cb = keys;
        var endpoint = '/app/config/get.json' + keyStr;
        return common.get(endpoint, cb);
      },
      set: function (object, cb) {
        // config.set(object[, cb])
        var endpoint = '/app/config/set.json?' + qs.stringify(object);
        return common.post(endpoint, null, cb);
      }
    },
    data: {
      delete: function (keyArr, cb) {
        // data.delete(keyArr[, cb])
        var keys = '';
        if (keyArr) keys = '?keys=' + keyArr.join('+');
        var endpoint = '/app/data/delete.json' + keys;
        return common.post(endpoint, null, cb);
      },
      get: function (keysArrOrStr, cb) {
        // data.get([keysArrOrStr:Array|String, cb])
        var endpoint = '/app/data/get.json?keys=';
        endpoint += typeof keysArrOrStr === 'object' ? keysArrOrStr.join('+') : keysArrOrStr;
        return common.get(endpoint, cb);
      },
      set: function (object, cb) {
        // data.set(keyValues[, cb])
        var endpoint = '/app/data/set.json?' + qs.stringify(object);
        return common.post(endpoint, null, cb);
      }
    }
  };
};
