import "../pages/styles/pantallaPrincipal.css";
import logop1 from "../assets/LOGOP1.png";
import Stack from "react-bootstrap/Stack";

const PantallaPrincipal = () => {
  return (
    <>
      <div className="backgroundphoto">
        <div className="d-flex justify-content-center">
          <Stack direction="horizontal" gap={2}>
            <div className="cardContainerHome">
              <h1 className="h1 text-light">
                El mundo de las leyes, reinventado
              </h1>
            </div>
            <img className="logo1" src={logop1} />
          </Stack>
        </div>

        <div className="aboutUs">
          <div className="cajaDatos">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos un equipo compuesto por jóvenes mentes reinventando el mundo
              de las leyes, poniendo como prioridad al cliente con su necesidad
              de simplificar y eficientizar procesos legales.
            </p>
          </div>
          <div className="cajaDatos">
            <h2>¿Qué hacemos?</h2>
            <p>
              Desde nuestro lugar nos ocupamos de dar la oportunidad tanto a
              personas físicas como jurídicas de crear contratos bajo la
              catalogación de “fill-in-the-blanks”, poder firmarlos digitalmente
              siguiendo rigurosos procesos de validación jurídica de los mismos.
              Además, la plataforma contará con un espacio de gestión y
              almacenamiento de todos los documentos creados y subidos a la
              plataforma. También con la posibilidad de poder recibir asistencia
              por parte de abogados capacitados externos en el análisis de un
              contrato.
            </p>
          </div>
          <div className="cajaDatos">
            <h2>¿Por qué LegalVerse? </h2>
            <p>
              LegalVerse brinda un concepto diferente de plataforma dado que
              unifica los aspectos más importantes a la hora de generar un
              documento legal. Puedes crear, firmar, analizar y gestionar tus
              contratos desde un solo lugar. Brinda un valor agregado al usuario
              dado que le posibilita eficientizar el proceso legal al usuario,
              acortando tiempo y costos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PantallaPrincipal;
