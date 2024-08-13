import gamerProfiles from "../models/gamerProfiles.model.js"

export const register = async(req,res)=>{
    try{
        const data = req.body
        const {gamerId} = req.body
        const user = await gamerProfiles.findOne({gamerId})
        if(user){
            
            return res.status(400).json({error:"user already exists"})
        }
        const newProfile = await gamerProfiles(data)
        if(newProfile){
            await newProfile.save()
            res.status(201).json(newProfile)
        }else{
            return res.status(500).json({error: "Internal server error"})
        }
    }catch(error){
        console.log("Error in registering profile",error.message)
        res.status(500).json({error:"Internal server error"})
    }


}