var redis = require('redis');


// 1. Instantiate the connection to Redis server.
var port = 16379;
var host = process.env.IP;
var client = redis.createClient(port, host);

var key = 'some-key';
var val = 'some-value';

// 1. Write the value to Redis.
client.set(key, val, function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // 2. Read the value from Redis.
    client.get(key, function (error, value) {
        if (error) {
            console.log(error);
            return;
        }

        console.log(value);
    });
});
