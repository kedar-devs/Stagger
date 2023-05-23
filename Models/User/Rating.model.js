const mongoose=require('mongoose')
const Schema=mongoose.Schema
const RatingSchema=Schema({
    RatedTo:{type:mongoose.Schema.Types.ObjectId,required:true},
    RatedToName:{type:String,requiredd:true},
    RatedBy:{type:mongoose.Schema.Types.ObjectId,required:true},
    RatedByName:{type:String,requiredd:true},
    Rating:{type:mongoose.Schema.Types.Decimal128,required:true},
    Comment:{type:String}
})
const RatingModal=mongoose.model('Rating',RatingSchema)
module.exports=RatingModal