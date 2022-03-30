import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";

function Login() {
  const { setUsername } = useContext(AppContext);
//const setUsername = useContext(AppContext).setUsername;
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
    </div>
  );
}

export default Login;