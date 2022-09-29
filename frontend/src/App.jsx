import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmPassword from "./components/auth/ConfirmPassword";
import EmailVerification from "./components/auth/EmailVerification";
import ForgetPassword from "./components/auth/ForgetPassword";
import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound";
import Navbar from "./components/user/Navbar";
import axios from "axios";

const App = () => {
  const [movieName, setMovieName] = useState("");
  const handleOnClick = async () => {
    const { status } = await axios.get(
      "http://localhost:8000/api/imdb/getRatingsByName",
      { params: { movieName } }
    );
    alert(JSON.stringify(status, null, 2));
  };
  return (
    <div className={"bg-blend-darken dark:bg-black "}>
      <Navbar />
      <input
        style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
        onChange={(e) => setMovieName(e.target.value)}
      ></input>
      <button
        style={{ width: "100%", height: "100%", backgroundColor: "#fff" }}
        onClick={() => handleOnClick()}
      >
        OKKK
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/signin" element={<Signin />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/auth/confirm-password" element={<ConfirmPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
