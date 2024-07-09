const mongoose=require("mongoose");

const UserSchema= new mongoose.Schema({
    firstName: {
        type: String,
        required: true
      },
    lastName: {
        type: String,
        required: true
      },
    email: {
        type: String,
        required: true,
        unique: true
      },
    password: {
        type: String,
        required: true
      },
    Info: {
        quizId: {
            type:mongoose.Schema.Types.ObjectId,
        },
        score: {
            type:Number,
        }
    },
      
})

const UserModel=mongoose.model("users",UserSchema);
module.exports=UserModel;