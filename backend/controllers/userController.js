import User from '../models/user.model.js'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password,confirmPassword} = req.body
    if(!name || !email || !password || !confirmPassword){
        res.status(400).json({message:'all fields are mandatory'})
        //throw new Error('all fields are mandatory')
    }
    const emailUsed = await User.findOne({email})
    if(emailUsed){
        res.status(400).json({message:'email already in use'})
        //throw new Error('email already in use')
    }
    const nameUsed = await User.findOne({email})
    if(nameUsed){
        res.status(400).json('username already taken')
        //throw new Error('username exists')

    }
    if(password!==confirmPassword){
        res.status(400).json({message:'passwords not matching!!!'})
    }
    const hashedPassword = await bcrypt.hash(password,10)
    const user = User.create({
        name:name,
        email:email,
        password:hashedPassword,
    })
    if(user){
        res.status(201).json({
            '_id':user.id,
            'username':user.name
        })
    }
    else{
        res.status(400)
        throw new Error('invalid')
    }
})

export const allUsers = (async (req,res)=>{
    try{
         const users = await User.find({})
         res.status(201).json({
            'users':users
         })
    }
    catch(err){
        throw new Error('error while fetching users data')
    }
})

export const loginUser = (async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && (await bcrypt.compare(password,user.password))){
        const token = jwt.sign(user.toJSON(),process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1hr'})
        res.cookie('token',token,{
            httpOnly:true,
            secure:false, // Use HTTPS in production
            sameSite: 'None', 
        })
        res.status(200).json({message:token})
    }else{
        return res.status(400).json({message:'user doesnot exist bruh'})
    }

})