import "../styles/firmaDigital.css";
import Toast from "react-bootstrap/Toast";
import { useEffect, useState } from "react";
import withAuth from "../../utils/withAuth";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ToastContainer from "react-bootstrap/ToastContainer";
const FirmaDigital = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="firma">
      <ToastContainer position="top-center">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="success"
          style={{
            color: "white",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">LegalVerse</strong>
          </Toast.Header>
          <Toast.Body>El documento fue firmado!</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="firma-textos">
        <h1>Firma digital</h1>
        <p> Tus documentos firmados en un solo lugar</p>
      </div>
      <div className="firma-documentos">
        <h5>Documento</h5>
        <button onClick={() => setShow(true)}>Firmar</button>
      </div>
    </div>
  );
};
export default withAuth(FirmaDigital);
