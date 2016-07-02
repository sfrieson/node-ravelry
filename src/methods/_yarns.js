module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/yarns/search.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/yarns/${id}.json`, cb);
    }
  };
};
