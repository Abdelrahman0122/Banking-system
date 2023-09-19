import userModel from "../../Database/models/user.model.js";
import transfareModel from "../../Database/models/Transfers.model.js";


// transfare controller
export const transfare = async (req, res) => {
    const{from,to,amount} = req.body;
    const sender = await userModel.findOne({email:from});
    const receiver = await userModel.findOne({email:to});
    if(!sender){
        return res.json({message:"Sender not found"});
    }
    if(!receiver){
        return res.json({message:"Receiver not found"});
    }
    if(sender.currentBalance<amount){
        return res.json({message:"Insufficient Balance"});
    }
    const senderBalance = sender.currentBalance - amount;
    const receiverBalance = receiver.currentBalance + amount;
    await userModel.updateOne({email:from},{currentBalance:senderBalance});
    await userModel.updateOne({email:to},{currentBalance:receiverBalance});
    const newTransfare = new transfareModel({
        sender:from,
        receiver:to,
        amount:amount
    })
    await newTransfare.save();
    res.json({message:"Transfare Successfull"}); 
}

// view all transfers controller
export const viewAllTransfers = async (req, res) => {
    const allTransfers = await transfareModel.find();
    res.json({message:"All Transfers",allTransfers});
}