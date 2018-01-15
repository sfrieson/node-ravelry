module.exports = {
  get: function (path) {
    return Promise.resolve({
      method: 'GET',
      path: path
    });
  },
  post: function (path, body) {
    return Promise.resolve({
      method: 'POST',
      body: body,
      path: path
    });
  },
  put: function (path, body) {
    return Promise.resolve({
      method: 'PUT',
      body: body,
      path: path
    });
  },
  delete: function (path) {
    return Promise.resolve({
      method: 'DELETE',
      path: path
    });
  }
};
