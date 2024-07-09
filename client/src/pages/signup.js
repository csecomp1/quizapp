import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [fname,setFname]=useState('');
    const [lname,setLname]=useState('');
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const navigate=useNavigate();
    const onsubmit=async(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/auth/register",{firstName:fname,lastName:lname,email:email,password:pass});
        alert("Account created");
        navigate("/takequiz");
      }
  return (
    <div className='lob signup'>
        <form  onSubmit={onsubmit}>
              <h1>Sign Up</h1>
             <input type="text" placeholder='First Name' onChange={(e)=>setFname(e.target.value)}/>
             <input type="text" placeholder='Last Name' onChange={(e)=>setLname(e.target.value)}/>
             <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
             <input type="password" placeholder='Password' onChange={(e)=>setPass(e.target.value)}/>
             <input type="submit" />
        </form>
    </div>
  )
}

export default Signup