import { NavContainer, NavLinks } from "../styles/NavbarStyles";
import { BrandLogo } from "./AllSvg";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { withTheme } from "styled-components";

const Navbar = ({ theme }) => {
  return (
    <NavContainer className="nav">
      <BrandLogo color={theme.logoColor} />

      <NavLinks>
        <Link className="nav-links" to="/">
          Home
        </Link>
        <Link className="nav-links" to="/about">
          About
        </Link>
        <Link className="nav-links" to="/contact">
          Contact
        </Link>
        <CTAButton navButton={true} text="Home" />
      </NavLinks>
    </NavContainer>
  );
};

export default withTheme(Navbar);
