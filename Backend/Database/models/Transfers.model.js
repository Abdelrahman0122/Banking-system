import mongoose from "mongoose";

const transfareSchema = new mongoose.Schema({
    sender:String,
    receiver:String,
    amount:Number,
},{timestamps:true})

const transfareModel = mongoose.model("transfare",transfareSchema);

export default transfareModel;