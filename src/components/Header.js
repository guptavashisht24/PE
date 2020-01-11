import React from 'react';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <nav className = "navBar">
      <div className = "container">
        <div className = "logo">
          <img src = {logo} alt = "PANKAJ ELECTRICALS"></img>
        </div>
        <div className = "navList"> 
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;