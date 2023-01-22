import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import teamReducer from "./teamReducer";

const rootReducer = combineReducers({
  playerReducer,
  teamReducer,
});

export default rootReducer;
