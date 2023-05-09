const User=require('./../Models/User/User.model')
const FileUpload=require('./../Helper/FileUpload')
const { ObjectId } = require('mongodb');
exports.AddUser=async(data)=>{
    try{
    const {Name,Email,Password,PhoneNumber}=data
    const Pp=data.files.Pp
    const Url=await FileUpload.UploadImage(Pp)

    const newUser={
     Name,
     Email,
     Password,
     PhoneNumber,
     ProfilePic:Url.Url,
     SocialProfile:,
     OverallRating:0.00

    }
}catch(err){

}
}