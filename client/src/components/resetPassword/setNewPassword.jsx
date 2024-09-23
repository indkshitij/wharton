import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { onlyPasswordValidate } from "../../helper/loginValidation"; // Ensure the validate file path is correct
import { Toaster } from "react-hot-toast";

const SetNewPassword = () => {
  const formik = useFormik({
    initialValues: { password: "", confirmpassword: "" },
    validate: onlyPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
  });
  return (
    <>
      <section className="container h-screen w-full bg-blue-200 flex items-center justify-center">
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
          <h1 className="text-2xl text-center font-semibold">Create New Password</h1>
          <form
            className="flex flex-col gap-3 mt-8"
            onSubmit={formik.handleSubmit}
          >
            <label className="flex flex-col">
              Enter New Password
              <input
                type="text"
                name="password"
                {...formik.getFieldProps("password")}
                placeholder="Enter Email"
              />
              {formik.errors.email && (
                <span className="text-red-500 errors">
                  {formik.errors.email}
                </span>
              )}
            </label>
            <label className="flex flex-col">
              Confirm Password
              <input
                type="text"
                name="confirmpassword"
                {...formik.getFieldProps("confirmPassword")}
                placeholder="Confirm Password"
              />
              {formik.errors.email && (
                <span className="text-red-500 errors">
                  {formik.errors.email}
                </span>
              )}
            </label>
            <input
              className=" mt-4 btn text-center text-white bg-blue-600 p-3 border-0 "
              type="submit"
              value="Set Password"
            />
          </form>

          <Link
            to="/login"
            className="mt-2 flex justify-center text-sm tracking-normal hover:text-blue-500 hover:underline transition duration-200 ease-in-out"
          >
            Go to Login Page
          </Link>
        </div>
      </section>
    </>
  );
};

export default SetNewPassword;
