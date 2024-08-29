import * as Yup from "yup";

export const SignupValidation = Yup.object({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters long")
    .required("Please Enter Name"),
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter Email"),
  password: Yup.string()
    .matches(/[A-Z]/, "Password must contain at least one capital letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one digit")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .min(8, "Password must be at least 8 characters long")
    .test(
      "password-requirements",
      "Password must meet all requirements",
      (value) => {
        return (
          /[A-Z]/.test(value) &&
          /[a-z]/.test(value) &&
          /[0-9]/.test(value) &&
          /[!@#$%^&*(),.?":{}|<>]/.test(value)
        );
      }
    )
    .required("Please Enter Password"),
  cpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Password does not match")
    .required("Please Confirm Password"),
});
