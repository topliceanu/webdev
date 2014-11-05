var User = function () {
    Model.apply(this, arguments);
    this.type = 'users';
};

User.prototype = Object.create(Model.prototype);
User.prototype.constructor = User;
