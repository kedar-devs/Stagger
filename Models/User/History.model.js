const mongoose=require('mongoose')
const Schema=mongoose.Schema
const  HistorySchema=Schema({
    ProfileId:{type:mongoose.Schema.Types.ObjectId,require:true},
    ProfileOf:{type:mongoose.Schema.Types.ObjectId,require:true},
})
const HistoryModel=mongoose.model('History',HistorySchema)
module.exports=HistoryModel
