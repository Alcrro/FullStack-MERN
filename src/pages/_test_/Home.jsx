import React, { useState } from "react";
import Footer from "../../components/ui/_test_/Footer";
import Navbar from "../../components/ui/_test_/Navbar";
import Card from "../../components/ui/_test_/Card";
import NavbarMenu from "../../components/ui/_test_/NavbarMenu";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarMenu />
      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default Home;
