module.exports = function (instance, common) {
  return {
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/pages/${id}.json`, cb);
    },
    update: function (id, params, cb) {
      // update(id, params[, cb])
      return common.put(`/pages/${id}.json`, params, cb);
    }
  };
};
