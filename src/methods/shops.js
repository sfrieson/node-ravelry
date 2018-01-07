module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/shops/search.json', params, cb);
    },
    show: function (id, params, cb) {
      // show(id[, params, cb])
      return common.getParams(`/shops/${id}.json`, params, cb);
    }
  };
};
