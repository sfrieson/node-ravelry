module.exports = function (instance, common) {
  return {
    list: function (username, cb) {
      // list([username, cb])
      return common.getUser('/people/', '/needles/list.json', username, cb);
    },
    sizes: function (params, cb) {
      // sizes([params, cb])
      return common.getParams('/needles/sizes.json', params, cb);
    },
    types: function (cb) {
      // types([cb])
      return common.get('/needles/types.json', cb);
    }
  };
};
