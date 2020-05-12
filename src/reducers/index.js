import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import plywoodsReducer from "./plywoodsReducer";
import {
    plyMeasurementSelectReducer,
    plyMmSelectReducer,
} from "./plywoodsReducer";

export default combineReducers({
    plywoods: plywoodsReducer,
    plyQuery: plyMeasurementSelectReducer,
    plyMmQuery: plyMmSelectReducer,
    form: formReducer,
});