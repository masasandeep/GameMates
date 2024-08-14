import User from '../models/user.model'
import asyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt'
const registerUser = asyncHandler(async (req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('all fields are mandatory')
    }
    const emailUsed = await User.findOne({email})
    if(emailUsed){
        res.status(400)
        throw new Error('email already in use')
    }
    const nameUsed = await User.findOne({email})
    if(nameUsed){
        res.status(400)
        throw new Error('username exists')
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

