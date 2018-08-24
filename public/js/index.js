var socket = io();

    socket.on('connect', function(){
        console.log('Connected to server');

       socket.emit("createMessage", {
            text:"Hey",
            from: "fg@gf.com"
       });

    });

    socket.on('disconnect', function(){
        console.log('Disconnected from server');

    });

    socket.on("newMessage", function(message){
        console.log("new message", message);

    });

 