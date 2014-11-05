/**
 * Base for all classes in the application.
 * Implements Pub/Sub.
 */
var Base = function () {
    this.channels = {};
};

Base.prototype.on = function (event, callback) {
    if (!this.channels[event]) {
        this.channels[event] = [];
    }
    this.channels[event].push(callback);
};

Base.prototype.trigger = function (event, data) {
    if (this.channels[event]) {
        for (var i = 0, n = this.channels[event].length; i < n; i ++) {
            this.channels[event][i](data);
        }
    }
};

Base.prototype.off = function (event, callback) {
    if (!callback) {
        delete this.channels[event];
    }
    else {
        this.channels = this.channels.filter(function (handler) {
            return (handler !== callback);
        });
    }
};
