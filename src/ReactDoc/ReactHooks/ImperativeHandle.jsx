import React, { forwardRef, useImperativeHandle, useState, useRef } from "react";

// #  Toggle components from child to parent without set toggle in parent function

// CHILD

// # 2 import "forwardRef" in child function for allow it to access a ref from parent function
// # 5 import "useImperativeHandle" in child function

// # 3 Add "forwardRef" to the child function
// # 4 Add params "ref" at the end of all params
const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  // # 6 create function with same name as # 6 "useImperativeHandle"
  // # 7 use "raf" param
  useImperativeHandle(
    ref,
    /* function return an object */ () => ({
      // # 8 create a function
      alterToggle() {
        setToggle(!toggle);
      },
    })
  );
  return (
    <div>
      <button>Button from Child</button>
      {toggle && <span>Toggle</span>}
    </div>
  );
});

// PARENT

const ImperativeHandle = () => {
  // #1 declare a variable with "useRef" hook and initialize
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={
          // # 10 Access a function
          () => {
            buttonRef.current.alterToggle();
          }
        }
      >
        Button From Parent
      </button>
      {/* # 9 ref var */}
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
