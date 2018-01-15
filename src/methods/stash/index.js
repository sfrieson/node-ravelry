module.exports = function (instance, common) {
  return {
    comments: function (username, id, params, cb) {
      // comments([username,] id[, params, cb])
      return common.get(`/people/${username || instance.user.username}/stash/${id}/comments.json`, params, cb);
    },
    create: function (Stash, cb) {
      // create(Stash[, cb])
      return common.post(`/people/${instance.user.username}/stash/create.json`, Stash, cb);
    },
    createPhoto: function (id, params, cb) {
      // createPhoto(id, params[, cb])
      return common.post(`/people/${instance.user.username}/stash/${id}/create_photo.json`, params, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people/${instance.user.username}/stash/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.get(`/people/${username || instance.user.username}/stash/list.json`, params, cb);
    },
    reorderPhotos: function (id, params, cb) {
      // reorderPhotos(id, params[, cb])
      return common.post(`/people/${instance.user.username}/stash/${id}/reorder_photos.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.get('/stash/search.json', params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.get(`/people/${username || instance.user.username}/stash/${id}.json`, cb);
    },
    unified: {
      list: function (username, params, cb) {
        // unified.list([username, params, cb])
        return common.get(`/people/${username || instance.user.username}/stash/unified/list.json`, params, cb);
      }
    },
    update: function (id, Stash, cb) {
      // update(id, Stash[, cb])
      return common.post(`/people/${instance.user.username}/stash/${id}.json`, Stash, cb);
    }
  };
};
