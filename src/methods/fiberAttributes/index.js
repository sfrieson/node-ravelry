// doc.title: fiberAttributes
// doc.link: fiber_attributes
module.exports = function (instance, common) {
  return {
    // doc.method: list rav.fiberAttributes.list(cb?: () => method)
    list: function (cb) {
      return common.get('/fiber_attributes.json', cb);
    }
  };
};
