/*import React from 'react'

const Createquiz = () => {
   
  return (
    <div>
        <form>
            <input placeholder='Name of the quiz'/>
            <select>
                <option>General Knowledge</option>
                <option>Science</option>
                <option>Maths</option>
                <option>History</option>
                <option>Engineering</option>
                <option>Geography</option>
            </select>
            
            <input placeholder='No of questions'/>
            <input placeholder='Duration'/>
            <input placeholder='Pass mark'/>
            
        </form>
    </div>
  )
}

export default Createquiz;*/
import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

const Createquiz = () => {
  const [cookies,setCookies]=useCookies(["access_token"]);
  const [quiz, setQuiz] = useState({
    quizName: "",
    quizDescription: "",
    creatorId:window.localStorage.getItem("userID"),
    numberOfQuestions:"",
    timeToSolve: "",
    passMark: "",
    questions: [
      {
        question: "",
        options: ["", "", "", ""],
        correctAnswer: "",
      },
    ],
  });
  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.splice(questionIndex, 1);
    setQuiz(updatedQuiz);
  };

  const handleAddQuestion = () => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions.push({
      question: "",
      options: ["", "", "", ""],
      correctAnswer: "",
    });
    setQuiz(updatedQuiz);
  };

  const handleAddOption = (questionIndex) => {
    const updatedQuiz = { ...quiz };
    updatedQuiz.questions[questionIndex].options.push("");
    setQuiz(updatedQuiz);
  };

  const handleSaveQuiz = () => {
    console.log(quiz);
    axios
      .post("http://localhost:3001/createquiz", quiz)
      .then((response) => {
        console.log(response.data);
        alert("Quiz created");
        
      })
      .catch((error) => {
        console.error("Error creating quiz:", error);
      });
  };
if(!cookies.access_token){
   return <div className="errl">
         Login or Register to create quiz 
   </div>
}
else{
  return (
    
    <div className="create">
      
      <h2>Create a Quiz</h2>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Quiz Name 
        </label><br></br>
        <input
          type="text"
          className="form-control"
          id="title"
          value={quiz.quizName}
          onChange={(e) => setQuiz({ ...quiz, quizName: e.target.value })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
           Description
        </label><br></br>
        <input
          type="text"
          className="form-control"
          id="description"
          value={quiz.quizDescription}
          onChange={(e) => setQuiz({ ...quiz, quizDescription: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
           No of questions 
        </label><br></br>
        <input
          type="text"
          className="form-control"
          id="description"
          value={quiz.numberOfQuestions}
          onChange={(e) => setQuiz({ ...quiz, numberOfQuestions: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
           Test Duration
        </label><br></br>
        <input
          type="text"
          className="form-control"
          id="description"
          value={quiz.timeToSolve}
          onChange={(e) => setQuiz({ ...quiz,timeToSolve: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
           Pass Mark
        </label><br></br>
        <input
          type="text"
          className="form-control"
          id="description"
          value={quiz.passMark}
          onChange={(e) => setQuiz({ ...quiz, passMark: e.target.value })}
        />
      </div>
      <br></br>
      <br></br>
      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex} className="mb-4">
          <label
            htmlFor={`question${questionIndex + 1}`}
            className="form-label"
          >
            Question {questionIndex + 1}:
          </label><br></br>
          <input
            type="text"
            className="form-control"
            id={`question${questionIndex + 1}`}
            value={question.question}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].question = e.target.value;
              setQuiz(updatedQuiz);
            }}
          />

          {question.options.map((option, optionIndex) => (
            <div key={optionIndex} className="mb-2">
              <label
                htmlFor={`option${optionIndex + 1}`}
                className="form-label"
              >
                Option {optionIndex + 1}:
              </label><br></br>
              <input
                type="text"
                className="form-control"
                id={`option${optionIndex + 1}`}
                value={option}
                onChange={(e) => {
                  const updatedQuiz = { ...quiz };
                  updatedQuiz.questions[questionIndex].options[optionIndex] =
                    e.target.value;
                  setQuiz(updatedQuiz);
                }}
              />
            </div>
          ))}

          <label
            htmlFor={`correctAnswer${questionIndex + 1}`}
            className="form-label"
          >
            Correct Answer (Option No - 0-3):
          </label><br></br>
          <input
            type="number"
            className="form-control"
            id={`correctAnswer${questionIndex + 1}`}
            value={question.correctAnswer}
            onChange={(e) => {
              const updatedQuiz = { ...quiz };
              updatedQuiz.questions[questionIndex].correctAnswer = parseInt(
                e.target.value,
                10
              );
              setQuiz(updatedQuiz);
            }}
          /><br></br>
          <div className="but1">
          <button
            className="btn btn-primary mt-2 space"
            onClick={() => handleAddOption(questionIndex)}
          >
            Add Option
          </button>
          <button
            className="btn btn-danger mt-2"
            onClick={() => handleRemoveQuestion(questionIndex)}
          >
            Remove Question
          </button>
          </div>
        </div>
      ))}
<div className="but2">
      <button className="btn btn-primary" onClick={handleAddQuestion}>
        Add Question
      </button>
      <button className="btn btn-success ms-2" onClick={handleSaveQuiz}>
        Save Quiz
      </button></div>
    </div>
    );}
};

export default Createquiz;