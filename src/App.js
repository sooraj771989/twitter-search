import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Posts from "./containers/Posts";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route path="/key=:id" component={Posts} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
