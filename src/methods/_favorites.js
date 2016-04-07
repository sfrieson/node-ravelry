
module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(bookmarkPost, cb){
            common.postParams(`/people/${that.user.username}/favorites/create.json`,
            bookmarkPost, cb);
        },
        delete: function(id, cb){
            common.deleteId(`/people/${that.user.username}/favorites/`,id,'.json', cb);
        },
        list: function(username, params, cb){
            common.getUserParams('/people/','/favorites/list.json', username, params, cb);
        },

        show: function(username, id, cb){
            common.getUser('/people/','/favorites/','.json', username, id, cb);
        },

        update: function(id, bookmarkPost, cb){
            common.postParams(`/people/${that.user.username}/favorites/${id}.json`, bookmarkPost, cb);
        },

        addToBundle: function(id, bundle, cb){
            common.postParams(`/people/${that.user.username}/favorites/${id}/add_to_bundle.json`, bundle, cb);
        },

        removeFromBundle: function(id, bundle, cb){
            common.postParams(`/people/${that.user.username}/favorites/${id}/remove_from_bundle.json`, bundle, cb);
        }
    };
};
