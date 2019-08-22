import React, { useReducer } from "react";
import axios from "axios";
import WeatherContext from "./weatherContext";
import WeatherReducer from "./weatherReducer";
import { GET_CITIES, SEARCH_CITY } from "./types";

const WeatherState = props => {
  const initialState = {
    info: []
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  // Get all info
  const getInfo = async () => {
    const res = await axios("/getInfo");

    setTimeout(() => {
      dispatch({
        type: GET_CITIES,
        payload: res.data
      });
    }, 2000);
  };

  // Search by name
  const searchByName = async text => {
    dispatch({
      type: SEARCH_CITY,
      payload: text
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        info: state.info,
        getInfo,
        searchByName
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
