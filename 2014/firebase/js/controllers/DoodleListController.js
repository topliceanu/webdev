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

        var ref = new Firebase("https://dazzling-fire-5075.firebaseio.com/");
        var sync = $firebase(ref);
        // download the data into a local object
        var syncObject = sync.$asObject();
        // synchronize the object with a three-way data binding
        // click on `index.html` above to see it used in the DOM!
        syncObject.$bindTo($scope, "doodles");

    }]);
