import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import withAuth from "../../utils/withAuth";

const HomeClientes = () => {
  return (
    <div>
      <h1>Home Clientes</h1>
    </div>
  );
};
export default withAuth(HomeClientes);
