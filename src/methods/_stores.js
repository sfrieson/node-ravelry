module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    list: function (cb) {
      // list([cb])
      return common.get('/stores/list.json', cb);
    },
    products: function (id, cb) {
      // products(id[, cb])
      return common.get(`/stores/${id}/products.json`, cb);
    }
  };
};
