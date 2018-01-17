var utils = require('./');

test('utils.resolveArgs returns a unique set of types in order', function () {
  var order = ['string', 'object', 'function'];
  var str = 'hi';
  var obj = {a: 5};
  var fn = () => {};
  var sorted;

  sorted = utils.resolveArgs(order, [str, obj, fn]);
  expect(sorted[0]).toBeTruthy();
  expect(sorted[1]).toBeTruthy();
  expect(sorted[2]).toBeTruthy();

  sorted = utils.resolveArgs(order, [str]);
  expect(sorted[0]).toBeTruthy();
  expect(sorted[1]).toBeFalsy();
  expect(sorted[2]).toBeFalsy();

  sorted = utils.resolveArgs(order, [obj]);
  expect(sorted[0]).toBeFalsy();
  expect(sorted[1]).toBeTruthy();
  expect(sorted[2]).toBeFalsy();

  sorted = utils.resolveArgs(order, [fn]);
  expect(sorted[0]).toBeFalsy();
  expect(sorted[1]).toBeFalsy();
  expect(sorted[2]).toBeTruthy();

  sorted = utils.resolveArgs(order, [str, obj]);
  expect(sorted[0]).toBeTruthy();
  expect(sorted[1]).toBeTruthy();
  expect(sorted[2]).toBeFalsy();

  sorted = utils.resolveArgs(order, [str, fn]);
  expect(sorted[0]).toBeTruthy();
  expect(sorted[1]).toBeFalsy();
  expect(sorted[2]).toBeTruthy();

  sorted = utils.resolveArgs(order, [obj, fn]);
  expect(sorted[0]).toBeFalsy();
  expect(sorted[1]).toBeTruthy();
  expect(sorted[2]).toBeTruthy();
});
