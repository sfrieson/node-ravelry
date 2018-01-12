var OAuth = require('oauth').OAuth;

var utils = require('./utilities');

var API_ROOT = 'https://api.ravelry.com';

module.exports = function (authorization, options, permissions) {
  const instance = {
    ravAccessKey: options.ravAccessKey,
    ravSecretKey: options.ravSecretKey,
    api: {}
  };

  if (authorization === 'basic') {
    addBasic(options, instance);
    addBasicMethods(instance);
  }
  if (authorization === 'oauth1.0') {
    addOAuth(options, permissions, instance);
    addOAuthMethods(instance);
  }
  addMethods(instance);
  return instance.api;
};

function addBasic (options, instance) {
  Object.assign(instance, {
    ravPersonalKey: options.ravPersonalKey,
    auth: function () {
      // implementation to come
    }
  });
}
function addOAuth (options, permissions, instance) {
  Object.assign(instance, {
    ravSecretKey: options.ravSecretKey,
    // Defaults to 'oob' as per OAuth 1.0A specification
    callbackUrl: options.callbackUrl || 'oob',
    // Aids in more seamless login for user
    responseUrl: options.responseUrl,
    auth: new OAuth(
      'https://www.ravelry.com/oauth/request_token' + (permissions ? '?scope=' + permissions.join('+') : ''),
      'https://www.ravelry.com/oauth/access_token',
      options.ravAccessKey,
      options.ravSecretKey,
      '1.0A',
      this._callbackUrl,
      'HMAC-SHA1'
    )
  });
}

function addBasicMethods (instance) {
  Object.assign(instance.api, {
    get: function (endpoint, cb) {

    },
    post: function (endpoint, params, cb) {

    },
    put: function (endpoint, params, cb) {

    },
    delete: function (endpoint, cb) {

    }
  });
}

function addOAuthMethods (instance) {
  Object.assign(instance.api, {
    getSignInUrl: function (cb) {
      instance.auth.getOAuthRequestToken(
        function (err, oauthToken, oauthSecret, results) {
          if (err) return cb(err);
          else {
            instance.oauthToken = oauthToken;
            instance.oauthSecret = oauthSecret;
            var url = instance.auth.signUrl(
              'https://www.ravelry.com/oauth/authorize',
              instance.oauthToken,
              instance.oauthSecret,
              'GET'
            );

            cb(null, url);
          }
        }
      );
    },
    getAccessToken: function (oauthVerifier, cb) {
      if (!oauthVerifier) {
        // TODO check wording
        return new Error('You must supply the OAuth verifier from the authorization response');
      }
      instance.auth.getOAuthAccessToken(
        instance.oauthToken,
        instance.oauthSecret,
        oauthVerifier,
        function (err, oauthAccessToken, oauthAccessTokenSecret, results) {
          instance.accessToken = oauthAccessToken;
          instance.accessSecret = oauthAccessTokenSecret;
          return cb(err, results);
        }
      );
    },
    get: function (endpoint, cb) {
      instance.auth.get(
        API_ROOT + endpoint,
        instance.accessToken,
        instance.accessSecret,
        cb // args: err, data, response
      );
    },
    post: function (endpoint, params, cb) {
      instance.auth.post(
        API_ROOT + endpoint,
        instance.accessToken,
        instance.accessSecret,
        params,
        'application/json',
        cb // args: err, data, response
      );
    },
    put: function (endpoint, params, cb) {
      instance.auth.put(
        API_ROOT + endpoint,
        instance.accessToken,
        instance.accessSecret,
        params,
        'application/json',
        cb // args: err, data, response
      );
    },
    delete: function (endpoint, cb) {
      instance.auth.delete(
        API_ROOT + endpoint,
        instance.accessToken,
        instance.accessSecret,
        cb // args: err, data, response
      );
    }
  });
}

function addMethods (instance) {
  Object.assign(instance.api, {
    // -----------------
    // Ravelry API calls
    get: function (endpoint, params, cb) {
      if (typeof params === 'function') {
        cb = params;
        params = '';
      }
      console.log('GET', endpoint + utils.toQueryString(params));
      instance.get(
        API_ROOT + endpoint + utils.toQueryString(params),
        cb // args: err, data, response
      );
    },
    post: function (endpoint, content, cb) {
      if (typeof content === 'object') content = JSON.stringify(content);
      console.log('POST', endpoint, content);
      instance.post(
        API_ROOT + endpoint,
        content,
        cb // args: err, data, response
      );
    },
    put: function (endpoint, content, cb) {
      if (content) content = JSON.stringify(content);
      console.log('PUT', endpoint + content);
      instance.put(
        API_ROOT + endpoint,
        content,
        cb // args: err, data, response
      );
    },
    delete: function (endpoint, cb) {
      console.log('DELETE', endpoint);
      instance.delete(
        API_ROOT + endpoint,
        cb // args: err, data, response
      );
    }
  });
}
