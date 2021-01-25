import axios from "axios";
import * as types from "./types";

const key = process.env.REACT_APP_API_KEY;
const loading = (isLoading = true) => ({ type: types.LOADING, isLoading });

export const fetchData = (id) => (dispatch) => {
  dispatch(loading());
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const options = {
    url: proxyurl + "https://superheroapi.com/api/" + key + "/" + id,
    // url: `${proxyurl}https://superheroapi.com/api/${key}/${id}`,
    method: "GET",
    mode: "cors",
  };

  axios(options)
    .then((result) => {
      const hero4 = {
        id: result?.data?.id,
        name: result?.data?.name,
        image: result?.data?.image.url,
        intelligence: result?.data?.powerstats.intelligence,
        strength: result?.data?.powerstats.strength,
        speed: result?.data?.powerstats.speed,
        durability: result?.data?.powerstats.durability,
        power: result?.data?.powerstats.power,
        combat: result?.data?.powerstats.combat,
      };
      dispatch({ type: types.FETCHING, hero4, message: "" });
      dispatch(loading(false));
    })
    .catch((error) => {
      const message =
        `${error?.response?.status} ${error?.response?.statusText}` || "";
      dispatch({ type: types.FETCHING, hero4: [], message });
      dispatch(loading(false));
    });
};
