var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var fiberCategories = require('./')(instance, commonCalls);

test('fiberCategories.list', function (done) {
  fiberCategories.list()
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/fiber_categories/list.json'
    });
  })
  .then(done);
});
