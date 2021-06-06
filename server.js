var app = require('http').createServer(createServer);
var fs = require('fs'); 
var url = require('url');

function createServer(req, res) {
    var path = url.parse(req.url).pathname;
    var fsCallback = function(error, data) {
        if(error) throw error;

        res.writeHead(200);
        res.write(data);
        res.end();
    }

    switch(path) {
        case '/subpage':
            doc = fs.readFile(__dirname + '/index.html', fsCallback);
        break;
        default:
            doc = fs.readFile(__dirname + '/default_page.html', fsCallback);
        break;
    }
}

app.listen(8080);