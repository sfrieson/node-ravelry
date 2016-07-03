module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  var obj = {
    comments: function (username, id, params, cb) {
      // comments([username,] id[, params, cb])
      return common.getUserIdParams('/people/', '/stash/', '/comments.json', username, id, params, cb);
    },
    create: function (Stash, cb) {
      // create(Stash[, cb])
      return common.postParams(`/people/${that.user.username}/stash/create.json`, Stash, cb);
    },
    createPhoto: function (id, params, cb) {
      // createPhoto(id, params[, cb])
      return common.postParams(`/people/${that.user.username}/stash/${id}/create_photo.json`, params, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people/${that.user.username}/stash/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.getUserParams('/people/', '/stash/list.json', username, params, cb);
    },
    reorderPhotos: function (id, params, cb) {
      // reorderPhotos(id, params[, cb])
      return common.postParams(`/people/${that.user.username}/stash/${id}/reorder_photos.json`, params, cb);
    },
    search: function (params, cb) {
      // search([params, cb])
      return common.getParams('/stash/search.json', params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.getUserId('/people/', '/stash/', '.json', username, id, cb);
    },
    update: function (id, Stash, cb) {
      // update(id, Stash[, cb])
      return common.postParams(`/people/${that.user.username}/stash/${id}.json`, Stash, cb);
    },
    unified: {
      list: function (username, params, cb) {
        // unified.list([username, params, cb])
        return common.getUserParams('/people/', '/stash/unified/list.json', username, params, cb);
      }
    }
  };
  obj.unifiedList = obj.unified.list;
  return obj;
};
