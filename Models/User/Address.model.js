const mongoose=require('mongoose')
const Schema=mongoose.Schema
const AddressSchema=Schema({
    ProfileId:{type:mongoose.Schema.Types.ObjectId,required:true},
    Address:{type:String,required:true},
    City:{type:String,required:true},
    State:{type:String,required:true},
    Latitude:{type:String,required:true},
    Longitue:{type:String,required:true}
})
const AddressModal=mongoose.model('Address',AddressSchema)
module.exports=AddressModal