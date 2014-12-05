// Node standard libarary packages.
var http = require('http');

// Local modules.
var routes = require('./routes');

// Start the http server and make express handle the requests.
http.createServer(routes)
    .listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
