import {
  LandingContainer,
  LandingContent,
  LandingImage,
} from "../styles/LandingStyles";
import cover from "../assets/cover.png";
import CTAButton from "./CTAButton";

const Landing = () => {
  return (
    <LandingContainer>
      <LandingContent>
        <h1>Let’s create something great together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue nec
          ultrices venenatis in. Sed elit aenean mattis vulputate aliquet vitae.
        </p>
        <CTAButton navButton={false} />
      </LandingContent>
      <LandingImage>
        <img src={cover} alt="cover" />
      </LandingImage>
    </LandingContainer>
  );
};

export default Landing;
