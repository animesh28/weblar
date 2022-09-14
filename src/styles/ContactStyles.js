import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const ContactContainer = styled.div`
  padding: 9.5rem 0;

  ${mediaQueries(56)`
      padding: 6rem 0 0 0;
    `};

  & h2 {
    ${mediaQueries(56)`
      text-align: center;
    `};
  }
`;

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 0.55fr 0.3fr;
  gap: 6rem;
  margin-top: 4rem;

  ${mediaQueries(70)`
      grid-template-columns: 0.65fr 0.3fr;
  `};

  ${mediaQueries(56)`
      display: flex;
      flex-direction: column;
  `};
`;

export const Form = styled.form`
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding: 4.4rem;
  border-radius: 2.4rem;
`;

export const FormInputContainer = styled.div`
  display: flex;
  margin: 1.5rem 0;

  ${mediaQueries(56)`
      flex-direction: column;
  `};
`;

export const FormInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &:nth-of-type(2) {
    margin-left: 2.5rem;

    ${mediaQueries(56)`
      margin-left: 0;
      margin-top: 2rem;
  `};
  }

  & label {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 1.6rem;
  }

  & input,
  textarea {
    height: 4rem;
    border-radius: 8px;
    background: ${(props) => props.theme.logoColor};
    color: ${(props) => props.theme.white};
    caret-color: ${(props) => props.theme.white};
    padding: 0 1rem;
    font-family: "Poppins", sans-serif;
  }

  & textarea {
    resize: none;
    padding: 1rem;
    min-height: 12rem;
  }
`;

export const FormHeadContainer = styled.div`
  margin-bottom: 2.5rem;

  & h3 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  & p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 1.6rem;
    color: ${(props) => props.theme.offWhite};
  }
`;

export const FormError = styled.div`
  color: red;
  margin: 0.5rem 0;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
`;

export const CTAContainer = styled.div`
  ${mediaQueries(56)`
      text-align: center;
  `};
`;

export const CTAWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.2rem 0;

  &:not(:last-child) {
    border-bottom: 2px solid rgba(51, 51, 51, 0.5);
  }

  & h3 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  & a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  & div.social-icons {
    margin-top: 1.5rem;
  }
`;
