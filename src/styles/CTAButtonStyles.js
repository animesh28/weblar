import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

export const Button = styled.div`
  background: ${(props) => props.theme.aqua};
  border-radius: ${(props) => props.bRad};
  width: ${(props) => (props.navButton ? "20rem" : "21rem")};
  height: ${(props) => (props.navButton ? "4.4rem" : "5.7rem")};
  border-radius: ${(props) => (props.navButton ? "4.4rem" : "10rem")};
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
  font-family: ${(props) => (props.navButton ? "'Poppins'" : "'Lato'")},
    sans-serif;
  font-weight: ${(props) => (props.navButton ? "500" : "600")};
  color: ${(props) => (props.navButton ? "inherit" : "#000")};
  font-size: 2rem;

  ${mediaQueries(70)`
      width: 17rem;
      height: 4.4rem;
  `};

  ${mediaQueries(50)`
      font-size: 1.5rem;
  `};

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: ${(props) => (props.navButton ? "4.4rem" : "10rem")};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    animation: moveUp 0.5s ease-out 0.75s;
    animation-fill-mode: backwards;
    background-color: rgba(67, 221, 230, 0.7);

    ${mediaQueries(56)`
      width: 0;
      height: 0;
      visibility: hidden;
    `};
  }

  &:hover {
    transform: translateY(-0.3px);
    box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
    overflow: visible;

    &::after {
      transform: scaleX(1.3) scaleY(1.5);
      opacity: 0;
    }
  }
`;
