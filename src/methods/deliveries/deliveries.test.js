var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var deliveries = require('./')(instance, commonCalls);

test('deliveries.list', function (done) {
  deliveries.list()
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/deliveries/list.json'
      });
    })
    .then(done);
});

test('deliveries.list w/ pagination', function (done) {
  deliveries.list({page: 2, page_size: 5})
    .then(function (req) {
      expect(req).toEqual({
        method: 'GET',
        path: '/deliveries/list.json?page=2&page_size=5'
      });
    })
    .then(done);
});

test('deliveries.renew', function (done) {
  const data = {customer_email_address: 'me@exmaple.com'};
  deliveries.renew(123, data)
    .then(function (req) {
      expect(req).toEqual({
        method: 'POST',
        path: '/deliveries/123/renew.json',
        body: data
      });
    })
    .then(done);
});
