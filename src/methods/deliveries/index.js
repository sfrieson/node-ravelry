// doc.title: deliveries
// doc.link: deliveries

module.exports = function (instance, common) {
  return {
    // doc.method: list rav.deliveries.create(cb?: () => mixed)
    list: function (params, cb) {
      return common.get('/deliveries/list.json', params, cb);
    },
    // doc.method: renew rav.deliveries.renew(id: number, params: {customer_email_address: String}, cb?: () => mixed)
    renew: function (id, params, cb) {
      return common.post(`/deliveries/${id}/renew.json`, params, cb);
    }
  };
};
