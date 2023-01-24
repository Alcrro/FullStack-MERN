//Importam  {useState}
import React, { useState } from "react";

const LiveText = () => {
  //declaram cei 2 parametrii ai constantei si o egalam cu useState("") si o initializam cu un string gol
  const [input, setInput] = useState("");

  const inputLive = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={inputLive} />
      {input}
    </div>
  );
};

export default LiveText;
