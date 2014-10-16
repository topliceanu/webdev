http = require('http');

cors = require('cors');
express = require('express');
Datastore = require('nedb');


db = {
    users: new Datastore({
        filename: '/tmp/users.db',
        autoload: true
    }),
    doodles: new Datastore({
        filename: '/tmp/doodles.db',
        autoload: true
    }),
    rows: new Datastore({
        filename: '/tmp/rows.db',
        autoload: true
    })
}


app = express()
app.use express.query()
app.use express.bodyParser()
app.use cors()


readAll = function (type) {
    return function (req, res) {
        db[type].find({}, function (err, docs) {
            if (err) return res.send(500, err.message);
            return res.send(200, docs);
        });
    };
}

read = function(type) {
    return function(req, res) {
        db[type].findOne({
            _id: req.params.id
        }, function(err, doc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(200, doc);
        });
    };
};

create = function(type) {
    return function(req, res) {
        db[type].insert(req.body, function(err, newDoc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(201, newDoc);
        });
    };
};

update = function(type) {
    return function(req, res) {
        var find, opts, updates;
        find = {
            _id: req.params.id
        };
        updates = {
            $set: req.body
        };
        opts = {
            multi: false,
            upsert: false
        };
        db[type].update(find, updates, opts, function(err, __, newDoc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(200, newDoc);
        });
    };
};

remove = function(type) {
    return function(req, res) {
        var find, opts;
        find = {
            _id: req.params.id
        };
        opts = {
            multi: false
        };
        return db[type].remove(find, opts, function(err) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(204);
        });
    };
};


['users', 'doodles', 'rows'].forEach(function (type) {
    app.post("/"+type, create(type));
    app.get("/"+type, readAll(type));
    app.get("/"+type+"/:id", read(type));
    app.put("/"+type+"/:id", update(type));
    app.del("/"+type+"/:id", remove(type));
});


(http.createServer app).listen 3000
