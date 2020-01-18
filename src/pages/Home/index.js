import React from 'react';
import Slider from "react-slick";
import BrandPartners from './BrandPartner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tnb from '../../components/assets/TNB-ABB.jpg';
import im4 from '../../components/assets/image004.jpg';
import elm from '../../components/assets/ELASTIMOLD.png';
import abb from '../../components/assets/abb-banner.jpg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <>
    <Slider {...settings} className="mb10">
          <div>
            <img src={tnb} className="sliderImages"></img>
          </div>
          <div>
          <img src={im4} className="sliderImages"></img>
          </div>
          <div>
          <img src={elm} className="sliderImages"></img>
          </div>
          <div>
          <img src={abb} className="sliderImages"></img>
          </div>
    </Slider>
    <BrandPartners />
        </>
  )
}

export default Home