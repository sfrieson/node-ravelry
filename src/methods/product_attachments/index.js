module.exports = function (instance, common) {
  return {
    generateDownloadLink: function (id, cb) {
      // generateDownloadLink(id[, cb])
      return common.post(`/product_attachments/${id}/generate_download_link.json`, {id: id}, cb);
    }
  };
};
