import { ModeContextProvider } from "context/ModeContext";
import { TodoContextProvider } from "context/TodoContext";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ModeContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
