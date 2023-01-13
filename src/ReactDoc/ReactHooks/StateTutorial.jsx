import React, { useState } from "react";

// Increment number in below working just in console, cannot manipulate the DOM.
// for this situation we use "useState"

// const StateTutorial = () => {
//   let counter = 0;
//   const increment = () => {
//     counter = counter + 1;
//     console.log(counter);
//   };
//   return (
//     <div>
//       {counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default StateTutorial;

//Ex: 1
//Increment a number and manipulate the DOM.

// const StateTutorial = () => {
//   // #1 Declare a variable and initialize with "useState" and variable 0 for first increment number
//   const [counter, setCounter] = useState(0);
//   //Create a function with "prev" params
//   //use "setCounter" of "useState" declare an param "prev" to keep previous increment
//   const increment = () => {
//     setCounter((prev) => counter + 1);
//   };

//   return (
//     <div>
//       {counter}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// };

// export default StateTutorial;

//Ex:2

const StateTutorial = () => {
  // #1 Declare a variable and initialize with "useState" and variable type string "Alex"
  const [inputValue, setInputValue] = useState("Alex");

  let onChange = (event) => {
    //Add a variable witch contain new value
    // "event.target.value" -  access target value inside input
    const newValue = event.target.value;
    // use setInputValue and add newValue variable
    setInputValue(newValue);
  };

  return (
    <div>
      <input type="text" placeholder="Enter Something ....." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;
