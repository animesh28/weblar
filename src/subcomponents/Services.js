import React from "react";
import {
  ServiceContainer,
  ServiceContent,
  ServiceText,
  ServiceCardContainer,
} from "../styles/ServicesStyles";
import LeftHeadingRightContent from "./LeftHeadingRightContent";
import { CardSeparator, Design, Development, Marketing } from "./AllSvg";
import ServiceCard from "./ServiceCard";
import Slider from "./Slider";

const Services = (props) => {
  const cardLogos = [
    { title: "Design", icon: <Design /> },
    { title: "Development", icon: <Development /> },
    { title: "Marketing", icon: <Marketing /> },
  ];

  return (
    <ServiceContainer>
      <ServiceContent>
        <Slider />
        <ServiceText>
          <LeftHeadingRightContent
            head="Our services that we provide"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
            libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
            arcu. Laoreet orci nisl etiam risus ut nec. Facilisi ipsum viverra diam
            arcu massa amet non metus ornare."
          />
        </ServiceText>
        <ServiceCardContainer>
          {cardLogos.map((card, i, arr) => {
            return (
              <React.Fragment key={`service-card_${i}`}>
                <ServiceCard icon={card.icon} title={card.title} />
                {i < arr.length - 1 ? <CardSeparator /> : null}
              </React.Fragment>
            );
          })}
        </ServiceCardContainer>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default Services;
