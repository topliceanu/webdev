var express = require('express');
var http = require('http');
var socket = require('socket.io');


var app = express();
var server = http.createServer(app);
var io = socket.listen(server);


app.get('/', function (req, res) {
    res.send(200, 'Hi');
});


io.sockets.on('connection', function (socket) {
    socket.on('message', function (data) {
        socket.emit('message', data);
    });
});


http.createServer(app).listen(process.env.PORT, process.env.IP);
