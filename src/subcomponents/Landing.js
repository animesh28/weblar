import {
  LandingContainer,
  LandingContent,
  LandingImage,
} from "../styles/LandingStyles";
import cover from "../assets/cover.png";
import CTAButton from "./CTAButton";
import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";
import { Slide } from "react-awesome-reveal";

const Landing = (props) => {
  return (
    <LandingContainer>
      <LandingContent>
        <Slide>
          <SectionHeading
            title="Let’s create something great together"
            color={props.theme.darkBlue}
          />
        </Slide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
          ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.
        </p>

        <CTAButton text="Let’s Talk" />
      </LandingContent>

      <Slide direction="right">
        <LandingImage img={cover}></LandingImage>
      </Slide>
    </LandingContainer>
  );
};

export default withTheme(Landing);
