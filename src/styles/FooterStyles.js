import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const FooterContainer = styled.div`
  margin-top: 9rem;
  border-radius: 3.2rem 3.2rem 0px 0px;
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding: 9.5rem 9.5rem 0;

  ${mediaQueries(48)`
      padding: 3rem 3rem 0;
      margin-top: 5rem;
  `};

  & .footer-LeftHeadingRightContent {
    ${mediaQueries(48)`
      margin-bottom: 5rem;
    `};

    ${mediaQueries(48)`
      align-items: center;

      & > h2 {
        font-size: 4rem;
      }

      & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `};

    ${mediaQueries(30)`
      & > h2 {
        font-size: 3rem;
        line-height: 5rem;
        text-align: center;
      }
      `};
  }
`;

export const FooterContent = styled.div`
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;

  ${mediaQueries(72)`
      display: flex;
      flex-direction: column;
      align-items: center;
  `};
`;

export const LogoContainer = styled.div`
  ${mediaQueries(72)`
    display: flex;
    flex-direction: column;
    align-items: center;
  `};
`;

export const FooterText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  ${mediaQueries(72)`
      width: 100%;
      margin-top: 3rem;
  `};

  ${mediaQueries(40)`
      flex-direction: column;
      align-items: center;
      text-align: center;
  `};
`;

export const SocialIconsWrap = styled.div`
  margin-top: 2.6rem;

  & > * {
    cursor: pointer;
  }

  & *:not(:first-child) {
    margin-left: 0.8rem;
  }

  & *:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export const CopyRight = styled.div`
  padding: 2.5rem;
  text-align: center;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1.6rem;
  border-top: 2px solid ${(props) => props.theme.offWhite};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 16rem;

  &:not(:first-child) {
    ${mediaQueries(40)`
      margin-top: 2rem;
  `};
  }

  & h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    margin-bottom: 2.4rem;
  }

  & a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.white};
  }
`;
