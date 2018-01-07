module.exports = function (instance, common) {
  return {
    create: function (params, cb) {
      // create(params[, cb])
      return common.postParams('/comments/create.json', params, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/comments/${id}.json`, cb);
    },
    list: function (cb) {
      // list([cb])
      return common.get(`/people/${instance.user.username}/comments/list.json`, cb);
    }
  };
};
