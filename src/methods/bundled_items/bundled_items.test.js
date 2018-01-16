var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var bundledItems = require('./')(instance, commonCalls);

test('bundledItems.delete', function (done) {
  bundledItems.delete(1234)
  .then(function (req) {
    expect(req).toEqual({
      method: 'DELETE',
      path: '/bundled_items/1234.json'
    });
  })
  .then(done);
});

test('bundledItems.show', function (done) {
  bundledItems.show(1234)
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/bundled_items/1234.json'
    });
  })
  .then(done);
});
