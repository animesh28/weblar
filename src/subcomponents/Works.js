import React from "react";
import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";
import { WorkCardContainer, WorkContainer } from "../styles/WorksStyles";
import WorkCard from "./WorkCard";
import CTAButton from "./CTAButton";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const works = [
  {
    head: "Project 1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: project1,
  },
  {
    head: "Project 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: project2,
  },
  {
    head: "Project 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: project3,
  },
];

const Works = (props) => {
  return (
    <WorkContainer>
      <SectionHeading title="Our Works" color={props.theme.darkBlue} />
      <WorkCardContainer>
        {works.map((work, i) => (
          <WorkCard head={work.head} content={work.content} img={work.img} />
        ))}
      </WorkCardContainer>
      <CTAButton text="View More" />
    </WorkContainer>
  );
};

export default withTheme(Works);
