import React from 'react';
import logo from './assets/logo.png';
import {
  Link
} from "react-router-dom";

const Header = () => {
  
  const toggleMenu = () => {
    console.log("Imma clicked")
    var element = document.getElementById("lists");
    element.classList.toggle("headerShow");
  }

  return (
    <nav className = "navBar">
      <div className = "container">
        <div className = "logo">
          <img src = {logo} alt = "PANKAJ ELECTRICALS"></img>
        </div>
        <div className = "navList headerShow" id="lists"> 
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li>Products</li>
          </ul>
        </div>
        <div className = "showButton hamburger" onClick = {toggleMenu}><span className="bar"></span><span className="bar mt4"></span><span className="bar mt4"></span></div>
      </div>
    </nav>
  )
}

export default Header;