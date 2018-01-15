var URL = require('url');
var ravleryAPI = require('./ravelry-api');
var initCommonCalls = require('./commonCalls');

var misc = require('./methods/misc');
var app = require('./methods/app');
var bundledItems = require('./methods/bundled_items');
var bundles = require('./methods/bundles');
var carts = require('./methods/carts');
var comments = require('./methods/comments');
var deliveries = require('./methods/deliveries');
var extras = require('./methods/extras');
var favorites = require('./methods/favorites');
var fiber = require('./methods/fiber');
var forumPosts = require('./methods/forum_posts');
var forums = require('./methods/forums');
var friends = require('./methods/friends');
var groups = require('./methods/groups');
var inStoreSales = require('./methods/in_store_sales');
var library = require('./methods/library');
var messages = require('./methods/messages');
var needles = require('./methods/needles');
var packs = require('./methods/packs');
var pages = require('./methods/pages');
var patternSources = require('./methods/pattern_sources');
var patterns = require('./methods/patterns');
var people = require('./methods/people');
var photos = require('./methods/photos');
var productAttachments = require('./methods/product_attachments');
var products = require('./methods/products');
var projects = require('./methods/projects');
var queue = require('./methods/queue');
var savedSearches = require('./methods/saved_searches');
var shops = require('./methods/shops');
var stash = require('./methods/stash');
var stores = require('./methods/stores');
var topics = require('./methods/topics');
var upload = require('./methods/upload');
var volumes = require('./methods/volumes');
var yarns = require('./methods/yarns');

var instance = {
  _initialized: false
};

module.exports = {
  basic: function (options) {
    if (!instance._initialized) init('basic_auth', options);
    return instance;
  },
  oauth1: function (options, permissions) {
    if (!instance._initialized) init('oauth1.0', options, permissions);
    return instance;
  }
};

function init (authorization, options, permissions) {
  var API = ravleryAPI(authorization, options, permissions);
  const commonCalls = initCommonCalls(instance, API);

  if (authorization === 'oauth1.0') {
    instance.getSignInUrl = function (cb) {
      return new Promise(function (resolve, reject) {
        API.getSignInUrl(function (err, result) {
          if (cb) return cb(err, result);
          if (err) reject(err);
          else resolve(result);
        });
      });
    };

    instance.authorize = function (url, cb) {
      return new Promise(function (resolve, reject) {
        var queries = URL.parse(url, true).query;
        if (!queries.oauth_verifier) {
          var err = new Error('URL does not contain OAuth verifier.');
          if (cb) return cb(err);
          else return reject(err);
        }

        API.getAccessToken(queries.oauth_verifier, function (err, data) {
          if (err) {
            if (cb) return cb(err);
            else return reject(err);
          }
          instance.misc.currentUser(function (err, data) {
            if (err) {
              if (cb) return cb(err);
              else return reject(err);
            }

            instance.user = data.user;
            if (cb) return cb(null, data.user);
            else return resolve(data.user);
          });
        });
      });
    };

    instance.authorizationMiddleware = function (middlewareOptions) {
      var opt = Object.assign({
        ignorePaths: null,
        redirect: '/',
        resume: false
      }, middlewareOptions);
      var resumeUrl = null;
      var callbackPath = URL.parse(options.callbackUrl).path;

      return function (req, res, next) {
        if (instance.user) return next();
        var url = URL.parse(req.url, true);
        if (opt.ignorePaths && opt.ignorePaths.indexOf(url.pathname) > -1) return next();
        if (url.pathname === callbackPath) {
          console.log('callback')
          .then(function (user) {
            var redirect = resumeUrl || opt.redirect;
            resumeUrl = null;
            res.redirect(redirect);
          });
        } else {
          instance.getSignInUrl()
          .then(function (signInUrl) {
            if (opt.resume) resumeUrl = url.path;
            res.redirect(signInUrl);
          });
        }
      };
    };
  }

  // Can't use prototype because they need access to instance context
  instance.misc = misc(instance, commonCalls);
  instance.currentUser = instance.misc.currentUser;
  instance.app = app(instance, commonCalls);
  instance.bundledItems = bundledItems(instance, commonCalls);
  instance.bundles = bundles(instance, commonCalls);
  instance.carts = carts(instance, commonCalls);
  instance.comments = comments(instance, commonCalls);
  instance.deliveries = deliveries(instance, commonCalls);
  instance.extras = extras(instance, commonCalls);
  instance.favorites = favorites(instance, commonCalls);
  instance.fiber = fiber(instance, commonCalls);
  instance.forumPosts = forumPosts(instance, commonCalls);
  instance.forums = forums(instance, commonCalls);
  instance.friends = friends(instance, commonCalls);
  instance.groups = groups(instance, commonCalls);
  instance.inStoreSales = inStoreSales(instance, commonCalls);
  instance.library = library(instance, commonCalls);
  instance.messages = messages(instance, commonCalls);
  instance.needles = needles(instance, commonCalls);
  instance.packs = packs(instance, commonCalls);
  instance.pages = pages(instance, commonCalls);
  instance.patternSources = patternSources(instance, commonCalls);
  instance.patterns = patterns(instance, commonCalls);
  instance.people = people(instance, commonCalls);
  instance.photos = photos(instance, commonCalls);
  instance.productAttachments = productAttachments(instance, commonCalls);
  instance.products = products(instance, commonCalls);
  instance.projects = projects(instance, commonCalls);
  instance.queue = queue(instance, commonCalls);
  instance.savedSearches = savedSearches(instance, commonCalls);
  instance.shops = shops(instance, commonCalls);
  instance.stash = stash(instance, commonCalls);
  instance.stores = stores(instance, commonCalls);
  instance.topics = topics(instance, commonCalls);
  instance.upload = upload(instance, commonCalls);
  instance.volumes = volumes(instance, commonCalls);
  instance.yarns = yarns(instance, commonCalls);

  instance._initialized = true;
}
