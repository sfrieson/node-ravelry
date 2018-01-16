// doc.title: fiberAttributeGroups
// doc.link: fiber_attribute_groups
module.exports = function (instance, common) {
  return {
    // doc.method: list rav.fiberAttributeGroups.list(cb?: () => method)
    list: function (cb) {
      return common.get('/fiber_attribute_groups.json', cb);
    }
  };
};
