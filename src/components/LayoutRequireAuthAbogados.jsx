import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const LayoutRequireAuthAbogados = () => {
  const { userAbogado } = useContext(UserContext);

  if (!userAbogado) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};
export default LayoutRequireAuthAbogados;
