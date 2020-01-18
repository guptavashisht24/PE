import React from 'react';

const Intro = ({full = false}) => {
  const classNames = (full)? `sticky intro`:`intro`
  console.log(full);
  return (
    <div className={classNames}>
      <h1><u>Welcome to Pankaj Electricals</u></h1>
      <div className="flexContent">
        <div>
          <div className="text">
            We introduce this arena as <b>Pankaj Electricals</b>  in Noida, Uttar Pradesh,  <b>India</b>.
      </div>
          <div className="text">
            We are the <b>Channel Partner of ABB group India</b> and the distributor of     <b>Elastimold</b>,<b>Thomas & Betts</b> Products with  wide variety of electrical  products.
      </div>
          <div className="text">
            We would like to inform you that we are supplying <b>Elastimold Thomas & Betts</b> ,<b>Adapta Flx</b> and <b>Harnessflex</b>  products in India.
      </div>
          <div className="text">
            If you have any query or any requirement of the above  Please let us know in order to serve you .
            Looking forward to do business with you.
      </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;