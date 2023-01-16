import React, { useState } from "react";
import Footer from "../../components/ui/_test_/Footer";
import Navbar from "../../components/ui/_test_/Navbar";
import NavbarMenu from "../../components/ui/_test_/NavbarMenu";
import Product from "./shop/product";
import { CardData } from "../../products";
import Filter from "../../components/ui/_test_/Filter";

const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <NavbarMenu /> */}
      <div className="container ">
        <Filter />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
