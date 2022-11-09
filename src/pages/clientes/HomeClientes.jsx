import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import withAuth from "../../utils/withAuth";
import PantallaPrincipal from "../../components/PantallaPrincipal";

const HomeClientes = () => {
  return (
    <div>
      <PantallaPrincipal />
    </div>
  );
};
export default withAuth(HomeClientes);
