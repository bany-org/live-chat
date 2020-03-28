var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

// WARNING: app.listen(80) will NOT work here!
server.listen(3001);

io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('chat message', function(msg) {
        console.log('serv', msg);

        io.emit('chat message', msg);
    });
});
