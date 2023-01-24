import React, { useState } from "react";

const ListPlanets = () => {
  //Lista Planete
  const planets = [
    {
      name: "Mars",
      isGasPlanet: false,
    },
    {
      name: "Earth",
      isGasPlanet: false,
    },
    {
      name: "Jupiter",
      isGasPlanet: true,
    },
    {
      name: "Venus",
      isGasPlanet: false,
    },
    {
      name: "Neptune",
      isGasPlanet: true,
    },
    {
      name: "Uranus",
      isGasPlanet: true,
    },
  ];

  //vrem sa trecem prin fiecare index si sa afisam numele fiecarei planete cu conditia sa aibe "gas planet"
  return (
    <div>
      {Object.entries((planet, key) => {
        return <Afiseaza planetName={planet} key={key} isGasPlanet={planet} />;
      })}
      <Increase />
    </div>
  );
};

const Afiseaza = (props) => {
  const nume = props.planetName;
  const isGas = props.isGasPlanet;
  console.log(props);
  return <div>{isGas && <h4>{nume}</h4>}</div>;
};

const Increase = () => {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }
  function DecreaseCounter() {
    setCount(count - 1);
  }
  function SetToZero() {
    setCount(0);
  }

  return (
    <div>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={DecreaseCounter}>Decrease</button>
      <button onClick={SetToZero}>Set to 0</button>

      {count}
    </div>
  );
};

export default ListPlanets;
