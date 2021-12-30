import React from "react";
import ReactDOM from "react-dom";
import store from "./store/index.js";
import { Provider } from "react-redux";
import App from "./App";



ReactDOM.render(
  <Provider store={store}>
   

    <React.StrictMode>
      <App />
    </React.StrictMode>
  
  </Provider>,
  document.getElementById("root")
);

