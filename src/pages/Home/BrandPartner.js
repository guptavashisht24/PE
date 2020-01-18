import React from 'react';
import first from "./assets/1.jpg";
import second from "./assets/2.jpg";
import third from "./assets/3.jpg";
import fourth from "./assets/4.jpg";
import fifth from "./assets/5.jpg";
import sixth from "./assets/6.jpg";
import seventh from "./assets/7.jpg";
import eighth from "./assets/8.jpg";
import ninth from "./assets/9.jpg";
import tenth from "./assets/10.jpg";


const BrandPartners = () => {
  return (
    <div className="brandPartners">
      <div className="titleBar">
        AUTHORIZED BRAND PARTNERS
      </div>
      <div className = "partners">
        <div className = "images">
         <img  src={first}></img>
        </div>
        <div className = "images">
        <img  src={second}></img>
        </div>
        <div className = "images"> 
        <img  src={third}></img> 
        </div>
        <div className = "images">
        <img  src={fourth}></img>
        </div>
        <div className = "images">
        <img  src={fifth}></img>
        </div>
        <div className = "images">
        <img  src={sixth}></img> 
        </div>
        <div className = "images">
        <img  src={seventh}></img>
        </div>
        <div className = "images">
        <img  src={eighth}></img>
        </div>
        <div className = "images">
        <img  src={ninth}></img>
        </div>
        <div className = "images">
        <img  src={tenth}></img>
        </div>
      </div>
    </div>
  )
}

export default BrandPartners;