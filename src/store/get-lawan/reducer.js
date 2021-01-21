import * as types from "./types";

const initState = {
  data: [],
  isLoading: false,
  message: "",
};

export default function GetLawan(state = initState, action) {
  const { data, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, data, message };
    default:
      return state;
  }
}
