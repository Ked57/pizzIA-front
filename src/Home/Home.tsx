import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const App: React.FC = () => {
  const {state, setState} = useContext(AppContext)
  return <>Home</>;
};

export default App;
