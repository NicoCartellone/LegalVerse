import "../styles/crearContrato.css";
import Button from "react-bootstrap/Button";

const CrearContrato = () => {
  return (
    <>
      <div className="contratos-textos">
        <h1>Creación de contratos</h1>
        <p>Creá tu primer contrato haciendo click en el siguiente botón</p>
        <Button
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScgg92Uk03vwv3wPddXiZkL_nieUbhjZZiTOx0UhnenJ9PMaA/viewform?usp=sharing"
        >
          Crear
        </Button>
      </div>
    </>
  );
};
export default CrearContrato;
