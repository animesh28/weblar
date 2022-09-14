import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  FooterText,
  CopyRight,
  TextContainer,
} from "../styles/FooterStyles";
import LeftHeadingRightContent from "./LeftHeadingRightContent";
import CTAButton from "./CTAButton";
import { withTheme } from "styled-components";
import { BrandLogo } from "./AllSvg";
import { Address, Call, Policies } from "./ContactInfo";
import SocialIcons from "./SocialIcons";

const Footer = ({ theme }) => {
  return (
    <FooterContainer id="footer">
      <LeftHeadingRightContent
        className="footer-LeftHeadingRightContent"
        head="Let’s work together"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et consectetur ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat arcu."
        button={<CTAButton text="Let’s Talk" />}
      />
      <FooterContent>
        <LogoContainer>
          <BrandLogo color={theme.white} />
          <SocialIcons />
        </LogoContainer>
        <FooterText>
          <TextContainer>
            <Address />
          </TextContainer>
          <TextContainer>
            <Call />
          </TextContainer>
          <TextContainer>
            <Policies />
          </TextContainer>
        </FooterText>
      </FooterContent>
      <CopyRight>Copyright © Webalar. All Rights Reserved</CopyRight>
    </FooterContainer>
  );
};

export default withTheme(Footer);
