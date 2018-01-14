module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/yarns/search.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/yarns/${id}.json`, cb);
    },
    yarns: function (params, cb) {
      // yarns([params, cb])
      return common.getParams('/yarns.json', params, cb);
    }
  };
};
