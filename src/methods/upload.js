module.exports = function (instance, common) {
  return {
    image: function (params, cb) {
      // image(params[, cb])
      return common.post('/upload/image.json', params, cb);
    },
    requestToken: function (cb) {
      // requestToken([cb])
      return common.post('/upload/request_token.json', null, cb);
    },
    status: function (params, cb) {
      // status(params[, cb])
      return common.get('/upload/image/status.json', params, cb);
    }
  };
};
