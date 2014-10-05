var f = function (x) {
    var y = 2;
    var g = function (z) {
        return x * y * z;
    };
    return g;
};

var ff = f(10);
ff(5);

var ff1 = f(10);
var ff2 = f(10);
console.log (ff1 === ff2); //?



// Dynamic Programming.

var fact = (function () {
    cache = {};
    return function f (n) {
        if (!cache[n])
            if (n === 1) {
                return 1;
            }
            else {
                cache[n] = n * f(n-1);
            }
        return cache[n];
    };
})();

fact(10)
