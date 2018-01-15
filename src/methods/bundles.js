module.exports = function (instance, common) {
  return {
    create: function (Bundle, cb) {
      // create(Bundle[, cb])
      return common.post(`/people/${instance.user.username}/bundles/create.json`, Bundle, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people/${instance.user.username}/bundles/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.get(`/people/${username || instance.user.username}/bundles/list.json`, params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.get(`/people/${username || instance.user.username}/bundles/${id}.json`, cb);
    },
    update: function (id, Bundle, cb) {
      // update(id, Bundle[, cb])
      return common.post(`/people/${instance.user.username}/bundles/${id}.json`, Bundle, cb);
    }
  };
};
