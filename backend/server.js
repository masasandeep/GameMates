import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import connectToMongodb from "./db/connectToMongodb.js"
import profileRoute from "./routes/profile.route.js"
import userRoute from "./routes/userroute.js"
import cookieJwtAuth from './middleware/cookieJwtAuth.js'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
import ws,{WebSocketServer} from "ws"
const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
dotenv.config()
app.use(cors({origin: 'http://localhost:3000',credentials:true, })); 
app.use(express.json())
app.use(cookieParser())
app.use("/api/profile",cookieJwtAuth,profileRoute)
app.use("/api/users",userRoute)
server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})
const wss = new WebSocketServer({port:5001})
wss.on('connection',(connection,req)=>{
    const cookies = req.headers.cookie
    // to get the cookies till here from frontend, we need to use credential=true in cors and credential=include at login call in frontend
    //console.log(cookies)
    if(cookies){
        const tokenCookieString = cookies.split(';').find(str=>str.startsWith('token='))
        
        if(tokenCookieString){
        const token = tokenCookieString.split('=')[1]
        if(token){
            jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,{},(err,userData)=>{
                const {_id,name} = userData
                connection.userId = _id 
                connection.username = name
            })
        }
        }
    }
    console.log([...wss.clients].map(c=>c.username))
})