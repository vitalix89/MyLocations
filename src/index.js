import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, BrowserRouter as Router } from "react-router-dom";
import reducers from "./reducers";

import Store from "./store";

import App from "./components/app";
import Main from "./components/main";

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
