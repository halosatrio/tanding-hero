import * as types from "./types";

const initState = {
  hero3: [],
  isLoading: false,
  message: "",
};

export default function GetHero3(state = initState, action) {
  const { hero3, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, hero3, message };
    default:
      return state;
  }
}
