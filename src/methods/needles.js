module.exports = function (instance, common) {
  return {
    list: function (username, cb) {
      // list([username, cb])
      return common.get(`/people/${username || instance.user.username}/needles/list.json`, cb);
    },
    sizes: function (params, cb) {
      // sizes([params, cb])
      return common.get('/needles/sizes.json', params, cb);
    },
    types: function (cb) {
      // types([cb])
      return common.get('/needles/types.json', cb);
    }
  };
};
