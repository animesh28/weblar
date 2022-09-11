import { NavContainer, NavLinks } from "../styles/NavbarStyles";
import { NavLogo } from "./AllSvg";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";

const Navbar = () => {
  return (
    <NavContainer>
      <NavLogo />

      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <CTAButton navButton={true} />
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
