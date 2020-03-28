const express = require('express');
const path = require('path');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function(req, res) {
    return res.send('pong');
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port);

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});
