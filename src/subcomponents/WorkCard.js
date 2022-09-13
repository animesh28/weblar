import {
  WorkCardWrapper,
  WorkCardImg,
  WorkCardContent,
  WorkCardText,
} from "../styles/WorksStyles";
import { KnowMore } from "./AllSvg";

const WorkCard = ({ head, content, img }) => {
  return (
    <WorkCardWrapper>
      <WorkCardImg img={img}></WorkCardImg>
      <WorkCardContent>
        <WorkCardText>
          <h3>{head}</h3>
          <p>{content}</p>
        </WorkCardText>
        <KnowMore />
      </WorkCardContent>
    </WorkCardWrapper>
  );
};

export default WorkCard;
