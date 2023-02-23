import React from "react";
import "./testimonies.css";
import { testimonialData } from "../data";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonies = () => {
  return (
    <section id="testimonies">
      <h5 className="h5">Review from clients</h5>
      <h2 className="h2">Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonialData.map((testimonialDataItem) => {
          return (
            <SwiperSlide key={testimonialDataItem.id} className="testimonial">
              <div>
                <img
                  data-aos={testimonialDataItem.aosData}
                  className="client__avatar"
                  src={testimonialDataItem.img}
                  alt=""
                />
              </div>
              <h5 className="client__name">{testimonialDataItem.name}</h5>
              <small className="client_review">
                {" "}
                {testimonialDataItem.review}
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonies;
