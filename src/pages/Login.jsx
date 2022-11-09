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
          <h1>Login</h1>
          <Button
            className="m-1"
            onClick={() => setSwitchForm(true)}
            style={{ background: `${switchForm ? selected : colorDisabled}` }}
          >
            Cliente
          </Button>

          <Button
            className="m-1"
            onClick={() => setSwitchForm(false)}
            style={{ background: `${switchForm ? colorDisabled : selected}` }}
          >
            Abogado
          </Button>
          <LoginClientes switchForm={switchForm} />
        </div>
      </div>
    </div>
  );
};
export default Login;
