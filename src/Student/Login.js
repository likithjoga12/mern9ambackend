import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import studentstyles from "./student.module.css"
import axios from "axios"



export const Login= () => {

    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
    const  navigate= useNavigate("")
   
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(" https://mern9amfrontend.onrender.com/login",{email,password})
        .then((res) => {
           navigate("/")
        })
        .catch((err) => console.error(err))
    
        
    }
   
  return (
    <main>
        <section className={studentstyles.bg_image}>
        <div className="container">
        <div className="row">
            <div className="col-md-12 ">
<div className="text-center">
    <h5>Login</h5>
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb justify-content-center">
        <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
        <li className="breadcrumb-item active" aria-current="page">Studentdata</li>
      </ol>
    </nav>
    </div>
    </div>
    </div>
        </div>
        </section>
        <section>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                        <div  className={studentstyles.bxs}>
                        <form onSubmit={submitHandler}>
                
                <div className='mb-4'>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               
                <div className="mb-4">
                    <input type="submit" className="btn btn-primary" value="Register" />
                    <NavLink to="/forgot">ForgotPassword</NavLink>
                </div>
                
            </form>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>
    </main>
    
  )
}