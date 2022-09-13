import {
  LandingContainer,
  LandingContent,
  LandingImage,
} from "../styles/LandingStyles";
import cover from "../assets/cover.png";
import CTAButton from "./CTAButton";
import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";

const Landing = (props) => {
  return (
    <LandingContainer>
      <LandingContent>
        <SectionHeading
          title="Let’s create something great together"
          color={props.theme.darkBlue}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
          ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.
        </p>
        <CTAButton text="Let’s Talk" />
      </LandingContent>
      <LandingImage>
        <img src={cover} alt="cover" />
      </LandingImage>
    </LandingContainer>
  );
};

export default withTheme(Landing);
