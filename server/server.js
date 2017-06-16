const port = process.env.PORT || 3000;
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const {generateMessage, generateLocationMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');

var app = express();
var server = http.createServer(app);
var io = socketIO(server); 

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

    // send a message to the newly joined user
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to my chat app!'));

    // broadcast to everyone else that a new user has joined
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User has joined.'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        // io.emit emits to every single connection including the one who sent it
        io.emit('newMessage', generateMessage(message.from, message.text));

        // call a callback sending an ack to the client
        callback('This is from your server');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
