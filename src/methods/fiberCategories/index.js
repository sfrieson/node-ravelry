// doc.title: fiberCategories
// doc.link: fiber_categories
module.exports = function (instance, common) {
  return {
    // doc.method: list rav.fiberCategories.list(cb?: () => mixed)
    list: function (cb) {
      return common.get('/fiber_categories/list.json', cb);
    }
  };
};
