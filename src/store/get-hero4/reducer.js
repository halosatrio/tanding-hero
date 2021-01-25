import * as types from "./types";

const initState = {
  hero4: [],
  isLoading: false,
  message: "",
};

export default function GetHero4(state = initState, action) {
  const { hero4, isLoading, message, type } = action;

  switch (type) {
    case types.LOADING:
      return { ...state, isLoading };
    case types.FETCHING:
      return { ...state, hero4, message };
    default:
      return state;
  }
}
