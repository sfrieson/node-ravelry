module.exports = function(that){
    var common = require('../utilities/commonCalls.js')(that);
        return {
        create: function(bundle, cb){
            return common.postParams(`/people/${that.user.username}/bundles/create.json`, bundle, cb);
        },
        delete: function(id, cb){
            return common.delete(`/people/${that.user.username}/bundles/${id}.json`, cb);
        },
        list: function(username, params, cb){
            return common.getUserParams('/people/','/bundles/list.json', username, params, cb);
        },
        show: function(username, id, cb){
            return common.getUserId('/people/','/bundles/','.json', username, id, cb);
        },
        update: function(id, bundle, cb){
            return common.postParams(`/people/${that.user.username}/bundles/${id}.json`, bundle, cb);
        },
    };
};
