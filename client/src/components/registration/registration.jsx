import React from "react";
import "./registration.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { registrationValidation } from "../../helper/registrationValidation"; // Adjust the import path as necessary

const Registration = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: registrationValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      toast.success("Registration successful!");
      navigate("/activateAcc");
    },
  });

  return (
    <section className="container h-screen w-full bg-zinc-800 flex items-center justify-center">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "12px",
            animationDuration: "2s",
          },
        }}
      />

      <div className="w-1/4 bg-white rounded p-8">
        <h1 className="text-5xl text-center font-semibold">Registration</h1>
        <form
          className="flex flex-col gap-3 mt-10"
          onSubmit={formik.handleSubmit}
        >
          <label className="flex flex-col">
            Name:
            <input
              type="text"
              name="name"
              {...formik.getFieldProps("name")}
              placeholder="Enter Name"
            />
            {formik.errors.name && (
              <span className="text-red-500 errors">{formik.errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            Email:
            <input
              // type="email"
              name="email"
              {...formik.getFieldProps("email")}
              placeholder="Enter Email"
            />
            {formik.errors.email && (
              <span className="text-red-500 errors">{formik.errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            Password:
            <input
              type="password"
              name="password"
              {...formik.getFieldProps("password")}
              placeholder="Enter Password"
            />
            {formik.errors.password && (
              <span className="text-red-500 errors">
                {formik.errors.password}
              </span>
            )}
          </label>
          <label className="flex flex-col">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              {...formik.getFieldProps("confirmPassword")}
              placeholder="Enter Confirm Password"
            />
            {formik.errors.confirmPassword && (
              <span className="text-red-500 errors">
                {formik.errors.confirmPassword}
              </span>
            )}
          </label>

          <input
            className=" btn text-white bg-blue-600 p-3 border-0 mt-3"
            type="submit"
            value="Create Account"
          />
        </form>
        <Link
          to="/login"
          className="mt-2 flex justify-center text-sm tracking-normal hover:text-blue-500 hover:underline transition duration-200 ease-in-out"
        >
          Already a user? Login
        </Link>
      </div>
    </section>
  );
};

export default Registration;
