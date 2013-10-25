/**
 * Example of a function that takes a long time to execute and `delays`
 * everything that was scheduled in that time.
 */

var f = function (n) {
    setTimeout(function () {
        console.log('async done');
    }, 1000);
    p = 'x';
    for (var i = 1; i < n; i ++) {
        p += p;
    }
    console.log('sync done');
};

f(16);

var f = function (n) {
    setTimeout(function () {
        console.log('async done');
    }, 1000);
    var p = 'x';
    var i = 1;
    var concat = function () {
        p += p;
        if (i < n) {
            setTimeout(concat, 100);
        }
        else {
            console.log('sync done');
        }
    };
    concat();
};

f(16);
