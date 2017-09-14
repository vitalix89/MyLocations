import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import inputReducer from "./inputReducer";
import coordsReducer from "./coordsReducer";

export default combineReducers({
  categories: categoryReducer,
  input: inputReducer,
  coords: coordsReducer
});
