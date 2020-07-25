import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Error from "./pages/Error";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/rooms/:slug" component={Room} />
      </Switch>
    </div>
  );
}

// we need to set up route params because just using path="single-room" will just access a single single-room page, we want different information for every single room. we do that by using colon : and then the variable we want to call the room "slug" is a stand-in for that info

export default App;
