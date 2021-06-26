import { all, takeLatest, takeLeading } from "redux-saga/effects";
import { LoginTypes } from "../ducks/login";
import { init, login, logout, loginSuccess } from "./login";
import { RegisterTypes } from "../ducks/register";
import { register, registerSuccess } from "./register";
import { UserTypes } from "../ducks/user";
import { getLoggedInUser } from "./user";

export default function* rootSaga() {
  return yield all([
    init(),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(LoginTypes.LOG_OUT, logout),
    takeLatest(LoginTypes.LOGIN_SUCCESS, loginSuccess),
    takeLatest(UserTypes.USER_REQUEST, getLoggedInUser),
    takeLatest(RegisterTypes.REGISTER_REQUEST, register),
    takeLatest(RegisterTypes.REGISTER_SUCCESS, registerSuccess),
  ]);
}
