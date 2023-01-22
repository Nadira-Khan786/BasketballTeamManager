import {
  CREATE_NEW_TEAM_REQUEST_SUCCESS,
  CREATE_NEW_TEAM_REQUEST_FAILED,
  SET_LOADING,
} from "../actions";


const initialState = {
  teamList: [],
};

const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case CREATE_NEW_TEAM_REQUEST_SUCCESS: {
      let data = [...state.teamList, action.payload];
      localStorage.setItem("teamList", JSON.stringify(data));
      return {
        ...state,
        teamList: [...state.teamList, action.payload],
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
