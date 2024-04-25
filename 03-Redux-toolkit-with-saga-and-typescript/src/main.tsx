import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./store/index.ts";

/* 
COMMANDS: 
  1. npm i redux
  2. npm i react-redux
  3. npm i @reduxjs/toolkit
  4. npm i redux-saga
*/

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
