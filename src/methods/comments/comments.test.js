var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var comments = require('./')(instance, commonCalls);

test('comments.add', function (done) {
  var data = {
    type: 'huh?',
    commented_id: 1234,
    body: 'Here I write.',
    reply_to_id: 'optional'
  };
  comments.create(data)
    .then(function (req) {
      expect(req).toEqual({
        method: 'POST',
        path: '/comments/create.json',
        body: data
      });
    })
    .then(done);
});

test('comments.delete', function (done) {
  comments.delete(1234)
    .then(function (req) {
      expect(req).toEqual({
        method: 'DELETE',
        path: '/comments/1234.json'
      });
    })
    .then(done);
});

test('comments.list', function (done) {
  comments.list()
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/people/sfrieson/comments/list.json'
      });
    })
    .then(done);
});
