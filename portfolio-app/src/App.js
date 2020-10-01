import React from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
     <h1>Katherine Kumar</h1>
     <h2>Web developer</h2>
     <Header />
     <Switch>
     <Route exact path="/" component={Home} />
     <Route path ="/projects" component={Projects} />
     <Route path="/about" component={About} />
     <Route path="/contact" component={Contact} />
     </Switch>
    </div>
  );
}

export default App;
