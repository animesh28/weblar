import { JackInTheBox } from "react-awesome-reveal";
import Card from "./WhyCard";
import { Container, WhyCardWrap } from "../styles/WhyStyles";
import SectionHeading from "./SectionHeading";
import { withTheme } from "styled-components";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

const row1 = [
  {
    title: "Exceptional Customer Service",
    content:
      "We do not leave any stone unturned in helping and providing the best possible solutions",
    icon: <SupportAgentIcon />,
  },

  {
    title: "High Performance Web Solutions",
    content:
      "We deliver web solutions that are high quality, technically advanced & high performance.",
    icon: <RocketLaunchIcon />,
  },
];

const row2 = [
  {
    title: "Competitive Prices",
    content:
      "We offer you some of the best cutting edge technologies at a very competitive price",
    icon: <PriceCheckIcon />,
  },

  {
    title: "Extensive Experience",
    content:
      "We are one of the most trusted companies with a single motive of delivering excellence to our clients.",
    icon: <AutoAwesomeIcon />,
  },
];
const Why = ({ theme }) => {
  return (
    <Container>
      <SectionHeading title="Why Us?" color={theme.darkBlue} />
      <WhyCardWrap>
        <JackInTheBox delay={300}>
          {row1.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 === 0 ? "leftCard" : "rightCard"}
                Icon={cardDetail.icon}
              ></Card>
            );
          })}
        </JackInTheBox>
      </WhyCardWrap>
      <WhyCardWrap>
        <JackInTheBox delay={300}>
          {row2.map((cardDetail, i) => {
            return (
              <Card
                key={cardDetail.title}
                title={cardDetail.title}
                detail={cardDetail.content}
                cssClass={i % 2 === 0 ? "leftCard" : "rightCard"}
                Icon={cardDetail.icon}
              ></Card>
            );
          })}
        </JackInTheBox>
      </WhyCardWrap>
    </Container>
  );
};

export default withTheme(Why);
