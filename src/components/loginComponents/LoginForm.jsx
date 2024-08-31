import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Box from "../generalComponents/Box";
import Button from "../generalComponents/Button";
import Checkbox from "../generalComponents/Checkbox";
import InputField from "../generalComponents/InputField";

const LoginForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    if (validateUser(values.username, values.password)) {
      localStorage.setItem("rememberedUsername", values.username);
      localStorage.setItem("rememberedPassword", values.password);
      navigate("/dashboard");
    } else {
      setSubmitting(false);
      setError("Incorrect username or password");
    }
  };

  const validateUser = (username, password) => {
    return username === "user" && password === "admin";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Box className="h-auto w-auto">
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={InputField}
                label="Username"
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500"
              />
              <Field
                as={InputField}
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
              <Checkbox
                label="Remember Me"
                id="rememberMeCheckbox"
                rememberState={true}
              />
              <ErrorMessage
                name="error"
                component="div"
                className="text-red-500"
              />
              <div className="flex justify-center items-center h-full mt-[2rem]">
                <Button type="submit" disabled={isSubmitting}>
                  Sign in
                </Button>
              </div>
              <div className="mt-4 text-center flex flex-col sm:flex-row sm:items-center sm:justify-end sm:text-center">
                <span className="text-center sm:text-left">
                  Don't have an account?
                </span>
                <a
                  href="/SignUp"
                  className="text-n-1/50 transition-colors hover:text-n-1 mt-2 sm:mt-0 sm:ml-2"
                >
                  Click here
                </a>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

export default LoginForm;
