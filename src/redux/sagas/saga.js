import { put, takeLatest } from "redux-saga/effects";
// Import all actions
import {
  ADD_NEW_PLAYER_REQUEST,
  ADD_NEW_PLAYER_REQUEST_SUCCESS,
  SET_LOADING,
  CREATE_NEW_TEAM_REQUEST,
  CREATE_NEW_TEAM_REQUEST_SUCCESS,
} from "../actions";

// add player Details
function* addPlayerData({ payload }) {
  yield put({ type: SET_LOADING });
  yield put({ type: ADD_NEW_PLAYER_REQUEST_SUCCESS, payload });
}

// create team Details
function* addTeamData({ payload }) {
  yield put({ type: CREATE_NEW_TEAM_REQUEST_SUCCESS, payload });
}

// Export the saga (saga)
export default function* Saga() {
  yield takeLatest(ADD_NEW_PLAYER_REQUEST, addPlayerData);
  yield takeLatest(CREATE_NEW_TEAM_REQUEST, addTeamData);
}
