module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    create: function (QueuedProject, cb) {
      // create(QueuedProject[, cb])
      return common.postParams(`/people/${that.user.username}/queue/create.json`, QueuedProject, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people${that.user.username}/queue/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.getUserParams('/people/', '/queue/list.json', username, params, cb);
    },
    order: function (username, cb) {
      // order([username, cb])
      return common.getUser('/people/', '/queue/order.json', username, cb);
    },
    reposition: function (id, params, cb) {
      // reposition(id, param[s, cb])
      return common.postParams(`/people/${that.user.username}/queue/${id}/reposition.json`, params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.getUserId('/people/', '/queue/', '.json', username, id, cb);
    },
    update: function (id, QueuedProject, cb) {
      // update(id, QueuedProject[, cb])
      return common.postParams(`/people/${that.user.username}/queue/${id}/update.json`, QueuedProject, cb);
    }
  };
};
