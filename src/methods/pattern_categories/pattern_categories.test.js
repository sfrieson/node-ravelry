var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var patternCategories = require('./')(instance, commonCalls);

test('patternCategories.show', function (done) {
  patternCategories.list()
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/pattern_categories/list.json'
    });
  })
  .then(done);
});
