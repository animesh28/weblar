import styled from "styled-components";

export const LandingContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 45%;
  }
`;

export const LandingContent = styled.div`
  & > h1 {
    font-family: "Lato", sans-serif;
    font-weight: 500;
    font-style: normal;
    font-size: 72px;
    line-height: 86px;
    color: ${(props) => props.theme.darkBlue};
  }

  & > p {
    margin: 4rem 0;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
  }
`;

export const LandingImage = styled.div``;
