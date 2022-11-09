import "../styles/asistencia.css";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";

import { Formik } from "formik";
import * as Yup from "yup";

import { useFirestore } from "../../hooks/useFirestore";

const schemaForm = Yup.object().shape({
  tipodepedido: Yup.string().required(),
  descripcion: Yup.string().required(),
});

const Asistencia = () => {
  const { addAsistecia } = useFirestore();

  const handleSubmit = (values) => {
    addAsistecia(values.tipodepedido, values.descripcion);
  };
  return (
    <Container>
      <div className="asistencia-textos">
        <h1>Pedido de asistencia a un abogado</h1>
        <p>Obtendra respuesta dentro de las próximas 24 a 48 horas</p>
      </div>
      <div className="pre-form">
        <div className="formulario">
          <Formik
            validationSchema={schemaForm}
            onSubmit={handleSubmit}
            initialValues={{
              tipodepedido: "",
              descripcion: "",
            }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form className="text-start mt-5">
                <Form.Group className="mb-3" controlId="formBasicString">
                  <Form.Label>Tipo de pedido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese pedido"
                    name="tipodepedido"
                    value={values.tipodepedido}
                    onChange={handleChange("tipodepedido")}
                    onBlur={handleBlur("tipodepedido")}
                    isValid={touched.tipodepedido && !errors.tipodepedido}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicString">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ingrese descripción"
                    name="descripcion"
                    value={values.descripcion}
                    onChange={handleChange("descripcion")}
                    onBlur={handleBlur("descripcion")}
                    isValid={touched.descripcion && !errors.descripcion}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                  Enviar
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};
export default Asistencia;
