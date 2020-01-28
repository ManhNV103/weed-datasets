import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home.js";
import Description from "./Description.js";
import Contact from "./Contact.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router basename="/weed-datasets">
        <Route path="/" exact component={Home} />
        <Route path="/des/:value" component={Description} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
