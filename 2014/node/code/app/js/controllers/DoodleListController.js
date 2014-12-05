/**
 * Lists all available doodles.
 */
app.controller('DoodleListController', [
    '$scope', 'currentUser', 'Doodle',
    function ($scope, currentUser, Doodle) {
        currentUser.check();

        $scope.user = currentUser.get();
        $scope.doodles = Doodle.readAll();

        $scope.countUsers = function (doodle) {
            return _.size(doodle.joined);
        };
    }]);
