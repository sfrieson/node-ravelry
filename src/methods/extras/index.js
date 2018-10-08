// doc.title: extras
// doc.link: extras

module.exports = function (instance, common) {
  return {
    // doc.method: create_attachment rav.extras.createAttachment(params: {image_id: Integer}, cb?: () => mixed)
    createAttachment: function (params, cb) {
      return common.post('/extras/create_attachment.json', params, cb);
    }
  };
};
