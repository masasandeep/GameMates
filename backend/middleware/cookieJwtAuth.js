import jwt from 'jsonwebtoken'

const cookieJwtAuth = (req,res,next)=>{
    const token = req.cookie.token
    try{
        const user = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        req.user = user 
        next()
    }catch(err){
        res.clearCookie('token')
        throw new Error('token expired')
    }
}
export default cookieJwtAuth