import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";

const LoginAbogados = () => {
  const { loginAbogado } = useContext(UserContext);

  const handleSubmit = () => {
    try {
      loginAbogado();
      console.log("click");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login Abogados</h1>
      <button onClick={handleSubmit}>login</button>
    </div>
  );
};
export default LoginAbogados;
