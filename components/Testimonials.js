"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  { img: "4.jpg", name: "Emily Brown" },
  { img: "1.jpg", name: "Nolan White" },
  { img: "5.jpg", name: "Olivia Martin" },
];

export default function Testimonials() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="mySwiper"
    >
      {testimonials.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="item" style={{ textAlign: 'left' }}>
            
            {/* ZVJEZDICE - sada koriste tvoju star-rating klasu */}
            <div className="stars" style={{ marginBottom: '15px' }}>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
              <i className="star-rating"></i>
            </div>

            <p style={{ 
              fontSize: '18px', 
              color: '#fff', 
              fontStyle: 'italic', 
              lineHeight: '1.8',
              marginBottom: '25px' 
            }}>
              "Restaurant dapibus asue metus the nec feusiate eraten
              miss hendreri net ve ante the lemon sanleo nectan feugiat."
            </p>

            <div className="info" style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
              <div className="author-img" style={{ width: '60px', height: '60px', marginRight: '15px' }}>
                <img 
                  src={`/img/team/${item.img}`} 
                  alt={item.name} 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    borderRadius: '50%', 
                    objectFit: 'cover',
                    border: '1px solid rgba(255,255,255,0.2)' 
                  }}
                />
              </div>
              <div className="cont">
                <h6 style={{ margin: 0, color: '#fff', fontWeight: '600', fontSize: '18px' }}>
                  {item.name}
                </h6>
                <span style={{ color: '#c19d68', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Customer review
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}