import React from "react";
import "./registration.css";
const registration = () => {
  return (
    <>
      <section className="container h-screen w-full bg-zinc-800 flex items-center justify-center">
        <div className="w-1/4 h-3/4 bg-white rounded p-8">
          <h1 className="text-5xl text-center font-semibold ">Registration</h1>
          {/* <div className="w-2/4 h-1/3 bg-black mx-auto mt-5 rounded"></div> */}
          <form className="flex flex-col mt-10">
            <label className="">
              Name:
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Name"
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                placeholder="Enter EMail"
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Password"
              />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                required
                placeholder="Enter Confirm Password"
              />
            </label>
          </form>
        </div>
      </section>
    </>
  );
};

export default registration;
