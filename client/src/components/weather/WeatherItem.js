import React from "react";

const WeatherItem = ({ inf }) => {
  const { allInfo, cityName } = inf;
  return (
    <div className="card-content white-text row">
      <div className="col s6">
        <span className="card-title">{cityName}</span>
        <p>Temp: {allInfo[0]}</p>
        <p>
          <i className={allInfo[2] === "Haze." ? "fas fa-smog" : "fas fa-sun"} />{" "}
          {allInfo[2]}
        </p>
        {allInfo[0] !== allInfo[1] && <p>Feels Like: {allInfo[1]}</p>}
      </div>
      <div className="col s6">
        <p>Wind Speed: {allInfo[6]}</p>
        <p>Wind Direction: {allInfo[8]}</p>
        <p>Humidity: {allInfo[10]}</p>
      </div>
    </div>
  );
};

export default WeatherItem;
