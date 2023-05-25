const RatingModal = require("../Models/User/Rating.model")
const UserModal = require("../Models/User/User.model")
const {ObjectId}=require('mongodb')

exports.AddRating=async(data)=>{
    try{
    const id=new ObjectId()
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
        UserTo.OverallRatingCount+=1
        UserTo.OverallRating=(UserTo.OverallRating+Rating)/UserTo.OverallRatingCount
        UserTo.Rating.push(id)
        UserTo.save()
    }
    const rating={
        _id:id,
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
    console.log(err)
    return err
}

}