import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as Yup from "yup";

import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

const schemaForm = Yup.object().shape({
  nombreCompleto: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  repassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password")]),
});

const RegisterAbogados = () => {
  const { registerUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleSubmit = (values) => {
    registerUser(
      values.email,
      values.password,
      values.nombreCompleto,
      "abogado"
    );
    navegate("/abogados/home");
  };
  return (
    <div>
      <h1>Registro Abogados</h1>
      <Formik
        validationSchema={schemaForm}
        onSubmit={handleSubmit}
        initialValues={{
          nombreCompleto: "",
          email: "",
          password: "",
          repassword: "",
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
            <Form.Group className="mb-3" controlId="formBasicNombre">
              <Form.Label>Nombre completo</Form.Label>
              <Form.Control
                type="text"
                name="nombreCompleto"
                value={values.nombreCompleto}
                onChange={handleChange("nombreCompleto")}
                onBlur={handleBlur("nombreCompleto")}
                isValid={touched.nombreCompleto && !errors.nombreCompleto}
                placeholder="Ingrese nombre completo"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                isValid={touched.email && !errors.email}
                placeholder="Ingrese email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                isValid={touched.password && !errors.password}
                placeholder="Ingree contraseña"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRePassword">
              <Form.Label>Confirme contraseña</Form.Label>
              <Form.Control
                type="password"
                name="repassword"
                value={values.repassword}
                onChange={handleChange("repassword")}
                onBlur={handleBlur("repassword")}
                isValid={touched.repassword && !errors.repassword}
                placeholder="Vuelva a ingresar su contraseña"
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Registrar
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegisterAbogados;
