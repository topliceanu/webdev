/**
 * Test suite for the the rest routes.
 */

var http = require('http');

var assert = require('chai').assert;
var request = require('supertest');

var routes = require('../server/routes');
var db = require('../server/db');


describe('rest', function () {

    /**
     * Setup once the server endpoints to test before the tests are run.
     */
    before(function () {
        this.server = http.createServer(routes);
    });


    /**
     * Before each test insert fresh test data.
     * @param {Function} done - continuation function.
     */
    beforeEach(function (done) {
        var that = this;
        db.users.insert({name: 'user1'}, function (err, user1) {
            if (err) return done(err);
            that.user1 = user1;

            db.users.insert({name: 'user2'}, function (err, user2) {
                if (err) return done(err);
                that.user2 = user2
                done()
            });
        });
    });

    /**
     * After each test remove the test data to start fresh.
     * @param {Function} done - continuation function.
     */
    afterEach(function (done) {
        db.users.remove({}, {multi: true}, done);
    });

    // Start the tests.

    describe('.createOne()', function () {
        it('should create a new user', function (done) {
            var payload = {
                name: 'user3'
            };
            request(this.server)
                .post("/users")
                .set('Content-Type', 'application/json')
                .set('Accept', 'application/json')
                .send(payload)
                .end(function (err, res) {
                    if(err) return done(err);
                    assert.equal(res.statusCode, 201, 'Created');
                    assert.isDefined(res.body, 'should return the user document');
                    assert.isDefined(res.body._id, 'should have an id');
                    assert.equal(res.body.name, payload.name, 'should have created a user with correct name');
                    done();
                });
        });
    });

    describe('.readOne()', function () {
        it('should return a user by his id', function (done) {
            var that = this;
            request(this.server)
                .get("/users/"+that.user1._id)
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if(err) return done(err);
                    assert.equal(res.statusCode, 200, 'Ok');
                    assert.isDefined(res.body, 'should return the existing user document');
                    assert.isDefined(res.body._id, 'should have an id');
                    assert.equal(res.body.name, that.user1.name, 'should have created a user with correct name');
                    done();
                });
        });
    });

    describe('.readAll()', function () {
        it('should return all users', function (done) {
            var that = this;
            request(this.server)
                .get("/users")
                .set('Accept', 'application/json')
                .end(function (err, res) {
                    if(err) return done(err);
                    assert.equal(res.statusCode, 200, 'Ok');
                    assert.lengthOf(res.body, 2, 'should return two users');
                    var actual = res.body.map(function (u) {return u._id});
                    var expected = [that.user1._id, that.user2._id];
                    assert.sameMembers(actual, expected, 'should return the correct user ids');
                    done();
                });
        });
    });

    describe('.updateOne()', function () {
        it('should update user by id', function (done) {
            var that = this;
            var payload = {
                name: 'user1-updated'
            };
            request(this.server)
                .put("/users/"+that.user1._id)
                .set('Accept', 'application/json')
                .send(payload)
                .end(function (err, res) {
                    if(err) return done(err);
                    assert.equal(res.statusCode, 200);
                    assert.isDefined(res.body, 'should return the new user document');
                    assert.equal(res.body.name, payload.name, 'should have udpated the user name');
                    assert.equal(res.body._id, that.user1._id, 'id is the same');
                    done();
                });
        });
    });

    describe('.deleteOne()', function () {
        it('should remove user by id', function (done) {
            request(this.server)
                .del("/users/"+this.user1._id)
                .end(function (err, res) {
                    if(err) return done(err);
                    assert.equal(res.statusCode, 204, 'Empty content');
                    assert.deepEqual(res.body, {}, 'should return empty body');
                    done();
                });
        });
    });
});
