// doc.title: comments
// doc.link: comments

module.exports = function (instance, common) {
  return {
    // doc.method: create rav.comments.create(params: {}, cb?: () => mixed)
    create: function (params, cb) {
      return common.post('/comments/create.json', params, cb);
    },
    // doc.method: create rav.comments.delete(id: number, cb?: () => mixed)
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/comments/${id}.json`, cb);
    },
    // doc.method: list rav.comments.list(cb?: () => mixed)
    list: function (cb) {
      return common.get(`/people/${instance.user.username}/comments/list.json`, cb);
    }
  };
};
