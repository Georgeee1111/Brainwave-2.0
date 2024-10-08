import Box from "../generalComponents/Box";
import InputField from "../generalComponents/InputField";
import Button from "../generalComponents/Button";
import ButtonGradient from "../../assets/svg/ButtonGradient";
import { useFormik } from "formik";
import { SignupValidation } from "./SignupValidation";
import { Link } from "react-router-dom";

const handleLinkClick = (event, targetId) => {
  const target = document.getElementById(targetId);

  if (target) {
    // If the target is found, it means we're trying to scroll within the same page.
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });

    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  }
  // If the target is not found, we let the default behavior happen, which is navigation.
};

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
          <div className="mt-4 text-center flex flex-col sm:flex-row sm:items-center sm:justify-end sm:text-center">
            <span className="text-center sm:text-left">
              Already have an account?
            </span>
            <Link
              to="/login"
              onClick={(e) => handleLinkClick(e, "login")}
              className="text-n-1/50 transition-colors hover:text-n-1 mt-2 sm:mt-0 sm:ml-2"
            >
              Click here
            </Link>
          </div>
        </form>
      </Box>
      <ButtonGradient />
    </div>
  );
};

export default SignUp;
