import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";
import { WorkCardContainer, WorkContainer } from "../styles/WorksStyles";
import WorkCard from "./WorkCard";
import CTAButton from "./CTAButton";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { Fade } from "react-awesome-reveal";

const sm = window.matchMedia("(max-width: 65em)").matches;
//on small device removing variable animation delay since flex-col

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
          <Fade key={`work-project_${i}`} delay={sm ? 500 : i * 500 + 500}>
            <WorkCard head={work.head} content={work.content} img={work.img} />
          </Fade>
        ))}
      </WorkCardContainer>
      <CTAButton text="View More" />
    </WorkContainer>
  );
};

export default withTheme(Works);
