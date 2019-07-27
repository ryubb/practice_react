import { all, fork } from "redux-saga/effects";
import { watchFetchDog } from "./sagaFetchDogs";

export default function* rootSaga() {
  yield all([fork(watchFetchDog)]);
}
