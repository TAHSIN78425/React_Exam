import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Slider1 from '../assets/SLIDER 1.png'
import Slider2 from '../assets/SLIDER 2.jpg'
import Slider3 from '../assets/SLIDER 3.png'
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Slider() {
    
  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
    <SwiperSlide><img className='mx-auto mt-4 w-[80%] h-[850px] ' src={Slider1}/></SwiperSlide>
      <SwiperSlide><img className='mx-auto mt-4   w-[80%] h-[40%]' src={Slider2}/></SwiperSlide>
      <SwiperSlide><img className='mx-auto mt-4 w-[80%] h-[40%]' src={Slider3}/></SwiperSlide>

      
    </Swiper>
    </>
  )
}
