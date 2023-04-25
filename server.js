const app=require('./app')
const {DBConnect}=require('./DB/mongoDbConnect')
const port=process.env.PORT || 5000
const connect=DBConnect()
if(connect){
    app.listen(port,()=>{
        console.log(`Server is up on port:${port}`)
    })
}
