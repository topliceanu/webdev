/**
 * Controller hanldes doodle edit page.
 */
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
