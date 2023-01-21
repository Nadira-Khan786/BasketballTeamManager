import {
  ADD_NEW_PLAYER_REQUEST_SUCCESS,
  ADD_NEW_PLAYER_REQUEST_FAILED,
  SET_LOADING,
} from "../actions";

const initialState = {
  isLoading: false,
  listPlayers: [],
  PostionList: [
    "Point Guard (PG)",
    "Shooting Guard (SG)",
    "Small Forward (SF)",
    "Power Forward (PF)",
    "center (C)",
  ],
  teamList: [],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case ADD_NEW_PLAYER_REQUEST_SUCCESS: {
      return {
        ...state,
        listPlayers: [...state.listPlayers, action.payload],
        isLoading: false,
      };
    }

    case ADD_NEW_PLAYER_REQUEST_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default playerReducer;
