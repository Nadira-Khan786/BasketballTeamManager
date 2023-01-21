import {
  ADD_NEW_PLAYER_REQUEST,
  ADD_NEW_PLAYER_REQUEST_SUCCESS,
  ADD_NEW_PLAYER_REQUEST_FAILED,
} from "../action/actionType";

const initialState = {
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

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PLAYER_REQUEST: {
      return {

      }
    }
    case ADD_NEW_PLAYER_REQUEST_SUCCESS: {
      return {
        
      }
    }

    case GET_PRODUCT_ATTRIBUTES_FAILURE: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
