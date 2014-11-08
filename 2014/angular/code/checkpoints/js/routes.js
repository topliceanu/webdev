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
        .otherwise({
            redirectTo: '/user/login'
        })
}]);
