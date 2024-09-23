import React from "react";

const about = () => {
  return (
    <>
      <section className="container h-screen w-full bg-zinc-800 flex items-center justify-center">
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

        <div className="w-1/4 bg-white rounded p-8">
          <h1 className="text-5xl text-center font-semibold">About</h1>
        </div>
      </section>
    </>
  );
};

export default about;
