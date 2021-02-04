import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppContext, State } from "./AppContext";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Home/Home";
import Pizza from "./Pizza/Pizza";
import Stats from "./Stats/Stats";

const App = () => {
  const [state, setState] = useState<State>({});
  return (
    <AppContext.Provider value={{ state, setState }}>
      <div className="text-5xl">
        <Navbar />
        <div className="h-full bg-gray-600 text-white p-4">
          <Router history={createBrowserHistory()}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/stats">
                <Stats />
              </Route>
              <Route path="/pizza">
                <Pizza />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
