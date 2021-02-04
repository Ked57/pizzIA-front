import React, { useState } from "react";
import { Router, Route, Switch, BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <div className="text-5xl min-h-screen bg-gray-600 text-white ">
          <Navbar />
          <div className="p-4">
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
          </div>
        </div>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
