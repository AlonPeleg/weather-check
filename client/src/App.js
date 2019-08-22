import React from "react";
import Weather from "./components/weather/Weather";
import Navbar from "./components/layout/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Weather />
    </div>
  );
}

export default App;
