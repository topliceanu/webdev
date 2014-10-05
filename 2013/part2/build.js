// This script generates the bookmarklet code. It concatenates jquery and
// our own bookmarklet.js, then uglifyies it then appends the `javascript: `
// protocol in front.

var fs = require('fs');

var uglify = require('uglify-js');

var result = uglify.minify([
    __dirname+"/index.js"
]);

var code = 'javascript: (function () {'+result.code+'})();';

fs.writeFileSync(__dirname+'/bookmarklet.js', code, {encoding: 'utf8'});

console.log(result.code);
