import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_DOORS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_DOOR":
      return { ...state, ..._.mapKeys([action.payload], "id") };
    case "UPDATE_DOOR":
      return { ...state, ..._.mapKeys([action.payload], "id") };
    case "DELETE_DOOR":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export const doorMeasurementSelectReducer = (state = "", action) => {
  switch (action.type) {
    case "DOOR_MEASUREMENT_SELECT":
      return action.payload;

    default:
      return state;
  }
};

export const doorMmSelectReducer = (state = "", action) => {
  switch (action.type) {
    case "DOOR_MM_SELECT":
      return action.payload;

    default:
      return state;
  }
};
