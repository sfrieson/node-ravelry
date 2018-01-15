module.exports = function (instance, common) {
  return {
    comments: function (id, params, cb) {
      // comments(id[, params, cb])
      return common.get(`/patterns/${id}/comments.json`, params, cb);
    },
    patterns: function (params, cb) {
      // projects(id[, params, cb])
      return common.get(`/patterns.json`, params, cb);
    },
    projects: function (id, params, cb) {
      // projects(id[, params, cb])
      return common.get(`/patterns/${id}/projects.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.get('/patterns/search.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/patterns/${id}.json`, cb);
    }
  };
};
