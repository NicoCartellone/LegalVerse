import "../pages/styles/homeGeneralStyles.css";

const HomeGeneral = () => {
  return <>
    <div className= "backgroundphoto">
      <div className="cardContainerHome">
        <h1 className="h1 text-light">El mundo de las leyes, reinventado</h1>
      </div>
      <div className="aboutUs">
        <div className="cajaDatos">
          <h2>¿Quiénes somos?</h2>
          <p>Somos un equipo compuesto por jóvenes mentes reinventando el mundo de las leyes, poniendo como prioridad al  cliente con su necesidad de simplificar y eficientizar procesos legales.</p>
        </div>
        <div className="cajaDatos">
          <h2>¿Qué hacemos?</h2>
          <p>Desde nuestro lugar nos ocupamos de dar la oportunidad tanto a personas físicas como jurídicas  de crear contratos bajo la catalogación de “fill-in-the-blanks”, poder firmarlos digitalmente siguiendo rigurosos procesos de validación jurídica de los mismos. 
Además, la plataforma contará con un espacio de gestión y almacenamiento de todos los documentos creados y subidos a la plataforma. También con la posibilidad de poder recibir asistencia por parte de abogados capacitados externos en el análisis de un contrato.
</p>
        </div>
        <div className="cajaDatos">
          <h2>¿Por qué LegalVerse? </h2>
          <p>LegalVerse brinda un concepto diferente de plataforma dado que unifica los aspectos más importantes a la hora de generar un documento legal. Puedes crear, firmar, analizar y gestionar tus contratos desde un solo lugar.
              Brinda un valor agregado al usuario dado que le posibilita eficientizar el proceso legal al usuario, acortando tiempo y costos.
</p>
        </div>
      </div>
    </div>
    <div className="servicios">
      <div className="cajaDatosServicios">
        <h2>Soluciones de LegalVerse</h2>
        <ul>
          <li>La creación de contratos by “fill-in-the-blanks” busca establecer una plataforma que genere contratos personalizados a través de procesos y algoritmos que permitan identificar el tipo de contrato que se requiere.</li>
          <li>La firma digital se puede utilizar tanto en contratos creados por la plataforma cómo en contratos que cada usuario pueda cargar a la página. </li>
          <li>El almacenamiento de la documentación dentro de una misma nube permite al usuario poder gestionar su workflow legal en un solo lugar.</li>
          <li>La asistencia por parte de abogados viene a dar apoyo a aquellos usuarios que no tengan los conocimientos legales necesarios para poder analizar un contrato legal desde una mirada de expertise. Es por eso que, el usuario podrá pedir ayuda y asistencia cada vez que lo requiera.</li>
          <p>LegalVerse le permite a las personas físicas y jurídicas, en especial PyMEs, la posibilidad de revisar y crear todos sus documentos legales a solo un click de distancia y todo dentro de un mismo lugar.</p> 
        </ul>

      </div>
      <hr style={{color: "white"}}></hr>
      <h1 className="services-title">Servicios</h1>
      <div className="aboutServices">
        <div className="service-desc">
          <h1>Suscripción mensual</h1>
          
            <h5>Gestión</h5>
            <h5>Asistencia</h5>
            <h5>Creación</h5>
            <h5>Firma</h5>
          
          <h1>$17.000</h1>

        </div>
        <div className="service-desc">
          <h1>Suscripción por unidad</h1>
          
            <h5>Contrato</h5>
            <h5>Firma</h5>
          
          <h1>$2.200</h1>

        </div>
      </div>
      

    </div>
    <footer className="bg-light text-center text-lg-start">

  <div className="container p-4">

    <div className="row">
   
      <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase">Contactanos</h5>

        <p>
        contacto@legalverse.com.ar
        </p>
        <p>
        +54 9 11 7859 0087
        </p>
        <p>
        Buenos Aires, Argentina
        </p>
      </div>



      

    </div>

  </div>
 


  <div className="text-center p-3">
    © 2022 Copyright
  </div>

</footer>
    
    </>;
};
export default HomeGeneral;
