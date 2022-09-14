import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const WorkContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WorkCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin: 8rem 0 6rem 0;

  ${mediaQueries(65)`
      display: flex;
      flex-direction: column;
      margin: 2rem 0 4rem 0;
  `};
`;

export const WorkCardWrapper = styled.div`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 0px 0px 8px 8px;
`;

export const WorkCardImg = styled.div`
  background: url(${(props) => props.img}) no-repeat;
  background-size: contain;
  background-position: center;
  height: 35rem;
`;

export const WorkCardContent = styled.div`
  overflow: hidden;
  padding: 2.8rem 2.4rem;
  display: grid;
  grid-template-columns: 0.6fr 0.5fr;
  justify-items: end;
  align-items: center;
  text-align: left;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.15);

  ${mediaQueries(31)`
      grid-template-columns: 0.9fr 0.2fr;
      padding: 2rem 1.4rem;
  `};

  & svg {
    cursor: pointer;
  }
`;

export const WorkCardText = styled.div`
  & h3 {
    font-family: "Poppins";
    font-weight: 500;
    font-size: 2.4rem;
    margin-bottom: 1rem;

    ${mediaQueries(31)`
      font-size: 2rem;
  `};
  }

  & p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1.6rem;
    text-align: left;

    ${mediaQueries(31)`
      font-size: 1.4rem;
  `};
  }
`;
