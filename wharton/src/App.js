import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
// import Home from "../components/home/home";
import About from "./components/about/about";
// import Contact from "../components/contact/contact";

function App() {
  return (
    <>
      {/* <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer /> */}
      <Registration />
    </>
  );
}

export default App;
