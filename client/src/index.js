import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "../src/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { persistor, store } from "../src/Redux/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Auth0Provider
        domain="francodeiriondo.us.auth0.com"
        clientId="r0JRF42qcN1M2GEhi7b3lLHd05pavaB9"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        {/* <React.StrictMode> */}
          <App />
        {/* </React.StrictMode> */}
      </Auth0Provider>
    </PersistGate>
  </Provider>,
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
