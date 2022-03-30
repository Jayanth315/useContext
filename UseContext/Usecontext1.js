import React, { useState, createContext } from "react";
//import Login from "./Login";
//import User from "./User";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");
let obj={
  "username":username,
  "setUsername":setUsername
}
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      
    </AppContext.Provider>
  );
}

export default ContextTutorial;
