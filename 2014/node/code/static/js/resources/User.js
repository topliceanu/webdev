/**
 *  User object allows CRUD operations on the /users resource.
 *  Format for a user object.
 *  {
 *      _id: String,
 *      username: String,
 *      createdOn: Number
 *  }
 */
app.factory('User', [
    '$resource', 'config',
    function ($resource, config) {
        return $resource(config.baseUrl+'users/:id', {}, {
            create: {
                method: 'POST',
                url: config.baseUrl+'users'
            },
            read: {
                method: 'GET',
            },
            readAll: {
                method: 'GET',
                url: config.baseUrl+'users',
                isArray: true
            },
            update: {
                method: 'PUT'
            },
            remove: {
                method: 'DELETE'
            }
        });
}]);
