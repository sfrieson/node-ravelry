module.exports = function (instance, common) {
  return {
    add: function (id, params, cb) {
      // add(id, params[, cb])
      return common.post(`/carts/${id}/add.json`, params, cb);
    },
    create: function (params, cb) {
      // create(params[, cb])
      return common.post('/carts/create.json', params, cb);
    },
    externalCheckout: function (id, params, cb) {
      // externalCheckout (id[, params, cb])
      return common.post(`/carts/${id}/external_checkout.json`, params, cb);
    },
    loveknitting: {
      externalCheckout: function (id, params, cb) {
        // loveknitting.externalCheckout(id[, params, cb])
        return common.post(`/carts/loveknitting/${id}/external_checkout.json`, params, cb);
      }
    }
  };
};
