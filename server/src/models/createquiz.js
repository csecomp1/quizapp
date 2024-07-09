const mongoose=require("mongoose");

const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: Number, required: true }, // Change the type to Number
});

const QuizSchema= new mongoose.Schema({
    
      quizName: {
        type:String,
        required: true
        
      },
      quizDescription:{
        type:String,
        required: true
      },
      creatorId:{
           type:String,
           required:true
      },
      
      numberOfQuestions: {
        type: Number,
        required: true
      },
      timeToSolve: {
        type: Number,
        required: true
      },
      passMark: {
        type: Number,
        required: true
      },
      questions: [questionSchema],
      
})

const QuizModel=mongoose.model("quesdet",QuizSchema);
module.exports=QuizModel;