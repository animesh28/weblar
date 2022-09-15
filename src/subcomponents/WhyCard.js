import React from "react";
import {
  CardContainer,
  Circle,
  Content,
  Title,
  Detail,
} from "../styles/WhyStyles";

function Card({ title, detail, cssClass, Icon }) {
  return (
    <CardContainer className={cssClass}>
      <Circle>{Icon}</Circle>
      <Content>
        <Title>{title}</Title>
        <Detail>{detail}</Detail>
      </Content>
    </CardContainer>
  );
}

export default Card;
