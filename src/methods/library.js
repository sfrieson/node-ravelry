module.exports = function (instance, common) {
  return {
    search: function (username, params, cb) {
      // search([username, params, cb])
      return common.get(`/people/${username || instance.user.username}/library/search.json`, params, cb);
    }
  };
};
