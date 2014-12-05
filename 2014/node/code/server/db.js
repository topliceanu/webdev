var Datastore = require('nedb');


/**
 * Datastores are collections of documents kept in the memory of the process.
 * Datastores are backed up on the disk.
 */

exports.users = new Datastore({
    filename: '/tmp/users.db',
    autoload: true
});

exports.doodles = new Datastore({
    filename: '/tmp/doodles.db',
    autoload: true
});
