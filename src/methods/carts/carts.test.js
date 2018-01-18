var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var carts = require('./')(instance, commonCalls);

test('carts.add', function (done) {
  var data = {'item_code': 'whatever-the-code-looks-like'};
  carts.add(1234, data)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/1234/add.json',
      body: data
    });
  })
  .then(done);
});

test('carts.create', function (done) {
  var data = {'store_code': 'whatever-the-code-looks-like'};
  carts.create(data)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/create.json',
      body: data
    });
  })
  .then(done);
});

test('carts.externalCheckout', function (done) {
  carts.externalCheckout(1234)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/1234/external_checkout.json'
    });
  })
  .then(done);
});

test('carts.externalCheckout with params', function (done) {
  var data = {'payment_reference': 'whatever-this-looks-like'};
  carts.externalCheckout(1234, data)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/1234/external_checkout.json',
      body: data
    });
  })
  .then(done);
});

test('carts.loveknitting.externalCheckout', function (done) {
  carts.loveknitting.externalCheckout(1234)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/loveknitting/1234/external_checkout.json'
    });
  })
  .then(done);
});

test('carts.loveknitting.externalCheckout with params', function (done) {
  var data = {
    'payment_reference': 'whatever-this-looks-like',
    'product_id_list': '1423 5532 8320 9112'
  };
  carts.loveknitting.externalCheckout(1234, data)
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/carts/loveknitting/1234/external_checkout.json',
      body: data
    });
  })
  .then(done);
});
