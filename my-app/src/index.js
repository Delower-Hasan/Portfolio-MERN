import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "./context";
import { Provider } from "react-redux";
import store from "./store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store = {store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
