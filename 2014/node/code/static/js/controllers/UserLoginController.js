/**
 * Controller handles user creation and login.
 * After succesfull login, the user is stored in a cookie.
 */
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
