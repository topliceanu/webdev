var x = 1;

var f = function () {
    console.log(x);
};

f();

var g = function () {
    var y = 2;
    z = 3;
};

z();
console.log(x, y, z);

if (true) {
    var t = 4;
}

console.log(z, y, z, t);
