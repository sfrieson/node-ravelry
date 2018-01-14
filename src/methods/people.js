module.exports = function (instance, common) {
  return {
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/people/${id}.json`, cb);
    },
    update: function (id, params, cb) {
      // show(id[, cb])
      return common.postParams(`/people/${id}.json`, params, cb);
    }
  };
};
