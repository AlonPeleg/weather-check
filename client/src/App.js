import React, { useEffect, useState } from "react";

import WeatherState from "./context/WeatherState";
import Weather from "./components/weather/Weather";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <WeatherState>
      <div className="App">
        <Navbar />
        <div className="container">{!loading ? <Weather /> : <Spinner />}</div>
      </div>
    </WeatherState>
  );
};

export default App;
