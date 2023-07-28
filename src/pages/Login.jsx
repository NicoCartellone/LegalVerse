import { useState } from "react";
import { LoginClientes, LoginAbogados } from "../components/index";

import Button from "react-bootstrap/Button";

const Login = () => {
  const [switchForm, setSwitchForm] = useState(true);
  const colorDisabled = "#ccc";
  const selected = "#0d6efd";
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Iniciar Sesión</h1>
          <LoginClientes switchForm={switchForm} />
        </div>
      </div>
    </div>
  );
};
export default Login;
