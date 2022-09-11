import styled from "styled-components";

const Button = styled.div`
  background: ${(props) => props.theme.aqua};
  border-radius: ${(props) => props.bRad};
  width: ${(props) => (props.navButton ? "20rem" : "21rem")};
  height: ${(props) => (props.navButton ? "4.4rem" : "5.7rem")};
  border-radius: ${(props) => (props.navButton ? "4.4rem" : "10rem")};
  display: grid;
  place-items: center;
  cursor: pointer;
`;

const CTAButton = ({ navButton }) => {
  return <Button navButton={navButton}>Home</Button>;
};

export default CTAButton;
