import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Takequiz = () => {
    const [quiz,setQuiz]=useState([]);
    const [searchres,setSearchRes]=useState([]);
    const [sea,setSea]=useState('');
   
    useEffect(()=>{
      axios
      .get("http://localhost:3001/createquiz")
      .then((response) => {
        setQuiz(response.data);
        setSearchRes(response.data);
       
      })
      .catch((error) => {
        console.error("Error fetching quizzes:", error);
        
      });
    },[])
    useEffect(() => {
          
          const filres=quiz.filter((post)=>((post.quizName).toLowerCase()).includes(sea.toLowerCase())||
          ((post.quizDescription).toLowerCase()).includes(sea.toLowerCase()));
          setSearchRes(filres)
         
      }, [sea]);
     
      
  return (
    <div className='tquiz'>
      <input type="text" placeholder='search  quiz'   onChange={(e)=>setSea(e.target.value)}/>
    <div className='qbox'>
         {
          searchres.map((q)=>{
                return (<Link to={"/takequiz/"+q._id}><div key={q._id} className='qb'>
                    <span className='tl'>Title : </span><p className='qname'>{q.quizName}</p>
                    <span className='tl'>What the quiz about ? : </span>
                    <p className='qname'>{q.quizDescription}</p>
                    <p><span className='tot'>Total questions : </span>{q.numberOfQuestions}</p>
                    <p><span className='tot'>Total Marks     : </span>{q.passMark}</p>
                    <p><span className='tot'>Time to solve (in minutes)  : </span>{q.timeToSolve}</p>
                </div></Link>)
            })
         }  
    </div></div>
  )
}

export default Takequiz