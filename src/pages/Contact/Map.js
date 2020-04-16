import React, { Component } from 'react';
class MapContainer extends Component{
  constructor(props){
    super(props)
  } 
  getIframe = () => {
    return {
      __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5683282545765!2d77.3460465150497!3d28.582722493084418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5fa335cb2bf%3A0xfec23c626b4fa7d8!2sPankaj%20Electricals!5e0!3m2!1sen!2sin!4v1586690640790!5m2!1sen!2sin" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
    }
  }
  render(){
    return(
      <div>
        <div dangerouslySetInnerHTML={this.getIframe()} /> 
      </div>
    )
  }
}

export default MapContainer;