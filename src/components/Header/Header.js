import React from 'react';
import logo from './assets/logo.png';
import {
  Link
} from "react-router-dom";

const Header = () => {

  const toggleMenu = () => {
     console.log("imma clicked")
    let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
mainNav.classList.toggle('active');
  }

  return (
    // <nav className = "navBar">
    //   <div className = "container">
    //     <div className = "logo">
    //       <img src = {logo} alt = "PANKAJ ELECTRICALS"></img>
    //     </div>
    //     <div className = "navList headerShow" id="lists"> 
    //       <ul>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About Us</Link></li>
    //         <li>Products</li>
    //       </ul>
    //     </div>
    //     <div className = "showButton hamburger" onClick = {toggleMenu}><span className="bar"></span><span className="bar mt4"></span><span className="bar mt4"></span></div>
    //   </div>
    // </nav>
    <nav class="navbar">
      <span class="navbar-toggle" id="js-navbar-toggle" onClick = {toggleMenu}>
        <span className="bar"></span>
        <span className="bar mt4"></span>
        <span className="bar mt4"></span>
      </span>
      <a href="#" class="logo"><img src = {logo} alt = "PANKAJ ELECTRICALS"></img></a>
      <ul class="main-nav" id="js-menu">
        <li>
          <a href="#" class="nav-links">Home</a>
        </li>
        <li>
          <a href="#" class="nav-links">Products</a>
        </li>
        <li>
          <a href="#" class="nav-links">About Us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Header;