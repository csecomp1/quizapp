import React ,{useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Navbar = () => {
  const [cookies,setCookies]=useCookies(["access_token"])
  const navigate=useNavigate();
  const logout=()=>{
    setCookies("access_token","");
      window.localStorage.removeItem("userID");
      navigate('/');
  }
  return (
    <div className='Navb'>
        <h>Quizz</h>
        <div className='Nlink'> <Link to="/createquiz">Create</Link>
        
        <Link to="/takequiz">Take quiz</Link>
        {!cookies.access_token?
        (<><Link to="/login">Login</Link>
        <Link to="/signup">Sign up</Link></>):(<><button onClick={logout}>Logout</button></>)
        }
        </div>
    </div>
  )
}

export default Navbar