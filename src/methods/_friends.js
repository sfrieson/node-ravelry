module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    activity: function (username, params, cb) {
      // activity([username, params, cb])
      return common.getUserParams('/people/', '/friends/activity.json', username, params, cb);
    },
    create: function (params, cb) {
      // create(params[, cb])
      return common.postParams(`/people/${that.user.username}/friends/create.json`, params, cb);
    },
    destroy: function (id, cb) {
      // destroy(id[, cb])
      return common.post(`/people/${that.user.username}/friends/${id}/destroy.json`, cb);
    },
    list: function (username, cb) {
      // list([username, cb])
      return common.getUser('/people/', '/friends/list.json', username, cb);
    }
  };
};
