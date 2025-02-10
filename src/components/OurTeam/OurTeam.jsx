import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./OurTeam.css";

const OurTeam = ({ members }) => {
  return (
    <section className="bg">
      <div className="container text-center py-5">
        <h3 className="text-muted fw-normal text-center">Expert People</h3>
        <h2 className="py-2">Team Members</h2>
        <p className="text-secondary w-75 mx-auto">
          "Teamwork is key to success. When each member plays their part and collaborates effectively, 
          the team can achieve great results. Working together makes the impossible possible."
        </p>

        
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
        >
          {members.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="p-3">
                <div className="position-relative">
                  <img src={member.img} alt={member.name} className="card-img-top rounded-circle p-3" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="text-muted pb-4">{member.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurTeam;
