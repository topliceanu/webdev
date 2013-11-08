// 1. Require the `fs` standard library.
var fs = require('fs');


var path = __dirname + '/data.txt';
var data = "!!!!!!!!!!!!!";

// 2. Create a new file and write data in it.
fs.writeFile(path, data, function (error) {
    if (error) {
        console.log(error);
        return;
    }

    // 3. Read the data from the newly created file and print it.
    fs.readFile(path, {encoding: 'utf8'}, function (error, data) {
        if (error) {
            console.log(error);
            return;
        }
        // 4. Print it to the console.
        console.log(data);
    });
});
