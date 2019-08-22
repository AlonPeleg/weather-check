import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";

const Weather = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setTimeout(async () => {
      const res = await axios.get("/getInfo");
      setInfo(res.data);
    }, 5000);
  }, []);
  return (
    <Fragment>
      {info.length > 0 && info.map((inf, i) => <h1 key={i}>{inf.cityName}</h1>)}
    </Fragment>
  );
};

export default Weather;
