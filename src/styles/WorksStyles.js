import styled from "styled-components";

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
  }

  & p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
