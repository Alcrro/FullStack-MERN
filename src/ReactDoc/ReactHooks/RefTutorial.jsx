import React, { useRef } from "react";

// useRef - ease way to access and manipulate DOM element

const RefTutorial = () => {
  // #1 Declare a variable and initialize with null
  const inputRef = useRef(null);

  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <div>
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};

export default RefTutorial;
