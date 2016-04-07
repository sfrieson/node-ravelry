require('dotenv').config();
var OAuth = require('oauth').OAuth,
    u = require('./utilities');

var Ravelry = function(opt, perm){

    this._ravAccessKey = opt.ravAccessKey;
    this._ravSecretKey = opt.ravSecretKey;
    this._ravPersonalKey = opt.ravPersonalKey || null; // TODO Implement usage
    this._callbackUrl = opt.callbackUrl || "oob"; //as per OAuth 1.0A spec
    this._oauth = new OAuth(
        'https://www.ravelry.com/oauth/request_token' + permissions(perm),
        'https://www.ravelry.com/oauth/access_token',
        this._ravAccessKey,
        this._ravSecretKey,
        '1.0A',
        this._callbackUrl,
        "HMAC-SHA1"
    );

    function permissions (perm) {
        if(!perm || perm.length === 0) return "";
        return "?scope=" + perm.join('+');
    }

    //Can't use prototype because they need access to this context
    this.app                    = require('./methods/_app')(this);
    this.bundledItems           = require('./methods/_bundled_items')(this);
    this.bundles                = require('./methods/_bundles')(this);
    this.carts                  = require('./methods/_carts')(this);
    this.comments               = require('./methods/_comments')(this);
    this.deliveries             = require('./methods/_deliveries')(this);
    this.extras                 = require('./methods/_extras')(this);
    this.favorites              = require('./methods/_favorites')(this);
    this.fiber                  = require('./methods/_fiber')(this);
    this.forumPosts             = require('./methods/_forum_posts')(this);
    this.forums                 = require('./methods/_forums')(this);
    this.friends                = require('./methods/_friends')(this);
    this.groups                 = require('./methods/_groups')(this);
    this.inStoreSales           = require('./methods/_in_store_sales')(this);
    this.library                = require('./methods/_library')(this);
    this.messages               = require('./methods/_messages')(this);
    this.needles                = require('./methods/_needles')(this);
    this.packs                  = require('./methods/_packs')(this);
    this.pages                  = require('./methods/_pages')(this);
    this.patternSources         = require('./methods/_pattern_sources')(this);
    this.patterns               = require('./methods/_patterns')(this);
    this.people                 = require('./methods/_people')(this);
    this.photos                 = require('./methods/_photos')(this);
    this.productAttachments     = require('./methods/_product_attachments')(this);
    this.products               = require('./methods/_products')(this);
    this.projects               = require('./methods/_projects')(this);
    this.queue                  = require('./methods/_queue')(this);
    this.savedSearch            = require('./methods/_saved_search')(this);
    this.shops                  = require('./methods/_shops')(this);
    this.stash                  = require('./methods/_stash')(this);
    this.stores                 = require('./methods/_stores')(this);
    this.topics                 = require('./methods/_topics')(this);
    this.upload                 = require('./methods/_upload')(this);
    this.volumes                = require('./methods/_volumes')(this);
    this.yarns                  = require('./methods/_yarns')(this);
};

Ravelry.prototype.currentUser = function(cb) {
    var that = this;
    if(this.user) return this.user;
    var promise = new Promise(function(resolve, reject) {
        this._get('/current_user.json', null, function(err, data){
            if (err) {
                return reject(err);
            }
            that.user = JSON.parse(data).user;
            resolve(that.user);
        });
        if(cb){
            promise
                .then( function(data){ cb(null, data); })
                .catch(cb);
            return null;
        }
        return promise;
    });
};

Ravelry.prototype.colorFamilies = function(cb) {
    var that = this;
    if(this.user) return this.user;
    var promise = new Promise(function(resolve, reject) {
        this._get('/color_families.json', null, function(err, data){
            if (err) {
                return reject(err);
            }
            that.user = JSON.parse(data).user;
            resolve(that.user);
        });
        if(cb){
            promise
                .then( function(data){ cb(null, data); })
                .catch(cb);
            return null;
        }
        return promise;
    });
};

Ravelry.prototype.yarnWeights = function(cb) {
    var that = this;
    if(this.user) return this.user;
    var promise = new Promise(function(resolve, reject) {
        this._get('/yarn_weights.json', null, function(err, data){
            if (err) {
                return reject(err);
            }
            that.user = JSON.parse(data).user;
            resolve(that.user);
        });
        if(cb){
            promise
                .then( function(data){ cb(null, data); })
                .catch(cb);
            return null;
        }
        return promise;
    });
};

Ravelry.prototype.signInUrl = function(cb){
    var that = this;
    this._oauth.getOAuthRequestToken(
        function(err, oauth_token, oauth_secret, results){
            if (err) return cb(err);
            else {
                that._oauth_token = oauth_token;
                that._oauth_secret = oauth_secret;
                var url = that._oauth.signUrl(
                    'https://www.ravelry.com/oauth/authorize',
                    that._oauth_token,
                    that._oauth_secret,
                    "GET"
                );
                cb(null, url);
            }
        }
    );
};

Ravelry.prototype.accessToken = function(cb){
    var that = this;
    this._oauth.getOAuthAccessToken(
        this._oauth_token,
        this._oauth_secret,
        this._oauth_verifier,
        function (err, oauth_access_token, oauth_access_token_secret, results){
            if (err) return cb(err);
            that._access_token = oauth_access_token;
            that._access_secret = oauth_access_token_secret;
            that.getUser(function(err, user){
                if(err) return cb(err);
                else return cb(null, user);
            });
        }
    );
};

Ravelry.prototype._reqUrl = function (endpoint, params){
    if(this.user) endpoint = endpoint.replace('_username_', this.user.username);
    if (!params) params = "";
    return u.urlBuilder("https://api.ravelry.com", endpoint, params);
};

Ravelry.prototype._get = function(endpoint, params, cb) {
    if (typeof params === 'function') {
        cb = params;
        params = "";
    }
    this._oauth.get(this._reqUrl(endpoint, params) , this._access_token, this._access_secret, function(err, data, response){
        if (err) {
            cb(err);
        } else {
            cb(null, data);
        }
    });
};

Ravelry.prototype._post = function(endpoint, content, cb) {
    if(typeof content === "object") content = JSON.stringify(content);
    this._oauth.post(
        this._reqUrl(endpoint),
        this._access_token, this._access_secret,
        content, "application/json",
        function(err, data, response){
            if(err) cb(err);
            else cb(null, data);
        }
    );
};

Ravelry.prototype._put = function(endpoint, content, cb) {
    if(content) content = JSON.stringify(content);
    this._oauth.put(
        this._reqUrl(endpoint),
        this._access_token, this._access_secret,
        content, "application/json",
        function(err, data, response){
            if(err) cb(err);
            else cb(null, data);
        }
    );
};

Ravelry.prototype._delete = function(endpoint, cb) {
    this._oauth.delete(
        this._reqUrl(endpoint),
        this._access_token, this._access_secret,
        function(err, data, response){
            if(err) cb(err);
            else cb(null, data);
        }
    );
};

module.exports = Ravelry;
