// doc.link: bundledItems
// doc.link: bundled_items
module.exports = function (instance, common) {
  return {
    // doc.method: delete rav.bundledItems.delete(id: number, cb?: () => mixed)
    delete: function (id, cb) {
      return common.delete(`/bundled_items/${id}.json`, cb);
    },
    // doc.method: show rav.bundledItems.show(id: number, cb?: () => mixed)
    show: function (id, cb) {
      return common.get(`/bundled_items/${id}.json`, cb);
    }
  };
};
