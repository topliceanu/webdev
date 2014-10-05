var s = document.createElement('script');
s.src = "https://demo-project-c9-alexandrutopliceanu.c9.io/socket.io/socket.io.js";
document.appendChild(s);

var s = io.connect('https://demo-project-c9-alexandrutopliceanu.c9.io');
s.on('message', function () {console.log(arguments);});
s.emit('message', 'some data');
