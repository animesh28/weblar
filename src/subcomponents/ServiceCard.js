import { Card, CardDetails } from "../styles/ServicesStyles";

const ServiceCard = ({ icon, title }) => {
  return (
    <Card>
      {icon}
      <CardDetails>
        <h3>{title}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et ut nunc,
          libero dolor, gravida. In metus, tortor, nunc sed egestas erat diam
          arcu.
        </p>
      </CardDetails>
    </Card>
  );
};

export default ServiceCard;
