import React, { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./app";

const Root = () => (
  <Provider store={store}>
    <Fragment>
      <App />
      
    </Fragment>
  </Provider>
);

export default Root;
