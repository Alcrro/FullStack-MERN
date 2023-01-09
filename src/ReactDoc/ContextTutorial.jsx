import React, { createContext, useContext, useState } from "react";

// #6 import to child "useContext"
// #7 import {AppContext} from location

// # 2 remove  props from child
export const Login = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
};
// # 2 remove  props from child
export const User = () => {
  // add const wit "username" from AppContext  and use "useContext" and initialize with "AppContext" from import
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>User: {username}</h1>
    </div>
  );
};

//if we have to many pros we can use "useContext"

// # 3 import "createContext" in context file

// # 4 declare variable, export it  and add value "createContext"
export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    // # 5 add "AppContext.Provider" and inside will we have access to the states
    <AppContext.Provider value={{ username, setUsername }}>
      {/* #1 remove props (setUsername={setUsername} and username={username})  */}
      <Login /> <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;
