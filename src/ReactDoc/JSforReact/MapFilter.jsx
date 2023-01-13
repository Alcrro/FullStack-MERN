import React, { useState } from "react";

const MapFilter = () => {
  const names = ["Alex", "Cristian", "Roventa"];
  const namesFiler = ["AlexR", "CristianR", "RoventaR", "RoventaR", "RoventaR", "RoventaR"];

  //map
  //ex 1 : how to add "1" in each items in names array

  names.map((name) => {
    const test = name;
    console.log(test);
    return <h1>{test}</h1>;
  });

  //filter

  namesFiler.filter((name) => {
    const nameRet = name !== "RoventaR";
    console.log(nameRet);
    return nameRet;
  });
};

export default MapFilter;
