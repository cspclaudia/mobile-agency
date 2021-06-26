import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  loginRequest: ["email", "password"],
  loginSuccess: ["token"],
  loginFailed: null,
  logOut: null,
});

export const LoginTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  authorized: false,
  token: null,
  loading: false,
  error: null,
});

export const loading = (state) =>
  state.merge({
    authorized: false,
    token: null,
    loading: true,
  });

export const success = (state, { token }) =>
  state.merge({
    authorized: true,
    token: token,
    loading: false,
  });

export const logout = (state) => {
  return state.merge({
    authorized: false,
    token: null,
  });
};

export const failed = (state) => state.merge({ loading: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: loading,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOG_OUT]: logout,
  [Types.LOGIN_FAILED]: failed,
});
