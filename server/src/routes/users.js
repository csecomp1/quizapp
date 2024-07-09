const express=require("express");
const jwt=require("jsonwebtoken"); 
const router=express.Router()
const UserModel=require("../models/users.js");
router.post("/register",async(req,res)=>{
     const {firstName,lastName,email,password}=req.body;
    
     const user=await UserModel.findOne({email:email})
     if(user){
        return res.json({message:"user already exists"})
     }
     
     const newuser=new UserModel({firstName,lastName,email,password})
     await newuser.save()
     res.json({message:"user registered successfully"})
})
router.post("/login",async(req,res)=>{
   const {email,password}=req.body;
  
   const user=await UserModel.findOne({email:email,password:password})
   if(user){
    const token=jwt.sign({id:user._id},"secret")
    return res.json({token,userID:user._id})
      
   }
   return res.json({message:"not successfull"})
})
router.get("/users",async(req,res)=>{
      try{
         const users=await UserModel.find({});
         return res.json(users);
      }
      catch{
          return res.json({"msg":"no user"})
      }
      
})
module.exports = router;
