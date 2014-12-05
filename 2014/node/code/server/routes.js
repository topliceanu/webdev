// Third party libraries.
var bodyParser = require('body-parser');
var express = require('express');

var rest = require('./rest');


// Define and configure the express aplication.
var app = express();

// Parse the contents of the query string and request body.
app.use(express.query());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static content.
app.use(express.static(__dirname+'../static'));

// Attach our custom routes to the express application.
['users', 'doodles'].forEach(function (type) {
    // Eg. POST /users
    app.post("/"+type, rest.create(type));
    // Eg. GET /users
    app.get("/"+type, rest.readAll(type));
    // Eg. GET /users/:id
    app.get("/"+type+"/:id", rest.read(type));
    // Eg. PUT /users/:id
    app.put("/"+type+"/:id", rest.update(type));
    // Eg. DELETE /users/:id
    app.delete("/"+type+"/:id", rest.remove(type));
});


// Module public api.
modules.exports = app;
