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
        .otherwise({
            redirectTo: '/user/login'
        })
}]);
