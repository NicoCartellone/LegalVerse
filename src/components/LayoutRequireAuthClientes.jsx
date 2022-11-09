import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { HomeClientes } from "../pages";

const LayaoutRequireAuthClientes = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <HomeClientes />
    </div>
  );
};
export default LayaoutRequireAuthClientes;
