import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import imgLogo from "../assets/logo.png";
import { Stack } from "react-bootstrap";

const NavBarGeneral = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Image src={imgLogo} />
          </Navbar.Brand>
        </NavLink>

        <Stack direction="horizontal" gap={2}>
          <NavLink
            to="/login"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button variant="light">Iniciar Sesión</Button>
          </NavLink>
          <NavLink
            to="/register"
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button variant="primary">Registrate</Button>
          </NavLink>
        </Stack>
      </Container>
    </Navbar>
  );
};
export default NavBarGeneral;
