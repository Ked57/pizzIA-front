import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const App: React.FC = () => {
  const {state, setState} = useContext(AppContext)
  setTimeout(() => setState({text: "va te faire foutre bob"}), 5000)
  return <>state: {state.text}</>;
};

export default App;
