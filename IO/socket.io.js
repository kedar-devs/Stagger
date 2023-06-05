const io=require('socket.io')(3000)
io.on("connection",socket=>{
    socket.on("send-chat-message",(mssg)=>{
        socket.broadcast.emit("chat-message",mssg)
    })
})