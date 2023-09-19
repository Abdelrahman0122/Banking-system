import mongoose  from "mongoose";

export const connection= () => {
    mongoose.connect("mongodb://127.0.0.1:27017/bankSystem").then(()=>{
        console.log("Database Connected");
    })
    .catch((err)=>{
        console.log(err);
    })
    }