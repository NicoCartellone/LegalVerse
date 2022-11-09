import "../styles/crearContrato.css";
import Button from "react-bootstrap/Button";
import withAuth from "../../utils/withAuth";

const CrearContrato = () => {
  return (
    <>
      <div className="contratos-textos">
        <h1>Creación de contratos</h1>
        <p>Creá tu primer contrato haciendo click en el siguiente botón</p>
        <Button
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSc8s8N_4OxP2L9BjEEy9ub73SXpw5knuN5IrX33gIpbp7SFJw/viewform"
        >
          Crear
        </Button>
      </div>
    </>
  );
};
export default withAuth(CrearContrato);
