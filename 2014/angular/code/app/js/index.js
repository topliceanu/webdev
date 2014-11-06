var app = angular.module('doodle', ['ngResource', 'ngRoute']);

// Configurations

app.value('config', {
    baseUrl: 'https://webdev-c9-alexandrutopliceanu.c9.io/'
});

app.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);


// Controllers.

app.controller('UserLoginController', ['$scope', 'Users', function ($scope, Users) {}]);

app.controller('DoodleListController', ['$scope', function ($scope) {}]);

app.controller('DoodleCreateController', ['$scope', function ($scope) {}]);

app.controller('DoodleEditController', ['$scope', function ($scope) {}]);


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
        .when('/doodle/create', {
            templateUrl: 'partials/doodle-create.html',
            controller: 'DoodleCreateController'
        })
        .when('/doodle/edit', {
            templateUrl: 'partials/doodle-edit.html',
            controller: 'DoodleEditController'
        })
        .otherwise({
            redirectTo: '/user/login'
        })
}]);


// Resources

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
