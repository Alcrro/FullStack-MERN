import React, { useState } from "react";
import Footer from "../../components/ui/_test_/Footer";
import Navbar from "../../components/ui/_test_/Navbar";
import Card from "../../components/ui/_test_/Card";
import NavbarMenu from "../../components/ui/_test_/NavbarMenu";
import ReducerTutorial from "../../ReactDoc/ReducerTutorial";
import EffectTutorial from "../../ReactDoc/EffectTutorial";
import RefTutorial from "../../ReactDoc/RefTutorial";
import LayoutEffectTutorial from "../../ReactDoc/LayoutEffectTutorial";
import ImperativeHandle from "../../ReactDoc/ImperativeHandle";
import ContextTutorial from "../../ReactDoc/ContextTutorial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarMenu />
      <div className="container text-center">
        <h1>ReducerTutorial</h1>
        <ReducerTutorial />
        <hr />
        <h1>EffectTutorial</h1>
        <EffectTutorial />
        <hr />
        <h1>RefTutorial</h1>
        <RefTutorial />
        <hr />
        <h1>LayoutEffectTutorial</h1>
        <LayoutEffectTutorial />
        <hr />
        <h1>ImperativeHandleTutorial</h1>
        <ImperativeHandle />
        <hr />
        <h1>ContextTutorial</h1>
        <ContextTutorial />
      </div>
      {/* <Card /> */}
      <Footer />
    </div>
  );
};

export default Home;
