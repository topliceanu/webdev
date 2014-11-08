/**
 * Lists all available doodles.
 */
app.controller('DoodleListController', [
    '$scope', 'currentUser', 'Doodle',
    function ($scope, currentUser, Doodle) {
        currentUser.check();

        $scope.doodles = Doodle.readAll()
    }]);
