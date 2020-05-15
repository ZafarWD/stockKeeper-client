import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import plywoodsReducer from "./plywoodsReducer";
import {
  plyMeasurementSelectReducer,
  plyMmSelectReducer,
} from "./plywoodsReducer";
import boardsReducer from "./boardsReducer";
import {
  boardMeasurementSelectReducer,
  boardMmSelectReducer,
} from "./boardsReducer";
import doorsReducer from "./doorsReducer";
import {
  doorMeasurementSelectReducer,
  doorMmSelectReducer,
} from "./doorsReducer";

export default combineReducers({
  plywoods: plywoodsReducer,
  plyQuery: plyMeasurementSelectReducer,
  plyMmQuery: plyMmSelectReducer,
  boards: boardsReducer,
  boardQuery: boardMeasurementSelectReducer,
  boardMmQuery: boardMmSelectReducer,
  doors: doorsReducer,
  doorQuery: doorMeasurementSelectReducer,
  doorMmQuery: doorMmSelectReducer,
  form: formReducer,
});
