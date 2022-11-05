import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const LayaoutRequireAuth = () => {
  const { userCliente } = useContext(UserContext);

  if (!userCliente) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};
export default LayaoutRequireAuth;
