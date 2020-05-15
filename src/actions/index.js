import axios from "axios";
import history from "../history";
import updateForm from "../utils/updateStocks";

const endPoint = "http://localhost:4001";

// -------------------------PLYWOODS------------------------------------------

export const fetchPlywoods = () => async (dispatch) => {
  const response = await axios.get(`${endPoint}/plywoods`);
  dispatch({ type: "FETCH_PLYWOODS", payload: response.data });
};

export const fetchPlywood = (id) => async (dispatch) => {
  const response = await axios.get(`${endPoint}/plywoods/${id}`);
  dispatch({ type: "FETCH_PLYWOOD", payload: response.data });
};

export const updatePlywood = (id, formValues) => async (dispatch) => {
  const updatedForm = updateForm(formValues);
  const response = await axios.patch(`${endPoint}/plywoods/${id}`, updatedForm);
  dispatch({ type: "UPDATE_PLYWOOD", payload: response.data });
  history.push("/");
};

export const plyMeasurementSelect = (query) => {
  return { type: "PLY_MEASUREMENT_SELECT", payload: query };
};

export const plyMmSelect = (query) => {
  return { type: "PLY_MM_SELECT", payload: query };
};

export const createPlywood = (formValues) => async (dispatch) => {
  const response = await axios.post(`${endPoint}/plywoods`, formValues);
  dispatch({ type: "CREATE_PLYWOOD", payload: response.data });
  history.push("/plywoods");
};

export const deletePlywood = (id) => async (dispatch) => {
  await axios.delete(`${endPoint}/plywoods/${id}`);
  dispatch({ type: "DELETE_PLYWOOD", payload: id });
  history.replace("/");
};

//--------------------------------BOARDS---------------------------------------

export const fetchBoards = () => async (dispatch) => {
  const response = await axios.get(`${endPoint}/boards`);
  dispatch({ type: "FETCH_BOARDS", payload: response.data });
};

export const fetchBoard = (id) => async (dispatch) => {
  const response = await axios.get(`${endPoint}/boards/${id}`);
  dispatch({ type: "FETCH_BOARD", payload: response.data });
};

export const updateBoard = (id, formValues) => async (dispatch) => {
  const updatedForm = updateForm(formValues);
  const response = await axios.patch(`${endPoint}/boards/${id}`, updatedForm);
  dispatch({ type: "UPDATE_BOARD", payload: response.data });
  history.replace("/boards");
};

export const boardMeasurementSelect = (query) => {
  return { type: "BOARD_MEASUREMENT_SELECT", payload: query };
};

export const boardMmSelect = (query) => {
  return { type: "BOARD_MM_SELECT", payload: query };
};

export const createBoard = (formValues) => async (dispatch) => {
  const response = await axios.post(`${endPoint}/boards`, formValues);
  dispatch({ type: "CREATE_BOARD", payload: response.data });
  history.replace("/boards");
};

export const deleteBoard = (id) => async (dispatch) => {
  await axios.delete(`${endPoint}/boards/${id}`);
  dispatch({ type: "DELETE_BOARD", payload: id });
  history.replace("/boards");
};

//---------------------------------------- DOORS ------------------------------

export const fetchDoors = () => async (dispatch) => {
  const response = await axios.get(`${endPoint}/doors`);
  dispatch({ type: "FETCH_DOORS", payload: response.data });
};

export const fetchDoor = (id) => async (dispatch) => {
  const response = await axios.get(`${endPoint}/doors/${id}`);
  dispatch({ type: "FETCH_DOOR", payload: response.data });
};

export const updateDoor = (id, formValues) => async (dispatch) => {
  const updatedForm = updateForm(formValues);
  const response = await axios.patch(`${endPoint}/doors/${id}`, updatedForm);
  dispatch({ type: "UPDATE_DOOR", payload: response.data });
  history.replace("/doors");
};

export const doorMeasurementSelect = (query) => {
  return { type: "DOOR_MEASUREMENT_SELECT", payload: query };
};

export const doorMmSelect = (query) => {
  return { type: "DOOR_MM_SELECT", payload: query };
};

export const createDoor = (formValues) => async (dispatch) => {
  const response = await axios.post(`${endPoint}/doors`, formValues);
  dispatch({ type: "CREATE_DOOR", payload: response.data });
  history.replace("/doors");
};

export const deleteDoor = (id) => async (dispatch) => {
  await axios.delete(`${endPoint}/doors/${id}`);
  dispatch({ type: "DELETE_DOOR", payload: id });
  history.replace("/doors");
};
