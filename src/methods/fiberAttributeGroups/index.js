module.exports = function (instance, common) {
  return {
    list: function (cb) {
      // list([cb])
      return common.get('/fiber_attribute_groups.json', cb);
    }
  };
};
