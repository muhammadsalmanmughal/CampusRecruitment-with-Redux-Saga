import React from "react";
import ReactDOM from "react-dom";
// import firebase from '../src/config/Firebase'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import Store from './store'

import * as firebase from 'firebase/app'

firebase.initializeApp({
  apiKey: "AIzaSyARfGLHcBWA_n0QxAvEfa6waeSqRHGaW2k",
  authDomain: "campusrecruitment-c9d29.firebaseapp.com",
  projectId: "campusrecruitment-c9d29",
  storageBucket: "campusrecruitment-c9d29.appspot.com",
  messagingSenderId: "645300521672",
  appId: "1:645300521672:web:4dd0b38141b41e071273fd"
});

// Initialize Firebase
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
