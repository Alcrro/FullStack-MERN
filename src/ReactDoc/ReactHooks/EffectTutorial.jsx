import React, { useEffect, useState } from "react";
import axios from "axios";

//Works with API

// #1 Install "axios"
// #2 Import axios
// "useEffect" - function will be called when the page is re-render

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  // Add "useEffect" function and called every single time when state is changed
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[0].email);
      console.log("api was called");
    });
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
};

export default EffectTutorial;
