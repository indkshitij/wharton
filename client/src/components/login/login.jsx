import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";
import { emailValidate } from "../../helper/loginValidation"; // Ensure the validate file path is correct
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const formik = useFormik({
    initialValues: { 
      email: "",
      password: "",
    },
    validate: emailValidate,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <section className="container h-screen w-full bg-blue-200 flex items-center justify-center">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="w-1/4 bg-white rounded p-8">
        <h1 className="text-5xl text-center font-semibold">Login</h1>
        <form className="flex flex-col gap-3 mt-10" onSubmit={formik.handleSubmit}>
          <label className="flex flex-col">
            Email:
            <input
              {...formik.getFieldProps("email")}
              // type="email"
              name="email"
              // required
              placeholder="Enter EMail"
            />
            {formik.errors.email ? (
              <span className="text-red-500 errors">{formik.errors.email}</span>
            ) : null}
          </label>
          <label className="flex flex-col">
            Password:
            <input
              {...formik.getFieldProps("password")}
              type="password"
              name="password"
              // required
              placeholder="Enter Password"
            />
            {formik.errors.password ? (
              <span className="text-red-500 errors">{formik.errors.password}</span>
            ) : null}
          </label>
          <input
            className="btn text-white bg-blue-600 p-3 border-0 mt-3"
            type="submit"
            name="submit"
            value="Login"
          />
        </form>
        <Link
          to="/registration"
          className="mt-2 flex justify-center text-sm hover:underline tracking-normal hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Not A User? Create Account
        </Link>
        <Link
          to="/resetpassword"
          className="mt-2 flex justify-center text-sm hover:underline tracking-normal hover:text-blue-500 transition duration-200 ease-in-out"
        >
          Reset Password
        </Link>
      </div>
    </section>
  );
};

export default Login;
