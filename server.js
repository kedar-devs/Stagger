const app=require('./app')
const {DBConnect}=require('./DB/mongoDbConnect')
const port=process.env.PORT || 5000
const connect=DBConnect()
const io=require('socket.io')(3080)
io.on("connection",socket=>{
    console.log("connected")
    socket.on("send-chat-message",(mssg)=>{
        socket.broadcast.emit("chat-message",mssg)
    })
})
if(connect){
    app.listen(port,()=>{
        console.log(`Server is up on port:${port}`)
    })
}
