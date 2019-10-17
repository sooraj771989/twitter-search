import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Posts from "./containers/Posts";
import "./App.css";
import Search from "./components/Search/search";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/key=:id" component={Search} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
