import { useState } from "react";
import { RegisterAbogados, RegisterClientes } from "../components/index";

import Button from "react-bootstrap/Button";

const Register = () => {
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
          {switchForm ? <RegisterClientes /> : <RegisterAbogados />}
        </div>
      </div>
    </div>
  );
};
export default Register;
