import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import withAuth from "../../utils/withAuth";

const HomeClientes = () => {
  return (
    <div>
      <h1 style={{ backgroundColor: "red" }}>Home Clientes</h1>
    </div>
  );
};
export default withAuth(HomeClientes);
