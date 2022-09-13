import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 9rem;
  border-radius: 3.2rem 3.2rem 0px 0px;
  background: ${(props) => props.theme.darkBlue};
  color: ${(props) => props.theme.white};
  padding: 9.5rem 9.5rem 0;
`;

export const FooterContent = styled.div`
  margin-bottom: 6rem;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
`;

export const LogoContainer = styled.div``;

export const FooterText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export const SocialIcons = styled.div`
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
