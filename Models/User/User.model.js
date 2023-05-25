const mongoose=require('mongoose')
const Schema=mongoose.Schema
const UserSchema=Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true,unique:true},
    Password:{type:String,required:true},
    PhoneNumber:{type:Number,required:true,unique:true},
    Adress:{type:mongoose.Schema.Types.ObjectId},
    ProfilePic:{type:String,required:true},
    SocialProfile:{type:mongoose.Schema.Types.ObjectId},
    OverallRating:{type:mongoose.Schema.Types.Decimal128,required:true},
    OverallRatingCount:{type:Number,required:true},
    Rating:{type:[mongoose.Schema.Types.ObjectId],required:true},
    accessToken:{type:String,required:true},
    resetToken:{type:String,required:true}
})
const UserModal=mongoose.model('User',UserSchema)
module.exports=UserModal