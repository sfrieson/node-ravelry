module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            // show(id[, cb])
            return common.get(`/forum_posts/${id}.json`, cb);
        },
        unread: function(params, cb){
            // unread[(params, cb])
            return common.get('/forum_posts/unread.json', params, cb);
        },
        update: function(id, params, cb){
            // update(id, params[, cb])
            return common.postParams(`/forum_posts/${id}.json`, params, cb);
        },
        vote: function(id, params, cb){
            // vote(id, params[, cb])
            return common.postParams(`/forum_posts/${id}/vote.json`, params, cb);
        }
    };
};
