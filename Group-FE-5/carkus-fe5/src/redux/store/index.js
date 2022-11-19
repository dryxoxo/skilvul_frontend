import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import listKampusReducer from "../reducer/listKampusReducer";

const allReducer = combineReducers({
  listKampus: listKampusReducer,
});

const store = createStore(allReducer, applyMiddleware(thunk))
export default store;
