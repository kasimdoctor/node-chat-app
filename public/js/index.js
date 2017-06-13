var socket = io();

socket.on('connect', function () {
    console.log('Connected to server!');

    // socket.emit('createMessage', {
    //     from: 'Kasim',
    //     text: 'Hey there, this is from Kasim'
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

// listening for a custom event
socket.on('newMessage', function (message) {
    console.log('New message', message);
});

socket.on('newUser', function (message) {
    console.log(message);
});
