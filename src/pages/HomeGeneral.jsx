import "../pages/styles/homeGeneralStyles.css";
import Container from "react-bootstrap/Container";
import PantallaPrincipal from "../components/PantallaPrincipal";
import logop1 from "../assets/LOGOP1.png";
import Stack from "react-bootstrap/Stack";

const HomeGeneral = () => {
  return (
    <>
      <PantallaPrincipal />
      <div className="servicios">
        <Container className="cajaDatosServicios">
          <h2>Soluciones de LegalVerse</h2>
          <ul>
            <li>
              La creación de contratos by “fill-in-the-blanks” busca establecer
              una plataforma que genere contratos personalizados a través de
              procesos y algoritmos que permitan identificar el tipo de contrato
              que se requiere.
            </li>
            <li>
              La firma digital se puede utilizar tanto en contratos creados por
              la plataforma cómo en contratos que cada usuario pueda cargar a la
              página.{" "}
            </li>
            <li>
              El almacenamiento de la documentación dentro de una misma nube
              permite al usuario poder gestionar su workflow legal en un solo
              lugar.
            </li>
            <li>
              La asistencia por parte de abogados viene a dar apoyo a aquellos
              usuarios que no tengan los conocimientos legales necesarios para
              poder analizar un contrato legal desde una mirada de expertise. Es
              por eso que, el usuario podrá pedir ayuda y asistencia cada vez
              que lo requiera.
            </li>
            <p>
              LegalVerse le permite a las personas físicas y jurídicas, en
              especial PyMEs, la posibilidad de revisar y crear todos sus
              documentos legales a solo un click de distancia y todo dentro de
              un mismo lugar.
            </p>
          </ul>
        </Container>
        <hr style={{ color: "white" }}></hr>
        <h1 className="services-title">Servicios</h1>
        <Container className="aboutServices">
          <div className="service-desc">
            <h1>Suscripción mensual</h1>

            <h5>Gestión</h5>
            <h5>Asistencia</h5>
            <h5>Creación</h5>
            <h5>Firma</h5>

            <h1>$17.000</h1>
          </div>
          <div className="service-desc">
            <h1>Contratos por unidad</h1>

            <h5>Contrato</h5>
            <h5>Firma</h5>

            <h1>$2.200</h1>
          </div>
        </Container>
      </div>
      <footer className="bg-light text-center text-lg-start">
        <Stack direction="horizontal" gap={2}>
          <div className="container p-4">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase">Contactanos</h5>

                <p>contacto@legalverse.com.ar</p>
                <p>+54 9 11 7859 0087</p>
                <p>Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>
          <img className="logo1" src={logop1} />
        </Stack>
        <div className="text-center p-3">© 2022 Copyright</div>
      </footer>
    </>
  );
};
export default HomeGeneral;
