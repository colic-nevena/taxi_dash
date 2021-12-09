import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import DependencyContainer from "./dependency/DependencyContainer";

import App from "./gui/App";
import Store from "./gui/redux/Store";

import reportWebVitals from "./reportWebVitals";

export const dependencyContainer = new DependencyContainer();
(async () => {
  dependencyContainer.createDependency(process.env); 
})()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={Store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch((err) => {
    console.error(err);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
