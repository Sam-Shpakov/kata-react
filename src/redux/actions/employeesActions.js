import constants from '../constants';

import { fetchEmployees } from '../../services';
import {
  formatServerDataToData,
  addItemData,
  deleteItemData,
} from '../../utils/middleware-data-employees';

const setLoading = () => ({
  type: constants.employees.GET_DATA_LOADING,
});

const setError = (error) => ({
  type: constants.employees.GET_DATA_ERROR,
  error: error.message || 'Unexpected Error!!!',
});

const setSuccess = (data) => ({
  type: constants.employees.GET_DATA_SUCCESS,
  payload: data,
});

const getData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const response = await fetchEmployees();
    dispatch(setSuccess(formatServerDataToData(response.data)));
  } catch (e) {
    dispatch(setError(e));
  }
};

const addItem = ({ data, name }) => {
  const newData = addItemData(data, name);
  return {
    type: constants.employees.GET_DATA_SUCCESS,
    payload: newData,
  };
};

const deleteItem = ({ data, id }) => {
  const newData = deleteItemData(data, id);
  return {
    type: constants.employees.GET_DATA_SUCCESS,
    payload: newData,
  };
};

export default { getData, addItem, deleteItem };
