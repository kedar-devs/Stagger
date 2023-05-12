const User=require('./../Models/User/User.model')
const FileUpload=require('./../Helper/FileUpload')

const { ObjectId } = require('mongodb');
const UserModal = require('./../Models/User/User.model');
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
     SocialProfile:new ObjectId(),
     OverallRating:0.00,
     Rating:new ObjectId(),
     Adress:new ObjectId()
    }
    const User=new UserModal(newUser)
    User.save((err,user)=>{
        if(err){
            console.log(err)
            return false
        }
        else{
            return user
        }
    })
}catch(err){

}
}