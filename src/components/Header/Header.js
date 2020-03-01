import React, { useEffect } from 'react';
import logo from '../assets/logo.png';
import {
  Link
} from "react-router-dom";

const Header = () => {
  useEffect(() => {
    if (window.location.href.indexOf('/about') > -1) {
      document.getElementById('about').classList.add('showHighLight')
    } else {
      document.getElementById('home').classList.add('showHighLight')
    }
  }, [])
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
      <span className="navbar-toggle" id="js-navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar mt4"></span>
        <span className="bar mt4"></span>
      </span>
      <Link to="/"><img src={logo} alt="PANKAJ ELECTRICALS"></img></Link>
      <ul className="main-nav" id="js-menu">
        <li id="home">
          <Link to="/" onClick={() => { activeHandler("home") }}>
            Home
        </Link>
        </li>
        <li id="about">
          <Link to="/about" onClick={() => { activeHandler("about") }}>
            About Us
        </Link>
        </li>
        <li id="products">
          <div className = "dropdown" onClick={() => { activeHandler("products") }}>
            Products
          </div>
            <div className="dropdown-content w100">
              <div className="white"><a href="https://new.abb.com/low-voltage/products/switchgear">ABB SWITCHGEAR</a></div>
              <div className="white"><a href="http://tnb.abb.com/pub/en/brands/tandb">THOMAS & BETTS	</a></div>
              <div className="white"><a href="http://tnb.abb.com/pub/en/brands/elastimold">ELASTIMOLD</a></div>
              <div className="white"><a href="https://new.abb.com/low-voltage/products/conduit-fittings/adaptaflex">ADAPTAFLEX CONDUIT</a></div>
              <div className="white"><a href="https://new.abb.com/low-voltage/products/conduit-fittings/harnessflex">HARNESSFLEX</a></div>
              <div className="white"><a href="http://tnb.abb.com/pub/en/brands/ty-rap">TY-RAP</a></div>
          </div>
        </li>
        <li id="blog">
          <Link to="/about" onClick={() => { activeHandler("about") }}>
            Blog
        </Link>
        </li>
        <li id="contact">
          <Link to="/about" onClick={() => { activeHandler("about") }}>
            Contact Us
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header;