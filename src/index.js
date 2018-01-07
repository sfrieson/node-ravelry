var API = require('./ravelry-api');

var Ravelry = function (options, permissions) {
  API.init(options, permissions);

  // Can't use prototype because they need access to this context
  this.misc = require('./methods/_misc')(this);
  this.currentUser = this.misc.currentUser; // Convenience
  this.app = require('./methods/_app')(this);
  this.bundledItems = require('./methods/_bundled_items')(this);
  this.bundles = require('./methods/_bundles')(this);
  this.carts = require('./methods/_carts')(this);
  this.comments = require('./methods/_comments')(this);
  this.deliveries = require('./methods/_deliveries')(this);
  this.extras = require('./methods/_extras')(this);
  this.favorites = require('./methods/_favorites')(this);
  this.fiber = require('./methods/_fiber')(this);
  this.forumPosts = require('./methods/_forum_posts')(this);
  this.forums = require('./methods/_forums')(this);
  this.friends = require('./methods/_friends')(this);
  this.groups = require('./methods/_groups')(this);
  this.inStoreSales = require('./methods/_in_store_sales')(this);
  this.library = require('./methods/_library')(this);
  this.messages = require('./methods/_messages')(this);
  this.needles = require('./methods/_needles')(this);
  this.packs = require('./methods/_packs')(this);
  this.pages = require('./methods/_pages')(this);
  this.patternSources = require('./methods/_pattern_sources')(this);
  this.patterns = require('./methods/_patterns')(this);
  this.people = require('./methods/_people')(this);
  this.photos = require('./methods/_photos')(this);
  this.productAttachments = require('./methods/_product_attachments')(this);
  this.products = require('./methods/_products')(this);
  this.projects = require('./methods/_projects')(this);
  this.queue = require('./methods/_queue')(this);
  this.savedSearches = require('./methods/_saved_searches')(this);
  this.shops = require('./methods/_shops')(this);
  this.stash = require('./methods/_stash')(this);
  this.stores = require('./methods/_stores')(this);
  this.topics = require('./methods/_topics')(this);
  this.upload = require('./methods/_upload')(this);
  this.volumes = require('./methods/_volumes')(this);
  this.yarns = require('./methods/_yarns')(this);
};

Ravelry.prototype.getSignInUrl = function (cb) {
  API.getSignInUrl(cb);
};

Ravelry.prototype.authorize = function (req, res, next) {
  console.log('req url:', req.url);
  if (req.url.match('oauth_verifier=') && API._responseUrl) {
    console.log('Authorizing');
    var queries = require('url').parse(req.url, true).query;

    API._oauth_verifier = queries.oauth_verifier;
    API.getAccessToken(function (err, data) {
      if (err) return err;
      // that._access_token is set
      // that._access_secret is set
      this.currentUser(function (err, data) {
        if (err) return err;
        API.user = data.user;
        this.user = data.user;
        res.writeHead(302, {'Location': API._responseUrl});
        res.end();
      }.bind(this));
    }.bind(this));
  } else if (next) next(); // for use in Express
};

module.exports = Ravelry;
