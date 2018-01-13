# Ravelry API

**CURRENTLY IN DEVELOPMENT USE AT YOUR OWN RISK**

A way to make calls to all of the endpoints offered by the Ravelry API.

Currently testing all of the endpoints. Documentation to follow soon.
Please reach out if you'd like to help with either. :)

***

## Getting Started
Setting it up is easy!  Once you have all of your information from Ravelry, put it into the package's factory function depending on your authorization type.

### Basic Authorization

```
var Ravelry = require('ravelry');
var rav = Ravelry.basic({
  ravAccessKey: xxxxxxxxxx,
  ravPersonalKey: xxxxxxxxxx
});
```
Basic authorization is used for accessing the Ravelry's API endpoints that don't need authorization as well as your personal account's data.  If that's all you need, you're good to go from here.  If you need to support accessing other users' data, then you'll need to use OAuth.

See the examples folder for a more fleshed out example of basic auth.

### OAuth1.0
```
var Ravelry = require('ravelry');
var rav = new Ravelry({
  ravAccessKey: xxxxxxxxxx,
  ravSecretKey: xxxxxxxxxx,
  callbackUrl: 'http://localhost:3000/successful-log-in' // The path to be redirected to successfully logging into Ravelry
}, [
  'forum-write', 'message-write' // Permissions scope variables
]);
```

To authenticate your app, get the log-in url from Ravelry using the method `signInUrl()` and direct your user to it.  After the user has successfully signed in, there will be a request to the `callbackUrl`, the OAuth verifier will need to be set in the app. (Note: I am working on making this process easier.  It may change in coming versions.)

```
var URL = require('url');
http.createServer(function (req,res) {

  // When the user gets to this route redirect them to the Ravelry login
  if ( req.url === "/") {

    // Get the URL to the user's Ravelry sign-in page for your app and redirect them there
    rav.signInUrl(function (err, url) {
      res.writeHead(302, {'Location': url} );
      res.end();
    });

    // After the user is successfully logged in they are sent here with their the OAuth verifier
    if (req.url.match('/successful-log-in')) {

      //Get access to the request URL queries
      var url = URL.parse(req.url, true);

      //Set the OAuth verifier to rav.oauthVerifier
      rav.oauthVerifier = url.query.oauth_verifier;

      //Finish authentication of app. You will receive the user's info. You can access the authenticated API routes now.
      rav.accessToken(function (err, user) {
        res.writeHead(200, 'application/json');
        res.end(user);
      });
    }
  }
}
```
### OAuth2.0

Ravelry has started offering OAuth2.0 support since the creation of this package.  It is not currently supported by this package, but it is a plan to do so.

***

## Using the methods

Every endpoint in the [Ravelry API Documentation](http://www.ravelry.com/api) is available.

### Endpoints

The methods (with a few exceptions) are named the same way as the endpoint title is in the documentation are:

[/favorites/list](http://www.ravelry.com/api#favorites_list) => `rav.favorites.list()`

[/messages/mark_read.json](http://www.ravelry.com/api#messages_mark_read) => `rav.messages.markRead()`


### Arguments

When the endpoint requires them, arguments must be supplied in the below order. If an argument is not necessary it may be omitted.
```
rav.someMethod(username, id, params, callback);
```

- **username** - (type: String) If the request is for the authenticated user, this argument may be omitted.  Request for other users' information is only available for GET requests.
Ex: `rav.favorites.list('sfrieson')`

- **id** - (type: Number) Id of requested item.
Ex: `rav.messages.show(22237804)`

- **params** - (type: Object) Either url queries for GET requests or the body content of a POST/PUT request.
Ex: `comments.create({type: "pattern", commented_id:573, body: "Wow!  What a wonderful pattern!"})`

- **callback** - (type: Function) Not required, but the callback function always should be supplied last. It will always send the err as the first argument and the data as the second. See next section for more about callbacks


### Responses

All methods support both callback and Promise style responses.

**Callback style**
```
rav.colorFamilies(function (err, response) {
  // Do something
});
```

**Promise style**
```
rav.colorFamilies()
.then(function (response) {})
.catch(function (err) {});
```

## Please stay tuned for further documentation...
Help is appreciated.
