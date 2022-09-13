import { Button } from "../styles/CTAButtonStyles";

const CTAButton = ({ navButton, text }) => {
  return <Button navButton={navButton}>{text}</Button>;
};

export default CTAButton;
