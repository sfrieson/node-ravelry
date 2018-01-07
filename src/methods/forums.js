module.exports = function (instance, common) {
  return {
    sets: function (cb) {
      // sets([cb])
      return common.get('/forums/sets.json', cb);
    },
    topics: function (id, params, cb) {
      // topics(id, params[, cb])
      return common.getParams(`/forums/${id}/topics.json`, params, cb);
    }
  };
};
