var utils = require('../utilities');

module.exports = function (instance, common) {
  return {
    config: {
      delete: function (keyArr, cb) {
        // config.delete(keyArr[, cb])
        var keys = '';
        if (keyArr) keys = '?keys=' + keyArr.join('+');
        var endpoint = '/app/config/delete.json' + keys;
        return common.post(endpoint, cb);
      },
      get: function (keyArr, cb) {
        // config.get([keyArr, cb])
        var keys = '';
        if (keyArr) keys = '?keys=' + keyArr.join('+');
        var endpoint = '/app/config/get.json' + keys;
        return common.get(endpoint, cb);
      },
      set: function (object, cb) {
        // config.set(object[, cb])
        var endpoint = '/app/config/set.json' + utils.toQueryString(object);
        return common.post(endpoint, cb);
      }
    },
    data: {
      delete: function (keyArr, cb) {
        // data.delete(keyArr[, cb])
        var keys = '';
        if (keyArr) keys = '?keys=' + keyArr.join('+');
        var endpoint = '/app/data/delete.json' + keys;
        return common.post(endpoint, cb);
      },
      get: function (keyArr, cb) {
        // data.get([keyArr, cb])
        var keys = '';
        if (keyArr) keys = '?keys=' + keyArr.join('+');
        var endpoint = '/app/data/get.json' + keys;
        return common.get(endpoint, cb);
      },
      set: function (object, cb) {
        // data.set(keyValues[, cb])
        var endpoint = '/app/data/set.json' + utils.toQueryString(object);
        return common.post(endpoint, cb);
      }
    }
  };
};
