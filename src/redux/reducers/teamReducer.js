import {
  CREATE_NEW_TEAM_REQUEST_SUCCESS,
  CREATE_NEW_TEAM_REQUEST_FAILED,
} from "../actions";

const initialState = {
  teamList: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_TEAM_REQUEST_SUCCESS: {
      let data = [...state.teamList, action.payload];
      localStorage.setItem("teamList", JSON.stringify(data));
      return {
        ...state,
        teamList: [...action.payload],
        isLoading: false,
      };
    }

    case CREATE_NEW_TEAM_REQUEST_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default teamReducer;
