import * as types from "./types";

const initState = {
  lawan: [],
  isLoading: false,
  message: "",
};

export default function GetLawan(state = initState, action) {
  const { lawan, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, lawan, message };
    default:
      return state;
  }
}
