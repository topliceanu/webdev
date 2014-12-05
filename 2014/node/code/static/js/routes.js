/**
 * Define application navigation, which pages are available.
 * For each page, a controller which handles actions and a
 * template to render are defined.
 */
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
