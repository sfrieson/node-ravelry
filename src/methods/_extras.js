module.exports = function(that){
    return {
        createAttachment: function(params, cb){
            var endpoint = '/extras/create_attachment.json';
            that._post(endpoint, params, function(err,data){cb(err,cata);});
        }
    };
};
