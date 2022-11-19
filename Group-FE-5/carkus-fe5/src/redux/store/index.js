import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listKampusReducer from "../reducer/listKampusReducer";
import listThreadReducer from "../reducer/listThreadReducer";

const allReducer = combineReducers({
  listKampus: listKampusReducer,
  listThread: listThreadReducer
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;
