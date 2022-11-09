import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { HomeAbogados } from "../pages";

const LayoutRequireAuthAbogados = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
};
export default LayoutRequireAuthAbogados;
