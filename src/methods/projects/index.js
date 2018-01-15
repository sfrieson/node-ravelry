module.exports = function (instance, common) {
  return {
    comments: function (username, id, params, cb) {
      // comments([username,] id[, params, cb])
      return common.get(`/projects/${username || instance.user.username}/${id}/comments.json`, params, cb);
    },
    crafts: function (cb) {
      // crafts([cb])
      return common.post('/projects/crafts.json', null, cb);
    },
    create: function (Project, cb) {
      // create(Project[, cb])
      return common.post(`/projects/${instance.user.username}/create.json`, Project, cb);
    },
    createPhoto: function (id, params, cb) {
      // createPhoto(id, params[, cb])
      return common.post(`/projects/${instance.user.username}/${id}/create_photo.json`, params, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/projects/{username}/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.get(`/projects/${username || instance.user.username}/list.json`, params, cb);
    },
    projectStatuses: function (cb) {
      // projectStatuses([cb])
      return common.post('/projects/project_statuses.json', null, cb);
    },
    reorderPhotos: function (id, params, cb) {
      // reorderPhotos(id, params[, cb])
      return common.post(`/projects/${instance.user.username}/${id}/reorder_photos.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.get('/projects/search.json', params, cb);
    },
    show: function (username, id, params, cb) {
      // show([username,] id[, params, cb])
      return common.get(`/projects/${username || instance.user.username}/${id}.json`, params, cb);
    },
    update: function (id, Project, cb) {
      // update(id, Project[, cb])
      return common.post(`/projects/${instance.user.username}/${id}.json`, Project, cb);
    }
  };
};
