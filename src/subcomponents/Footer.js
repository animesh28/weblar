import {
  FooterContainer,
  FooterContent,
  LogoContainer,
  FooterText,
  SocialIcons,
  CopyRight,
  TextContainer,
} from "../styles/FooterStyles";
import LeftHeadingRightContent from "./LeftHeadingRightContent";
import CTAButton from "./CTAButton";
import { withTheme } from "styled-components";
import { BrandLogo, Instagram, Twitter, Facebook } from "./AllSvg";
import { Address, Call, Policies } from "./ContactInfo";

const Footer = ({ theme }) => {
  return (
    <FooterContainer id="footer">
      <LeftHeadingRightContent
        head="Let’s work together"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et consectetur ut nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas erat arcu."
        button={<CTAButton text="Let’s Talk" />}
      />
      <FooterContent>
        <LogoContainer>
          <BrandLogo color={theme.white} />
          <SocialIcons>
            <Instagram />
            <Twitter />
            <Facebook />
          </SocialIcons>
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
