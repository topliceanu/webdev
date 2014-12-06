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
- __Exercise__ Add a section with stats on the current doodle: how many people have joined, how many hits does each option get, what is the most popular option, who voted last, etc.


`2.` Start building the backend application.
-------------------------------------------

- write a simple webserver using express and a /ping endpoint which will respond with a pong.
- talk about moduled in node.js. How to define, export and use them.
- __Exercise__ write and endpoint which increments an internal pointe each time an endpoint is called.
- write a test for this endpoint. Make sure the endpoint returns the correct data. Anatomy of a test: setup, test, teardown.
- describe test runners, mocha.js, assert libraries and chai.js, test types (unit, functional, integration)
- more on `express.js` and how it uses middleware: each request is handled by a stack of functions which are executed one by one.
- __Exercise__ expand the webserver to implement a readAll endpoint. How do we serialize js data?!
- more on nedb: stores data on disk and keeps a record of it in memory. Drop in replacement for mongodb. Describe data model: collections, documents. Describe operations. Reference link.
- write a test for readAll endpoint.
- __Exercise__ write a test for the readOne endpoint which will return a resource by id then implement it.
- __Exercise__ write a test for the update endpoint which will update a resource by id then implement it.
- __Exercise__ write a test for the delete endpoint which will remove a resource by id then implement it.

`3.` Implement using firebase.
------------------------------
- add the firebase angular module. so it synchronizes the data seamlessly.

`4.` More exercises
-------------------

- Write a middleware for authentication. Each api request should be authenticated.
