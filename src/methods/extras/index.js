module.exports = function (instance, common) {
  return {
    createAttachment: function (params, cb) {
      // createAttachment(params[, cb]){
      return common.post('/extras/create_attachment.json', params, cb);
    }
  };
};
