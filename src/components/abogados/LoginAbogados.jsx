import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Formik } from "formik";
import * as Yup from "yup";

const schemaForm = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

const LoginAbogados = () => {
  const { loginUser, user } = useContext(UserContext);
  const navegate = useNavigate();

  useEffect(() => {
    if (user) {
      navegate("/abogados/home");
    }
  }, [user]);

  const handleSubmit = (values) => {
    loginUser(values.email, values.password);
  };

  return (
    <div className="mt-5">
      <h1>Login Abogados</h1>
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
export default LoginAbogados;
