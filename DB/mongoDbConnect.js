const mongoose=require('mongoose')
require('dotenv').config()
const URL=process.env.MONGODB_URL
exports.DBConnect=()=>{
    try{
        mongoose.connect(URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "Stagger",
        })
        const connection=mongoose.connection
        return connection.once('open',()=>{
            console.log('connection established succesfully')
        })
    }
    catch(err){
        console.log(err)
        return false
    }
}