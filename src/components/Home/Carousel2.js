import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css"

import "./Carousel2.css";

// import Swiper core and required modules
import SwiperCore, {
  Scrollbar, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Scrollbar, Navigation]);


const Carousel2 = () => {   

	let slide1, slide2, slideNumber;
	if (window.innerWidth > 768) {
		slide1 = 5.5;
		slide2 = 6;
		slideNumber = 3;
	} else if (window.innerWidth <= 768 && window.innerWidth >= 450 ) {
		slide1 = slide2 = slideNumber = 2;
	} else if (window.innerWidth < 450) {
		slide1 = slide2 = slideNumber = 1;
	}
  
  return (
  	<div className="carousel2">
  		<div className="wrapper">
	  		<div className="carousel-header">
	  			<h2>Discover Amazon</h2>
	  			<a href="/">Click to learn more</a>
	  		</div>
		    <Swiper 
		    	scrollbar={{ "hide": true }} 
		    	navigation={true}
		    	slidesPerView={slide1} 
		    	className="mySwiper"
		    >
				  <SwiperSlide><img src="/images/carousel1.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carousel2.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carousel3.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carousel4.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carousel5.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carousel6.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</div>
  		<div className="wrapper">
	  		<div className="carousel-header">
	  			<h2>Top Beauty & Personal Care products</h2>
	  			<a href="/">Shop Now</a>
	  		</div>
		    <Swiper 
		    	scrollbar={{ "hide": true }} 
		    	navigation={true}
		    	slidesPerView={slide2} 
		    	slidesPerGroup={slideNumber} 
		    	className="mySwiper"
		    >
				  <SwiperSlide><img src="/images/carouselc1.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc2.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc3.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc4.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc5.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc6.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc7.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc8.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc9.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc10.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc11.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc12.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouselc13.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</div>
  		<div className="wrapper">
	  		<div className="carousel-header">
	  			<h2>Amazon Top Sellers</h2>
	  			<a href="/">Shop Now</a>
	  		</div>
		    <Swiper 
		    	scrollbar={{ "hide": true }} 
		    	navigation={true}
		    	slidesPerView={slide2} 
		    	slidesPerGroup={slideNumber} 
		    	className="mySwiper"
		    >
				  <SwiperSlide><img src="/images/carouseld1.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld2.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld3.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld4.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld5.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld6.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld7.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld8.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld9.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld10.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld11.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld12.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld13.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld14.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld15.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld16.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld17.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld18.jpg" alt="" /></SwiperSlide>
				  <SwiperSlide><img src="/images/carouseld19.jpg" alt="" /></SwiperSlide>
				</Swiper>
			</div>
		</div>
  )
}

export default Carousel2;
