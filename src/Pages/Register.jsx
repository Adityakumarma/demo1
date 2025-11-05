import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {
    const [username,setusername]= useState("")
    const [password,setpassword]= useState("")
    
const handleregister = () => {
    const User = { username,password };

     localStorage.setItem("users", JSON.stringify(User));
     alert("user added")
}
  return (
    <>
    <div className=' border mt-5'>
        <div className=' text-center'>
            <h1>Register</h1>
            <div className=' mt-5 text-center'>
                <input value={username}  onChange={(e) => setusername(e.target.value)}  type="text" placeholder='enter Username' /> <br /> <br />
                <input value={password}  onChange={(e) => setpassword(e.target.value)} type="text" placeholder='enter password' /> <br /> <br />
                <Link to={"/login"}><button onClick={handleregister} className='btn btn-primary'>Register</button></Link>
                
                
            </div>
    
        </div>
   </div>
    
    </>
  )
}


export default Register