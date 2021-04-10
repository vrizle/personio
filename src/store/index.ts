import { combineReducers, Reducer } from "redux";
import apiCallSaga from "./sagas/apiCallSaga";
import { fork, all } from "redux-saga/effects";
export interface RootState {
}

export const createRootReducer = (): Reducer<any> =>
  combineReducers({});

export function* rootSaga(): Generator {
  yield all([fork(apiCallSaga)]);
}
