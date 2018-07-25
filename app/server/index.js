var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    var url = request.url;
    var path = url.slice(1) || 'index.html';
    console.log(__dirname + '\\..\\' + path);
    var type = '';
    if (path.endsWith('.html')) {
        type = 'text/html';
    } else if (path.endsWith('.js')) {
        type = 'text/javascript';
    } else if (path.endsWith('.ico')) {
        type = 'image/x-icon';
    }
    
    if (!type) {
        response.end();
    }
    fs.readFile(__dirname + '\\..\\' + path, function (e, data) {
        if (e) {
            console.error(e);
            // return;
        }
        response.writeHead(200, {'content-type':  type + ';utf-8'});
        response.write(data);
        response.end();
    });
});

server.listen(8000);