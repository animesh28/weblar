import styled from "styled-components";
import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";
import { mediaQueries } from "../globalStyles";

const ServiceDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.button ? "flex-start" : "center")};
  margin-bottom: ${(props) => (props.button ? "9rem" : "0")};

  ${mediaQueries(65)`
      flex-direction: column;
  `};

  & > h2 {
    width: 45%;

    ${mediaQueries(65)`
      width: auto;
  `};
  }

  & p.right-text {
    margin-bottom: ${(props) => (props.button ? "3rem" : "0")};
    text-align: justify;
  }
`;

const SectionContent = styled.div`
  width: 40%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;

  ${mediaQueries(65)`
      width: 75%;
  `};
`;

const LeftHeadingRightContent = ({
  theme,
  button = null,
  head,
  content,
  className,
}) => {
  const isButton = button ? true : false;
  return (
    <ServiceDescription button={isButton} className={className}>
      <SectionHeading title={head} color={theme.white} />
      <SectionContent>
        <p className="right-text">{content}</p>
        {button}
      </SectionContent>
    </ServiceDescription>
  );
};

export default withTheme(LeftHeadingRightContent);
