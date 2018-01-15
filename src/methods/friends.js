module.exports = function (instance, common) {
  return {
    activity: function (username, params, cb) {
      // activity([username, params, cb])
      return common.get(`/people/${username || instance.user.username}/friends/activity.json`, params, cb);
    },
    create: function (params, cb) {
      // create(params[, cb])
      return common.post(`/people/${instance.user.username}/friends/create.json`, params, cb);
    },
    destroy: function (id, cb) {
      // destroy(id[, cb])
      return common.post(`/people/${instance.user.username}/friends/${id}/destroy.json`, null, cb);
    },
    list: function (username, cb) {
      // list([username, cb])
      return common.get(`/people/${username || instance.user.username}/friends/list.json`, cb);
    }
  };
};
