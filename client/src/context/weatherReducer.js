import { GET_CITIES, SEARCH_CITY } from "./types";

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        info: payload
      };
    case SEARCH_CITY:
      if (payload.length > 0 || payload !== null) {
        return {
          ...state,
          info: state.info.filter(filtered => {
            const regex = new RegExp(`${payload}`, "gi");
            return filtered.cityName.match(regex);
          })
        };
      }
      return state;
    default:
      return state;
  }
};
