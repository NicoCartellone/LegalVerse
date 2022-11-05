import { createContext, useState } from "react";
import { Navigate } from "react-router-dom";

const UserProvider = ({ children }) => {
  const [userCliente, setUserCliente] = useState(false);
  const [userAbogado, setUserAbogado] = useState(false);

  const loginCliente = () => {
    setUserCliente(true);
    <Navigate to="/clientes/home" />;
  };

  const loginAbogado = () => {
    setUserAbogado(true);
    <Navigate to="/abogados/home" />;
  };

  const logOutCliente = () => {
    setUserCliente(false);
    <Navigate to="/login" />;
  };

  const logOutAbogado = () => {
    setUserAbogado(false);
    <Navigate to="/login" />;
  };

  return (
    <UserContext.Provider
      value={{
        userCliente,
        userAbogado,
        loginCliente,
        loginAbogado,
        logOutCliente,
        logOutAbogado,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;

export const UserContext = createContext();
