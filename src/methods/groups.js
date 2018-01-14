module.exports = function (instance, common) {
  var obj = {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/groups/search.json', params, cb);
    }
  };
  obj.groups = obj.search;
  return obj;
};
