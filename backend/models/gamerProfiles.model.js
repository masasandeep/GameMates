import mongoose from "mongoose";

const gamerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gamerId:{
        type: String,
        required: true,
        unique: true
    },
    Level:{
        type: String,
        required: true
    },
    Rank:{
        type: String,
        required: true
    },
    kd_ratio:{
        type: String,
        required: true
    },
    headshot_rate:{
        type: String,
        required: true
    },
    top_3_ratio:{
        type: String,
        required: true
    }
})
const gamerProfiles = mongoose.model("gamerProfiles",gamerSchema)
export default gamerProfiles