import React from "react";
import {
  ServiceContainer,
  ServiceContent,
  ServiceText,
  ServiceDescription,
  ServiceCardContainer,
} from "../styles/ServicesStyles";
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
          <ServiceDescription>
            <h2>
              Our services
              <br />
              that we provide
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut
              nunc, libero dolor, gravida. In metus, tortor, nunc sed egestas
              erat diam arcu. Laoreet orci nisl etiam risus ut nec. Facilisi
              ipsum viverra diam arcu massa amet non metus ornare.
            </p>
          </ServiceDescription>
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
