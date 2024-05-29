import React from 'react'
import footerstyles from "./footer.module.css"
import { NavLink } from 'react-router-dom';

 const Footer = () => {
  return (
    <footer  className={footerstyles.footer}>
      <div className="container ">
        <div className="row">
        <div className="col-md-6">
          <p>
            &copy; 2019 -
          </p>
        </div>
         <div className="col-md-6 text-end">
          <p>Designed by me {" "}<NavLink>https://enuttech.com</NavLink></p>
         </div>
        </div>
      </div>
      </footer>
  )
}
export default Footer;
