import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const LandingContainer = styled.div`
  margin: 6rem 0;
  display: flex;
  justify-content: space-between;
  min-height: 70vh;

  ${mediaQueries(70)`
      flex-direction: column;
      margin: 2rem 0;
      text-align: center;
  `};

  ${mediaQueries(56)`
      height: 95vh;
      align-items: center;
      justify-content: center;
  `};

  & > div {
    width: 45%;

    ${mediaQueries(70)`
      width: 100%;
    `};
  }
`;

export const LandingContent = styled.div`
  ${mediaQueries(70)`
      display: flex;
      flex-direction: column;
      align-items: center;
  `};

  & > h2 {
    ${mediaQueries(70)`
      font-size: 48px;
      line-height: 56px;
    `};

    ${mediaQueries(56)`
      font-size: 30px;
      line-height: 35px;
    `};

    ${mediaQueries(22)`
      font-size: 24px;
      line-height: 30px;
    `};
  }

  & > p {
    margin: 4rem 0;
    font-size: 1.6rem;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;

    ${mediaQueries(70)`
      margin: 1rem 0;
    `};
  }
`;

export const LandingImage = styled.div`
  background: url(${(props) => props.img}) no-repeat;
  background-size: contain;
  background-position-x: right;

  ${mediaQueries(70)`
      margin-top: 2rem;
      height: 48vh;
      background-position-x: center;
  `};

  ${mediaQueries(56)`
      height: 50vh;
  `};
`;
