module.exports = function (instance, common) {
  return {
    search: function (username, params, cb) {
      // search([username, params, cb])
      return common.getUserParams('/people/', '/library/search.json', username, params, cb);
    }
  };
};
