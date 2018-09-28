var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var fiberAttributes = require('./')(instance, commonCalls);

test('fiberAttributes.list', function (done) {
  fiberAttributes.list()
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/fiber_attributes.json'
      });
    })
    .then(done);
});
