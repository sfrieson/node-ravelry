module.exports = function (instance, common) {
  return {
    list: function (cb) {
      // list([cb])
      return common.get('/fiber_attributes.json', cb);
    }
  };
};
