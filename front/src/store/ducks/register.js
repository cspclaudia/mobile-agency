import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  registerRequest: ["name", "phone", "email", "password"],
  registerSuccess: null,
  registerFailed: null,
});

export const RegisterTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  token: null,
  loading: false,
  error: null,
});

export const loading = (state) =>
  state.merge({
    token: null,
    loading: true,
  });

export const success = (state, { token }) =>
  state.merge({
    token: token,
    loading: false,
  });

export const failed = (state) => state.merge({ loading: false });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: loading,
  [Types.REGISTER_SUCCESS]: success,
  [Types.REGISTER_FAILED]: failed,
});
