import React, { Fragment, useState } from "react";
import WeatherItem from "./WeatherItem";

const Weather = ({ info }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const onChange = e => {
    setSearchTerm(e.target.value);

    console.log(searchTerm);
  };

  return (
    <Fragment>
      <form>
        <input
          type="text"
          className="text-center"
          placeholder="Search by city..."
          onChange={onChange}
          value={searchTerm}
        />
      </form>
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
