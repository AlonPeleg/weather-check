import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./components/weather/Weather";
import Navbar from "./components/layout/Navbar";
import Spinner from "./components/layout/Spinner";
import "./App.css";

const App = () => {
  const [info, setInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(async () => {
      const res = await axios.get("/getInfo");
      setInfo(res.data);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {!loading ? <Weather info={info} /> : <Spinner />}
      </div>
    </div>
  );
};

export default App;
