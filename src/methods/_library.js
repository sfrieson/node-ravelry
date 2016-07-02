module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    search: function (username, params, cb) {
      // search([username, params, cb])
      return common.getUserParams('/people/', '/library/search.json', username, params, cb);
    }
  };
};
