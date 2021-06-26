import { call, put, fork } from "redux-saga/effects";
import api from "../../services/api";
import LoginActions from "../ducks/login";
import UserActions from "../ducks/user";
import NavigationService from "../../services/navigation";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-community/async-storage";

export function* init() {
  const token = yield call([AsyncStorage, "getItem"], "token");

  if (token) {
    yield put(LoginActions.loginSuccess(token));
  }
}

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, "user/login", {
      email,
      password,
    });

    const token = response.data.token;
    const data = response.data;

    if (data.erro) {
      yield put(LoginActions.loginFailed());
      showMessage({
        message: data.erro,
        type: "danger",
      });
    }

    if (data.messages) {
      yield put(LoginActions.loginFailed());
      showMessage({
        message: data.messages,
        type: "danger",
      });
    }

    if (token) {
      yield call([AsyncStorage, "setItem"], "token", token);
      yield call([AsyncStorage, "setItem"], "user", JSON.stringify(data.user));

      yield put(LoginActions.loginSuccess(token));

      NavigationService.navigate("Dashboard");
    }
  } catch (err) {
    yield put(LoginActions.loginFailed());

    showMessage({
      message: err,
      type: "danger",
    });
  }
}

export function* loginSuccess({ token }) {
  try {
    yield put(UserActions.userRequest());
  } catch (err) {
    console.log("err:", err);

    showMessage({
      message: err,
      type: "danger",
    });
  }
}

export function* logout() {
  AsyncStorage.removeItem("token");
  AsyncStorage.removeItem("user");
  NavigationService.navigate("Auth");
}
