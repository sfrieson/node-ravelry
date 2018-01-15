module.exports = function (instance, common) {
  return {
    create: function (QueuedProject, cb) {
      // create(QueuedProject[, cb])
      return common.post(`/people/${instance.user.username}/queue/create.json`, QueuedProject, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people${instance.user.username}/queue/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.get(`/people/${username || instance.user.username}/queue/list.json`, params, cb);
    },
    order: function (username, cb) {
      // order([username, cb])
      return common.get(`/people/${username || instance.user.username}/queue/order.json`, cb);
    },
    reposition: function (id, params, cb) {
      // reposition(id, param[s, cb])
      return common.post(`/people/${instance.user.username}/queue/${id}/reposition.json`, params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.get(`/people/${username || instance.user.username}/queue/${id}.json`, cb);
    },
    update: function (id, QueuedProject, cb) {
      // update(id, QueuedProject[, cb])
      return common.post(`/people/${instance.user.username}/queue/${id}/update.json`, QueuedProject, cb);
    }
  };
};
