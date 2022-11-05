import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const HomeAbogados = () => {
  const { logOutAbogado } = useContext(UserContext);

  return (
    <div>
      <h1>HomeAbogados</h1>
      <button onClick={() => logOutAbogado()}>logout</button>
    </div>
  );
};
export default HomeAbogados;
