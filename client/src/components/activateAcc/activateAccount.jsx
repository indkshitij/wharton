import React from "react";
import { Link } from "react-router-dom";
import formik, { useFormik } from "formik";
import { emailValidate } from "../../helper/loginValidation"; // Ensure the validate file path is correct
import toast, { Toaster } from "react-hot-toast";

const ActivateAccount = () => {
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

        <div className="w-1/3 bg-white rounded p-8">
          <h1 className="text-3xl text-center font-semibold">
            Activate Your Account
          </h1>

          <form
            className="flex flex-col gap-3 mt-10"
            // onSubmit={formik.handleSubmit}
          >
            <p className=" text-sm text-center text-gray-600">
              Enter 6 digit pin send to your registered Email address
            </p>
            {/* <label>
              One Time Password */}
            <input type="number" className="w-full" placeholder="Enter OTP" />
            {/* </label> */}
            <input
              className="btn text-center text-white bg-blue-600 p-3 border-0 mt-5 "
              type="submit"
              value="Submit OTP"
            />
          </form>
          <p className="text-center text-sm mt-5">Can't get OTP? <Link
            to=""
            className=" text-red-800 hover:text-red-600 hover:underline transition duration-200 ease-in-out"
          >
            Resend Again
          </Link></p>
          
        </div>
      </section>
    </>
  );
};

export default ActivateAccount;
