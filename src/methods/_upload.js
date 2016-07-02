module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    image: function (params, cb) {
      // image(params[, cb])
      return common.postparams('/upload/image.json', params, cb);
    },
    requestToken: function (cb) {
      // requestToken([cb])
      return common.post('/upload/request_token.json', cb);
    },
    status: function (params, cb) {
      // status(params[, cb])
      return common.getParams('/upload/image/status.json', params, cb);
    }
  };
};
