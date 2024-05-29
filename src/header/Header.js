import React from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './header.module.css'

import { NavLink } from 'react-router-dom';
import styles from "./header.module.css"
 const Header = () => {
  return (
    <header>
   
    <nav className="navbar navbar-expand-lg ">
  <div className="container">

    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addstudent">AddStudent</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/Studentope">DeleteStudent/EditStudent</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/employeedata">Employee data</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/addemployee">AddSemployee</NavLink>
          
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/Employeop">DeleteEmployee/EditEmployee</NavLink>
        </li>
        
       
      </ul>
     
    </div>
  </div>
  
</nav>
    </header>
  );
};

export default Header;