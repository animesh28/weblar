import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-flow: column;
  height: 90%;
  width: 100%;
  border-radius: 3.2rem;
  padding: 5rem 4rem;
  background-color: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
`;

export const SliderHeadContainer = styled.div`
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    width: fit-content;
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    margin: 0 3rem;
    position: relative;
  }
`;

export const Line = styled.span`
  width: 20rem;
  height: 4px;
  background-color: ${(props) => props.theme.lineColor};
`;

export const SliderContainer = styled.div`
  padding: 0 5rem;

  & .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
  }

  & .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.white};
  }

  & .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: large;
  }
`;

export const ServiceText = styled.div`
  margin-top: 5rem;
  padding: 5rem;
  border-top: 2px solid ${(props) => props.theme.white};
`;

export const ServiceCardContainer = styled.div`
  min-height: 50vh;
  display: grid;
  grid-template-columns: 0.9fr 0.1fr 0.9fr 0.1fr 0.9fr;
  padding: 0 5rem;
`;

export const Card = styled.div`
  padding: 2rem 4rem;
  position: relative;
`;

export const CardDetails = styled.div`
  margin-top: 9rem;

  h3 {
    font-family: "Maglony", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 28px;
    margin-bottom: 1.6rem;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: ${(props) => props.theme.lineColor};
  }
`;
