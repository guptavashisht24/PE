import React from 'react';
import first from "./assets/1.png";
import second from "./assets/2.jpg";
import third from "./assets/3.jpg";
import fourth from "./assets/4.jpg";
import fifth from "./assets/5.png";
import sixth from "./assets/6.jpg";
import seventh from "./assets/7.jpeg";
import eighth from "./assets/8.png";
import ninth from "./assets/9.png";
import tenth from "./assets/10.png";


const BrandPartners = () => {
  return (
    <div className="brandPartners">
      <div className="titleBar">
        AUTHORIZED BRAND PARTNERS
      </div>
      <div className = "partners">
        <div className = "images">
         <a href=""><img  src={first} className = "img" ></img></a>
        </div>
        <div className = "images">
        <img  src={second} className = "img" ></img>
        </div>
        <div className = "images"> 
        <img  src={third} className = "img" ></img> 
        </div>
        <div className = "images">
        <img  src={fourth} className = "img" ></img>
        </div>
        <div className = "images">
        <img  src={fifth} className = "img" ></img>
        </div>
        <div className = "images">
        <img  src={sixth} className = "img" ></img> 
        </div>
        <div className = "images">
        <img  src={seventh} className = "img" ></img>
        </div>
        <div className = "images">
        <img  src={eighth} className = "img" ></img>
        </div>
        <div className = "images">
        <img  src={ninth} className = "img" ></img>
        </div>
        <div className = "images">
        <img  src={tenth} className = "img" ></img>
        </div>
      </div>
    </div>
  )
}

export default BrandPartners;