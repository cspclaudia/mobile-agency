import { call, put, fork } from "redux-saga/effects";
import api from "../../services/api";
import RegisterActions from "../ducks/register";
import NavigationService from "../../services/navigation";
import { showMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-community/async-storage";

export function* init() {
  console.log("register init");
}

export function* register({ name, phone, email, password }) {
  try {
    const response = yield call(api.post, "user/register", {
      Name: name,
      Phone: phone,
      Email: email,
      Password: password,
    });

    const token = response.data.token;
    const data = response.data;

    if (data.error) {
      showMessage({
        message: "Ops! Verifique se tudo está correto.",
        type: "warning",
      });
      yield put(RegisterActions.registerFailed());
    }

    if (token) {
      yield put(RegisterActions.registerSuccess(token));
    }
  } catch (err) {
    yield put(RegisterActions.registerFailed());
  }
}

export function* registerSuccess({ token }) {
  try {
    showMessage({
      message: "Cadastro realizado com sucesso ! ! !",
      type: "success",
    });
  } catch (err) {
    yield put(RegisterActions.registerFailed());
  }
}
