import axios from "axios";
import store from "../store";
import LoginActions from "../store/ducks/login";

const api = axios.create({
  baseURL: "http://localhost:3001/api/",
});

api.interceptors.request.use(
  (config, err) => {
    const { token } = store.getState().login;

    const headers = { ...config.headers };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    config.validateStatus = (status) => {
      if (status === 401) {
        // const { signOut } = LoginActions;
        // return store.dispatch(signOut());
      }

      return true;
    };
    return { ...config, headers };
  },
  (err) => {}
);

export default api;
