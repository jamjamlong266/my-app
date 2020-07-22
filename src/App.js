import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header";
import Home from "./containers/home";
import About from "./containers/about";

function App() {
  return (
    //jsx
    <Router>
      <Header />
      <Switch>
        <Route path="/about" component={About} />
        <Route excat path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
