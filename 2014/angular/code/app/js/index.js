var app = angular.module('doodle', ['ngResource', 'ngRoute']);

// Configurations

app.value('config', {
    baseUrl: 'https://webdev-c9-alexandrutopliceanu.c9.io/'
});

app.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);


// Resources
/*
 * User format:
 *  {
 *      _id: String,
 *      username: String
 *  }
 * Doodle format:
 * {
 *      _id:String,
 *      title:String,
 *      creator: {
 *          _id,
 *          username
 *     },
 *     options: Array<String>,
 *     joined: {
 *          userId: {
 *              option: Boolean
 *          }
 *      }
 * }
 */
_.each(['Users', 'Doodles'], function (name) {
    app.factory(name, ['$scope', '$resource', 'config',
        function ($scope, $resource, config) {
            name = name.toLowerCase()
            return $resource(config.baseUrl+'/'+name+'/:id', {}, {
                create: {
                    method: 'POST',
                    url: config.baseUrl+'/'+name
                },
                read: {
                    method: 'GET'
                },
                readAll: {
                    method: 'GET',
                    url: config.baseUrl+'/'+name,
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
});


// Services.

app.factory('currentUser', function () {
    var currentUser
    return {
        set: function (value) {
            currentUser = value;
        },
        get: function () {
            return currentUser
        }
    };
});


// Controllers.

app.controller('UserLoginController', ['$scope', function ($scope) {}]);

app.controller('DoodleListController', ['$scope', function ($scope) {}]);

app.controller('DoodleEditController', ['$scope', function ($scope) {}]);

app.controller('DoodleJoinController', ['$scope', function ($scope) {}]);


// Routing

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/user/login', {
            templateUrl: 'partials/user-login.html',
            controller: 'UserLoginController'
        })
        .when('/doodle/list', {
            templateUrl: 'partials/doodle-list.html',
            controller: 'DoodleListController'
        })
        .when('/doodle/edit', {
            templateUrl: 'partials/doodle-edit.html',
            controller: 'DoodleEditController'
        })
        .when('/doodle/join', {
            templateUrl: 'partials/doodle-join.html',
            controller: 'DoodleJoinController'
        })
        .otherwise({
            redirectTo: '/user/login'
        })
}]);
