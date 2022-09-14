import {
  WorkCardWrapper,
  WorkCardImg,
  WorkCardContent,
  WorkCardText,
} from "../styles/WorksStyles";
import { KnowMore } from "./AllSvg";
import mobileKnowMore from "../assets/knowMore.png";
const sm = window.matchMedia("(max-width: 25rem)").matches;
const WorkCard = ({ head, content, img }) => {
  return (
    <WorkCardWrapper>
      <WorkCardImg img={img}></WorkCardImg>
      <WorkCardContent>
        <WorkCardText>
          <h3>{head}</h3>
          <p>{content}</p>
        </WorkCardText>
        {sm ? <img src={mobileKnowMore} alt="icon" /> : <KnowMore />}
      </WorkCardContent>
    </WorkCardWrapper>
  );
};

export default WorkCard;
