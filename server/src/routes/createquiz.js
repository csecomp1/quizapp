const express=require("express");
const router=express.Router();
const QuizModel=require("../models/createquiz")

router.post("/",async(req,res)=>{
  
      try{
        const newquiz =new QuizModel(req.body);
        console.log(req.body)
        await newquiz.save();
        return res.json({"msg":"quiz created"});
        }
        catch(err){
            return res.json(err);
        }
});
router.get("/:id",async(req,res)=>{
  const id=req.params.id;
  try{
    const quiz=await QuizModel.findOne({_id:id});
    return res.json(quiz);
  }
  catch(err){
    return res.json(err);
  }
})
router.get("/",async(req,res)=>{
  
 try{ const quiz=await QuizModel.find({});
 return res.json(quiz);
}
catch(err){
return res.json(err);
}
});
router.post("/:id/submit",async (req, res) => {
  const { id } = req.params;
  const { selectedAnswers } = req.body;

  try {
    // Fetch the quiz to get correct answers
    const quiz = await QuizModel.findById({_id:id});

    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    // Calculate the score based on selected and correct answers
    let score = 0;
    quiz.questions.forEach((question, index) => {
      const correctAnswerIndex = question.options.findIndex(
        (option, optionIndex) => optionIndex === question.correctAnswer
      );

      if (selectedAnswers[index] === correctAnswerIndex) {
        score++;
      }
    });

    // Ensure the score is limited to 100%
    const percentageScore = Math.min(
      (score / quiz.questions.length) * 100,
      100
    );

    res.json({ score: percentageScore });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports=router;