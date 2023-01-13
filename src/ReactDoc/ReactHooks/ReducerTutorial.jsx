import React, { useReducer } from "react";

// #2 Create function reducer() with 2 params:
// state  - constant access to current state values inside function
// action - a way of determine what kind of action will we take
const reducer = (state, action) => {
  // action.type - type of action
  switch (action.type) {
    // "INCREMENT" - name of the action
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerTutorial = () => {
  // const [count,setCount] = useState(0);
  // const [showText, setshowText] = useState(true)

  // We can use "useState", but if we have to many states we can use "useReducer"

  // #1 Create single state declaration
  // state 		- variable witch hold all states
  // dispatch - function used to change the values of our states
  // reducer  - function witch will be create
  // {count: 0, showText:true }		- initial values
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  return (
    <div>
      {/* collection of state */}
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          // Call one of the function
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click Here
      </button>
      {/* collection of state */}
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
