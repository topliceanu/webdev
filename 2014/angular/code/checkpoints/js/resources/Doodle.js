/**
 * Doodle object allows CRUD operations on the /doodles resource.
 * Format for a doodle object:
 * {
 *      _id:String,
 *      title:String,
 *      creator: {
 *          _id: String,
 *          username: String
 *     },
 *     options: Array<String>,
 *     joined: {
 *          username: {
 *              option: Boolean
 *          }
 *     },
 *     createdOn: Number
 * }
 */
app.factory('Doodle', [
    '$resource', 'config',
    function ($resource, config) {
        return $resource(config.baseUrl+'doodles/:id', {}, {
            create: {
                method: 'POST',
                url: config.baseUrl+'doodles'
            },
            read: {
                method: 'GET',
            },
            readAll: {
                method: 'GET',
                url: config.baseUrl+'doodles',
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
