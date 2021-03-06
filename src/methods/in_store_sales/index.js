module.exports = function (instance, common) {
  return {
    add: function (id, params, cb) {
      // add (id, params[, cb])
      return common.post(`/in_store_sales/carts/${id}/add.json`, params, cb);
    },
    addByPattern: function (id, params, cb) {
      // addByPattern (id, params[, cb])
      return common.post(`/in_store_sales/carts/${id}/add_by_pattern.json`, params, cb);
    },
    checkout: function (id, params, cb) {
      // checkout (id[, params, cb])
      return common.post(`/in_store_sales/carts/${id}/checkout.json`, params, cb);
    },
    create: function (params, cb) {
      // create (params[, cb])
      return common.post('/in_store_sales/carts/create.json', params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/in_store_sales/carts/${id}.json`, cb);
    }
  };
};
