import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand href="#home">Sandbox</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Link to="/cards" className="nav-link">
              Carsv2
            </Link>
            <Nav.Link as={Link} to="/cards">
              Cards
            </Nav.Link>
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

function changeUrl(url: string) {
  let navigate = useNavigate();
  navigate(url);
}

export default Navigation;
