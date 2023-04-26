const mongoose=require('mongoose')
const Schema=mongoose.Schema
const EntryFeesSchema=Schema({
    ClubId:{type:String,require:true},
    EntryType:{type:String,require:true},
    Fee:{type:Number,require:true}
})
const EntryFeesModel=mongoose.model('EntryFee',EntryFeesSchema)
module.exports=EntryFeesModel