import { Routes, Route } from "react-router-dom";

import {
  NotFound,
  HomeGeneral,
  Login,
  HomeClientes,
  HomeAbogados,
  Register,
  Ofertas,
  Asistencia,
  CrearContrato,
  Documentos,
  FirmaDigital,
} from "./pages/index.js";
import NavBarGeneral from "./components/NavBarGeneral";

function App() {
  return (
    <>
      <NavBarGeneral />
      <Routes>
        <Route path="/*" element={<NotFound />} />

        <Route path="/" element={<HomeGeneral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/abogados/home" element={<HomeAbogados />} />
        <Route path="/abogados/ofertas" element={<Ofertas />} />

        <Route path="/clientes/home" element={<HomeClientes />} />
        <Route path="/clientes/asistencia" element={<Asistencia />} />
        <Route path="/clientes/crear-contrato" element={<CrearContrato />} />
        <Route path="/clientes/documentos" element={<Documentos />} />
        <Route path="/clientes/firma-digital" element={<FirmaDigital />} />
      </Routes>
    </>
  );
}

export default App;
