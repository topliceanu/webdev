/**
 * Service logged in user's properties and actions.
 * The current user is store and retrieved from a persistent cookie.
 */
app.factory('currentUser', [
    '$location', '$cookieStore',
    function ($location, $cookieStore) {
        return {
            /**
             * Stores the logged in user in a cookie.
             */
            set: function (value) {
                $cookieStore.put('currentUser', value);
            },
            /**
             * Retrieve currently logged in user.
             */
            get: function () {
                return $cookieStore.get('currentUser');
            },
            /**
             * Checks if the current user is logged in.
             */
            check: function () {
                if ($cookieStore.get('currentUser') == null) {
                    $location.path('/user/login');
                }
            },
            /**
             * Log current user out by removing the cookie with his store data.
             */
            logout: function () {
                $cookieStore.remove('currentUser');
            }
        };
    }]);
