import React from "react";
import { Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default Home;
