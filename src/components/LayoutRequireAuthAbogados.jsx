import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { HomeAbogados } from "../pages";

const LayoutRequireAuthAbogados = () => {
  const { userData } = useContext(UserContext);
  console.log(userData);

  if (userData.rol !== "abogado") {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container mx-auto">
      <HomeAbogados />
    </div>
  );
};
export default LayoutRequireAuthAbogados;
