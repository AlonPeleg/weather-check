import React, { Fragment, useState, useContext, useEffect } from "react";
import WeatherItem from "./WeatherItem";
import WeatherContext from "../../context/weatherContext";

const Weather = () => {
  const weatherContext = useContext(WeatherContext);
  const { getInfo, info, searchByName } = weatherContext;
  const [isFiltering, setIsFiltering] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  const onChange = e => {
    setSearchTerm(e.target.value);
    searchTerm.length > 0 ? setIsFiltering(true) : setIsFiltering(false);
    isFiltering && searchByName(searchTerm);
  };

  return (
    <Fragment>
      <input
        type="text"
        className="text-center"
        placeholder="Search by city..."
        onChange={onChange}
        value={searchTerm}
      />

      {info.length > 0 &&
        info.map((inf, i) => (
          <div key={i}>
            <div className="col s12 m6">
              <div className="card blue-grey darken-1">
                <WeatherItem inf={inf} />
                <div className="card-action">
                  <a
                    href={inf.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    To Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </Fragment>
  );
};

export default Weather;
