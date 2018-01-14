module.exports = function (instance, common) {
  return {
    colorFamilies: function (cb) {
      // colorFamilies([cb])
      return common.get('/color_families.json', cb);
    },
    currentUser: function (cb, cache) {
      // currentUser([cb, cache])
      cache = cache || true;
      if (cache && instance.user) return cb(null, instance.user);
      return common.get('/current_user.json', cb);
    },
    yarnWeights: function (cb) {
      // yarnWeights([cb])
      return common.get('/yarn_weights.json', cb);
    }
  };
};
