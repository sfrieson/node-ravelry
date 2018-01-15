module.exports = function (instance, common) {
  return {
    list: function (cb) {
      // list([cb])
      return common.get('/stores/list.json', cb);
    },
    products: function (id, cb) {
      // products(id[, cb])
      return common.get(`/stores/${id}/products.json`, cb);
    },
    purchases: function (id, cb) {
      // purchases(id[, cb])
      return common.get(`/stores/${id}/purchases.json`, cb);
    }
  };
};
