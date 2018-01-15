module.exports = function (instance, common) {
  return {
    list: function (cb) {
      // list([cb])
      return common.get('/saved_searches/list.json', cb);
    }
  };
};
