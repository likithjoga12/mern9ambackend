import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import studentstyles from "./student.module.css"
import axios from "axios"



export const Signup= () => {
    
    const [name,setName]=useState(" ");
    const [email,setEmail]=useState(" ");
    const [password,setPassword]=useState(" ");
    const [address,setAddress]=useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.post(" http://mern9amfrontend.onrender.com/signup",{name,
        email,password,address})
        .then((res) => {console.log(res.data);
           
            alert('Student Added Successfully')
          
            setName("");
            setEmail("");
            setPassword("");
            setAddress( "" );
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
    <h5>Sign up</h5>
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
                        <div>
                            <NavLink to="/login">LOgin</NavLink>
                        </div>
                        <div  className={studentstyles.bxs}>
                        <form onSubmit={submitHandler}>
               
               
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <input type="submit" className="btn btn-primary" value="Register" />
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