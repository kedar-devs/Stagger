const User=require('./../Models/User/User.model')
const FileUpload=require('./../Helper/FileUpload')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
require('dotenv').config()
const { ObjectId } = require('mongodb');
const UserModal = require('./../Models/User/User.model');
exports.AddUser=async(data)=>{
    try{
        console.log(data)
    const {Name,Email,Password,PhoneNumber}=data
    var hash = bcrypt.hashSync(Password, 8);
    if(!hash){
        return {message:"Error while creating encryption for the password"}
    }
    const accessToken=jwt.sign({subject:hash},process.env.SECRET_KEY)
    const resetToken=jwt.sign({subject:new ObjectId()},process.env.SECRET_KEY)
    // const Pp=data.files.Pp
    // const Url=await FileUpload.UploadImage(Pp)

    const newUser={
     Name,
     Email,
     Password:hash,
     PhoneNumber,
     ProfilePic:' ',
     SocialProfile:new ObjectId(),
     OverallRating:0.00,
     OverallRatingCount:0,
     Rating:[new ObjectId()],
     Adress:new ObjectId(),
     accessToken,
     resetToken
    }
    const User=new UserModal(newUser)
    return User.save()
   
}catch(err){
    return err
}
}