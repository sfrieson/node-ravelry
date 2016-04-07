module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        create: function(fiberStash, cb){
            common.postParams(`/people/${that.user.username}/fiber/create.json`, fiberStash, cb);
        },

        createPhoto: function(id, params, cb){
            common.postParams(`/people/${that.user.username}/fiber/${id}/create_photo.json`, params, cb);
        },

        show: function(username, id, cb){
            common.getUserId('/people/','/fiber/','.json', username, id, cb);
        },

        update: function(id, fiberStash, cb){
            common.postParams(`/people/${that.user.username}/fiber/${id}.json`, fiberStash, cb);
        }
    };
};
