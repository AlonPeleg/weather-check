import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/weather/Weather";
import Navbar from "./components/layout/Navbar";
import "./App.css";

const App = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get("/getInfo");
      setInfo(res.data);
    }, 2000);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Weather info={info} />
      </div>
    </div>
  );
};

export default App;
