const SocialMediaModal = require("../Models/User/SocialMedia.model")
const UserModal = require("../Models/User/User.model")

exports.AddSocials=async(data)=>{
    try{
    const {AccessToken,SocialName,SocialLink}=data
    const FoundUser=await UserModal.findOne({accessToken:AccessToken})
    if(FoundUser){
        const socials={
            ProfileId:FoundUser._id,
            SocialLink,
            SocialName
        }
        const newSocial=new SocialMediaModal(socials)
        return newSocial.save()

    }
    }catch(err){
        return err
    }
}