import { Table, Container, Row } from "react-bootstrap";
import { Example1, Example2 } from "./TableExamples";

const employees = [
  { name: "Foo", manager: "Bar", team: "foobar", groups: ["Giggity", "Goo"] },
  {
    name: "Rasy",
    manager: "Jason",
    team: "foobar",
    groups: ["Giggity", "Goo"]
  },
  { name: "Jason", manager: "Rasy", team: "foobar", groups: ["Giggity", "Goo"] }
];

function Tables() {
  return (
    <Container>
      <Row>
        <p> This is a generic striped table </p>
      </Row>
      <Row>
        <Example1 data={employees} />
      </Row>
      <Row>
        <p> This is a dark table </p>
      </Row>
      <Row>
        <Example2 data={employees} />
      </Row>
    </Container>
  );
}

export default Tables;
