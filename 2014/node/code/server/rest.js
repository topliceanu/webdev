db = require('./db');


/**
 * Reads all documents in the resource.
 * @param {String} resourceName - the name of the resource.
 */
exports.readAll = function (resourceName) {
    return function (req, res) {
        db[resourceName].find({}, function (err, docs) {
            if (err) return res.send(500, err.message);
            return res.send(200, docs);
        });
    };
};

/**
 * Reads one document resource by id.
 * @param {String} resourceName - the name of the resource.
 * @param {String} req.params.id - id of resource to return.
 */
exports.readOne = function(resourceName) {
    return function(req, res) {
        db[resourceName].findOne({
            _id: req.params.id
        }, function(err, doc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(200, doc);
        });
    };
};

/**
 * Inserts a new document in the appropriate collection.
 * @param {String} resourceName - the name of the resource.
 * @param {Object} req.body - request body becomes the new document.
 */
exports.createOne = function(resourceName) {
    return function(req, res) {
        db[resourceName].insert(req.body, function(err, newDoc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(201, newDoc);
        });
    };
};

/**
 * Update the document indicated by the id with the contents of the request.
 * It then returns the document after the updates have been applied.
 * @param {String} resourceName - the name of the resource.
 * @param {String} req.params.id - id of the document to update.
 * @param {Object} req.body - request body replaces the contents of the resource.
 */
exports.update = function(resourceName) {
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
        db[resourceName].update(find, updates, opts, function(err, __, newDoc) {
            if (err != null) {
                return res.send(500, err.message);
            }
            db[resourceName].findOne(find, function(err, doc) {
                if (err != null) {
                    return res.send(500, err.message);
                }
                return res.send(200, doc);
            });
        });
    };
};

/**
 * Removes the document identified by the id.
 * @param {String} resourceName - the name of the resource.
 * @param {String} req.params.id - id of document to remove.
 */
exports.remove = function(resourceName) {
    return function(req, res) {
        var find, opts;
        find = {
            _id: req.params.id
        };
        opts = {
            multi: false
        };
        return db[resourceName].remove(find, opts, function(err) {
            if (err != null) {
                return res.send(500, err.message);
            }
            return res.send(204);
        });
    };
};
