import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 72px;
  line-height: 86px;
  color: ${(props) => props.color};
`;

const SectionHeading = ({ title, color }) => {
  return <Heading color={color}>{title}</Heading>;
};

export default SectionHeading;
