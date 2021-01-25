import * as types from "./types";

const initState = {
  hero2: [],
  isLoading: false,
  message: "",
};

export default function GetHero2(state = initState, action) {
  const { hero2, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, hero2, message };
    default:
      return state;
  }
}
