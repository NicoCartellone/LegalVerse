import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

import { Formik } from "formik";
import * as Yup from "yup";

const schemaForm = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginClientes = () => {
  const { loginUser, userData, loading, setLoading } = useContext(UserContext);
  const navegate = useNavigate();

  useEffect(() => {
    if (userData) {
      navegate("/");
    }
  }, [userData]);

  const handleSubmit = (values) => {
    setLoading(true);
    loginUser(values.email, values.password);
  };

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Cargando...</span>
    </Spinner>
  ) : (
    <div className="mt-5">
      <Formik
        validationSchema={schemaForm}
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
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
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese email"
                name="email"
                value={values.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                isValid={touched.email && !errors.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Ingree contraseña"
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                isValid={touched.password && !errors.password}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleSubmit}>
              Iniciar Sesión
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginClientes;
