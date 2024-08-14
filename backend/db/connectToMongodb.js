import mongoose from "mongoose"

const connectToMongodb = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("database connected")
    }
    catch(error){
        console.log("Error connecting to db",error.message)
    }
}

export default connectToMongodb