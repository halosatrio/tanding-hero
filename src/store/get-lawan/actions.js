import axios from "axios";
import * as types from "./types";
import { randomNumber } from "../utils/generateRandom";

const key = process.env.REACT_APP_API_KEY;
const id = randomNumber(1, 731);
const loading = (isLoading = true) => ({ type: types.LOADING, isLoading });

export const fetchData = (dispatch) => {
  dispatch(loading());
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const options = {
    url: `${proxyurl}https://superheroapi.com/api/${key}/${id}`,
    method: "GET",
    mode: "cors",
  };

  axios(options)
    .then((result) => {
      const data = result?.data?.data;
      dispatch({ type: types.FETCHING, data, message: "" });
      dispatch(loading(false));
    })
    .catch((error) => {
      const message =
        `${error?.response?.status} ${error?.response?.statusText}` || "";
      dispatch({ type: types.FETCHING, data: [], message });
      dispatch(loading(false));
    });
};
