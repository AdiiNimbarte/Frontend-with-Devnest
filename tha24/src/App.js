import React, { useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./router/Home";
import About from "./router/About";
import Profile from "./router/Profile";
import Dashboard from "./router/Dashboard";
import Assemble from "./router/Assemble";
function App() {
  const [login, setLogin] = useState(false);
  return (
    <div className="App">
      <Router>
        <Assemble login={login} setLogin={setLogin} />
        <Switch>
          <Route exact path="/home">
            <Home login={login} setLogin={setLogin} />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
