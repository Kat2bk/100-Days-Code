import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import NavBar from "./components/NavBar";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <NavBar />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route component={Error} />
      </Switch>
    </div>
  );
}

// we need to set up route params because just using path="single-room" will just access a single single-room page, we want different information for every single room. we do that by using colon : and then the variable we want to call the room "slug" is a stand-in for that info

export default App;
