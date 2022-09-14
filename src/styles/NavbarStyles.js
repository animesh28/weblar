import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  padding: 1.6rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  border-radius: 1.6rem;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 2rem;
  color: ${(props) => props.theme.dark};

  & > * {
    margin: 0 1.5rem;
  }

  & > .nav-links {
    border-bottom: 2.5px solid transparent;
    transition: all 0.3s ease-out;

    &:hover {
      border-bottom: 2.5px solid ${(props) => props.theme.aqua};
    }
  }
`;

export const CTANavContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
