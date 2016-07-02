module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    comments: function (id, params, cb) {
      // comments(id[, params, cb])
      return common.getParams(`/patterns/${id}/comments.json`, params, cb);
    },
    projects: function (id, params, cb) {
      // projects(id[, params, cb])
      return common.getParams(`/patterns/${id}/projects.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/patterns/search.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/patterns/${id}.json`, cb);
    }
  };
};
