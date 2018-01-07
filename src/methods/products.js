module.exports = function (instance, common) {
  var obj = {
    loveknitting: {
      export: function (params, cb) {
        // loveknitting.export(params[, cb])
        return common.getParams('/products/loveknitting/export.json', params, cb);
      },
      updateStatus: function (id, params, cb) {
        // loveknitting.updateStatus(id, params[, cb])
        return common.postParams(`/products/${id}/loveknitting/update_status.json`, params, cb);
      }
    }
  };
  obj.export = obj.loveknitting.export;
  obj.updateStatus = obj.loveknitting.updateStatus;
  return obj;
};
