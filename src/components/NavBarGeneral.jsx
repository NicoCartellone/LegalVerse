import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import imgLogo from "../assets/logo.png";
import { Stack } from "react-bootstrap";

import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const NavBarGeneral = () => {
  const { user, signOutUser, userData } = useContext(UserContext);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Image src={imgLogo} />
          </Navbar.Brand>
        </NavLink>

        <Stack direction="horizontal" gap={2}>
          {!user ? (
            <>
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
            </>
          ) : (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavDropdown title={userData.email} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/clientes/home">
                      Inicio
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/clientes/asistencia">
                      Asistencia
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/clientes/crear-contrato">
                      Crear Contrato
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/clientes/documentos">
                      Documentos
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/clientes/firma-digital">
                      Firma Digital
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={signOutUser}>
                      Cerra Sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </>
          )}
        </Stack>
      </Container>
    </Navbar>
  );
};
export default NavBarGeneral;
