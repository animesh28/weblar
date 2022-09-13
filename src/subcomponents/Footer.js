import React from "react";
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
            <h3>Address</h3>
            <a
              href="https://www.google.com/maps/search/0199+Taylor+Park,+North+Dakota,+USA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              0199 Taylor Park,
              <br />
              North Dakota, USA
            </a>
          </TextContainer>
          <TextContainer>
            <h3>Call us on</h3>
            <a
              href="tel:+19872342023"
              target="_blank"
              rel="noopener noreferrer"
            >
              +1 98723 42023
            </a>
            <a
              href="mailto:info@logoipsum.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              info@logoipsum.com
            </a>
          </TextContainer>
          <TextContainer>
            <h3>Our Policies</h3>
            <a href="#footer">Privacy Policy</a>
            <a href="#footer">Terms of Use</a>
            <a href="#footer">Refund Policy</a>
          </TextContainer>
        </FooterText>
      </FooterContent>
      <CopyRight>Copyright © Webalar. All Rights Reserved</CopyRight>
    </FooterContainer>
  );
};

export default withTheme(Footer);
