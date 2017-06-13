const port = process.env.PORT || 3000;
const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

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
    socket.emit('newUser', {
        from: 'Admin',
        text: 'Welcome to my chat app!',
        createdAt: new Date().getTime()
    });

    // broadcast to everyone else that a new user has joined
    socket.broadcast.emit('newUser', {
        from: 'Admin',
        text: 'New User has joined.',
        createdAt: new Date().getTime()
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        // io.emit emits to every single connection including the one who sent it
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });

        // socket.broadcast broadcasts it to everyone except the sender
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });

    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}.`);
});
