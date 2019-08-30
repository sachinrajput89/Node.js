var http = require('http')

function hello_world(req, res) {

    var body = 'Hello World\n';

    var content_length = body.length;

    res.writeHead(200,{
        'Content-Length' : content_length,
        'Content-Type' : 'text/plain'
    } );

    res.end(body);

}

var _server = http.createServer(hello_world);
_server.listen(8080);
