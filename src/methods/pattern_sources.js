module.exports = function (instance, common) {
  return {
    patterns: function (id, params, cb) {
      // patterns(id, params[, cb])
      return common.getParams(`/pattern_sources/${id}/patterns.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/pattern_sources/search.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/pattern_sources/${id}.json`, cb);
    }
  };
};
