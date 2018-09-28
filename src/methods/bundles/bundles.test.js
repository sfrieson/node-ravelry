var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var bundles = require('./')(instance, commonCalls);

test('bundles.create', function (done) {
  var bundle = {'name': 'my awesome bundle', 'notes': 'stuff that is awesome.'};
  bundles.create(bundle)
    .then(function (req) {
      expect(req).toEqual({
        method: 'POST',
        path: '/people/sfrieson/bundles/create.json',
        body: bundle
      });
    })
    .then(done);
});

test('bundles.delete', function (done) {
  bundles.delete(1234)
    .then(function (req) {
      expect(req).toEqual({
        method: 'DELETE',
        path: '/people/sfrieson/bundles/1234.json'
      });
    })
    .then(done);
});

test('bundles.list, args: none', function (done) {
  bundles.list()
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/people/sfrieson/bundles/list.json'
      });
    })
    .then(done);
});

test('bundles.list, args: username, bundle', function (done) {
  bundles.list('casey', {foo: 'bar'})
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/people/casey/bundles/list.json?foo=bar'
      });
    })
    .then(done);
});

test('bundles.show, args: id', function (done) {
  bundles.show(1234)
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/people/sfrieson/bundles/1234.json'
      });
    })
    .then(done);
});

test('bundles.show, args: username, id', function (done) {
  bundles.show('casey', 1234)
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/people/casey/bundles/1234.json'
      });
    })
    .then(done);
});

test('bundles.update', function (done) {
  var data = {name: 'Newly updated bundle'};
  bundles.update(1234, data)
    .then(function (req) {
      expect(req).toEqual({
        method: 'POST',
        path: '/people/sfrieson/bundles/1234.json',
        body: data
      });
    })
    .then(done);
});
