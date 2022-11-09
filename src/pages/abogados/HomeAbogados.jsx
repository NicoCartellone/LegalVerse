import withAuth from "../../utils/withAuth";
import { useEffect } from "react";
import PantallaPrincipal from "../../components/PantallaPrincipal";
import "../styles/homeAbogados.css";
import { Oferta } from "../../components/abogados/Oferta";

import { useFirestore } from "../../hooks/useFirestore";

const HomeAbogados = () => {
  const { getAllAsistencia, asistencia } = useFirestore();

  useEffect(() => {
    getAllAsistencia();
  }, []);

  return (
    <>
      <PantallaPrincipal />
      <div className="ofertas">
        <h1>Ofertas</h1>
        <h5>Revise las ofertas dentro de las últimas 24 horas</h5>
        {asistencia.map((item) => (
          <div className="grillaOfertas" key={item.id}>
            <Oferta
              tipo={item.tipodepedido}
              solicitante={item.nombre}
              texto={item.descripcion}
              fecha={item.fecha}
            />
          </div>
        ))}
      </div>
      <div className="revisarContratos">
        <h1>Revisar contratos</h1>
        <div className="grillaContratos"></div>
      </div>
    </>
  );
};
export default withAuth(HomeAbogados);
