import _ from "lodash";

export default (state = {}, action) => {
    switch (action.type) {
        case "FETCH_PLYWOODS":
            return {...state, ..._.mapKeys(action.payload, "id") };
        case "FETCH_PLYWOOD":
            return {...state, ..._.mapKeys([action.payload], "id") };
        case "UPDATE_PLYWOOD":
            return {...state, ..._.mapKeys([action.payload], "id") };
        case "DELETE_PLYWOOD":
            return _.omit(state, action.payload);
        default:
            return state;
    }
};

export const plyMeasurementSelectReducer = (state = "", action) => {
    switch (action.type) {
        case "PLY_MEASUREMENT_SELECT":
            return action.payload;

        default:
            return state;
    }
};

export const plyMmSelectReducer = (state = "", action) => {
    switch (action.type) {
        case "PLY_MM_SELECT":
            return action.payload;

        default:
            return state;
    }
};