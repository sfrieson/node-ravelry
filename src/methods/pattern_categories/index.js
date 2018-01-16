// doc.title: patternCategories
// doc.link: pattern_categories
module.exports = function (instance, common) {
  return {
    list: function (cb) {
      // doc.method: list rav.patternCategories.list(cb?: () => method)
      return common.get('/pattern_categories/list.json', cb);
    }
  };
};
