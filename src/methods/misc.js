module.exports = function (instance, common) {
  return {
    currentUser: function (cb, cache) {
      // currentUser([cb, cache])
      cache = cache || true;
      if (cache && instance.user) return cb(null, instance.user);
      common.get('/current_user.json', cb);
    },
    colorFamilies: function (cb) {
      // colorFamilies([cb])
      common.get('/color_families.json', cb);
    },
    yarnWeights: function (cb) {
      // yarnWeights([cb])
      common.get('/yarn_weights.json', cb);
    }
  };
};
