import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import UserActions from "../ducks/user";

export function* getLoggedInUser() {
  try {
    const response = yield call(api.get, "/user/info");
    yield put(UserActions.userSuccess(response.data.user));
  } catch (err) {
    yield put(UserActions.userError());
  }
}
