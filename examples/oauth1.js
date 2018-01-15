var http = require('http');
var URL = require('url');

var Ravelry = require('../');

var port = 3000;
var callbackPath = '/ravelry-callback';

var rav = Ravelry.oauth1({
  ravAccessKey: process.env.RAV_ACCESS_KEY,
  ravSecretKey: process.env.RAV_SECRET_KEY,
  callbackUrl: `http://localhost:${port}${callbackPath}`
}, [
  'forum-write', 'message-write', 'patternstore-read', 'deliveries-read'
]);

function requestHandler (request, response) {
  var url = URL.parse(request.url);

  switch (url.pathname) {
    case '/':
      if (rav.user) response.end(`Hello ${rav.user.username}, you are logged in.`);
      else {
        response.writeHead('302', {'Location': '/login'});
        response.end();
      }
      break;
    case '/login':
      if (!rav.user) {
        rav.getSignInUrl()
        .then(function (url) {
          response.writeHead(200, {'Content-Type': 'text/html'});
          response.end(`<a href="${url}">Click here to login with Ravelry</a>.`);
        });
      } else {
        response.writeHead(302, {'Location': '/'});
        response.end();
      }
      break;
    case callbackPath:
      rav.authorize(url.path) // url.path includes querystring
      .then(function (user) {
        response.writeHead('302', {'Location': '/'});
        response.end();
      });
      break;
    default:
      response.writeHead('404', {'Location': '/login'});
      response.end();
  }
}

var server = http.createServer(requestHandler);

server.listen(port, function (err) {
  if (err) console.log('Error:', err);

  console.log(`Listening on ${port}.`);
});
