import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

// import rootReducer from "./reducers";
import GetHero1 from "./get-hero1/reducer";
import GetHero2 from "./get-hero2/reducer";
import GetHero3 from "./get-hero3/reducer";
import GetHero4 from "./get-hero4/reducer";
import GetLawan from "./get-lawan/reducer";

const middleware = [thunk];
const initialState = {};

const reducers = combineReducers({
  GetHero1,
  GetHero2,
  GetHero3,
  GetHero4,
  GetLawan,
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
