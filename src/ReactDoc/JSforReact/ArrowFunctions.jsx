import React from "react";

//Do exact same but with anonymous function can say  export  without default in same row
// in React we define components
// and have anonymous function

export const ArrowFunctions = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Anonymous function");
        }}
      >
        Click
      </button>
    </div>
  );
};

function arrowFunctions2() {
  return <div>arrowFunctions</div>;
}

export default arrowFunctions2;
