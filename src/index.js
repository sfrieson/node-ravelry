var ravleryAPI = require('./ravelry-api');
var initCommonCalls = require('./utilities/commonCalls.js');

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

module.exports = function (options, permissions) {
  if (!instance._initialized) init(options, permissions);
  return instance;
};

function init (options, permissions) {
  var API = ravleryAPI.init(options, permissions);
  const commonCalls = initCommonCalls(instance, API);

  instance.getSignInUrl = function (cb) {
    API.getSignInUrl(cb);
  };

  instance.authorize = function (req, res, next) {
    if (req.url.match('oauth_verifier=') && API._responseUrl) {
      console.log('Authorizing');
      var queries = require('url').parse(req.url, true).query;

      API._oauth_verifier = queries.oauth_verifier;
      API.getAccessToken(function (err, data) {
        if (err) return err;
        // that._access_token already set
        // that._access_secret already set
        instance.currentUser(function (err, data) {
          if (err) return err;
          instance.user = data.user;
          res.writeHead(302, {'Location': API._responseUrl});
          res.end();
        });
      });
    } else if (next) next(); // for use in Express
  };

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
