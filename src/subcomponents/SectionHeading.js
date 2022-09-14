import styled from "styled-components";
import { mediaQueries } from "../globalStyles";

const Heading = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 86px;
  color: ${(props) => props.color};

  ${mediaQueries(70)`
      font-size: 48px;
  `};
`;

const SectionHeading = ({ title, color }) => {
  return <Heading color={color}>{title}</Heading>;
};

export default SectionHeading;
