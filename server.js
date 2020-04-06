const express = require('express');
const path = require('path');
const recipeHandlers = require('./src/server/recipeHandlers');

var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cors = require('cors');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

const allowedOrigins = [
    'http://localhost:3001',
    'https://nasza-kuchnia.web.app',
    'https://nasza-kuchnia.firebaseapp.com',
];
app.use(
    cors({
        origin: function (origin, callback) {
            // allow requests with no origin
            // (like mobile apps or curl requests)
            if (!origin) return callback(null, true);
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
                return callback(new Error(msg), false);
            }
            return callback(null, true);
        },
    })
);

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/recipe/:id', function (req, res) {
    const recipe = recipeHandlers.lookForRecipe(req.params.id);

    res.json(recipe);
});

app.get('/recipes', function (req, res) {
    const recipes = recipeHandlers.getAllRecipes();

    res.json(recipes);
});

server.listen(port);

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});
