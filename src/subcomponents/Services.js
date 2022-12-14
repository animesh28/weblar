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
import line from "../assets/HorizontalLine.png";
import { Bounce } from "react-awesome-reveal";

const sm = window.matchMedia("(max-width: 65rem)").matches;
const Services = () => {
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
                <Bounce delay={700}>
                  <ServiceCard icon={card.icon} title={card.title} />
                </Bounce>
                {!sm && i < arr.length - 1 ? <CardSeparator /> : null}
                {sm && i < arr.length - 1 ? (
                  <img src={line} alt="divider" />
                ) : null}
              </React.Fragment>
            );
          })}
        </ServiceCardContainer>
      </ServiceContent>
    </ServiceContainer>
  );
};

export default Services;
