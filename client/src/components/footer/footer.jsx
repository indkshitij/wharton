import React from "react";

const footer = () => {
  return (
    <>
      <section className="container h-28 w-full bg-zinc-800 flex items-center justify-center">
        {/* <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              fontSize: "12px",
              animationDuration: "2s",
            },
          }}
        /> */}

        <div className="bg-white rounded p-2">
          <h1 className="text-2xl text-center font-semibold">Footer</h1>
        </div>
      </section>
    </>
  );
};

export default footer;
