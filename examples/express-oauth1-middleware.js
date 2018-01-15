var Express = require('express');
var Ravelry = require('ravelry');

var rav = Ravelry.oauth1({
  ravAccessKey: process.env.RAV_ACCESS_KEY,
  ravSecretKey: process.env.RAV_SECRET_KEY,
  callbackUrl: `http://localhost:3000/ravelry-callback`
}, [
  'forum-write', 'message-write', 'patternstore-read', 'deliveries-read'
]);

var app = new Express();

app.use(rav.authorizationMiddleware({redirect: '/success'}));

app.get('/', function (req, res) {
  res.send(`Welcome to my Ravelry app, ${rav.user.username}!`);
});

app.get('/success', function (req, res) {
  res.send(`You've successfully logged in as ${rav.user.username}.`);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Listening on ${port}.`);
});
