// Import stardard libraries from node.js.
var http = require('http');
var path = require('path');

// Import third-party libraries.
var express = require('express');
var redis = require('redis');
var cors = require('cors');


// Setup env variables.
var httpPort = process.env.PORT;
var redisPort = 16379;
var host = process.env.IP;
var key = 'items'; // Redis data.


// Create http server handler using express.js.
var app = express();

// Create redis db client.
var client = redis.createClient(redisPort, host);

// Further configuration.
app.configure(function(){
    app.use(cors());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(express.errorHandler());
});

// Defined endpoints.
app.get('/', function (req, res) {
    res.send(200, 'live');
});

// This endpoint return an array of all items stored in redis upto now.
app.get('/items', function (req, res) {
    client.get(key, function (error, items) {
        res.json(200, JSON.parse(items));
    });
});

// This endpoint creates a new item and stores it in redis.
app.post('/items', function (req, res) {
    var newItem = req.body;
    client.get(key, function (error, items) {
        if (error) {
            console.log(error);
            return res.send(500);
        }

        // Add the new items to the items array.
        items = items ? JSON.parse(items) : [];
        items.push(newItem);

        // Store it back to redis db.
        client.set(key, JSON.stringify(items), function (error, items) {
            if (error) {
                console.log(error);
                return res.send(500);
            }
            // Return it to the client.
            return res.json(200, newItem);
        });
    });
});

// This endpoint return the client-side javascript application page.
app.get('/index.html', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

// Start the server and make it listen on environment params.
http.createServer(app).listen(httpPort, host);
