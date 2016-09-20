/**
 * Filter remove a given user object from a list of users.
 */
app.filter('withoutUser', function () {
    return function (joined, user) {
        output = _.reduce(joined, function (collector, options, username) {
            if (user.username !== username) {
                collector[username] = options;
            }
            return collector;
        }, {});
        return output;
    };
});
