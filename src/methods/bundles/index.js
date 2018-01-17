var utils = require('../../../utils');
// doc.title: bundles
// doc.link: bundles

module.exports = function (instance, common) {
  return {
    // doc.method: create rav.bundles.create(data: Bundle, cb?: () => mixed)
    create: function (Bundle, cb) {
      return common.post(`/people/${instance.user.username}/bundles/create.json`, Bundle, cb);
    },
    // doc.method: delete rav.bundles.delete(id: number, cb?: () => mixed)
    delete: function (id, cb) {
      return common.delete(`/people/${instance.user.username}/bundles/${id}.json`, cb);
    },
    // doc.method: list rav.bundles.list(username?: string, params?: { [string]: string }, cb?: () => mixed)
    list: function (username, params, cb) {
      var args = utils.resolveArgs(['string', 'object', 'function'], arguments);

      username = args[0];
      params = args[1];
      cb = args[2];

      return common.get(`/people/${username || instance.user.username}/bundles/list.json`, params, cb);
    },
    // doc.method: show rav.bundles.show(username?: string, id: number, cb?: () => mixed)
    show: function (username, id, cb) {
      var args = utils.resolveArgs(['string', 'number', 'function'], arguments);

      username = args[0];
      id = args[1];
      cb = args[2];

      return common.get(`/people/${username || instance.user.username}/bundles/${id}.json`, cb);
    },
    // doc.method: update rav.bundles.update(id: number, data: Bundle, cb?: () => mixed)
    update: function (id, Bundle, cb) {
      return common.post(`/people/${instance.user.username}/bundles/${id}.json`, Bundle, cb);
    }
  };
};
