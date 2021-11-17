import "./App.css";
import React from "react";
import Home from "./components/Home.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <button className="app__button">
        <Link to="/">Home&nbsp;</Link>
        <Link to="/login">Login&nbsp;</Link>
        <Link to="/register">Register</Link>
      </button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
