var _ = {};


_.each = function (list, iterator) {
    for (var i = 0, n = list.length; i < n; i ++) {
        iterator(list[i]);
    }
};


_.pluck = function (list, propertyName) {
    output = [];
    _.each(list, function (item) {
        output += item[propertyName];
    });
};
