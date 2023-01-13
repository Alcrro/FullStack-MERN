import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

// # 1 import "useMemo"

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data);
    });
  }, []);

  // This function is recreated every time when page is re-render
  // we use Memo to recreate function only when data is changed or what dependencies we want
  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("This was computed");
    return longestName;
  };

  // # 2 Create function to memorize
  // # 3  first params of "useMemo", recreated and call again  when something in data is  changed
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <>
      <div>{getLongestName}</div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle
      </button>
      {toggle && <h1>toggle</h1>}
    </>
  );
};
export default MemoTutorial;
