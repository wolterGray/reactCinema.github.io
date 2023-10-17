import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swipe.scss";

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper/modules";

export default function SwipeSlide({slideData}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect='fade'
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {slideData &&
          slideData.map((slide) => (
            <SwiperSlide key={slide}>
              <img src={`/homeSlide/${slide}`} alt="Movie Image" />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
