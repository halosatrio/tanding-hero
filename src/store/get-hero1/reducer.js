import * as types from "./types";

const initState = {
  hero1: [],
  isLoading: false,
  message: "",
};

export default function GetHero1(state = initState, action) {
  const { hero1, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, hero1, message };
    default:
      return state;
  }
}
