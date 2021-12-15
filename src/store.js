import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import rootReducers from "./Reducers";
export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(Thunk))
);
