import { NavContainer, NavLinks } from "../styles/NavbarStyles";
import { NavLogo } from "./AllSvg";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

const Navbar = () => {
  return (
    <NavContainer className="nav">
      <NavLogo />

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
        <CTAButton navButton={true} />
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
