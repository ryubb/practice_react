import { put, call, takeEvery } from "redux-saga/effects";

import apiRailsClient from "../config/apiRailsClient";
import {
  requestTodo,
  requestTodoSuccess,
  requestTodoError
} from "../reducers/fetchTodo";

// Sagas
export function* watchFetchTodo() {
  console.log("watchFetchTodo");
  yield takeEvery("FETCHED_TODO", fetchTodoAsync);
}

function* fetchTodoAsync() {
  try {
    yield put(requestTodo());
    const data = yield call(() => {
      return apiRailsClient
        .get("/v1/todos", {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(res => res.data.data);
    });
    yield put(requestTodoSuccess(data));
  } catch (error) {
    yield put(requestTodoError());
  }
}
