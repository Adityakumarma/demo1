import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
     const [username,setusername]= useState("")
    const [password,setpassword]= useState("")

    const handlelogin =()=>{
        user = JSON.parse(localStorage.getItem("user"))
    }
  return (
    <>
   <div className=' border mt-5'>
        <div className=' text-center'>
            <h1>Login</h1>
            <div className=' mt-5 text-center'>
                <input type="text" placeholder='enter Username' /> <br /> <br />
                <input type="text" placeholder='enter password' /> <br /> <br />
                <button className='btn btn-primary'>Login</button>
                <p>no account, then <Link to={"/register"}>register</Link></p>
                
            </div>
    
        </div>
   </div>
    </>
  )
}

export default Login