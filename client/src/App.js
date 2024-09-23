import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ActivateAcc from "./components/activateAcc/activateAccount";
import ResetPassword from "./components/resetPassword/resetPassword";
import About from "./components/about/about";
import SetNewPassword from "./components/resetPassword/setNewPassword";
// import Contact from "../components/contact/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/activateAcc" element={<ActivateAcc />} />
          <Route path="/about" element={<About />} />
          <Route path="/setnewpassword" element={<SetNewPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
