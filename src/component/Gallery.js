import React from 'react'
import "./testimonies.css";
import { testimonialData2 } from "../data";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Gallery = () => {
 return (
   <section id="gallery">
     <h5 className="h5">Previous Projects</h5>
     <h2 className="h2">Gallery</h2>
     <Swiper
       className="container testimonials__container con2"
       // install Swiper modules
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
       {testimonialData2.map((testimonialDataItem) => {
         return (
           <SwiperSlide key={testimonialDataItem.id} className="testimonial">
             <div>
               <img
                 className="client__avatar avav2"
                
                 src={testimonialDataItem.img}
                 alt=""
               />
             </div>
             <h5 className="client__name">{testimonialDataItem.name}</h5>
           </SwiperSlide>
         );
       })}
     </Swiper>
   </section>
 );
}

export default Gallery