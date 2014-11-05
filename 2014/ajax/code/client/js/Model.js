/**
 * Models encapsulate data and notify anyone who's interested when
 * something changes.
 */
var Model = function (attributes) {
    Base.apply(this);
    this.attributes = attributes || {};
    this.type = null;
};

Model.prototype = Object.create(Base.prototype);
Model.prototype.constructor = Model;

Model.prototype.set = function (key, value) {
    this.attributes[key] = value;
    this.trigger('change:'+key, value);
};

Model.prototype.get = function (key) {
    return this.attributes[key];
};

// AJAX methods: CRUD.

Model.prototype.create = function () {
    var that = this;
    $.ajax({
        method: 'POST',
        url: config.baseUrl+this.type,
        dataType: 'json',
        data: that.attributes,
        success: function (newAttributes) {
            for (var key in newAttributes) {
                that.set(key, newAttributes[key]);
            }
            that.trigger('create');
        }
    });
};

Model.prototype.read = function (_id) {
    var that = this;
    $.ajax({
        method: 'GET',
        url: config.baseUrl+this.type+'/'+_id,
        success: function (attributes) {
            for (var key in attributes) {
                that.set(key, attributes[key]);
            }
            that.trigger('read');
        }
    });
};

Model.prototype.update = function () {
    var that = this;
    $.ajax({
        method: 'PUT',
        url: config.baseUrl+this.type+'/'+this.get('_id'),
        dataType: 'json',
        data: that.attributes,
        success: function (newAttributes) {
            for (var key in newAttributes) {
                that.set(key, newAttributes[value]);
            }
            that.trigger('update');
        }
    });
};

Model.prototype.remove = function () {
    var that = this;
    $.ajax({
        method: 'DELETE',
        url: config.baseUrl+this.type+'/'+this.get('id'),
        success: function (newAttributes) {
            that.trigger('delete');
        }
    });
};
