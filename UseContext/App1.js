import React, { useState } from "react";
import Auth from "./Auth";
import AuthContext from "./AuthContext";

const App1 = () => {


const [authstatus, setauthstatus] = useState(false);
const login = () => {
	setauthstatus(true);
};
return (
	<React.Fragment>
	<AuthContext.Provider value={{ status: authstatus, login: login }}>
		<Auth />
	</AuthContext.Provider>
	</React.Fragment>
);
};
export default App1;
