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

import "../pages/styles/dropdown.css";

const NavBarGeneral = () => {
  const { signOutUser, userData } = useContext(UserContext);
  const rol = userData.rol;
  const showClient = rol === 0 ? true : false;
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <Image src={imgLogo} />
          </Navbar.Brand>
        </NavLink>

        <Stack direction="horizontal" gap={2}>
          {!userData ? (
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
              {showClient ? (
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown
                        title={userData.email}
                        id="basic-nav-dropdown"
                      >
                        <div className="containerNavItems">
                          <NavLink to="/clientes/home">
                            <Button variant="light">Inicio</Button>
                          </NavLink>
                          <NavLink to="/clientes/asistencia">
                            <Button variant="light">Asistencia</Button>
                          </NavLink>
                          <NavLink to="/clientes/crear-contrato">
                            <Button variant="light">Crear Contrato</Button>
                          </NavLink>
                          <NavLink to="/clientes/documentos">
                            <Button variant="light"> Documentos</Button>
                          </NavLink>
                          <NavLink to="/clientes/firma-digital">
                            <Button variant="light"> Firma Digital</Button>
                          </NavLink>
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={signOutUser}>
                            Cerrar Sesión
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </>
              ) : (
                <>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavDropdown
                        title={userData.email}
                        id="basic-nav-dropdown"
                      >
                        <div className="containerNavItems">
                          <NavLink to="/abogados/home">
                            <Button variant="light">Inicio</Button>
                          </NavLink>
                          <NavLink to="/abogados/ofertas">
                            <Button variant="light">Ofertas</Button>
                          </NavLink>
                          <NavDropdown.Divider />
                          <NavDropdown.Item onClick={signOutUser}>
                            Cerrar Sesión
                          </NavDropdown.Item>
                        </div>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </>
              )}
            </>
          )}
        </Stack>
      </Container>
    </Navbar>
  );
};
export default NavBarGeneral;
