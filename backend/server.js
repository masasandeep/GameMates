import express from "express"
import http from "http"
import dotenv from "dotenv"
import connectToMongodb from "./db/connectToMongodb.js"
import profileRoute from "./routes/profile.route.js"
const PORT = process.env.PORT || 5000
const app = express()
const server = http.createServer(app)
dotenv.config()
app.use(express.json())
app.use("/api/profile",profileRoute)
server.listen(PORT,()=>{
    connectToMongodb()
    console.log(`server running on port ${PORT}`)
})