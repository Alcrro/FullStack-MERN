import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";

const App = () => {
  return (
    <Router>
      <a href="/home">Go To Home Page</a>
      {/* <UserAuthProvider> */}
      <Routes>
        <Route exact path="/user/login" element={<Login />}></Route>
        <Route exact path="/user/register" element={<Register />}></Route>

        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
      {/* </UserAuthProvider> */}
    </Router>
  );
};

export default App;
