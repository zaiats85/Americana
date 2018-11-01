import React from "react";
import App from "./App";
import { render } from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor, history } from "./store"
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history}/>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
