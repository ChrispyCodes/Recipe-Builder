import { configureStore, applyMiddleware, compose } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "../reducers";
import { recipe } from "../reducers/recipe";

export const store = configureStore(
  {
    reducer: reducers,
  },
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
