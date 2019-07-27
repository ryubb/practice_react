import { all, fork } from "redux-saga/effects";
import { watchFetchDog } from "./sagaFetchDog";
import { watchFetchTodo } from "./sagaFetchTodo";

export default function* rootSaga() {
  yield all([fork(watchFetchDog), fork(watchFetchTodo)]);
}
