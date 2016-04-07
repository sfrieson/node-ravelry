module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(queuedProject, cb){
            common.postParams(`/people/${that.user.username}/queue/create.json`, queuedProject, cb);
        },
        delete: function(id, cb){
            common.delete(`/people${that.user.username}/queue/${id}.json`, cb);
        },
        list: function(username, params, cb){
            common.getUserParams('/people/', '/queue/list.json', username, params, cb);
        },
        order: function(username, cb){
            common.getUser('/people/','/queue/order.json', username, cb);
        },
        reposition: function(id, params, cb){
            common.postParams(`/people/${that.user.username}/queue/${id}/reposition.json`, params, cb);
        },
        show: function(username, id, cb){
            common.getUserId('/people/','/queue/','.json', username, id, cb);
        },
        update: function(id, queuedProject, cb){
            common.postParams(`/people/${that.user.username}/queue/${id}/update.json`, params, cb);
        }
    };
};
