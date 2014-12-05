/**
 * Handle the doodle creation page where users pick a name and a
 * list of options for their new doodle.
 * After successfull creation, redirect to the list of doodles.
 */
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
