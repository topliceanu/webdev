// Node standard library package.
var http = require('http');

// Local modules.
var routes = require('./routes');

// Start the http server and make express handle the requests.
var server = http.createServer(routes);
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    console.log('Server started');
});
