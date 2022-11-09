import "../styles/asistencia.css"
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as Yup from "yup";

const schemaForm = Yup.object().shape({
  solicitante: Yup.string().required(),
  tipodepedido: Yup.string().required(),
  fecha: Yup.date().required(),
  descripcion: Yup.string().required(),
});

const Asistencia = () => {
  const { user } = useContext(UserContext);
  const navegate = useNavigate();

 

  const handleSubmit = (values) => {
    console.log(values, "exitoso");
  };
  return <>
  <div className="asistencia-textos">
    <h1>Pedido de asistencia a un abogado</h1>
    <p>Obtendra respuesta  dentro de las próximas 24 a 48 horas</p>
  </div>
  <div className="pre-form">
  <div className="formulario">
  <Formik
        validationSchema={schemaForm}
        onSubmit={handleSubmit}
        initialValues={{
          solicitante: user,
          tipodepedido: "",
          fecha: "",
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
                type="tipodepedido"
                placeholder="Ingrese pedido"
                name="tipodepedido"
                value={values.tipodepedido}
                // onChange={handleChange("email")}
                // onBlur={handleBlur("email")}
                // isValid={touched.email && !errors.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicString">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="descripcion"
                placeholder="Ingrese descripción"
                name="descripcion"
                value={values.descripcion}
                // onChange={handleChange("password")}
                // onBlur={handleBlur("password")}
                // isValid={touched.password && !errors.password}
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
  
  </>;
};
export default Asistencia;
