module.exports = function (that) {
  var common = require('../utilities/commonCalls.js')(that);
  return {
    generateDownloadLink: function (id, cb) {
      // generateDownloadLink(id[, cb])
      return common.postParams(`/product_attachments/${id}/generate_download_link.json`, params, cb);
    }
  };
};
