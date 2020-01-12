import React from 'react';
import logo from './assets/logo.png';
import {
  Link
} from "react-router-dom";

const Header = () => {

  const toggleMenu = () => {
    let mainNav = document.getElementById('js-menu');
    mainNav.classList.toggle('active');
  }

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick = {toggleMenu}>
        <span className="bar"></span>
        <span className="bar mt4"></span>
        <span className="bar mt4"></span>
      </span>
      <a href="#" className="logo"><img src = {logo} alt = "PANKAJ ELECTRICALS"></img></a>
      <ul className="main-nav" id="js-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/about">Products</Link></li>
      </ul>
    </nav>
  )
}

export default Header;