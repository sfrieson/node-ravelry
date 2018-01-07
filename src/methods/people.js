module.exports = function (instance, common) {
  return {
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/people/${id}.json`, cb);
    }
  };
};
