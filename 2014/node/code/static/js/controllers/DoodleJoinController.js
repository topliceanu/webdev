/**
 * Handle the page where users pick their options from those defined
 * in the doodle.
 * User's choices are stored on the doodle object to simplify things.
 */
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
