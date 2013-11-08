// 1. Import standard http module.
var http = require('http');


var url = 'http://registry.npmjs.org/express';

// Create function that will be called when the data arrives.
var onGet = function (response) {
    reponse.pipe(process.stdout);
};

http.get(url, onGet);
