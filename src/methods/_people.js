module.exports = function(that) {
    var common = require('../utilities/commonCalls.js')(that);
    return {
        show: function(id, cb){
            common.get(`/people/${id}.json`, cb); //id or username
        }
    };
};
