import express from "express"
import http from "http"
import cors from "cors"
import dotenv from "dotenv"
import connectToMongodb from "./db/connectToMongodb.js"
import profileRoute from "./routes/profile.route.js"
import userRoute from "./routes/userroute.js"
import cookieJwtAuth from './middleware/cookieJwtAuth.js'
import cookieParser from "cookie-parser"
const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
dotenv.config()
app.use(cors({ origin: 'http://localhost:3000' })); 
app.use(express.json())
app.use(cookieParser())
app.use("/api/profile",cookieJwtAuth,profileRoute)
app.use("/api/users",userRoute)
server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})
