module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        activity: function(username, params, cb){
            common.getUserParams('/people/','/friends/activity.json', username, params, cb);
        },
        create: function(params, cb){
            common.postParams(`/people/${that.user.username}/friends/create.json`, params, cb);
        },
        destroy: function(id, cb){
            common.post(`/people/${that.user.username}/friends/${id}/destroy.json`, cb);
        },
        list: function(username, cb){
            common.getUser('/people/','/friends/list.json', username, cb);
        }
    };
};
