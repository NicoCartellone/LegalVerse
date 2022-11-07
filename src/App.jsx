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
import LayaoutRequireAuth from "./components/LayoutRequireAuthClientes.jsx";

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
        <Route path="/clientes/home" element={<HomeClientes />} />
      </Routes>
    </>
  );
}

export default App;
