// Import Swiper React components
import { Navigation, Autoplay } from "swiper";
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
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 4,
          },
        }}
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={`company-logo_${i}`}>{logo}</SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
