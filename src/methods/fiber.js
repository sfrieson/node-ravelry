module.exports = function (instance, common) {
  return {
    create: function (FiberStash, cb) {
      // create(FiberStash[, cb])
      return common.post(`/people/${instance.user.username}/fiber/create.json`, FiberStash, cb);
    },

    createPhoto: function (id, params, cb) {
      // createPhoto(id, params[, cb])
      return common.post(`/people/${instance.user.username}/fiber/${id}/create_photo.json`, params, cb);
    },

    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.get(`/people/${username || instance.user.username}/fiber/${id}.json`, cb);
    },

    update: function (id, FiberStash, cb) {
      // update(id, FiberStash[, cb])
      return common.post(`/people/${instance.user.username}/fiber/${id}.json`, FiberStash, cb);
    }
  };
};
