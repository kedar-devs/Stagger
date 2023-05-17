const mongoose=require('mongoose')
const Schema=mongoose.Schema
const AddressSchema=Schema({
    ProfileId:{type:mongoose.Schema.Types.ObjectId,require:true},
    Address:{type:String,require:true},
    City:{type:String,require:true},
    State:{type:String,require:true},
    Latitude:{type:String,require:true},
    Longitue:{type:String,require:true}
})
const AddressModal=mongoose.model('Address',AddressSchema)
module.exports=AddressModal