import Box from "../generalComponents/Box";
import InputField from "../generalComponents/InputField";
import Button from "../generalComponents/Button";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { useFormik } from "formik";
import { SignupValidation } from "./SignupValidation";

const initialValues = {
  email: "",
  username: "",
  password: "",
  cpassword: "",
};

const SignUp = () => {
  const { values, handleBlur, handleChange, handleSubmit, errors, isValid } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupValidation,
      onSubmit: (values, { resetForm }) => {
        if (isValid) {
          console.log(values);
          resetForm();
        }
      },
    });

  return (
    <div className="flex justify-center items-center h-screen">
      <Box className="w-96 h-auto p-6">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={errors.email}
          />
          <InputField
            label="Username"
            id="username"
            name="username"
            type="text"
            placeholder="Enter your username"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={errors.username}
          />
          <InputField
            label="Password"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={errors.password}
          />
          <InputField
            label="Confirm Password"
            id="password"
            name="cpassword"
            type="password"
            placeholder="Confirm Password"
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
            errorMessage={errors.cpassword}
          />
          <div className="flex justify-center items-center h-full mt-8">
            <Button type="submit" disabled={!isValid}>
              Sign Up
            </Button>
          </div>
          <div className="mt-4 flex justify-end">
            Already have an account?
            <a
              href="/login"
              className="button hidden text-n-1/50 transition-colors hover:text-n-1 lg:block pl-[0.5rem] mt-[0.2rem]"
            >
              Click here
            </a>
          </div>
        </form>
      </Box>
      <ButtonGradient />
    </div>
  );
};

export default SignUp;
