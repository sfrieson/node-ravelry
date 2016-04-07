module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            return common.get(`/forum_posts/${id}.json`, cb);
        },
        unread: function(params, cb){
            return common.get('/forum_posts/unread.json', params, cb);
        },
        update: function(id, params, cb){
            return common.postParams(`/forum_posts/${id}.json`, params, cb);
        },
        vote: function(id, params, cb){ //Unsure about method /api#forum_posts_vote
            return common.postParams(`/forum_posts/${id}/vote.json`, params, cb);
        }
    };
};
