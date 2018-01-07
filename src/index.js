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

module.exports = function (options, permissions) {
  var API = ravleryAPI.init(options, permissions);
  const commonCalls = initCommonCalls(this, API);

  this.getSignInUrl = function (cb) {
    API.getSignInUrl(cb);
  };

  this.authorize = function (req, res, next) {
    console.log('req url:', req.url);
    if (req.url.match('oauth_verifier=') && API._responseUrl) {
      console.log('Authorizing');
      var queries = require('url').parse(req.url, true).query;

      API._oauth_verifier = queries.oauth_verifier;
      API.getAccessToken(function (err, data) {
        if (err) return err;
        // that._access_token already set
        // that._access_secret already set
        this.currentUser(function (err, data) {
          if (err) return err;
          this.user = data.user;
          res.writeHead(302, {'Location': API._responseUrl});
          res.end();
        }.bind(this));
      }.bind(this));
    } else if (next) next(); // for use in Express
  };

  // Can't use prototype because they need access to this context
  this.misc = misc(this, commonCalls);
  this.currentUser = this.misc.currentUser; // Convenience. TODO: Check that this works
  this.app = app(this, commonCalls);
  this.bundledItems = bundledItems(this, commonCalls);
  this.bundles = bundles(this, commonCalls);
  this.carts = carts(this, commonCalls);
  this.comments = comments(this, commonCalls);
  this.deliveries = deliveries(this, commonCalls);
  this.extras = extras(this, commonCalls);
  this.favorites = favorites(this, commonCalls);
  this.fiber = fiber(this, commonCalls);
  this.forumPosts = forumPosts(this, commonCalls);
  this.forums = forums(this, commonCalls);
  this.friends = friends(this, commonCalls);
  this.groups = groups(this, commonCalls);
  this.inStoreSales = inStoreSales(this, commonCalls);
  this.library = library(this, commonCalls);
  this.messages = messages(this, commonCalls);
  this.needles = needles(this, commonCalls);
  this.packs = packs(this, commonCalls);
  this.pages = pages(this, commonCalls);
  this.patternSources = patternSources(this, commonCalls);
  this.patterns = patterns(this, commonCalls);
  this.people = people(this, commonCalls);
  this.photos = photos(this, commonCalls);
  this.productAttachments = productAttachments(this, commonCalls);
  this.products = products(this, commonCalls);
  this.projects = projects(this, commonCalls);
  this.queue = queue(this, commonCalls);
  this.savedSearches = savedSearches(this, commonCalls);
  this.shops = shops(this, commonCalls);
  this.stash = stash(this, commonCalls);
  this.stores = stores(this, commonCalls);
  this.topics = topics(this, commonCalls);
  this.upload = upload(this, commonCalls);
  this.volumes = volumes(this, commonCalls);
  this.yarns = yarns(this, commonCalls);
};
