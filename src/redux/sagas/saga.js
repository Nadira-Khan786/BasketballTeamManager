import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
// Import all actions
import {
  ADD_NEW_PLAYER_REQUEST,
  ADD_NEW_PLAYER_REQUEST_SUCCESS,
  ADD_NEW_PLAYER_REQUEST_FAILED,
  SET_LOADING
} from "../actions";

function* AddPlayerData({payload}) {
  yield put({ type: SET_LOADING });
  yield put({ type: ADD_NEW_PLAYER_REQUEST_SUCCESS, payload });
}

// // Set the title of todo
// function* setTodoTitle({ payload }) {
//   yield put({ type: SET_TODO_TITLE, payload });
// }

// // Create Todo
// function* createTodo({ payload }) {
//   yield put({ type: SET_LOADING });

//   const newTodo = yield call(createNewTodo, payload);

//   yield put({ type: CREATE_TODO, payload: newTodo });

//   // Clear todo after creating
//   yield put({ type: CLEAR_TODO_TITLE });
// }

// // Delete todo
// function* deleteTodo({ payload }) {
//   yield put({ type: SET_LOADING });

//   const todo = yield call(deleteExistedTodo, payload);

//   yield put({ type: DELETE_TODO, payload: todo });
// }

// Export the saga (todo-saga)
export default function* todoSaga() {
  yield takeLatest(ADD_NEW_PLAYER_REQUEST, AddPlayerData);
  //   yield takeEvery(SET_TODO_TITLE_REQUESTED, setTodoTitle);
  //   yield takeLatest(CREATE_TODO_REQUESTED, createTodo);
  //   yield takeEvery(DELETE_TODO_REQUESTED, deleteTodo);
}
