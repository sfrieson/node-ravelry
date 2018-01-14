var https = require('https');

var OAuth = require('oauth').OAuth;

var API_ROOT = 'https://api.ravelry.com';
var API_HOSTNAME = 'api.ravelry.com';

module.exports = function (authorization, options, permissions) {
  const instance = {
    ravAccessKey: options.ravAccessKey,
    ravSecretKey: options.ravSecretKey,
    ravPersonalKey: options.ravPersonalKey,
    api: {}
  };

  if (authorization === 'basic_auth') {
    addBasic(options, instance);
    addBasicMethods(instance);
  }
  if (authorization === 'oauth1.0') {
    addOAuth(options, permissions, instance);
    addOAuthMethods(instance);
  }

  return instance.api;
};

function addBasic (options, instance) {
  const authorization = {
    hostname: API_HOSTNAME,
    auth: `${instance.ravAccessKey}:${instance.ravPersonalKey}`
  };

  Object.assign(instance, {
    ravPersonalKey: options.ravPersonalKey,
    auth: {
      get: function (opt) {
        return new Promise(function (resolve, reject) {
          https.get(Object.assign(opt, authorization), function (res) {
            var data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', function () {
              if (res.statusCode === 200) resolve(JSON.parse(data));
              else reject(data);
            });
          });
        });
      },
      post: function (opt, body) {
        return new Promise(function (resolve, reject) {
          var req = https.request(Object.assign(opt, authorization), function (res) {
            var data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', function () {
              if (res.statusCode === 200) resolve(JSON.parse(data));
              else reject(data);
            });
          });

          req.on('error', reject);

          if (body) req.write(body);
          req.end();
        });
      },
      put: function (path, body, cb) {
        return new Promise(function (resolve, reject) {
          var req = https.put(Object.assign({path: path}, authorization), function (res) {
            var data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', function () {
              if (res.statusCode === 200) resolve(JSON.parse(data));
              else reject(data);
            });
          });

          req.on('error', reject);

          if (body) req.write(JSON.stringify(body));
          req.end();
        });
      },
      delete: function (path, cb) {
        return new Promise(function (resolve, reject) {
          var req = https.delete(Object.assign({path: path}, authorization), function (res) {
            var data = '';

            res.setEncoding('utf8');
            res.on('data', chunk => { data += chunk; });
            res.on('end', function () {
              if (res.statusCode === 200) resolve(JSON.parse(data));
              else reject(data);
            });
          });

          req.on('error', reject);
          req.end();
        });
      }
    }
  });
}

function addOAuth (options, permissions, instance) {
  Object.assign(instance, {
    ravSecretKey: options.ravSecretKey,
    callbackUrl: options.callbackUrl,
    // Aids in more seamless login for user
    responseUrl: options.responseUrl,
    auth: new OAuth(
      'https://www.ravelry.com/oauth/request_token' + (permissions ? '?scope=' + permissions.join('+') : ''),
      'https://www.ravelry.com/oauth/access_token',
      options.ravAccessKey,
      options.ravSecretKey,
      '1.0A',
      options.callbackUrl,
      'HMAC-SHA1'
    )
  });
}

function addBasicMethods (instance) {
  Object.assign(instance.api, {
    get: function (endpoint) {
      return instance.auth.get({
        method: 'GET',
        path: endpoint
      });
    },
    post: function (endpoint, body) {
      const options = {
        method: 'POST',
        path: endpoint
      };

      if (body) {
        body = JSON.stringify(body);
        options.headers = {
          'Content-Type': 'application/json',
          'Content-Length': body.length
        };
      }

      return instance.auth.post(options, body);
    },
    put: instance.auth.put,
    delete: instance.auth.delete
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
      return new Promise(function (resolve, reject) {
        instance.auth.get(
          API_ROOT + endpoint,
          instance.accessToken,
          instance.accessSecret,
          function (err, data, _responseObject) {
            if (err) reject(err);
            else resolve(JSON.parse(data));
          }
        );
      });
    },
    post: function (endpoint, params, cb) {
      return new Promise(function (resolve, reject) {
        instance.auth.post(
          API_ROOT + endpoint,
          instance.accessToken,
          instance.accessSecret,
          params,
          'application/json',
          function (err, data, _response) {
            if (err) reject(err);
            else resolve(JSON.parse(data));
          }
        );
      });
    },
    put: function (endpoint, params, cb) {
      return new Promise(function (resolve, reject) {
        instance.auth.put(
          API_ROOT + endpoint,
          instance.accessToken,
          instance.accessSecret,
          params,
          'application/json',
          function (err, data, _response) {
            if (err) reject(err);
            else resolve(JSON.parse(data));
          }
        );
      });
    },
    delete: function (endpoint, cb) {
      return new Promise(function (resolve, reject) {
        instance.auth.delete(
          API_ROOT + endpoint,
          instance.accessToken,
          instance.accessSecret,
          function (err, data, _response) {
            if (err) reject(err);
            else resolve(JSON.parse(data));
          }
        );
      });
    }
  });
}
