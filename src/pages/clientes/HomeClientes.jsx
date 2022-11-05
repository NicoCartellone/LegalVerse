import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const HomeClientes = () => {
  const { logOutAbogado } = useContext(UserContext);
  return (
    <div>
      <h1>HomeAbogados</h1>
      <button onClick={() => logOutAbogado()}>logout</button>
    </div>
  );
};
export default HomeClientes;
