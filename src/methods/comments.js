module.exports = function (instance, common) {
  return {
    create: function (params, cb) {
      // create(params[, cb])
      return common.postParams('/comments/create.json', params, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/comments/${id}.json`, cb);
    }
  };
};
