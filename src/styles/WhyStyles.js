import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${mediaQueries(75)`
      height: auto;
  `};

  & .leftCard {
    -webkit-box-shadow: inset -5px 5px 22px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset -5px 5px 22px 0px rgba(0, 0, 0, 0.3);
    box-shadow: inset -5px 5px 22px 0px rgba(0, 0, 0, 0.3);
  }

  & .rightCard {
    -webkit-box-shadow: inset 5px 5px 22px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: inset 5px 5px 22px 0px rgba(0, 0, 0, 0.3);
    box-shadow: inset 5px 5px 22px 0px rgba(0, 0, 0, 0.3);
  }
`;

export const WhyCardWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 5rem;

  ${mediaQueries(75)`
    &:first-of-type {
      margin-top: 3rem;
    }
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
  `};

  ${mediaQueries(38)`
    &:first-of-type {
      margin-top: 3rem;
    }

    margin: 0;
  `};
`;

export const CardContainer = styled.div`
  width: 40vw;
  background: #fff;
  display: grid;
  grid-template-columns: 0.35fr 1fr;
  padding: 50px 30px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  font-family: "Poppins", sans-serif;
  background: rgba(0, 0, 0, 0.1);

  ${mediaQueries(75)`
    padding: 35px 20px;
    width: 70vw;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `};

  ${mediaQueries(38)`
    width: 90vw;
  `};
`;

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.darkBlue};

  & > svg.MuiSvgIcon-root {
    font-size: 4rem;
    fill: ${(props) => props.theme.aqua};
  }

  ${mediaQueries(75)`
    margin: 14px;
  `};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${mediaQueries(75)`
    text-align: center;
  `};
`;

export const Title = styled.h5`
  font-weight: 500;
  font-size: 22px;

  ${mediaQueries(38)`
    font-size: 20px;
    margin: 7px 0;
  `};
`;

export const Detail = styled.span`
  font-weight: 400;
  font-size: 16px;

  ${mediaQueries(38)`
    font-size: 14px;
  `};
`;
