var A = function (x) {
    this.x = x;
};

A.prototype.f = function () {
    console.log (this.x);
};

var a = new A(1);
a.f();


var B = function (x, y) {
    this.x = x;
    this.y = y;
};

B.prototype = new A();

var b = new B(1, 2);
b.f();
