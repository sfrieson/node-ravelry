module.exports = function (instance, common) {
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/groups/search.json', params, cb);
    }
  };
};
