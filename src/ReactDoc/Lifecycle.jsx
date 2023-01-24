import React, { useState, useEffect } from "react";

const Lifecycle = () => {
  const [showText, setShowText] = useState("");

  useEffect(() => {
    console.log("Merge");
  }, []);

  return (
    <div className="container mt-5">
      <input
        onChange={(e) => {
          setShowText(e.target.value);
        }}
      />
      <button>Show Text</button>

      <h1>{showText}</h1>
    </div>
  );
};

export default Lifecycle;
