module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.get('/yarns_companies/search.json', params, cb);
    }
  };
};
