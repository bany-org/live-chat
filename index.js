var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 9290;

app.get('/index.html', function(req, res) {
    console.log('idzie request + port', port);

    res.sendFile(__dirname + '/build/index.html');
});

app.get('/static/css/main.8ab6f918.chunk.css', function(req, res) {
    console.log('idzie request');

    res.sendFile(__dirname + '/build/static/css/main.8ab6f918.chunk.css');
});

app.get('/static/js/2.d833781d.chunk.js', function(req, res) {
    console.log('idzie request');

    res.sendFile(__dirname + '/build/static/js/2.d833781d.chunk.js');
});

app.get('/static/js/main.c32c3ad7.chunk.js', function(req, res) {
    console.log('idzie request');

    res.sendFile(__dirname + '/build/static/js/main.c32c3ad7.chunk.js');
});

// WARNING: app.listen(80) will NOT work here!
server.listen(port);

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat message', function(msg) {
        console.log('serv', msg);

        io.emit('chat message', msg);
    });
});
