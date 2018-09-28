var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var fiberAttributeGroups = require('./')(instance, commonCalls);

test('fiberAttributeGroups.list', function (done) {
  fiberAttributeGroups.list()
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/fiber_attribute_groups.json'
      });
    })
    .then(done);
});
