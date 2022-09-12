import React from "react";
// Import Swiper React components
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Logo1, Logo2, Logo3, Logo4 } from "./AllSvg";
import {
  SliderContainer,
  SliderHeadContainer,
  Line,
} from "../styles/ServicesStyles";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
  const logos = [
    <Logo1 />,
    <Logo2 />,
    <Logo3 />,
    <Logo4 />,
    <Logo1 />,
    <Logo2 />,
  ];

  return (
    <SliderContainer>
      <SliderHeadContainer>
        <Line />
        <h2>Trusted Companies</h2>
        <Line />
      </SliderHeadContainer>
      <Swiper modules={[Navigation]} slidesPerView={4} navigation>
        {logos.map((logo, i) => (
          <SwiperSlide key={`company-logo_${i}`}>{logo}</SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
