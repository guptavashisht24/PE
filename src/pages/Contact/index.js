import React from 'react';
import MapContainer from './Map';

const Contact = () => {
  return (
    <div className="flex">
      <div className="addressContainer w40">
        <div className="query">
          <div className="name">Have a query?</div>
          <form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSeSdhnMmx1ishmHz6XLQ7EzBRjhodtXvg9sjfn5vWIpSb4Mow/formResponse" method="POST">
            <div><input type="text" name="entry.1986315347" placeholder="Name" required></input></div>
            <div><input type="text" name="entry.733494847" placeholder="Email"></input></div>
            <div><input type="number" name="entry.159683743" placeholder="Phone Number" required></input></div>
            <div><input type="text" name="entry.178802952" placeholder="Requirement" required></input></div>
            <div><button type="submit">Submit</button></div>
          </form>

        </div>
        <div className="address">
          <div className="name"><i><b>PANKAJ ELECTRICALS</b></i></div>
          <div>1105 A, Logix City Centre</div>
          <div>Sector 32, Noida</div>
          <div>PIN : 201301</div>
          <div>PHONE : 0120-4113840, +91-9315215827</div>
          <div>email : marketing@pankajelectricals.com</div>
        </div>
      </div>
      <div className="w40 oh">
        <MapContainer />
      </div>
    </div>
  )
}
export default Contact