import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
