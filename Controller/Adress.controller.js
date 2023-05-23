const AddressModal = require("../Models/User/Address.model");
const axios=require('axios');
const UserModal = require("../Models/User/User.model");
const Geocode=process.env.GEOCODE

exports.AddAdress=async(data)=>{
    try{
    
    const {Address,City,State,AccessToken}=data
    const FoundUser=await UserModal.findOne({accessToken:AccessToken})
    let ProfileId=' '
    if(FoundUser){
        ProfileId=FoundUser._id
    }
    else{
        return {message:"No User with this Id Found"}
    }
    var Latitude,Longitue
    const totalAddress=Address+','+City+','+State
   const result=await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${totalAddress}&key=${Geocode}`)
    Latitude=result.data.results[0].annotations.DMS.lat
    Longitue=result.data.results[0].annotations.DMS.lng
    const address={
        ProfileId,
        Address,
        City,
        State,
        Latitude,
        Longitue
    }
    const newAdress=new AddressModal(address)
    return newAdress.save()
    }catch(err){
        return err
    }

}