var commonCalls = require('../../../test/mocks/commonCalls');
var instance = require('../../../test/mocks/instance');
var extras = require('./')(instance, commonCalls);

test('extras.createAttachment', function (done) {
  const data = {image_id: 1534};
  extras.createAttachment(data)
    .then(function (req) {
      expect(req).toEqual({
        method: 'POST',
        path: '/extras/create_attachment.json',
        body: data
      });
    })
    .then(done);
});
