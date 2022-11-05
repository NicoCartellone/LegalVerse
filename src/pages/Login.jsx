import { useState } from "react";
import { LoginClientes, LoginAbogados } from "../components/index";

import Button from "react-bootstrap/Button";

const Login = () => {
  const [switchForm, setSwitchForm] = useState(true);
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Registro</h1>
          <Button onClick={() => setSwitchForm(true)} variant="primary">
            Cliente
          </Button>

          <Button onClick={() => setSwitchForm(false)} variant="primary">
            Abogado
          </Button>
          {switchForm ? <LoginClientes /> : <LoginAbogados />}
        </div>
      </div>
    </div>
  );
};
export default Login;
