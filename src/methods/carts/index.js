var utils = require('../../../utils');
// doc.title: carts
// doc.link: carts
module.exports = function (instance, common) {
  return {
    // doc.method: add rav.carts.add(id: number, params: { item_code: string }, cb?: () => mixed)
    add: function (id, params, cb) {
      return common.post(`/carts/${id}/add.json`, params, cb);
    },
    // doc.method: create rav.carts.create(params: { store_id: string }, cb?: () => mixed)
    create: function (params, cb) {
      return common.post('/carts/create.json', params, cb);
    },
    // doc.method: external_checkout rav.carts.externalCheckout(id: number, params?: { payment_reference: string }, cb?: () => mixed)
    externalCheckout: function (id, params, cb) {
      var args = utils.resolveArgs(['object', 'function'], [params, cb]);
      params = args[0];
      cb = args[1];

      return common.post(`/carts/${id}/external_checkout.json`, params, cb);
    },
    // doc.method: loveknitting/external_checkout rav.carts.loveknitting.externalCheckout(id: number, params?: { payment_reference: string,product_id_list: string }, cb?: () => mixed)
    loveknitting: {
      externalCheckout: function (id, params, cb) {
        var args = utils.resolveArgs(['object', 'function'], [params, cb]);
        params = args[0];
        cb = args[1];

        return common.post(`/carts/loveknitting/${id}/external_checkout.json`, params, cb);
      }
    }
  };
};
