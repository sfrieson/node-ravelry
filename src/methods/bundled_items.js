module.exports = function (instance, common) {
  return {
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/bundled_items/${id}.json`, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/bundled_items/${id}.json`, cb);
    }
  };
};
