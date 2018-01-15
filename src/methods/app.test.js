/* global test, expect */
var commonCalls = require('../../test/mocks/commonCalls');
var instance = require('../../test/mocks/instance');
var app = require('./app')(instance, commonCalls);
/* doc:head
title: app
*/

/* doc:method
title: config.delete
def: `rav.app.config.delete(keys[, cb])`
parameters:
- keys
  - [String]
  - required
*/
test('config.delete', function (done) {
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

/* doc:method
title: config.get
def: `rav.app.config.get([keys, cb])`
parameters:
- keys
  - [String]
  - optional
*/
test('config.get with keys', function (done) {
  app.config.get(['foo', 'bar'])
  .then(function (req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/config/get.json?keys=foo+bar'
    });
  })
  .then(done);
});

test('config.get without keys (callback)', function (done) {
  app.config.get(function (_, req) {
    expect(req).toEqual({
      method: 'GET',
      path: '/app/config/get.json'
    });
    done();
  });
});

/* doc:method
title: config.set
def: `rav.app.config.set(keysObject[, cb])`
parameters:
- keysObject
  - object
  - required
*/
/**
 * config.set
 *
 * @param {object} keysObject
 */
test('config.delete', function (done) {
  app.config.set({foo: 'bar'})
  .then(function (req) {
    expect(req).toEqual({
      method: 'POST',
      path: '/app/config/delete.json?keys=foo+bar',
      body: null
    });
  })
  .then(done);
});
