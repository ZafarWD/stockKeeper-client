import axios from "axios";
import history from '../history';
import updateForm from "../utils/updateStocks";

const endPoint = "http://localhost:4001";

export const fetchPlywoods = () => async(dispatch) => {
    const response = await axios.get(`${endPoint}/plywoods`);
    dispatch({ type: "FETCH_PLYWOODS", payload: response.data });
};

export const fetchPlywood = (id) => async dispatch => {
    const response = await axios.get(`${endPoint}/plywoods/${id}`);
    dispatch({ type: "FETCH_PLYWOOD", payload: response.data });
};

export const updatePlywood = (id, formValues) => async dispatch => {
    const updatedForm = updateForm(formValues);
    const response = await axios.patch(`${endPoint}/plywoods/${id}`, updatedForm);
    dispatch({ type: "UPDATE_PLYWOOD", payload: response.data });
    history.push('/');
}

export const plyMeasurementSelect = (query) => {
    return { type: "PLY_MEASUREMENT_SELECT", payload: query };
};

export const plyMmSelect = (query) => {
    return { type: "PLY_MM_SELECT", payload: query };
};

export const createPlywood = (formValues) => async(dispatch) => {
    const response = await axios.post(
        `${endPoint}/plywoods`,
        formValues
    );
    dispatch({ type: "CREATE_PLYWOOD", payload: response.data });
    history.push('/plywoods');
};

export const deletePlywood = (id) => async dispatch => {
    await axios.delete(`${endPoint}/plywoods/${id}`);
    dispatch({ type: "DELETE_PLYWOOD", payload: id });
    history.replace('/');
}