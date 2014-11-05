/**
 * A view represents a portion of the page.
 * Views handle rendering of model data, and transmit user actions to the model.
 */
var View = function (params) {
    Base.apply(this);
};

View.prototype = Object.create(Base.prototype);
View.prototype.constructor = View;
