const mongoose=require('mongoose')
const Schema=mongoose.Schema
const ClubDetails=Schema({
    ClubName:{type:String,required:true},
    Adress:{type:mongoose.Schema.Types.ObjectId,required:true},
    OverallRating:{type:mongoose.Schema.Types.Decimal128,requiredd:true},
    Rating:{type:mongoose.Schema.Types.ObjectId,requiredd:true},
    ClubLogo:{type:String,required:true},
    Pic1:{type:String,required:true},
    Pic2:{type:String,required:true},
    Pic3:{type:String,required:true},
    Pic4:{type:String,required:true},
    Capacity:{type:Number,required:true},
    EntryFees:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const ClubModel=mongoose.model('Club',ClubDetails)
module.exports=ClubModel