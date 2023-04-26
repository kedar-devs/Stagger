const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
    PhoneNumber:{type:Number,required:true},
    Adress:{type:mongoose.Schema.Types.ObjectId},
    ProfilePic:{type:String,required:true},
    SocialProfile:{type:mongoose.Schema.Types.ObjectId},
    OverallRating:{type:mongoose.Schema.Types.Decimal128,required:true},
    Rating:{type:mongoose.Schema.Types.ObjectId,required:true}
})
const UserModal=mongoose.model('User',UserSchema)
module.exports=UserModal