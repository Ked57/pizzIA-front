import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContext, State } from "./AppContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Pizza from "./Pizza/Pizza";

const App = () => {
  const [state, setState] = useState<State>({
    text: "cc bob"
  });
  return (
    <AppContext.Provider value={{state, setState}}>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/stats">
            <Home />
          </Route>
          <Route path="/pizza">
            <Pizza />
          </Route>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
