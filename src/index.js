import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import App from "./components/App";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const firebaseConfig = {
  apiKey: " AIzaSyDDOSvmbFWvVac5CNIHUWneezQighWlriY",
  authDomain: "todo-9b7c8.firebaseapp.com",
  databaseURL: "https://todo-9b7c8.firebaseio.com",
  projectId: "todo-9b7c8",
  storageBucket: " ",
  messagingSenderId: "483364927709",
  appID: "1:483364927709:web:7027a1e82364ba0b"
};

const rrfConfig = {
  userProfile: "users",
  enableLogging: false
};

firebase.initializeApp(firebaseConfig);

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk.withExtraArgument(getFirebase)))
);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector("#root")
);
