import { Button } from "../styles/CTAButtonStyles";

const CTAButton = ({ navButton, text, handler }) => {
  return (
    <Button navButton={navButton} onClick={handler}>
      {text}
    </Button>
  );
};

export default CTAButton;
