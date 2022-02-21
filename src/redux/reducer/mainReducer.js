import constants from '../constants';

const defaultState = {
  error: '',
  loading: false,
  data: [],
};

const mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.employees.GET_DATA_LOADING:
      return {
        ...state,
        error: '',
        loading: true,
      };
    case constants.employees.GET_DATA_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case constants.employees.GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: '',
        loading: false,
      };
    default:
      return state;
  }
};

export default mainReducer;
