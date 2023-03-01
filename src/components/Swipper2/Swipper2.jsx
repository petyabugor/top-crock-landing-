import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AirJordan2 from '../../assets/img/AIR_JORDAN_XXXI_2.jpeg';
import AirJordan3 from '../../assets/img/AIR_JORDAN_XXXI_3.jpeg';
import AirJordan4 from '../../assets/img/AIR_JORDAN_XXXI_4.jpeg';
import Foto1 from '../../assets/img/swiper/1.jpeg';
import Foto2 from '../../assets/img/swiper/2.jpeg';
import Foto3 from '../../assets/img/swiper/3.jpeg';
import Foto4 from '../../assets/img/swiper/4.jpeg';
import Foto5 from '../../assets/img/swiper/5.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import Swiper core and required modules
import SwiperCore, { Zoom, Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, Navigation, Pagination]);

export default function App() {
   return (
      <div
         data-aos="fade-up"
         data-aos-duration="3000"
         className="swipper-wrapper"
      >
         <Swiper
            style={{
               '--swiper-navigation-color': '#fff',
               '--swiper-pagination-color': '#fff',
            }}
            zoom={true}
            navigation={true}
            pagination={{
               clickable: true,
            }}
            className="mySwiper"
         >
            <SwiperSlide>
               <div className="swiper-zoom-container">
                  <img src={Foto1} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="swiper-zoom-container">
                  <img src={Foto2} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="swiper-zoom-container">
                  <img src={Foto3} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="swiper-zoom-container">
                  <img src={Foto4} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="swiper-zoom-container">
                  <img src={Foto2} />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
