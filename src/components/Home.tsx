import { Container, Row, Col } from "react-bootstrap";
import CardWithPicture from "./CardWithPicture";

const cards = [
  {
    img: "https://picsum.photos/270/160",
    title: "Test Title",
    text: "Test Text",
    footer: "Last updated"
  },
  {
    img: "https://picsum.photos/270/160",
    title: "How they work",
    text: "yahooo",
    footer: "Last updated"
  },
  {
    img: "https://picsum.photos/270/160",
    title: "Test Title",
    text: "Test Text",
    footer: "Last updated"
  },
  {
    img: "https://picsum.photos/270/160",
    title: "Test Title",
    text: "Test Text",
    footer: "Last updated"
  },
  {
    img: "https://picsum.photos/270/160",
    title: "Test Title",
    text: "Test Text",
    footer: "Last updated"
  },
  {
    img: "https://picsum.photos/270/160",
    title: "Test Title",
    text: "Test Text",
    footer: "Last updated"
  }
];

function Home() {
  return (
    <Container>
      <Row>
        <p>
          Welcome to my boostrap sandbox. The purpose is to play around with all
          the bootstrap components in a safe and judgement-free area.
        </p>
      </Row>
      <Row>
        {cards.map((card, x) => {
          return (
            <Col key={x} xs={6} sm={6} md={4} lg={3}>
              <CardWithPicture
                image={card.img}
                title={card.title}
                text={card.text}
                footer={card.footer}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
