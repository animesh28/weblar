import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

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

  ${mediaQueries(65)`
      padding: 3rem 2rem;
  `};
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
    font-size: 2.8rem;
    margin: 0 3rem;
    position: relative;

    ${mediaQueries(65)`
      font-size: 2rem;
  `};

    ${mediaQueries(43)`
      margin: 0;
  `};
  }
`;

export const Line = styled.span`
  width: 20rem;
  height: 4px;
  background-color: ${(props) => props.theme.offWhite};

  ${mediaQueries(65)`
      width: 10rem;
  `};

  ${mediaQueries(43)`
      width: 0;
  `};
`;

export const SliderContainer = styled.div`
  padding: 0 5rem;

  ${mediaQueries(43)`
      padding: 0 2rem;
  `};

  ${mediaQueries(24)`
      padding: 0 1rem;
  `};

  & .swiper-wrapper .swiper-slide {
    display: flex;
    justify-content: center;
  }

  & .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.white};

    ${mediaQueries(43)`
      display: none;
  `};
  }

  & .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: large;
  }
`;

export const ServiceText = styled.div`
  margin-top: 5rem;
  padding: 5rem;
  border-top: 2px solid ${(props) => props.theme.offWhite};

  ${mediaQueries(65)`
      padding: 3.5rem;
      text-align: center;
      border-bottom: 2px solid #D9D9D9;
  `};

  ${mediaQueries(43)`
      padding: 2rem 0;
  `};

  & h2 {
    ${mediaQueries(87)`
      font-size: 6rem;
      line-height: 6.5rem;
  `};

    ${mediaQueries(75)`
      font-size: 5rem;
      line-height: 6rem;
  `};

    ${mediaQueries(65)`
      margin-bottom: 2rem;
  `};

    ${mediaQueries(45)`
      font-size: 3rem;
      line-height: 4rem;
  `};
  }
`;

export const ServiceCardContainer = styled.div`
  min-height: 50vh;
  display: grid;
  grid-template-columns: 0.9fr 0.1fr 0.9fr 0.1fr 0.9fr;
  padding: 0 5rem;

  ${mediaQueries(75)`
      padding: 0;
  `};

  ${mediaQueries(65)`
      display: flex;
      flex-direction: column;
  `};
`;

export const Card = styled.div`
  padding: 2rem 4rem;
  position: relative;

  ${mediaQueries(65)`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
  `};

  ${mediaQueries(43)`
      padding: 2rem;
  `};
`;

export const CardDetails = styled.div`
  margin-top: 9rem;

  ${mediaQueries(65)`
       margin-top: 5rem;
  `};

  h3 {
    font-family: "Maglony", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 2.8rem;
    margin-bottom: 1.6rem;
  }

  p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: ${(props) => props.theme.offWhite};
  }
`;
