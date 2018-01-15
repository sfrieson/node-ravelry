module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.get('/shops/search.json', params, cb);
    },
    show: function (id, params, cb) {
      // show(id[, params, cb])
      return common.get(`/shops/${id}.json`, params, cb);
    }
  };
};
