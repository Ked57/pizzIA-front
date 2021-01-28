import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const App: React.FC = () => {
  const {state, setState} = useContext(AppContext)
  return <>state: {state.text}</>;
};

export default App;
