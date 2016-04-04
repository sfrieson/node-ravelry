var http = require('http');
var fs = require('fs');
var Ravelry = require('./src');
var rav = new Ravelry({
    ravAccessKey: process.env.RAVACCESSKEY,
    ravSecretKey: process.env.RAVSECRETKEY,
    ravPersonalKey: process.env.RAVPERSONALKEY,
    callbackUrl: 'http://localhost:8080/callback'
}, [
    'forum-write', 'message-write', 'patternstore-read', 'deliveries-read', 'library-pdf'
]);

http.createServer(function(req,res){
    var url = req.url;
    console.log(req.method, url); //logging

    if (url === "" || url === "/") {
        rav.signInUrl(res);
        // res.writeHead(302, {'Location': rav.signInUrl(res)} );
        // res.end();
    } else if (url.match('callback') ) {
        url = require('url').parse(url, true);
        // rav.oauth_token = url.query.oauth_token; //this is already known.
        rav._oauth_verifier = url.query.oauth_verifier;

        rav.accessToken(res);
        // res.writeHead(200, 'text/plain');
        // res.end( "connected" );
    } else if (url === "/favicon.ico") {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    } else if (url) {
        rav.get(url, res);
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }

    // fs.createReadStream(__dirname + req.url).pipe(res);

}).listen(8080, '127.0.0.1');
