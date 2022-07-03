import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const links = [
  { url: "/", text: "Home" },
  { url: "/cards", text: "Cards" },
  { url: "/tables", text: "Tables" }
];

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sandbox
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {links.map((link, index) => {
              return (
                <Nav.Link as={Link} to={link.url} key={index}>
                  {link.text}
                </Nav.Link>
              );
            })}
            ;
          </Nav>
          {/* Right justified links*/}
          <Navbar.Text className="justify-content-end">
            Signed in as: <a href="#login"> Foobar </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
