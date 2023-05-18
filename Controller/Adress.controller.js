const AddressModal = require("../Models/User/Address.model");
const axios=require('axios')
const Geocode=process.env.GEOCODE

exports.AddAdress=async(data)=>{
    try{
    const {Address,City,State}=data
    var Latitude,Longitue
    const totalAddress=Address+','+City+','+State
   const result=await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${totalAddress}&key=${Geocode}`)
    console.log(result)
    Latitude=result.data.results[0].annotations.DMS.lat
    Longitue=result.data.results[0].annotations.DMS.lng
    const address={
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