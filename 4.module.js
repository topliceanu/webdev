var Tweet = function (author, text) {
    var print = function () {
        console.log(author+' says '+text);
    };
    return {
        author: author,
        text: text,
        print: print
    };
};

var t1 = Tweet('me', 'salut');
t1.print();

t1.name = 'impostor';
t1.print();
