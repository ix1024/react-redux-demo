import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducers from "./reducers/counter";
import "./styles.css";
const store = createStore(reducers);
const rootElement = document.getElementById("root");

function App() {
  return (
    <div className="App">
      {store.getState()}
      <button
        onKeyPress={() => {
          store.dispatch({ type: "ADD" });
        }}
      >
        ADD
      </button>
    </div>
  );
}

const render = () => {
  ReactDOM.render(<App />, rootElement);
};
render();
store.subscribe(render);
