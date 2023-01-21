import { spawn } from "redux-saga/effects";

// Sagas
import playerSaga from "./saga";

// Export the root saga
export default function* rootSaga() {
  console.log("Hello From Redux-Saga!");
  yield spawn(playerSaga);
}
