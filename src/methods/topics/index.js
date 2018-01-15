module.exports = function (instance, common) {
  return {
    create: function (params, cb) {
      // create(params[, cb])
      return common.post('/topics/create.json', params, cb);
    },
    posts: function (id, params, cb) {
      // posts(id[, params, cb])
      return common.get(`/topics/${id}/posts.json`, params, cb);
    },
    read: function (id, params, cb) {
      // read(id, params[, cb])
      return common.post(`/topics/${id}/read.json`, params, cb);
    },
    reply: function (id, params, cb) {
      // reply(id, params[, cb])
      return common.post(`/topics/${id}/reply.json`, params, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/topics/${id}.json`, cb);
    },
    update: function (id, params, cb) {
      // update(id, params[, cb])
      return common.post(`/topics/${id}.json`, params, cb);
    }
  };
};
