import { useState } from "react";
import { RegisterAbogados, RegisterClientes } from "../components/index";

import Button from "react-bootstrap/Button";

const Register = () => {
  const [switchForm, setSwitchForm] = useState(true);
  const colorDisabled = "#ccc";
  const selected = "#0d6efd";
  return (
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-4">
          <h1>Registro</h1>
          <Button
            className="m-1"
            onClick={() => setSwitchForm(true)}
            style={{ background: `${switchForm ? selected : colorDisabled}` }}
          >
            Persona Fisica
          </Button>

          <Button
            className="m-1"
            onClick={() => setSwitchForm(false)}
            style={{ background: `${switchForm ? colorDisabled : selected}` }}
          >
            Persona Juridica
          </Button>
          <RegisterClientes switchForm={switchForm} />
        </div>
      </div>
    </div>
  );
};
export default Register;
