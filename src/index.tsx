import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { storeSetup } from "./redux/index";
import { Provider } from "react-redux";
const store = storeSetup();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
