import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import studentstyles from "./student.module.css"
import axios from "axios"

const Editstudent = () => {
    const [name,setName]=useState(" ");
    const [email, setEmail] = useState("");
    const [address,setAddress]=useState("");
    const {id}=useParams();
    useEffect(()=>{
        axios.get(`http://mern9amfrontend.onrender.com/student/${id}`)
        .then(response=>{
            setName(
                response.data.name
             )
             setEmail(
                 response.data.email)
                 setAddress(
                     response.data.address)
                 })
                 .catch(err=>console.log(err))
        
    },[])
    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://mern9amfrontend.onrender.com/student/${id}`,{name, email, address})
        .then ((res)=>{
            alert("data updated successfully");
        })
        .catch((err)=>alert(err))
    }
  return (
    <main>
    <section className={studentstyles.bg_image}>
    <div className="container">
    <div className="row">
        <div className="col-md-12 ">
<div className="text-center">
<h5>Edit Student </h5>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb justify-content-center">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">Editdata</li>
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
                        <form onSubmit={submitHandler} >
                            <div className="mb-4"><input type="text" name="name" className="form-control" placeholder="enter " value={name} onChange={(e)=>setName(e.target.value)}/></div>
                            <div className="mb-4"><input type="email" className="form-control"name="email" placeholder="Email 9id"value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                            <div className="mb-4"><input type="text" className="form-control" name="address" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)}/></div>
                            <div className="mb-4"><input type="submit" className="btn btn-primary" value="Edit student"/></div>
                           
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

export default Editstudent