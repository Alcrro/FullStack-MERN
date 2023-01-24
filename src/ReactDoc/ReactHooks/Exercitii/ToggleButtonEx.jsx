import React, { useState } from "react";

const ToggleButton = () => {
  const [showText, setShowText] = useState(true);
  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <button
        onClick={() => {
          //toggle variable showText to true or false
          // setShowText(!showText);
          //toggle variable textColor to toggle between red and black
          setTextColor(textColor === "black" ? "red" : "black");
        }}
      >
        Show/Hide
      </button>
      {/* check if is true */}
      {showText && (
        //color: function to text color
        //set style as useState variable
        <div style={{ color: textColor }}>This is a text witch is hiding or showing</div>
      )}
    </div>
  );
};

export default ToggleButton;
