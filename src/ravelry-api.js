var OAuth = require('oauth').OAuth;

var utils = require('./utilities');

var API_ROOT = 'https://api.ravelry.com';

module.exports = {
  init: function (options, permissions) {
    if (this.initialized) return this;

    this._ravAccessKey = options.ravAccessKey;
    this._ravSecretKey = options.ravSecretKey;
    this._ravPersonalKey = options.ravPersonalKey || null; // TODO Implement usage
    // Defaults to 'oob' as per OAuth 1.0A spec
    this._callbackUrl = options.callbackUrl || 'oob';
    // Aids in for more seamless login for user
    this._responseUrl = options.responseUrl;
    this._oauth = new OAuth(
      'https://www.ravelry.com/oauth/request_token' + (permissions ? '?scope=' + permissions.join('+') : ''),
      'https://www.ravelry.com/oauth/access_token',
      options.ravAccessKey,
      options.ravSecretKey,
      '1.0A',
      this._callbackUrl,
      'HMAC-SHA1'
    );

    this.initialized = true;

    return this;
  },
  getSignInUrl: function (cb) {
    this._oauth.getOAuthRequestToken(
      function (err, oauthToken, oauthSecret, results) {
        if (err) return cb(err);
        else {
          this._oauth_token = oauthToken;
          this._oauth_secret = oauthSecret;
          var url = this._oauth.signUrl(
            'https://www.ravelry.com/oauth/authorize',
            this._oauth_token,
            this._oauth_secret,
            'GET'
          );

          cb(null, url);
        }
      }.bind(this)
    );
  },
  getAccessToken: function (cb) {
    this._oauth.getOAuthAccessToken(
      this._oauth_token,
      this._oauth_secret,
      this._oauth_verifier,
      function (err, oauthAccessToken, oauthAccessTokenSecret, results) {
        this._access_token = oauthAccessToken;
        this._access_secret = oauthAccessTokenSecret;
        return cb(err, results);
      }.bind(this)
    );
  },

  // -----------------
  // Ravelry API calls
  get: function (endpoint, params, cb) {
    if (typeof params === 'function') {
      cb = params;
      params = '';
    }
    console.log('GET', endpoint + utils.toQueryString(params));
    this._oauth.get(
      API_ROOT + endpoint + utils.toQueryString(params),
      this._access_token,
      this._access_secret,
      cb // args: err, data, response
    );
  },
  post: function (endpoint, content, cb) {
    if (typeof content === 'object') content = JSON.stringify(content);
    console.log('POST', endpoint, content);
    this._oauth.post(
      API_ROOT + endpoint,
      this._access_token,
      this._access_secret,
      content,
      'application/json',
      cb // args: err, data, response
    );
  },
  put: function (endpoint, content, cb) {
    if (content) content = JSON.stringify(content);
    console.log('PUT', endpoint + content);
    this._oauth.put(
      API_ROOT + endpoint,
      this._access_token,
      this._access_secret,
      content,
      'application/json',
      cb // args: err, data, response
    );
  },
  delete: function (endpoint, cb) {
    console.log('DELETE', endpoint);
    this._oauth.delete(
      API_ROOT + endpoint,
      this._access_token,
      this._access_secret,
      cb // args: err, data, response
    );
  }
};
