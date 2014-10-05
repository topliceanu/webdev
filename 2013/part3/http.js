// 1. Import http standard library.
var http = require('http');


var port = process.env.PORT;
var host = process.env.IP;

// 2. Create a handler for each http connection. This will respond
// to each query with a string.
var handler = function (request, response) {
    response.end('!!!!!!!!!!');
};

// 3. Create a HTTP server and use the above handler to respond to requests.
var server = http.createServer(handler);

// 4. Make the server listen for requests on a predefined host/port.
server.listen(port, host);
