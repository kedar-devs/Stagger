const mongoose=require('mongoose')
const Schema=mongoose.Schema
const SocialMediaSchema=Schema({
    ProfileId:{type:mongoose.Schema.Types.ObjectId,required:true},
    SocialName:{type:String,required:true},
    SocialLink:{type:String,required:true},
})
const SocialMediaModal=mongoose.model('SocialMedia',SocialMediaSchema)
module.exports=SocialMediaModal