import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';

const Hero = () => {
  return (
    <section className='mt-3 relative overflow-hidden text-white'>
        <div className='container ma-w-screen-x1 mx-auto'>
        <Swiper className="mySwiper">
        <SwiperSlide><img src='/images/banner/banner1.png'/></SwiperSlide>
        <SwiperSlide><img src='/images/banner/banner2.png'/></SwiperSlide>
        <SwiperSlide><img src='/images/banner/banner3.png'/></SwiperSlide>
       
      </Swiper>


        </div>
    </section>
  )
}

export default Hero