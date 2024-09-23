import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { onlyEmailValidate } from "../../helper/loginValidation"; // Ensure the validate file path is correct
import { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    validate: onlyEmailValidate,
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
          <h1 className="text-3xl text-center font-semibold">Reset Password</h1>
          <form
            className="flex flex-col gap-3 mt-10"
            onSubmit={formik.handleSubmit}
          >
            <label className="flex flex-col">
              Enter Your Email Address:
              <input
                type="text"
                name="email"
                {...formik.getFieldProps("email")}
                placeholder="Enter Email"
              />
              {formik.errors.email && (
                <span className="text-red-500 errors">
                  {formik.errors.email}
                </span>
              )}
            </label>
            {/* OTP Btn */}
            <input
              className="btn text-center text-white bg-blue-600 p-3 border-0 mb-2"
              type="submit"
              value="Sent OTP"
            />
            <p className="text-center text-sm">Can't get OTP? <Link
            to=""
            className=" text-red-800 hover:text-red-600 hover:underline transition duration-200 ease-in-out"
          >
            Resend Again
          </Link></p>
            <label>
              One Time Password
              <input type="number" className="w-full" placeholder="Enter OTP" />
            </label>
            <input
              className="btn text-center text-white bg-blue-600 p-3 border-0 "
              // type="submit"
              value="Submit OTP"
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

export default ResetPassword;
