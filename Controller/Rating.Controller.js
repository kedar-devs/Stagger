const RatingModal = require("../Models/User/Rating.model")
const UserModal = require("../Models/User/User.model")
const {objectId}=require('mongodb')

exports.AddRating=async(data)=>{
    try{
    let {RatingTo,RatedBy,Rating,Comment}=data
    const UserBy=await UserModal.findOne({accessToken:RatedBy})
    const UserTo=await UserModal.findOne({_id:RatingTo})
    let RatedToName=" "
    let RatedByName=" "
    if(UserBy){
      RatedBy=UserBy._id
      RatedByName=UserBy.Name
    }
    if(UserTo){
        RatedToName=UserTo.Name
    }
    const rating={
        RatedTo:RatingTo,
        RatedBy,
        RatedByName,
        RatedToName,
        Rating,
        Comment
    }
    const newRating=new RatingModal(rating)
    return newRating.save()
}catch(err){
    return err
}

}