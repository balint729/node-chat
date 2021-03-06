const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) =>{
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'mike@example.com',
        text: 'Hey',
        createdAt: 123123
    });

   socket.on("createMessage", (message) =>{
    console.log("message created", message);
   });

    socket.on('disconnect', () =>{
        console.log('User disconnected');
    });
});



// app.get('/', (req,res) =>{
//     require(publicPath+'/index.html');

// });

server.listen(port, () =>{
    console.log(`Started on port ${port}`);
})