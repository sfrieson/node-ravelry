require('dotenv').config();
var OAuth = require('oauth').OAuth;

var Ravelry = function(opt, perm){
    this._ravAccessKey = opt.ravAccessKey;
    this._ravSecretKey = opt.ravSecretKey;
    this._ravPersonalKey = opt.ravPersonalKey || null; // TODO Implement usage
    this._callbackUrl = opt.callbackUrl || "oob"; //as per OAuth 1.0A spec
    this._oauth = new OAuth(
        'https://www.ravelry.com/oauth/request_token' + this._permissions(perm),
        'https://www.ravelry.com/oauth/access_token',
        this._ravAccessKey,
        this._ravSecretKey,
        '1.0A',
        this._callbackUrl,
        "HMAC-SHA1"
    );
};
Ravelry.prototype._permissions = function(perm) {
    if(!perm) return "";
    var query = "?scope=";
    for (var i = 0; i < perm.length; i++) {
        query += perm[i];
        if (perm[i + 1]) query += "+";
    }
    return query;
}
Ravelry.prototype.signInUrl = function(res){
    var that = this;
    this._oauth.getOAuthRequestToken(
        function(err, oauth_token, oauth_secret, results){
            if (err) {return err;}
            that._oauth_token = oauth_token;
            that._oauth_secret = oauth_secret;
            var url = that._oauth.signUrl(
                'https://www.ravelry.com/oauth/authorize',
                that._oauth_token,
                that._oauth_secret,
                "GET"
            );
            res.writeHead(302, {'Location': url} );
            res.end();
        }
    );
};

Ravelry.prototype.accessToken = function(res){
    var that = this;
    this._oauth_verifier = this._oauth_verifier || verifier;
    this._oauth.getOAuthAccessToken(
        this._oauth_token,
        this._oauth_secret,
        this._oauth_verifier,
        function (err, oauth_access_token, oauth_access_token_secret, results){
            if (err) {return err;}
            that._access_token = oauth_access_token;
            that._access_secret = oauth_access_token_secret;
            res.writeHead(200, 'text/plain');
            res.end("Access allowed.");
            that.getUser(); //get user info
        }
    );
};
Ravelry.prototype._urlBuild = function (url){
    url = "https://api.ravelry.com" + url + ".json";
    if (url.indexOf('/username/') > -1) url.replace('/username/',`/${this.user.username}/`);
    if (url.indexOf('/id/') > -1) url.replace('/id/',`/${this.user.id}/`);
    return url;
};

Ravelry.prototype.get = function(url, res) {
    this._oauth.get(this._urlBuild(url) , this._access_token, this._access_secret, function(err, data, response){
        if (err) {
            console.log(err);
            res.writeHead(err.statusCode, {'Message':err.data});
            res.end();
        } else {
            res.writeHead(200, 'application/json');
            console.log(data);
            res.end(data);
        }
    });
};
Ravelry.prototype.getUser = function() {
    var that = this;
    if(this.user) return this.user;
    this._oauth.get(this._urlBuild('/current_user') , this._access_token, this._access_secret, function(err, data, response){
        if (err) {
            console.log(err);
        } else {
            that.user = JSON.parse(data).user;
            console.log(that.user);
        }
    });
};

module.exports = Ravelry;
