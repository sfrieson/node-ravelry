module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    config: {
      delete: function (KeyValArr, cb) {
        // config.delete(KeyValArr[, cb])
        var keys = '';
        if (KeyValArr) keys = '?keys=' + KeyValArr.join('+');
        var endpoint = '/app/config/delete.json' + keys;
        return common.post(endpoint, cb);
      },
      get: function (KeyValArr, cb) {
        // config.get([KeyValArr, cb])
        var keys = '';
        if (KeyValArr) keys = '?keys=' + KeyValArr.join('+');
        var endpoint = '/app/config/get.json' + keys;
        return common.get(endpoint, cb);
      },
      set: function (keyValues, cb) {
        // config.set(keyValues[, cb])
        var endpoint = '/app/config/set.json';
        return common.postParams(endpoint, keyValues, cb);
      }
    },
    data: {
      delete: function (KeyValArr, cb) {
        // data.delete(KeyValArr[, cb])
        var keys = '';
        if (KeyValArr) keys = '?keys=' + KeyValArr.join('+');
        var endpoint = '/app/data/delete.json' + keys;
        return common.post(endpoint, cb);
      },
      get: function (KeyValArr, cb) {
        // data.get([KeyValArr, cb])
        var keys = '';
        if (KeyValArr) keys = '?keys=' + KeyValArr.join('+');
        var endpoint = '/app/data/get.json' + keys;
        return common.get(endpoint, cb);
      },
      set: function (keyValues, cb) {
        // data.set(keyValues[, cb])
        var endpoint = '/app/data/set.json';
        return common.postParams(endpoint, keyValues, cb);
      }
    }
  };
};
