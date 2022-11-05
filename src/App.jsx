import { Routes, Route } from "react-router-dom";

import {
  NotFound,
  HomeGeneral,
  Login,
  HomeClientes,
  HomeAbogados,
  Register,
} from "./pages/index.js";
import NavBarGeneral from "./components/NavBarGeneral";
import LayaoutRequireAuthClientes from "./components/LayoutRequireAuthClientes.jsx";
import LayoutRequireAuthAbogados from "./components/LayoutRequireAuthAbogados.jsx";

function App() {
  return (
    <>
      <NavBarGeneral />
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<LayaoutRequireAuthClientes />}>
          <Route path="/clientes/home" element={<HomeClientes />} />
        </Route>
        <Route path="/" element={<LayoutRequireAuthAbogados />}>
          <Route path="/abogados/home" element={<HomeAbogados />} />
        </Route>

        <Route index element={<HomeGeneral />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
