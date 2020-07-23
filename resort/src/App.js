import React from 'react';
import './App.css';
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <div>
      <Home />
      <Rooms />
      <Room />
      <Error />
      </div>
    </div>
  );
}

export default App;
