import React from "react";
import "../../components/testimonial/testimonials.css";
import IMG from "../../assets/3.jpeg";
import AV1 from "../../assets/4.jpg";
import AV2 from "../../assets/5.jpeg";

// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


export const Testimonial = () => {
  const testimonials = [
    {
      id: 3,
      testimonial:
        "Wow good , your work is very simple and complet in the application",
      avatar: 3,
      Cname: "Sa'a Artur Civil Engineer",
    },
      
    {
      id: 1,
      testimonial:
        "Nice  .courage",
      avatar: 4,
      Cname: "Lambe Yubuin CEO of Quick Step Travels",
    },
    {
      id: 2,
      testimonial:
        "A good graphic designer. very attractive i love it.",
      avatar: 5,
      Cname: "Cedrick Kiengo CEO of CK digital academy",
    },
    
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
