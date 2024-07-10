import { combineReducers } from "redux";
import contactReducer from "./slices/contact";

export default combineReducers({
  contact: contactReducer,
});
