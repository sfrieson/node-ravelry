module.exports = function (instance, common) {
  return {
    loveknitting: {
      export: function (params, cb) {
        // loveknitting.export(params[, cb])
        return common.get('/products/loveknitting/export.json', params, cb);
      },
      updateStatus: function (id, params, cb) {
        // loveknitting.updateStatus(id, params[, cb])
        return common.post(`/products/${id}/loveknitting/update_status.json`, params, cb);
      }
    }
  };
};
