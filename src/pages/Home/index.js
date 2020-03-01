import React from 'react';
import Slider from "react-slick";
import BrandPartners from './BrandPartner';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import first from '../../components/assets/1.jpg';
import second from '../../components/assets/2.jpg';
import third from '../../components/assets/3.jpg';
import fourth from '../../components/assets/4.jpg';
import fifth from '../../components/assets/5.jpg';
import Intro from '../../components/Intro';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }
  return (
    <>
    <Slider {...settings} className="mb10">
          <div>
          <img src={second} className="sliderImages"></img>
          </div>
          <div>
          <img src={third} className="sliderImages"></img>
          </div>
          <div>
          <img src={fourth} className="sliderImages"></img>
          </div>
          <div>
          <img src={fifth} className="sliderImages"></img>
          </div>
    </Slider>
    <BrandPartners />
    <Intro />
        </>
  )
}

export default Home