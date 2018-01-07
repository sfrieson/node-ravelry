module.exports = function (instance, common) {
  return {
    archive: function (id, cb) {
      // archive(id[, cb])
      return common.post(`/messages/${id}/archive.json`, cb);
    },
    create: function (Message, cb) {
      // create(Message[, cb])
      return common.postParams('/messages/create.json', Message, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.post(`/messages/${id}.json`, cb);
    },
    list: function (params, cb) {
      // list(params[, cb])
      return common.getParams('/messages/list.json', params, cb);
    },
    markRead: function (id, cb) {
      // markRead(id[, cb])
      return common.post(`/messages/${id}/mark_read.json`, cb);
    },
    markUnread: function (id, cb) {
      // markUnread(id[, cb])
      return common.post(`/messages/${id}/mark_unread.json`, cb);
    },
    reply: function (id, Message, cb) {
      // reply(id, Message[, cb])
      return common.postParams(`/messages/${id}/reply.json`, Message, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/messages/${id}.json`, cb);
    },
    unarchive: function (id, cb) {
      // unarchive(id[, cb])
      return common.post(`/messages/${id}/unarchive.json`, cb);
    }
  };
};
