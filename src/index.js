import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//import redux and react-redux
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bulma/css/bulma.css";
import "./styles.scss";

//import reducer
import { carReducer } from "./reducers/carReducer";

//step2: create dummy reducer for now

//Step 1: Create the store
//
const store = createStore(
  carReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store);

const rootElement = document.getElementById("root");
ReactDOM.render(
  //step 3: wrap the App in the Provider with store
  <Provider store={store}>
    <App props={store} />
  </Provider>,
  rootElement
);
