var CreateDoodle = function (params) {
    View.apply(this, arguments);
    this.template = $('#createDoodle').text();
    this.$el = $('<div/>');
};

CreateDoodle.prototype = Object.create(View.prototype);
CreateDoodle.prototype.constructor = CreateDoodle;

CreateDoodle.prototype.render = function () {
    this.$el.html(this.template);
    this.$el.on(
};
