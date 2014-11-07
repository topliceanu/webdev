var app = angular.module('doodle', ['ngResource', 'ngRoute', 'ngCookies']);

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
 *      username: String,
 *      createdOn: Number
 *  }
 * Doodle format:
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
_.each(['User', 'Doodle'], function (name) {
    app.factory(name, ['$resource', 'config',
        function ($resource, config) {
            name = name.toLowerCase()+'s';
            return $resource(config.baseUrl+name+'/:id', {}, {
                create: {
                    method: 'POST',
                    url: config.baseUrl+name
                },
                read: {
                    method: 'GET',
                },
                readAll: {
                    method: 'GET',
                    url: config.baseUrl+name,
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

app.factory('currentUser', [
    '$location', '$cookieStore',
    function ($location, $cookieStore) {
        return {
            set: function (value) {
                $cookieStore.put('currentUser', value);
            },
            get: function () {
                return $cookieStore.get('currentUser');
            },
            check: function () {
                if ($cookieStore.get('currentUser') == null) {
                    $location.path('/user/login');
                }
            },
            logout: function () {
                $cookieStore.remove('currentUser');
            }
        };
    }]);


// Filters.
app.filter('withoutUser', function () {
    return function (joined, user) {
        output = _.reduce(joined, function (collector, options, username) {
            if (user.username !== username) {
                collector[username] = options;
            }
            return collector;
        }, {});
        return output;
    };
});


// Controllers.

app.controller('UserLoginController', [
    '$scope', '$location', 'currentUser', 'User',
    function ($scope, $location, currentUser, User) {
        $scope.save = function () {
            var user = User.create({
                username: $scope.username,
                createdOn: Date.now()
            }, function () {
                currentUser.set(user);
                $location.path('/doodle/list');
            });
        };
    }]);

app.controller('DoodleCreateController', [
    '$scope', '$location', 'currentUser', 'Doodle',
    function ($scope, $location, currentUser, Doodle) {
        currentUser.check();

        $scope.doodle = {};
        $scope.doodle.title = '';
        $scope.doodle.creator = currentUser.get();
        $scope.doodle.options = [];
        $scope.doodle.joined = {};

        $scope.addNewOption = function () {
            $scope.doodle.options.push($scope.newOption);
            $scope.newOption = '';
        };

        $scope.addDoodle = function () {
            $scope.doodle.createdOn = Date.now();
            Doodle.create($scope.doodle, function () {
                $location.path('/doodle/list');
            });
        };
    }]);

app.controller('DoodleListController', [
    '$scope', 'currentUser', 'Doodle',
    function ($scope, currentUser, Doodle) {
        currentUser.check();

        $scope.doodles = Doodle.readAll()
    }]);

app.controller('DoodleEditController', [
    '$scope', '$routeParams', 'currentUser', 'Doodle',
    function ($scope, $routeParams, currentUser, Doodle) {
        currentUser.check();

        $scope.doodle = Doodle.read($routeParams);

        $scope.addNewOption = function () {
            $scope.doodle.options.push($scope.newOption);
            $scope.newOption = '';
        };

        $scope.addDoodle = function () {
            request = _.pick($scope.doodle, ['_id', 'title', 'creator', 'options', 'joined', 'createdOn']);
            $scope.doodle = Doodle.update({id: request._id}, request);
        };
    }]);

app.controller('DoodleJoinController', [
    '$scope', '$routeParams', 'currentUser', 'Doodle',
    function ($scope, $routeParams, currentUser, Doodle) {
        currentUser.check();

        $scope.user = currentUser.get();
        $scope.doodle = Doodle.read($routeParams);
        $scope.save = function () {
            $scope.doodle = Doodle.update({id: $scope.doodle._id}, $scope.doodle);
        };
        $scope.remove = function () {
            delete $scope.doodle.joined[$scope.user.username];
            $scope.doodle = Doodle.update({id: $scope.doodle._id}, $scope.doodle);
        };
    }]);


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
            templateUrl: 'partials/doodle-edit.html',
            controller: 'DoodleCreateController'
        })
        .when('/doodle/edit/:id', {
            templateUrl: 'partials/doodle-edit.html',
            controller: 'DoodleEditController'
        })
        .when('/doodle/join/:id', {
            templateUrl: 'partials/doodle-join.html',
            controller: 'DoodleJoinController'
        })
        .otherwise({
            redirectTo: '/user/login'
        })
}]);
