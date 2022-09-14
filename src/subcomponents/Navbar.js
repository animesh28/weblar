import { NavContainer, NavLinks } from "../styles/NavbarStyles";
import { BrandLogo } from "./AllSvg";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { withTheme } from "styled-components";

const Navbar = ({ theme }) => {
  return (
    <NavContainer className="nav">
      <Link to="/">
        <BrandLogo color={theme.logoColor} />
      </Link>

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
        <CTAButton navButton={true} text="Get in Touch" />
      </NavLinks>
    </NavContainer>
  );
};

export default withTheme(Navbar);
