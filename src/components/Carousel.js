
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

import "./Carousel.css";
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation]);

const Carousel = () => { 
  
  return (
    <div className="carousel">
	    <Swiper navigation={true} loop={true} className="mySwiper">
		 		<SwiperSlide><img src="/images/amazon-backgroundImage1.jpg" alt=""/></SwiperSlide>
		 		<SwiperSlide><img src="/images/amazon-backgroundImage2.jpg" alt=""/></SwiperSlide>
		 		<SwiperSlide><img src="/images/amazon-backgroundImage3.jpg" alt=""/></SwiperSlide>
		 		<SwiperSlide><img src="/images/amazon-backgroundImage4.jpg" alt=""/></SwiperSlide>
		 		<SwiperSlide><img src="/images/amazon-backgroundImage5.jpg" alt=""/></SwiperSlide>
			</Swiper>
    </div>
  )
}

export default Carousel;
