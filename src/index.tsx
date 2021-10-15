import { ModeContextProvider } from "contexts/ModeContext";
import { TodoContextProvider } from "contexts/TodoContext";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ModeContextProvider>
        <TodoContextProvider>
          <App />
        </TodoContextProvider>
      </ModeContextProvider>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
