import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const LoginClientes = () => {
  const { loginCliente } = useContext(UserContext);

  return (
    <div>
      <h1>Login Clientes</h1>
      <button onClick={() => loginCliente()}>login</button>
    </div>
  );
};
export default LoginClientes;
