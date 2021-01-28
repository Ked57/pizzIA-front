import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppContext, State } from "./AppContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Pizza from "./Pizza/Pizza";

const App = () => {
  const [state, setState] = useState<State>({});
  return (
    <AppContext.Provider value={{ state, setState }}>
      <Navbar />
      <div className="h-full bg-gray-600 text-white">
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/stats">
              <Home />
            </Route>
            <Route path="/pizza">
              <Pizza />
            </Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
};

export default App;
