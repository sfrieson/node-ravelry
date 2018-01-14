
module.exports = function (instance, common) {
  return {
    addToBundle: function (id, Bundle, cb) {
      // addToBundle(id, Bundle[, cb])
      return common.postParams(`/people/${instance.user.username}/favorites/${id}/add_to_bundle.json`, Bundle, cb);
    },
    create: function (Bookmark, cb) {
      // create(Bookmark[, cb])
      return common.postParams(`/people/${instance.user.username}/favorites/create.json`,
          Bookmark, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.deleteId(`/people/${instance.user.username}/favorites/`, id, '.json', cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.getUserParams('/people/', '/favorites/list.json', username, params, cb);
    },
    removeFromBundle: function (id, Bundle, cb) {
      // removeFromBundle(id, Bundle[, cb])
      return common.postParams(`/people/${instance.user.username}/favorites/${id}/remove_from_bundle.json`, Bundle, cb);
    },
    show: function (username, id, cb) {
      // show(username, id[, cb])
      return common.getUser('/people/', '/favorites/', '.json', username, id, cb);
    },
    update: function (id, Bookmark, cb) {
      // update(id, Bookmark[, cb])
      return common.postParams(`/people/${instance.user.username}/favorites/${id}.json`, Bookmark, cb);
    }
  };
};
