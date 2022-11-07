import { UserContext } from "../../context/UserProvider";
import withAuth from "../../utils/withAuth";
import { useContext } from "react";
import PantallaPrincipal from "../../components/PantallaPrincipal";
import "../styles/homeAbogados.css";
import { Oferta } from "../../components/abogados/Oferta";

const HomeAbogados = () => {
  const { logOutAbogado } = useContext(UserContext);

  return (
    <>
      <PantallaPrincipal />
      <div className="ofertas">
        <h1>Ofertas</h1>
        <h5>Revise las ofertas dentro de las últimas 24 horas</h5>
        <div className="grillaOfertas">
          <Oferta
            tipo="Tipo de oferta"
            solicitante="Carla Lopez"
            texto="Lorem ipsum"
            fecha="10/10"
          />
          <Oferta
            tipo="Tipo de oferta"
            solicitante="Carla Lopez"
            texto="Lorem ipsum"
            fecha="10/10"
          />
          <Oferta
            tipo="Tipo de oferta"
            solicitante="Carla Lopez"
            texto="Lorem ipsum"
            fecha="10/10"
          />
          <Oferta
            tipo="Tipo de oferta"
            solicitante="Carla Lopez"
            texto="Lorem ipsum"
            fecha="10/10"
          />
        </div>
      </div>
      <div className="revisarContratos">
        <h1>Revisar contratos</h1>
        <div className="grillaContratos"></div>
      </div>
    </>
  );
};
export default withAuth(HomeAbogados);
