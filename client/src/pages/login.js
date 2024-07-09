import React, { useEffect, useState } from 'react'
import axios from "axios";
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
     const navigate=useNavigate();
     const [_,setCookies]=useCookies(["access_token"]);
    
    const onsubmit=async(e)=>{
      e.preventDefault();
      const res=await axios.post("http://localhost:3001/auth/login",{email:email,password:pass})
      window.localStorage.setItem("userID",res.data.userID);
      alert("login successfull")
      navigate("/")
      setCookies("access_token",res.data.token);
    }
  return (
    <div className='lob'>
      
      <form onSubmit={onsubmit} >
      <h1>Login</h1>
        <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Password' onChange={(e)=>{setPass(e.target.value)}}/>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default Login