module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        comments: function(username, id, params, cb){
            common.getUserIdParams('/people/','/stash/','/comments.json', username, id, params, cb);
        },
        create: function(params, cb){
            common.postParams(`/people/${that.user.username}/stash/create.json`, params, cb);
        },
        createPhoto: function(id, params, cb){
            common.postParams(`/people/${that.user.username}/stash/${id}/create_photo.json`, params, cb);
        },
        delete: function(id, cb){
            common.delete(`/people/${that.user.username}/stash/${id}.json`, cb);
        },
        list: function(username, params, cb){
            common.getUserParams('/people/','/stash/list.json', username, params, cb);
        },
        reorderPhotos: function(id, params, cb){
            common.postParams(`/people/${username}/stash/${id}/reorder_photos.json`, params, cb);
        },
        search: function(params, cb){
            common.getParams('/stash/search.json', params, cb);
        },
        show: function(username, id, cb){
            common.getUserId('/people/','/stash/','.json', username, id, cb);
        },
        unifiedList: function(username, params, cb){
            common.getUserParams('/people/','/stash/unified/list.json', username, params, cb);
        },
        update: function(id, params, cb){
            common.postParams(`/people/${that.user.username}/stash/${id}.json`, params, cb);
        }
    };
};
