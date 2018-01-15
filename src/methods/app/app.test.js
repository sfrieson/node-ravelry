var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var app = require('./')(instance, commonCalls);

test('app.config.delete', function (done) {
  app.config.delete(['foo', 'bar'])
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/app/config/delete.json?keys=foo+bar',
      body: null
    });
  })
  .then(done);
});

test('app.config.get with keys', function (done) {
  app.config.get(['foo', 'bar'])
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/config/get.json?keys=foo+bar'
    });
  })
  .then(done);
});

test('app.config.get without keys (callback)', function (done) {
  app.config.get(function (_, req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/config/get.json'
    });
    done();
  });
});

test('app.config.set', function (done) {
  app.config.set({foo: 'bar'})
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/app/config/set.json?foo=bar',
      body: null
    });
  })
  .then(done);
});

test('app.data.delete', function (done) {
  app.data.delete(['foo', 'bar'])
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/app/data/delete.json?keys=foo+bar',
      body: null
    });
  })
  .then(done);
});

test('app.data.get with keys', function (done) {
  app.data.get(['foo', 'bar'])
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/data/get.json?keys=foo+bar'
    });
  })
  .then(done);
});

test('app.data.get without keys (callback)', function (done) {
  app.data.get(function (_, req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/data/get.json'
    });
    done();
  });
});

test('app.data.set', function (done) {
  app.data.set({foo: 'bar'})
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/app/data/set.json?foo=bar',
      body: null
    });
  })
  .then(done);
});
