module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        comments: function(username, id, params, cb){
            common.getUserIdParams('/projects/',"/",'/comments.json', username, id, params, cb);
        },
        crafts: function(cb){
            common.post('/projects/crafts.json', cb);
        },
        create: function(project, cb){
            common.postParams(`/projects/${that.user.username}/create.json`, project, cb);
        },
        createPhoto: function(id, params, cb){
            common.postParams(`/projects/${that.user.username}/${id}/create_photo.json`, params, cb);
        },
        delete: function(id, cb){
            common.delete(`/projects/{username}/${id}.json`, cb);
        },
        list: function(username, params, cb){
            common.getUserParams('/projects/','/list.json', username, params, cb);
        },
        projectStatuses: function(cb){
            common.post('/projects/project_statuses.json', cb);
        },
        reorderPhotos: function(username, id, params, cb) {
            common.postParams(`/projects/${username}/${id}/reorder_photos.json`, params, cb);
        },
        search: function(params, cb){
            common.getParams('/projects/search.json', params, cb);
        },
        show: function(username, id, params, cb) {
            common.getUserIdParams('/projects/','/','.json', username, id, params, cb);
        },
        update: function(id, params, cb){
            common.postParams(`/projects/${username}/${id}.json`, params, cb);
        }
    };
};
