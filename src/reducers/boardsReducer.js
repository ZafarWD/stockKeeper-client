import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_BOARDS":
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case "FETCH_BOARD":
      return { ...state, ..._.mapKeys([action.payload], "id") };
    case "UPDATE_BOARD":
      return { ...state, ..._.mapKeys([action.payload], "id") };
    case "DELETE_BOARD":
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export const boardMeasurementSelectReducer = (state = "", action) => {
  switch (action.type) {
    case "BOARD_MEASUREMENT_SELECT":
      return action.payload;

    default:
      return state;
  }
};

export const boardMmSelectReducer = (state = "", action) => {
  switch (action.type) {
    case "BOARD_MM_SELECT":
      return action.payload;

    default:
      return state;
  }
};
