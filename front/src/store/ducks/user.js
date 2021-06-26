import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  userRequest: null,
  userSuccess: ["data"],
  userError: null,
});

export const UserTypes = Types;
export default Creators;

const INITIAL_STATE = Immutable({
  data: null,
  loaded: false,
  loading: false,
  erro: false,
});

export const loading = (state) =>
  state.merge({ loaded: false, data: null, loading: true, erro: false });

export const success = (state, { data }) => {
  return state.merge({ loaded: true, data: data, loading: false, erro: false });
};

export const error = (state) =>
  state.merge({ loaded: false, data: null, loading: false, erro: true });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.USER_REQUEST]: loading,
  [Types.USER_SUCCESS]: success,
  [Types.USER_ERROR]: error,
});
