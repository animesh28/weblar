import { SocialIconsWrap } from "../styles/FooterStyles";
import { Instagram, Twitter, Facebook } from "./AllSvg";
const SocialIcons = ({ cirlcecolor }) => {
  return (
    <SocialIconsWrap className="social-icons">
      <Instagram cirlcecolor={cirlcecolor} />
      <Twitter cirlcecolor={cirlcecolor} />
      <Facebook cirlcecolor={cirlcecolor} />
    </SocialIconsWrap>
  );
};

export default SocialIcons;
