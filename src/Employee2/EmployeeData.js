import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import studentstyles from "./Employee.module.css"
import axios from 'axios'


const EmployeeData = () => {
  const [Data,setData]=useState([]);
  useEffect(()=>{
    axios.get("http://mern9amfrontend.onrender.com/employee")
    .then((res)=>{
      setData(res.data);
      })
      .catch(( err)=>{console.log(err)})
      },[])
      const SearchHandler=(e)=>{
        let  key= e.target.value;
        if(key){
          axios.get(`http://mern9amfrontend.onrender.com/search2/${key}`)
    .then((res)=>{
      setData(res.data);
      })
      .catch(( err)=>{console.log(err)})
      }
    }
        
         
    

  return (
    <main>
    <section className={studentstyles.bg_image}>
    <div className="container">
    <div className="row">
        <div className="col-md-12 ">
<div className="text-center">
<h5>Employee data</h5>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb justify-content-center">
    <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
    <li className="breadcrumb-item active" aria-current="page">EmployeeData</li>
  </ol>
</nav>
</div>
</div>
</div>
    </div>
    </section>
    <section>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-12">
                  <input type="text"  placeholder="Search by name or roll no." className="form-control"onChange={SearchHandler}/>
                  <NavLink to="/addstudent">
                    <button className="btn btn-primary mb-3 float-end">+</button></NavLink>
                    <div className="clearfix"></div>
                    <div className=" table-responsive">
                <table className="table table-bordered">
  <thead>
    <tr>
     
      <th >Name</th>
      <th>Email</th>
      <th >Address</th>
      <th>
        Salary
      </th>
      <th>
        Phone
      </th>
    </tr>
  </thead>
  <tbody>
  {
    Data.map((stu)=>{
    return(
      <tr>
        <td>
          {stu.name}
        </td>
        <td>
          {stu.email}
        </td>
        <td>
          {
            stu.address
          }
        </td>
        <td>
            {stu.salary}
        </td>
        <td>
            {stu.phone}
        </td>
      </tr>
    )
    })
  }
  </tbody>
</table>
</div>
                </div>
            </div>
        </div>
    </section>
</main>
  )
}

export default EmployeeData