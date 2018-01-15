module.exports = function (instance, common) {
  return {
    create: function (Pack, cb) {
      // create(Pack[, cb])
      return common.post('/packs/create.json', Pack, cb);
    },
    delete: function (id, cb) {
      // delete(id[, cb])
      return common.delete(`/packs/${id}.json`, cb);
    },
    show: function (id, cb) {
      // show(id[, cb])
      return common.get(`/packs/${id}.json`, cb);
    },
    update: function (id, Pack, cb) {
      // update(id, Pack[, cb])
      return common.put(`/packs/${id}.json`, Pack, cb);
    }
  };
};
