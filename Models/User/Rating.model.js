const mongoose=require('mongoose')
const Schema=mongoose.Schema
const RatingSchema=Schema({
    RatedTo:{type:mongoose.Schema.Types.ObjectId,require:true},
    RatedBy:{type:mongoose.Schema.Types.ObjectId,require:true},
    Rating:{type:mongoose.Schema.Types.Decimal128,require:true},
    Review:{type:String,require:true}
})
const RatingModal=mongoose.model('Rating',RatingSchema)
module.exports=RatingModal