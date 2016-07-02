module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    create: function (Bundle, cb) {
      // create(Bundle[, cb])
      return common.postParams(`/people/${that.user.username}/bundles/create.json`, Bundle, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/people/${that.user.username}/bundles/${id}.json`, cb);
    },
    list: function (username, params, cb) {
      // list([username, params, cb])
      return common.getUserParams('/people/', '/bundles/list.json', username, params, cb);
    },
    show: function (username, id, cb) {
      // show([username,] id[, cb])
      return common.getUserId('/people/', '/bundles/', '.json', username, id, cb);
    },
    update: function (id, Bundle, cb) {
      // update(id, Bundle[, cb])
      return common.postParams(`/people/${that.user.username}/bundles/${id}.json`, Bundle, cb);
    }
  };
};
