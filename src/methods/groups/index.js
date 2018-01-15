module.exports = function (instance, common) {
  var obj = {
    search: function (params, cb) {
      // search([params, cb])
      return common.ge('/groups/search.json', params, cb);
    }
  };
  obj.groups = obj.search;
  return obj;
};
