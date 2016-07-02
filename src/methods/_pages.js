module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/pages/${id}.json`, cb);
    },
    update: function (id, params, cb) {
      // update(id, params[, cb])
      return common.putParams(`/pages/${id}.json`, params, cb);
    }
  };
};
