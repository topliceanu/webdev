Node.js
=======


Why?
====

It is javascript on the backend as well: one language in the entire stack.
Same platform everywhere: what runs in the browser can run on node. Many
things that run on node can run on the browser. More code reuse. Etc.


Plan
====

`1.` Recap on angular.js.
------------------------

- check out the application architecture, the resources being called and the urls.
- __Exercise__ Implement a directive on your own using dirty checking.
- __Exercise__ Add a section with stats on the current doodle: how many people have joined, how many hits does each option get, what is the most popular option, who voted last, etc.


`2.` Start building the backend application.
-------------------------------------------

- Make an account on [c9.io][http://c9.io] and create a workspace by cloning my webdev project by url [https://github.com/tj/supertest](https://github.com/tj/supertest)

- Simple webserver using express and a `GET /ping` endpoint which will respond with `200 Ok` and the string `pong`.

    var http = require('http');
    var express = require('express');

    var app = express();
    app.get('/ping', function (req, res) {
        res.send(200, 'pong');
    });

    http.createServer(app).listen(3000, 'localhost');

- Moduled in node.js
 - Modules are js files executed only once (singletons).
 - They expose functionality through `exports` or `module.exports` local variables.
 - They can use other modules using `require`

- __Exercise__ write and endpoint which increments an internal counter each time an endpoint is called.

    // ....

    var counter = 0
    app.post('/inc', function (req, res) {
        counter +=1
        res.send(200, counter);
    });

    // ....

- Writing tests for this endpoint using [mocha](http://mochajs.org/), [chai](http://chaijs.com/) and [supertest](https://github.com/tj/supertest)
 - Test-Driven Development: this test should have been written before the implementation.
 - makes sure the endpoint returns the correct data.
 - it is a guard for the future, when you modify the endpoint, this test checks if the old functionality still works.
 - anatomy of a test: setup, teardown, the actual test.
 - mocha is a test runners
 - chai is an assert library
 - types of tests: unit, functional, integration

- Architecuter of an __express.js__
 - built on middleware: each request is handled by a stack of functions which are executed one by one.

- __Exercise__ expand the webserver to implement a readAll endpoint: `GET /users` and then write a test using mocha.

- more on [nedb.js](https://github.com/louischatriot/nedb)
 - stores data on disk and keeps a record of it in memory
 - drop in replacement for mongodb
 - data model: collections, documents.
 - operations on documents: CRUD. This means it maps well to REST apis like ours.

- __Exercise__ write a test for the readOne endpoint (`GET /users/:id`) then implement it.
- __Exercise__ write a test for the update endpoint (`PUT /users/:id`) then implement it.
- __Exercise__ write a test for the delete endpoint (`DELETE /users/:id`) then implement it.

- start using [socket.io](http://socket.io) to push state from server to client


`3.` Implement using firebase.
------------------------------
- add the firebase angular module. so it stores and synchronizes the data between clients seamlessly, ie. everything we did so far, but we do not have to do it anymore.


`4.` More exercises
-------------------

- Write a middleware for authentication. Each api request should be authenticated.
- Finish up exercises from previous lecture.
