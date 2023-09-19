import userModel from "../../Database/models/user.model.js";


//get all user 
export const getAll = async(req,res)=>{
    const users = await userModel.find()
    res.json({message:"Done",users}) 
  }

  // add user
  export const addUser = async(req,res)=>{
    const {name , email} = req.body;
    const newUser = new userModel({name , email});
    await newUser.save();
    res.json({message:"Done",newUser})
  }

  // get user by id
   export const getUserById = async(req,res)=>{
    const {id} = req.params;
    const user = await userModel.findById(id);
    res.json({message:"Done",user})
  }