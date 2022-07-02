import Card from "react-bootstrap/Card";

interface CardProps {
  image: string;
  title: string;
  text: string;
  footer: string;
}

function CardWithPicture(props: CardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {props.footer} {Math.floor(Math.random() * 45)} minutes
        </small>
      </Card.Footer>
    </Card>
  );
}

export default CardWithPicture;
