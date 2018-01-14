module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/yarns_companies/search.json', params, cb);
    }
  };
};
