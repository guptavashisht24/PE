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

  const removeHovers = () => {
    document.getElementById("home").classList.remove('showHighLight')
    document.getElementById("about").classList.remove('showHighLight')
    document.getElementById("products").classList.remove('showHighLight')
  }

  const activeHandler = (id) => {
    removeHovers();
    document.getElementById(id).classList.add('showHighLight')
  }

  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle" onClick = {toggleMenu}>
        <span className="bar"></span>
        <span className="bar mt4"></span>
        <span className="bar mt4"></span>
      </span>
      <Link to="/"><img src = {logo} alt = "PANKAJ ELECTRICALS"></img></Link>
      <ul className="main-nav" id="js-menu">
        <li id="home"><Link to="/" onClick = {(id)=>{activeHandler("home")}}>Home</Link></li>
        <li id="about"><Link to="/about" onClick = {(id)=>{activeHandler("about")}}>About Us</Link></li>
        <li id="products"><Link to="/about" onClick = {(id)=>{activeHandler("products")}}>Products</Link></li>
      </ul>
    </nav>
  )
}

export default Header;