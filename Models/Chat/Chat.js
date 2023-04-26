const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ChatSchema=Schema({
    ChatBy:{type:mongoose.Schema.Types.ObjectId,require:true},
    ChatTo:{type:mongoose.Schema.Types.ObjectId,require:true},
    Message:{type:String,require:true}
})
const ChatModal=mongoose.model('Chat',ChatSchema)
module.exports=ChatModal 