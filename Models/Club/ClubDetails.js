const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ClubDetails=Schema({
    ClubName:{type:String,require:true},
    Adress:{type:mongoose.Schema.Types.ObjectId,require:true},
    OverallRating:{type:mongoose.Schema.Types.Decimal128,required:true},
    Rating:{type:mongoose.Schema.Types.ObjectId,required:true},
    ClubLogo:{type:String,require:true},
    Pic1:{type:String,require:true},
    Pic2:{type:String,require:true},
    Pic3:{type:String,require:true},
    Pic4:{type:String,require:true},
    Capacity:{type:Number,require:true},
    EntryFees:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const ClubModel=mongoose.model('Club',ClubDetails)
module.exports=ClubModel